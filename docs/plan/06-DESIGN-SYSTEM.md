# 06. Design system

The brief in the site plan is "editorial and analytical, reads closer to a research publication than a vendor blog". That translates into specific constraints: a long measure, a serif for reading, charts sized as figures rather than as decoration, and no component whose job is persuasion.

## 1. Principles

1. **The page is a document.** One column, one measure, no sidebars, no sticky calls to action, no cards for things that are not cards.
2. **A figure is content.** Charts get the same vertical weight as three paragraphs, carry captions, and are readable without the surrounding prose.
3. **Provenance is visible, not hidden behind a tooltip.** Sourced numbers are marked in the text. The metadata block is at the top of the article, not the bottom.
4. **Nothing moves.** No animation beyond a 120ms colour transition on focus and hover. No parallax, no reveal on scroll, no counters.
5. **Both themes are designed.** Dark mode is a selected set of values, not an inverted filter.

## 2. Typography

| Role | Family | Size / line height |
|---|---|---|
| Display and H1 | Serif (Source Serif 4, Newsreader or Charter), 600 | clamp(2rem, 1.4rem + 2vw, 2.9rem) / 1.15 |
| H2 | Same serif, 600 | 1.6rem / 1.25, with 3.5rem space above |
| H3 | Same serif, 600 | 1.22rem / 1.3 |
| Body | Same serif, 400 | 1.125rem / 1.65 |
| UI, captions, metadata, table headers | Sans (Inter, Source Sans 3) | 0.875rem / 1.45 |
| Data and code | Mono (IBM Plex Mono, JetBrains Mono) tabular figures | 0.9rem / 1.5 |

Rules: measure is 68 characters for body, tables and figures may exceed it up to 76rem in a bleed container. Numbers in tables and charts always use tabular figures so columns align. Two families plus mono, four weights total, self-hosted and subset, per the font budget in `05-TECH-SPEC.md`.

Serif for body text is the single strongest signal that this is not a SaaS blog. It is worth the extra care in choosing a face with a good screen rendering at 18px.

## 3. Colour tokens

Surfaces are warm and paper-like rather than pure white, which reduces the glare of a long read and separates the site visually from the blue-white SaaS convention.

```css
:root {
  color-scheme: light;
  --surface:        #faf8f4;   /* page and chart surface */
  --surface-raised: #f2efe8;   /* tables, code, callouts */
  --rule:           #e0dbd0;
  --rule-strong:    #c4bcac;
  --text:           #16150f;
  --text-secondary: #4f4c43;
  --text-muted:     #6f6b60;
  --accent:         #7a2f1f;   /* links, marks of provenance; used sparingly */
  --accent-hover:   #5c2116;
  --flag:           #8a5a00;   /* correction notices */
}
:root:not([data-theme="light"]) { /* under prefers-color-scheme: dark */
  color-scheme: dark;
  --surface:        #17161a;
  --surface-raised: #201f24;
  --rule:           #34323a;
  --rule-strong:    #4b4854;
  --text:           #f2f0ea;
  --text-secondary: #c3bfb4;
  --text-muted:     #98948a;
  --accent:         #e08a72;
  --accent-hover:   #f0a48d;
  --flag:           #e0b558;
}
```

Both dark blocks are declared as `05-TECH-SPEC.md` requires: once under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`, and once under `:root[data-theme="dark"]`, so the toggle wins in both directions.

The accent is a deep brick red rather than the indigo that every tool in this category uses. It appears on links, on the dotted underline of a sourced number, and nowhere else. It is never a series colour in a chart.

## 4. Chart palette

Charts follow the categorical order below, assigned by entity and never cycled. The values are validated with the `dataviz` validator against this site's own surfaces (`#faf8f4` light, `#17161a` dark) and pass every gate in both themes.

| Slot | Meaning on this site | Light | Dark |
|---|---|---|---|
| 1 | Prewarmed cohort / Google | `#2a78d6` | `#3987e5` |
| 2 | Fresh cohort / Microsoft 365 | `#eb6834` | `#d95926` |
| 3 | Aged unwarmed cohort / Azure | `#1baf7a` | `#199e70` |
| 4 | Fourth series where unavoidable | `#eda100` | `#c98500` |
| 5 | Fifth series where unavoidable | `#e87ba4` | `#d55181` |

