# 10. Roadmap

Fourteen weeks to the full topic map, then a steady state. Three workstreams run in parallel: engineering, editorial and data. The plan is sequenced so that the data workstream, which is the one with external dependencies and the highest chance of slipping, never blocks the other two.

Weeks are numbered from the first Monday after the decisions in `01-DECISIONS.md` D-01 to D-04 are answered. Dates below assume a start on Monday 14 September 2026; adjust the column, not the sequence.

## 1. Gantt in words

| Week | Engineering | Editorial | Data |
|---|---|---|---|
| 1 (14 Sep) | Repo, Astro, tokens, article template, CI skeleton | Briefs for L1, L3, L5; author and reviewer confirmed | Terms and consent audit; intake record; pseudonymisation script |
| 2 | Content schemas, content linters, link graph, freshness check | Trust pages drafted; briefs for L7, L8, H1 | D1 and D7 first delivery; validation script |
| 3 | Report and dataset templates, chart build from CSV | L1, L3 drafted; methodology page drafted from the real method | D1 coverage table; go or no-go on R1's n; placement-method write-up |
| 4 | Tool template, Pagefind, feeds, OG images | L5, L7 drafted; briefs for H2, H4, H5, H8 | R1 pre-registration and analysis script; D3 delivery and rubric |
| 5 | Structured data, embed routes, performance budget in CI | L8, H1 drafted; L1, L3 in review | R1 reviewer re-run; D3 double attribution sample |
| 6 | Tool parity check; T1 and T4 build | H2, H4 drafted; briefs for DC1, DC2, DC9 | R1 charts final; D2 delivery begins |
| 7 | Accessibility pass, print styles for checklists | H5, H8 drafted; cornerstones in review | R3 pre-registration and analysis |
| 8 | Embeddable charts and citation blocks | DC1, DC2 drafted; K11 drafted | R1 published; dataset page D1 |
| 9 | Glossary template and 63 stubs to entries | DC9, L9, H3, H6, H10 | R3 published; dataset page D3; R9 first observation round |
| 10 | Section index pages, home page final | H-series batch 2 (H9, H11, H12, H13, H14) | R2 analysis; D9 second observation |
| 11 | Search tuning, RSS, sitemap review | H15, H17, DC3, DC6 | R2 published; dataset page D2 |
| 12 | T2, T3, T5 build including the two edge functions | B-series batch 1 (B1, B2, B3, B4, B6, B11) | R9 published; dataset page D9 |
| 13 | Link graph audit, orphan clean-up | B-series batch 2 (B5, B7, B10, B12, B13) | D4, D5, D6 intake for phase 4 reports |
| 14 | Lighthouse and axe on every template; launch review | K-series (K1 to K10, K12), L6, L10 to L12, DC4, DC5, DC7, DC8 | R11 index definition frozen |

Weeks 13 and 14 carry the heaviest editorial load in the table and that is the least realistic part of this plan. See section 4.

## 2. Phase gates

Each gate is a go or no-go with a named decider. Failing a gate means the phase does not advance; it does not mean the work is abandoned.

**Gate 0, end of week 2. Foundation.**
Site deploys. Trust pages live: methodology (may be marked draft), editorial policy, disclosure, about with real names, corrections with a monitored address. Content schema rejects a page with no reviewer. Decision: proceed to cornerstones.

**Gate 1, end of week 7. Cornerstones.**
Twelve cornerstone pages drafted, at least eight published, each passing the checklist. Internal link rules satisfied with no orphans. Schema validated. Decision: proceed to research publication.

**Gate 2, end of week 9. First research.**
R1 and R3 published with dataset pages, committed analysis scripts, reviewer sign-off files, embeddable charts and citation blocks. The pages that cite them updated in the same pull requests. Decision: proceed to depth, and begin distribution.

**Gate 3, end of week 14. Depth.**
Full topic map live or explicitly deferred with reasons. Glossary complete. Five tools live. No page past its verification interval. Decision: move to steady state cadence.

