# prewarmed.org: site plan

Status: plan for review. Nothing here is built yet.
Companion documents: `EDITORIAL-STANDARDS.md` (how every page is written and reviewed) and `DATA-INTAKE.md` (what proprietary data to supply, in what shape, and how it gets cited).

---

## 1. What the site is

prewarmed.org is a reference site on prewarmed sending infrastructure. It exists to help people make deliverability decisions correctly the first time: whether to buy prewarmed domains or warm their own, how many they need, which provider, how to verify what they bought, how to start sending without burning it, and what to do when placement drops.

It is not a marketing site. It reads like a research desk: named authors, dated methodology, charts with sample sizes, sources on every number, and honest limitations. The commercial link is WarmInboxes (warminboxes.com), cited as the operating authority whose infrastructure produces the data and linked as the place to buy. That relationship is disclosed on every page that cites the data.

Two tracks share one site:

| Track | Reader | Buys | Core question |
|---|---|---|---|
| B2C: prewarmed domains | Solo founders, freelancers, recruiters, small operators sending 20 to 300 emails a day | One to a handful of prewarmed domains, often with their own inboxes | "Should I buy a prewarmed domain, and how do I not waste it?" |
| B2B: prewarmed domains + inboxes | Agencies, outbound teams, RevOps, lead-gen shops running 10 to 1,000+ inboxes | Bundled domains and Google/Microsoft/Azure inboxes, replaced on a cadence | "How do I build, size, monitor and replace prewarmed infrastructure at scale?" |

The two tracks share the fundamentals and the research; they diverge at the decision guides and playbooks.

### What makes it high reputation rather than another warmup blog

1. Proprietary data. Cohort studies from real sending infrastructure (placement over time, decay curves, burn causes, provider comparisons). Nobody else in this niche publishes n, date ranges and methodology.
2. Mechanism over tips. Every "do this" is preceded by "here is why the filter behaves this way", with the provider's own documentation cited.
3. Decision framing. Pages open with the decision and the answer, then earn it.
4. Honesty about limits. Where prewarming does not help, where the data is thin, where folklore is wrong. Saying "this does not work" is the fastest route to trust in this market.
5. Editorial process. Named author, reviewer, publish date, last-verified date, changelog. See `EDITORIAL-STANDARDS.md`.

---

## 2. Audiences and the decisions they are trying to make

Every page on the site maps to at least one of these decisions. If a proposed page does not, it is not written.

| # | Persona | Situation | Decisions the site must resolve |
|---|---|---|---|
| P1 | Solo operator (B2C) | Needs to send 50 to 200 cold emails a day from a secondary domain, has been burned once or is scared of it | Buy prewarmed vs warm own; how many domains; which TLD; how to verify a purchase; day-1 sending plan; whether to keep warmup running |
| P2 | Founder-led sales / small team | 2 to 10 inboxes, one sequencer, no deliverability specialist | Provider choice (Google vs Microsoft); inboxes per domain; monitoring with no tooling budget; when a domain is "done" |
| P3 | Agency / lead-gen operator (B2B) | 50 to 1,000+ inboxes across clients; infra cost is a P&L line; a burned pod costs meetings | Capacity model; diversification across providers/regions/TLDs; replacement cadence; vendor evaluation; client onboarding runbook; TCO per meeting |
| P4 | RevOps / deliverability owner at a mid-size company | Must keep corporate domain reputation isolated from outbound; answers to legal and IT | Governance; separation of infrastructure; compliance (CAN-SPAM, GDPR/PECR); DMARC policy for cold domains; reporting |
| P5 | Sceptic / researcher | Suspects prewarmed domains are a scam or a grey-hat trick, wants evidence | Does reputation actually transfer; what "prewarmed" means technically; what the failure data says |

P5 is deliberately included. Content written to survive a sceptic is what earns links from the deliverability community, and those links are what make the site rank for everyone else.

---

## 3. Information architecture

