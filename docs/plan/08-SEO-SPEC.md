# 08. Search and distribution specification

The site plan sets the strategy: own the decision and mechanism queries, earn links with research. This document turns that into rules that can be applied to a specific page.

## 1. Query to page assignment

One query intent, one page. The map below is the authority: if a draft starts ranking material for a query owned by another page, the material moves rather than being duplicated. New pages are added to this table at brief stage, and a brief that duplicates an existing intent is rejected.

| Cluster | Intent | Owner | Supporting pages |
|---|---|---|---|
| Definition | what a prewarmed domain is | L1 | L2, glossary `prewarmed-domain` |
| Definition | what a prewarmed inbox is | L2 | L1, H15 |
| Definition | how warmup works | L8 | H1, H6, glossary `email-warmup` |
| Mechanism | how prewarming is done | H1 | L8, H4 |
| Mechanism | does reputation transfer | H2 | L5, R1 |
| Mechanism | why new domains go to spam | L4 | L5, R1 |
| Comparison | aged vs fresh vs prewarmed | L3 | H12, R5 |
| Comparison | buy vs warm yourself | DC1 | T2, L8 |
| Comparison | Google vs Microsoft vs Azure | H15 | DC3, R4 |
| Comparison | which TLD | H11 | R8 |
| Sizing | emails per day from a new domain | H5 | T4, K9 |
| Sizing | inboxes per domain | H10 | DC2 |
| Sizing | how much infrastructure for a target | DC2 | T1, B1 |
| Failure | why a domain burned | H8 | R3, B13 |
| Failure | spam after warmup | H6 | L8, R6 |
| Failure | recovering a domain | K10 | DC5, R10 |
| Verification | checking a warmed domain | H4 | T3, T5 |
| Verification | domain history risk | H12 | T5, R5 |
| Compliance | bulk sender requirements | L10 | DC8, B8 |
| Compliance | DMARC policy for cold email | DC8 | L7, T3 |
| Compliance | is this against provider terms | H17 | DC4, B8 |
| Cost | what it costs | H14 | R9, T1 |
| Cost | market prices | R9 | H14, B7 |
| Research | reputation decay | R2 | H3, H16 |
| Research | burn rate | R3 | H8, B6 |
| Research | prewarmed lifespan | H3 | R2, B6 |

Queries deliberately not targeted: anything of the form "best cold email tool", "cold email templates", "how to write a cold email". They are high volume, they belong to a different site, and chasing them would turn this into the content farm the plan is designed to avoid.

## 2. Page-level rules

- One H1, phrased as the question, matching the `h1` field.
- The answer in the first 100 words, rendered from the `answer` field so it cannot drift from the brief.
- H2s are questions or claims, not labels. "What burns a domain in the first two weeks" rather than "Overview".
- FAQ schema only where the question is genuinely answered on the page, with at most six entries. Marking up questions the page does not answer is the fastest way to lose rich results and reader trust at the same time.
- Internal links use page IDs and resolve at build time, so a URL change never breaks one.
- Every page carries `Article` with `author` and `reviewedBy`. `reviewedBy` is rare on commercial sites and it is exactly the distinction being claimed here.
- Tables and lists are real HTML, never images. Charts carry a text alternative that states the finding.

## 3. Title tags

Pattern: the H1, shortened to 60 characters, without a brand suffix on article pages. Do not append "| prewarmed.org" to article titles; the extra characters cost more than the brand recall is worth at this stage. Section indexes and trust pages carry the suffix.

Rules: no year in the title unless the page is genuinely annual (the index editions). No "ultimate", "complete", "definitive". No parenthetical keyword stuffing. Numbers only where the number is the content ("Ten checks", "Day 1 to day 30").

## 4. Meta descriptions

Written at brief stage, 70 to 155 characters, and they state the finding rather than tease it. Pattern:

> `[The answer in one clause]. [The evidence or the condition].`

Example for H8: "The causes of domain burn ranked across 412 events, with the early signal for each and the checks that prevent them."

