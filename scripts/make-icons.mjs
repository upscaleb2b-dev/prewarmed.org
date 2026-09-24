#!/usr/bin/env node
/**
 * Generates the prewarmed.org flame favicons.
 *
 * There is no ImageMagick, librsvg or sharp in this environment, so this
 * rasterises the flame itself: cubic beziers are flattened to polygons,
 * filled with a 4x supersampled even-odd scanline test, then encoded to PNG
 * (zlib + CRC32) and wrapped into an ICO. No dependencies.
 *
 *   node scripts/make-icons.mjs
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';

const OUTER = '#FF6A1F';
const INNER = '#FFB347';

// Flame on a 32x32 grid. Asymmetric: smooth right edge, kinked left, the way
// a flame actually reads. [x0,y0, c1x,c1y, c2x,c2y, x1,y1] per segment.
const outerPath = [
  [16, 2.5, 19.5, 7.5, 23, 12.5, 23, 17.5],
  [23, 17.5, 23, 23.7, 19.9, 29, 16, 29],
  [16, 29, 12.1, 29, 9, 23.7, 9, 17.5],
  [9, 17.5, 9, 13.4, 11.6, 11.2, 13.4, 8.2],
  [13.4, 8.2, 14.4, 6.5, 15.3, 4.6, 16, 2.5],
];
const innerPath = [
  [16.9, 12.6, 18.2, 14.8, 20.1, 17.4, 20.1, 20.4],
  [20.1, 20.4, 20.1, 23.8, 18.3, 26.2, 16, 26.2],
  [16, 26.2, 13.7, 26.2, 11.9, 24.1, 11.9, 21.3],
  [11.9, 21.3, 11.9, 19.2, 13.3, 18, 14.3, 16.5],
  [14.3, 16.5, 15.1, 15.4, 16.2, 14.1, 16.9, 12.6],
];

const svgPath = (segs) =>
  `M${segs[0][0]} ${segs[0][1]}` +
  segs.map((s) => `C${s[2]} ${s[3]} ${s[4]} ${s[5]} ${s[6]} ${s[7]}`).join('') + 'Z';

function flatten(segs, steps = 48) {
  const pts = [];
  for (const [x0, y0, c1x, c1y, c2x, c2y, x1, y1] of segs) {
    for (let i = 0; i < steps; i++) {
      const t = i / steps, u = 1 - t;
      pts.push([
        u * u * u * x0 + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * x1,
        u * u * u * y0 + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * y1,
      ]);
    }
  }
  return pts;
}

const inside = (poly, x, y) => {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

function render(size) {
  const outer = flatten(outerPath), inner = flatten(innerPath);
  const [orr, og, ob] = hex(OUTER), [ir, ig, ib] = hex(INNER);
  const S = 4, s = size / 32, px = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let o = 0, n = 0;
      for (let sy = 0; sy < S; sy++) {
        for (let sx = 0; sx < S; sx++) {
          const gx = (x + (sx + 0.5) / S) / s, gy = (y + (sy + 0.5) / S) / s;
          if (inside(outer, gx, gy)) { o++; if (inside(inner, gx, gy)) n++; }
        }
      }
      const tot = S * S, cov = o / tot;
      if (cov === 0) continue;
      const nf = n / Math.max(o, 1);
      const i = (y * size + x) * 4;
      px[i] = Math.round(orr + (ir - orr) * nf);
      px[i + 1] = Math.round(og + (ig - og) * nf);
      px[i + 2] = Math.round(ob + (ib - ob) * nf);
      px[i + 3] = Math.round(cov * 255);
    }
  }
  return px;
}

// -- PNG ----------------------------------------------------------------
const CRC = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c; }
  return (b) => { let c = -1; for (const x of b) c = t[(c ^ x) & 0xff] ^ (c >>> 8); return (c ^ -1) >>> 0; };
})();

const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(td));
  return Buffer.concat([len, td, crc]);
};

function png(size, px) {
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0)),
  ]);
}

// -- ICO (PNG-embedded, Vista+) ----------------------------------------
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

// -- write --------------------------------------------------------------
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path d="${svgPath(outerPath)}" fill="${OUTER}"/>
  <path d="${svgPath(innerPath)}" fill="${INNER}"/>
</svg>
`;
writeFileSync('public/favicon.svg', svg);

const sizes = [16, 32, 48, 180, 512];
const made = {};
for (const s of sizes) made[s] = png(s, render(s));
writeFileSync('public/favicon-32.png', made[32]);
writeFileSync('public/apple-touch-icon.png', made[180]);
writeFileSync('public/icon-512.png', made[512]);
writeFileSync('public/favicon.ico', ico([16, 32, 48].map((s) => ({ size: s, data: made[s] }))));

writeFileSync('src/components/flame-path.json', JSON.stringify({ outer: svgPath(outerPath), inner: svgPath(innerPath) }, null, 2));

console.log('favicon.svg, favicon.ico (16/32/48), favicon-32.png, apple-touch-icon.png, icon-512.png');
for (const s of sizes) console.log(`  ${s}px → ${made[s].length} bytes`);
