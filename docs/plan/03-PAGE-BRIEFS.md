# 03. Page briefs

A brief is written and approved before drafting starts. It fixes the persona, the decision, the answer, the evidence the page is allowed to use, and the conditions under which the page fails review. Drafting without an approved brief is how a reference site turns into a blog.

This document contains the standard brief template, then full briefs for the seventeen pages that ship in phases 1 and 2. Briefs for phase 3 pages are written in batches of six, one week ahead of drafting, using the same template.

Numbers written as `[D1: ...]` are placeholders. They are filled from the analysis output, never from memory, and a page containing an unfilled placeholder cannot pass the build.

---

## Brief template

```
ID / URL / template / word budget / phase
Persona: P1 to P5, primary first
Decision: the single decision this page resolves, in one sentence
Answer: the first 100 words, drafted in the brief, not in the draft
Folklore: the wrong belief this page corrects, stated as the reader would state it
Mechanism: what the filter or protocol actually does, and the primary sources for it
Evidence: dataset ID, the cut required, the chart or table produced, minimum n
Outline: H2s, and H3s where the section is longer than 400 words
Links out: decision guide or tool this page feeds, plus glossary terms on first use
Links in: pages that must link here, added in the same pull request
FAQ: the sub-questions answered on the page, for FAQ schema. Only questions actually answered.
Fails review if: the specific conditions that send this page back
Author / reviewer
```

---

## L1. What is a prewarmed domain?

**URL** `/learn/what-is-a-prewarmed-domain/` / pillar / 2,800 words / phase 1

**Persona** P1 primary, P5 secondary.

**Decision** Whether the thing being sold is a real category worth buying, before any comparison of options.

**Answer (drafted).** A prewarmed domain is a domain that has been registered, authenticated and used to send and receive real email traffic for a period before it is handed to you, so that the receiving providers have already formed an opinion of it. The claim being sold is that this opinion is positive and that it survives the handover. In our cohort data, prewarmed domains placed `[D1: x]%` of seeds in the primary inbox on their first day of real sending, against `[D1: y]%` for domains registered that week. The gap closes by day `[D1: z]` if the fresh domain is ramped correctly, which is the reason most buyers are really buying time rather than reputation.

**Folklore.** "A prewarmed domain is a domain that has been sitting around for a while." Age without sending history is not warmth, and the two are sold interchangeably.

**Mechanism.** Receiving providers score a sending identity from observed behaviour: authentication results, volume and its shape over time, recipient engagement, complaints and bounces. A domain with no history has no score, and providers treat unknown senders conservatively. Cite: Google's sender guidelines, Microsoft's Outlook.com deliverability documentation, Yahoo's sender documentation. Every link is verified live at draft time; none is cited from memory.

**Evidence.** D1. Cut: day 0 to day 30 placement by cohort (`prewarmed`, `fresh`, `aged_unwarmed`), Gmail seeds only for the headline number, all providers in a second chart. Minimum 200 domains per cohort, at least three tests each. Chart: placement by day, three lines, n and date range rendered in the SVG.

**Outline.**
1. What a prewarmed domain is (definition, and the four things a seller may or may not have done)
2. What it is not (aged, dropped, catch-all, an inbox)
3. Why the receiving side cares about history (mechanism)
4. What the data shows on day 1 and day 30
5. What you are actually buying: time, or reputation, or neither
6. When a prewarmed domain is the wrong purchase
7. How to check what you were sold
8. Limitations of this evidence

**Links out.** L3, H1, H4, DC1, DC9, glossary: prewarmed-domain, domain-reputation, inbox-placement, email-warmup.

**Links in.** Home question index, `/learn/` index, H1, H2, DC1, glossary `prewarmed-domain`.

**FAQ.** What is a prewarmed domain? How is it different from an aged domain? How long does a domain need to be warmed? Can I warm a domain myself?

**Fails review if.** The day 1 gap is quoted without the day 30 convergence. Section 6 is missing or is one sentence. The page reads as a definition of a product rather than of a category.

---

## L3. Fresh, aged and prewarmed domains are three different things

**URL** `/learn/fresh-aged-and-prewarmed-domains/` / pillar / 2,600 words / phase 1

**Persona** P1 primary, P3 secondary.

**Decision** Which of the three to buy, and what a marketplace listing is actually offering.

