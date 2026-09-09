# 02. URL map

Every URL the site will have, with the question it answers, the query it targets, its template, its word budget and the phase it ships in. 168 URLs at full build. Slugs are fixed here so internal links can be written before the target pages exist.

## URL conventions

- Lowercase, hyphenated, trailing slash, no dates, no numbers in slugs except where the number is the concept (`14-day`, `100-plus`).
- Four to six words, phrased as the question or the claim, not the keyword string.
- Section prefix is part of the meaning: `/learn/` for orientation, `/how-it-works/` for mechanism, `/decide/` for a choice, `/b2b/` for a team playbook, `/deliverability/` for reference, `/research/` for data.
- A page never moves between sections after publication. If a page turns out to be in the wrong section, it stays and the navigation changes.
- Redirects are permanent (308) and recorded in `redirects.json` with the reason and date. No chained redirects.
- Reserved and never used: `/blog/`, `/resources/`, `/ultimate-guide/`, `/best-*`, any `/p/` or `/post/` prefix.

## Title tag and H1

The H1 is the question. The title tag is the H1 shortened to 60 characters or fewer with no brand suffix on article pages, and " | prewarmed.org" only on section index and trust pages. Meta descriptions are written at brief time using the pattern in `08-SEO-SPEC.md` section 4, which is why they are not listed here: writing 168 of them in advance guarantees 168 bad ones.

---

## 1. Top level and trust

| URL | Purpose | Template | Phase |
|---|---|---|---|
| `/` | Thesis, situation cards, latest research, question index, tools | home | 0 |
| `/methodology/` | How every number on the site is produced | trust | 0 |
| `/editorial-policy/` | Standards, review, corrections, AI disclosure | trust | 0 |
| `/disclosure/` | The WarmInboxes relationship in full | trust | 0 |
| `/about/` | Authors, reviewers, credentials | trust | 0 |
| `/corrections/` | Log of corrections, with a report form and the SLA | trust | 0 |
| `/changelog/` | Site-wide substantive change log, RSS | trust | 0 |
| `/privacy/` | One screen, cookieless analytics note | trust | 0 |
| `/search/` | Static search results (Pagefind) | utility | 1 |
| `/sitemap.xml`, `/robots.txt`, `/rss/research.xml`, `/rss/changelog.xml` | Machine endpoints | generated | 0 |

## 2. Section indexes

| URL | What it is | Phase |
|---|---|---|
| `/learn/` | Start-here track, ordered reading path of L1 to L12 | 1 |
| `/how-it-works/` | The mechanism questions, ordered by buying stage | 1 |
| `/decide/` | The nine decisions, each with its one-line answer | 1 |
| `/b2b/` | Playbooks, grouped as build, operate, govern | 3 |
| `/deliverability/` | Reference index, alphabetical and by topic | 3 |
| `/research/` | Reports newest first, each with headline number, n, date range | 2 |
| `/research/data/` | Dataset registry with grain, n, date range, refresh date | 2 |
| `/tools/` | Five tools with what each answers | 2 |
| `/glossary/` | A to Z index | 0 (stubs), 3 (complete) |

## 3. Fundamentals `/learn/`

| ID | URL | H1 | Primary query | Type | Words | Phase |
|---|---|---|---|---|---|---|
| L1 | `/learn/what-is-a-prewarmed-domain/` | What is a prewarmed domain? | prewarmed domain | pillar | 2,800 | 1 |
| L2 | `/learn/what-is-a-prewarmed-inbox/` | What is a prewarmed inbox, and how is it different from a prewarmed domain? | prewarmed inbox | answer | 1,200 | 1 |
| L3 | `/learn/fresh-aged-and-prewarmed-domains/` | Fresh, aged and prewarmed domains are three different things | aged domain vs new domain cold email | pillar | 2,600 | 1 |
| L4 | `/learn/why-new-domains-land-in-spam/` | Why new domains land in spam | new domain emails going to spam | answer | 1,400 | 1 |
| L5 | `/learn/how-providers-score-sender-reputation/` | How Gmail, Outlook and Yahoo score sender reputation | email sender reputation how it works | pillar | 3,200 | 1 |
| L6 | `/learn/domain-vs-ip-vs-mailbox-reputation/` | Domain, IP and mailbox reputation: which one you actually carry | domain reputation vs ip reputation | answer | 1,300 | 3 |
| L7 | `/learn/spf-dkim-dmarc-for-cold-senders/` | SPF, DKIM and DMARC for cold senders | spf dkim dmarc cold email | pillar | 3,000 | 1 |
| L8 | `/learn/what-email-warmup-actually-does/` | What email warmup is, and what warmup networks actually do | email warmup how it works | pillar | 2,800 | 1 |
| L9 | `/learn/delivery-rate-vs-inbox-placement/` | Delivery rate, deliverability and inbox placement are three numbers | deliverability vs inbox placement | answer | 1,100 | 2 |
| L10 | `/learn/bulk-sender-requirements-for-cold-senders/` | The bulk sender requirements, and what applies to cold senders | gmail bulk sender requirements cold email | pillar | 2,600 | 3 |
| L11 | `/learn/which-email-blacklists-matter/` | Which blacklists matter, and which do not | email blacklist check does it matter | answer | 1,400 | 3 |
| L12 | `/learn/never-cold-email-from-your-primary-domain/` | Why you never cold email from your primary domain | cold email from main domain | answer | 1,200 | 3 |

