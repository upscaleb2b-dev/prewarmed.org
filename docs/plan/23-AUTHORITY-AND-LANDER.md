# 23. Authority, ranking and subtle monetisation

How prewarmed.org becomes the site people cite, how the lander ranks for the term it is named after, and how it earns for WarmInboxes without reading as a funnel.

---

## 1. Four kinds of authority, earned four different ways

They get conflated constantly. They are not the same asset and they do not respond to the same work.

| Kind | What it is | What earns it | Current state |
|---|---|---|---|
| **Algorithmic** | Rankings. Links, topical coverage, technical health | Original data others link to; internal link economy; depth across a tight topic set | Zero. New domain. |
| **Perceived** | A reader's first-screen judgement | Named humans, dates, method, sample sizes, restraint in the design | Strong in the mockup, unproven without real names |
| **Citation** | Other people quote you by name | One number nobody else has, published with its method | Blocked on D1 to D3 |
| **Machine** | LLMs and AI answers cite you as a source | Atomic quotable answers, stats with n and date in the same sentence, schema, named authors | Designed for, not yet built |

The fourth is the one most competitors are ignoring and it is compounding fastest. A meaningful share of "how many inboxes per domain" questions now get answered without a click. You do not win those with keyword density; you win them by being the only source that states a number with a sample size attached, in a sentence a model can lift cleanly.

## 2. The lander: what it needs to rank for "prewarmed"

**The single biggest gap right now: the page never defines the word it is named after.**

The warmup tax thesis is strong and it is the right commercial hook, but someone searching "prewarmed domain" or "what are prewarmed inboxes" lands on an argument about replacement cycles and never sees a definition. Google cannot rank a page for a definitional query when the definition is absent, and a reader at the definition stage bounces.

The fix is not to weaken the thesis. It is to add one compact block that answers the definitional query, positioned after the hero, and to make that block do double duty as the standard in section 4.

**Other technical points specific to this term:**

- **Handle the hyphenation split.** "prewarmed", "pre-warmed" and "pre warmed" are all in use and vendors are inconsistent. Use one form in headings and slugs, and include the variants naturally in body copy once each. Do not spam them.
- **The exact-match domain does not rank the page.** What it does is make the site the natural thing to link to when someone uses the category noun. That is the actual asset: prewarmed.org can become the URL people paste when they write "we bought prewarmed inboxes". Own the definition, not the keyword.
- **The .org carries a residual trust premium with humans**, not with the algorithm. It raises click-through and makes link requests easier. Do not waste it by making the lander read like a product page.
- **Two-property cannibalisation is the live risk.** warminboxes.com already has 132 posts covering these queries. Both properties competing for "how many inboxes per domain" splits the signal and neither wins. The split has to be explicit: WarmInboxes owns commercial and product queries, prewarmed.org owns definitional, research and diagnostic queries. Every overlap gets a decision: cite, supersede with a redirect, or leave alone.

## 3. Subtlety is a placement property, not a copy property

The common mistake is trying to make conversion subtle by softening the words. A softened call to action in the hero is still a call to action in the hero. What actually produces subtlety is **putting the commercial step after the point where the reader has already reached the conclusion themselves.**

Ranked by how well they convert without reading as selling:

**1. The reader does the arithmetic.** The warmup tax calculator already does this. They type their own fleet size, see 23%, and conclude they are paying a tax. Nobody sold them anything. This is the strongest mechanism on the page and it should be the model for everything else.

**2. The disqualifier.** Telling a segment explicitly not to buy is the only move that makes "buy" credible, and it is counterintuitively the highest-return paragraph on a commercial page. "If you are sending under 20 a day, do not buy prewarmed infrastructure, here is what to do instead" costs you customers you would have churned and buys you the trust of everyone else. DC9 exists for this and it should be linked from the lander.

**3. Output that is a shopping list.** The ESP segmenter returns "you need X Google and Y Microsoft inboxes". That is a spec, and a spec wants filling. The tool did not recommend anything; it answered a question whose answer happens to be a purchase order.

**4. The evaluation checklist you also answer.** Publish the questions that disqualify a vendor, answer them about yourself in public, and let the reader run the comparison. The reader feels equipped, not sold to. This only works if the answers are genuinely good, which is the point.

**5. Being in the table rather than above it.** R9 lists every vendor's public price including yours, on identical terms. A buyer who finds you fairly positioned in a table you published trusts the table and therefore trusts the position.

**6. The natural next step at the end of a diagnostic.** Someone who has just worked through "my domain is blocked" needs replacement capacity. The link belongs at the end of the recovery path, not the top of the page.

**7. Anchor text discipline, which matters more than it looks.** You own both properties. A research site linking repeatedly to a commercial site with keyword-rich anchors is the classic private-network footprint, and it is exactly what it looks like. Use brand and naked anchors: "WarmInboxes", "warminboxes.com". Never "buy prewarmed inboxes" as anchor text, ever, at any volume.