**Answer (drafted).** Fresh means registered recently with no sending history. Aged means registered a long time ago, which tells you nothing about whether it has ever sent email and may tell you something bad about what it sent. Prewarmed means it has sent and received real mail recently under authentication that is still in place. Only the third has a reputation to transfer. Aged domains carry history you did not choose: in our history dataset, `[D5: x]%` of aftermarket domains had at least one prior blacklist listing, and `[D5: y]%` had been dropped and re-registered at least once.

**Folklore.** "Buy an aged domain, it will land better." Age is a cheap listing attribute on domain marketplaces, which is why it is the one that gets sold.

**Mechanism.** Registration date is one weak signal among many; prior use is a strong one, and it can be negative. Explain how providers and blocklists retain association with a domain across ownership changes, and what evidence a buyer can see (WHOIS history, archive snapshots, blocklist history).

**Evidence.** D5 for prior-use rates by acquisition type. D1 for the `aged_unwarmed` cohort placement compared to `fresh` and `prewarmed`. This comparison is the highest value chart on the site for the buying decision and it is the one competitors cannot produce.

**Outline.** Definitions table / what a marketplace listing tells you and what it hides / the three cohorts on one chart / where aged domains are genuinely useful / how to check history before buying / what to ask a seller / limitations.

**Links out.** H12, H4, T5, DC1, glossary: aged-domain, dropped-domain, whois-history.

**Links in.** L1, H4, H12, DC1, R5 when it publishes.

**FAQ.** Is an aged domain better than a new one for cold email? What is a dropped domain? How do I check a domain's history?

**Fails review if.** The `aged_unwarmed` cohort is described without stating how those domains were acquired, which changes what the comparison means.

---

## L5. How Gmail, Outlook and Yahoo score sender reputation

**URL** `/learn/how-providers-score-sender-reputation/` / pillar / 3,200 words / phase 1

**Persona** P1, P2, P5.

**Decision** None directly. This is the mechanism page that every recommendation on the site refers back to, which makes it the page most likely to be cited by other sites.

**Answer (drafted).** No provider publishes its scoring model, but all three publish what they measure and what they require, and the requirements are a usable map. Gmail scores a domain and an IP separately and exposes some of it in Postmaster Tools. Microsoft weights complaint rate and its own filtering stack heavily, exposes very little, and its consumer and business platforms behave differently. Yahoo publishes requirements close to Gmail's. The practical result for a cold sender: authentication is a gate, not a score; engagement and complaints move the score; and volume shape decides how quickly a new identity is trusted.

**Folklore.** "There is a spam score, and you can check it." There is no single portable score, and third party tools that report one are reporting their own heuristic.

**Mechanism.** This is the core of the page. Cover, with primary sources for each: authentication as a precondition, domain versus IP versus mailbox reputation, engagement signals the provider can and cannot see, complaint rate and where the 0.1% and 0.3% figures come from, the treatment of unknown senders, per-provider differences. Every claim in this section carries a link to provider documentation or an RFC. Where the behaviour is inferred from observation rather than documented, the page says so in the sentence, not in a footnote.

**Evidence.** Provider documentation primarily. D4 for the observed placement difference between provider platforms in our own data, presented as observation, not as a claim about their algorithms.

**Outline.** What is scored / authentication as a gate / what engagement signals exist / complaints and the published thresholds / how unknown senders are treated / the three providers compared / what none of us can see / what this means for a cold sender.

**Links out.** L6, L7, L9, K1, K2, K3, H2.

**Links in.** Almost every page on the site links here on first mention of sender reputation. This is the site's most linked internal page by design.

**FAQ.** Do email providers have a spam score? Does Gmail score my domain or my IP? What complaint rate is too high?

**Fails review if.** Any mechanism claim lacks a primary source or an explicit "this is inferred from our observations" marker. This page sets the standard the rest of the site is judged by.

---

## L7. SPF, DKIM and DMARC for cold senders

**URL** `/learn/spf-dkim-dmarc-for-cold-senders/` / pillar / 3,000 words / phase 1

**Persona** P1, P2, P4.

**Decision** What records to publish on a cold domain, and how to tell when they are wrong.

**Answer (drafted).** Publish an SPF record that authorises only the services that send for the domain, sign with DKIM using a key your sending platform controls, and publish DMARC with alignment. On a domain used only for outbound cold email, start at `p=none` for long enough to read the reports, then move to `p=reject`, because nothing legitimate is sending from that domain except your sequencer. Authentication does not improve placement on its own. It is a gate: failing it costs you delivery, passing it earns you nothing beyond eligibility.

