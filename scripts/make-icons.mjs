#!/usr/bin/env node
/**
 * Renders the favicons from public/favicon.svg.
 *
 * This used to rasterise the mark by hand: beziers flattened to polygons and
 * filled with a scanline test, no dependencies. That worked while the mark
 * was two filled paths. The shield is a stroked outline, and stroking is a
 * different problem from filling, so rather than reimplement line joins and
 * caps this now renders the real SVG in a browser, which is the thing that
 * already knows how.
 *
 * Playwright is deliberately NOT a dependency of this project: the icons
 * change about once a year and putting a browser in every install to
 * regenerate them is a bad trade. Same arrangement as make-og.mjs. Run it
 * with a throwaway install:
 *
 *   npm i --no-save playwright && node scripts/make-icons.mjs
 *
 * Or point it at a Chromium you already have:
 *
 *   CHROME=/path/to/chrome node scripts/make-icons.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg', 'utf8');
const SIZES = [16, 32, 48, 180, 512];

const { chromium } = await import(process.env.CHROME ? 'playwright-core' : 'playwright');
const browser = await chromium.launch(
  process.env.CHROME ? { executablePath: process.env.CHROME, args: ['--no-sandbox'] } : {}
);

const made = {};
for (const size of SIZES) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  // transparent background, and the SVG stretched to exactly the viewport so
  // the raster is edge to edge rather than letterboxed
  await page.setContent(
    `<style>html,body{margin:0;background:transparent}svg{display:block;width:${size}px;height:${size}px}</style>${svg}`
  );
  made[size] = await page.screenshot({ omitBackground: true });
  await page.close();
}
await browser.close();

/** ICO is a 6-byte header, one 16-byte directory entry per image, then the PNGs. */
function ico(entries) {
  const head = Buffer.alloc(6); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(entries.length, 4);
  let offset = 6 + entries.length * 16;
  const dir = [], body = [];
  for (const { size, data } of entries) {
    const e = Buffer.alloc(16);
    e[0] = size >= 256 ? 0 : size; e[1] = size >= 256 ? 0 : size;
    e[4] = 1; e[6] = 32;
    e.writeUInt32LE(data.length, 8); e.writeUInt32LE(offset, 12);
    dir.push(e); body.push(data); offset += data.length;
  }
  return Buffer.concat([head, ...dir, ...body]);
}

writeFileSync('public/favicon-32.png', made[32]);
writeFileSync('public/apple-touch-icon.png', made[180]);
writeFileSync('public/icon-512.png', made[512]);
writeFileSync('public/favicon.ico', ico([16, 32, 48].map((s) => ({ size: s, data: made[s] }))));

console.log('favicon.ico (16/32/48), favicon-32.png, apple-touch-icon.png, icon-512.png');
