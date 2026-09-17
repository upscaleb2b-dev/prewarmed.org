# 24. Aged domains carrying a Spamhaus score: what is true, and how the sourcing actually works

A claim is circulating in the cold email market: there are domains ten to thirty years old that already hold a positive Spamhaus reputation score and are still available to register at the standard retail price, and a subscription product can hand you a filtered list of them. At least one vendor sells exactly this.

This note settles what part of that is established, what part is unproven in either direction, and what a sourcing pipeline that produces such a list really has to do. It gates two decisions. Editorially, whether pages L3, H12 and R5 repeat the claim, correct it, or test it. Operationally, whether WarmInboxes sources domains this way.

The short version: the premise is not absurd and the popular rebuttal is also wrong. The Spamhaus reputation record is documented to outlive a domain's delegation, so a name that is available to register can return a non-zero record. What nobody has published is whether that score survives a change of registrant, and whether it predicts anything about placement at the two providers that decide placement. That second question is the one that matters, and it is cheap to answer.

---

## 1. Two different Spamhaus products get conflated

Almost every argument about this happens because the two sides are talking about different products.

| | Domain Blocklist (DBL) | Domain reputation data (API) |
|---|---|---|
| Shape of the answer | Binary. Listed or not listed, with a return code giving the reason | A score, plus a breakdown by dimension |
| Access | DNSBL query, free at low volume from a non-datacentre resolver, or through a Data Query Service key | Commercial API, metered, keyed |
| Sign convention | Listing is bad. There is no good listing | Zero is neutral, positive is good reputation, negative is bad |
| Who consumes it | Inbound mail filters | Filter operators, security teams, and anyone who buys the intelligence feed |

The screenshot that starts most of these conversations is the second product. Its score is the sum of the dimensions below, and the sign convention is the opposite of what people assume when they hear the word Spamhaus: a high positive number is a clean, well-regarded domain, not a heavily listed one [1] [2].

The dimensions, and what drives each [1]:

| Dimension | Driven by |
|---|---|
| SMTP | Rules applied to signal extracted from global email metadata shared by first and third party partners |
| Identity | Rules applied to various sources of domain-related data |
| Infrastructure | Scoring of the hosts the domain resolves to. Hosting on a network whose IP reputation is poor enough to appear in the drop datasets drags this down |
| Malware | First and third party feeds, including abuse.ch, associating the domain with malware |
| Researcher | The view of a named Spamhaus researcher |

Three of those five are recomputed from what the domain is doing now. That is the load-bearing fact for everything below.

## 2. What is established, and what is not

**Established from Spamhaus documentation:**

- The score is the combined value of the dimensions, zero neutral, higher positive meaning better reputation [2].
- The dimensions are produced as described above, mostly from live signal [1].
- The API record carries a `deactivated-ts` field: the UNIX timestamp at which the domain's delegation disappeared from the root zone, because it expired or the registrar suspended it [1].

That third point is the one both sides of the argument miss. Spamhaus models deactivation as an attribute of a record it keeps, not as the deletion of the record. A domain that has dropped out of the root zone, and is therefore available to register, can still have a record to return. "A dropped domain always resets to zero" is an assumption, not a documented behaviour.

**Not established anywhere public, and not to be asserted on a page:**

1. Whether the score decays after `deactivated-ts` is set, and on what curve.
2. Whether a score survives a change of registrant, or whether re-delegation resets the history that produced it.
3. How fast the infrastructure and SMTP dimensions recompute once the domain resolves to a new host and starts sending. Since both are live-signal dimensions, a new owner's own infrastructure should dominate within weeks, which would make a purchased historical score a wasting asset even if it does transfer.
4. Whether a positive score on the purchase date predicts anything at all about inbox placement.

So the honest sentence for a page is: the reputation record can outlive the registration, and Spamhaus has a field that says so, but no published evidence shows that the score transfers to a new registrant or that it moves placement. Not: "expired domains reset to zero."

## 3. The score is not the gate, which is the deeper problem

Set aside whether the score transfers. Ask what consumes it.

Placement for a cold email programme is decided by Google and by Microsoft. Microsoft's inbound decisions run on the reputation engine inside Exchange Online Protection, and Exchange has no native support for DBL or other domain blocklists. Google does not enforce a connection-level block on the strength of a Spamhaus listing alone. Both use their own systems, and neither documents any dependence on the Spamhaus domain reputation score [3] [4].

The Spamhaus reputation score is an intelligence product sold to people who operate filters. Buying a domain because that product rates it well is optimising a number the gatekeeper does not read. A positive score is worth something as a negative screen, that is, as evidence the name is not currently poisoned, and it is worth nothing as evidence that Gmail will inbox you on day one. A domain can hold a good Spamhaus score and go to spam at Gmail on its first send, because the thing Gmail is missing is engagement history against its own users, which no third party can sell.

This is the same shape as the site's existing position on age in `03-PAGE-BRIEFS.md`: age is a cheap listing attribute, which is why it is the one that gets sold. A vendor-visible reputation number is the same trade one layer up. It is cheap to display and it is not the constraint.

