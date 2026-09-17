#!/usr/bin/env node
/**
 * Screen dropped-domain candidates for age, availability and reputation.
 *
 * Implements stages B to F of docs/plan/24-AGED-DOMAIN-SOURCING.md section 4,
 * cheapest filter first, so the metered reputation call only ever sees the
 * few candidates that survived the free ones.
 *
 * Run this from a machine that can reach the internet and that has its own
 * resolver (the build environment for prewarmed.org cannot: egress returns 403
 * and the resolver returns NXDOMAIN for every Spamhaus zone, including the
 * dbltest.com test point).
 *
 *   node scripts/score-dropped-domains.mjs candidates.txt > d5-candidates.csv
 *
 * Stage A, producing candidates.txt, is a zone diff and is not this script:
 *
 *   zcat com.zone.$YESTERDAY.gz | awk '$4=="NS"{print tolower($1)}' | sort -u > y
 *   zcat com.zone.$TODAY.gz     | awk '$4=="NS"{print tolower($1)}' | sort -u > t
 *   comm -23 y t > candidates.txt      # delegated yesterday, gone today
 *
 * Environment:
 *   SPAMHAUS_DQS_KEY    Data Query Service key. Required for stage E.
 *   SPAMHAUS_REP_URL    Reputation endpoint template containing {domain}.
 *                       Take the exact path from your Spamhaus API contract
 *                       documentation. This script deliberately does not guess
 *                       one, because a wrong default would produce silent
 *                       all-zero output.
 *   SPAMHAUS_REP_TOKEN  Bearer token for SPAMHAUS_REP_URL.
 *
 * Output columns match the D5 extension in doc 24 section 7.
 * No dependencies. Node 18 or later.
 */

import dnsPromises from 'node:dns/promises';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { Resolver } from 'node:dns/promises';
import path from 'node:path';

const UA = 'prewarmed.org domain screen (+https://prewarmed.org)';
const BOOTSTRAP = 'https://data.iana.org/rdap/dns.json';
const CACHE = '.cache/rdap-bootstrap.json';

const log = (...a) => console.error(...a);

/* ------------------------------------------------------------------ args - */

function parseArgs(argv) {
  const opts = {
    input: null,
    minAgeYears: 10,
    maxAgeYears: 40,
    concurrency: 4,
    repBudget: 0,
    resolvers: [],
    selfTest: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--self-test') opts.selfTest = true;
    else if (a === '--min-age-years') opts.minAgeYears = Number(argv[++i]);
    else if (a === '--max-age-years') opts.maxAgeYears = Number(argv[++i]);
    else if (a === '--concurrency') opts.concurrency = Number(argv[++i]);
    else if (a === '--rep-budget') opts.repBudget = Number(argv[++i]);
    else if (a === '--resolver') opts.resolvers.push(argv[++i]);
    else if (a.startsWith('--')) throw new Error(`unknown flag ${a}`);
    else opts.input = a;
  }
  return opts;
}

/* ------------------------------------------------------- pure helpers ---- */

/** Deletions come out of a zone diff as FQDNs with a trailing dot, any case. */
export function normaliseDomain(line) {
  const d = line.trim().toLowerCase().replace(/\.$/, '');
  if (!d || d.startsWith('#')) return null;
  if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/.test(d)) return null;
  return d;
}

/**
 * Availability and claimed age from an RDAP response.
 *
 * The registration event gives the date of the CURRENT registration, not the
 * true first registration: a name that dropped and was re-registered reads as
 * young. Doc 24 section 4 stage C. Treat this as a lower bound and settle age
 * at stage D.
 */
export function readRdap(body, status) {
  if (status === 404) return { available: true, rdapCreatedAt: null, statuses: [] };
  if (status !== 200 || !body) return { available: null, rdapCreatedAt: null, statuses: [] };
  const statuses = (body.status || []).map((s) => String(s).toLowerCase());
  const reg = (body.events || []).find((e) => e.eventAction === 'registration');
  return {
    // Still in the registry, so not registrable, whatever the status says.
    available: false,
    rdapCreatedAt: reg?.eventDate ? reg.eventDate.slice(0, 10) : null,
    statuses,
  };
}