## 4. Mechanics `/how-it-works/`

| ID | URL | H1 | Primary query | Type | Words | Phase |
|---|---|---|---|---|---|---|
| H1 | `/how-it-works/how-domain-prewarming-works/` | How domain prewarming works, step by step | how does domain prewarming work | pillar | 3,400 | 1 |
| H2 | `/how-it-works/does-domain-reputation-transfer/` | Does domain reputation survive a change of owner? | does domain reputation transfer | pillar | 3,000 | 1 |
| H3 | `/how-it-works/how-long-a-domain-stays-warm/` | How long a prewarmed domain stays warm | how long does email warmup last | report-backed | 1,600 | 2 |
| H4 | `/how-it-works/how-to-verify-a-prewarmed-domain/` | How to verify a prewarmed domain before you trust it | how to check if a domain is warmed up | pillar + checklist | 2,800 | 1 |
| H5 | `/how-it-works/day-1-to-day-30-sending-ramp/` | Day 1 to day 30 on a prewarmed domain | how many emails to send from a new domain per day | pillar | 3,000 | 1 |
| H6 | `/how-it-works/warmup-reputation-vs-real-sending/` | Why some warmed domains fall over on first contact | warmup emails going to spam after warmup | answer | 1,500 | 2 |
| H7 | `/how-it-works/should-you-keep-warmup-running/` | Should you keep warmup running after buying prewarmed? | keep warmup running while sending | answer | 1,200 | 3 |
| H8 | `/how-it-works/what-burns-prewarmed-domains/` | What burns prewarmed domains, ranked by frequency | why did my domain get burned | report-backed pillar | 2,800 | 1 |
| H9 | `/how-it-works/prewarmed-domains-for-outlook-recipients/` | Do prewarmed domains work for Outlook recipients? | cold email outlook deliverability | answer | 1,500 | 3 |
| H10 | `/how-it-works/inboxes-per-domain-and-daily-limits/` | Inboxes per domain and emails per inbox | how many inboxes per domain cold email | answer | 1,500 | 2 |
| H11 | `/how-it-works/best-tld-for-cold-email-domains/` | Which TLD to use for cold email domains | best tld for cold email | report-backed | 1,600 | 3 |
| H12 | `/how-it-works/dropped-and-recycled-domain-risk/` | Recycled and dropped domains: the hidden history problem | expired domain cold email risk | answer | 1,400 | 3 |
| H13 | `/how-it-works/tracking-domains-and-forwarding-setup/` | Domain forwarding, tracking domains and the credibility check | cold email domain redirect | answer | 1,400 | 3 |
| H14 | `/how-it-works/what-prewarmed-inboxes-cost/` | What a prewarmed domain or inbox costs | prewarmed inbox pricing | answer | 1,400 | 3 |
| H15 | `/how-it-works/google-vs-microsoft-vs-azure-inboxes/` | Google Workspace, Microsoft 365, Azure or private SMTP | google workspace vs outlook cold email | pillar | 3,000 | 3 |
| H16 | `/how-it-works/domain-reputation-when-you-stop-sending/` | What happens to a domain when you stop sending | domain reputation after not sending | answer | 1,200 | 3 |
| H17 | `/how-it-works/is-buying-prewarmed-inboxes-against-terms/` | Is buying prewarmed inboxes against provider terms? | is buying google workspace accounts allowed | pillar | 2,400 | 3 |

