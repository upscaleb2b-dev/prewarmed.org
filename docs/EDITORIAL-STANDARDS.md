# prewarmed.org: editorial standards

These rules exist so the site reads as analysis rather than content. They are a checklist applied to every page before publication and again at each re-verification. A page that fails any "must" item does not ship.

---

## 1. Purpose test

Every page must answer a decision a named persona (P1 to P5 in `SITE-PLAN.md`) is actually trying to make. The page brief states the persona, the decision, and the one-paragraph answer before any drafting begins. If the answer cannot be written in a paragraph, the page is two pages.

## 2. Structure of an article

1. Title as the question or the claim. Not "The ultimate guide to...".
2. Answer first. The first 100 words give the answer and the main condition under which it changes.
3. Context. What the reader is likely confused about and why (name the folklore).
4. Mechanism. How the filter, provider, or protocol actually behaves, with the provider's own documentation cited.
5. Evidence. The chart, table, or number from a dataset page, with n and date range.
6. What to do. Steps, thresholds, and the point at which to stop or escalate.
7. Limitations. Where the data is thin, where results may not generalise, where reasonable operators disagree.
8. Sources. Numbered list; every number in the body maps to one.
9. Metadata block: author, reviewer, published, last verified, changelog link, disclosure line.

Research reports use: question, data and method, findings, implications by persona, limitations, dataset, citation block.

## 3. Evidence rules (must)

- Every quantitative claim cites either a dataset page on this site, a primary provider source (Google, Microsoft, Yahoo, Apple documentation; RFCs; registry policy), a regulator, or a named third party with a link. Unsourced numbers are removed, not softened.
- Every chart shows n, date range, and the dataset ID. Charts are generated from committed CSV; no number is typed into a chart by hand.
- Proprietary data is cited in a fixed format: "WarmInboxes infrastructure data, D1, n = 1,214 domains, Jan to Jun 2026" linking to `/research/data/d1/`.
- Where proprietary data and public folklore disagree, say so explicitly and show both.
- Where the data cannot answer a question, the page says "we do not have data on this" rather than filling the gap with a plausible sentence.
- Claims about competitors or other vendors are limited to what is publicly documented and linked.

## 4. Language rules

Must:

- Concrete nouns and verbs. "Gmail routed 31% of the cohort to spam on day one" not "deliverability challenges can occur".
- State the mechanism before the tip.
- Use the reader's units: emails per inbox per day, domains, dollars per inbox per month, days.
- Define a term once, link the glossary, then use it without hedging.
- Prefer short declarative sentences. One idea per sentence.

Must not (a page containing any of these is returned for rewrite):

- Filler openers: "In today's fast-paced world", "In the ever-evolving landscape", "Email deliverability is crucial", "Let's dive in", "Without further ado".
- Empty intensifiers: "game-changer", "unlock", "supercharge", "skyrocket", "seamless", "robust", "leverage", "cutting-edge", "best-in-class", "revolutionary".
- Hedged non-claims: "may potentially", "can often help", "it is generally recommended".
- Listicle scaffolding: numbered tips without mechanism, "Top 10" titles, "Conclusion" headings that restate the intro.
- Rhetorical questions as transitions.
- Em-dashes (house style, consistent with coldemail.it).
- Any sentence that would be true of any product in the category.
- Second-person flattery ("you're smart enough to know...").

## 5. Author, review and dating (must)

- Named author with a real role. No "the team" bylines.
- Named reviewer who did not write the piece. For research, the reviewer re-runs the numbers from the CSV.
- Published date, last-verified date, and a changelog entry for every substantive change (a number changes, a recommendation changes, a section is added or removed). Typos do not go in the changelog.
- Re-verification every 90 days for decision guides and how-it-works pages, every 180 days for fundamentals, on every data refresh for research.

## 6. AI assistance disclosure

Drafting assistance from language models is permitted for structure, first drafts and editing. It is disclosed in the editorial policy in one sentence. It does not substitute for any evidence rule: models do not generate numbers, sources, or claims about provider behaviour. A human author is accountable for every sentence.

## 7. Corrections

A corrections policy is published. Readers can report errors by email. Confirmed errors are fixed within five working days, noted in the changelog, and, where the correction changes a recommendation, flagged at the top of the page for 30 days.

## 8. Commercial separation

Amended 15 September 2026. The previous version banned affiliate links outright. The site now has two revenue streams and both are disclosed where they appear: we operate WarmInboxes, and we earn affiliate commission on some of the software we review. The operating detail is in `plan/15-MONETISATION-AND-TRUST.md`; the rules below are the standard.

- Commercial terms never influence a ranking, a score or a recommendation. Vendors are scored against the published rubric before any commercial conversation, and the score carries its date. A rate change never triggers a content change; a product change does.
- Research reports, dataset pages and trust pages carry no commercial links of any kind.
- Affiliate links are marked at the point of the link, carry `rel="sponsored"`, and appear only on pages that also carry the disclosure notice above the first such link. Every programme we are in is listed publicly at `/affiliate-policy/` with its rate band.
- Every comparison includes at least one option we earn nothing from, labelled. If the category has none, the page says so.
- WarmInboxes is linked where it is the source of data or the natural next step for the decision at hand. Target one contextual link per page. Where it competes with a vendor under review, the ownership conflict is stated in the body next to the first mention, and WarmInboxes is scored on the same rubric as everyone else.
- No page recommends WarmInboxes, or any reviewed product, as the answer to a question the evidence does not support. If the data shows a case where prewarmed infrastructure is the wrong choice (one-off sends under a threshold, a recipient mix that behaves differently, a compliance regime that forbids the use case), the page says so.
- Vendor evaluation pages (DC4, B9) apply the same disqualifying questions to WarmInboxes and publish the answers.
- No paid placement, no sponsored content, no paid or expedited review, no paid guest posts, no link buying or exchange. Applies to us buying and to others buying from us.
- Once a year we publish the revenue mix: the share from WarmInboxes, the share from affiliate commission, and the three vendors that generated the most commission.

## 9. Disclosure text

Choose one; it appears in the footer of every page and in full at `/disclosure/`.

Variant A (operated by WarmInboxes):

> prewarmed.org is published by the team that operates WarmInboxes, a provider of prewarmed domains and inboxes. The research on this site is built from WarmInboxes' own infrastructure data and is described in full on the methodology page. We sell the thing we write about; the editorial standards explain how we keep the analysis honest, and where our data cannot answer a question we say so.

Variant B (independent site with a data partnership):

> prewarmed.org is an independent publication. Its research uses infrastructure data provided under agreement by WarmInboxes, a provider of prewarmed domains and inboxes, and described in full on the methodology page. WarmInboxes does not review or approve editorial content. Where WarmInboxes is linked, it is as the data source or as one option among others.

## 10. Pre-publication checklist

- [ ] Persona and decision stated in brief; answer in first 100 words
- [ ] Every number sourced; every chart carries n, date range, dataset ID
- [ ] Mechanism explained with primary source before any recommendation
- [ ] Limitations section present and specific
- [ ] Glossary terms linked on first use; forward link to a decision guide or tool; back link from the relevant pillar
- [ ] Banned-phrase scan passes (automated in the build)
- [ ] Author, reviewer, dates, changelog, disclosure line present
- [ ] If the page carries affiliate links: notice above the first one, marker on each, `rel="sponsored"`, every vendor in the programme register, at least one non-affiliate option present
- [ ] Article and FAQ schema validated; title is the question; slug is four to six words
- [ ] Read aloud once; any sentence that could appear on a competitor's site unchanged is rewritten or deleted
