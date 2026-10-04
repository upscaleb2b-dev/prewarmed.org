#!/usr/bin/env node
/**
 * Every link that leaves the site must open in a new tab.
 *
 * The order completes on warminboxes.com, so a link that navigates away
 * throws out the tab the visitor was reading — and with it the GA4 session
 * and any chance they come back to the page that was persuading them. Opening
 * in a new tab keeps this side alive behind the checkout.
 *
 * target="_blank" without rel="noopener" hands the opened page a reference
 * back to this one, so the two are checked together.
 *
 * Runs after `astro build` against dist/, because the attribute lives on the
 * anchor rather than in wi()/ub()/toolUrl() and so cannot be enforced there.
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const HOSTS = /^https:\/\/(?:www\.)?(?:warminboxes|upscaleb2b)\.com/;
const ANCHOR = /<a\b[^>]*href="(https:\/\/[^"]+)"[^>]*>/g;

const files = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
  }
})(DIST);

const bad = [];
let checked = 0;
for (const f of files) {
  const html = readFileSync(f, 'utf8');
  for (const m of html.matchAll(ANCHOR)) {
    if (!HOSTS.test(m[1])) continue;
    checked++;
    const tag = m[0];
    const problems = [];
    if (!tag.includes('target="_blank"')) problems.push('no target="_blank"');
    if (!/rel="[^"]*noopener/.test(tag)) problems.push('no rel="noopener"');
    if (problems.length) bad.push(`${relative(DIST, f)}  ${m[1].split('?')[0]}  — ${problems.join(', ')}`);
  }
}

if (bad.length) {
  console.error(`\n✗ ${bad.length} outbound link(s) do not open in a new tab:\n`);
  for (const b of [...new Set(bad)].slice(0, 20)) console.error('  ' + b);
  if (new Set(bad).size > 20) console.error(`  …and ${new Set(bad).size - 20} more`);
  console.error('\n  Add target="_blank" rel="noopener" to the anchor.\n');
  process.exit(1);
}
console.log(`✓ ${checked} outbound links across ${files.length} pages open in a new tab`);
