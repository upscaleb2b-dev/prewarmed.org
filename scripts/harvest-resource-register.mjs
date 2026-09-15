#!/usr/bin/env node
/**
 * Harvest a citable-resource register from a site's own sitemap.
 *
 * Run this from a machine that can reach the site (the build environment for
 * prewarmed.org cannot reach warminboxes.com: egress policy returns 403).
 *
 *   node scripts/harvest-resource-register.mjs https://warminboxes.com \
 *     > research-data/registers/warminboxes-resources.csv
 *
 * Output columns match docs/plan/22-RESOURCE-REGISTER.md section 3.
 * No dependencies. Node 18 or later.
 */

const ORIGIN = (process.argv[2] || 'https://warminboxes.com').replace(/\/$/, '');
const CONCURRENCY = 4;
const DELAY_MS = 150;
const UA = 'prewarmed.org resource register (+https://prewarmed.org)';

const log = (...a) => console.error(...a);

async function get(url) {
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function locs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1]);
}

async function collectSitemap(url, seen = new Set()) {
  if (seen.has(url)) return [];
  seen.add(url);
  let xml;
  try {
    xml = await get(url);
  } catch (e) {
    log(`  skip ${url}: ${e.message}`);
    return [];
  }
  const found = locs(xml);
  // A sitemap index points at other sitemaps.
  if (/<sitemapindex/i.test(xml)) {
    const out = [];
    for (const child of found) out.push(...(await collectSitemap(child, seen)));
    return out;
  }
  return found;
}

async function discoverUrls() {
  const candidates = [
    `${ORIGIN}/sitemap.xml`,
    `${ORIGIN}/sitemap_index.xml`,
    `${ORIGIN}/sitemap-index.xml`,
  ];
  // robots.txt often names the real one.
  try {
    const robots = await get(`${ORIGIN}/robots.txt`);
    for (const m of robots.matchAll(/^\s*sitemap:\s*(\S+)/gim)) candidates.unshift(m[1]);
  } catch {
    log('  no robots.txt');
  }
  const seen = new Set();
  const urls = new Set();
  for (const c of [...new Set(candidates)]) {
    for (const u of await collectSitemap(c, seen)) urls.add(u.split('#')[0]);
  }
  return [...urls].filter((u) => u.startsWith(ORIGIN)).sort();
}

const tag = (html, re) => {
  const m = html.match(re);
  return m ? m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';
};

function classify(pathname, title) {
  const p = pathname.toLowerCase();
  const t = (title || '').toLowerCase();
  if (p === '/' || p === '') return 'homepage';
  if (/^\/blog\/?$/.test(p) || /^\/resources\/?$/.test(p)) return 'index';
  if (p.startsWith('/blog/')) return 'article';
  if (p.startsWith('/reviews/')) return 'review';
  if (/^\/reviews\/?$/.test(p)) return 'index';
  if (/(playbook|guide|how-to|tutorial)/.test(p)) return 'playbook';
  if (/(pricing|buy|order|checkout|plans)/.test(p)) return 'commercial';
  if (/(checker|generator|tester|validator|lookup|analyzer|analyser|calculator|tool)/.test(p)) return 'tool';
  if (/(checker|generator|tester|free tool)/.test(t)) return 'tool';
  if (/(google-workspace|microsoft|m365|azure|inbox|domain)/.test(p)) return 'product';
  return 'other';
}

const csv = (v) => `"${String(v ?? '').replace(/"/g, '""').replace(/\s+/g, ' ').trim()}"`;

async function describe(url) {
  try {
    const html = await get(url);
    const title = tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const desc =
      tag(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
      tag(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
    const h1 = tag(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const words = html
      .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length;
    const { pathname } = new URL(url);
    return { url, pathname, type: classify(pathname, title), title, h1, desc, words, error: '' };
  } catch (e) {
    const { pathname } = new URL(url);
    return { url, pathname, type: 'error', title: '', h1: '', desc: '', words: 0, error: e.message };
  }
}

async function pool(items, n, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
        if (DELAY_MS) await new Promise((r) => setTimeout(r, DELAY_MS));
      }
    })
  );
  return out;
}

log(`Discovering URLs on ${ORIGIN} ...`);
const urls = await discoverUrls();
log(`Found ${urls.length} URLs. Fetching metadata ...`);
const rows = await pool(urls, CONCURRENCY, describe);

console.log(
  ['url', 'path', 'type', 'title', 'h1', 'meta_description', 'word_count', 'error']
    .map(csv)
    .join(',')
);
for (const r of rows) {
  console.log(
    [r.url, r.pathname, r.type, r.title, r.h1, r.desc, r.words, r.error].map(csv).join(',')
  );
}

const counts = rows.reduce((a, r) => ((a[r.type] = (a[r.type] || 0) + 1), a), {});
log('\nBy type:');
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) log(`  ${k.padEnd(12)} ${v}`);
log('\nNext: fill job_question, output_states and known_gaps for every tool row.');
log('Those three columns are what make the check guides substantial (16-TOOLS-HUB.md section 3).');
