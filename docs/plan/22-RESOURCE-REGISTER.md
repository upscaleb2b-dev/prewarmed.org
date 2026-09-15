# 22. The WarmInboxes resource register

Every URL on warminboxes.com that prewarmed.org may cite, link or document, held in one file with a verification status on each row. It exists for the same reason the `sources` collection exists in `04-CONTENT-MODEL.md`: when a URL changes, one row changes, and "which of our pages depend on this" becomes a query rather than a search.

File: `research-data/registers/warminboxes-resources.csv`.

---

## 1. Current state, and what is missing

**This session cannot reach warminboxes.com.** The environment's egress policy refuses the connection at the network layer:

```
kind: connect_rejected
detail: gateway answered 403 to CONNECT (policy denial or upstream failure)
host: warminboxes.com:443
```

The proxy documentation is explicit that policy denials are reported rather than routed around, so no cache, mirror or text-extraction proxy was used. What follows came from search engine listings, which is a thin and lagging view of any site.

| Status | Count | Meaning |
|---|---|---|
| `confirmed` | 6 | URL and title observed in a search index listing |
| `inferred` | 1 | Existence deduced from a child path, not observed |
| `reported` | 5 | Tool named in a search snippet with no URL confirmed |
| **Total** | **12** | Against an expected 31 to 39 tools alone |

So the register is roughly a fifth complete, and the missing part is the part the checks programme is built on.

**A number to settle.** The earlier brief said 39 free tools, this one says 31. The register is the source of truth once populated, and every downstream count in `16-TOOLS-HUB.md` and `20-URL-MAP-V2.md` derives from it rather than from either figure.

## 2. How to complete it in about two minutes

`scripts/harvest-resource-register.mjs` reads the site's own sitemap and produces the register. Run it from anywhere that can reach the site:

```
node scripts/harvest-resource-register.mjs https://warminboxes.com \
  > research-data/registers/warminboxes-resources.csv
```

It discovers sitemaps from `robots.txt` and the three conventional paths, follows a sitemap index, fetches each page, and records URL, path, inferred type, title, H1, meta description and word count. No dependencies, Node 18 or later, four concurrent requests with a short delay.

Caveat worth stating: the script's failure path was tested in this session, but its sitemap-parsing path could not be, because no external host is reachable from here. Check the first few rows of output before trusting the whole file.

If the site has no sitemap, the fallback is a paste: every URL under `/`, one per line, and the script's `describe()` path can be pointed at that list instead.

## 3. Schema

| Column | Notes |
|---|---|
| `url` | Empty where unconfirmed. Never guess a slug into this column. |
| `path` | |
| `type` | `tool`, `article`, `review`, `product`, `playbook`, `index`, `commercial`, `other` |
| `title` | As published |
| `status` | `confirmed`, `inferred`, `reported`, `verified` |
| `evidence` | Where the row came from, with a date |
| `programme` | Which of the five programmes in `14-POSITIONING.md` consumes it |
| `job_question` | For tools: the question a user is answering, in their words |
| `notes` | Overlaps, decisions, open questions |

Three further columns are added for tool rows once the URLs are confirmed, and they are the ones that decide whether the check guides are any good: `output_states`, `known_gaps` and `limits`, per `16-TOOLS-HUB.md` section 3. A tool row without `output_states` produces a thin guide no matter who writes it.

## 4. The verification rule

`confirmed` in this register means "seen in a search listing". That is not good enough to publish a link against.

**No URL is cited, linked or documented on prewarmed.org until it has been fetched directly and recorded as `verified` with an accessed date**, at which point it becomes an entry in the `sources` collection like any other citation. This is the same standard applied to Google and Microsoft documentation, and applying a weaker standard to the commercial partner's own pages would be exactly backwards.

The build already enforces the consequence: `05-TECH-SPEC.md` requires every citation to resolve to a `sources` entry, and the weekly external link check files an issue for any dead link.

## 5. The three roles a WarmInboxes URL can play

The register's `programme` column is not decoration. It decides which rules apply, because the same domain plays three different parts on this site and conflating them is how the disclosure model breaks.

| Role | Example | Rules |
|---|---|---|
| **Authority and data source** | The infrastructure the research is drawn from | Cited like any source, with the disclosure line. Permitted on research pages, which carry no other commercial links. |
| **The tool being documented** | The blacklist checker, in its `/checks/` guide | The guide links to it as the place to run the check, names at least one alternative, and states ownership inline. |
| **Product and next step** | The homepage, pricing, an inbox product page | One contextual link per page, only where it is genuinely the next step, never on a research or trust page. Ownership conflict line where it competes with a reviewed vendor. |

A single page never uses one URL in two roles. Where an article cites the data source and also recommends the product, those are two different links with two different treatments, and the link linter counts the second one against the one-per-page budget.

## 6. Unverified claims quarantine

Search snippets surfaced several factual claims about WarmInboxes. They are recorded here because they are useful, and quarantined because a search summariser is not a source.

| Claim | Where it would be used | Status |
|---|---|---|
| Built by operators sending 1M+ emails a month | About page operator credentials; H1 process page | Unverified. Needs the underlying figure and period from you, not from the marketing line, before it appears on our About page. |
| Deliverability tested at 1M+ sends a month across diversified US and EU IPs | Methodology, D4 provider panel | Unverified, and it needs unpacking: which tests, what cadence, measured how |
| Prewarmed inboxes $8/inbox/month, $7 on two-month, $6 quarterly, in packs of 3 with a free .com or .co domain | R9 price benchmark; H14 | Unverified. R9 requires a screenshot archived on the observation date, per `DATA-INTAKE.md` D9. |
| Azure at $0.69/inbox/month, 100 inboxes per tenant | R9; H15; DC3 | Unverified |
| Fresh Google Workspace $3.00 to $3.50, fresh Microsoft 365 $2.00 to $3.00 per inbox per month | R9; DC1 cost model | Unverified |

None of these may appear on the site in their current state. Two of them (the volume claims) are load-bearing for the operator credibility the whole site rests on, so they are worth getting precisely right rather than repeating.

## 7. What the completed register unblocks

| Output | Depends on |
|---|---|
| Briefs for every `/checks/` guide | Tool rows with `job_question` and `output_states` |
| The `/checks/` hub grouped by stage | The `stage` column added at brief time |
| The final URL count in `20-URL-MAP-V2.md` | Total distinct tool jobs, which may be fewer than the tool count |
| Overlap decisions against the existing topic map | `article` rows from `/blog/` |
| R9's WarmInboxes row | `commercial` rows, with screenshots |
| The integration guides | Separate intake I-3, not this register |

The blog rows matter more than they look. Every existing WarmInboxes post either becomes a citation, gets superseded by a prewarmed.org page with a redirect, or stays where it is and gets linked. Making that call once per post, in the register, prevents the two properties from competing with each other in search, which is the most common and most expensive mistake when a company runs a content site alongside its product site.