```
/                               Home: thesis, choose-your-track, latest research, tools
/learn/                         Fundamentals (B2C "start here" track, plain language)
/how-it-works/                  Mechanics of prewarming (bottom-of-funnel questions)
/decide/                        Decision guides (buy vs warm, provider, sizing, vendor)
/b2b/                           Playbooks for teams running domains + inboxes at scale
/deliverability/                Deliverability knowledge base (authentication, reputation, monitoring, recovery)
/research/                      Data reports built on proprietary data, each with a dataset page
/research/data/                 Dataset pages: definitions, n, date range, exclusions, download where allowed
/tools/                         Calculators and checkers
/glossary/                      Definitions, one URL per term
/methodology/                   How data is collected, measured and reported
/editorial-policy/              Standards, corrections, update cadence
/disclosure/                    Relationship with WarmInboxes and how it affects (and does not affect) content
/about/                         Who writes and reviews
/changelog/                     Site-wide log of substantive content changes
```

Navigation is by question, not by section name. Primary nav: Start here / How prewarming works / Decide / For teams / Research / Tools. Secondary (footer): Deliverability KB / Glossary / Methodology / Disclosure / About.

Cross-linking rules:

- Every fundamentals page links forward to the decision guide it feeds.
- Every decision guide cites at least one research report and links to the relevant tool.
- Every research report links back to the decision guides that use its findings, and to its dataset page.
- Every mention of a glossary term in the first occurrence on a page links to the glossary entry.
- WarmInboxes is linked where it is genuinely the source or the next step, never as decoration. Target: one contextual link per page, plus the disclosure line.

---

## 4. Topic map

Each row: working title, primary query intent, the decision it serves, page type, and the data hook (which proprietary dataset it should cite; see `DATA-INTAKE.md` for dataset IDs). "Pillar" pages are 2,500 to 4,000 words with a table of contents; "Answer" pages are 800 to 1,500 words and open with the answer; "Report" pages are data-driven; "Tool" pages are interactive.

### 4.1 Fundamentals: `/learn/` (B2C start-here track)

| ID | Title | Intent | Decision served | Type | Data hook |
|---|---|---|---|---|---|
| L1 | What is a prewarmed domain? | "prewarmed domain", "pre-warmed domain meaning" | Orientation | Pillar | D1 (cohort placement day 1 vs fresh) |
| L2 | What is a prewarmed inbox, and how is it different from a prewarmed domain? | "prewarmed inbox", "pre-warmed email accounts" | Orientation; feeds DC1 | Answer | D1 |
| L3 | Fresh, aged, and prewarmed domains: the three things everyone conflates | "aged domain vs new domain cold email" | Buy decision | Pillar | D1, D5 |
| L4 | Why new domains land in spam: the new-sender problem explained | "new domain emails going to spam" | Orientation | Answer | D1 |
| L5 | How Gmail, Outlook and Yahoo score sender reputation | "email sender reputation how it works" | Everything downstream | Pillar | Provider docs; D4 for provider split |
| L6 | Domain reputation vs IP reputation vs mailbox reputation: which one you actually carry | "domain reputation vs ip reputation" | Provider choice; verification | Answer | D4 |
| L7 | SPF, DKIM and DMARC for cold senders (what each record does, what breaks) | "spf dkim dmarc cold email" | Setup | Pillar | D3 (burn causes: auth failures share) |
| L8 | What email warmup is and what warmup networks actually do | "email warmup how it works" | Buy vs warm | Pillar | D6 |
| L9 | Delivery rate, deliverability and inbox placement are three different numbers | "deliverability vs inbox placement" | Reading vendor claims | Answer | Methodology page |
| L10 | The bulk sender requirements (Google/Yahoo 2024, Microsoft 2025) and what applies to cold senders | "gmail bulk sender requirements cold email" | Compliance | Pillar | Provider docs |
| L11 | Which blacklists matter and which do not | "email blacklist check does it matter" | Verification; monitoring | Answer | D3 |
| L12 | Why you must never cold email from your primary domain | "cold email from main domain" | Buy decision | Answer | D3 |

### 4.2 Mechanics: `/how-it-works/` (bottom-of-funnel questions)

These are the questions people ask right before they buy or right after. They get the most rigorous treatment on the site.