A description that could describe any page in the category fails review, which is the same test the editorial standards apply to sentences.

## 5. Internal linking

Enforced by `lint-links.mjs` (see `05-TECH-SPEC.md` section 5). The intent behind each rule:

- Fundamentals link forward to a decision, so the reading path has a destination.
- Decision guides cite a report and a tool, so a recommendation is always traceable to evidence and to something the reader can compute.
- Reports link back to the guides that use them, so the research is not a cul-de-sac.
- Three inbound links minimum per page, so nothing is discoverable only through the sitemap.
- Glossary entries link up to their pillar and carry a canonical to it where the query is the same.

Anchor text is the target's question or a natural phrase from it. No "click here", no exact-match anchor repeated across dozens of pages.

## 6. Answer engines and citation

A growing share of these questions are answered by assistants and AI overviews rather than by a click. That does not change the strategy, because the properties that make a page citable by a model are the same ones that make it trustworthy to a person: a direct answer in the opening sentences, a specific number with its sample size and date attached, a named author, a visible method, and a clear statement of scope. Three concrete implications:

1. **Keep the answer atomic and self-contained.** The first paragraph should be quotable without the rest of the page and should carry its own qualifier ("in seed tests across 1,214 domains between January and June 2026").
2. **Put the number and its provenance in the same sentence.** A statistic that travels without its n and date range will be misquoted, and the misquote will be attributed to this site.
3. **Machine-readable provenance.** `Dataset`, `Article` with `reviewedBy`, `publishingPrinciples` and `correctionsPolicy` are cheap to emit and they are the fields that distinguish a source from a page.

What this does not justify: writing for a machine. Pages that read as prompt bait read that way to humans too.

## 7. Link earning

The premise: nobody links to a guide, and everybody links to a number that did not exist before.

**What ships with every report.**

- An embeddable SVG per chart at `/embed/<report>/<chart>/` with attribution and the dataset ID inside the image, plus a copy-paste snippet.
- A citation block in three formats: plain text, a Markdown link, and an academic-style citation with the version and the data cut date.
- The aggregated CSV under CC BY 4.0.
- A one-paragraph summary written to be quoted verbatim, containing the headline number with its n and date range.

**Distribution, in order of value.**

1. Deliverability practitioner communities and mailing lists where the method will be criticised. Post the finding and the method, invite the criticism, respond to it in public, and update the report where the criticism lands. A public method correction is worth more than a placement.
2. Newsletters covering email infrastructure and outbound. Pitch the finding, not the site.
3. Vendors whose tools are named in the method (seed test providers, warmup tools, sequencers). They have an interest in a benchmark existing.
4. Practitioners who have published contrary folklore. Send the data, not a complaint.
5. Journalists and analysts covering email infrastructure, once the quarterly index has two editions and a trend to report.

**What is not done.** No paid links, no guest post networks, no reciprocal link schemes, no unsolicited outreach at volume, and no HARO-style pitching. A site about not burning your reputation cannot run link outreach that looks like the thing it warns about.

## 8. Technical search hygiene

- Static HTML, no client-side rendering of content.
- One canonical per page. Glossary entries that duplicate a pillar's intent canonicalise to the pillar.
- `noindex` on `/search/`, on draft previews, and on prior report versions once superseded (they stay reachable and linked, they do not compete).
- Sitemap generated from published pages only, with `lastmod` from `updated` rather than from the build date, so a rebuild does not claim every page changed.
- Robots allows everything except `/search/` and preview deployments. Preview deployments are password protected.
- Redirects are permanent and recorded, no chains.
- Feeds are full-content for the changelog and answer-length for research.

## 9. What success looks like at the query level

Ranking targets are chosen where the current top results are thin. By month six the realistic goal is first-page presence on the mechanism and sizing clusters (1, 3 and 6 in the site plan's list), not on head terms. The comparison cluster is competitive and takes longer. Cluster 6 (decay, lifespan, burn rate) has effectively no incumbents holding real data, which is why the research reports are also the ranking strategy rather than only the link strategy.
