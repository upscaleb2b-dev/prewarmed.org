#!/usr/bin/env node
/**
 * Renders public/og.png (1200x630) for link previews.
 *
 * Uses Chromium rather than hand-rasterising glyphs, so the card carries real
 * typography and the site's own tokens. Playwright is deliberately NOT a
 * dependency of this project — the image changes about once a year and adding
 * a browser to every CI install to regenerate it is a bad trade. Run it with a
 * throwaway install when the card needs changing:
 *
 *   npm i --no-save playwright && node scripts/make-og.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const flame = JSON.parse(readFileSync(new URL('../src/components/flame-path.json', import.meta.url)));
const T = { bg: '#0b0c0f', elev: '#131519', border: '#262a33', text: '#f2f3f5', muted: '#8b929e', accent: '#ff6a1f', accent2: '#ffb347' };

const page = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:${T.bg};color:${T.text};
       font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
       display:flex;flex-direction:column;justify-content:space-between;
       padding:72px 80px;position:relative;overflow:hidden}
  .glow{position:absolute;right:-240px;top:-240px;width:760px;height:760px;border-radius:50%;
        background:radial-gradient(circle,${T.accent}26 0%,transparent 68%)}
  .brand{display:flex;align-items:center;gap:14px;font-size:30px;font-weight:700;letter-spacing:-.02em}
  .brand .dim{color:${T.muted};font-weight:500}
  h1{font-size:82px;line-height:1.02;font-weight:700;letter-spacing:-.035em;max-width:940px}
  h1 .a{color:${T.accent}}
  p{font-size:27px;color:${T.muted};margin-top:24px;max-width:860px;line-height:1.35}
  .bar{display:flex;gap:10px;margin-top:8px}
  .seg{height:10px;border-radius:5px}
  .seg.age{width:330px;background:${T.border}}
  .seg.warm{width:231px;background:${T.accent}}
  .feet{display:flex;justify-content:space-between;align-items:center;font-size:21px;color:${T.muted}}
</style></head><body>
  <div class="glow"></div>
  <div class="brand">
    <svg width="34" height="34" viewBox="0 0 32 32"><path d="${flame.outer}" fill="${T.accent}"/><path d="${flame.inner}" fill="${T.accent2}"/></svg>
    <span>prewarmed<span class="dim">.org</span></span>
  </div>
  <div>
    <h1>51 days of reputation.<br><span class="a">Yours today.</span></h1>
    <p>Prewarmed Google Workspace, Microsoft 365 and Azure inboxes on a domain aged 30 days and warmed 21.</p>
    <div class="bar"><div class="seg age"></div><div class="seg warm"></div></div>
  </div>
  <div class="feet"><span>Aging 30 days &nbsp;·&nbsp; Warming 21 days &nbsp;·&nbsp; Delivered same day</span><span>prewarmed.org</span></div>
</body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const p = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.setContent(page, { waitUntil: 'load' });
const buf = await p.screenshot({ type: 'png' });
writeFileSync(new URL('../public/og.png', import.meta.url), buf);
await browser.close();
console.log(`✓ public/og.png  ${(buf.length / 1024).toFixed(0)} KB`);
