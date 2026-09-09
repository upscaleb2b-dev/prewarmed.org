# 01. Decision register

The original plan lists six things it needs before starting. In practice there are fifteen, and only three of them genuinely block work. This document names all of them, gives a recommendation for each, and states the default that will be assumed if no answer arrives. Work proceeds on the defaults rather than stalling.

Legend for "blocks": **hard** means nothing downstream can be built correctly without it; **soft** means work proceeds on a default and is cheap to reverse; **late** means it can be answered any time before the phase named.

| ID | Decision | Blocks | Needed by | Recommendation |
|---|---|---|---|---|
| D-01 | Ownership and disclosure variant (A or B) | hard | Day 1 | Variant A if WarmInboxes staff write the pages |
| D-02 | Data availability, consent, and processing basis | hard | Week 2 | Customer terms audit before any row leaves the operator |
| D-03 | Named author and named reviewer | hard | Week 2 | One operator author, one external technical reviewer |
| D-04 | Stack | soft | Day 1 | Astro plus MDX, static, on Vercel |
| D-05 | Domain, DNS and the corrections mailbox | soft | Week 1 | prewarmed.org on its own DNS, mail on a separate subdomain |
| D-06 | Placement testing method as actually run today | hard | Week 3 | Document what exists, then standardise it |
| D-07 | What data is published for download | soft | Week 6 | Aggregated cell-level CSV only, minimum cell size 30 |
| D-08 | Analytics and privacy posture | soft | Week 1 | Cookieless analytics, no consent banner |
| D-09 | Whether to address provider terms of service head on | soft | Week 4 | Yes, one page, written honestly |
| D-10 | Naming competitors in the price benchmark | soft | Week 8 | Name them, cite public pages, archive screenshots |
| D-11 | Email list and RSS | late | Week 6 | RSS at launch, a plain research list later |
| D-12 | Legal review of compliance pages | late | Before B8 | One review of B8, DC8 and L10 by a qualified lawyer |
| D-13 | Budget and staffing | soft | Week 1 | See the staffing model in `10-ROADMAP.md` |
| D-14 | Branding of the recurring index | late | Before R11 | "The Prewarmed Index", published quarterly |
| D-15 | Licence for charts and aggregated data | soft | Before R1 | CC BY 4.0 with a required attribution link |

---

## D-01. Ownership and disclosure variant

**Why it matters.** It sets the footer text on every page, the About page, the tone of the vendor evaluation pages, and whether the site can credibly say "one option among others". It also determines whether a reader who discovers the connection later feels informed or misled. That single reaction decides whether the research gets cited or gets used as an example of astroturfing.

**The options.**

- Variant A, published by WarmInboxes. Honest, simple, no structural pretence. Costs some perceived neutrality on vendor comparison pages, which is recoverable by applying the disqualifying questions to WarmInboxes in public (see `EDITORIAL-STANDARDS.md` section 8).
- Variant B, independent publication with a data partnership. Only defensible if the editorial line is genuinely not controlled by WarmInboxes: a different author roster, no shared staff on the byline, and a written agreement that WarmInboxes does not review content before publication. If the same person writes the pages and runs the company, Variant B is a false claim and it will be found out.

**Recommendation.** Variant A unless there is a real editorial separation to point at. A site that says "we sell this and here is our data, checked this way" outperforms a thinly veiled independent front, because the sceptic persona (P5) is specifically hunting for the second pattern.

**Default if unanswered.** Variant A. Every template ships with the Variant A string in a single content file so switching is a one-line change.

## D-02. Data availability, consent and processing basis

**Why it matters.** This is the largest unexamined risk in the original plan. Publishing analysis of customer sending infrastructure requires a lawful basis and, in most cases, contract terms that permit aggregate research use. Pseudonymisation as described in `DATA-INTAKE.md` reduces exposure but does not by itself make the processing lawful, and pseudonymised data remains personal data under GDPR where re-identification is possible.

**What to check before any row leaves the operator.**

1. Do current customer terms permit use of infrastructure telemetry for aggregate research and publication? If not, amend forward and restrict the first datasets to customers on amended terms, or to infrastructure the operator owns outright.
2. Are inbox-level rows tied to identifiable individuals (a mailbox named after a real person, a reply body, a recipient address)? None of that belongs in the intake. The column specs in `DATA-INTAKE.md` are already free of recipient data; keep it that way and add an explicit prohibition on free-text columns.
3. Is there a retention and deletion path for the clean CSV once a report is superseded?
4. Who signs off that a given data cut may be published? Name that person in the methodology page.

