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

## Where to start reading

1. `01-DECISIONS.md`, sections D-01, D-02 and D-06. Those three gate everything.
2. `02-URL-MAP.md` for the shape of the site.
3. `03-PAGE-BRIEFS.md` for the standard every page is held to.

## What changed from the original plan

- Three pages added to the topic map: H17 (are prewarmed inboxes against provider terms), DC9 (when not to buy), B13 (incident runbook for a burned pod). Rationale in `01-DECISIONS.md` D-09 and `02-URL-MAP.md`.
- R9, the price benchmark, is promoted into phase 2 and made the contingency launch report, because it needs no customer data.
- Data consent and lawful basis are raised to a hard gate before any customer-derived row enters the repository.
- Research reports are pre-registered before analysis, carry confidence intervals and a minimum cell size, and ship with a committed reviewer sign-off file.
- The editorial "musts" are expressed as content schema requirements and CI linters, so a page that breaks them fails the build.
