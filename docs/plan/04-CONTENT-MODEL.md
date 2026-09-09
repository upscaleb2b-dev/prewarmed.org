# 04. Content model

The editorial standards are only enforceable if the content schema refuses to build a page that breaks them. Every "must" in `EDITORIAL-STANDARDS.md` that can be expressed as a required field is expressed as a required field here. The rest are checked by the content linters in `05-TECH-SPEC.md`.

## 1. Collections

| Collection | Path | Template | Count at full build |
|---|---|---|---|
| `articles` | `src/content/articles/{learn,how-it-works,decide,b2b,deliverability}/` | article | 63 |
| `reports` | `src/content/reports/` | report | 11 plus editions |
| `datasets` | `src/content/datasets/` | dataset | 10 |
| `tools` | `src/content/tools/` | tool | 5 |
| `glossary` | `src/content/glossary/` | glossary | 63 |
| `authors` | `src/content/authors/` | author | 2 to 5 |
| `sources` | `src/content/sources/` | data only | growing |
| `changelog` | `src/content/changelog/` | changelog | growing |
| `pages` | `src/content/pages/` | trust | 8 |

`sources` is a shared bibliography. A provider documentation page cited by nine articles is one entry, and when Google rewrites that page the URL and the accessed date are updated in one place. It also makes "which pages depend on this source" a query rather than a search.

## 2. Schemas

```ts
// src/content/config.ts
import { defineCollection, reference, z } from 'astro:content';

const persona = z.enum(['P1', 'P2', 'P3', 'P4', 'P5']);
const datasetId = z.enum(['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10']);

const editorial = z.object({
  author: reference('authors'),
  reviewer: reference('authors'),
  published: z.date(),
  updated: z.date().optional(),
  lastVerified: z.date(),
  verifyEveryDays: z.number().int().positive(),
  changelog: z.array(z.object({
    date: z.date(),
    change: z.string().min(10),
    kind: z.enum(['number', 'recommendation', 'section', 'source', 'correction']),
  })).default([]),
  aiAssisted: z.boolean().default(true),
});

const seo = z.object({
  title: z.string().max(60),          // title tag
  description: z.string().min(70).max(155),
  primaryQuery: z.string(),
  faq: z.array(z.object({ q: z.string(), a: z.string().min(40) })).max(6).default([]),
  noindex: z.boolean().default(false),
  canonicalTo: reference('articles').optional(),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().regex(/^(L|H|DC|B|K)\d{1,2}$/),
    section: z.enum(['learn', 'how-it-works', 'decide', 'b2b', 'deliverability']),
    h1: z.string(),
    template: z.enum(['pillar', 'answer', 'guide', 'playbook', 'reference']),
    personas: z.array(persona).nonempty(),
    decision: z.string().min(20),        // the one-sentence decision from the brief
    answer: z.string().min(200).max(900),// the first 100 words, also used for the summary card
    datasets: z.array(datasetId).default([]),
    sources: z.array(reference('sources')).nonempty(),
    linksTo: z.array(z.string()).nonempty(),   // page IDs, checked at build
    glossaryTerms: z.array(reference('glossary')).default([]),
    wordBudget: z.number().int(),
    status: z.enum(['brief', 'draft', 'in-review', 'published']),
    editorial, seo,
  }),
});

const reports = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().regex(/^R\d{1,2}$/),
    version: z.string().regex(/^\d+\.\d+$/),
    supersedes: z.string().optional(),
    question: z.string().min(30),         // the pre-registered question
    preregisteredAt: z.date(),
    dataCutAt: z.date(),
    datasets: z.array(datasetId).nonempty(),
    population: z.string().min(80),
    exclusions: z.array(z.string()).nonempty(),
    outcomes: z.object({ primary: z.string(), secondary: z.array(z.string()).default([]) }),
    charts: z.array(z.object({
      slug: z.string(),
      csv: z.string(),                    // path under research-data/charts/
      caption: z.string(),
      n: z.number().int(),
      dateRange: z.string(),
      dataset: datasetId,
      embeddable: z.boolean().default(true),
    })).nonempty(),
    limitations: z.array(z.string()).min(3),
    implications: z.array(z.object({ persona, text: z.string(), page: z.string() })).nonempty(),
    analysisScript: z.string(),           // committed path, shown on the page
    signedOffBy: reference('authors'),
    signedOffAt: z.date(),
    editorial, seo,
  }),
});

const datasets = defineCollection({
  type: 'content',
  schema: z.object({
    id: datasetId,
    name: z.string(),
    grain: z.string(),
    source: z.string(),                   // which infrastructure, whose consent
    n: z.object({ unit: z.string(), value: z.number().int() }),
    dateRange: z.object({ from: z.date(), to: z.date() }),
    refreshedAt: z.date(),
    refreshCadenceDays: z.number().int(),
    definitions: z.array(z.object({ term: z.string(), definition: z.string() })).nonempty(),
    exclusions: z.array(z.string()).nonempty(),
    biases: z.array(z.string()).min(2),
    suppression: z.string(),              // the cell-size rule applied
    download: z.object({ path: z.string(), licence: z.string() }).optional(),
    usedBy: z.array(z.string()).default([]),  // report and article IDs, generated
    editorial, seo,
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().regex(/^T\d$/),
    question: z.string(),
    inputs: z.array(z.object({ name: z.string(), unit: z.string(), default: z.string() })),
    coefficients: z.array(z.object({
      name: z.string(), value: z.number(), dataset: datasetId, report: z.string(),
    })),                                   // every default number is sourced
    sharesStateInUrl: z.literal(true),
    jsBudgetKb: z.number().max(20),
    editorial, seo,
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    oneLine: z.string().max(200),
    confusedWith: z.array(z.string()).default([]),
    explainedIn: z.string(),               // page ID of the pillar
    measuredIn: z.array(z.string()).default([]),  // report IDs
    seo, editorial: editorial.partial({ reviewer: true }).required({ author: true }),
  }),
});

const sources = defineCollection({
  type: 'data',
  schema: z.object({
    kind: z.enum(['provider-doc', 'rfc', 'regulator', 'vendor-page', 'third-party', 'internal-dataset']),
    publisher: z.string(),
    title: z.string(),
    url: z.string().url(),
    accessed: z.date(),
    archived: z.string().url().optional(),
    quote: z.string().optional(),          // the sentence relied on
  }),
});
```