**Gate 4, quarterly, thereafter.**
The index publishes on schedule with a stable metric definition. No page older than its interval without verification. The corrections log has at least one entry, because a research site with no corrections after six months is not being checked.

## 3. Contingency: the data does not arrive

The likeliest failure is that D-02 or D-06 is unresolved at week 3, or that the D1 coverage table shows too few domains. The contingency is already in the plan and it is invoked, not improvised:

1. **Research section still launches**, with R9, the price benchmark, built entirely from public vendor pricing pages. Its method is fully documented and it needs no customer data.
2. **Cornerstone pages ship without proprietary numbers.** L5, L7, L8, H1, H4 and DC8 are mechanism and process pages whose evidence is provider documentation and operator process. Six of the twelve cornerstones are unaffected by the data delay.
3. **Pages that cannot ship honestly are held.** L1, L3, H2, H5, H8, DC1 and DC2 all lean on proprietary data. Rather than publishing them with borrowed statistics from other blogs, they are held and the `<NotKnown>` component is used where a partial version is genuinely useful. The site is smaller and correct rather than complete and unsupported.
4. **The data workstream continues in parallel** on consent and method, and the held pages ship in a batch when the data lands.

The one thing not done under this contingency is filling the gap with folklore or with numbers from competitor blog posts, which would remove the entire reason for the site to exist.

## 4. What is unrealistic in this schedule, stated plainly

- **Weeks 13 and 14 assume 22 pages in two weeks.** At the quality bar in the editorial standards that is roughly three times a realistic rate for one author. Either the K-series and compliance cluster slip to weeks 15 to 20, or a second author joins from week 10. Planning for the slip is cheaper than discovering it.
- **The reviewer's load in weeks 5 to 9** is one report re-run plus three or four articles a week. That is most of a working week for one person during those weeks.
- **The verification queue starts biting at week 14**, when the earliest cornerstone pages reach 90 days. Steady state must budget it from the start rather than treating it as a later problem.
- **Two tools with edge functions in week 12** is optimistic if rate limiting, caching and the no-logging requirement are being built for the first time. T3 and T5 are the two most likely candidates to move to week 16.

The honest version of the plan is 14 weeks to a strong 90-page site plus the three reports, and 20 weeks to the full 169 URLs.

## 5. Steady state, from week 15

| Cadence | Work |
|---|---|
| Weekly | Two to three substantive pages; verification queue; one distribution action on the most recent report |
| Monthly | One research report or a version bump on an existing one; R9 price re-observation; external link check triage |
| Quarterly | The Prewarmed Index edition; a topic map review where pages are retired as well as added; a review of which decisions the site still cannot answer |
| Annually | Re-verify every source in the bibliography; re-run R1 on a fresh cohort as a version 2 with its own pre-registration |

Retiring pages matters as much as adding them. A page that no longer answers a decision anyone is making is removed with a redirect, and that shows up in the changelog like any other substantive change.

## 6. Staffing and cost shape

Not a budget, a shape. Fill in local rates.

| Role | Weeks 1 to 4 | Weeks 5 to 14 | Steady state |
|---|---|---|---|
| Engineer | Full time | 1 day a week | 1 to 2 days a month |
| Editor and author | 0.6 FTE | 1.0 FTE, or 1.6 with a second author | 0.8 FTE |
| Reviewer | 2 hours a week | 6 to 10 hours a week | 4 hours a week |
| Analyst | 2 days a week | 3 days a week | 4 to 6 days per report |
| Operator input | 2 hours a week | 2 hours a week | 1 hour a week |

Non-labour costs are small and worth naming so they are not forgotten: domain and DNS, hosting (within a free or low tier at this traffic), cookieless analytics, a seed testing tool for placement measurement, screenshot archiving for R9, and the external reviewer's fee. The reviewer fee is the highest value line in that list.