**Folklore.** "Set DMARC to reject and your deliverability improves." Alignment is a precondition, not a lever.

**Mechanism.** RFC 7208 (SPF), RFC 6376 (DKIM), RFC 7489 (DMARC), plus the current Google and Yahoo bulk sender requirements. Explain the SPF ten lookup limit, the difference between envelope and header from, alignment in relaxed and strict mode, what happens with forwarding, and what a sequencer actually needs.

**Evidence.** D3, share of burn events with `cause_primary = auth_misconfig`, and the same share among events within 14 days of handoff. The claim to make: authentication failures are a preventable minority of burns and they cluster in the first two weeks.

**Outline.** The three records in one table / SPF and its failure modes / DKIM and key handling / DMARC, alignment and policy / what a prewarmed domain should arrive with / a checking procedure / the site's own records as a worked example / common breakages, with the error each produces.

**Links out.** DC8, T3, K6, glossary: spf, dkim, dmarc, dmarc-alignment, dmarc-policy.

**Links in.** L1, H4, H5, DC8, T3, B12.

**FAQ.** Do I need DMARC for cold email? What DMARC policy should a cold domain use? Why does my SPF record fail? Does DKIM improve deliverability?

**Fails review if.** It repeats "authentication improves deliverability" without the gate distinction. It gives a copy-paste SPF record that includes providers the reader does not use.

---

## L8. What email warmup is, and what warmup networks actually do

**URL** `/learn/what-email-warmup-actually-does/` / pillar / 2,800 words / phase 1

**Persona** P1, P2, P5.

**Decision** Whether to run a warmup tool, and how much to trust its dashboard.

**Answer (drafted).** A warmup network is a pool of mailboxes that send each other mail, open it, reply to it and move it out of spam, so that a new sending identity accumulates engagement history quickly. The mechanism is real: engagement is a signal providers use. The limitation is equally real: the engagement is synthetic, the recipients are not your recipients, and the traffic pattern does not resemble a campaign. In our data, warmup network metrics `[D6: relationship]` predicted campaign placement, which means a warmup dashboard at 95% is evidence of very little on its own.

**Folklore.** "The warmup tool says 98%, so the domain is ready." That number describes the warmup pool, not the inboxes you are about to email.

**Mechanism.** How pools work, what each action signals, why providers can distinguish some synthetic patterns, and why the provider position on this is not neutral. Be explicit that some warmup behaviour is engineered engagement and that providers discourage it; the page states this rather than avoiding it.

**Evidence.** D6 joined to D1: correlation between warmup metrics in the final seven days of warmup and first-campaign placement. If the correlation is weak, that is the finding and it is published as the finding.

**Outline.** What a warmup network does mechanically / the signals it manufactures / what it cannot manufacture / warmup metrics against real placement / where providers stand / when warmup is worth running / when to stop.

**Links out.** H6, H7, DC1, R6, T2.

**Links in.** L1, H1, H6, H7, DC1.

**FAQ.** How does email warmup work? How long should I warm up a domain? Do warmup tools actually work? Should I keep warmup running while sending?

**Fails review if.** It sells warmup or dismisses warmup. Both are positions the data has to earn.

---

## H1. How domain prewarming works, step by step

**URL** `/how-it-works/how-domain-prewarming-works/` / pillar / 3,400 words / phase 1

**Persona** P1, P3, P5.

**Decision** What a buyer is paying for, and which steps a given seller has actually performed.

**Answer (drafted).** Prewarming is eight steps: register the domain, publish DNS and authentication, create mailboxes on a provider, generate engagement over weeks, add a real inbound and outbound pattern, run placement tests, fix what fails, and hand over with credentials and records intact. The step that separates operators is the fourth and the sixth: how the engagement was generated, and whether anyone measured placement before the handoff. A seller who cannot answer those two questions is selling an aged domain with mailboxes attached.

**Folklore.** "Prewarming is running a warmup tool for three weeks."

**Mechanism.** Describe the operator process as actually run, in detail, including the parts that are unglamorous (DNS propagation, provider account verification, mailbox naming, the wait). This is the page where transparency about the operator's own process is the product.

**Evidence.** D6 for the shape of a typical warmup curve. The methodology page for how the QA placement tests are run. This page is also the natural home for a documented example timeline of one anonymised domain from registration to handoff.

