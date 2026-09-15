# 21. Roadmap, version 2: parallel tracks

Two tracks from week one, per the decision in this session. `10-ROADMAP.md` remains the detail for Track A weeks 1 to 14; this document adds Track B, states the dependencies between them, and revises the staffing.

The single most important line in this document: **no page in programme 4 publishes before the first research report is live.** Everything else can be resequenced.

---

## 1. The two tracks

| | Track A: credibility | Track B: surface area |
|---|---|---|
| Programmes | 1 Research, 2 Reference | 3 Checks, 4 Vendor coverage, 5 Developer |
| Output | Cornerstones, R1, R3, R9, methodology | 39 check guides, vendor register, API and MCP docs |
| Owned by | Author 1, analyst, reviewer | Author 2, engineer, operator |
| Gated by | Data consent, placement method | Tool register, API spec, MCP tool list |
| Measured by | Citations, method challenges | Traffic, affiliate conversion, developer signups |
| Ships first | Trust pages, then cornerstones | Check guides batch 1 |

Each track has one thing the other cannot supply. Track A supplies the reason anyone trusts Track B's recommendations. Track B supplies the traffic and the revenue that pay for Track A. Running them sequentially wastes a quarter; running them without the gate below produces an affiliate site with a research section bolted on.

## 2. The gates between them

| Gate | Rule | Why |
|---|---|---|
| **G1** | Trust pages live before anything else publishes: methodology, editorial policy, disclosure, affiliate policy, corrections, about with real names | A check guide that lands before the policy pages is an affiliate page by default |
| **G2** | No `/stack/` page publishes until R1 or R9 is live | The vendor section must arrive on a site that already demonstrably does research |
| **G3** | The scoring rubric publishes before the first vendor review, with a commit date | The order is the evidence that scores preceded commercial conversations |
| **G4** | No affiliate link ships before `/affiliate-policy/` is live and populated from the programme register | Disclosure cannot lag the link, legally or editorially |
| **G5** | No D11 statistic publishes before intake I-2 confirms what the tools log today | A privacy question resolved before it becomes a research opportunity |
| **G6** | Developer docs wait on a stable API | Documentation for a weekly-changing API is worse than none |

G2 and G4 are the two that will feel slow and are the two that matter. G4 in particular blocks revenue for a few weeks, and that is the correct trade.

## 3. Schedule

Sixteen weeks. Dates assume a Monday start; adjust the column, not the sequence.

| Week | Track A | Track B | Data and engineering |
|---|---|---|---|
| 1 | Briefs L1, L3, L5. Author and reviewer confirmed | Tool register intake I-1 issued. Batch 1 briefs from the seven public tools | Repo, Astro, tokens, article template. Terms and consent audit |
| 2 | Trust pages drafted, including affiliate policy | Check guide template built and tested on one guide | Content schemas, linters including the affiliate linters |
| 3 | L1, L3 drafted. Methodology from the real method | Batch 1 guides 1 to 3 | D1 and D7 delivery. Validation script. **G1** |
| 4 | L5, L7 drafted. Briefs H2, H4, H5, H8 | Batch 1 guides 4 to 7. `/checks/` hub | Report and dataset templates. R1 pre-registration |
| 5 | L8, H1 drafted. L1, L3 in review | Scoring rubric written and published. **G3** | Chart build from CSV. D3 delivery and rubric |
| 6 | H2, H4 drafted | Sequencer 1 and 2 hands-on testing, including header tests | Tool template. T1 and T4. Affiliate programme register |
| 7 | H5, H8 drafted | Sequencer reviews 1 and 2 drafted, held for G2 | Accessibility pass. Integration register intake I-3 |
| 8 | DC1, DC2 drafted. K11 | Check guides batch 2 begins. API intake I-5 chased | **R1 published.** Dataset D1. **G2 clears** |
| 9 | DC9, L9, H3, H6 | Sequencer reviews 1 and 2 publish. `/affiliate-policy/` live. **G4** | R3 analysis. D9 observation round |
| 10 | H10, H9, H11, H12 | Sequencer 3, category index, first integration guides | **R3 published.** Dataset D3 |
| 11 | H13, H14, H15, H17 | Check guides batch 2 completes | R2 analysis. Developer docs scaffold if I-5 landed |
| 12 | DC3, DC6, B1 to B4 | `/developers/` quickstart and reference. MCP tools page | **R9 published.** T2, T3, T5 |
| 13 | B5 to B8. Outbound S1 to S4 | Check guides batch 3. First use-case roundup | R2 published. D11 pipeline if I-2 cleared |
| 14 | B9 to B13. Outbound S5 to S8 | MCP recipes. Head-to-heads | Link graph audit |
| 15 | K1 to K6. Outbound S9 to S12 | Check guides batch 4. `/checks/before-you-send/` | Freshness and print passes |
| 16 | K7 to K12, L6, L10 to L12, DC4, DC5, DC7, DC8 | Remaining integration guides. Developer changelog and status | Launch review, Lighthouse and axe on every template |