| ID | Title | Intent | Decision served | Type | Data hook |
|---|---|---|---|---|---|
| H1 | How prewarming works, step by step (registration, aging, DNS, mailbox creation, engagement, ramp, QA, handoff) | "how does domain prewarming work" | Buy; verify | Pillar | D6, methodology |
| H2 | What "prewarmed" actually transfers: does reputation survive a change of owner? | "does domain reputation transfer" | Sceptic; buy | Pillar | D1, D2 |
| H3 | How long a prewarmed domain stays warm (the decay curve) | "how long does email warmup last" | Buy timing; inventory | Report-backed answer | D2 |
| H4 | How to verify a prewarmed domain before you trust it (10-point check) | "how to check if a domain is warmed up" | Verification | Pillar + checklist | D5 (WHOIS/drop history) |
| H5 | Day 1 to day 30 on a prewarmed domain: the ramp that does not burn it | "how many emails to send from a new domain per day" | Post-purchase | Pillar | D7 |
| H6 | Warmup-only reputation vs real-send reputation: why some "warmed" domains fall over on first contact | "warmup emails going to spam after warmup" | Sceptic; vendor evaluation | Answer | D6, D3 |
| H7 | Should you keep warmup running after buying prewarmed? | "keep warmup running while sending" | Post-purchase | Answer | D7 |
| H8 | What burns prewarmed domains: failure modes ranked by frequency | "why did my domain get burned" | Monitoring; prevention | Report-backed pillar | D3 |
| H9 | Do prewarmed domains work for Outlook/Microsoft recipients? | "cold email outlook deliverability" | Provider; targeting | Answer | D4 |
| H10 | Inboxes per domain and emails per inbox: what the data says | "how many inboxes per domain cold email" | Sizing | Answer | D7 |
| H11 | TLD choice for prewarmed domains (.com vs the rest) | "best tld for cold email" | Buy | Report-backed answer | D8 |
| H12 | Recycled and dropped domains: the hidden history problem | "expired domain cold email risk" | Verification | Answer | D5; link WarmInboxes domain expiry checker |
| H13 | Domain forwarding, tracking domains and the "does this company exist" check | "cold email domain redirect" | Setup | Answer | D3 |
| H14 | What a prewarmed domain or inbox costs and what the price actually includes | "prewarmed inbox pricing" | Buy | Answer | D9 |
| H15 | Google Workspace vs Microsoft 365 vs Azure vs private SMTP for prewarmed inboxes | "google workspace vs outlook cold email" | Provider | Pillar | D4 |
| H16 | What happens when you stop sending: dormancy and re-activation | "domain reputation after not sending" | Inventory | Answer | D2 |

### 4.3 Decision guides: `/decide/`

Each is structured as: the decision, the answer in one paragraph, the model behind it, the numbers, exceptions, what to do next.

| ID | Title | Persona | Data hook |
|---|---|---|---|
| DC1 | Prewarmed vs warming it yourself: time, cost and risk model | P1, P2 | D1, D6, D9; Tool T2 |
| DC2 | How many domains and inboxes you need (worked examples at 100, 500, 2,000, 10,000 sends/day) | P1 to P3 | D7; Tool T1 |
| DC3 | Choosing a provider: Google vs Microsoft vs Azure by recipient mix and risk tolerance | P2, P3 | D4 |
| DC4 | Evaluating a prewarmed inbox vendor: 20 questions and the answers that disqualify | P3, P4 | D3, D5 |
| DC5 | When to retire a domain vs try to recover it | P1 to P3 | D3, D10 |
| DC6 | Buying prewarmed for a one-off campaign vs ongoing outbound | P1 | D2, D9 |
| DC7 | Prewarmed domains for non-sales use: recruiting, fundraising, partnerships, PR | P1 | D1 |
| DC8 | DMARC policy for cold domains: p=none, quarantine or reject | P2, P4 | Provider docs; D3 |

### 4.4 Playbooks for teams: `/b2b/`

| ID | Title | Persona | Data hook |
|---|---|---|---|
| B1 | Capacity planning: from meetings target to sends/day to inbox count to domain count | P3 | D7; Tool T1 |
| B2 | Infrastructure architecture for agencies: pods, isolation per client, rotation | P3 | D3 |
| B3 | Diversification: providers, IP regions, TLDs, registrars. Reducing correlated failure | P3, P4 | D3, D4, D8 |
| B4 | The 14-day client onboarding runbook on prewarmed infrastructure | P3 | D7 |
| B5 | Monitoring: placement tests, Postmaster Tools, SNDS, thresholds and kill switches | P3, P4 | D3, D10 |
| B6 | Replacement cadence: modelling domain lifespan and holding inventory | P3 | D2, D3 |
| B7 | Cost model: infrastructure TCO per booked meeting | P3 | D9; Tool T2 |
| B8 | Compliance on prewarmed infrastructure: CAN-SPAM, GDPR, PECR, unsubscribe handling | P4 | Regulatory sources |
| B9 | Procurement: RFP template and scoring sheet for prewarmed inbox vendors | P3, P4 | DC4 |
| B10 | Migrating from self-warmed to prewarmed infrastructure without a placement dip | P3 | D7 |
| B11 | Operating 100+ inboxes: admin consoles, 2FA, app passwords, sequencer connection limits, suspension handling | P3 | D3 |
| B12 | Separating outbound infrastructure from the corporate domain: a governance memo you can hand to IT | P4 | D3 |