H17 is an addition to the original topic map. Rationale in `01-DECISIONS.md` D-09.

## 5. Decision guides `/decide/`

| ID | URL | H1 | Persona | Words | Phase |
|---|---|---|---|---|---|
| DC1 | `/decide/prewarmed-vs-warming-it-yourself/` | Prewarmed or warm it yourself? | P1, P2 | 2,600 | 1 |
| DC2 | `/decide/how-many-domains-and-inboxes/` | How many domains and inboxes you need | P1 to P3 | 2,400 | 1 |
| DC3 | `/decide/choosing-google-microsoft-or-azure/` | Which inbox provider to buy | P2, P3 | 2,200 | 3 |
| DC4 | `/decide/evaluating-a-prewarmed-inbox-vendor/` | Twenty questions for a prewarmed inbox vendor | P3, P4 | 2,600 | 3 |
| DC5 | `/decide/retire-or-recover-a-burned-domain/` | Retire the domain or try to recover it? | P1 to P3 | 1,800 | 3 |
| DC6 | `/decide/one-off-campaign-vs-ongoing-outbound/` | Buying prewarmed for one campaign versus ongoing outbound | P1 | 1,600 | 3 |
| DC7 | `/decide/prewarmed-domains-beyond-sales/` | Prewarmed domains for recruiting, fundraising and PR | P1 | 1,600 | 3 |
| DC8 | `/decide/dmarc-policy-for-cold-domains/` | p=none, quarantine or reject on a cold domain | P2, P4 | 1,800 | 3 |
| DC9 | `/decide/when-not-to-buy-prewarmed/` | When not to buy prewarmed infrastructure | P1 to P4 | 1,800 | 2 |

DC9 is an addition. The editorial standards require the site to name the cases where prewarmed infrastructure is the wrong purchase; a page that does it explicitly is more useful, and more linkable, than the same admission buried in nine other pages.

## 6. Team playbooks `/b2b/`

| ID | URL | H1 | Words | Phase |
|---|---|---|---|---|
| B1 | `/b2b/capacity-planning-for-outbound-infrastructure/` | Capacity planning: from meetings target to domain count | 2,600 | 3 |
| B2 | `/b2b/agency-infrastructure-architecture/` | Infrastructure architecture for agencies | 2,800 | 3 |
| B3 | `/b2b/diversifying-providers-tlds-and-regions/` | Diversification, and the correlated failures it prevents | 2,200 | 3 |
| B4 | `/b2b/14-day-client-onboarding-runbook/` | The 14 day client onboarding runbook | 2,400 | 3 |
| B5 | `/b2b/monitoring-thresholds-and-kill-switches/` | Monitoring: thresholds, alerts and kill switches | 2,600 | 3 |
| B6 | `/b2b/domain-replacement-cadence-and-inventory/` | Replacement cadence and how much inventory to hold | 2,200 | 3 |
| B7 | `/b2b/infrastructure-cost-per-booked-meeting/` | Infrastructure cost per booked meeting | 2,000 | 3 |
| B8 | `/b2b/compliance-for-cold-outbound-infrastructure/` | Compliance on prewarmed infrastructure | 3,000 | 3 |
| B9 | `/b2b/rfp-template-for-inbox-vendors/` | An RFP template and scoring sheet for inbox vendors | 1,800 + template | 3 |
| B10 | `/b2b/migrating-to-prewarmed-without-a-dip/` | Migrating from self-warmed to prewarmed | 2,000 | 3 |
| B11 | `/b2b/operating-100-plus-inboxes/` | Operating 100 or more inboxes | 2,800 | 3 |
| B12 | `/b2b/separating-outbound-from-corporate-domain/` | Separating outbound from the corporate domain | 2,200 | 3 |
| B13 | `/b2b/incident-runbook-for-a-burned-pod/` | Incident runbook: the first 24 hours after a pod burns | 2,000 | 3 |

B13 is an addition. B5 covers detection and B6 covers replacement, but neither covers what a team does in the hours after an alert fires, which is the moment they will search.

## 7. Deliverability reference `/deliverability/`