**Recommendation.** Run the terms audit in week 1 in parallel with engineering. If the audit is not clean, start the research programme with D9, the price benchmark, which is built entirely from public vendor pricing pages and needs no customer data at all. That keeps the research section credible from launch while the terms are fixed.

**Default if unanswered.** No customer-derived dataset is committed to the repository. R9 ships first instead of R1, and the roadmap in `10-ROADMAP.md` has the contingency ordering.

## D-03. Named author and named reviewer

**Why it matters.** Section 5 of the editorial standards makes named authorship a "must". Two named humans are the minimum viable roster: an author who operates the infrastructure and a reviewer who did not write the piece. For research, the reviewer re-runs the analysis from the CSV, which means the reviewer needs enough numeracy to read a script.

**The uncomfortable part.** Putting a real name on cold email infrastructure content carries reputational exposure in some professional circles, and the reviewer role has a real time cost (budget two to four hours per research report, one hour per article). Both should be agreed with the people concerned before their names appear.

**Recommendation.** One operator author with quantified credentials on the About page (years operating, inboxes under management, monthly volume, providers used). One reviewer who is not a WarmInboxes employee if at all possible, paid a fee per review, credited by name and affiliation. An external reviewer is the single cheapest credibility purchase available to this project.

**Default if unanswered.** Author and reviewer fields in every page's frontmatter are required by the content schema, so the build fails rather than shipping an unattributed page. Nothing publishes until real names exist.

## D-04. Stack

**Recommendation.** Astro with MDX content collections, statically built, deployed on Vercel. The full argument and the alternative are in `05-TECH-SPEC.md` section 1. The short version: the site needs about 165 URLs, build-time chart generation from CSV, schema emission on five page types, a banned-phrase linter in CI, and content review in pull requests. Hand-written HTML makes the research section roughly three times more expensive to maintain and makes the "no number typed by hand" rule unenforceable.

**Default if unanswered.** Astro.

## D-05. Domain, DNS and the corrections mailbox

**Why it matters.** A site about email authentication is judged on its own records. Publishing `/methodology/` from a domain with a broken SPF record is a story that writes itself.

**Recommendation.**

- prewarmed.org serves the site; DNS on a provider with an API so records can be version controlled.
- The site publishes SPF, DKIM and DMARC at `p=reject` for prewarmed.org, and shows its own records as the worked example on L7. A live record that readers can look up is more convincing than an invented example.
- `corrections@prewarmed.org` is a real monitored mailbox with a named owner and the five working day service level from the editorial standards. A corrections address nobody reads is worse than none.
- The site never sends cold email from prewarmed.org, and says so on the disclosure page.

**Default if unanswered.** Records as above, corrections mailbox forwarded to the editor, DMARC starts at `p=none` for two weeks of report collection then moves to `p=reject`.

## D-06. Placement testing method as actually run today

**Why it matters.** `/methodology/` must describe what happens, not what would be ideal. If seed tests today use one seed provider with 40 seed addresses of unknown age, the methodology page says exactly that, and R1's limitations section says what it means. Describing an idealised method that is not the one used is the failure mode that ends the site's credibility in a single critical blog post.

**What is needed.** Seed provider name, seed count and composition by provider (Gmail, Outlook consumer, Microsoft 365 tenant, Yahoo, other), seed account age and engagement history, test cadence, what counts as a landing when a message hits a Gmail category tab, how missing messages are handled, and who triggers tests.

**Recommendation.** Write the description of the current method first. Then decide, separately, whether to standardise it (fixed cadence at days 0, 3, 7, 14, 21, 30, fixed seed composition, tests triggered automatically rather than on request). Standardisation improves the data from that date forward; it does not retro-fix earlier rows, and the methodology page says which period used which method.

**Default if unanswered.** R1 cannot publish. Placement claims across the site are blocked, because there is no defensible definition of the measurement. This is a hard block and it is the one most likely to be underestimated.

## D-07. What data is published for download