**Outline.** The eight steps / what happens in each and how long it takes / the two steps that vary between operators / what handoff should include / how to audit each step after purchase / what cannot be prewarmed / limitations.

**Links out.** H4 (verification), L8, DC4, DC1, H17.

**Links in.** L1, L8, H2, H4, DC1, DC4.

**FAQ.** How long does it take to warm up a domain? What is included in a prewarmed domain? Can you prewarm an existing domain?

**Fails review if.** It describes an idealised process rather than the one the data comes from. If the operator does not run placement QA before handoff, the page says so.

---

## H2. Does domain reputation survive a change of owner?

**URL** `/how-it-works/does-domain-reputation-transfer/` / pillar / 3,000 words / phase 1

**Persona** P5 primary. This is the sceptic's page and the site's most important link target.

**Decision** Whether the entire category is real.

**Answer (drafted).** Partly, and the part that transfers is narrower than sellers imply. What persists is the domain's observed history: authentication results, sending patterns, engagement and complaints associated with the domain and its DNS. What does not persist is anything tied to the previous sending behaviour once your behaviour replaces it, which happens within days at real volume. In our cohort, the day 1 advantage of `[D1: x]` percentage points fell to `[D1: y]` by day 14 among domains sent at 50 or more emails per inbox per day, and persisted longer among domains ramped slowly. Reputation transfers; it does not protect.

**Folklore.** Two, in opposite directions. "Reputation is per owner, so prewarming is a scam." And "a warmed domain will keep landing whatever you send." Both are answered.

**Mechanism.** What is bound to the domain versus the sending IP versus the mailbox. Why a change of owner is invisible to a receiving provider unless the sending pattern changes. What changes at handoff in practice (sequencer, IP, volume, content) and which of those the provider can see.

**Evidence.** D1 for the decaying advantage by day and by volume band. D2 for what happens under idleness. This is a two-chart page and the second chart, advantage by volume band, is the one that answers the sceptic.

**Outline.** The question stated fairly / what a provider associates with a domain / what changes at handoff / the evidence / where the advantage goes / conditions under which prewarming buys nothing / what would change our conclusion.

**Links out.** L5, H5, H6, R1, DC9.

**Links in.** L1, L3, H1, R1, home.

**FAQ.** Does domain reputation transfer to a new owner? Do prewarmed domains actually work? How long does the advantage last?

**Fails review if.** It answers only one of the two folklores. It omits the "what would change our conclusion" section, which is the section a sceptic reads first.

---

## H4. How to verify a prewarmed domain before you trust it

**URL** `/how-it-works/how-to-verify-a-prewarmed-domain/` / pillar plus checklist / 2,800 words / phase 1

**Persona** P1, P3.

**Decision** Whether to accept or reject a delivered domain, in the first 48 hours while a refund is still realistic.

**Answer (drafted).** Ten checks, in this order: registration and drop history, DNS and authentication records, mailbox provider and account age, admin access, existing blocklist status, MX and inbound delivery, a controlled seed test from the actual inbox, the reply path, the tracking domain, and the handover documentation. Six of them take under a minute each. The seed test is the only one that measures placement, and it is the one buyers skip.

**Folklore.** "It came from a vendor, so it is warm." The verification burden does not transfer with the domain.

**Mechanism.** For each check, what it proves and what it does not. The seed test section explains what a single seed test can and cannot establish, and links K11.

**Evidence.** D5 for how often prior history exists on acquired domains. D3 for the share of first-30-day burns whose cause was visible at handoff (auth misconfiguration, prior listing, shared tracking domain). The argument: `[D3: x]%` of early burns were detectable by a check that takes ten minutes.

**Outline.** The ten checks as a table with time cost and what each proves / each check in detail / how to run a controlled seed test / what a good handover pack contains / what to do when a check fails / a printable checklist.

**Links out.** T3, T5, K11, DC4, L7.

**Links in.** L1, L3, H1, DC1, DC4, T5.

**FAQ.** How do I check if a domain is warmed up? How do I know if a prewarmed inbox is real? What should a vendor hand over?

**Fails review if.** The checklist is not usable without reading the article. Both formats must stand alone.

---

## H5. Day 1 to day 30 on a prewarmed domain

**URL** `/how-it-works/day-1-to-day-30-sending-ramp/` / pillar / 3,000 words / phase 1

**Persona** P1, P2.

