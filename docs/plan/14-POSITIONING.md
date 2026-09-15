# 14. Positioning: prewarmed.org as an organization

The earlier documents describe a reference site. This one describes what it is now: a small research organization covering sending infrastructure, with five publishing programmes and two revenue streams, both disclosed.

## 1. The one-line version

**prewarmed.org is the research desk for people who send cold email at scale.** We test infrastructure, publish what we find, document every free tool worth running, and review the software you send with. The work is free. We make money two ways, both stated on every page that involves them: we operate WarmInboxes, and we earn affiliate commission on some of the software we review.

The internal version of the mission, which shapes editorial decisions: **raise the floor of the craft.** Most people burning domains are doing it for four or five reasons that are known, documented and preventable. Nobody has written them down properly with data attached. That is the gap.

## 2. What changed from the original plan

| Before | Now |
|---|---|
| A reference site on prewarmed domains | A research organization covering deliverability, inboxing and the outbound stack |
| One revenue link (WarmInboxes) | Two revenue streams: WarmInboxes ownership and affiliate commission, under the rules in `15-MONETISATION-AND-TRUST.md` |
| No affiliate links, ever | Affiliate links permitted under the Wirecutter model. Research and data pages stay clean |
| 169 URLs | Roughly 330 URLs across five programmes, see `20-URL-MAP-V2.md` |
| One audience cluster (P1 to P5) | Seven personas, adding developers and tool-searchers |
| Sequential phases | Two parallel tracks, see `21-ROADMAP-V2.md` |

The research spine does not shrink. It is what makes the rest of the site worth citing, and it is the part a competitor cannot copy.

## 3. The five programmes

| # | Programme | What it is | Why it exists | Monetised |
|---|---|---|---|---|
| 1 | **Research** | Proprietary cohort studies with published method, data and sign-off | The moat and the reason to cite us | No affiliate links, ever |
| 2 | **Reference** | How deliverability actually works: fundamentals, mechanics, deliverability KB, glossary, outbound sales practice | The body of knowledge everything else links back to | One contextual link rule |
| 3 | **Checks and tools** | Every check worth running, what each tells you, where to run it, plus our own calculators | The highest-volume entry point and the most repeatedly useful pages | Ownership disclosed, alternatives named |
| 4 | **Vendor coverage** | Sequencers and the adjacent stack: reviews, comparisons, integration guides, scored on a published rubric | Bottom-of-funnel utility and the affiliate revenue | Affiliate, fully disclosed |
| 5 | **Developer** | The WarmInboxes API and MCP server, documented properly, plus what agents can and cannot safely do with sending infrastructure | A category nobody has documented; earns technical credibility and links | Ownership disclosed |

Programmes 1 and 2 pay for the credibility that programmes 3, 4 and 5 spend. That relationship is the whole design. If programmes 3 and 4 ship first and alone, the site is an affiliate directory and it never recovers. This is why the parallel track plan in `21-ROADMAP-V2.md` gates the vendor section behind the first published research.

## 4. Audiences, updated

Carrying P1 to P5 from `SITE-PLAN.md`, with two additions:

| # | Persona | Arrives from | Wants | Served by |
|---|---|---|---|---|
| P1 | Solo operator | "my emails go to spam" | To stop burning domains | 1, 2, 3 |
| P2 | Founder-led sales | "how many inboxes do I need" | A setup that works | 2, 3, 4 |
| P3 | Agency / lead-gen operator | "burn rate", "inbox rotation" | Capacity, monitoring, replacement | 1, 2, 4 |
| P4 | RevOps / deliverability owner | "dmarc cold email", governance | Isolation and compliance | 1, 2, 5 |
| P5 | Sceptic / researcher | A cited chart | Evidence and method | 1 |
| **P6** | **Developer / integrator** | "cold email API", "MCP email infrastructure" | To provision and monitor infrastructure in code | 5, 3 |
| **P7** | **Tool searcher** | "spf record checker", "blacklist check" | One answer, fast, then to leave | 3 |

P7 is the volume audience and the easiest to serve badly. Someone searching "blacklist checker" wants a result in ten seconds, not an essay. The tool-guide template in `16-TOOLS-HUB.md` answers them in the first screen and puts the depth below, so the page serves P7 and P1 in the same document without compromising either.

P6 is the most underserved audience in this market. There is effectively no good technical documentation for programmatic sending infrastructure, and an MCP server for it is novel enough to be interesting on its own merits.

## 5. Voice

Written from the operator's chair, in the first person plural, with the specifics that only an operator has.

- "We run roughly N inboxes across three providers. Here is what breaks." Not "businesses often experience deliverability issues."
- Quantities, always: inboxes, sends per inbox per day, dollars per inbox per month, days, percentage points with a sample size.
- Admit the boring answer when it is the right one. Most deliverability problems are list quality and volume behaviour, and saying so repeatedly is more useful than finding novel causes.
- Name what we got wrong. The corrections log and the changelog are voice, not compliance.
- Never sell inside an explanation. The recommendation gets its own block, after the mechanism, and it says who should not buy as well as who should.