/** A name in redemption or pending delete is coming, but is not buyable now. */
export function isHeldNotAvailable(statuses) {
  return statuses.some((s) => /redemption|pending ?delete|pendingdelete/.test(s));
}

export function yearsBetween(isoDate, now = new Date()) {
  if (!isoDate) return null;
  const then = new Date(isoDate);
  if (Number.isNaN(then.getTime())) return null;
  return (now - then) / (365.2425 * 24 * 3600 * 1000);
}

/**
 * Spamhaus answers a refused query with 127.255.255.252/254/255: bad query,
 * blocked resolver, or over the free-use limit. Treating those as "not listed"
 * silently passes every candidate, which is the trap in doc 24 section 4
 * stage E. They are errors, not answers.
 */
export function readDnsblAnswer(addresses) {
  const refusals = addresses.filter((a) => /^127\.255\.255\.(252|253|254|255)$/.test(a));
  if (refusals.length) {
    const err = new Error(`resolver refused by Spamhaus (${refusals.join(',')})`);
    err.fatal = true;
    throw err;
  }
  const hits = addresses.filter((a) => a.startsWith('127.0.1.'));
  return { listed: hits.length > 0, codes: hits };
}

export function toCsvRow(values) {
  return values
    .map((v) => {
      if (v === null || v === undefined) return '';
      const s = String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    })
    .join(',');
}

/* --------------------------------------------------------------- rdap ---- */

let bootstrapCache = null;

async function loadBootstrap() {
  if (bootstrapCache) return bootstrapCache;
  try {
    bootstrapCache = JSON.parse(await readFile(CACHE, 'utf8'));
    return bootstrapCache;
  } catch {
    /* not cached yet */
  }
  const res = await fetch(BOOTSTRAP, { headers: { 'user-agent': UA } });
  if (!res.ok) throw new Error(`rdap bootstrap ${res.status}`);
  bootstrapCache = await res.json();
  await mkdir(path.dirname(CACHE), { recursive: true });
  await writeFile(CACHE, JSON.stringify(bootstrapCache));
  return bootstrapCache;
}

export function rdapBaseFor(bootstrap, domain) {
  const tld = domain.slice(domain.lastIndexOf('.') + 1);
  for (const [tlds, urls] of bootstrap.services || []) {
    if (tlds.includes(tld)) return urls[0].replace(/\/$/, '');
  }
  return null;
}

async function rdapLookup(domain) {
  const base = rdapBaseFor(await loadBootstrap(), domain);
  if (!base) return { available: null, rdapCreatedAt: null, statuses: [], note: 'no rdap service' };
  const res = await fetch(`${base}/domain/${domain}`, {
    headers: { 'user-agent': UA, accept: 'application/rdap+json' },
  });
  if (res.status === 429) {
    const err = new Error('rdap rate limited');
    err.retryable = true;
    throw err;
  }
  const body = res.status === 200 ? await res.json() : null;
  return readRdap(body, res.status);
}

/* ---------------------------------------------------------------- dbl ---- */

function makeResolver(servers) {
  if (!servers.length) return dnsPromises;
  const r = new Resolver();
  r.setServers(servers);
  return r;
}

async function dblLookup(resolver, domain, key) {
  if (!key) return { listed: null, codes: [], note: 'no DQS key' };
  try {
    const addrs = await resolver.resolve4(`${domain}.${key}.dbl.dq.spamhaus.net`);
    return readDnsblAnswer(addrs);
  } catch (e) {
    if (e.fatal) throw e;
    if (e.code === 'ENOTFOUND' || e.code === 'ENODATA') return { listed: false, codes: [] };
    throw e;
  }
}

/* --------------------------------------------------------- reputation ---- */