Sources 3 and 4 are secondary. Before any of this goes on a page, the claim about EOP and about Google needs a primary citation from Microsoft and Google documentation, or it gets stated as "we could not find a provider statement either way" per section 3 of the editorial standards.

## 4. How the pipeline actually works

The popular description of how these vendors operate is wrong in three specific places: there is no single global registry feed you simply connect to, WHOIS creation dates do not mean what the description assumes, and the reputation API cannot be called on the whole candidate set because it is metered.

The real cascade, ordered by cost per candidate ascending. Every stage has to reject more than it costs to run.

| Stage | Source | Cost | What it establishes |
|---|---|---|---|
| A. Candidates | ICANN CZDS zone files, one per gTLD, diffed against yesterday | Free after approval, bulk download | Names that left the zone in the last 24 hours |
| B. Availability | RDAP, registry endpoint from the IANA bootstrap file | Free, rate limited | 404 means unregistered. `pendingDelete` or `redemptionPeriod` means not yet available |
| C. Claimed age | RDAP registration event | Free, same call as B | A lower bound only. See below |
| D. True age and prior use | Historical WHOIS, Wayback snapshot count and first snapshot, passive DNS and historical MX | Cheap to moderate | Whether the name is genuinely old, and what it was |
| E. Abuse screen | DBL and ZEN through a DQS key, SURBL, URIBL | One DNS query each | Whether the name is currently listed |
| F. Reputation score | Spamhaus domain reputation API | Metered, per call | The score and its dimension breakdown |
| G. Human review | Archive evidence read by a person | Expensive | Whether the prior use disqualifies the name |

**Stage A.** Zone file access is granted per TLD through CZDS, on an application that states a purpose, and the grant expires and has to be renewed. Most ccTLDs do not participate. The daily diff of a zone against the previous day is the honest primary signal for deletions: a name in yesterday's zone and not in today's has lost delegation. Registry drop lists and aftermarket aggregators are the cheaper proxy for anyone without zone access, at the cost of being one step behind and being the same list everyone else buys.

**Stages B and C, and the trap in them.** The registration date returned by RDAP is the date of the *current* registration. For most registries, a domain that dropped and was re-registered carries the date of the most recent registration, not the original. The direction of the error runs both ways and both are damaging: a genuinely old name can read as new, and, more commonly in the aftermarket, a listing that claims "registered 2003" is quoting a historical WHOIS record for a registration that has since lapsed and been replaced. Establishing true first registration needs historical WHOIS or archive evidence, which is stage D and costs money. This is the single most common defect in aged-domain inventory, and it is why an age filter applied to the RDAP date alone produces a list that is wrong in both directions.

**Stage E.** A DNSBL answer from a public resolver is not trustworthy. Spamhaus returns 127.255.255.252, .254 and .255 to indicate that the query was rejected: typing error, blocked because the resolver is too large or is a datacentre resolver, or over the free-use limit. A pipeline that treats those codes as "not listed" silently passes every candidate. They have to be treated as errors that stop the run. Production use means a DQS key and a resolver that is not a public one.

**Stage F.** Volume is the whole design constraint. Deletions from .com alone run in the tens of thousands per day. A metered per-domain reputation call against that is not affordable, so stages A to E exist to cut the set by three or four orders of magnitude before the first paid call. Anyone who tells you their system "queries the Spamhaus API for every dropping domain" is describing something they are not doing.

**What the business actually sells.** The domains are public information and the registration is available to anyone at retail. The scarce inputs are the approved zone access, the metered reputation data, and the labour of stage G. A subscription with reveal credits is a way of charging for the filter while the underlying asset stays free, which is a reasonable business and is not the same thing as owning inventory. It also means the list is only as good as its stage D, and stage D is the expensive one to do properly.

## 5. What prewarmed.org should publish

| Page | Change |
|---|---|
| H12, `/how-it-works/dropped-and-recycled-domain-risk/` | Add the reputation-record section. The `deactivated-ts` fact, the two unknowns, and the resolver-poisoning trap belong here. This is now the page that answers "does a dropped domain keep its reputation" |
| L3, `/learn/fresh-aged-and-prewarmed-domains/` | The drafted answer already says age tells you nothing about whether a domain has sent mail. Extend it by one sentence: a third party reputation score does not tell you that either, because the dimension that reflects sending is recomputed from current traffic |
| R5, `/research/domain-history-and-placement/` | Absorb the test in section 6 as a second research question alongside the existing one |
| New candidate page | "Can you buy a domain that already has a Spamhaus score?" as an answer page under how-it-works, targeting the query directly. It is a live purchase question with a vendor selling against it and no honest answer published anywhere |
| Glossary | `deactivated-ts` is too narrow, but the seed list should gain: domain reputation score, DBL, DQS, RDAP, CZDS, zone file, drop list, pending delete, redemption period |

The new page cannot ship before the test in section 6 returns, because without it the page has to say "we do not know" four times, which fails the purpose test in section 1 of the editorial standards.

