# 13. UI specification

`06-DESIGN-SYSTEM.md` sets the visual language: type, colour, chart palette, component inventory. This document specifies the interface itself: what is on each screen, in what order, how it behaves at each width, and what the reader sees when something is missing or fails.

The governing constraint from `05-TECH-SPEC.md` is that article, report, dataset, glossary and trust pages ship **zero JavaScript**. Every behaviour below is HTML and CSS unless it is on a tool page. Where a convention normally requires JavaScript (a table of contents that tracks scroll, a theme toggle, a chart tooltip), either a CSS equivalent is specified or the behaviour is dropped.

---

## 1. Global chrome

### Header

```
┌──────────────────────────────────────────────────────────────────────┐
│  prewarmed.org        Start here  How it works  Decide  For teams     │
│  research on sending    Research  Tools                    ⌕   ◐      │
│  infrastructure                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

- Wordmark set in the display serif, with a one-line descriptor beneath it in muted sans. The descriptor tells a first-time visitor what the site is before they read anything else, which matters more here than a logo would.
- Six primary items, in reading order of the reader's journey rather than alphabetically: Start here, How it works, Decide, For teams, Research, Tools.
- No dropdowns and no mega menu. Each item goes to a section index that does the explaining. A menu that explains the site is a symptom of an index page that does not.
- Search and theme toggle at the right, icon plus visible label at desktop width.
- The header does not stick. It scrolls away. On a document, a persistent bar costs vertical space on every screen to serve a navigation action taken once.
- Current section marked with an underline and `aria-current="page"`.

### Theme toggle

Three states cycling light, dark, system, with the current state named in the button's accessible label. Implementation: a tiny inline script in `<head>` that reads the stored preference and stamps `data-theme` before first paint, so there is no flash. This is the single exception to the zero-JavaScript rule and it is roughly 200 bytes. Without a stored preference nothing is stamped and `prefers-color-scheme` decides.

### Footer

Four columns at desktop, stacked at mobile:

1. **Sections**: the six primary destinations plus Deliverability KB and Glossary.
2. **Trust**: Methodology, Editorial policy, Corrections, Disclosure, About, Changelog, Privacy.
3. **Feeds and data**: Research RSS, Changelog RSS, chart licence, how to cite.
4. **Disclosure line**: the full sentence from `EDITORIAL-STANDARDS.md` section 9, not a link to it. It is set at body size in normal text colour, not shrunk to grey legal type.

The corrections address appears in the footer with the five working day commitment beside it.

### Skip link

First focusable element, "Skip to content", visible on focus.

---

## 2. Grid and breakpoints

| Width | Behaviour |
|---|---|
| Under 40rem | Single column, 1.25rem gutters, nav collapses to a labelled disclosure (`<details>`, no JavaScript), figures full bleed to the gutter, tables scroll inside their container |
| 40 to 64rem | Single column at 68ch, nav inline and wrapping to two lines if needed |
| 64 to 90rem | Content column 68ch centred; the left margin carries the section label and, on pillars, the table of contents |
| Over 90rem | Same as above with a wider bleed container (76rem) available to figures and wide tables |

There is no sidebar layout at any width. The wide-screen margin holds navigational furniture only, and it is empty on answer pages.

---

## 3. Article page

The workhorse template. 63 of 169 URLs use it.

```
Breadcrumb: How prewarming works ▸ What burns prewarmed domains

What burns prewarmed domains, ranked          ← H1, display serif
by frequency

┌ metadata ───────────────────────────────────────────────┐
│ By {author}, {role} · Reviewed by {reviewer}             │
│ Published 14 Oct 2026 · Verified 12 Jan 2027 · 90-day    │
│ verification · Changes (3)                               │
└──────────────────────────────────────────────────────────┘

┌ answer ─────────────────────────────────────────────────┐
│ Ranked by frequency across 412 burn events: list         │  ← the `answer` field,
│ quality, volume behaviour, and authentication ...        │    60 to 120 words,
│                                                          │    raised surface, no heading
└──────────────────────────────────────────────────────────┘

  For: agencies running client pods (P3), solo senders (P1)   ← persona line, muted