**Recommendation.** Publish aggregated cell-level CSV, never row-level customer data. Minimum cell size of 30 observations to publish a number, suppression below 10, and a stated suppression rule on each dataset page. Each dataset page offers the aggregated CSV that generated the charts on that report, under the licence in D-15. That is enough for a third party to redraw the chart and check the arithmetic, which is what a sceptic actually wants, without releasing anything about a customer.

**Default if unanswered.** Chart CSVs are published (they are already aggregated); dataset pages describe the underlying data but offer no download until this is settled.

## D-08. Analytics and privacy posture

**Recommendation.** Cookieless, aggregate-only analytics (Plausible, Fathom or an equivalent self-hosted option). Reasons: the site promises no pop-ups and no gated content, and a cookie consent banner is a pop-up. Cookieless analytics avoids the banner in most jurisdictions and keeps the privacy policy to one screen. Outbound clicks to warminboxes.com are tracked as events with a UTM parameter, which covers success measure 3 in the site plan without cross-site tracking.

**Default if unanswered.** Plausible, no banner, a one page privacy note linked in the footer.

## D-09. Whether to address provider terms of service head on

**Why it matters.** The sceptic persona's real question is not only "does reputation transfer" but "is this allowed". Bulk provisioning of Workspace or Microsoft 365 tenants, reselling accounts, and buying domains with prior history all sit in a policy space that vendors in this market avoid discussing. A reference site that avoids it looks evasive; one that addresses it becomes the page everyone links to.

**Recommendation.** Add one page (proposed as H17 in `02-URL-MAP.md`) that states, with citations to the providers' own published terms and reseller programme documentation, what is permitted, what is grey, and what will get a tenant suspended. Where the honest answer is "this practice violates the provider's terms", say so, including where it affects products the operator sells. That single page will be worth more inbound trust than any three other pages on the site.

**Default if unanswered.** The page is drafted and held for review rather than skipped.

## D-10. Naming competitors in the price benchmark

**Recommendation.** Name them. R9 is only useful as a benchmark if the vendors are identified. Rules: prices only from public pages, screenshot archived on the observation date, no commentary on quality that is not sourced, a correction path offered to any vendor who says a price is wrong, and WarmInboxes listed in the same table under the same rules. Do not rank vendors by anything other than the observed price and the stated inclusions.

**Default if unanswered.** Vendors named, table restricted to price and inclusions.

## D-11. Email list and RSS

**Recommendation.** RSS for research and changelog at launch (already a non-negotiable in the site plan). A plain email list for new research only, no drip sequence, no lead magnet, single opt-in confirmation, one link to unsubscribe. It is added once three reports exist and there is something to subscribe to.

## D-12. Legal review of compliance pages

**Recommendation.** B8 (compliance), DC8 (DMARC policy) and L10 (bulk sender requirements) get one review by a lawyer competent in CAN-SPAM and EU direct marketing law before publication, plus a standing note that the pages are not legal advice. L10 and DC8 are technical and low risk; B8 makes claims about lawful basis for cold email in the EU and UK, which is contested and jurisdiction-specific, and it is the page most likely to be quoted back at someone.

## D-13. Budget and staffing

See `10-ROADMAP.md` section 6. The minimum viable team is one engineer for three weeks then part time, one editor and author at roughly 0.6 full time equivalent, one analyst for four to six days per report, and one reviewer at a few hours per piece.

## D-14. Branding of the recurring index

**Recommendation.** "The Prewarmed Index", quarterly, versioned `2026-Q3` and so on, with a fixed set of headline metrics that do not change between editions (placement at day 1 and day 30, burn rate per 100 domain months, provider share, median price per inbox). A benchmark is only citable if the definition is stable. Check the name for existing use before the first edition.

## D-15. Licence for charts and aggregated data

**Recommendation.** CC BY 4.0 for charts and aggregated CSVs, with attribution to prewarmed.org and a link to the report. Every embeddable SVG carries the attribution and the dataset ID inside the image, so the credit survives being screenshotted. Article text stays all rights reserved.

---

## Assumptions this plan proceeds on

Until answered, everything downstream in this repository assumes: Variant A disclosure; Astro on Vercel; cookieless analytics; no customer-derived data committed; R9 as the launch report if D-02 or D-06 is unresolved; CC BY 4.0 on charts; author and reviewer fields required by schema so nothing publishes anonymously. Each assumption is cheap to reverse except the last two, which are deliberately not.
