# prewarmed.org

Astro site. 22 routes, zero client JS except two calculators, static output.

```bash
npm install
npm run dev          # localhost:4321
npm run build        # preview build — warns on unverified pricing
npm run build:live   # production — REFUSES to build while pricing is unverified
```

## Before launch — blocking

| # | Item | Where |
|---|---|---|
| 1 | **Verify every price** against warminboxes.com, then set `_verified: true`, `_confirmedBy`, `_confirmedAt` | `src/data/pricing.json` |
| 2 | Real legal copy — Ads approval needs all three and the refund terms must match reality | `src/pages/{privacy,terms,refund-policy}.astro` |
| 3 | WhatsApp link | `site.whatsapp` in `src/data/site.js` |
| 4 | Named author/reviewer + quantified operator credentials | `src/pages/about.astro` |
| 5 | Wire the contact form to CRM/Slack, add Turnstile, fire `lead_submit` on `/thanks/` | `src/pages/contact.astro` |
| 6 | Remove `Disallow: /` once the domain is attached | `public/robots.txt` |
| 7 | Expand product body copy to 700+ unique words each (currently 320–550) | `src/data/products.js` |

`npm run build:live` enforces #1. The rest are on you.

## Architecture

Everything renders from data, so adding a product or a tool is a data change, not a template change.

| File | Drives |
|---|---|
| `src/data/products.js` | The six BOFU pages via `src/pages/[slug].astro`. **Copy lives here, not in templates** — keeps it reviewable in one diff and stops pages becoming near-duplicates. |
| `src/data/tools.json` | Nav mega menu, footer column, `/tools/` hub, inline callouts. All 31 WarmInboxes tools plus 2 native, from the site export of 2026-09-16. |
| `src/data/pricing.json` | Every price on every page. Single source of truth. |
| `src/data/site.js` | Disclosure text, nav, and the `wi()` / `toolUrl()` UTM builders. |

## Rules the code enforces

- **All outbound links go through `wi()` or `toolUrl()`.** Never hand-write a warminboxes.com URL — it arrives unattributed.
- **Brand anchors only.** "Get inboxes", "Warm Inboxes", tool names. Never "buy prewarmed inboxes" as anchor text: you own both domains, and keyword-rich anchors between them is the classic private-network footprint.
- **The disclosure line ships in the footer of every page.** Required for Ads policy and it is the honest thing.
- **One inline `<ToolCallout>` per page**, never a wall of them.

## Palettes

`data-palette` on `<body>`, set per page via the `palette` prop on `Base.astro`. Default `ember` (matches the Warm Inboxes mark). `green` and `blue` are the research-desk alternates and are fully defined — change the default in `Base.astro` to switch the whole site.

## Not built yet

`/for/<sequencer>/` integration pages, `/fix/*` tool-failure landings, `/cold-email-infrastructure/`, `/aged-domains-for-cold-email/`, `/prewarmed-email-accounts/`, blog. The templates and data layer already support them.

## Deploying

The build is a plain static `dist/`, so it runs on either host. Both configs
are kept in the repo because a redirect added to one and not the other fails
silently on the host that cannot see it.

| | Vercel | Cloudflare (Workers static assets) |
|---|---|---|
| Config | `vercel.json` | `wrangler.jsonc`, `public/_redirects`, `public/_headers` |
| Build command | `npm run build` | `npm run build` |
| Output directory | `dist` | `dist` (via `wrangler.jsonc`) |
| Node version | repo default | `.nvmrc` (22) |

### Cloudflare, first time

The live project is a **Worker serving static assets**, not a Pages project —
`Workers & Pages → prewarmed-org`. Its config is `wrangler.jsonc`, which points
at `dist/` and needs no Worker script.

In the dashboard, under **Settings → Builds**, all three must be set:

| Field | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Branch control | the branch being shipped |

**Build command is the one that breaks silently.** Left as `None`, wrangler
deploys whatever `dist/` it finds — which on a clean checkout is nothing — and
the last good deploy keeps serving. The symptom is an old site with green
builds.

Verify a config change locally before pushing it:

```
npm run build && npx wrangler deploy --dry-run
```

### Before the domain goes live

- `public/robots.txt` still carries `Disallow: /`. Delete that line or nothing
  gets indexed.
- `src/data/pricing.json` is `_verified: false`, and `npm run build:live`
  refuses to build until it is confirmed. `npm run build` (preview) ignores it.
- `src/data/providers.js` has four unchecked competitors; `build:live` blocks
  on those too.
