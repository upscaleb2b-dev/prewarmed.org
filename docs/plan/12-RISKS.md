# 12. Risk register

Ordered by expected damage, not by probability. Each risk names the early signal, because a risk you cannot see arriving is a risk you cannot manage. Owners are roles from `09-EDITORIAL-WORKFLOW.md`.

## R-1. The data cannot be published lawfully or contractually

**Likelihood** medium. **Impact** severe: the research section is the entire differentiator.

Customer terms may not permit publishing analysis of their infrastructure telemetry, even aggregated and pseudonymised. Discovering this after three reports are live is far worse than discovering it in week 1.

*Early signal:* the terms audit in `01-DECISIONS.md` D-02 is postponed, or nobody can name the person who authorises a data cut for publication.
*Mitigation:* audit in week 1; publish R9 first if unresolved; restrict early datasets to infrastructure the operator owns; name the authorising person on the methodology page.
*Owner:* editor with the data owner.

## R-2. The measurement method does not survive scrutiny

**Likelihood** medium-high. **Impact** severe.

Seed testing is a weak proxy for real placement, and a practitioner who knows this will say so publicly. If the methodology page overstates the method, one critical post can define the site.

*Early signal:* the methodology page is written from an ideal process rather than from the operator's actual one; placement definitions differ between two reports.
*Mitigation:* D-06 answered honestly; K11 published before or alongside the first report, stating what seed lists cannot tell you; every placement claim scoped as a seed-test claim in its own sentence; a public, non-defensive response to the first critique, with a report update where the critique lands.
*Owner:* analyst and editor.

## R-3. The site reads as vendor marketing

**Likelihood** medium. **Impact** high: it removes the reason to link or cite.

The failure is gradual. A recommendation gets slightly warmer, a caveat gets trimmed, a second link to the vendor appears, and six months later the site is a blog with charts.

*Early signal:* a page recommends buying in a case the data does not support; DC9 keeps slipping; the vendor evaluation pages are not applied to WarmInboxes; the link linter is disabled for an exception.
*Mitigation:* DC9 ships in phase 2, not later; the link rules are enforced in CI rather than by intention; R9 lists WarmInboxes under the same rules as everyone else; a quarterly read of five random pages by someone outside the project, asked one question: does this read like it is selling something.
*Owner:* editor.

## R-4. Verification capacity is exceeded

**Likelihood** high. **Impact** medium, compounding.

169 pages under 90 and 180-day intervals is a permanent workload. Provider documentation changes and cited sentences disappear.

*Early signal:* freshness warnings appearing in more than a few pull requests; the temptation to raise `verifyEveryDays` rather than verify.
*Mitigation:* the build fails on stale pages, so the cost is visible; verification time is in the roadmap as work; pages are retired rather than carried; the intervals are never relaxed to make a build pass.
*Owner:* editor.

## R-5. A provider policy change invalidates published guidance

**Likelihood** high over a year. **Impact** medium per event.

Bulk sender requirements, authentication expectations and account provisioning rules change, sometimes with short notice. Ramp guidance and DMARC recommendations are the most exposed.

*Early signal:* a source's cited sentence changes during a verification pass; practitioner communities discussing a change before it is documented.
*Mitigation:* a bibliography as a collection, so "which pages depend on this source" is a query; a standing item in the weekly review; the changelog feed as the reader-facing mechanism for saying what changed and when.
*Owner:* author.

## R-6. The category itself comes under pressure

**Likelihood** medium. **Impact** high.

Providers may tighten enforcement on bulk account provisioning or on domains with engineered engagement history. If that happens, parts of the market the site documents could shrink or become unambiguously non-compliant.

*Early signal:* rising `provider_policy` attributions in D3; enforcement discussion in provider documentation or practitioner communities.
*Mitigation:* H17 exists and is written honestly, so the site is already the place that documented the policy position; D3 tracks `provider_policy` as a cause so the trend is visible in our own data; if the answer changes, the site publishes that the answer changed, which is more valuable than having been right.
*Owner:* editor with the operator.

## R-7. Author exposure

**Likelihood** low-medium. **Impact** medium, and personal.

Named authorship in this niche carries reputational exposure, and the reviewer takes on public accountability for numbers they did not produce.

*Early signal:* reluctance to be named; pressure to use a team byline.
*Mitigation:* agree the exposure explicitly before names go up; pay the external reviewer; give both a stated right to withdraw a byline; do not solve it with a fake byline, which fails the standards and, when discovered, costs more than the exposure it avoided.
*Owner:* editor.

## R-8. Key person dependency

**Likelihood** medium. **Impact** medium.

The analyst holds the pipeline, the pseudonymisation salt and the analysis conventions. The operator holds the process knowledge behind H1, H4 and the B-series.

*Early signal:* an analysis script that only runs on one machine; a report that cannot be re-run by the reviewer.
*Mitigation:* scripts are deterministic and committed with a README; the reviewer re-runs every analysis, which is a continuity test as well as a check; the salt is held in a shared secret store with a documented recovery path; operator interviews are written up into the B-series rather than staying as knowledge.
*Owner:* engineer and analyst.

## R-9. Competitors copy the format without the data

**Likelihood** high. **Impact** low.

Expect competitors to publish "studies" with no method within months of R1.

*Early signal:* a competitor page with percentages, no n and no date range.
*Mitigation:* nothing defensive. The moat is the dataset pages, the committed scripts, the pre-registrations and the sign-off files, none of which a copy can produce. L9 and K11 teach readers to ask for n and method, which raises the cost of the imitation. Never respond by publishing faster or looser.
*Owner:* editor.

## R-10. Traffic pressure changes the plan

**Likelihood** high. **Impact** medium.

At month four the site will have modest traffic and someone will propose a listicle, a tool directory, or an "alternatives" page. Each is individually reasonable and collectively fatal to the positioning.

*Early signal:* a proposed page that cannot state a persona and a decision.
*Mitigation:* the purpose test is the gate and it is not negotiable per page; the measurement framework deliberately does not put traffic first; the monthly review names one thing to stop doing, which is where these proposals go.
*Owner:* editor.

## R-11. Tool misuse and privacy

**Likelihood** low. **Impact** medium.

T3 and T5 accept a domain and perform lookups. Logging those queries would create a record of who is investigating which domains, and rate limits are the difference between a tool and a free scanning service.

*Early signal:* a request to add analytics to the tool endpoints; lookup volume rising without page views rising.
*Mitigation:* the no-logging requirement is in `05-TECH-SPEC.md` section 7 and is stated on the tool pages; rate limiting per IP; caching; no bulk endpoint; no API.
*Owner:* engineer.

## R-12. Correction cascade

**Likelihood** low. **Impact** medium.

A single error in an analysis script can propagate into every page that cites it, and a public correction across a dozen pages at once is a bad week.

*Early signal:* numbers appearing in prose outside `<Stat>`; a report published without a reviewer re-run.
*Mitigation:* the coupling in `07-RESEARCH-PIPELINE.md` stage 8 means the dependency set is known and updatable in one pull request; the linter prevents untracked numbers; the reviewer re-run is the control that catches it before publication; when it does happen, the corrections log and the 30-day notices make it survivable, and handling it well is itself evidence for the reader.
*Owner:* analyst.

---

## Review

The register is reviewed quarterly with the topic map. A risk with no early signal defined is not managed, and any risk whose owner has changed role is reassigned in that review.