**Decision** What to send on each of the first 30 days without losing the domain.

**Answer (drafted).** Start lower than the domain can technically handle and increase in steps tied to observed outcomes rather than to the calendar. On prewarmed infrastructure our data supports starting at `[D7: x]` emails per inbox per day and increasing by `[D7: y]` every `[D7: z]` days while bounce rate stays under `[D7: threshold]` and placement holds. Fresh domains start lower and take longer. The ramp is not a formula to follow blindly: the stop conditions matter more than the increments, and the most common burn we see in the first 30 days is a volume step taken while a bounce signal was already elevated.

**Folklore.** "Prewarmed means you can start at full volume." And the opposite: "warm up for another 30 days after you buy", which wastes the thing you paid for.

**Mechanism.** Why volume shape matters to a receiving provider, why steps beat linear increases, what a provider sees when volume jumps, and why bounce rate is the leading indicator rather than placement.

**Evidence.** D7 joined to D3. Two outputs: a recommended schedule table generated from the data, and a burn probability by first-week volume band. The schedule table is the source of truth for tool T4; both are generated from the same script so they cannot disagree.

**Outline.** The 30 day table / how the table was derived / stop conditions and what to do at each / what to monitor daily, weekly / differences for fresh domains / differences by provider / the three ways teams break this / limitations.

**Links out.** T4, H10, H7, K4, B4, DC2.

**Links in.** L1, H1, H4, DC2, T4, B4.

**FAQ.** How many emails per day from a new domain? How fast can I ramp a prewarmed domain? What bounce rate is too high during ramp?

**Fails review if.** The schedule is presented without the stop conditions. The numbers differ from T4's output by any amount.

---

## H8. What burns prewarmed domains, ranked by frequency

**URL** `/how-it-works/what-burns-prewarmed-domains/` / report-backed pillar / 2,800 words / phase 1

**Persona** P1, P3.

**Decision** What to prevent, and what to check first when placement drops.

**Answer (drafted).** Ranked by frequency in `[D3: n]` burn events: `[D3: cause 1]`, `[D3: cause 2]`, `[D3: cause 3]`. List quality and volume behaviour account for `[D3: x]%` between them, which means most burns are caused by what the sender did rather than by what the infrastructure was. Provider suspensions are a distinct failure with a different profile: they arrive without warning and the domain is usually unrecoverable. The single highest value preventive control is list verification before the first send, because bounce-driven failures cluster in the first 14 days.

**Folklore.** "The domain was bad." Sometimes true, usually not, and the data can separate the two.

**Mechanism.** For each cause, the chain from behaviour to provider response, with the detection signal available to the sender at each stage.

**Evidence.** D3 as the primary source. Charts: causes ranked with confidence banding (confirmed, probable, speculative shown separately, never merged), burns by days since handoff, cause mix by provider. The confidence banding is what makes this defensible; publish the attribution rubric alongside it.

**Outline.** The ranking / how causes were attributed and what "confirmed" means / each cause with its mechanism, its early signal and its prevention / provider suspensions as a separate class / timing of burns / what we could not attribute / limitations.

**Links out.** R3, B5, DC5, K10, K7, B13.

**Links in.** L1, H5, DC5, B5, R3.

**FAQ.** Why did my cold email domain get burned? What causes a domain to be blacklisted? Can a burned domain be recovered?

**Fails review if.** Speculative attributions are counted in the headline ranking. The unknown category is hidden rather than reported.

---

## DC1. Prewarmed or warm it yourself?

**URL** `/decide/prewarmed-vs-warming-it-yourself/` / decision guide / 2,600 words / phase 1

**Persona** P1, P2.

**Decision** Buy or build, for a specific volume and start date.

**Answer (drafted).** Buy if you need to be sending within two weeks, if you are running more than roughly `[T2: threshold]` inboxes, or if you have burned a domain before and do not yet know why. Warm your own if your start date is more than six weeks out, your volume is under `[T2: threshold]` inboxes, and your time is worth less than the difference. The cost comparison is usually not the deciding factor: at small scale the difference is `[D9: x]` dollars per inbox per month, and the real variable is the six weeks and the failure rate of a first attempt.

**Model.** Three inputs: time to first campaign, total cost including operator hours, and expected placement at day 1 and day 30. The page shows the model, the tool T2 runs it.

