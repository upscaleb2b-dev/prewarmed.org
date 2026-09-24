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

## Planning documents

The research and site plan live in [`docs/plan/`](docs/plan/), numbered in the order they were written, from `01-DECISIONS.md` through [`24-AGED-DOMAIN-SOURCING.md`](docs/plan/24-AGED-DOMAIN-SOURCING.md). Read [`docs/EDITORIAL-STANDARDS.md`](docs/EDITORIAL-STANDARDS.md) before writing any page copy.

## Not built yet

`/for/<sequencer>/` integration pages, `/fix/*` tool-failure landings, `/cold-email-infrastructure/`, `/aged-domains-for-cold-email/`, `/prewarmed-email-accounts/`, blog. The templates and data layer already support them.