── On this page ──────────────  (pillars only)
   1. The ranking
   2. How causes were attributed
   ...

Body ...

  ┌ figure ───────────────────────────────────────────┐
  │ [inline SVG]                                       │
  │ Fig 1. Attributed causes of burn, n = 412,         │
  │ Jan to Jun 2026. Dataset D3 · view the table       │
  └────────────────────────────────────────────────────┘

┌ limitations ────────────────────────────────────────────┐
│ What this does not tell you                             │
└──────────────────────────────────────────────────────────┘

── Next ──────────────────────────────────────────────────
   Decide: retire or recover a burned domain →
   Tool: sending ramp schedule generator →

Sources
  1. Google, Email sender guidelines. Accessed 2 Oct 2026. [archived]
  ...

┌ page footer ────────────────────────────────────────────┐
│ Changelog for this page (3 entries, expandable)          │
│ Found an error? corrections@prewarmed.org                │
│ Disclosure line                                          │
└──────────────────────────────────────────────────────────┘
```

Decisions worth stating:

- **Metadata sits above the answer, not at the bottom.** The reader deciding whether to trust the page decides in the first screen. Reviewer name and verification date are the two fields nobody else in this category shows.
- **The answer block has no heading.** A heading of "Summary" invites skipping. The block is the opening of the document.
- **Table of contents on pillars only** (over roughly 2,000 words). In the left margin at widths over 64rem using `position: sticky`, inline as a collapsed `<details>` below the answer at narrower widths. No scroll tracking, because that needs JavaScript and its value is low on a document read top to bottom.
- **The "Next" block is authored, not generated.** Two or three specific destinations from the brief's `linksTo`, with a verb prefix (Decide, Tool, Read). No "related posts", no algorithmic recommendations, no card grid.
- **Sources are numbered and complete**, each with an accessed date and an archive link where one exists. Reference markers in body text are superscript links to the list.
- **Changelog is on the page**, collapsed to a count, expandable with `<details>`. A page that says "changed 3 times, here they are" reads differently from one that claims to have always been right.

### Answer-page variant

Same anatomy with the table of contents and the persona line removed, and the source list usually shorter. Target: the whole answer visible in the first screen and a half.

---

## 4. Decision guide

Differences from the article template, all above the fold:

```
┌ decision ───────────────────────────────────────────────┐
│  THE DECISION                                            │
│  Buy prewarmed infrastructure, or warm your own?         │
│                                                          │
│  THE ANSWER                                              │
│  Buy if you need to be sending within two weeks ...      │
│                                                          │
│  Applies to: P1 solo senders · P2 small teams            │
│  Run the numbers: prewarmed vs DIY calculator →          │
└──────────────────────────────────────────────────────────┘
```

Then: the model (inputs stated as a list, each sourced or flagged as the reader's assumption), the worked examples as a comparison table, the exceptions section, and the next step. Worked examples are the most-read part of a decision guide, so each gets its own H2 and its own anchor, and the anchor is linkable from other pages ("see the 20-inbox case").

---

## 5. Report page

```
Breadcrumb ▸ Research ▸ Prewarmed vs fresh domain placement

Prewarmed vs fresh domains: inbox placement
over the first 30 days

┌ report header ──────────────────────────────────────────┐
│ Version 1.0 · Data cut 30 Jun 2026 · Next refresh Jan    │
│ 2027 · Pre-registered 12 Jun 2026 · Analysis script ·    │
│ Reviewer sign-off                                        │
│ By {analyst} · Reviewed and re-run by {reviewer}         │
└──────────────────────────────────────────────────────────┘

┌ headline ───────────────────────────────────────────────┐
│  38.2%                                                   │  ← the number, display size
│  higher day-one primary inbox placement for prewarmed    │
│  domains than for domains registered the same week       │
│  n = 1,214 domains · Jan to Jun 2026 · seed tests · D1   │
└──────────────────────────────────────────────────────────┘