Weeks 15 and 16 on Track A carry 22 pages between them and remain the least realistic part of the plan, exactly as flagged in `10-ROADMAP.md` section 4. With two authors it is tight rather than impossible. With one it slips to week 22 and should be planned that way.

## 4. Staffing

Parallel tracks require a second author. That is the cost of the decision and it is not avoidable by working harder.

| Role | Weeks 1 to 4 | Weeks 5 to 16 | Steady state |
|---|---|---|---|
| Engineer | Full time | 1.5 days a week | 2 days a month |
| Author 1 (research and reference) | 0.8 FTE | 1.0 FTE | 0.8 FTE |
| Author 2 (checks, stack, developer) | 0.6 FTE | 1.0 FTE | 0.6 FTE |
| Reviewer | 3 hours a week | 8 to 12 hours a week | 5 hours a week |
| Analyst | 2 days a week | 3 days a week | 4 to 6 days per report |
| Operator | 3 hours a week | 4 hours a week | 2 hours a week |

The reviewer load is the one most likely to be underestimated. In weeks 8 to 12 it covers a research re-run plus three or four articles plus the first vendor reviews, where reviewing means checking a hands-on claim, not reading prose. That is most of a working week.

Author 2 needs to be someone who has run a sequencer at scale. The vendor programme's entire value is the operator lens, and a generalist writer will produce the review everyone else already published.

## 5. Contingencies

| If | Then |
|---|---|
| Data consent or placement method unresolved at week 3 | R9 becomes the week 8 report and clears G2 on schedule. Track A holds the seven data-dependent cornerstones and ships the six mechanism ones. Already planned in `10-ROADMAP.md` section 3. |
| Tool register I-1 does not arrive | Track B runs on batch 1 (seven public tools) and then moves to vendor coverage early, which needs no intake beyond I-3 and I-4. |
| API is not stable | Programme 5 drops to the MCP design article in programme 2 and waits. Do not document a moving API. |
| Tools currently log full domains | G5 holds. Fix the logging, then build D11. No statistic ships from data collected under the old behaviour. |
| Only one author is available | Track B runs at half rate. Order: check guides batch 1, scoring rubric, three vendor reviews, integration guides. Developer docs move to phase 4. |
| A vendor asks for editorial input | Record it, decline it, publish that it happened in the programme register. This is a contingency because it will happen. |

## 6. What "done" means for each programme

| Programme | Done |
|---|---|
| 1 Research | Three reports live with datasets, scripts, pre-registrations and sign-offs; the index defined |
| 2 Reference | Cornerstones plus the H, DC, B, K and S series; glossary complete |
| 3 Checks | Every distinct check documented, the hub organised by stage, the pre-send run page live, D11 feeding section 6 of each guide |
| 4 Vendor | Rubric published, at least eight current hands-on reviews, integration guides for every sequencer in the register, affiliate policy populated |
| 5 Developer | Quickstart, generated reference, five guides, MCP install, tools, safety and five recipes, all with CI-tested examples |

## 7. Steady state, revised

| Cadence | Work |
|---|---|
| Weekly | Two to three substantive pages across both tracks; verification queue; one distribution action |
| Monthly | One research report or version bump; R9 price re-observation; affiliate programme register refresh; one vendor re-test |
| Quarterly | The Prewarmed Index; affiliate policy refresh; topic map review including retirements; risk register review |
| Annually | Revenue-mix note; re-verify every source; re-run R1 on a fresh cohort as v2 |

The monthly vendor re-test is new and it is what keeps programme 4 from rotting. One vendor per month means a fourteen-vendor register is fully re-tested every fourteen months, which is roughly the right cadence for this category.