### 4.5 Deliverability knowledge base: `/deliverability/`

| ID | Title | Data hook |
|---|---|---|
| K1 | Gmail Postmaster Tools for cold senders: what the dashboards mean and what they miss | Provider docs |
| K2 | Microsoft SNDS and Outlook reputation | Provider docs; D4 |
| K3 | Spam complaint rate: how it is measured, the 0.1% and 0.3% lines, why cold senders rarely see it coming | Provider docs; D3 |
| K4 | Bounce rate: hard vs soft, thresholds during ramp, verification providers compared | D3 |
| K5 | Content filtering: links, tracking pixels, images, spintax, attachments | D3 |
| K6 | Custom tracking domains: setup and why shared tracking domains burn everyone | D3 |
| K7 | List hygiene and verification before a fresh or prewarmed domain touches a list | D3 |
| K8 | Reply rate as a reputation signal | D7 |
| K9 | Sending patterns: time-of-day, cadence, throttling, human-like spacing | D7 |
| K10 | Recovering a damaged domain: what works, how long it takes, when to stop | D10 |
| K11 | Placement testing: seed lists, what they can and cannot tell you | Methodology |
| K12 | BIMI, ARC, and other things cold senders are told to care about (mostly: do not) | Provider docs |

### 4.6 Research: `/research/`

This is the moat. Each report has a fixed structure: question, data and method (with n, date range, exclusions), findings with charts, implications for each persona, limitations, dataset page, citation block. Reports are versioned and re-run on a schedule. See `DATA-INTAKE.md` for the datasets each requires.

| ID | Report | Question answered | Dataset |
|---|---|---|---|
| R1 | Prewarmed vs fresh domains: inbox placement over the first 30 days | Does prewarming work, and by how much? | D1 |
| R2 | Reputation decay: how fast placement falls when a warmed domain goes idle | How long does "warm" last? | D2 |
| R3 | Why domains burn: failure causes ranked, by provider and by sender behaviour | What kills domains? | D3 |
| R4 | Google vs Microsoft 365 vs Azure inboxes: placement, suspension rate, lifespan | Which provider? | D4 |
| R5 | Domain history and placement: fresh registrations vs dropped/recycled domains | Is a cheap aged domain a bargain or a liability? | D5 |
| R6 | Warmup network engagement vs real placement: how well warmup signals predict campaign results | Is warmup-only reputation real? | D6 |
| R7 | Volume ramp: daily sends per inbox vs 30-day placement and burn probability | How hard can you push? | D7 |
| R8 | TLD study: placement and lifespan by top-level domain | Which TLD? | D8 |
| R9 | Market price benchmark: cost per prewarmed inbox and domain across vendors | What should it cost? | D9 |
| R10 | Recovery outcomes: what happens to domains after a placement collapse | Retire or recover? | D10 |
| R11 | The Prewarmed Index (quarterly): placement, burn rate, provider share, price. A recurring benchmark the industry can cite | State of the market | D1, D3, D4, D9 |

R1, R3 and R2 ship first. They underpin most decision guides.

### 4.7 Tools: `/tools/`

| ID | Tool | Inputs | Output | Data dependency |
|---|---|---|---|---|
| T1 | Capacity calculator | Target sends/day (or meetings/month with reply and booking rates), provider, risk tolerance | Inboxes, domains, monthly cost, ramp timeline | D7, D9 |
| T2 | Prewarmed vs DIY warmup calculator | Inbox count, warmup tool cost, target start date, hourly cost of the operator | Time to first campaign, total cost, expected placement at day 1 and day 30 | D1, D6, D9 |
| T3 | Authentication checker | Domain | SPF/DKIM/DMARC records parsed and explained, common mistakes flagged | None (live DNS lookup) |
| T4 | Ramp schedule generator | Start date, inbox count, prewarmed or fresh | Day-by-day send limits as a table and CSV | D7 |
| T5 | Domain history check | Domain | Registration age, drop history, blacklist status | Link out to WarmInboxes domain expiry checker for the expiry component; own lookups for the rest |