The question →  Data and method →  Findings →  Implications
→  Limitations →  Dataset →  Cite this
```

- **The headline number is a stat tile, and its qualifier is inside the tile.** A number that can be screenshotted without its n and date range will be, so it never appears without them.
- **The nav strip under the headline is anchor links**, present on every report in the same order, so a returning reader jumps straight to the method.
- **Method before findings.** Unusual for web content, correct for this site, and it is what a sceptic reads first.
- **Every figure links to its table** on the dataset page and to its CSV.
- **Implications by persona** are three short blocks, each ending in a link to the guide that acts on the finding.
- **Cite this** is a block with three copyable formats and the licence. It is a section, not a modal.
- Superseded versions carry a full-width `--flag` banner at the top: "This is version 1.0, published 2026. A newer version is available."

---

## 6. Dataset page

Generated almost entirely from the validation output, so it looks the same every time:

Definition table (grain, n, date range, refreshed, cadence) / what each field means / how the observations were collected and whose consent covers them / exclusions as a list / known biases as a list, at least two / the suppression rule / the reports and pages that use this dataset / the aggregated download with its licence / the full tables behind every chart that cites this dataset, as real HTML tables.

Those tables are the reason a chart on this site does not need a tooltip. The caption link "view the table" lands on an anchor here.

---

## 7. Tool page

The only interactive template. Layout: inputs on the left, results on the right at widths over 64rem, stacked with inputs first below that.

```
┌ inputs ──────────────┐   ┌ result ─────────────────────────┐
│ Target sends per day  │   │  14 inboxes across 4 domains    │
│ [   500 ]             │   │  $x to $y per month             │
│                       │   │  Full volume by day 24          │
│ Provider              │   │                                 │
│ ( ) Google            │   │  Assumptions used:              │
│ (•) Microsoft 365     │   │   40 sends/inbox/day (D7, R7)   │
│                       │   │   3 inboxes/domain (your input) │
│ Risk tolerance        │   │   20% replacement headroom (D3) │
│ (•) Standard          │   │                                 │
│                       │   │  [Copy link to this result]     │
│ ▸ Advanced            │   │  [Download CSV]                 │
└───────────────────────┘   └──────────────────────────────────┘

