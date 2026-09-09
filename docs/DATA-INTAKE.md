# prewarmed.org: data intake

What proprietary data to supply, in what shape, and how it becomes published research. The research section is only as credible as its methodology, so the intake is strict: consistent definitions, one row per observation, dates on everything, and no pre-aggregated numbers where raw rows exist.

Deliver as CSV (UTF-8, header row, ISO 8601 dates, one file per dataset) or as a read-only database view. Identifiers are pseudonymised before they reach the repository: domains become `dom_000123`, customers become `acct_00042`. Raw domain names never enter the site or the repository.

---

## Dataset registry

| ID | Dataset | Grain | Powers |
|---|---|---|---|
| D1 | Placement cohort | One row per domain per placement test | R1, L1, L3, L4, DC1, T2 |
| D2 | Decay and dormancy | One row per domain per placement test during idle periods | R2, H3, H16, B6 |
| D3 | Burn events | One row per burn or suspension event | R3, H8, DC5, B5, K-series |
| D4 | Provider panel | Domain and inbox attributes joined to D1 and D3 | R4, H9, H15, DC3 |
| D5 | Domain history | One row per domain: registration and drop history | R5, H4, H12 |
| D6 | Warmup engagement | One row per inbox per day of warmup network activity | R6, L8, H6, DC1 |
| D7 | Sending volume | One row per inbox per day of real sends | R7, H5, H7, H10, DC2, T1, T4 |
| D8 | TLD panel | Derived from D1 and D3 with TLD attribute | R8, H11 |
| D9 | Price benchmark | One row per vendor per plan per observation date | R9, H14, B7, T1, T2 |
| D10 | Recovery outcomes | One row per domain per test after a burn event | R10, K10, DC5 |

---

## Column specifications

### D1 Placement cohort

| Column | Type | Notes |
|---|---|---|
| domain_id | string | Pseudonymised |
| account_id | string | Pseudonymised |
| cohort | enum | `prewarmed`, `fresh`, `aged_unwarmed` |
| tld | string | e.g. `com`, `it`, `co` |
| registrar | string | Normalised name |
| registered_at | date | |
| prewarm_start | date | Null for fresh |
| prewarm_end | date | Handoff date; null for fresh |
| provider | enum | `google`, `m365`, `azure`, `smtp_other` |
| inboxes_on_domain | int | At test time |
| test_at | date | Placement test date |
| test_day_index | int | Days since handoff (prewarmed) or since first send (fresh) |
| seed_provider | string | Tool used for the test |
| seeds_total | int | |
| seeds_inbox | int | Landed in primary inbox |
| seeds_promotions | int | Gmail categories, if measured |
| seeds_spam | int | |
| seeds_missing | int | Not delivered |
| seeds_gmail / seeds_outlook / seeds_yahoo / seeds_other | int | Per-provider split where available |
| real_sends_prior_7d | int | Cold emails actually sent in the prior week |

Minimum to publish R1: 200 domains per cohort with at least three tests each across days 0 to 30.

### D2 Decay and dormancy

Same columns as D1 plus:

| Column | Type | Notes |
|---|---|---|
| idle_since | date | Last real send before the idle period |
| idle_days | int | Days idle at test time |
| warmup_running | bool | Whether warmup network activity continued during idle |

### D3 Burn events

| Column | Type | Notes |
|---|---|---|
| domain_id, account_id, provider, tld | | As above |
| inbox_id | string | Pseudonymised; null for domain-level events |
| event_at | date | |
| event_type | enum | `placement_collapse`, `provider_suspension`, `blacklist_listing`, `registrar_action`, `auth_failure`, `customer_reported` |
| detection_source | enum | `placement_test`, `postmaster`, `snds`, `bounce_spike`, `provider_notice`, `customer` |
| days_since_handoff | int | |
| cause_primary | enum | `volume_spike`, `bounce_rate`, `complaint_rate`, `content`, `list_quality`, `auth_misconfig`, `shared_tracking_domain`, `warmup_stopped`, `provider_policy`, `unknown` |
| cause_secondary | enum | Same list, optional |
| cause_confidence | enum | `confirmed`, `probable`, `speculative` |
| sends_7d_before | int | |
| bounce_rate_7d_before | float | |
| placement_7d_before | float | Inbox share from last test |
| resolved | bool | |
| resolved_at | date | |
| resolution | enum | `recovered`, `retired`, `replaced` |