**Evidence.** D1 for the placement difference. D6 for how long self-warming takes to reach comparable engagement. D9 for price. Every input to the model is sourced or is a stated assumption the reader can change in the tool.

**Outline.** The decision in one paragraph / the three inputs / worked example at 2 inboxes / worked example at 20 / worked example at 200 / when buying is wrong / what the model ignores / the tool.

**Links out.** T2, L8, H1, DC9, DC2, H14.

**Links in.** L1, L8, H1, home situation card for P1.

**FAQ.** Is it cheaper to buy prewarmed inboxes or warm my own? How long does it take to warm up a domain yourself? Do I still need a warmup tool if I buy prewarmed?

**Fails review if.** The recommendation does not change across the three worked examples. If buying always wins, the model is wrong or the page is an advertisement.

---

## DC2. How many domains and inboxes you need

**URL** `/decide/how-many-domains-and-inboxes/` / decision guide / 2,400 words / phase 1

**Persona** P1, P2, P3.

**Decision** How much infrastructure to buy for a volume or pipeline target.

**Answer (drafted).** Work backwards from sends per day. Divide by the sustainable sends per inbox per day for your provider (`[D7: value]` for Google, `[D7: value]` for Microsoft 365 in our data), add `[D7: headroom]%` headroom for replacement, then divide inboxes by the inboxes-per-domain figure you are willing to risk, which is a concentration decision rather than a deliverability one. At 500 sends per day that is roughly `[worked]` inboxes across `[worked]` domains. Buying to a meetings target requires two more assumptions, reply rate and booking rate, and those dominate the arithmetic.

**Model.** meetings -> replies -> sends -> inboxes -> domains, with headroom and replacement rate. Stated as equations, with each coefficient sourced or flagged as the reader's input.

**Evidence.** D7 for sustainable volume and for the relationship between inboxes per domain and burn risk. D3 for replacement rate. R9 or D9 for cost per unit.

**Outline.** The chain / sustainable volume per inbox by provider / inboxes per domain as a risk decision / headroom and replacement / four worked examples at 100, 500, 2,000 and 10,000 sends per day / what changes the answer / the calculator.

**Links out.** T1, H10, H5, B1, B6.

**Links in.** H5, H10, home situation cards for P2 and P3, T1.

**FAQ.** How many inboxes do I need for 500 emails a day? How many inboxes per domain? How many domains for cold email?

**Fails review if.** The worked examples are not reproducible with the tool. Reply and booking rates are presented as data rather than as the reader's inputs.

---

## DC9. When not to buy prewarmed infrastructure

**URL** `/decide/when-not-to-buy-prewarmed/` / decision guide / 1,800 words / phase 2

**Persona** All. This is the page that proves the site means the editorial standards.

**Decision** Whether to spend nothing.

**Answer (drafted).** Do not buy prewarmed infrastructure if you are sending fewer than roughly 20 emails a day, if your recipients are people who already know you, if your list is unverified, if you have not fixed the reason your last domain burned, if your use case is regulated in a way that makes cold contact unlawful in your recipients' jurisdiction, or if you intend to send from your primary domain anyway. In the first case the volume does not justify the cost. In the third, new infrastructure fails the same way the old one did, faster, because a clean domain sends to the same bad list.

**Evidence.** D3 for the repeat-burn pattern: share of accounts with a second burn event within 90 days of the first, and the cause overlap. If accounts that burned once burn again at `[D3: x]%`, that is the number that makes this page.

**Outline.** Six cases, each with the mechanism and what to do instead / the repeat burn data / what buying does not fix / where to spend the money instead.

**Links out.** K7, DC5, B8, L12, H8.

**Links in.** DC1, DC4, H2, home, R1.

**Fails review if.** Any case is hedged into a qualified recommendation to buy anyway.

---

## R1. Prewarmed versus fresh domains: inbox placement over the first 30 days

**URL** `/research/prewarmed-vs-fresh-domain-placement/` / report / phase 2

**Question, pre-registered.** Do prewarmed domains place more seed messages in the primary inbox than domains registered immediately before use, and for how long does any difference persist?

This question is written before the analysis runs and is not changed afterwards. If the analysis produces a more interesting question, that becomes a second report with its own pre-registration.

**Population.** Domains handed over or first used between the dataset start and end dates, with at least three placement tests in the first 30 days, excluding: internal and test domains, domains with fewer than 20 real sends in the window, tests with fewer than 30 seeds, and domains whose cohort cannot be determined.