Validation results, recorded so they can be re-checked when the surfaces change:

- Light, slots 1 to 3, all pairs: CVD worst 9.2, normal-vision worst 24.0, both pass. Slot 3 sits at 2.65:1 against the light surface, which triggers the relief rule.
- Dark, slots 1 to 3, all pairs: CVD worst 9.4, normal-vision worst 20.9, contrast all above 3:1.
- Light and dark, five slots, adjacent pairs: all pass. In light, slots 3, 4 and 5 are below 3:1 contrast.

**Rules that follow from those results.**

- Scatter, small multiples and any chart where every pair can be compared at once are capped at three series. A fourth category folds into "other" or the chart becomes small multiples.
- Because slots 3, 4 and 5 are below 3:1 on the light surface, every chart carries direct labels on those series or an accompanying table. This is not optional relief; it is the condition under which those colours are permitted.
- Colour is never the only encoding: two or more series always get a legend, and four or fewer are also directly labelled at the line end.
- Cohort colours are fixed sitewide. Prewarmed is always slot 1 across every report, so a reader who has seen one chart can read the next one faster.
- Sequential encodings (a heatmap of placement by day and volume band) use the blue ramp, light to dark, one hue. Diverging encodings (change against a baseline) use blue against red with a grey midpoint.
- Status colours are reserved for burn and suspension states and never reused as a series colour.

**Chart anatomy.** 2px lines, markers at least 8px, a 2px surface gap between adjacent fills, recessive grid at `--rule` with no vertical gridlines on time series, axis labels in `--text-secondary`, values in text tokens rather than the series colour. Every figure carries, inside the SVG: the caption, n, the date range, the dataset ID and "prewarmed.org". One y-axis. Never two.

**Static, not interactive.** Article and report pages ship zero JavaScript, so the hover layer that an interactive chart would normally carry is replaced by two things: direct labels on the marks that matter, and the full underlying table on the dataset page, linked from the caption. A chart that cannot be read without a tooltip is redrawn.

## 5. Layout

- Single column, 68ch measure, centred, 1.5rem gutters on mobile.
- A `bleed` container up to 76rem for wide tables and figures, which scroll horizontally inside their own container rather than making the page scroll.
- Section index pages use a list, not a grid of cards. Each row is: question, one-line answer, persona tags, and the last-verified date.
- The home page is a document too: thesis paragraph, four situation rows, three research rows with the headline number, twelve plain links, five tool links, disclosure line.

## 6. Components

| Component | Behaviour |
|---|---|
| Metadata block | At the top under the H1: author, reviewer, published, last verified, verification interval, and a link to this page's changelog entries. Compact, sans, one or two lines. |
| Decision box | Persona, the decision, and the answer, in a bordered block at the top of every guide. Also used to generate the summary card and the section index row. |
| Sourced number | The number, dotted underline in `--accent`, linking to the dataset page. Hovering is not required to see the citation: the citation string also appears in the figure caption or the source list. |
| Figure | Full-width to the bleed container, caption below in sans with n, date range, dataset link, and a "table" link to the dataset page. |
| Source list | Numbered, at the foot of the article, each entry with publisher, title, accessed date and an archive link where one exists. |
| Correction notice | A `--flag` bordered block at the top of the page for 30 days after a correction that changes a recommendation, stating what changed and when. |
| Limitations block | Rule above, sans heading, plain list. Visually quiet, never collapsed. |
| Disagreement block | Two columns: what is commonly said, what our data shows. |
| Not-known block | One short bordered line: what we cannot answer and why. |
| Changelog entry | Date, kind, one sentence. Rendered on the page and in the site-wide changelog and its feed. |
| Disclosure line | In the footer of every page, one sentence, linking to `/disclosure/`. Not a banner, not dismissible, not styled to be ignored. |

## 7. What is not in the design system

No hero image, no testimonial block, no logo wall, no pricing table for WarmInboxes, no comparison table with a highlighted column, no badge or trust seal, no author photo carousel, no "as seen in", no call-to-action button larger than body text. The only buttons on the site are form controls in the five tools.
