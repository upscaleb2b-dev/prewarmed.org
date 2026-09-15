# 17. Vendor coverage: sequencers and the outbound stack

This is the programme that carries the affiliate revenue, which makes it the programme most likely to damage the site if it is built the usual way. The usual way is a roundup of ten sequencers, each described from its own marketing page, ranked in commission order, refreshed never.

The version that works instead is a **scored register maintained from the operator's chair**, where the scoring criteria are published before the vendors are scored, and where the thing being assessed is the part nobody else assesses: how the software behaves when you point 200 inboxes at it.

---

## 1. What we cover

| Category | Why we are qualified | Affiliate potential |
|---|---|---|
| Sequencers and sending platforms | We watch what they do to inboxes we operate | High |
| Warmup tools | D6 measures their output directly | High |
| Email verification | D3 attributes burns to list quality | High |
| Lead data providers | Bounce rate is the observable outcome | Medium |
| Deliverability monitoring and seed testing | We run these to produce the research | Medium |
| Inbox providers | We are one, so Rule 7 applies throughout | Ownership conflict |
| CRM and integration middleware | Only where it touches sending | Low |

Categories we do not cover, because we cannot assess them from operating experience: CRMs in general, sales engagement analytics, AI copywriting tools, dialers. A category where our judgement is no better than anyone else's is a category where we are just an affiliate.

## 2. The scoring rubric for sequencers

Published at `/stack/how-we-score-sequencers/` before the first review, and every score is dated and re-run on a major release or every 180 days. Weights are shown because a rubric with hidden weights is not published.

| Criterion | Weight | What earns the points | How we check |
|---|---|---|---|
| Inbox and domain handling | 20% | Per-inbox throttling, inbox rotation, per-domain caps, warmup-aware ramping | Hands on, with real inboxes |
| Deliverability controls | 20% | Auto-pause on bounce or complaint thresholds, configurable stop conditions, per-step sending windows | Hands on |
| Authentication and tracking | 15% | Custom tracking domain support, DKIM-aligned tracking links, ability to send with no tracking at all | Hands on plus DNS inspection |
| Scale behaviour | 15% | Inboxes per workspace, connection limits, API rate limits, what breaks at 100 and 500 inboxes | Hands on plus published limits |
| Data hygiene | 10% | Built-in or integrated verification, suppression lists, dedupe across campaigns, catch-all handling | Hands on |
| Compliance features | 10% | One-click unsubscribe support, `List-Unsubscribe` and RFC 8058 headers, regional sending controls, audit trail | Header inspection on a real send |
| Transparency | 5% | Published limits, a real status page, changelog, documented API | Public sources |
| Price at operating scale | 5% | Cost per inbox per month at 10, 50 and 200 inboxes | Public pricing |

Two deliberate choices. Price is only 5%, because in this category price differences are small next to the cost of a burned domain. And "transparency" is scored at all, because a vendor that publishes its limits saves its customers more grief than one with a slightly better feature list.

**Header inspection on a real send is the differentiating check.** Sending one real message through each platform and reading the raw headers tells you what tracking domain it used, whether unsubscribe headers are present and correct, and what the return path looks like. Almost no review in this category does it. It takes twenty minutes per vendor.

## 3. Page types

| Type | URL pattern | Count | Words |
|---|---|---|---|
| Category index | `/stack/sequencers/` | 7 | 1,500 |
| Vendor review | `/stack/sequencers/<vendor>/` | 12 to 15 | 2,000 to 2,800 |
| Head-to-head | `/stack/sequencers/<a>-vs-<b>/` | 8 to 10 | 1,800 |
| Category roundup | `/stack/best-sequencers-for-agencies/` and similar, by use case not by "best" alone | 5 to 6 | 2,400 |
| Integration guide | `/stack/integrations/<sequencer>-with-google-workspace/` | 2 per sequencer | 1,400 |
| Scoring rubric | `/stack/how-we-score-sequencers/` | 1 per category | 1,200 |

Roundups are framed by use case, never as a bare superlative: "for agencies running client pods", "for a two-person team", "for Microsoft-heavy sending". A page titled "best sequencer" with no qualifier cannot be answered honestly and will be written dishonestly.

## 4. The vendor review template

1. **Verdict box**: who it is for, who it is not for, the score, the date scored, and the affiliate status stated in the box itself.
2. **What it is**, in three sentences.
3. **How it handles infrastructure**: the operator section. Inbox connection method, throttling model, rotation, what it does when a mailbox starts bouncing. This is the section that makes the review worth reading.
4. **Scores against the rubric**, as a table with the evidence for each line.
5. **The header test**: what the raw headers of a real send look like, quoted.
6. **What breaks at scale**, with the number where it breaks.
7. **Price at 10, 50, 200 inboxes.**
8. **What we would use it for, and what we would not.**
9. **Alternatives**, including at least one we earn nothing from.
10. Metadata, disclosure, sources.

A review without section 5 or section 6 does not publish. Those two are the entire reason for the programme to exist.

## 5. Rules specific to this programme

- **Scored before contacted.** The score and its date are committed before any commercial conversation with that vendor. The commit history is the evidence.
- **Right of reply, not right of approval.** Vendors may correct factual errors, and corrections are logged like any other. They do not see drafts.
- **No rank changes without a product change.** The changelog on a review states what changed and why, and "commission rate" is never a reason that can appear there.
- **Our own product is in the tables.** Where WarmInboxes competes, it is scored on the same rubric with the conflict line from `15-MONETISATION-AND-TRUST.md` Rule 7.
- **Hands-on or it does not publish.** A review written from documentation is labelled as such at the top, and we avoid publishing those at all.

## 6. Intake I-3: the integration register

The "sequencers we have" list, which powers the integration guides and a real column in every review.

| Column | Type | Notes |
|---|---|---|
| sequencer | string | Public name |
| connection_method | enum | `oauth`, `app_password`, `smtp_imap`, `api`, `native` |
| providers_supported | string | `google`, `m365`, `azure`, semicolon separated |
| inbox_limit_per_account | int | Where published or known |
| known_throttle_default | string | What it sends per inbox per day out of the box |
| custom_tracking_domain | bool | |
| supports_list_unsubscribe | bool | |
| setup_gotchas | string | The things that waste an hour. The most valuable column here. |
| affiliate_status | enum | Matches the programme register in `15-MONETISATION-AND-TRUST.md` |

Integration guides are two per sequencer: connecting Google Workspace inboxes, and connecting Microsoft 365 inboxes. Each covers the connection method, the exact throttle settings to configure, the ramp schedule to enter (generated from the same source as T4, so the numbers cannot disagree), and the gotchas. These are short, high-intent, and genuinely useful, and they are the pages a WarmInboxes customer reads on day one.

## 7. Refresh

Vendor reviews go stale faster than anything else on the site. Verification interval 180 days, and additionally on any major release. The freshness check in the build applies, which means a stale review fails the build like any other page.

If the programme cannot sustain re-testing twelve sequencers twice a year, it covers eight instead. A register of eight current reviews beats twenty stale ones, and the stale ones are what turn a review section into a liability.

## 8. Build order

1. The scoring rubric page. Published before any review, so the order is provable.
2. Three sequencer reviews, hands on, with the header test.
3. The category index.
4. Integration guides for those three sequencers.
5. The first use-case roundup, once at least five reviews exist.
6. Head-to-heads, which should be written only where the comparison is genuinely common.

Nothing in this programme publishes before the first research report is live, per the gate in `21-ROADMAP-V2.md`.
