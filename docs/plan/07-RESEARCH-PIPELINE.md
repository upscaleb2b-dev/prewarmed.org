# 07. Research pipeline

`DATA-INTAKE.md` specifies what arrives. This document specifies what happens to it, from the moment a CSV is handed over to the moment a number appears in a sentence, and what has to be true for that number to stay there.

The rule that governs everything below: **a reader with the published chart CSV and the committed analysis script must be able to reproduce every number in the report.** Anything that would break that reproducibility is not done.

## 1. Stages

```
intake  ->  pseudonymise  ->  validate  ->  pre-register  ->  analyse
        ->  review (re-run)  ->  write  ->  sign off  ->  publish  ->  refresh
```

### Stage 1: intake

Raw files land outside the repository, in a location with access limited to the analyst and the data owner. `research-data/raw/` is gitignored and CI fails if any file exists there. An intake record is written for each delivery: who supplied it, when, the date range it covers, the query or export that produced it, and the named person who authorised publication of analysis derived from it (per `01-DECISIONS.md` D-02).

### Stage 2: pseudonymisation

A committed script maps identifiers to stable pseudonyms (`dom_000123`, `acct_00042`, `inbox_0000871`) using a salt held outside the repository. Properties required of the mapping: stable across deliveries so the same domain keeps its ID between refreshes, one way, and never committed alongside the salt. The script also drops every column not named in the `DATA-INTAKE.md` specification, so an unexpected free-text or recipient column cannot survive into `clean/`.

### Stage 3: validation

`validate-dataset.mjs` runs against each `clean/dN.csv` and fails on:

| Class | Checks |
|---|---|
| Structure | Expected columns present, no extra columns, types parse, dates are ISO 8601 and not in the future |
| Domain rules | Enums contain only specified values; `seeds_inbox + seeds_promotions + seeds_spam + seeds_missing == seeds_total`; rates between 0 and 1; `prewarm_end >= prewarm_start`; `test_at >= prewarm_end` for prewarmed rows |
| Grain | No duplicate rows at the declared grain (one domain per test date per seed provider) |
| Referential | Every `domain_id` in D3 exists in D1 or is recorded as out-of-panel; every `inbox_id` maps to a `domain_id` |
| Coverage | Rows per cohort, per provider and per test day bucket, reported as a table so thin cells are visible before analysis, not after |
| Leakage | No column matches a domain-name, email-address or IP pattern |

The coverage table from this stage is committed. It is what the dataset page's n and date range are generated from, so the published n cannot drift from the file.

### Stage 4: pre-registration

Before the analysis script is written, the analyst commits a short pre-registration file to `research-data/analysis/rN/PREREGISTRATION.md`: the question, the population and exclusions, the primary outcome, the planned comparisons, the minimum cell size, and what would count as a null result. It is dated by its commit.

Why this matters more here than in most content projects: the operator has a commercial interest in one direction of the result. Pre-registration is the mechanism that makes "we looked until we found the good cut" visibly false. It is cheap, it takes an hour, and it is the difference between a report a competitor can attack and one they cannot.

The report page publishes the pre-registration date and links to the file.

### Stage 5: analysis

One directory per report, `research-data/analysis/rN/`, containing the script, its output tables, the chart CSVs it writes, and a README stating how to run it. Conventions:

- **Unit of analysis is the domain, not the test.** Domains with more tests must not dominate a mean. Aggregate to the domain first, then across domains.
- **Intervals on every proportion.** Wilson intervals at 95%. A proportion published without an interval is a defect.
- **Exposure-based rates.** Burn rates are per 100 domain months, never raw counts, because cohorts have different exposure.
- **Minimum cell size.** Report cells with n below 30 marked as thin; suppress below 10; state the rule on the dataset page and mark suppressed cells in the chart rather than dropping them silently.
- **No model in version 1.** Descriptive statistics with intervals. Regression or mixed effects models arrive in a version 2 with their own pre-registration, because a model invites method arguments that a descriptive comparison does not.
- **Missing data is reported, not imputed.** The share of rows dropped and why appears in the report.
- **One sensitivity analysis per report, at minimum.** Re-run the primary comparison with the largest customer excluded. If the headline moves materially, that fact goes in the limitations section and possibly in the headline.
- **Seeds are not recipients.** Every placement claim is scoped as a seed-test claim in its own sentence, not corrected in a footnote.

Scripts are deterministic: fixed seeds, versioned dependencies, no network access at run time.

### Stage 6: review

