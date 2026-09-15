# 15. Monetisation and trust

Affiliate revenue and citability pull against each other. Most sites resolve the tension by quietly letting commercial terms shape recommendations, and readers eventually notice. A small number hold both, and they do it with the same four mechanisms: commercial terms never touch rankings, disclosure appears at the point of the link, the rubric is published before the vendors are scored, and the site regularly recommends things it earns nothing from.

This document is the operating version of that. It replaces section 8 of `EDITORIAL-STANDARDS.md`, which previously banned affiliate links outright.

---

## 1. The seven rules

These are not guidelines. Each is enforceable, and five of the seven are enforced by the build.

**Rule 1. Commercial terms never influence a ranking, a score or a recommendation.**
Vendors are scored against the published rubric in `17-VENDOR-COVERAGE.md` before any commercial conversation happens, and the score is recorded with a date. If a commission rate changes, nothing on the site changes. If a product changes, the score is re-run. A vendor that offers a higher rate in exchange for placement is declined and the approach is logged.

**Rule 2. Disclosure at the point of the link, not only in the footer.**
Three layers, all present: a page-level notice above the first affiliate link, a persistent marker on every affiliate link itself, and the full policy page. US law requires disclosure that is clear and conspicuous and close to the endorsement (FTC Guides Concerning the Use of Endorsements and Testimonials, 16 CFR Part 255); UK and EU advertising rules are comparable. Footer-only disclosure does not satisfy any of them, and more importantly it does not satisfy a reader.

**Rule 3. Programme 1 pages carry zero affiliate links.**
No research report, dataset page, methodology page or trust page contains a commercial link of any kind. The link linter fails the build on one. This is the rule that keeps the citable part of the site citable.

**Rule 4. Every comparison includes at least one option we earn nothing from, labelled as such.**
If a category has no non-affiliate option worth including, the page says that explicitly. A roundup where every link pays us is indistinguishable from an advert regardless of the disclosure.

**Rule 5. Every programme we are in is published.**
`/affiliate-policy/` lists each programme, the rate band, the cookie window, and the date we joined. Refreshed quarterly and on every change. A reader can check whether the thing we recommended pays us before they take our advice.

**Rule 6. No paid placement, no sponsored content, no paid or expedited review, no paid guest posts, no link buying or exchanges.**
Applies to us buying and to others buying from us. If we ever take sponsorship, it will be a separate labelled format that cannot appear inside an article, and this document will be amended in public.

**Rule 7. Where WarmInboxes competes, the conflict is stated inline and competitors are included with real prices.**
Ownership is a stronger conflict than affiliate commission and is disclosed as such. On any page comparing inbox providers, the ownership line appears in the body next to the first mention, not only in the footer, and WarmInboxes is scored on the same rubric as everyone else.

---

## 2. Which pages may carry commercial links

| Page type | Affiliate links | WarmInboxes links | Notes |
|---|---|---|---|
| Research reports, dataset pages | None | None, except the data-source citation | Enforced in CI |
| Methodology, editorial policy, about, corrections, disclosure, privacy | None | Only the ownership statement | Enforced in CI |
| Fundamentals, mechanics, deliverability KB | None | One contextual, where it is the natural next step | Existing rule, unchanged |
| Decision guides | Only where a specific product is the answer, and then with the full disclosure block | One contextual | |
| Tool guides | Alternatives may be affiliate where one exists | The tool being documented | Ownership disclosed inline |
| Vendor reviews and comparisons | Yes | Where relevant, with the Rule 7 conflict line | |
| Integration guides | The sequencer being documented | The inbox side | Both disclosed |
| Developer docs | None | It is our own API, disclosed as such | |
| Sales practice pages | None | None | These stay clean; they exist to be cited |

## 3. Disclosure mechanics

### The link marker

Every affiliate link carries a visible marker adjacent to it, not a hover state, and an accessible label.

```html
<a href="https://example.com/?ref=prewarmed"
   rel="sponsored noopener"
   data-affiliate="true">Sequencer name</a><sup class="aff"
   title="We earn a commission if you buy through this link"
   aria-label="affiliate link">aff</sup>
```

`rel="sponsored"` on every affiliate link is a requirement, not a nicety. The build fails on an outbound link with `data-affiliate="true"` that lacks it.

### The page notice

Above the first affiliate link on any page that contains one, at body text size, not shrunk or greyed:

> Some links on this page are affiliate links, marked `aff`. If you buy through one we earn a commission, at no extra cost to you. It does not affect what we recommend or how vendors are scored. Every programme we are in is listed on our affiliate policy page.

### The ownership notice

On any page mentioning WarmInboxes as an option rather than as a data source:

> We operate WarmInboxes, so treat this as a disclosed conflict rather than a neutral recommendation. It is scored on the same rubric as every other vendor here, and the alternatives below are real alternatives.