Tools are static-page JavaScript with no accounts. They exist to be linked to; each embeds the research it derives from.

### 4.8 Glossary: `/glossary/`

One URL per term, 80 to 200 words, linking to the pillar that explains it. Seed list (60 terms): prewarmed domain, prewarmed inbox, aged domain, dropped domain, domain reputation, IP reputation, mailbox reputation, sender reputation, inbox placement, deliverability, delivery rate, bounce (hard/soft), spam complaint rate, feedback loop, SPF, DKIM, DMARC, alignment, p=none/quarantine/reject, ARC, BIMI, PTR/rDNS, MX, tracking domain, tracking pixel, warmup, warmup network, seed test, Postmaster Tools, SNDS, blacklist/DNSBL, Spamhaus, greylisting, throttling, rate limit, sequencer, pod, rotation, inbox rotation, ramp, cruising volume, burn, suspension, secondary domain, lookalike domain, redirect/forwarding, TLD, registrar, WHOIS history, engagement signal, reply rate, open rate (and why it is unreliable), one-click unsubscribe, List-Unsubscribe header, RFC 8058, bulk sender requirements, CAN-SPAM, GDPR, PECR, legitimate interest, verification (list), catch-all domain, spintax, shared IP pool, dedicated IP.

### 4.9 Trust pages

