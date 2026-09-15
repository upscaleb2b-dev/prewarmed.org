# prewarmed.org

Planning repository for prewarmed.org, a reference site on prewarmed sending infrastructure. Nothing is built yet. This repository currently holds the plan; the site itself will be added under `src/` once the decisions in `docs/plan/01-DECISIONS.md` are answered.

## The documents

**The original brief** (unchanged, the source of everything below):

| Document | What it covers |
|---|---|
| [`docs/SITE-PLAN.md`](docs/SITE-PLAN.md) | What the site is, its audiences, the information architecture, the topic map, the phases |
| [`docs/EDITORIAL-STANDARDS.md`](docs/EDITORIAL-STANDARDS.md) | How every page is written and reviewed, and what disqualifies one |
| [`docs/DATA-INTAKE.md`](docs/DATA-INTAKE.md) | What proprietary data is needed, in what shape, and how it becomes a page |

**The detailed plan** (this expansion, one document per decision surface):

| Document | What it answers |
|---|---|
| [`01-DECISIONS.md`](docs/plan/01-DECISIONS.md) | The fifteen decisions that gate the build, with a recommendation and a default for each |
| [`02-URL-MAP.md`](docs/plan/02-URL-MAP.md) | All 169 URLs with slugs, questions, target queries, word budgets, phases, and the boundary rules that stop pages overlapping |
| [`03-PAGE-BRIEFS.md`](docs/plan/03-PAGE-BRIEFS.md) | The brief template, and full briefs for the seventeen pages that ship in phases 1 and 2 |
| [`04-CONTENT-MODEL.md`](docs/plan/04-CONTENT-MODEL.md) | Content collections and schemas that make the editorial rules build failures rather than intentions |
| [`05-TECH-SPEC.md`](docs/plan/05-TECH-SPEC.md) | Stack, repository layout, build pipeline, linters, structured data, tools, budgets, CI |
| [`06-DESIGN-SYSTEM.md`](docs/plan/06-DESIGN-SYSTEM.md) | Typography, colour tokens, a validated chart palette for both themes, components |
| [`07-RESEARCH-PIPELINE.md`](docs/plan/07-RESEARCH-PIPELINE.md) | Intake to publication: pseudonymisation, validation, pre-registration, analysis rules, reviewer re-run, versioning, corrections |
| [`08-SEO-SPEC.md`](docs/plan/08-SEO-SPEC.md) | Query-to-page assignment, on-page rules, internal linking, citation by answer engines, link earning |
| [`09-EDITORIAL-WORKFLOW.md`](docs/plan/09-EDITORIAL-WORKFLOW.md) | Roles, states, pull request shape, re-verification, corrections handling, where language models are and are not used |
| [`10-ROADMAP.md`](docs/plan/10-ROADMAP.md) | Fourteen weeks across three workstreams, phase gates, the contingency if data is late, and what in the schedule is unrealistic |
| [`11-MEASUREMENT.md`](docs/plan/11-MEASUREMENT.md) | Eight measures with definitions, targets, and how each could be gamed |
| [`12-RISKS.md`](docs/plan/12-RISKS.md) | Twelve risks ordered by expected damage, each with an early signal and an owner |
| [`13-UI-SPEC.md`](docs/plan/13-UI-SPEC.md) | The interface itself: global chrome, page-by-page layout for every template, responsive and print behaviour, states, accessibility, and the component build order |

**The expanded organization** (added after the scope decision of 15 September 2026: five publishing programmes, affiliate revenue under the Wirecutter model, two parallel build tracks):

| Document | What it answers |
|---|---|
| [`14-POSITIONING.md`](docs/plan/14-POSITIONING.md) | What the organization is, the five programmes, seven personas, the voice, the eight trust signals, the revised home page, and the consolidated intake list |
| [`15-MONETISATION-AND-TRUST.md`](docs/plan/15-MONETISATION-AND-TRUST.md) | The seven affiliate rules, disclosure mechanics and markup, the affiliate policy page, revenue transparency, and the eight new build checks that enforce them |
| [`16-TOOLS-HUB.md`](docs/plan/16-TOOLS-HUB.md) | The 39 check guides: why they are about the check and not the tool, the template, the anti-thin rules, the tool register intake, and dataset D11 |
| [`17-VENDOR-COVERAGE.md`](docs/plan/17-VENDOR-COVERAGE.md) | Sequencers and the outbound stack: the published scoring rubric, the review template including the header test, page types, and the integration register |
| [`18-DEVELOPER-DOCS.md`](docs/plan/18-DEVELOPER-DOCS.md) | The API and MCP programme: structure, reference conventions, eight MCP design principles for sending infrastructure, and agent recipes |
| [`19-SALES-RESEARCH.md`](docs/plan/19-SALES-RESEARCH.md) | The outbound practice vertical, bound to deliverability: twelve pages in scope and what is explicitly out |
| [`20-URL-MAP-V2.md`](docs/plan/20-URL-MAP-V2.md) | The merged map, 292 URLs, new cannibalisation boundaries, and the verification cost that comes with the size |
| [`21-ROADMAP-V2.md`](docs/plan/21-ROADMAP-V2.md) | Two parallel tracks over sixteen weeks, the six gates between them, staffing, and six contingencies |
| [`22-RESOURCE-REGISTER.md`](docs/plan/22-RESOURCE-REGISTER.md) | Every citable WarmInboxes URL, the three roles one can play, the verification rule, and the quarantine for unverified claims |

## Where to start reading

1. `01-DECISIONS.md`, sections D-01, D-02 and D-06. Those three gate everything.
2. `02-URL-MAP.md` for the shape of the site.
3. `03-PAGE-BRIEFS.md` for the standard every page is held to.

## What changed from the original plan

**15 September 2026, scope decision.** prewarmed.org became a research organization with five publishing programmes rather than a single reference site. Affiliate revenue is now permitted under the rules in `15-MONETISATION-AND-TRUST.md`, which replaced the outright ban in section 8 of the editorial standards. The site grows from 169 to roughly 292 URLs and builds on two parallel tracks. Documents 14 to 21 cover the expansion; documents 1 to 13 remain valid for programmes 1 and 2.

### From the first expansion

- Three pages added to the topic map: H17 (are prewarmed inboxes against provider terms), DC9 (when not to buy), B13 (incident runbook for a burned pod). Rationale in `01-DECISIONS.md` D-09 and `02-URL-MAP.md`.
- R9, the price benchmark, is promoted into phase 2 and made the contingency launch report, because it needs no customer data.
- Data consent and lawful basis are raised to a hard gate before any customer-derived row enters the repository.
- Research reports are pre-registered before analysis, carry confidence intervals and a minimum cell size, and ship with a committed reviewer sign-off file.
- The editorial "musts" are expressed as content schema requirements and CI linters, so a page that breaks them fails the build.
