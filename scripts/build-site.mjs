#!/usr/bin/env node
/**
 * Wrap the Artifact fragment in docs/mockups/home.html into a standalone
 * index.html that Vercel can serve.
 *
 * The mockup is authored as an Artifact fragment: no doctype, html, head or
 * body tags, because the Artifact platform supplies them at publish time.
 * This script supplies the same skeleton plus real metadata, so the mockup
 * stays the single source of truth and the two cannot drift.
 *
 *   node scripts/build-site.mjs                      review build: noindex, switcher kept
 *   node scripts/build-site.mjs --live --strip-mock  launch build
 *
 * --live        emit index,follow and the canonical. Only once prewarmed.org
 *               is actually attached, otherwise the vercel.app preview gets
 *               indexed and competes with the real domain.
 * --strip-mock  remove the palette switcher, its handlers and its dead CSS.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const SRC = 'docs/mockups/home.html';
const OUT = 'public/index.html';
const args = new Set(process.argv.slice(2));
const live = args.has('--live');
const stripMock = args.has('--strip-mock');

const TITLE = 'What prewarmed means: 30 days aged, 21 days warmed';
const DESC =
  'Prewarmed means 30 days aged, then 21 days warmed. What happens in those 51 days, and what running them yourself costs every replacement cycle.';
const ORIGIN = 'https://prewarmed.org';

let src = readFileSync(SRC, 'utf8');

const styleEnd = src.indexOf('</style>');
if (styleEnd === -1) throw new Error(`No </style> in ${SRC} — fragment shape changed`);

let head = src.slice(0, styleEnd + '</style>'.length);
let body = src.slice(styleEnd + '</style>'.length);

head = head.replace(/<title>[\s\S]*?<\/title>\s*/i, '');

if (stripMock) {
  const before = body.length;
  body = body.replace(/<div class="mockbar">[\s\S]*?<\/div>\s*<\/div>\s*/, '');
  if (body.length === before) throw new Error('mockbar markup not matched — check the fragment');
  body = body.replace(
    /\s*var body=document\.body,g=document\.getElementById\('pal-green'\)[\s\S]*?b\.addEventListener\('click',function\(\)\{setPal\('blue'\);\}\);/,
    "\n  document.body.setAttribute('data-palette','green');"
  );
  head = head.replace(/\.mockbar\{[\s\S]*?\.dot\.g\{[^\n]*\n/, '');
}

const robots = live
  ? '<meta name="robots" content="index, follow, max-image-preview:large">\n<link rel="canonical" href="' + ORIGIN + '/">'
  : '<meta name="robots" content="noindex, nofollow">';

const out = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${TITLE}</title>
<meta name="description" content="${DESC}">
${robots}
<meta property="og:type" content="website">
<meta property="og:site_name" content="prewarmed.org">
<meta property="og:url" content="${ORIGIN}/">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESC}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${DESC}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<style>:root{color-scheme:light dark}img{max-width:100%;height:auto}[hidden]{display:none!important}</style>
${head}
</head>
<body>
${body.trim()}
</body>
</html>
`;

writeFileSync(OUT, out);
console.log(
  `${OUT} written from ${SRC} · ${(out.length / 1024).toFixed(1)}KB · ` +
    `${live ? 'indexable' : 'NOINDEX (review build)'}${stripMock ? ' · switcher stripped' : ' · switcher kept'}`
);
