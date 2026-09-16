# Commercial scoring pass

Every one of the 124 briefs re-examined against three tests, plus twelve new pages added where the commercial gaps were. The tracker now carries the scoring columns; this document explains the judgements and sets out the paid search plan.

**Result: 124 briefs in, 85 live pages out, 132,800 words.** 27 cut, 24 merged into stronger neighbours, 9 marked supersede, 12 added.

---

## 1. The three tests

A page ships only if it passes all three.

1. **Demand.** Someone searches this. Estimated A, B or C from intent shape. These are estimates, not keyword tool figures, and section 8 gives you the list to validate them in ten minutes.
2. **Value we can actually provide.** We can answer it better than the current results, from operating experience or from data. If the honest answer is "we would be summarising other people's posts", it is cut.
3. **Commercial proximity.** There is a real path from this reader to a WarmInboxes relationship, and the path is the natural next step rather than a bolted-on call to action.

Commercial tier, which is the column that matters most:

| Tier | Reader | Live pages |
|---|---|---|
| **1** | Assembling or buying sending infrastructure now | 53 |
| **2** | Has a problem that infrastructure or a tool solves | 28 |
| **3** | Peripheral. Kept only as authority, see section 3 | 4 |

Conversion paths across the 85: **47 to inboxes**, 26 to a free tool, 5 to affiliate, 3 to consultation, 4 none.

## 2. Intent types, because they need different pages

| Type | Reader state | Pages | What the page must do |
|---|---|---|---|
| **Emergency** | Something is broken now | 11 | Answer in the first screen, then the fix, then what prevents recurrence. Converts best on consultation and replacement. |
| **Transactional** | Choosing what to buy | 21 | Lead with the comparison or the number. Disclosure in the body. |
| **Commercial** | Researching before buying | 37 | Mechanism, then the decision, then the option. |
| **Informational** | Learning | 16 | Earns citations. Links forward, does not sell. |

Emergency intent is the most undervalued in this market. Someone whose domain was blocked this morning is worth more than someone reading about warmup, and almost nobody writes for them properly.

## 3. The 20% that is deliberately not commercial

Four pages survive with no commercial path: A9 (reading DMARC reports without a paid tool), A19 (do you need MTA-STS), A22 (is BIMI worth it, and the answer is mostly no) and G4 (personalisation that degrades gracefully).

They stay because a site where every page routes to a purchase stops being cited, and citations are what make the commercial pages rank in the first place. These four are the cheapest citation earners in the set: each answers a question honestly against our own commercial interest, which is exactly the content that gets linked.

Four out of 85 is a floor, not a target. If the ratio ever drops to zero, the authority premise is gone and the paid traffic has to carry everything.

## 4. What was cut and why

27 pages removed. Three patterns:

**Demand without commercial proximity (11).** A6 DKIM rotation, A11 DNS propagation, A18 record drift, A20/A21 MTA-STS mechanics, A24 BIMI failures, A27 nameserver migration, C3 email delays, D8 source attribution, F12 subject truncation, G15 data ops runbook. People search some of these. None of them ends anywhere near an inbox purchase, and each carries a verification cost forever.

**Already owned by a WarmInboxes post that ranks (13).** A8, D2, D6, D10, D11, D14, D17, E5, F2, F15, G5, G11, G13. Commissioning these means paying a writer to compete with your own pages. Where the query was too valuable to leave, the verdict is `supersede` instead: prewarmed.org writes the deeper version and the WI post redirects into it. That applies to nine pages: C4, C7, D4, E7, F1, G1, G3, H1, H2.

**Peripheral to the business (3).** D12 reply opt-outs, G6 personalisation variables, G8 persona copy. Real topics, wrong site.

The full cut and merge tables are in the appendix.

## 5. The twelve pages added

The gap in the original 124 was bottom-of-funnel. Plenty of diagnostics, not enough pages for someone holding a credit card.

| ID | Page | Why it was missing |
|---|---|---|
| N1 | Best prewarmed inbox providers, compared on what is included | The highest-intent query in the category, currently owned by thin affiliate roundups. Rule 4 applies: at least one option we earn nothing from, labelled. |
| N2 | Can I use my existing Google Workspace for cold email? | High volume, and the honest answer (no, isolate it) leads straight to separate infrastructure. The best commercial bridge on the site. |
| N3 | What cold email infrastructure costs per month, at four scales | Budget query with itemised totals at 300, 1k, 5k and 20k sends a day. |
| N4 | Google Workspace, Microsoft 365 or Azure compared | The comparison the whole market searches. |
| N5 | Buying cold email domains: where, what to pay, what to avoid | Domains are the entry purchase. |
| N6 | What to buy for ten clients: an agency shopping list | Agencies place the largest orders. A literal list with quantities. |
| N7 | My domain got blocked today: the first two hours | Emergency intent. Converts on consultation and on replacement. |
| N8 | How many Google Workspace accounts can you actually run? | Ends in buying tenants rather than fighting verification. |
| N9 to N11 | Connecting prewarmed inboxes to Instantly, Smartlead, Email Bison | Highest-intent traffic in the stack section. One per sequencer. |
| N12 | Replacing a burned pod without pausing the campaign | The repeat-purchase trigger. This is the moment agencies reorder. |

