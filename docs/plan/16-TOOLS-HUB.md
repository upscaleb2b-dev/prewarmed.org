# 16. Checks and tools: the 39 tool guides

Thirty-nine articles, one per free tool, is a pattern with a bad reputation, and deservedly so. The usual output is thirty-nine pages of "what is an SPF record, click here to check yours", which is thin, interchangeable and worth nothing to anybody.

The fix is a change of subject. **The article is not about the tool. It is about the check, and the tool is how you run it.** "Is my domain on a blacklist, what does it mean if it is, and what do I do about each listing" is a real question with a long, useful answer. "Blacklist checker tool" is not.

That single distinction decides whether this programme produces the most-linked part of the site or a directory nobody cites.

---

## 1. Principles

1. **The H1 is the reader's question**, phrased as they would ask it. Not the tool's name.
2. **The answer is in the first screen.** P7 wants a result in ten seconds. The tool link and the short answer come before the depth.
3. **Every possible output is documented.** The section that explains what each result means is what makes the page substantial and what makes it the page people return to. A blacklist guide that explains twenty named lists and what a listing on each actually costs you is not thin.
4. **Say what the check cannot tell you.** Every one of these tools has a limit, and naming it is the difference between a reference and a lead magnet.
5. **Name alternatives, including ones we do not operate.** A page that documents one tool and no alternative is an advert for that tool.
6. **Every guide ends in a decision**, not in "now you know".

---

## 2. URL and naming

Tool guides live at `/checks/<question-slug>/`, not under `/tools/`. The split matters:

- `/checks/` is the reference: one guide per check, thirty-nine of them, each linking out to where the check is run.
- `/tools/` stays as it is: the five calculators we host ourselves (T1 to T5).

Two reasons for the separate section. The guides are documentation of a diagnostic, not software we host, and mixing them would make `/tools/` a list of other people's products. And `/checks/` as a noun gives the hub a name a practitioner can use: "run the checks" is a thing you tell someone to do.

Slugs are the question in four to six words: `/checks/is-my-domain-blacklisted/`, `/checks/is-my-spf-record-valid/`, `/checks/when-does-my-domain-expire/`.

## 3. Intake I-1: the tool register

One CSV. Everything else in this programme generates from it: the briefs, the hub grouping, the internal links, the schema markup.

| Column | Type | Notes |
|---|---|---|
| tool_id | string | `blacklist-checker` |
| name | string | As it appears on warminboxes.com |
| url | string | Live URL |
| job_question | string | The question a user is trying to answer, in their words. The most important column. |
| inputs | string | `domain`, `domain + selector`, `ip`, `email`, `text` |
| output_fields | string | Semicolon separated list of what it returns |
| output_states | string | Every distinct result a user can get, semicolon separated. Drives the "what each result means" section. |
| data_sources | string | Which lists, resolvers or providers it queries |
| limits | string | Rate limits, login required, lookups per day |
| known_gaps | string | What it does not check, in your own words |
| related_tool_ids | string | Semicolon separated |
| stage | enum | `buy`, `setup`, `verify`, `monitor`, `diagnose`, `recover`, `write` |
| priority | int | 1 to 3, for build order |

`output_states` and `known_gaps` are the two columns that decide whether these pages are good. If a tool returns eleven distinct states and all eleven are listed, the guide writes itself into a genuinely useful document. If that column arrives empty, the page will be thin no matter who writes it.

Seven tools are already public and can be filled in immediately as worked examples: blacklist checker, deliverability checker, DMARC checker, SPF checker and generator, DNS checker, domain expiry checker, spintax tester. Thirty-two to go.

## 4. The tool guide template

Word budget 1,200 to 2,600 depending on how many output states exist.

```
H1: Is my domain on an email blacklist?

┌ answer ──────────────────────────────────────────────────┐
│ Run the check → [Blacklist checker]                       │
│ Most listings on most lists do not affect your delivery.  │
│ Three do. Here is how to tell which kind you have.        │
└───────────────────────────────────────────────────────────┘

1. Run the check          The tool, what to enter, what you get back
2. What the result means  Every output state, one subsection each,
                          with what it costs you and what to do
3. How the check works    The mechanism: what a DNSBL query is, what
                          the resolver returns, why results differ
                          between tools
4. What it cannot tell you   The limits, stated plainly
5. If you are listed      The decision tree, per list type, with the
                          delisting procedure and realistic timelines
6. How often this matters Our data: how often a listing appears in the
                          burn events we attribute (D3), and what share
                          of checks return a listing (D11)
7. Other ways to run it   Alternatives, including non-affiliate ones
8. Related checks         Two or three, by stage
9. Sources
```

Sections 2 and 5 carry the weight. Section 6 is the one nothing else in this category has.

**Anti-thin rules**, enforced at review:

- A guide with fewer than three documented output states is merged into a neighbouring guide instead of published alone.
- A guide whose "what it cannot tell you" section is one sentence goes back.
- No guide may share more than 40% of its outline with another guide. Two tools that do nearly the same job get one guide covering both.
- If thirty-nine tools produce fewer than thirty-nine distinct jobs, we publish fewer pages. The number of tools is not a publication target.

That last rule is worth stating to everyone involved before drafting starts. The brief is "document every check worth running", and if that turns out to be twenty-eight pages covering thirty-nine tools, twenty-eight is the correct answer.

## 5. The hub

`/checks/` is organised by **when you run it**, not alphabetically, because the reader's situation is what they know:

| Stage | Question the reader is asking | Example checks |
|---|---|---|
| Before you buy | Is this domain safe to take on? | Domain history, expiry, prior listings |
| Setting up | Are my records right? | SPF, DKIM, DMARC, DNS, MX, tracking domain |
| Before first send | Am I ready? | Placement test, list verification, content check |
| Monitoring | Is anything drifting? | Blacklist, placement, bounce, authentication |
| Diagnosing | Why did this break? | Header analysis, delivery trace, auth failure |
| Recovering | Is it coming back? | Placement retest, delisting status |
| Writing | Will this copy cause problems? | Spintax, link check, spam-trigger review |

Each row expands to its guides with the one-line answer beneath each. An alphabetical index exists as a secondary view for people who know the tool's name.

## 6. The pre-send check run

One page, `/checks/before-you-send/`, that sequences every check into a single ordered run with the time each takes and the stop conditions. It is the page a team pins in a shared channel and the page other sites link to when they need to say "do the checks first".

It is also the natural home of a printable and copyable checklist, which makes it the highest-value link target in this programme. Build it after the first twelve guides exist, so the links resolve.

## 7. Dataset D11: aggregate check statistics

The tools see a volume of real-world configuration that nobody else has, and section 6 of the template depends on it. It is also the point where privacy has to be got right.

**The privacy constraint is absolute and it was already committed to in `05-TECH-SPEC.md` section 7: no logging of queried domains.** That commitment stands. It does not prevent aggregate statistics, because the aggregate does not need the domain.

What may be recorded, per check, with no identifier of any kind:

| Field | Example |
|---|---|
| check_type | `spf_lookup` |
| result_state | `valid`, `too_many_lookups`, `missing`, `syntax_error` |
| observed_at | Date only, not a timestamp |
| coarse_attribute | The TLD class (`com`, `other`) or record count band, where it is needed for the finding |

No domain, no IP, no user identifier, no session, no ordering that could reconstruct one user's sequence of checks. Minimum cell size 100 before any D11 figure is published, higher than the rest of the research programme because the population is anonymous and unverifiable.

What this makes possible is genuinely new: "of N SPF records checked, x% exceed the ten lookup limit" is a statistic nobody in this market has published, it is honest, and it makes every one of the thirty-nine guides carry a number that only we can carry.

**Intake I-2 is the question to answer first**: what does the tool infrastructure log today, and can it be reduced to the four fields above. If the honest answer is "we currently log full domains", that is a privacy issue to fix before it is a research opportunity to exploit, and the fix comes first.

## 8. Relationship to the research programme

Each guide's section 6 cites either D3 (how often this failure causes a burn) or D11 (how often this check fails in the wild), and links to the report that carries the method. That single section is what stops the checks hub from being a separate, lower-quality wing of the site. It also means the research programme gets thirty-nine inbound internal links from high-traffic pages, which is the cheapest distribution available.

## 9. Which checks we should host ourselves

Worth deciding rather than defaulting. Some of these are a few lines of edge function (DNS, SPF parse, DMARC parse, MX). Hosting those on prewarmed.org would remove a hop for the reader, and it would also duplicate a WarmInboxes product.

The recommendation: **document all of them, host none of them except T3 and T5 which were already planned.** Reasons: the reader loses nothing from one click, the duplication costs engineering time with no editorial gain, and a guide that links out to the tool is a more credible document than one that links to itself. The exception stays as planned because T3 and T5 were specified before this programme existed and they feed the calculators.

Revisit only if a tool a guide depends on goes away.

## 10. Build order

| Batch | Checks | Why first |
|---|---|---|
| 1 | The six public tools plus spintax: blacklist, deliverability, DMARC, SPF, DNS, domain expiry, spintax | Already documented publicly, so drafting can start before intake I-1 arrives |
| 2 | Setup stage: everything a reader runs in their first week | Highest commercial intent, feeds the decision guides |
| 3 | Monitoring and diagnosing | Highest repeat usage, best link targets |
| 4 | Writing, recovering, and the remainder | |
| 5 | `/checks/before-you-send/` | Needs the others to exist |

Batch 1 can begin immediately. Everything after it waits on the tool register.