**Primary outcome.** Share of seeds landing in the primary inbox, by cohort and test day index, with Wilson 95% confidence intervals.

**Secondary outcomes.** Placement by receiving provider. Placement by volume band in the first seven days. Share of domains with a burn event inside 30 days.

**Analysis, fixed in advance.** Placement by cohort and day bucket (0 to 1, 2 to 3, 4 to 7, 8 to 14, 15 to 21, 22 to 30). Domain-level means, not test-level, so that heavily tested domains do not dominate. Cells under 30 observations reported but marked; cells under 10 suppressed. No model beyond descriptive statistics in version 1; a mixed effects model with domain as a random effect is a candidate for version 2 and would be pre-registered separately.

**Confounds to state, not to hide.** Cohort is not randomised. Customers who buy prewarmed domains are not the customers who register fresh ones, and they send differently. The fresh cohort is smaller and self-selected. Seed lists are not real recipients. Every one of these appears in the limitations section in plain language, and the headline sentence of the report is scoped accordingly: this is an observational comparison, not a controlled experiment.

**Charts.** (1) Placement by day, three cohorts, confidence bands, n per cohort in the caption. (2) Placement by day, Gmail seeds only versus Microsoft seeds only. (3) Day 1 advantage by first-week volume band. Each chart is generated from a committed CSV and carries n, date range and `D1` inside the SVG.

**Implications sections.** One paragraph each for P1, P3 and P5, each linking to the decision guide that uses the finding.

**Publication requirements.** Dataset page `/research/data/d1/` in the same pull request. Analysis script committed. Reviewer re-runs it and signs the sign-off file. L1, L3, H2, DC1 and DC9 updated to cite the finding in the same pull request. Version 1.0 with a data cut date in the header.

**Fails review if.** Any headline number is stated without its interval. The word "proves" appears. The self-selection confound is mentioned only in the limitations section and not in the sentence that states the result.

---

## R3. Why cold email domains burn

**URL** `/research/why-cold-email-domains-burn/` / report / phase 2

**Question, pre-registered.** Among domains that experienced a burn event, what were the attributed primary causes, how are they distributed by provider and by days since handoff, and what share of events could not be attributed?

**Population.** All burn events in D3 within the window, joined to sending behaviour in the seven days before the event.

**The hard part: attribution.** This report lives or dies on the cause rubric. Before any analysis, write the rubric: the observable conditions under which each `cause_primary` value may be assigned, and what separates `confirmed` from `probable` from `speculative`. Publish the rubric on `/methodology/` and link it from the report. Then have a second person independently attribute a random sample of `[n = 100]` events using the rubric and report the agreement rate between the two attributions. An inter-rater agreement figure on a cause-attribution study is unusual in this market and it is the detail that makes the report citable.

**Analysis.** Cause ranking with confirmed and probable shown separately from speculative. Burns per 100 domain months as the rate measure rather than a raw count, because exposure differs. Time to burn distribution. Cause mix by provider, with cell suppression. Repeat burn rate by account.

**Charts.** Ranked causes with confidence bands. Burns by days since handoff. Cause mix by provider (stacked, suppressed cells marked).

**Limitations to state.** Detection is not uniform: domains under active monitoring produce more recorded events than domains that are not, which biases both the rate and the mix. Causes are attributed by operators who are not blind to the outcome. Unknown is a real category and its size is reported in the headline, not buried.

**Fails review if.** Speculative attributions are pooled into the ranking. The unknown share is omitted from the summary. Rates are given as counts without exposure.

---

## R9. Prewarmed inbox price benchmark

**URL** `/research/prewarmed-inbox-price-benchmark/` / report / phase 2, and the contingency launch report

**Question.** What does a prewarmed inbox or domain cost across publicly listed vendors, and what is included at each price?

**Why it matters to the plan.** R9 requires no customer data. If D-02 (data consent) or D-06 (placement method) is unresolved, R9 publishes first and the research section is credible from launch. It is also the report most likely to be linked by buyers comparing vendors.

**Method.** Public pricing pages only. Every observation is a row in D9 with the source URL and a screenshot archived on the observation date. Where pricing is quote-only, the row records "not published" rather than an estimate. Re-observed monthly; the report states the observation date and the price table carries a per-row date.

**Analysis.** Median and range of price per inbox per month by provider type and by minimum order size. What is included at each price point, as a feature matrix. Cost per inbox per month against minimum commitment. No quality ranking of any kind.

