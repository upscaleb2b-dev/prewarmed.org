# 05. Technical specification

## 1. Stack

Astro 5 with MDX content collections, statically built, deployed on Vercel. Two serverless functions, described in section 7, for the two tools that need a network lookup. Everything else is static HTML.

**Why Astro rather than hand-written HTML.** At 169 URLs with five page templates, the templating saves more time than it costs in week one. Three things make the difference structural rather than a preference:

1. Charts are generated from CSV at build time. The rule "no number is typed into a chart by hand" is unenforceable without a build step.
2. The content schema in `04-CONTENT-MODEL.md` turns editorial "musts" into build failures. Hand-written HTML cannot fail a build for a missing reviewer.
3. Content lives in Markdown, so review happens in pull requests with a diff, which is what makes the reviewer role in the editorial standards workable.

**Why not a CMS.** A headless CMS moves review out of pull requests and makes the analysis scripts, the chart CSVs and the prose live in different places with different histories. The reproducibility claim on the research pages depends on all three being in one commit.

**Cost of the choice.** One engineer, roughly three weeks to first deploy with templates and linters, then a day or two per month. A non-technical editor needs either a comfortable Markdown workflow or a lightweight editing interface. If neither is available, revisit before week 2, not after 40 pages exist.

## 2. Repository layout

```
/
  docs/                      Planning documents (this set)
  src/
    content/                 Collections per 04-CONTENT-MODEL.md
    components/              MDX components (Fig, Stat, Cite, Term, Decision, ...)
    layouts/                 article, report, dataset, tool, glossary, trust, home
    pages/                   Route files, mostly thin wrappers over collections
    lib/
      charts/                CSV to SVG generation
      schema/                schema.org emitters
      links/                 page ID resolution and link graph
      seo/                   title, description, canonical, OG
    styles/                  Tokens and layers per 06-DESIGN-SYSTEM.md
  research-data/
    raw/                     Never committed. .gitignored and enforced in CI.
    clean/                   Pseudonymised dN.csv, committed
    analysis/rN/             One directory per report: script, output tables, README
    charts/                  Chart CSVs, one per figure, committed
    signoff/                 One signed file per report version
  scripts/
    lint-content.mjs         Banned phrases, em-dashes, unsourced numbers, placeholders
    lint-links.mjs           Link graph rules, orphans, broken page IDs
    lint-freshness.mjs       lastVerified against verifyEveryDays
    build-charts.mjs         CSV to SVG
    check-tool-parity.mjs    Tool output against the tables in prose
    og.mjs                   OG image generation
  redirects.json
  .github/workflows/ci.yml
```

`research-data/raw/` is in `.gitignore` and CI additionally fails if any file appears under it, because a gitignore is one careless `git add -f` away from publishing customer data.

## 3. Build pipeline

Ordered, and each step fails the build rather than warning:

1. **Schema validation.** Astro content collections validate frontmatter against the zod schemas.
2. **Chart generation.** `build-charts.mjs` reads every chart CSV referenced by a report, renders inline SVG, and stamps n, date range and dataset ID into the image. A referenced CSV that does not exist fails the build. A CSV with fewer rows than the declared n fails the build.
3. **Content linting.** See section 4.
4. **Link graph validation.** See section 5.
5. **Freshness check.** Any page past `verifyEveryDays * 1.2` fails the build. Between 0.8 and 1.2 it warns and appears in a report posted to the pull request.
6. **Page render.** Static output, no client JavaScript on article, report, dataset, glossary or trust pages.
7. **Search index.** Pagefind runs over the built output.
8. **Structured data emission and validation.** See section 6.
9. **Tool parity check.** T1 and T4 are executed headlessly against reference inputs and their outputs compared to the tables published in DC2 and H5. A mismatch fails the build.
10. **Link checking.** Internal links resolved from the build output; external links checked weekly on a schedule rather than per build, with results filed as issues.
11. **Performance budget.** Per-page transferred bytes and Lighthouse thresholds, section 9.

## 4. Content linters

`scripts/lint-content.mjs`, run in CI and available as `npm run lint:content` for authors.

| Check | Rule | Level |
|---|---|---|
| Banned phrases | The list in `EDITORIAL-STANDARDS.md` section 4, as case-insensitive word-boundary patterns | error |
| Em-dashes | Any `—` or `--` used as punctuation in body content | error |
| Filler openers | First 40 words matched against the opener list | error |
| Hedged non-claims | "may potentially", "can often help", "it is generally recommended", "studies show" without a `<Cite>` in the same paragraph | error |
| Unsourced numbers | Any numeral with `%`, `x per day`, currency, or a count of domains or inboxes, in prose, that is not inside `<Stat>`, `<Fig>`, a table cell with a source column, or an explicit `{/* literal */}` escape | error |
| Unfilled placeholders | `[D` followed by a digit, or `TODO`, or `TK` | error |
| First-use glossary linking | A term in the glossary appearing in body text with no `<Term>` anywhere on the page | warning, listed in the pull request |
| Double-linked terms | The same `<Term>` used more than once on a page | error |
| Answer length | The `answer` field renders as 60 to 120 words | error |
| Heading shape | Exactly one H1, no skipped levels, no "Conclusion" heading | error |
| Reading level and sentence length | Mean sentence length above 25 words, or any sentence above 45 | warning |
| Superlatives about our own product | "best", "leading", "the only" within 10 words of "WarmInboxes" | error |

The escape hatch for the unsourced-number rule is deliberately ugly. It should be rare enough that a reviewer notices it in a diff.

## 5. Link graph rules