The language rules in `EDITORIAL-STANDARDS.md` section 4 apply unchanged across all five programmes. A vendor review is held to the same banned-phrase list as a research report.

## 6. The trust architecture

Eight signals, each cheap, and almost none of which competitors in this category carry. The first six are already in the plan; the last two are new and exist because of the affiliate decision.

1. Named author with operator credentials.
2. Named reviewer who did not write the piece.
3. Published date, last-verified date, verification interval, on every page.
4. Published methodology for every number, with the analysis script committed.
5. Per-page changelog, and a site-wide changelog with its own feed.
6. A corrections log with a five working day commitment and a monitored address.
7. **An affiliate policy page listing every programme we are in, with rate bands, refreshed quarterly.**
8. **An annual revenue-mix note**: what share of revenue came from WarmInboxes, from affiliate commission, and from anything else.

Signal 8 is unusual enough that it is worth the discomfort. A research organization that publishes where its money comes from is in a different category from one that discloses in a footer, and it converts the sceptic persona better than any amount of methodology.

## 7. What we publish for free, and why that is not a pose

Everything is free, ungated, with no email capture. The honest framing, which goes on the About page rather than being implied:

> We do not charge for any of this. We make money when people buy inboxes from WarmInboxes, which we operate, and when people buy software through some of our links. Both are disclosed where they appear. We publish the parts that cost us money too: the cases where you should not buy prewarmed infrastructure, the tools we do not earn anything from, and the numbers that did not go our way.

The claim "for the love of the game" is credible only if the site demonstrably publishes against its own commercial interest. Three artefacts do that work, and all three are already in the plan:

- **DC9, when not to buy prewarmed infrastructure**, in phase 2, not deferred.
- **R9, the price benchmark**, listing WarmInboxes in the same table as competitors on the same terms.
- **At least one non-affiliate option in every comparison**, labelled as earning us nothing.

## 8. Home page, revised

The original home page assumed one programme. The revised structure, still one column and still no hero:

1. **Thesis**, two sentences. What the organization is and who it is for.
2. **Start with your situation**: five rows now, adding "I want to run a check right now" for P7 and "I want to build on the API" for P6.
3. **Latest research**: three rows with headline numbers, n and date range.
4. **The checks**: the eight or ten highest-traffic checks as plain links, straight into the tool guides. This block will carry more clicks than any other on the page.
5. **The question index**: twelve bottom-of-funnel questions.
6. **The stack**: sequencer, warmup, verification and monitoring category pages, with the affiliate disclosure line for the block.
7. **For developers**: API and MCP, two lines.
8. **How this site works and how it makes money**: three lines linking methodology, editorial policy, affiliate policy and disclosure.

Block 8 sits on the home page rather than only in the footer. Putting the business model on the front page is the cheapest trust signal available and almost nobody does it.

## 9. What we need from you to build programmes 3, 4 and 5

Consolidated intake. Each is specified in detail in its own document.

| # | Item | For | Format | Document |
|---|---|---|---|---|
| I-1 | The 39 free tools: name, URL, the job it does, inputs, outputs, limits | Programme 3 | One CSV, schema supplied | `16-TOOLS-HUB.md` section 3 |
| I-2 | Whether tool usage can be instrumented for aggregate statistics, without storing domains | Programme 3 and dataset D11 | A yes or no plus what is currently logged | `16-TOOLS-HUB.md` section 7 |
| I-3 | The sequencers WarmInboxes inboxes connect to, and the connection method for each | Programme 4 | One CSV, schema supplied | `17-VENDOR-COVERAGE.md` section 6 |
| I-4 | Affiliate programmes you are already in or can join, with rate bands and cookie windows | Programme 4 | One CSV | `15-MONETISATION-AND-TRUST.md` section 5 |
| I-5 | The API: OpenAPI spec if one exists, otherwise the endpoint list, auth model and rate limits | Programme 5 | Spec file or a list | `18-DEVELOPER-DOCS.md` section 3 |
| I-6 | The MCP server: repository, tool list, transport, whether it is public | Programme 5 | Repo link or a tool list | `18-DEVELOPER-DOCS.md` section 5 |
| I-7 | The 10 to 15 WarmInboxes topics you want covered | Programmes 2 and 3 | A list of questions, not page titles | Section 10 below |

## 10. On the "10 to 15 articles pointing at WarmInboxes"

A note on framing, because how these are commissioned decides whether they work.

Fifteen articles written to point at a product page are money pages, and readers, reviewers and search engines all recognise the pattern. Fifteen articles that answer the fifteen questions a buyer actually has, one of which is answered by the product, are decision content. They are the same fifteen URLs and they perform completely differently.

The plan already contains most of them, written as questions: L1, L2, L3, H1, H2, H4, H5, H14, H15, H17, DC1, DC2, DC6, DC9, plus the price benchmark R9. That is fifteen pages, each with a genuine decision behind it, each linking to WarmInboxes once where it is the natural next step, and one of them (DC9) telling a segment of readers not to buy at all.

So the ask in I-7 is not "which pages should link to us". It is "which fifteen questions do your best customers ask before they buy, and which ones do they ask afterwards when something has gone wrong". Send those and the pages write themselves against the existing briefs.