## 6. The conversion mechanism

The editorial rule is one contextual link per page. That is correct for organic traffic and wrong for paid, where a visitor who bounces costs money. The reconciliation, which keeps both the rule and the economics:

**Every tier 1 and tier 2 page carries one conversion block, placed after the answer is complete, never before.**

```
┌──────────────────────────────────────────────────────────┐
│  If you need N inboxes ready this week                    │
│                                                           │
│  WarmInboxes sells prewarmed Google, Microsoft 365 and    │
│  Azure inboxes with domains and DNS configured. We        │
│  operate it, so treat this as a disclosed recommendation  │
│  rather than a neutral one. What to check before buying   │
│  from anyone, including us →                              │
│                                                           │
│  [See inbox options]                                      │
└──────────────────────────────────────────────────────────┘
```

Four properties that make it work rather than cheapen the page:

1. **It comes after the answer.** The reader has what they came for before they are offered anything. A block above the answer converts worse and costs the citation.
2. **The disclosure is inside the block**, not in the footer.
3. **It links to the vendor evaluation page as well as the product.** Offering the checklist that could disqualify you is the move that makes the recommendation credible, and it is why H15 is the most important page in the set.
4. **It is one block, not sprinkled links.** The commercial density linter in `15-MONETISATION-AND-TRUST.md` still applies.

Emergency pages get a variant with consultation first, because someone mid-incident wants a person, not a checkout.

## 7. Paid search plan

### Campaign structure

Three campaigns, because the reader states are genuinely different and mixing them wrecks both bidding and messaging.

| Campaign | Intent | Pages | Budget share | Expected CPA |
|---|---|---|---|---|
| **1. Emergency** | Something is broken now | B1, B2, C1, C4, C7, H13, N7 | 25% | Low volume, best conversion |
| **2. Diagnostics and tools** | Running a check | A1, A4, A7, A16, B7, F6 | 30% | Cheapest clicks, longest path |
| **3. Buying** | Choosing what to purchase | E1, E2, G1, G3, H1, H2, H3, H5, H7, H15, N1 to N6, N9, N10 | 45% | Most expensive clicks, shortest path |

**32 pages are marked `ads: primary`** in the tracker and **30 more as `ads: test`**. Do not launch all 32. Start with eight: E1, H7, N2, N3, G3, B1, C4, H15. They cover all three campaigns and they are the eight where the page and the query match most exactly.

### Ad group to landing page mapping

One ad group per page, never one ad group serving several. The brief's H1 is already the question, so the ad headline is the H1 and the landing page answers it in the first screen. That is the whole Quality Score argument, and it is why these pages make better landing pages than a product page does.

### What not to advertise

- **The affiliate roundups and comparison pages that pay us** (the `/stack/` reviews). Thin-affiliate landing pages are a standard disapproval reason, and paying for clicks to a page whose links pay us is the exact pattern that attracts scrutiny. N1 is the one exception and it should be watched closely.
- **The four authority pages.** They exist to earn links, not clicks.
- **Anything tier 3.**

### A risk I could not verify from here

Google's own policy pages are blocked by this environment's egress proxy, so I could not read the current text of the restricted-business policies and I am not going to assert what they say. What I can tell you is where the risk sits, and you should check it yourself before spending:

- The general policies most likely to catch this category are the ones covering unacceptable business practices and enabling dishonest behaviour. Advertising the sale of email accounts at volume is closer to that line than advertising a diagnostic tool.
- This is a second argument for the campaign split above. **Advertising the tools, the diagnostics and the research is both safer and cheaper than advertising "buy inboxes".** Campaign 2 pages are plainly useful utilities. Campaign 3 pages are editorial comparisons. Neither is a bare product page.
- Landing page and ad must match, and all these pages do by construction.
- Expect at least one review. Have the affiliate policy page, the methodology page and the disclosure page live before you launch, because a reviewer looking at a site with those pages sees a publisher.

Read the current policy text at `support.google.com/adspolicy` before committing budget. Do not take my summary as the policy.

### Measurement

The measurement framework in `11-MEASUREMENT.md` deliberately does not make affiliate conversion an editorial target, and paid search does not change that. Track paid separately: cost per click, cost per outbound click to warminboxes.com, and cost per order attributed by WarmInboxes. Keep the organic and paid figures in separate columns so nobody starts optimising the editorial pages against a paid metric.

## 8. Validate the demand estimates in ten minutes

The A, B and C grades are my read of intent shape, not keyword data. I have no access to volume or CPC. Paste these seeds into Keyword Planner, filter to your geographies, and correct the `demand_est` column before you spend anything.