## 6. The test that settles it

Pre-registered before analysis, per `07-RESEARCH-PIPELINE.md` stage 4. It answers question 4 from section 2, which is the only one that changes a buying decision.

**Question.** Does a positive Spamhaus domain reputation score at the moment of registration predict inbox placement, and does the score survive the change of registrant?

**Design.** Three cohorts, matched on TLD and on mailbox provider, all warmed on the identical WarmInboxes schedule and all sending the same seed content.

| Cohort | Definition |
|---|---|
| A | Dropped domains with a positive reputation score recorded within 24 hours before registration |
| B | Dropped domains of comparable claimed age with a score at or near zero |
| C | Fresh registrations, never previously registered, confirmed by archive and historical WHOIS |

**Measures.** Score re-queried at day 0 before delegation, day 1, day 7, day 30 and day 51, which is the aging phase boundary the lander already uses. Seed placement at Gmail and at Microsoft on the same schedule. Primary outcome is inbox rate at day 51 by cohort. Secondary outcome is the trajectory of the score itself, which answers questions 1 to 3 directly.

**Falsification.** If A does not beat C on day 51 inbox rate by a margin larger than the confidence interval, the purchased score bought nothing, and that is the finding. If the day 1 re-query shows A's score collapsing to neutral on re-delegation, the product category is answered and the placement arm becomes secondary.

**Cost.** Registration for three cohorts at retail, one reputation API contract for the re-queries, and the warmup capacity already committed to D5. The reputation contract is the only new line item.

**Minimum n.** Per the minimum cell size rule in the research pipeline. This note does not set it; the analyst does, before the first domain is bought.

## 7. D5 extension

`DATA-INTAKE.md` defines D5 as one row per domain of registration and drop history. Sourcing work and the test above both need columns it does not have. Proposed addition, to be folded into the D5 specification when the test is pre-registered:

| Column | Type | Notes |
|---|---|---|
| rdap_created_at | date | Registration date from the current registration. Not the true first registration |
| true_first_registered_at | date | From historical WHOIS or first archive snapshot. Null if not established |
| reregistration_cycles | int | Distinct registration periods found in historical WHOIS |
| deactivated_ts | date | From the reputation record, where the record carries one |
| rep_score_pre_registration | float | Total score at last query before registration. Null if never queried |
| rep_score_day_1 / _7 / _30 / _51 | float | Same measure after registration |
| rep_dimension_* | float | One column per dimension: smtp, identity, infra, malware, researcher |
| dbl_listed_pre_registration | bool | Null if the query was refused by the resolver. Never false on a refusal |
| archive_first_snapshot_at | date | Earliest Wayback capture |
| prior_use_class | enum | `legitimate_business`, `parked`, `pbn`, `adult`, `gambling`, `pharma`, `malware`, `unknown` |

The `dbl_listed_pre_registration` nullability is not pedantry. It is the schema expression of the resolver trap in section 4.

## 8. What could not be verified from this environment

The build environment's egress policy returns 403 for everything outside the package registries, so the following were read through search result summaries rather than fetched, and each needs a direct read before any of it appears on a page:

| URL | What to confirm |
|---|---|
| `docs.spamhaus.com/sia/docs/source/10-API-Interface/310-Domains.html` | Exact field names, the score range, `deactivated-ts` semantics, and whether decay after deactivation is documented |
| `spamhaus.org/faqs/reputation-statistics/` | The sign convention and the dimension definitions, quoted verbatim |
| `spamhaus.org/faqs/domain-blocklist/` | Whether a delisting on expiry is documented, and the return codes including the 127.255.255.x refusals |
| Microsoft EOP documentation | Whether Microsoft documents any use of third party domain blocklists |
| Google Postmaster and sender guidelines | Whether Google documents any use of third party domain reputation |
| `coldemaildomains.com` | The vendor's own claims, quoted exactly, per the competitor-claims rule in section 3 of the editorial standards |

The DBL query path was also tested from here and is unusable: this container's resolver returns NXDOMAIN for every Spamhaus zone lookup, including the `dbltest.com` test point, which is the expected behaviour for a datacentre resolver. Any real run of the harvester needs a DQS key and its own resolver.

## Sources

1. Spamhaus Technology, domain reputation data API documentation, `docs.spamhaus.com/sia/docs/source/10-API-Interface/310-Domains.html`. Dimension definitions and the `deactivated-ts` field. Read through search summary, not fetched.
2. The Spamhaus Project, reputation statistics FAQ, `spamhaus.org/faqs/reputation-statistics/`. Score composition and sign convention. Read through search summary, not fetched.
3. Secondary, unverified: reporting that Microsoft Exchange has no native support for domain blocklists and that inbound decisions run on the EOP reputation engine.
4. Secondary, unverified: reporting that Google does not enforce a connection-level block on a Spamhaus listing alone.

---

*Companion implementation: `scripts/score-dropped-domains.mjs` runs stages B through F. It cannot run in this environment, for the reasons in section 8.*