**Rules, non-negotiable.** WarmInboxes appears in the table under the same rules as everyone else, with its own prices, and is not highlighted. Any vendor may request a correction and corrections are logged. No commentary on a vendor beyond what its own page states.

**Fails review if.** WarmInboxes is presented as the reference point. A quote-only vendor is given an estimated price. The table is published without observation dates.

---

## R2. Reputation decay curve

**URL** `/research/domain-reputation-decay-curve/` / report / phase 2 (third of the three)

**Question, pre-registered.** How does seed placement change with days idle since the last real send, and does continued warmup network activity change that curve?

**Why it is third.** It is the report nobody in the market has published, which makes it the most linkable, but it needs the longest observation window and the cleanest definition of idle. Publishing it after R1 and R3 means the methodology page and the placement definitions are already public and it can lean on them.

**Analysis.** Placement by idle day bucket (0 to 7, 8 to 14, 15 to 30, 31 to 60, 61 or more), split by `warmup_running`. Domain-level means. Survival style presentation: share of domains still above a placement threshold at each idle bucket.

**The confound to lead with.** Domains go idle for reasons, and one of the reasons is that they were already performing badly. Restricting the population to domains that were above a placement threshold at the start of the idle period is the correction, and it must be stated as a restriction in the headline, not as a footnote.

**Fails review if.** The idle-by-choice versus idle-because-failing distinction is not made explicit in the first paragraph.

---

## T1. Cold email capacity calculator

**URL** `/tools/cold-email-capacity-calculator/` / tool / phase 2

**Question it answers.** Given a sending or meetings target, how many inboxes and domains, at what cost, over what ramp.

**Inputs.** Target sends per day, or meetings per month with reply rate and booking rate. Provider. Risk tolerance (three settings: conservative, standard, aggressive, each mapping to a documented inboxes-per-domain and sends-per-inbox pair). Optional: current inbox count.

**Outputs.** Inboxes needed, domains needed, monthly cost range, days to full volume, and the assumption set used, printed with the result so a screenshot of the output carries its own provenance.

**Coefficients.** Every default comes from D7 or D9 and is displayed with its source and a link to the report. Editable by the user; edited values are marked in the output as "your assumption" rather than silently blended with ours.

**Constraints.** No accounts, no email capture, no server calls. All computation client side. The URL encodes the inputs so a result can be shared and reproduced. Under 15KB of JavaScript. Accessible: real form controls, keyboard operable, results announced to screen readers, works without pointer precision.

**Fails review if.** Its numbers disagree with DC2 by any amount. The default risk setting is the aggressive one. Any output implies precision the data does not have; ranges are shown as ranges.

---

## T4. Sending ramp schedule generator

**URL** `/tools/sending-ramp-schedule-generator/` / tool / phase 2

**Question it answers.** What do I send on each of the next 30 days, per inbox.

**Inputs.** Start date, inbox count, prewarmed or fresh, provider, weekend sending yes or no.

**Outputs.** A day by day table, a CSV download, and the stop conditions printed alongside every schedule. The stop conditions are not optional output: a ramp schedule without them is the thing that burns domains.

**Shared source of truth.** The schedule generator and H5's table are produced by the same committed script from the same D7 analysis. A build check compares the tool's output for the reference case against the table in H5 and fails the build if they differ.

**Fails review if.** The CSV downloads without the stop conditions included as a header block. The schedule is identical for prewarmed and fresh.

---

## Phase 3 brief batching

Phase 3 has 88 pages. They are briefed in batches of six, one week ahead of drafting, in this order:

1. The remaining bottom-of-funnel mechanics (H3, H6, H9, H10, H11, H12), because they carry commercial intent and depend only on data already published.
2. The provider and cost cluster (H14, H15, H17, DC3, DC6, H13).
3. The team build cluster (B1, B2, B3, B4, B6, B11).
4. The team operate cluster (B5, B7, B10, B12, B13, K11).
5. The reference cluster, first half (K1 to K6).
6. The reference cluster, second half (K7 to K10, K12, L6).
7. The compliance cluster (L10, L11, L12, DC8, B8, B9), briefed together because they share sources and one legal review.
8. The remaining decision guides and tools (DC4, DC5, DC7, T2, T3, T5).

Batching by cluster rather than by section means one set of primary sources is read once and used across six pages, which is roughly a third of the research time per page.