The reviewer named in the report frontmatter, who is not the analyst:

1. Checks out the branch and runs the analysis script from scratch.
2. Compares every number in the draft page against the script output, including numbers inside chart images.
3. Reads the pre-registration against the analysis and reports any comparison that was added afterwards.
4. Checks the limitations section against the confounds they can see in the data.
5. Writes `research-data/signoff/rN-vX.md`: what they ran, what they checked, what they queried, and their sign-off with a date.

The sign-off file is committed and linked from the report. It is the closest thing this market has to peer review and it costs one person half a day.

### Stage 7: writing

The report is written from the output tables using the report template in `04-CONTENT-MODEL.md`. Numbers reach the page only through `<Stat>` and `<Fig>`, both of which resolve to the committed CSV. The build fails on any numeral in prose that is not inside one of those.

### Stage 8: publication

A report publishes in one pull request that also contains:

- The dataset page for every dataset it uses, or an update to it.
- Chart CSVs and generated SVGs.
- The analysis script, pre-registration and sign-off.
- Updates to every article that will cite the finding, with their `lastVerified` dates advanced and changelog entries added.
- A changelog entry for the report itself.

Publishing a report and updating the pages that cite it in separate pull requests is how a site ends up with three different values of the same statistic. The build enforces the coupling: an article citing `D1` whose stat values do not match the current chart CSV fails.

### Stage 9: refresh and versioning

- Each report carries `version` (`1.0`, `1.1`, `2.0`) and `dataCutAt`.
- A refresh that adds data without changing the method increments the minor version. A method change increments the major version and requires a new pre-registration.
- Previous versions stay reachable at `/research/<slug>/v1/` with a banner pointing to the current version. Nothing is silently rewritten, because a citation to a number that no longer exists is how a research site loses the trust it built.
- The report header states the data cut date and the next scheduled refresh.
- When a refreshed number changes a recommendation on a decision guide, the correction notice component appears on that guide for 30 days.

## 2. Corrections to published numbers

Distinct from editorial corrections, and handled more visibly:

1. Reproduce the error from the script.
2. Fix the script, not the page.
3. Re-run, regenerate charts, update every dependent page in one pull request.
4. Add a changelog entry of kind `correction` on the report and on each dependent page.
5. Add a dated entry to `/corrections/` stating the old number, the new number, the cause, and what changed as a result.
6. If the corrected number changes a recommendation, the correction notice sits at the top of the affected pages for 30 days and the RSS changelog carries it.

Publishing corrections prominently is counter-intuitive and correct. A site with a visible corrections log is read as one that checks; a site with none is read as one that never looks.

## 3. Statistical claims the site will not make

Written down in advance so they do not have to be argued about under deadline:

- No causal language from observational cohorts. "Prewarmed domains placed higher" is supportable; "prewarming causes higher placement" is not, and the difference is the entire credibility of the research section.
- No extrapolation beyond the observed range: a ramp table derived from data up to 80 sends per inbox per day does not recommend 200.
- No comparison between our data and a third party's differently defined metric.
- No claim about a provider's algorithm. Claims are about observed outcomes.
- No "industry average" figures that do not come from a cited study.
- No percentage change on a base of fewer than 30 observations.

## 4. Dataset page contract

Every `/research/data/dN/` page carries, generated from the validation output rather than typed: grain, n with its unit, date range, refresh date and cadence, definitions of every term, the exclusion list, at least two named biases, the suppression rule, the reports and articles that use it, and the aggregated download with its licence where permitted. A dataset page with fewer than two biases listed does not build, on the theory that any real dataset has at least two.

## 5. The first four weeks of data work

| Week | Work |
|---|---|
| 1 | Terms and consent audit (D-02). Intake record template. Pseudonymisation script. First delivery of D1 and D7, however incomplete. |
| 2 | Validation script and the D1 coverage table. Decide from coverage whether R1 is publishable at the intended n, or whether the first report is R9. Write the placement-test method description with the operator (D-06). |
| 3 | R1 pre-registration. Analysis script. Chart CSVs. Methodology page drafted from the real method, including its weaknesses. |
| 4 | Reviewer re-runs R1. D3 delivery and its cause-attribution rubric, including the double-attribution sample for the agreement rate. |

If week 2's coverage table shows fewer than 200 domains per cohort or fewer than three tests per domain, R1 does not publish at reduced power and dressed up. It publishes later, or it publishes as a smaller claim with its n in the headline. The report that says "in 84 prewarmed domains, with wide intervals" is still the only such number in the market.