## 3. What the schema enforces

| Editorial rule | How the schema enforces it |
|---|---|
| Named author and named reviewer | `reference('authors')`, both required, and a build check that they differ |
| Answer in the first 100 words | `answer` is a required field, 200 to 900 characters, and the template renders it as the opening paragraph |
| Persona and decision stated | `personas` and `decision` required |
| Every chart carries n, date range, dataset | Chart objects require all three; the SVG generator reads them from the same object |
| Sources on every page | `sources` is non-empty and each entry is a reference into the bibliography |
| Forward link to a decision or tool | `linksTo` non-empty, validated against known page IDs |
| Re-verification cadence | `lastVerified` plus `verifyEveryDays`; the build warns at 80% of the interval and fails at 120% |
| Report pre-registration | `question` and `preregisteredAt` are required and `preregisteredAt` must precede `dataCutAt` |
| Reviewer re-ran the numbers | `signedOffBy` and `signedOffAt` required on reports, and `signedOffAt` must be after the analysis script's last commit date |
| Tool defaults are sourced | Every coefficient carries a dataset and report reference |
| Limitations present | `limitations` requires at least three entries on reports |

The last one in that table is the check most likely to be argued with. It stays.

## 4. MDX components available in body content

Components are the only way to put a number, a chart or a claim about a source into a page. Raw HTML is not permitted in MDX bodies, and typing a figure into prose without one of these is caught by the numeric linter.

| Component | Use | Renders |
|---|---|---|
| `<Fig id="r1-placement-by-day" />` | A chart | Inline SVG built at compile time from the chart CSV, with n, date range and dataset ID inside the image, plus a caption and a link to the dataset page |
| `<Stat dataset="D1" value="31.4" unit="%" n="1214" range="Jan to Jun 2026" />` | A number in prose | The number, with a dotted underline linking to the dataset page and a title attribute carrying the citation string |
| `<Cite id="google-sender-guidelines" />` | A primary source | A numbered reference resolved from the `sources` collection into the page's source list |
| `<Term id="domain-reputation" />` | First use of a glossary term | Link to the glossary entry; a build check fails if the same term is wrapped twice on one page |
| `<Decision>` | The decision box at the top of a guide | Persona, decision and answer in a bordered block, also used for the summary card and for structured data |
| `<Steps>` / `<Check>` | Procedures and checklists | Ordered lists with anchors per step, and a print stylesheet, so H4's checklist is usable on its own |
| `<Limitations>` | The limitations section | A styled block; its absence on a report is a build failure |
| `<Disagree>` | Where our data contradicts common advice | Two-column block, folklore on the left, what the data shows on the right |
| `<NotKnown>` | Where the data cannot answer the question | A short block that says so explicitly. Its existence as a component is a nudge: it should appear on more pages than it does |

## 5. Page IDs and the link graph

Every page has a stable ID (`L1`, `H8`, `DC2`, `R1`, `T4`, `D3`). Internal links in MDX are written as `[text](id:H8)` and resolved to URLs at build time. Consequences:

- A URL change never breaks an internal link.
- The link graph is a build artefact, so "pages with fewer than three inbound links", "reports not cited by any decision guide" and "datasets with no dataset page" are build queries rather than audits.
- The cross-linking rules in the site plan section 3 become failing tests: every fundamentals page must link forward to a decision guide, every decision guide must cite at least one report and one tool, every report must link back to at least one guide and to its dataset page.

## 6. Frontmatter example

```yaml
---
id: H8
section: how-it-works
h1: What burns prewarmed domains, ranked by frequency
template: pillar
personas: [P1, P3]
decision: What to prevent, and what to check first when placement drops.
answer: >
  Ranked by frequency across ... (the first 100 words, drafted in the brief)
datasets: [D3]
sources: [google-sender-guidelines, m3aawg-sending-practices, rfc-7489]
linksTo: [R3, B5, DC5, K10, K7, B13]
glossaryTerms: [burn, account-suspension, spam-complaint-rate]
wordBudget: 2800
status: published
editorial:
  author: name-of-author
  reviewer: name-of-reviewer
  published: 2026-10-14
  lastVerified: 2026-10-14
  verifyEveryDays: 90
  changelog:
    - { date: 2026-10-14, kind: section, change: First publication. }
seo:
  title: What burns prewarmed domains, ranked by frequency
  description: >
    The causes of domain burn ranked across N events, with the early signal for each and what prevents it.
  primaryQuery: why did my domain get burned
  faq:
    - q: Why did my cold email domain get burned?
      a: ...
---
```