async function repLookup(domain) {
  const tpl = process.env.SPAMHAUS_REP_URL;
  if (!tpl) throw new Error('SPAMHAUS_REP_URL is not set: see the header comment');
  const res = await fetch(tpl.replace('{domain}', encodeURIComponent(domain)), {
    headers: {
      'user-agent': UA,
      accept: 'application/json',
      ...(process.env.SPAMHAUS_REP_TOKEN
        ? { authorization: `Bearer ${process.env.SPAMHAUS_REP_TOKEN}` }
        : {}),
    },
  });
  if (res.status === 404) return { score: null, dimensions: {}, deactivatedTs: null, note: 'no record' };
  if (!res.ok) throw new Error(`reputation ${res.status} for ${domain}`);
  return readRep(await res.json());
}

/**
 * Field names vary between API versions, so read defensively and record what
 * was found rather than assuming a shape. Doc 24 section 8 lists this as one
 * of the things to confirm against the contract documentation.
 */
export function readRep(body) {
  const score = body?.score ?? body?.reputation?.score ?? null;
  const dims = body?.dimensions ?? body?.reputation?.dimensions ?? {};
  const pick = (k) => dims?.[k]?.score ?? dims?.[k] ?? null;
  return {
    score: typeof score === 'number' ? score : null,
    dimensions: {
      smtp: pick('smtp'),
      identity: pick('identity'),
      infra: pick('infra') ?? pick('infrastructure'),
      malware: pick('malware'),
      researcher: pick('researcher') ?? pick('human'),
    },
    deactivatedTs: body?.['deactivated-ts'] ?? body?.deactivated_ts ?? null,
  };
}

/* --------------------------------------------------------------- main ---- */

const COLUMNS = [
  'domain',
  'available',
  'rdap_created_at',
  'rdap_age_years',
  'dbl_listed_pre_registration',
  'dbl_codes',
  'rep_score_pre_registration',
  'rep_dimension_smtp',
  'rep_dimension_identity',
  'rep_dimension_infra',
  'rep_dimension_malware',
  'rep_dimension_researcher',
  'deactivated_ts',
  'note',
];

async function screen(domain, ctx) {
  const rdap = await rdapLookup(domain);
  if (rdap.available === false) {
    const note = isHeldNotAvailable(rdap.statuses) ? 'held: redemption or pending delete' : 'registered';
    return { domain, ...rdap, note, skipped: true };
  }

  // RDAP returned 404, so the age is unknown from here. Carry it forward:
  // an available name has no current registration to date, and true age is
  // stage D, which this script does not do.
  const dbl = await dblLookup(ctx.resolver, domain, ctx.dqsKey);
  if (dbl.listed) return { domain, ...rdap, dbl, note: 'DBL listed', skipped: true };

  if (ctx.repSpent >= ctx.repBudget) {
    return { domain, ...rdap, dbl, note: 'reputation budget spent', skipped: true };
  }
  ctx.repSpent += 1;
  const rep = await repLookup(domain);
  return { domain, ...rdap, dbl, rep, note: rep.note || '' };
}

function emit(r) {
  const ageYears = yearsBetween(r.rdapCreatedAt);
  console.log(
    toCsvRow([
      r.domain,
      r.available,
      r.rdapCreatedAt,
      ageYears === null ? null : ageYears.toFixed(2),
      // Null, never false, when the resolver refused. Doc 24 section 7.
      r.dbl?.listed ?? null,
      r.dbl?.codes?.join(' ') ?? null,
      r.rep?.score ?? null,
      r.rep?.dimensions?.smtp ?? null,
      r.rep?.dimensions?.identity ?? null,
      r.rep?.dimensions?.infra ?? null,
      r.rep?.dimensions?.malware ?? null,
      r.rep?.dimensions?.researcher ?? null,
      r.rep?.deactivatedTs ?? null,
      r.note,
    ]),
  );
}