## 4. The biggest single idea: publish the standard

This is the highest-leverage move available and nobody in the category has taken it.

**Write and version a specification for what "prewarmed" has to mean.** Call it what you like; the mechanics are what matter.

> **The Prewarmed Standard, v1**
> A domain or inbox may be described as prewarmed only if:
> 1. The domain has been registered for at least N days
> 2. SPF, DKIM and DMARC have been published and passing for at least N days
> 3. It has sent and received real bidirectional mail for at least N days
> 4. Inbox placement was tested before handover, with the seed composition published
> 5. Administrative access is transferred to the buyer
> 6. Registration and drop history is disclosed, with no undisclosed prior blocklist listing
> 7. The handover includes DNS records, credentials and the placement test result

Why this is powerful:

- **It is a citation magnet.** Specifications get linked in a way that guides never do. Every comparison article, every Reddit thread, every buyer's checklist can point at one URL.
- **It arms the buyer.** A reader can take it to any vendor. That is genuine value, given away free, and it is the most useful thing anyone in this market could publish.
- **It favours whoever actually meets it, without naming them.** You are not claiming to be best. You are publishing a bar. If your infrastructure clears it and a competitor's does not, the reader finds that out themselves. If a competitor clears it too, they clear it, and the standard is still yours.
- **It creates a recurring asset.** v2 can tighten as the market matures. Versioned specs get re-linked.
- **It solves the lander's definition gap.** The definitional block on the home page is a summary of the standard, linking to the full version.

The risk to manage: the thresholds must be defensible and must not be reverse-engineered from your own product spec. Derive them from what the data supports once R1 lands, and publish the reasoning for each number. A standard that happens to exactly describe your offering and nothing else will be recognised instantly.

## 5. Recurring assets that compound

One-off content decays. These build a reason to return and a reason to link, repeatedly.

| Asset | Cadence | Why it compounds |
|---|---|---|
| **The Prewarmed Index** | Quarterly | A stable metric set published on schedule becomes the thing people cite for "the state of the market". Fixed definitions across editions, or it is not a benchmark. |
| **Deliverability conditions** | Weekly or monthly | A short report on current filtering conditions across Gmail, Microsoft and Yahoo from your own seed tests. Nobody publishes this. It is the closest thing this market has to a weather report, it gets bookmarked, and it requires infrastructure to produce. |
| **The standard** | Versioned | See above. |
| **Tool statistics (D11)** | Monthly | "Of N SPF records checked this month, x% exceed the ten-lookup limit." Needs no customer data, ships immediately, and every one of the 31 check guides gets a number only you can carry. |
| **Corrections log** | As needed | Counterintuitive, and it is the single cheapest credibility artifact. A visible corrections page says somebody is checking. |

The deliverability conditions report is the one I would prioritise after the standard. It is the only asset on this list that gives someone a reason to visit weekly.

## 6. The internal link economy

The 31 check guides are the traffic asset. The lander and the research reports are the pages that need the authority. Structure accordingly:

- Every check guide links up to the research report that carries its data, and across to the relevant decision guide. Not to the lander.
- The lander links down to the standard, the calculator, and the top diagnostics.
- Research reports link back to the guides that use their findings.
- The glossary is the definitional net: one URL per term, each linking up to its pillar. Glossary entries are what get linked from forums and Slack threads.
- Nothing links to warminboxes.com more than once per page, and never with commercial anchor text.

## 7. What is missing from the lander right now

Concrete, in priority order:

1. **No definition of "prewarmed".** Ranking and comprehension gap. Fix with the standard summary block.
2. **No named human.** Perceived authority currently rests entirely on design. One named operator with credentials changes the page more than any copy edit.
3. **The three-month figure is load-bearing and unsourced.** It is the first thing a sceptic attacks. Either land R3 or soften the claim to a range with the reasoning shown.
4. **No mid-funnel step.** The two paths are buy-now or leave. A reader who is convinced but not ready has nowhere to go. The research feed is the honest capture: no gating, no lead magnet, just a reason to come back.
5. **Nothing to compare against.** "Compared to what" has no answer on the page. The standard fixes this too.
6. **No proof-of-work artifact.** One published number, one chart, one dataset page would do more for authority than another section of copy.

## 8. Order of work

| Phase | Work | Why first |
|---|---|---|
| 1 | The standard, published and versioned. Definition block on the lander. | Fixes the ranking gap and the comparison gap at once. Needs no data. |
| 2 | D11 tool statistics. One real number on the site. | Ships immediately, no consent required, proves the desk measures things. |
| 3 | Named author and reviewer. Methodology page. | Perceived authority stops being a design claim. |
| 4 | Deliverability conditions report. | The recurring-visit asset. |
| 5 | R3, then R1. | Makes the three-month figure yours rather than a claim. |
| 6 | The 85 check and decision briefs. | The traffic engine, pointed at pages that now have authority to inherit. |

Phase 1 and 2 can both ship inside two weeks and neither is blocked on the data pipeline.
