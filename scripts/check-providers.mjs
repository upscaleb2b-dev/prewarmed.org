#!/usr/bin/env node
/**
 * Refuses a live build while any provider in the directory is unchecked.
 *
 * src/data/providers.js deliberately carries nulls for every company nobody
 * has verified, and the pages render "not checked" rather than a guess. That
 * is safe to preview and not safe to publish: a directory with visible gaps
 * invites the reader to assume the gaps are the competitor's fault.
 *
 *   node scripts/check-providers.mjs          warn only (preview builds)
 *   node scripts/check-providers.mjs --live   fail unless every entry is checked
 */
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const { providers, unverified } = await import(pathToFileURL(resolve('src/data/providers.js')).href);
const live = process.argv.includes('--live');

if (unverified.length === 0) {
  console.log(`✓ all ${providers.length} providers checked`);
  process.exit(0);
}

const names = unverified.map((p) => p.name).join(', ');
const msg = [
  '',
  `  ${unverified.length} of ${providers.length} providers are UNCHECKED: ${names}`,
  '',
  '  Check each against that company\'s own site, then set on its entry:',
  '    verified: true, checkedOn: "<YYYY-MM-DD>", checkedBy: "<who>"',
  '  plus the six criteria fields. Never fill these in from memory.',
  '',
].join('\n');

if (live) {
  console.error(`\x1b[31m✗ refusing to build live.\x1b[0m${msg}`);
  process.exit(1);
}
console.warn(`\x1b[33m⚠ preview build with unchecked providers.\x1b[0m${msg}`);
