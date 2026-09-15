# 20. URL map, version 2

The merged site. `02-URL-MAP.md` remains the authority for the 169 URLs of programmes 1 and 2; this document adds programmes 3, 4 and 5 and the outbound vertical, and restates the totals.

## Sections

```
/                        Home
/learn/                  Fundamentals                         12   (unchanged)
/how-it-works/           Mechanics                            17   (unchanged)
/decide/                 Decision guides                       9   (unchanged)
/b2b/                    Team playbooks                       13   (unchanged)
/deliverability/         Deliverability reference             12   (unchanged)
/outbound/               Outbound practice                    12   NEW
/checks/                 One guide per check                  39   NEW (see note)
/tools/                  Our five calculators                  5   (unchanged)
/stack/                  Vendor coverage                      50   NEW
/developers/             API and MCP                          22   NEW
/research/               Reports                              11   (unchanged)
/research/data/          Dataset pages                        11   (+1: D11)
/glossary/               Terms                                63   (unchanged)
Trust and utility pages                                       10   (+2)
Section indexes                                               13   (+4)
```

## New section detail

### `/checks/` (programme 3)

39 guides is the ceiling, not the target. Per `16-TOOLS-HUB.md` section 4, two tools doing one job get one guide, and the count lands wherever the distinct jobs land. Slugs are the question: `/checks/is-my-domain-blacklisted/`, `/checks/is-my-spf-record-valid/`, `/checks/will-this-domain-expire/`.

Plus `/checks/` (the hub, organised by stage) and `/checks/before-you-send/` (the ordered run).

### `/stack/` (programme 4)

| Type | Pattern | Count |
|---|---|---|
| Category indexes | `/stack/sequencers/`, `/stack/warmup-tools/`, `/stack/email-verification/`, `/stack/lead-data/`, `/stack/monitoring/`, `/stack/inbox-providers/`, `/stack/middleware/` | 7 |
| Scoring rubrics | `/stack/how-we-score-sequencers/` and one per category | 4 |
| Vendor reviews | `/stack/<category>/<vendor>/` | 14 |
| Head-to-heads | `/stack/sequencers/<a>-vs-<b>/` | 8 |
| Use-case roundups | `/stack/best-sequencers-for-agencies/` and similar | 5 |
| Integration guides | `/stack/integrations/<sequencer>-with-<provider>/` | 12 |

50 URLs, and the one section where the count should be allowed to shrink rather than grow. Eight current reviews beat twenty stale ones.

### `/developers/` (programme 5)

22 URLs per `18-DEVELOPER-DOCS.md` section 2, of which roughly half are generated from the OpenAPI spec.

### `/outbound/` (S1 to S12)

12 URLs per `19-SALES-RESEARCH.md`.

### New trust and utility pages

| URL | Why |
|---|---|
| `/affiliate-policy/` | Required by `15-MONETISATION-AND-TRUST.md`. Footer-linked next to methodology. |
| `/stack/how-we-test/` | The cross-category version of the rubric: what hands-on means, what the header test is, what a score does not mean. |

## Totals

| Programme | URLs |
|---|---|
| 1. Research (reports, datasets) | 22 |
| 2. Reference (learn, how-it-works, decide, b2b, deliverability, outbound, glossary) | 128 |
| 3. Checks and tools | 46 |
| 4. Vendor coverage | 50 |
| 5. Developer | 22 |
| Home, trust, section indexes | 24 |
| **Total** | **292** |

Down from the 330 estimate in `14-POSITIONING.md` because the checks programme consolidates overlapping tools and the vendor programme is capped deliberately.

## The consequence nobody costs in advance

292 URLs under the verification intervals in `EDITORIAL-STANDARDS.md` is roughly **1,100 verification passes a year**. At 20 minutes each that is 370 hours, or about 0.2 of a full-time person doing nothing but re-checking pages. Vendor reviews and developer docs are the expensive ones because they require re-testing rather than re-reading.

Three options, and the choice should be made now rather than discovered in month nine:

1. **Cap the site at roughly 200 URLs** by covering eight vendors instead of fourteen and consolidating the checks harder.
2. **Budget the verification person.** Explicit, funded, and the honest answer if all five programmes ship.
3. **Differentiate the intervals by decay rate**: vendor reviews and developer docs at 180 days with re-testing, checks at 180 days, research on data refresh, fundamentals at 365. Fundamentals genuinely do not change every six months, and the current 180-day interval on them buys little.

Recommendation: option 3 now, and option 1 if the verification queue is ever missed twice in a quarter. Option 2 only when revenue supports it.

## Cannibalisation boundaries, new pairs

The boundary rules in `02-URL-MAP.md` still apply. Five new pairs need them:

| Pair | Boundary |
|---|---|
| `/checks/is-my-spf-record-valid/` vs L7 (SPF, DKIM, DMARC) vs T3 (checker) | The check guide is diagnostic: run it, read the result, fix it. L7 is the mechanism of all three records. T3 is the tool. The check guide links to both and repeats neither. |
| `/checks/is-my-domain-blacklisted/` vs L11 (which blacklists matter) | The check guide handles a specific result on a specific domain. L11 answers whether to care at all. |
| `/stack/warmup-tools/` vs L8 (what warmup does) vs R6 (warmup vs real placement) | Products, mechanism, evidence. In that order, each linking down. |
| `/outbound/S2` (copy and filtering) vs K5 (content filtering) | K5 is what the filter reacts to. S2 is what a writer should do about it. K5 is cited by S2. |
| `/stack/inbox-providers/` vs H15 (Google vs Microsoft vs Azure) vs DC3 (which to buy) | H15 is the platforms' behaviour. DC3 is the decision. The stack page is the vendor register, and it carries the ownership conflict line. |

## Programme colour in navigation

Primary nav grows from six items to seven: Start here, How it works, Decide, Checks, The stack, Research, Developers. "For teams" and "Tools" move into the section indexes they belong to, because nine primary items is a menu and six or seven is navigation.

`/outbound/` sits under "Start here" and "Decide" rather than taking a nav slot of its own, since its readers arrive by search rather than by browsing.