**Buying cluster:** prewarmed inboxes, buy cold email inboxes, cold email infrastructure cost, how many inboxes for cold email, google workspace for cold email, microsoft 365 cold email, azure inboxes cold email, best prewarmed inbox provider, cold email domains for sale, prewarmed inbox price

**Tool cluster:** spf checker, spf record generator, dkim checker, dmarc checker, blacklist checker, email header analyzer, deliverability checker, domain expiry checker, email verifier, spam checker

**Emergency cluster:** cold email going to spam, domain blacklisted, outlook sending to junk, email bounce codes, domain blocked cold email, cold email not delivering, recover domain reputation

**Sizing cluster:** how many inboxes per domain, cold email sending limits, google workspace sending limits, how many emails per day cold email, inbox rotation cold email

Two things to look for beyond volume. First, CPC: anything above roughly your gross margin per order divided by expected conversion rate is a page to rank for rather than bid on. Second, the gap between volume and competition on the tool cluster, which is usually where the cheap clicks are in this category.

---

## Appendix: cut and merge tables
## Cut (27)

| ID | Title | Why |
|---|---|---|
| A6 | Rotating DKIM keys without breaking sending | Near-zero demand, no path. |
| A8 | Why a cold sending domain should end up at p=reject | WI already ranks with dmarc-none-quarantine-reject. |
| A11 | Propagation, TTL and why your change has not taken effect | Volume without commercial proximity. |
| A18 | Why your generated record stops working a month later | Demand without commercial proximity. |
| A20 | Publishing MTA-STS correctly: the record, the file and the | Demand without commercial proximity. |
| A21 | TLS-RPT: getting told when delivery to you fails | Near-zero demand. |
| A24 | SVG, VMC and the parts of BIMI that fail silently | Demand without commercial proximity. |
| A27 | Moving DNS providers without dropping mail | Demand without commercial proximity. |
| C3 | Tracing where the delay happened | Demand without commercial proximity. |
| D2 | How old can a list be before you re-verify it? | WI already ranks. |
| D6 | Deduplication at company level, not just address level | Three WI posts already cover it. |
| D8 | Keeping source attribution when you combine lists | Demand without commercial proximity. |
| D10 | Checking a list against everyone you must not email | Heavily covered by WI. |
| D11 | One suppression list across every domain, inbox and tool | WI already ranks. |
| D12 | Honouring an opt-out that arrived as a reply | Demand without commercial proximity. |
| D14 | Choosing verifier order with your own accuracy test | WI already ranks. |
| D17 | What breaks when you migrate sequencers mid-campaign | WI already ranks. |
| E5 | Does sending Google to Google actually help? | WI already ranks. |
| F2 | Broken merge tags and what recipients actually see | WI already ranks. |
| F12 | Mobile truncation and the subject lines that get cut | Copy topic, no infrastructure path. |
| F15 | Compliance footers across jurisdictions | Three WI posts cover it. Legal exposure without upside. |
| G5 | Stopping AI personalisation from inventing things | WI already ranks. |
| G6 | Which variables are worth collecting | Demand without commercial proximity. |
| G8 | Persona-based copy without multiplying your sequence count | Demand without commercial proximity. |
| G11 | Reply operations at agency scale | Three WI posts cover it. |
| G13 | Building a list you own rather than renting one | Demand without commercial proximity. |
| G15 | What belongs in a data ops runbook | Demand without commercial proximity. |

## Merged (24)

| ID | Folds into | Title |
|---|---|---|
| A2 | A1 | What SPF does not protect you from |
| A5 | A4 | Why your DKIM passes on test mail and fails in campaigns |
| A14 | A13 | CNAME chains, and the hop that breaks your links |
| A17 | A16 | The records to change when you switch sending platform |
| A23 | A22 | The DMARC enforcement BIMI requires, and what that means f |
| A26 | A25 | Auditing nameservers across a hundred domains at once |
| B5 | B4 | Check every domain in your copy, not just your sender |
| B8 | B7 | What a domain grade cannot tell you |
| B14 | B13 | Auto-renew is not a strategy |
| C2 | C1 | Authentication passed in my DNS but failed at the receiver |
| C5 | C4 | Landing in Gmail but not Outlook |
| C8 | C7 | Bounce rate thresholds: when to pause, when to stop |
| D3 | D1 | Verification is not a substitute for a good list |
| D15 | D13 | When to stop paying for verification |
| D18 | D16 | Personalisation variables that do not survive a platform m |
| E8 | E7 | How many inboxes should be resting at any time? |
| F5 | F4 | Links in cold email: how many, where and pointing at what |
| F8 | F7 | Does spintax still do anything for deliverability? |
| F11 | F10 | Sender name: the field nobody tests |
| G9 | G7 | Cleaning and segmenting in the same pass |
| G14 | G12 | Verification and enrichment in one workflow |
| H4 | H3 | Containing failure with tenant structure |
| H9 | E1 | Sizing infrastructure from a pipeline target |
| H16 | H15 | Reading vendor reviews in a market with no standards |
