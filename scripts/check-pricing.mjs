#!/usr/bin/env node
/**
 * Refuses a live build while pricing is unverified.
 *
 * Every price on this site renders from src/data/pricing.json. The figures
 * currently in it came from a build document, not from warminboxes.com, so
 * they are flagged unverified. Publishing prices that turn out to be wrong is
 * worse than publishing none: it is a chargeback and an Ads-disapproval risk.
 *
 *   node scripts/check-pricing.mjs          warn only (preview builds)
 *   node scripts/check-pricing.mjs --live   fail unless _verified is true
 */
import { readFileSync } from 'node:fs';

const p = JSON.parse(readFileSync('src/data/pricing.json', 'utf8'));
const live = process.argv.includes('--live');

if (p._verified === true) {
  console.log(`✓ pricing verified by ${p._confirmedBy ?? 'unknown'} on ${p._confirmedAt ?? 'unknown date'}`);
  process.exit(0);
}

const msg = [
  'pricing.json is marked UNVERIFIED.',
  'Confirm every figure against warminboxes.com, then set:',
  '  "_verified": true, "_confirmedBy": "<name>", "_confirmedAt": "<YYYY-MM-DD>"',
].join('\n  ');

if (live) {
  console.error(`\n✗ Refusing a live build.\n  ${msg}\n`);
  process.exit(1);
}
console.warn(`\n⚠ ${msg}\n  Preview build continuing. Use "npm run build:live" for production.\n`);
