# 09. Editorial workflow

`EDITORIAL-STANDARDS.md` says what a good page is. This document says who does what, in what order, and what stops a page from moving forward.

## 1. Roles

| Role | Responsibility | Time per page |
|---|---|---|
| Editor | Owns the topic map, approves briefs, decides what does not get written, runs the re-verification calendar | 1 to 2 hours per page, plus 4 hours a week on the map |
| Author | Research, drafting, sources, revisions | 6 to 14 hours for a pillar, 3 to 6 for an answer page |
| Reviewer | Checks claims against sources, checks numbers against analysis output, signs off | 1 hour per article, 3 to 4 hours per report |
| Analyst | Datasets, validation, pre-registration, analysis scripts, chart CSVs | 4 to 6 days per report |
| Engineer | Templates, components, linters, tools, build | 3 weeks up front, then 1 to 2 days a month |
| Operator | The source of process knowledge for H1, H4, B-series; answers "what do we actually do" | 2 hours a week |

At minimum this is three people: an editor-author, a reviewer-analyst, and an engineer for the first month. One person cannot do it, because the reviewer must not be the author and a self-reviewed research site is the thing the plan is trying not to be.

## 2. States

```
proposed -> briefed -> drafting -> data-checked -> in-review -> ready -> published -> verified
```

| State | Entry condition | Who moves it |
|---|---|---|
| proposed | A page idea with a persona and a decision named | anyone |
| briefed | The brief template is complete and the answer paragraph is written | editor approves |
| drafting | Brief approved | author |
| data-checked | Every number in the draft resolves to a dataset page, a source entry or an analysis output | analyst, for pages with data |
| in-review | Draft complete, all linters pass locally | reviewer |
| ready | Reviewer sign-off recorded in the pull request | reviewer |
| published | Merged to main and deployed | editor merges |
| verified | Re-checked on schedule, `lastVerified` advanced | author or editor |

A page in `proposed` for more than 30 days is closed. The topic map is a plan, not a backlog to be preserved.

## 3. Pull request shape

One page per pull request, except for research (see `07-RESEARCH-PIPELINE.md` stage 8) where the report, its dataset pages, its charts, its scripts and the updates to citing pages ship together.

The pull request template mirrors the pre-publication checklist from `EDITORIAL-STANDARDS.md` section 10, and CI posts a comment with: linter results, freshness warnings, link-graph deltas, word count against budget, and the list of numbers that resolved to which sources. The reviewer works from that comment plus the diff.

Review is a request for changes or an approval, not a comment. An approval means the reviewer has personally checked every number against its source, and the reviewer's name goes on the page, so an approval is a claim about their own work as well as the author's.

## 4. Re-verification

Intervals from the editorial standards: 90 days for decision guides and how-it-works pages, 180 days for fundamentals, on every data refresh for research. Enforcement is in the build (`05-TECH-SPEC.md` section 3, step 5): a warning at 80% of the interval and a build failure at 120%. A failing build for a stale page is deliberate. It means staleness cannot accumulate quietly, and it means the roadmap must budget verification time as real work rather than as good intentions.

**What a verification pass actually is**, so it does not decay into touching the date:

1. Open every source and confirm the cited sentence still exists and says the same thing. Provider documentation changes without notice and often without a visible date.
2. Re-check any number against the current data cut. If the dataset has refreshed, update the number or state that the page uses the earlier cut.
3. Re-read the recommendation and ask whether it is still what you would tell someone this week.
4. Record the outcome: `lastVerified` advanced, and a changelog entry only if something substantive changed.

Verification capacity is the constraint that decides the maximum size of the site. At 90-day intervals, 60 pages under a 90-day cadence is roughly one verification pass a day at 20 minutes each. That number is the reason the plan's cap on publication cadence is a feature.

## 5. Corrections

The reader-facing promise is in the editorial standards: five working days from confirmation.

1. Reports arrive at `corrections@prewarmed.org`, monitored by a named person, logged on receipt with a timestamp.
2. Triage within one working day into: confirmed error, not an error with reasoning, or needs investigation.
3. Confirmed errors are fixed within five working days, in the pipeline above.
4. Every confirmed correction is logged at `/corrections/` with the date reported, the date fixed, what was wrong, and what changed.
5. Where a correction changes a recommendation, the notice sits on the page for 30 days and appears in the changelog feed.
6. The reporter is credited by name if they want to be. That single courtesy generates more error reports, which is the point.
7. "Not an error" replies are answered with reasoning, and the exchange is logged internally. If the same non-error is reported three times, the page is unclear and gets rewritten.

## 6. Cadence and capacity

Steady state after phase 3: two to three substantive pages a week, one research report a month, one index edition a quarter, and the verification queue. That is a real 1.5 to 2 full-time equivalents across editorial and analysis.

The failure mode to guard against is publishing to a schedule when there is nothing worth publishing. The editorial standards make that expensive by design. When the queue of briefs that pass the purpose test is empty, the week is spent on verification and on data, not on filler. A week with no publication and a completed verification pass is a good week; a week with three pages that could appear on any competitor's site is a bad one.

## 7. Where language models are used, and where they are not

Disclosed in one sentence in the editorial policy, per the standards. Concretely:

**Permitted.** Structuring an outline from an approved brief. First drafts of sections whose content is fixed by the brief. Rewriting for the language rules. Summarising a source the author has read. Generating candidate FAQ phrasings from the page. Checking a draft against the banned-phrase list before CI does.

**Not permitted.** Producing a number. Producing a citation or a URL. Describing provider behaviour that the author has not verified against documentation. Writing the limitations section, which requires knowing what the data actually cannot support. Writing the answer paragraph in a brief, which is the editorial decision the brief exists to record.

The test is whether a human can be accountable for the sentence. If the author cannot say where a sentence's claim came from, it does not ship, regardless of what produced it.