`scripts/lint-links.mjs` builds the graph from `linksTo` plus resolved `id:` links in bodies, then asserts:

- Every `id:` reference resolves to a published page, or to a page with `status: draft` when building a preview.
- Every `/learn/` page links forward to at least one `/decide/` page or tool.
- Every `/decide/` page cites at least one report and links to at least one tool.
- Every report links to its dataset page and to at least one decision guide, and every dataset page is referenced by at least one report.
- Every published page has at least three inbound internal links, excluding section indexes.
- No page has more than one outbound link to warminboxes.com in body content, excluding the disclosure line.
- Every outbound link to warminboxes.com carries the disclosure component on the page.
- No orphans, no links to `noindex` pages from indexed pages, no redirect chains.

## 6. Structured data

Emitted from frontmatter, never hand-written in MDX.

| Template | Types |
|---|---|
| article | `Article` with `author`, `reviewedBy`, `datePublished`, `dateModified`; `BreadcrumbList`; `FAQPage` only where `seo.faq` is populated and the answers appear on the page |
| report | `Article` plus `Dataset` reference, `citation`, `version` |
| dataset | `Dataset` with `distribution` where a download exists, `temporalCoverage`, `variableMeasured`, `license` |
| tool | `SoftwareApplication` and `WebApplication` |
| glossary | `DefinedTerm` within a `DefinedTermSet` for the glossary |
| trust | `AboutPage`, `Organization` with `publishingPrinciples` pointing at `/editorial-policy/` and `correctionsPolicy` at `/corrections/` |

`publishingPrinciples` and `correctionsPolicy` are small details that cost nothing and are exactly the signals a machine reader uses to tell a reference site from a content farm.

Validation runs in CI against the schema.org shapes; a page emitting `FAQPage` whose questions do not appear as headings or `<Decision>` blocks on the page fails.

## 7. The two tools that need a server

T1, T2 and T4 are pure client-side computation and ship as Astro islands with no network access at all.

T3 (authentication checker) and T5 (domain history) need DNS and WHOIS lookups, which browsers cannot do. Each gets one Vercel edge function with:

- Input validation: a hostname only, no free text, length capped, rejected if it does not parse as a domain.
- Rate limiting per IP, with a clear message rather than a silent failure.
- **No logging of queried domains.** Not to analytics, not to server logs, not to an error tracker. A tool that records which domains people are checking is a competitive intelligence product, and running one quietly would contradict the privacy note. This is stated on the tool page.
- A short-lived cache keyed by domain to keep lookup volume down, with the cache TTL stated on the page.
- Timeouts and a useful failure state. "We could not reach the DNS resolver" is a valid output; a spinner that never resolves is not.

T5 links out to the WarmInboxes domain expiry checker for the expiry component rather than reimplementing it, which is the one place on the site where an outbound link to the commercial partner is genuinely the best answer for the reader.

## 8. Search, feeds, images

- **Search.** Pagefind over built output. Static index, no server. Weighted so that the `answer` field and H2s rank above body text. Filters by section.
- **Feeds.** `/rss/research.xml` (reports and new editions, full `answer` in the description) and `/rss/changelog.xml` (substantive changes, so a reader can watch what was revised and why). The changelog feed is unusual and it is a trust signal.
- **OG images.** Generated at build with Satori: title, section, and for reports the headline number with n. Consistent, text-based, no stock imagery.
- **Embeddable charts.** Every report chart is available at `/embed/<report>/<chart>/` as a standalone SVG with attribution and the dataset ID inside the image, plus a copy-paste snippet on the report page. Licence per `01-DECISIONS.md` D-15.

## 9. Performance and accessibility budgets

Enforced in CI on a sample of one page per template.

| Metric | Budget |
|---|---|
| JavaScript on article, report, dataset, glossary and trust pages | 0 bytes |
| JavaScript on tool pages | 20KB compressed, per tool |
| Total transferred bytes, article page | 150KB |
| Largest Contentful Paint, throttled | under 1.5s |
| Cumulative Layout Shift | under 0.02 |
| Lighthouse accessibility | 100, and a failing axe run blocks the build |
| Fonts | Self-hosted, subset, `font-display: swap`, at most two families and four weights |

Accessibility specifics that matter for this site: every chart has a text alternative that states the finding, not the shape ("placement fell from 78% to 41% between day 0 and day 30 for idle domains"), plus the underlying table available on the dataset page. Colour is never the only encoding in a chart. Tables have real headers and scope. The checklist in H4 is keyboard operable and prints.

## 10. Continuous integration

`.github/workflows/ci.yml` on every pull request:

1. Install, typecheck, build.
2. All linters from sections 3 to 5.
3. axe and Lighthouse on the changed templates.
4. Structured data validation.
5. Tool parity check.
6. A comment on the pull request with: pages changed, freshness warnings, link graph deltas (new orphans, pages that dropped below three inbound links), and the banned-phrase report.

Scheduled workflows: weekly external link check filing issues for dead links; weekly freshness report listing pages approaching re-verification; monthly R9 price observation reminder.

Branch protection on `main`: green CI plus one review. The reviewer named in a page's frontmatter and the reviewer of the pull request should be the same person for content changes, and the workflow comment says who is named so this is visible.

## 11. What is deliberately not built

- No comments, no forum, no user accounts, no login.
- No newsletter popup, no exit intent, no gated PDFs, no "download the guide".
- No client-side analytics beyond the cookieless script and outbound click events.
- No A/B testing framework. The site has one version of the truth per page.
- No AI chat widget. A reference site whose answers are generated on the fly cannot honour the evidence rules.