| ID | URL | H1 | Words | Phase |
|---|---|---|---|---|
| K1 | `/deliverability/gmail-postmaster-tools-for-cold-senders/` | Gmail Postmaster Tools for cold senders | 2,000 | 3 |
| K2 | `/deliverability/microsoft-snds-and-outlook-reputation/` | Microsoft SNDS and Outlook reputation | 1,800 | 3 |
| K3 | `/deliverability/spam-complaint-rate-thresholds/` | Spam complaint rate, and the 0.1% and 0.3% lines | 1,800 | 3 |
| K4 | `/deliverability/bounce-rate-thresholds-during-ramp/` | Bounce rate: hard, soft and the ramp thresholds | 1,600 | 3 |
| K5 | `/deliverability/content-filtering-links-and-images/` | What content filtering actually reacts to | 2,000 | 3 |
| K6 | `/deliverability/custom-tracking-domains/` | Custom tracking domains, and why shared ones burn everyone | 1,400 | 3 |
| K7 | `/deliverability/list-hygiene-and-email-verification/` | List hygiene before a domain touches a list | 1,800 | 3 |
| K8 | `/deliverability/reply-rate-as-a-reputation-signal/` | Reply rate as a reputation signal | 1,200 | 3 |
| K9 | `/deliverability/sending-patterns-and-throttling/` | Sending patterns, spacing and throttling | 1,600 | 3 |
| K10 | `/deliverability/recovering-a-damaged-domain/` | Recovering a damaged domain | 2,200 | 3 |
| K11 | `/deliverability/placement-testing-with-seed-lists/` | Placement testing: what seed lists can and cannot tell you | 2,000 | 2 |
| K12 | `/deliverability/bimi-arc-and-other-distractions/` | BIMI, ARC and other things cold senders are told to care about | 1,400 | 3 |

K11 moves to phase 2 because the methodology page depends on it and the research reports will be read against it.

## 8. Research `/research/`

| ID | URL | Headline question | Dataset | Phase |
|---|---|---|---|---|
| R1 | `/research/prewarmed-vs-fresh-domain-placement/` | Does prewarming work, and by how much? | D1 | 2 |
| R2 | `/research/domain-reputation-decay-curve/` | How fast does placement fall when a domain goes idle? | D2 | 2 |
| R3 | `/research/why-cold-email-domains-burn/` | What kills domains, ranked? | D3 | 2 |
| R4 | `/research/inbox-provider-comparison-study/` | Which provider survives longest? | D4 | 4 |
| R5 | `/research/domain-history-and-placement/` | Is an aged domain a bargain or a liability? | D5 | 4 |
| R6 | `/research/warmup-engagement-vs-real-placement/` | Does warmup engagement predict real placement? | D6 | 4 |
| R7 | `/research/volume-ramp-and-burn-probability/` | How hard can you push a domain? | D7 | 4 |
| R8 | `/research/tld-placement-and-lifespan-study/` | Does the TLD change placement? | D8 | 4 |
| R9 | `/research/prewarmed-inbox-price-benchmark/` | What should a prewarmed inbox cost? | D9 | 2 |
| R10 | `/research/domain-recovery-outcomes/` | What happens to domains after a collapse? | D10 | 4 |
| R11 | `/research/prewarmed-index/` | State of the market, quarterly | D1, D3, D4, D9 | 4 |
| R11n | `/research/prewarmed-index/2026-q4/` | One edition | mixed | 4 |

Dataset pages: `/research/data/d1/` through `/research/data/d10/`, each published in the same pull request as the first report that uses it. Report versions live at `/research/<slug>/v1/` once a v2 exists; the bare slug always serves the current version and links to prior ones.

R9 is promoted to phase 2 and is the contingency launch report: it needs no customer data (see `01-DECISIONS.md` D-02).

## 9. Tools `/tools/`

| ID | URL | Answers | Phase |
|---|---|---|---|
| T1 | `/tools/cold-email-capacity-calculator/` | How many inboxes and domains do I need? | 2 |
| T2 | `/tools/prewarmed-vs-diy-warmup-calculator/` | Is buying cheaper than warming my own? | 3 |
| T3 | `/tools/email-authentication-checker/` | Are my SPF, DKIM and DMARC records right? | 3 |
| T4 | `/tools/sending-ramp-schedule-generator/` | What do I send on each of the next 30 days? | 2 |
| T5 | `/tools/domain-history-check/` | Has this domain been used before? | 3 |