async function run(opts) {
  if (!opts.input) throw new Error('usage: score-dropped-domains.mjs candidates.txt');
  const raw = await readFile(opts.input, 'utf8');
  const domains = [...new Set(raw.split('\n').map(normaliseDomain).filter(Boolean))];
  log(`${domains.length} candidates`);

  const ctx = {
    resolver: makeResolver(opts.resolvers),
    dqsKey: process.env.SPAMHAUS_DQS_KEY,
    repBudget: opts.repBudget,
    repSpent: 0,
  };
  if (!ctx.dqsKey) log('warning: SPAMHAUS_DQS_KEY unset, the DBL stage will not run');
  if (!opts.repBudget) log('warning: --rep-budget 0, the reputation stage will not run');

  console.log(COLUMNS.join(','));

  let cursor = 0;
  const worker = async () => {
    while (cursor < domains.length) {
      const domain = domains[cursor++];
      try {
        emit(await screen(domain, ctx));
      } catch (e) {
        if (e.fatal) {
          log(`fatal: ${e.message}`);
          process.exit(2);
        }
        emit({ domain, available: null, note: `error: ${e.message}` });
      }
    }
  };
  await Promise.all(Array.from({ length: opts.concurrency }, worker));
  log(`reputation calls spent: ${ctx.repSpent}`);
}

/* ----------------------------------------------------------- self test --- */

function selfTest() {
  const checks = [];
  const eq = (name, got, want) =>
    checks.push([name, JSON.stringify(got) === JSON.stringify(want), got, want]);

  eq('normalise trailing dot', normaliseDomain('EXAMPLE.COM.\n'), 'example.com');
  eq('normalise comment', normaliseDomain('# header'), null);
  eq('normalise bare label', normaliseDomain('localhost'), null);

  eq('rdap 404 is available', readRdap(null, 404), { available: true, rdapCreatedAt: null, statuses: [] });
  eq(
    'rdap 200 reads registration date',
    readRdap({ status: ['client transfer prohibited'], events: [{ eventAction: 'registration', eventDate: '2003-04-11T00:00:00Z' }] }, 200),
    { available: false, rdapCreatedAt: '2003-04-11', statuses: ['client transfer prohibited'] },
  );
  eq('redemption is not available', isHeldNotAvailable(['redemptionperiod']), true);
  eq('pending delete is not available', isHeldNotAvailable(['pending delete']), true);
  eq('active is not held', isHeldNotAvailable(['active']), false);

  eq('dbl hit', readDnsblAnswer(['127.0.1.2']), { listed: true, codes: ['127.0.1.2'] });
  eq('dbl miss', readDnsblAnswer([]), { listed: false, codes: [] });
  let refused = false;
  try {
    readDnsblAnswer(['127.255.255.254']);
  } catch (e) {
    refused = e.fatal === true;
  }
  eq('blocked resolver throws, never reads as clean', refused, true);

  eq(
    'reputation reads nested shape',
    readRep({ reputation: { score: 12.5, dimensions: { smtp: { score: 4 }, infrastructure: 8.5 } }, 'deactivated-ts': 1694563200 }),
    { score: 12.5, dimensions: { smtp: 4, identity: null, infra: 8.5, malware: null, researcher: null }, deactivatedTs: 1694563200 },
  );
  eq('reputation missing score is null', readRep({}).score, null);

  const age = yearsBetween('2003-04-11', new Date('2026-09-17'));
  eq('age in years', Math.round(age), 23);
  eq('age of null', yearsBetween(null), null);

  eq('csv quotes separators', toCsvRow(['a,b', null, 'c"d']), '"a,b",,"c""d"');

  eq(
    'rdap bootstrap picks the service for the tld',
    rdapBaseFor({ services: [[['net'], ['https://x/']], [['com'], ['https://rdap.verisign.com/com/v1/']]] }, 'foo.com'),
    'https://rdap.verisign.com/com/v1',
  );
  eq('rdap bootstrap misses unknown tld', rdapBaseFor({ services: [] }, 'foo.zz'), null);

  let failed = 0;
  for (const [name, ok, got, want] of checks) {
    if (!ok) {
      failed += 1;
      console.error(`FAIL ${name}\n  got  ${JSON.stringify(got)}\n  want ${JSON.stringify(want)}`);
    }
  }
  console.error(`${checks.length - failed}/${checks.length} passed`);
  process.exit(failed ? 1 : 0);
}

const opts = parseArgs(process.argv.slice(2));
if (opts.selfTest) selfTest();
else run(opts).catch((e) => { log(e.message); process.exit(1); });