- `/methodology/`: how placement is measured (seed composition, cadence, providers), what "burned" means operationally, how cohorts are built, exclusions, how numbers are updated, known biases (the data comes from one operator's infrastructure and customers).
- `/editorial-policy/`: standards, review, corrections, update cadence, AI-assistance disclosure.
- `/disclosure/`: the WarmInboxes relationship, in plain language. Two variants are drafted in `EDITORIAL-STANDARDS.md` depending on whether prewarmed.org is operated by WarmInboxes or is an independent property with a data partnership. Pick one; it appears in the footer of every page.
- `/about/`: authors and reviewers with real names, roles, and what they operate.

---

## 5. Home page

Not a hero and three feature cards. Structure:

1. One-sentence thesis and who the site is for.
2. "Start with your situation": four cards keyed to P1 to P4, each linking to one decision guide.
3. Latest from research: three report cards with one headline number each (with n and date range in the card).
4. The question index: the 12 most-asked bottom-of-funnel questions (H-series), as plain links.
5. Tools strip.
6. Disclosure line and methodology link.

---

## 6. Search and keyword strategy

The strategy is to own the decision queries and the "how does it actually work" queries, where competitors publish thin listicles, and to earn links from deliverability practitioners with the research.

Clusters, in priority order:

1. Definition and mechanism: "prewarmed domain", "pre-warmed inbox", "how does email warmup work", "does domain reputation transfer". Pages L1, L2, L8, H1, H2.
2. Bottom-of-funnel comparison: "prewarmed vs warmup", "aged domain vs new domain", "google workspace vs outlook cold email", "best tld cold email". Pages L3, DC1, H15, H11.
3. Sizing: "how many inboxes per domain", "how many cold emails per day new domain", "cold email infrastructure calculator". Pages H10, H5, DC2, T1.
4. Failure and recovery: "domain burned cold email", "emails going to spam after warmup", "recover domain reputation". Pages H8, H6, K10, DC5.
5. Requirements and compliance: "gmail bulk sender requirements cold email", "one click unsubscribe cold email", "dmarc cold email". Pages L10, B8, DC8.
6. Research terms nobody ranks for yet because nobody has the data: "domain reputation decay", "prewarmed domain lifespan", "cold email burn rate". Pages R2, R3, H3.

On-page: one H1 that is the question, the answer in the first 100 words, FAQ schema for the sub-questions actually answered, Article schema with author and dates, Dataset schema on dataset pages, BreadcrumbList. No keyword-stuffed slugs; slugs are the question in four to six words.

Link earning is by research, not outreach: each report ships with an embeddable chart (SVG with attribution baked in) and a citation block, and is announced to deliverability newsletters and communities with the finding rather than the product.

---

## 7. Visual and technical direction

Design: editorial and analytical, deliberately unlike SaaS marketing sites and unlike coldemail.it's rounded indigo look. Serif display headings, a restrained neutral palette with one accent for data, generous measure for reading, charts as first-class content with captions and sample sizes. Light and dark modes. Reads closer to a research publication than a vendor blog.

Stack recommendation: Astro with MDX content collections, statically built, hosted on Vercel (same as coldemail.it). Reasons: 100+ pages need templating; research pages need charts generated from CSV at build time (inline SVG, no client-side charting library); schema.org and OG images are trivial; content stays in Markdown so editing and review happen in pull requests. If you prefer to stay with hand-written HTML like coldemail.it, the plan is unchanged but the research section becomes much more expensive to maintain; I would not recommend it at this page count.

Non-negotiables regardless of stack:

- Every article: author, reviewer, published, last verified, changelog link, sources list, disclosure line.
- Charts built from committed CSV, with n and date range rendered on the chart. No hand-drawn numbers.
- Site search (Pagefind or equivalent, static).
- Sitemap, canonical URLs, RSS for research and changelog.
- No pop-ups, no gated content, no exit intent. Trust pages linked from every footer.
- Performance budget: no client JS on article pages except the tools.

---

## 8. Build phases

| Phase | Scope | Exit criteria |
|---|---|---|
| 0. Foundation (week 1 to 2) | Stack, design system, article/report/tool templates, methodology, editorial policy, disclosure, about, glossary skeleton (60 stubs), data intake agreed | Site deploys with trust pages live; first dataset received and validated |
| 1. Cornerstones (weeks 2 to 6) | L1, L3, L5, L7, L8, H1, H2, H4, H5, H8, DC1, DC2. Twelve pages that cover both tracks | Each page passes the editorial checklist; internal links complete; FAQ/Article schema validated |
| 2. First research (weeks 4 to 8, overlapping) | R1, R3, R2 with dataset pages; T1 and T4 tools | Reports published with methodology; embeddable charts; citation blocks; decision guides updated to cite them |
| 3. Depth (weeks 8 to 14) | Remaining H-series, DC3 to DC8, B1 to B12, K1 to K12, T2, T3, T5 | Full topic map live; glossary complete |
| 4. Recurring (ongoing) | R4 to R10 as data allows; R11 Prewarmed Index quarterly; re-verification pass on every page every 90 days; changelog | Index published on schedule; no page older than 90 days without a verification date |

Cadence after launch: two to three substantive pages a week, one research report a month, index quarterly. Fewer, better pages beat volume; the editorial standards document is designed to make that a hard constraint.

---

## 9. What I need from you to start

1. Data. See `DATA-INTAKE.md`. Priority order: D1 (cohort placement), D3 (burn causes), D2 (decay). Even a few hundred domains with dated placement tests is enough for R1.
2. Relationship and disclosure. Is prewarmed.org operated by WarmInboxes, or an independent site with a data partnership? The disclosure text and the about page depend on it.
3. Authors. Real names and roles for at least one author and one reviewer. Operator credentials (volume sent, years, what you run) go on the about page.
4. Stack decision. Astro (recommended) or plain HTML.
5. WarmInboxes resource inventory. The pages on warminboxes.com you want cited and linked, beyond the ones already found (homepage, "Pre-warmed vs new inboxes" post, domain expiry checker, customer reviews).
6. Placement testing method. How placement is measured today (seed provider, seed mix, cadence), so the methodology page describes what actually happens.

Once items 1 and 2 arrive, Phase 0 and the first cornerstone pages can begin.

---

## 10. Measures of success

Not traffic. In order:

1. Citations: research reports referenced by deliverability practitioners, newsletters, and competitor blogs (backlinks to /research/ and /methodology/).
2. Rankings on decision queries (cluster 2 and 3 above) rather than head terms.
3. Assisted conversions: sessions that visit a decision guide or tool and then click through to WarmInboxes.
4. Return readership on research: RSS subscribers, repeat visits to the index.
5. Correction rate: how often published numbers are amended. Low, but not zero, is the target; zero means nobody is checking.
