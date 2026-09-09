# 11. Measurement

The site plan orders success as citations, rankings on decision queries, assisted conversions, return readership, and correction rate. Traffic is deliberately not first. This document defines each measure precisely enough to be tracked, sets targets, and names the ways each measure can be gamed, because a measure with a known failure mode is safer than one without.

## 1. Definitions and instrumentation

| # | Measure | Definition | How it is collected | Cadence |
|---|---|---|---|---|
| 1 | Research citations | Distinct external domains linking to a page under `/research/`, `/research/data/` or `/methodology/`, or naming the site as a source without a link | Backlink tool for links; a saved search for the site name and for the exact headline phrasings of published findings | Monthly |
| 2 | Decision-query presence | Positions for the queries listed in `08-SEO-SPEC.md` section 1, tracked as a set rather than individually | Search Console, with the query set defined once and frozen so progress is comparable | Monthly |
| 3 | Assisted conversions | Sessions that view a decision guide or a tool and then click through to warminboxes.com | Outbound click event with a UTM parameter naming the source page; matched against the partner's own attribution | Monthly |
| 4 | Return readership | RSS subscriber count for the research feed; repeat visits to `/research/`; direct traffic to report URLs | Feed request logs by unique user agent and IP hash; analytics for the rest | Monthly |
| 5 | Correction rate | Corrections published per 100 published pages, and the median days from report to fix | Counted from `/corrections/` entries | Quarterly |
| 6 | Embed usage | Third-party pages loading a chart from `/embed/` | Referrer logs on the embed routes | Monthly |
| 7 | Verification health | Share of pages within their verification interval | Build output | Weekly, automatically |
| 8 | Method challenges | Substantive public critiques of the method, and how many produced a change to a report | Manual log | Quarterly |

Measures 6, 7 and 8 are additions to the site plan's list. Embed usage is the earliest observable signal that the research is being reused, and it moves before backlinks do. Verification health is the leading indicator of quality decay. Method challenges are the measure that matters most for the sceptic audience: a research site that has never been publicly challenged is one nobody has taken seriously enough to check.

## 2. Targets

Targets are for the first year and are deliberately modest on volume and demanding on quality.

| Measure | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Research citations (distinct domains) | 3 | 12 | 40 |
| Decision-query set, top-10 share | 10% | 30% | 55% |
| Assisted conversions per month | tracked, no target | baseline set | 3x the month-6 baseline |
| RSS subscribers | 50 | 250 | 900 |
| Corrections published | at least 1 | at least 3 | at least 6 |
| Embed usage (distinct referrers) | 1 | 8 | 30 |
| Verification health | 100% | 100% | 100% |
| Method challenges answered in public | 0 | 1 | 3 |

The corrections target is a floor, not a ceiling, and it is the only target on this list where a zero is a failure rather than a success. Zero corrections after six months means either nobody is reading the numbers closely or nobody internally is re-checking them, and both are worse than a handful of published fixes.

Verification health at 100% is achievable because the build enforces it. If it ever drops, the cause is that the publication cadence outran the verification capacity, and the response is to publish less, not to relax the interval.

## 3. Reporting

A one-page monthly review covering: the eight measures against target, what was published, what was verified, what was corrected, which decisions the site still cannot answer, and one thing to stop doing. It is written by the editor and takes an hour.

Quarterly, a longer review that also covers: the topic map (what to retire), the dataset registry (what is going stale), the query set (what changed in the market), and the risk register in `12-RISKS.md`.

## 4. How each measure could be gamed, and the guard

| Measure | Gaming | Guard |
|---|---|---|
| Citations | Buying links or arranging reciprocal mentions | No paid or reciprocal links, stated in the editorial policy; citations from paid placements are excluded from the count and the exclusion is noted |
| Rankings | Publishing thin pages against long-tail variants | The query-to-page map allows one page per intent, and the purpose test blocks pages with no decision |
| Assisted conversions | Adding calls to action, increasing outbound link density | The one-contextual-link rule per page is enforced in the link linter; conversions rising because link density rose is reported as such |
| Return readership | Email capture friction, gating research | No gating and no popups are non-negotiables in the plan |
| Correction rate | Logging trivial typo fixes as corrections | Only substantive corrections (a number, a recommendation, a source) are logged; typos are excluded by policy |
| Embed usage | Self-embedding | Own domains excluded from the referrer count |

## 5. What is not measured

Time on page, scroll depth, bounce rate and pageviews per session are not tracked and not reported. They would push the site toward length and engagement tricks, and neither improves a decision guide. Total traffic is recorded because it is unavoidable, and it is reported at the bottom of the review rather than the top, as context for the other numbers rather than as a goal.