## 10. Glossary `/glossary/<term>/`

63 terms. Slugs are the term, hyphenated, singular, with no qualifier:

`prewarmed-domain`, `prewarmed-inbox`, `aged-domain`, `dropped-domain`, `domain-reputation`, `ip-reputation`, `mailbox-reputation`, `sender-reputation`, `inbox-placement`, `deliverability`, `delivery-rate`, `hard-bounce`, `soft-bounce`, `spam-complaint-rate`, `feedback-loop`, `spf`, `dkim`, `dmarc`, `dmarc-alignment`, `dmarc-policy`, `arc`, `bimi`, `reverse-dns`, `mx-record`, `tracking-domain`, `tracking-pixel`, `email-warmup`, `warmup-network`, `seed-test`, `postmaster-tools`, `snds`, `dnsbl`, `spamhaus`, `greylisting`, `throttling`, `rate-limit`, `sequencer`, `inbox-pod`, `inbox-rotation`, `domain-rotation`, `ramp`, `cruising-volume`, `burn`, `account-suspension`, `secondary-domain`, `lookalike-domain`, `domain-forwarding`, `tld`, `registrar`, `whois-history`, `engagement-signal`, `reply-rate`, `open-rate`, `one-click-unsubscribe`, `list-unsubscribe`, `rfc-8058`, `bulk-sender-requirements`, `can-spam`, `gdpr`, `pecr`, `legitimate-interest`, `email-verification`, `catch-all-domain`, `spintax`, `shared-ip-pool`, `dedicated-ip`.

Each entry: 80 to 200 words, one sentence definition first, then what it is confused with, then a link to the pillar that explains it and to any report that measures it. Glossary entries are never the ranking target for a query that a full page covers; they carry a canonical link to the pillar where that is the case.

---

## Boundary rules (preventing overlap)

The topic map has several pairs that will collapse into each other without a written boundary. These rules are enforced at brief stage: if a draft crosses the line, the material moves, it does not get duplicated.

| Pair | Boundary |
|---|---|
| H5 (ramp) vs H10 (inboxes per domain) vs DC2 (sizing) | H5 is time: what to send on each day. H10 is density: how many inboxes on one domain and how many sends each. DC2 is arithmetic for a target: given a volume goal, how much infrastructure. H5 and H10 both link to DC2 and neither restates it. |
| H3 (how long warm lasts) vs H16 (dormancy) vs R2 (decay report) | R2 is the data and the method. H3 answers the buying-timing question in 1,600 words and cites R2. H16 answers the inventory question about a domain already owned. |
| L8 (what warmup is) vs H1 (how prewarming works) vs H6 (warmup vs real sending) | L8 is the mechanism of warmup networks generally. H1 is the operator process end to end. H6 is the failure mode where warmup metrics look good and campaigns do not. |
| H11 (TLD choice) vs R8 (TLD study) | Same relationship as H3 to R2: the answer page is short and decision-shaped, the report carries the method. |
| H14 (cost) vs R9 (price benchmark) vs B7 (cost per meeting) | H14 explains what is in the price. R9 measures the market. B7 turns cost into cost per outcome for a team. |
| L7 (SPF/DKIM/DMARC) vs DC8 (DMARC policy) vs T3 (checker) | L7 is what the records do. DC8 is one decision inside DMARC. T3 checks a live domain and links to both. |
| DC4 (vendor questions) vs B9 (RFP) | DC4 is for a buyer choosing in an afternoon. B9 is a procurement artefact for a team that must document a choice. |
| K10 (recovering a domain) vs DC5 (retire or recover) vs B13 (incident runbook) | K10 is the technique. DC5 is the decision. B13 is the first 24 hours at team scale. |
| L4 (why new domains land in spam) vs L5 (how reputation is scored) | L4 is the specific new-sender case and is short. L5 is the general model and is the pillar L4 links to. |

## Page count

| Group | Count |
|---|---|
| Top level and trust | 8 |
| Section indexes | 9 |
| Fundamentals (L) | 12 |
| Mechanics (H) | 17 |
| Decision guides (DC) | 9 |
| Team playbooks (B) | 13 |
| Deliverability (K) | 12 |
| Research reports (R) | 11 plus editions |
| Dataset pages | 10 |
| Tools (T) | 5 |
| Glossary | 63 |
| **Total at full build** | **169** |