Where these numbers come from → R7, R9, D7
How to use this: read the capacity guide →
```

Rules:

- **Results update on input**, no submit button, and the URL updates so a result is shareable and reproducible.
- **The assumption list is part of the result**, not hidden behind a disclosure. Any value the reader changed is labelled "your input" so a screenshot cannot misattribute it to our data.
- **Ranges are shown as ranges.** No output implies precision the data does not have.
- **Real form controls**, native `<input>`, `<select>`, `<fieldset>`, `<legend>`. No custom widgets. Every input has a persistent label and a unit suffix, not placeholder text.
- **Results are announced**: the result region is `aria-live="polite"` so a screen reader hears the recalculation.
- **No-JavaScript state**: the page renders the explanation, the source links, and a static reference table for common cases, with a line saying the calculator needs JavaScript. It is never a blank panel.
- **States for T3 and T5** (the two with a network lookup): idle, checking (a text state, not a spinner alone), result, not-found, rate-limited with the wait time stated, and lookup-failed with what failed. Each is a written sentence. Beside the input, permanently: "We do not log the domains you check."

---

## 8. Section index pages

A list, not a grid of cards. Each row:

```
What burns prewarmed domains, ranked by frequency
Ranked across 412 events: list quality and volume behaviour
account for 61% between them.
P1 P3 · pillar · verified 12 Jan 2027                     →
```

The one-line answer under each title comes from the `answer` field, so the index is genuinely useful rather than a table of contents. `/learn/` additionally presents itself as an ordered reading path, numbered 1 to 12, because that is what a start-here track is.

`/research/` rows lead with the headline number and carry n and the date range. `/glossary/` is an A to Z with jump links and the one-line definition inline, so most lookups are answered on the index itself.

---

## 9. Home page

One column, no hero, no imagery.

1. **Thesis**, two sentences at display size. What the site is and who it is for.
2. **Start with your situation**: four rows, one per persona, each phrased as the reader would say it ("I send 50 to 200 a day and I burned a domain") linking to one decision guide.
3. **Latest research**: three rows, each with the headline number, the finding in one line, n and date range.
4. **The question index**: twelve plain links, the H-series, no descriptions. This is the densest and most useful block on the page and it looks like a list of links because that is what it is.
5. **Tools**: five rows, each stating the question it answers.
6. **How this site works**: three lines on evidence, review and disclosure, linking to methodology, editorial policy and disclosure.

The whole page should be readable in under a minute and every element should be a route out of it.

---

## 10. Remaining templates

| Template | Notes |
|---|---|
| Glossary entry | Short. Definition sentence, what it is confused with, where it is explained (link to the pillar), where it is measured (link to a report), and previous or next term. Reads as a dictionary entry. |
| Trust pages | Article template with no answer block and no persona line. `/methodology/` gets a per-dataset navigation strip. |
| `/corrections/` | Reverse-chronological table: date reported, date fixed, page, what was wrong, what changed. The report form is an email address, not a form. |
| `/changelog/` | Grouped by month, each entry linking to the page and its diff-level description. Filterable by kind through plain links, not a JavaScript filter. |
| `/search/` | Pagefind results with section filters as links. Empty state suggests the glossary and the question index rather than showing nothing. |
| 404 | Names the three most likely destinations and the search page. No illustration. |

---

## 11. Content-type behaviour

| Element | Narrow | Wide |
|---|---|---|
| Charts | Full bleed to the gutter, minimum height preserved, direct labels kept | Bleed container, max 76rem |
| Wide tables | Horizontally scrollable inside their own container with a visible edge fade and a caption saying it scrolls; the page body never scrolls sideways | Bleed container |
| Checklists (H4) | Each item its own block with the anchor, the claim, and what it proves | Two columns for the summary table only |
| Code and DNS records | Monospace block, wrapping enabled, no horizontal scroll for records |  |
| Long procedures (B-series) | Numbered steps with per-step anchors so a team can link to step 4 in a ticket |  |

---

## 12. Accessibility, specified rather than assumed

- Landmarks: one `<header>`, one `<nav>` with a label, `<main>`, `<footer>`. Reports and articles use `<article>` with the metadata in a `<header>` inside it.
- Focus visible on every interactive element, 2px accent outline with 2px offset, never removed.
- Every figure has a text alternative that states the finding, not the shape. The chart's caption is not the alternative text; both exist.
- Colour is never the sole encoding, per the palette constraints in `06-DESIGN-SYSTEM.md`.
- Tables use `<th scope>` and a `<caption>`. Data tables are never used for layout.
- Target size at least 44px for anything tappable.
- `prefers-reduced-motion` removes the only two transitions on the site.
- Forced-colors mode: charts keep their marks visible by using stroke patterns as well as fill, and the theme toggle respects the system palette.
- Zoom to 400% at 320px width leaves the article readable in one column with no horizontal scroll.

## 13. Print

Articles print. It matters more here than on most sites because the H4 checklist, the H5 ramp table and the B9 RFP template are documents someone will take into a meeting.

Print stylesheet: header and footer navigation removed, URL of the page printed beneath the H1, expanded external link targets, charts printed at readable size with their captions, `<details>` blocks expanded, source list included, and the disclosure line retained. Page breaks avoided inside figures, tables and checklist items.

## 14. Build order for the interface

| When | Components |
|---|---|
| Week 1 | Tokens, type scale, header, footer, skip link, theme toggle, article shell, metadata block, answer block, source list |
| Week 2 | Decision box, figure and caption, sourced number, limitations block, changelog block, breadcrumb, next block |
| Week 3 | Report header, stat tile, dataset table, anchor strip, section index rows |
| Week 4 | Tool shell with all six states, glossary entry and index, search results |
| Week 5 | Correction notice, disagreement block, not-known block, superseded banner, embed page |
| Week 6 | Print stylesheet, 404, feeds presentation, reduced-motion and forced-colors passes |

## 15. What the interface deliberately does not have

No sticky header, no floating call to action, no newsletter modal or inline capture above the fold, no cookie banner (cookieless analytics), no reading-progress bar, no social share buttons, no author photo, no estimated reading time, no "related articles" grid, no comment section, no chat widget, no cards with hover elevation, no carousel, no accordion FAQ that hides the answers the page is ranked for, no skeleton loaders, and no animation on scroll.

Each of those is a convention. None of them helps someone decide whether to buy a prewarmed domain.