### Where else disclosure has to appear

RSS items that contain affiliate links carry the notice in the item body. Embedded charts never contain commercial links. Any PDF or printable artefact carries the notice. The disclosure travels with the content, because the content travels.

## 4. The affiliate policy page

`/affiliate-policy/` is a first-class trust page, linked in the footer next to methodology and corrections. Contents:

1. How we make money, in two sentences, with the split.
2. The table of every programme: vendor, category, rate band, cookie window, joined date, and whether they have ever asked for editorial input (answer recorded, including "yes, and we declined").
3. What we refuse: paid placement, sponsored posts, expedited review, editorial approval rights, any programme requiring pre-approval of content.
4. How scoring works, linking to the rubric.
5. What to do if you think a recommendation is compromised, with the corrections address and a commitment to publish the outcome.
6. The annual revenue-mix note.

## 5. Intake I-4: the affiliate programme register

One CSV, updated whenever a programme changes.

| Column | Type | Notes |
|---|---|---|
| vendor | string | Public name |
| category | enum | `sequencer`, `warmup`, `verification`, `data`, `monitoring`, `inbox_provider`, `crm`, `other` |
| programme_status | enum | `active`, `applied`, `declined_by_us`, `declined_by_them`, `none_available` |
| rate_band | string | A band, not a precise figure: `10-20% recurring`, `$50 flat`, `30% first year` |
| cookie_days | int | |
| joined_at | date | |
| requires_content_approval | bool | If true, we do not join |
| asked_for_editorial_input | bool | Recorded and published |
| notes | string | Published verbatim |

`programme_status = none_available` matters as much as the others. It is how a reader can tell that the tool we recommended in third place pays us nothing, which is the point of Rule 4.

## 6. Revenue transparency

Once a year, a short note on `/affiliate-policy/`: the share of revenue from WarmInboxes, the share from affiliate commission, the number of programmes active, and the three vendors that generated the most commission. Shares, not dollar amounts, unless you want to publish those.

Naming the top three earners is the part that does real work. It lets a reader check whether the vendors we write about most are the vendors that pay us most, and it puts an ongoing internal check on exactly that drift.

## 7. What the build enforces

Added to the linters in `05-TECH-SPEC.md`:

| Check | Rule | Level |
|---|---|---|
| Affiliate link on a clean page | Any `data-affiliate` link on a research, dataset or trust page | error |
| Missing rel | An affiliate link without `rel="sponsored"` | error |
| Missing marker | An affiliate link without the adjacent marker element | error |
| Missing page notice | A page containing an affiliate link without the disclosure block | error |
| Roundup without a free option | A comparison page where every outbound vendor link is affiliate | error |
| Unregistered programme | An affiliate link to a vendor not in the programme register CSV | error |
| Ownership line | A page comparing inbox providers without the Rule 7 conflict line | error |
| Commercial density | More than one affiliate link per 400 words of body content | warning, reviewed |

The last one is a drift detector. Affiliate density creeping upward across the site is the earliest measurable sign of the failure mode in risk R-3, and it is visible in the pull request comment on every build.

## 8. Replacement text for `EDITORIAL-STANDARDS.md` section 8

> ## 8. Commercial separation
>
> The site has two revenue streams and both are disclosed where they appear: we operate WarmInboxes, and we earn affiliate commission on some of the software we review.
>
> - Commercial terms never influence a ranking, a score or a recommendation. Vendors are scored against the published rubric before any commercial conversation, and a rate change never triggers a content change.
> - Research reports, dataset pages and trust pages carry no commercial links of any kind.
> - Affiliate links are marked at the point of the link, carry `rel="sponsored"`, and appear only on pages that also carry the disclosure notice. Every programme is listed publicly with its rate band.
> - Every comparison includes at least one option we earn nothing from, labelled. If the category has none, the page says so.
> - WarmInboxes is linked where it is the source of data or the natural next step. Where it competes with a vendor under review, the ownership conflict is stated in the body and WarmInboxes is scored on the same rubric.
> - No page recommends any product as the answer to a question the evidence does not support. Where prewarmed infrastructure, or any reviewed product, is the wrong choice, the page says so.
> - Vendor evaluation pages apply their disqualifying questions to WarmInboxes and publish the answers.
> - No paid placement, no sponsored content, no paid or expedited review, no link buying or exchange.

## 9. The test to apply when it gets hard

At some point a vendor with a good rate will be mediocre, and the honest ranking will cost real money. The question to ask then is the only one that matters for this site:

**If a reader followed this recommendation, spent their money, and later learned exactly what we earn from it, would they feel informed or handled?**

If the answer is "handled", the recommendation is wrong regardless of what the rubric says, and the rubric needs fixing too.