Cause attribution needs a written rubric (how "volume_spike" is decided, what "confirmed" means). That rubric is published on the methodology page.

### D4 Provider panel

Derived: D1 and D3 joined on domain_id and inbox_id with provider, region (`us`, `eu`, `other`), inbox age, admin-access type, and whether the inbox was created by WarmInboxes or brought by the customer.

### D5 Domain history

| Column | Type | Notes |
|---|---|---|
| domain_id | string | |
| first_seen_registered | date | Earliest known registration |
| previous_registrations | int | Number of prior drop and re-register cycles |
| last_drop_at | date | Null if never dropped |
| historic_blacklist_hits | int | Any listing before acquisition |
| archive_snapshots | int | Count of historic web snapshots, as a proxy for prior use |
| acquisition_type | enum | `fresh_registration`, `backorder`, `aftermarket` |

### D6 Warmup engagement

| Column | Type | Notes |
|---|---|---|
| inbox_id, domain_id, provider | | |
| date | date | |
| warmup_sent | int | |
| warmup_received | int | |
| warmup_replies | int | |
| warmup_rescued_from_spam | int | |
| warmup_landed_spam | int | Where the tool reports it |
| warmup_tool | string | Normalised name |

### D7 Sending volume

| Column | Type | Notes |
|---|---|---|
| inbox_id, domain_id, provider | | |
| date | date | |
| cold_sent | int | |
| bounces_hard | int | |
| bounces_soft | int | |
| replies | int | |
| complaints | int | Where visible |
| sequencer | string | Normalised tool name |
| inboxes_on_domain | int | |
| days_since_handoff | int | |

### D9 Price benchmark

| Column | Type | Notes |
|---|---|---|
| vendor | string | Public name |
| observed_at | date | |
| product | enum | `prewarmed_inbox`, `fresh_inbox`, `prewarmed_domain`, `domain_only` |
| provider | enum | As above |
| price_per_unit_month | float | USD |
| minimum_units | int | |
| domain_included | bool | |
| dns_included | bool | |
| admin_access | bool | |
| source_url | string | Public pricing page |

Prices for other vendors are collected from their public pages and screenshot-archived on the observation date.

### D10 Recovery outcomes

D3 events joined to subsequent D1-style tests, plus the intervention taken (`paused`, `reduced_volume`, `list_cleaned`, `content_changed`, `auth_fixed`, `delisted`, `nothing`) and its date.

---

## Methodology page: questions the data must be able to answer

The methodology page will state, for each dataset:

1. Where the observations come from (which infrastructure, which customers, opt-in basis).
2. Sample size and date range.
3. Definitions: what counts as a placement test, an inbox landing, a burn, a recovery.
4. Exclusions: test accounts, internal domains, customers with fewer than N days of data, incomplete tests.
5. Known biases: single operator; customers who buy prewarmed infrastructure are not a random sample of cold senders; seed lists are not real recipients; provider mixes reflect the customer base.
6. Refresh cadence and versioning: each report carries a version and the data cut date; older versions remain reachable.
7. What is not released: raw rows containing customer identifiers; anything under N observations per cell.

## How a dataset becomes a page

1. CSV lands in `research-data/raw/` (never committed); pseudonymisation script writes `research-data/clean/dN.csv` (committed).
2. Analysis notebook or script in `research-data/analysis/rN/` produces the summary tables and chart CSVs. The script is committed so the reviewer can re-run it.
3. Report page is written from the summary tables using the report template. Every chart references its chart CSV and dataset ID.
4. Reviewer re-runs the analysis, checks each number in the page against output, signs off.
5. Dataset page `/research/data/dN/` publishes definitions, n, date range, exclusions, and aggregated downloads where permitted.
6. Decision guides that cite the finding are updated in the same pull request.

## Priority order

1. D1 with D7 (needed for R1, the "does it work" report, and the ramp guidance in H5 and T4).
2. D3 (R3, the burn causes report, which underpins most prevention content).
3. D2 (R2, the decay curve, which nobody in the market has published).
4. D4, D5, D6 (provider, history and warmup reports).
5. D9 (price benchmark; can be collected from public pages without proprietary access).
6. D10 (recovery; typically the thinnest dataset, ships last).

If the raw grain above is not available, send what exists with a note on how it was aggregated. Aggregated inputs can still support a report, but the methodology page will say so and the claims will be scoped accordingly.
