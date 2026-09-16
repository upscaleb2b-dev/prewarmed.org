# prewarmed.org content briefs

Commissioning briefs for articles on prewarmed.org that link to WarmInboxes tools, playbooks and product pages. One brief per article. Every brief is writable as it stands: it carries the title, the search intent, the thesis in a paragraph, the outline, the link target with its placement, and the existing WarmInboxes post that covers adjacent ground.

**136 briefs, of which 85 are live after the commercial scoring pass.** Read `COMMERCIAL-SCORING.md` first: it says which briefs are cut, which are merged, which supersede an existing WarmInboxes post, and which twelve were added. Then work the tracker, filtered to `verdict` in keep, supersede or keep-authority.

Do not write a brief whose verdict is `cut` or `merge`. They are left in this file so the reasoning is visible, not because they are commissioned.

---

## How to use this file

Each brief looks like this:

```
### A1. The working title, as a question or a claim
/checks/slug-four-to-six-words/ · 1,400 words · links to /spf-checker

Intent      The query this answers
Thesis      The answer, in one paragraph. This is the first 100 words of the
            article. If the writer cannot defend this paragraph, the brief is
            wrong and should come back rather than be written around.
Outline     Four to six H2s
Link        Where the tool link goes and why it is the natural next step there
Overlap     The existing warminboxes.com post on adjacent ground
```

## Six rules for the writer

1. **Answer in the first 100 words.** The thesis in each brief is that paragraph. Write it first, then earn it.
2. **Mechanism before instruction.** Explain what the receiving system actually does before telling anyone what to do. If you cannot explain the mechanism, the section is not ready.
3. **One link to the tool, placed where the reader needs it.** Not in the intro, not three times. The brief says where.
4. **Never duplicate the WarmInboxes post named in Overlap.** Link to it as further reading and take a different angle. Two pages competing for one query costs both of them.
5. **No numbers without a source.** Where a brief says `[data]`, either cite a primary source (Google, Microsoft, Yahoo, an RFC) or leave the claim out. Do not invent a percentage.
6. **House style:** no em-dashes, no "in today's landscape", no "unlock", no "seamless", no "leverage". Short declarative sentences. Concrete nouns.

## Cluster index

| Cluster | Tools | Briefs |
|---|---|---|
| 1. Authentication and DNS | 9 | 27 |
| 2. Reputation and blacklists | 5 | 15 |
| 3. Diagnosis | 3 | 9 |
| 4. List hygiene and data ops | 6 | 18 |
| 5. Capacity and fleet planning | 3 | 9 |
| 6. Pre-send and content QA | 5 | 15 |
| 7. Playbooks and reading hubs | 5 | 15 |
| 8. Product and hub pages | 8 | 16 |

---

# Cluster 1. Authentication and DNS

Nine tools: SPF checker, DKIM checker, DMARC checker, DNS checker, CNAME checker, record generator, MTA-STS checker, BIMI checker, nameserver checker.

## SPF Checker & Generator (`/spf-checker`)

### A1. Is my SPF record valid, and what breaks it?
`/checks/is-my-spf-record-valid/` · 1,600 words · links to `/spf-checker`

**Intent** "spf record checker", "check spf record"
**Thesis** An SPF record is valid when it parses, resolves inside ten DNS lookups, and authorises exactly the services that send for your domain. Most broken records fail on the second condition, because every `include:` pulls in another lookup and the vendors you added last year are still in there. A record that exceeds ten lookups returns PermError, and a PermError is treated as a failure, not as a pass with a warning. Run the check, count the lookups, and remove what no longer sends.
**Outline** What SPF actually asserts / the ten lookup limit and how nesting counts / the six results and what each means to a receiver / what to remove from a cold sending domain / re-checking after a change
**Link** In section 2, at the point the reader needs to count their own lookups.
**Overlap** `/blog/spf-10-lookup-limit-fix` covers PermError repair in depth. Cite it as the deep fix and keep this page as the validity overview.

### A2. What SPF does not protect you from
`/checks/what-spf-does-not-do/` · 1,200 words · links to `/spf-checker`

**Intent** "does spf stop spoofing", "is spf enough"
**Thesis** SPF authorises sending servers for the envelope sender. It says nothing about the From address a human reads, it does not survive most forwarding, and on its own it stops almost no impersonation. This matters for cold senders because a passing SPF record is routinely mistaken for a deliverability improvement. It is a precondition. Passing earns eligibility; it does not earn placement, and no amount of SPF tuning fixes a list problem.
**Outline** Envelope sender versus header From / why forwarding breaks SPF / what alignment adds / where the "SPF improves deliverability" folklore came from / what actually moves placement
**Link** Section 1, once, as the way to see your current record.
**Overlap** `/blog/spf-dkim-dmarc-guide` is the general explainer. This page is narrower and argumentative.

### A3. One SPF record across 100 sending domains
`/checks/spf-across-a-domain-fleet/` · 1,400 words · links to `/spf-checker`
**Intent** "bulk spf check", "manage spf many domains"
**Thesis** At fleet scale the SPF problem changes shape. You are no longer fixing one record, you are keeping 100 identical records identical, and detecting the day one registrar or one DNS migration silently drops a mechanism. The working method is a single canonical record definition, bulk application through the DNS provider's API, and a scheduled re-check of every domain against the canonical string, because the failures that cost you are the ones nobody looked at.
**Outline** The canonical record / applying it in bulk / what drifts and why / a weekly re-check routine / what to do when one domain disagrees
**Link** Section 4, as the manual check before automating.
**Overlap** `/blog/bulk-dns-setup-cold-email-domains-cloudflare` and `/blog/monitor-cold-email-domain-fleet`. Both are close. Position this as authentication-specific and cite both.

## DKIM Checker (`/dkim-checker`)

### A4. Is my DKIM signature actually working?
`/checks/is-my-dkim-working/` · 1,500 words · links to `/dkim-checker`
**Intent** "dkim checker", "check dkim record"
**Thesis** DKIM works when the receiving server can fetch your public key at the selector your mail is signed with, and the signature validates against the message it received. Two failures are common on cold domains: the key was published but the sending platform signs with a different selector, and the key is present but shorter than 1024 bits, which some receivers now reject. The check tells you which selector is live. The header analyser tells you whether real mail passed.
**Outline** What a DKIM signature commits to / selectors, and why the tool scans 26 of them / key length and why 2048 is now the floor / the difference between published and signing / verifying on a real message
**Link** Section 2, where selector discovery is the reader's problem.
**Overlap** `/blog/spf-dkim-dmarc-guide`. Keep this diagnostic and specific.

### A5. Why your DKIM passes on test mail and fails in campaigns
`/checks/dkim-passes-but-campaigns-fail/` · 1,300 words · links to `/dkim-checker`
**Intent** "dkim fails intermittently", "dkim pass but spam"
**Thesis** A DKIM signature covers specified headers and the body. Anything that modifies either in transit breaks it. The usual culprits in cold email are a sequencer that rewrites links after signing, a mailing platform that appends a footer, and character encoding changes. The signature then fails at the receiver even though your DNS record is perfect, which is why a green result on a record checker and a red result in raw headers are both true at the same time.
**Outline** What the signature covers / the `l=` tag and why not to use it / link rewriting and footers / how to read a `dkim=fail` in real headers / fixing it at the sending platform
**Link** Section 1, to confirm the record side is not the problem before looking at the message side.
**Overlap** None direct. Cite `/blog/custom-tracking-domain-vs-no-tracking` for the link rewriting connection.

### A6. Rotating DKIM keys without breaking sending
`/checks/rotating-dkim-keys-safely/` · 1,200 words · links to `/dkim-checker`
**Intent** "rotate dkim key", "dkim key rotation"
**Thesis** Key rotation is publish the new selector, switch signing, verify, then remove the old key after the retention window. The failure people hit is removing the old public key immediately, which invalidates signatures on mail already in flight and in receivers' queues. Leave the old selector published for at least a week. Rotation matters on cold infrastructure mainly when a key has been shared across a provider change or when a domain is being re-commissioned.
**Outline** When rotation is actually needed / the four-step sequence / the retention window / verifying both selectors resolve / what breaks if you rush it
**Link** Section 4, verifying both selectors.
**Overlap** None. Genuinely uncovered.

## DMARC Checker (`/dmarc-checker`)

### A7. What my DMARC record is actually telling receivers
`/checks/what-my-dmarc-record-says/` · 1,500 words · links to `/dmarc-checker`
**Intent** "dmarc checker", "check dmarc record"
**Thesis** A DMARC record does three things: it states a policy for mail that fails alignment, it sets how strictly alignment is judged, and it tells receivers where to send reports. Most cold domains publish `p=none` and never read the reports, which means they have the syntax without the benefit. The check parses each tag. The useful output is not "valid" but which of your tags are doing nothing.
**Outline** The tags that matter and the ones that do not / alignment, relaxed and strict / what `p=none` actually does / the reporting addresses and why nobody reads them / reading your first aggregate report
**Link** Section 1, to parse the reader's own record before explaining tags.
**Overlap** `/blog/dmarc-none-quarantine-reject-cold-email` is the policy decision page and it is strong. This page is the record anatomy. Cite it prominently for the policy question.

### A8. Why a cold sending domain should end up at p=reject
`/checks/dmarc-policy-for-a-cold-domain/` · 1,300 words · links to `/dmarc-checker`
**Intent** "dmarc policy cold email", "p=reject cold email"
**Thesis** On a domain used only for outbound sequencing, nothing legitimate sends except your platform, which makes `p=reject` both safe and correct once you have confirmed that in reports. This is the opposite of the advice for a corporate domain, where reject is risky because forgotten systems send mail. Start at none for long enough to read reports, fix what appears, then move. Skipping the reporting period is how people reject their own invoices.
**Outline** Why the corporate advice does not transfer / the reporting period and what to look for / moving through quarantine / what reject does and does not prevent / when to stay at none
**Link** Section 2, checking the record before and after the change.
**Overlap** Strong overlap with `/blog/dmarc-none-quarantine-reject-cold-email`. Either skip this brief or write it as the short answer page that links there. Decide before commissioning.

### A9. Reading DMARC aggregate reports without a paid platform
`/checks/reading-dmarc-reports-free/` · 1,400 words · links to `/dmarc-checker`
**Intent** "read dmarc reports", "dmarc report xml"
**Thesis** Aggregate reports arrive as gzipped XML from each receiver, once a day, and they are readable without buying a monitoring product. Each record tells you a sending IP, a volume, and whether SPF and DKIM aligned. For a cold fleet you are looking for exactly two things: sources you do not recognise, and your own platform failing alignment. Both are visible in a spreadsheet.
**Outline** What arrives and from whom / the XML structure in plain terms / the two things worth looking for / a simple parsing approach / when a paid tool becomes worth it
**Link** Section 1, to confirm the `rua` address is set before expecting reports.
**Overlap** None. Genuinely uncovered and a good link magnet.

## DNS Checker (`/dns-checker`)

### A10. What DNS records a cold sending domain needs
`/checks/dns-records-for-cold-email/` · 1,600 words · links to `/dns-checker`
**Intent** "dns records cold email", "email dns setup"
**Thesis** A sending domain needs MX so replies land, SPF and DKIM so authentication passes, DMARC so alignment is judged, and usually a CNAME for a tracking domain. It does not need most of what people add. The frequent mistakes are an MX record pointing nowhere on a domain used only to send, and a tracking CNAME that resolves to a shared host. Check the full record set on day one, before the first send, not after placement drops.
**Outline** The five records that matter / what each is for / what happens when MX is missing / records people add that do nothing / the day-one verification pass
**Link** Section 5, as the verification pass.
**Overlap** `/blog/setup-new-email-domain` and `/blog/cold-email-infrastructure-setup`. Both broader. Keep this record-specific and reference-shaped.

### A11. Propagation, TTL and why your change has not taken effect
`/checks/why-my-dns-change-has-not-propagated/` · 1,200 words · links to `/dns-checker`
**Intent** "dns not propagating", "how long dns take email"
**Thesis** There is no propagation. There are caches with a time to live, and each resolver holds your old record until its copy expires. If you published a fix and the check still shows the old value, you are reading a cached answer, and the wait is bounded by the TTL you set before the change, not the one you set with it. Lower TTL ahead of a planned change; there is nothing to do but wait after an unplanned one.
**Outline** Why "propagation" is the wrong model / TTL and who honours it / checking authoritative versus resolver answers / lowering TTL before a migration / what to tell a client who is waiting
**Link** Section 3, distinguishing authoritative from cached answers.
**Overlap** None. Common question, no existing post.

### A12. Auditing DNS across a domain fleet before handover
`/checks/auditing-dns-before-handover/` · 1,300 words · links to `/dns-checker`
**Intent** "check dns multiple domains", "domain handover checklist"
**Thesis** When domains change hands, between a vendor and you or between you and a client, the records are the asset. A handover audit confirms every domain resolves the same five records, that nameservers point where you think, and that nothing still references the previous owner's infrastructure. Doing this before the first send costs ten minutes per domain and catches the failures that otherwise surface as a burn in week two.
**Outline** What a handover should include / the per-domain audit / nameserver ownership / leftover references to a previous setup / what to reject and send back
**Link** Section 2, as the per-domain audit tool.
**Overlap** `/blog/migrate-cold-email-inboxes-between-providers`. Different enough. Cross-link.

## CNAME Checker (`/cname-checker`)

### A13. Is my tracking domain CNAME set up correctly?
`/checks/is-my-tracking-cname-correct/` · 1,300 words · links to `/cname-checker`
**Intent** "tracking domain cname", "custom tracking domain setup"
**Thesis** A tracking domain is a CNAME from a subdomain you own to your sending platform's tracking host. It is correct when the chain resolves in one or two hops to the platform's host and serves a valid certificate for your hostname. The two failures are a chain that loops through a shared host used by hundreds of other senders, and a certificate mismatch that makes every tracked link throw a browser warning.
**Outline** What the tracking domain does to a link / following the chain / certificates and why they break / shared tracking hosts and the reputation you inherit / verifying before the first campaign
**Link** Section 2, following the chain.
**Overlap** `/blog/custom-tracking-domain-vs-no-tracking` argues the strategic choice well. This is the setup and verification page. Cite it for the decision.

### A14. CNAME chains, and the hop that breaks your links
`/checks/cname-chain-problems/` · 1,100 words · links to `/cname-checker`
**Intent** "cname chain", "cname not resolving"
**Thesis** A CNAME can point at another CNAME, and resolvers will follow the chain, but each hop adds latency, a failure point and an owner you do not control. In cold email the chain matters because a broken final hop turns every link in a live campaign into a dead link, and nobody notices until reply rate drops. Keep chains to one hop where possible and check the full path, not just the first answer.
**Outline** How resolvers follow a chain / where the latency comes from / the dead-link failure and how it presents / one-hop discipline / what to check after a platform migration
**Link** Section 1, resolving the full path.
**Overlap** None direct.

### A15. Shared tracking domains and the reputation you did not choose
`/checks/shared-tracking-domain-risk/` · 1,300 words · links to `/cname-checker`
**Intent** "shared tracking domain", "tracking domain reputation"
**Thesis** If your links resolve to a hostname shared with every other customer of your sending platform, the URL reputation attached to that host is a pooled asset, and you are exposed to the worst sender in the pool. URI blocklists list hosts, not just domains, and a listing you did not cause lands your mail in spam anyway. Checking what your links actually resolve to takes a minute, and the fix is a custom tracking domain.
**Outline** How URI blocklists treat hosts / what a shared host pools / checking what your platform gave you / moving to a custom tracking domain / measuring the difference
**Link** Section 3, checking what the platform assigned.
**Overlap** `/blog/custom-tracking-domain-vs-no-tracking` and `/blog/surbl-info-domains-microsoft-azure`. Cite both; this is the mechanism page.

## Record Generator (`/record-generator`)

### A16. Generating SPF, DKIM and DMARC records for a new domain
`/checks/generating-your-first-records/` · 1,500 words · links to `/record-generator`
**Intent** "spf record generator", "create dmarc record"
**Thesis** For a new cold sending domain the correct records are narrow: an SPF record authorising only the platform that sends, a DKIM key the platform gives you, and a DMARC record at `p=none` with a reporting address you can read. Generate them rather than copying from a forum post, because copied records carry includes for services you do not use, and every unused include is a lookup you cannot spare.
**Outline** What to generate and in what order / why copied records fail / the ESP presets and picking the right one / publishing and verifying / what to change after two weeks
**Link** Section 1, generating the set.
**Overlap** `/blog/setup-new-email-domain`. Broader. This is record-specific.

### A17. The records to change when you switch sending platform
`/checks/records-when-changing-platform/` · 1,200 words · links to `/record-generator`
**Intent** "change sending platform dns", "migrate smartlead instantly dns"
**Thesis** A platform migration changes three things: the SPF include, the DKIM selector and key, and the tracking CNAME. The sequence matters. Add the new authorisations before switching traffic, run both for a short overlap, then remove the old ones. Removing first is how a migration turns into a day of authentication failures on live campaigns.
**Outline** The three records that change / the safe sequence / the overlap window / verifying on a real send / removing the old records
**Link** Section 1, generating the new record set.
**Overlap** `/blog/migrate-instantly-smartlead-without-losing-replies` covers reply continuity, not DNS. Complementary, cross-link.

### A18. Why your generated record stops working a month later
`/checks/why-records-drift/` · 1,100 words · links to `/record-generator`
**Intent** "spf record stopped working", "dns record changed"
**Thesis** Records drift for mundane reasons: a registrar transfer resets the zone, a DNS provider's interface appends a trailing dot or splits a long TXT record incorrectly, a teammate adds a second SPF record, or a vendor changes the host their include points at. Two SPF records on one domain is an automatic fail. Re-generate and compare against what is actually published rather than trusting what you published last month.
**Outline** The four common drift causes / why two SPF records fail / TXT splitting and quoting / re-generating to compare / a monthly re-check
**Link** Section 4, regenerating the canonical record to compare.
**Overlap** None direct.

## MTA-STS Checker (`/mta-sts-checker`)

### A19. Does a cold sending domain need MTA-STS?
`/checks/do-i-need-mta-sts/` · 1,200 words · links to `/mta-sts-checker`
**Intent** "mta-sts cold email", "do i need mta-sts"
**Thesis** MTA-STS tells sending servers to require TLS when delivering to your domain. It protects inbound mail, which on a cold sending domain means replies. It does nothing for your outbound placement, and anyone who sells it as a deliverability improvement is wrong. It is worth publishing on domains that receive replies you care about, and it is optional on pure send-only infrastructure.
**Outline** What MTA-STS actually does / inbound versus outbound / the policy file and the DNS record / enforce versus testing mode / who should skip it
**Link** Section 3, validating the record and policy file.
**Overlap** None. `/blog/` has nothing on MTA-STS. Clean territory.

### A20. Publishing MTA-STS correctly: the record, the file and the certificate
`/checks/publishing-mta-sts-correctly/` · 1,300 words · links to `/mta-sts-checker`
**Intent** "mta-sts setup", "mta-sts policy file"
**Thesis** MTA-STS needs three things in agreement: a TXT record at `_mta-sts`, a policy file served over HTTPS at a fixed path on a `mta-sts` subdomain with a valid certificate, and MX patterns in that file that match your actual MX records. Most failures are the third, where the policy lists a hostname pattern that no longer matches after a mail provider change, which silently invalidates the policy.
**Outline** The three parts / the exact path and headers / MX patterns and matching / the id field and updating a policy / validating end to end
**Link** Section 5, end-to-end validation.
**Overlap** None.

### A21. TLS-RPT: getting told when delivery to you fails
`/checks/tls-reporting-explained/` · 1,000 words · links to `/mta-sts-checker`
**Intent** "tls-rpt", "tls reporting email"
**Thesis** TLS-RPT is a DNS record naming an address that receives daily reports when a sender could not establish TLS to your servers. On cold infrastructure its value is narrow but real: it is how you learn that replies are failing to reach you, which is otherwise invisible because the sender sees the problem and you see silence.
**Outline** What the reports contain / why failures are invisible without it / publishing the record / reading a report / when to act
**Link** Section 3, confirming the record parses.
**Overlap** None.

## BIMI Checker (`/bimi-checker`)

### A22. Is BIMI worth it for cold email? (Mostly no)
`/checks/is-bimi-worth-it-for-cold-email/` · 1,300 words · links to `/bimi-checker`
**Intent** "bimi cold email", "do i need bimi"
**Thesis** BIMI displays a verified logo next to your mail in supporting clients. It requires DMARC at enforcement and, for most display, a Verified Mark Certificate that costs real money annually and requires a registered trademark. For a cold sending domain that will be retired within a year, that is a poor trade. BIMI belongs on a brand's primary domain, not on sending infrastructure.
**Outline** What BIMI requires / the VMC cost and trademark requirement / where the logo actually displays / why domain lifespan decides this / the case where it is worth it
**Link** Section 1, checking whether the prerequisites are even in place.
**Overlap** None on BIMI specifically. This is a clean, contrarian, linkable page.

### A23. The DMARC enforcement BIMI requires, and what that means for your fleet
`/checks/bimi-dmarc-requirements/` · 1,100 words · links to `/bimi-checker`
**Intent** "bimi dmarc requirement", "bimi p=quarantine"
**Thesis** BIMI requires DMARC at quarantine or reject with full coverage. That prerequisite is the useful part of BIMI even if you never publish a logo, because it forces the authentication discipline that actually affects placement. Treat the BIMI check as a way of confirming your enforcement posture rather than as a logo project.
**Outline** The enforcement requirement / why it exists / the check as an enforcement audit / what fails when subdomains are not covered / deciding whether to continue past this point
**Link** Section 3, using the checker as an enforcement audit.
**Overlap** Cross-link `/blog/dmarc-none-quarantine-reject-cold-email`.

### A24. SVG, VMC and the parts of BIMI that fail silently
`/checks/why-bimi-fails-silently/` · 1,100 words · links to `/bimi-checker`
**Intent** "bimi not showing", "bimi svg requirements"
**Thesis** BIMI fails without an error message. The logo simply does not appear. The causes are a restricted-profile SVG that does not meet the tiny-ps specification, a certificate that has expired or does not match the domain, a mailbox provider that does not support BIMI at all, and DMARC that slipped back below enforcement. There is no bounce and no report, so the only way to know is to check.
**Outline** The silent failure problem / SVG profile requirements / certificate matching and expiry / which providers display at all / a periodic re-check
**Link** Section 1, validating all four parts at once.
**Overlap** None.

## Nameserver Checker (`/nameserver-checker`)

### A25. Who actually controls your sending domains?
`/checks/who-controls-my-dns/` · 1,200 words · links to `/nameserver-checker`
**Intent** "check nameservers", "who hosts my dns"
**Thesis** The nameservers on a domain decide who can change its mail records, and on bought infrastructure that is not always you. Before you send, confirm every domain points at DNS you control, with an account you can log into. Domains delegated to a vendor's nameservers are functional until the day the relationship ends, at which point your records are in someone else's account.
**Outline** What delegation means / checking a fleet at once / the handover risk / moving nameservers without downtime / what to require from a vendor
**Link** Section 2, the bulk CSV check.
**Overlap** None direct. Strong for the vendor-evaluation angle.

### A26. Auditing nameservers across a hundred domains at once
`/checks/bulk-nameserver-audit/` · 1,200 words · links to `/nameserver-checker`
**Intent** "bulk nameserver lookup", "check ns records csv"
**Thesis** At fleet scale the useful question is not which nameservers one domain uses but how many distinct DNS providers you depend on, and whether that concentration is a risk. A fleet entirely on one provider fails together. The bulk check turns a list of domains into a provider distribution, which is a diversification input rather than a configuration detail.
**Outline** Running the bulk check / reading the provider distribution / correlated failure and why it matters here / a sensible spread / re-auditing after acquisitions
**Link** Section 1, the CSV upload.
**Overlap** `/blog/monitor-cold-email-domain-fleet`. Complementary, cite it.

### A27. Moving DNS providers without dropping mail
`/checks/changing-nameservers-safely/` · 1,200 words · links to `/nameserver-checker`
**Intent** "change nameservers email", "migrate dns provider"
**Thesis** A nameserver change swaps the entire zone at once, so every record must exist at the new provider before you switch, not after. Replicate the zone, verify it answers correctly by querying the new nameservers directly, then change delegation and watch both for 48 hours. Mail breaks during migrations because MX and TXT records were recreated from memory rather than exported.
**Outline** Exporting the zone properly / verifying against the new nameservers before delegating / the switch and the watch window / what to do if replies stop / cleaning up afterwards
**Link** Section 2, querying the new nameservers before delegation.
**Overlap** None direct.

---

# Cluster 2. Reputation and blacklists

Five tools: blacklist checker, SURBL and Spamhaus DBL checker, deliverability checker, Google domain checker, domain expiry checker.

## Blacklist Checker (`/blacklist-checker`)

### B1. Is my domain on a blacklist, and does it matter?
`/checks/is-my-domain-blacklisted/` · 2,000 words · links to `/blacklist-checker`
**Intent** "blacklist checker", "is my domain blacklisted"
**Thesis** Most blacklists do not affect your delivery. A handful do. The ones that matter are the lists the large mailbox providers actually consult, and a listing there shows up as a placement collapse within hours. Listings on aggressive or pay-to-delist lists usually show up as nothing at all. Run the check, then sort the results into the two groups before doing anything, because the delisting effort for a list nobody consults is wasted.
**Outline** The 20+ lists and which ones receivers consult / how a listing actually reaches a delivery decision / the three tiers of list / reading your result / what to do per tier / when a listing is a symptom rather than a cause
**Link** Section 4, reading the result.
**Overlap** `/blog/avoid-blacklists` is prevention-shaped and `/blog/uceprotect-l3-blacklist-cold-email` handles the specific case superbly. This is the triage page. Cite both heavily.

### B2. Getting delisted: what works, per list
`/checks/how-to-get-delisted/` · 1,800 words · links to `/blacklist-checker`
**Intent** "how to get off blacklist", "spamhaus delisting"
**Thesis** Delisting procedures differ by operator and so do the timelines. Some lists expire automatically once the behaviour stops, some have a self-service form that works, and some require evidence that you fixed the cause. Requesting delisting before fixing the cause gets you relisted faster and marks the domain. Fix first, document what you changed, then request.
**Outline** Fix the cause first, and how to prove you did / automatic expiry lists / self-service lists and the form / evidence-based lists / realistic timelines / what to do while you wait
**Link** Section 1, confirming the current listing set before starting.
**Overlap** `/blog/domain-recovery-guide` and `/blog/banned-domain-recovery`. Both close. Position this as list-by-list procedure and cite them for the wider recovery decision.

### B3. Monitoring a fleet for listings before placement drops
`/checks/monitoring-for-blacklist-listings/` · 1,400 words · links to `/blacklist-checker`
**Intent** "monitor blacklist", "blacklist alert"
**Thesis** A listing is a lagging signal of something that started days earlier, but it is still faster than noticing a reply-rate decline. On a fleet, check every domain on a schedule and alert on any listing on a tier-one list, because the value is in the hours between the listing and the point where a client notices. The check is cheap; the discipline is remembering to run it.
**Outline** Why listings lag / what cadence is enough / which lists to alert on / wiring it into a fleet routine / what to do in the first hour
**Link** Section 3, as the check to schedule.
**Overlap** `/blog/monitor-cold-email-domain-fleet`. Cite and stay narrower.

## SURBL & Spamhaus DBL Checker (`/surbl-checker`)

### B4. URI blocklists: the listing that gets you filtered without listing your sending domain
`/checks/uri-blocklists-explained/` · 1,600 words · links to `/surbl-checker`
**Intent** "surbl", "spamhaus dbl", "uri blacklist"
**Thesis** URI blocklists list the domains that appear inside a message body, not the domain that sent it. That means your sending domain can be clean while every message you send is filtered because of your tracking domain, your landing page, or a link a prospect asked you to include. This is one of the most misdiagnosed failures in cold email, because every check on the sending domain comes back green.
**Outline** What a URI blocklist lists / why sending-domain checks miss it / the three link types in a cold email and each one's exposure / bulk-checking every domain you link to / what to do when your tracking domain is listed
**Link** Section 4, bulk-checking the link set.
**Overlap** `/blog/surbl-info-domains-microsoft-azure` is a specific incident write-up and it is excellent. This is the general mechanism. Cite it as the worked case.

### B5. Check every domain in your copy, not just your sender
`/checks/checking-links-in-your-copy/` · 1,200 words · links to `/surbl-checker`
**Intent** "check links cold email", "link reputation email"
**Thesis** Before a sequence goes live, collect every distinct domain that appears in it, including the tracking domain, the calendar link, the case study host and anything in the signature, and check the set. Teams check the sending domain and nothing else, then spend a week diagnosing a content problem that is a link problem.
**Outline** Building the link inventory / the domains people forget / running the bulk check / what a listing on each type implies / a pre-launch routine
**Link** Section 3, the bulk check.
**Overlap** None direct. Pairs with `/pre-send-checker` content.

### B6. TLD reputation: why .info and friends attract listings
`/checks/tld-reputation-and-listings/` · 1,400 words · links to `/surbl-checker`
**Intent** "best tld cold email", "are cheap tlds bad for email"
**Thesis** Some top-level domains carry worse aggregate reputation because they are cheap, which attracts bulk abuse, which leads blocklist operators to list aggressively and sometimes by pattern. That is not a claim that your `.info` domain is bad; it is a claim that it starts with a handicap you did not earn and may be listed for something a stranger did. The practical answer for cold infrastructure is to pay for the boring TLD.
**Outline** Why cheap TLDs attract abuse / pattern listings and collateral damage / what this costs in practice / when a non-com TLD is fine / the cost comparison over a domain's life
**Link** Section 2, checking a candidate TLD's current exposure.
**Overlap** `/blog/surbl-info-domains-microsoft-azure`. Strong overlap on the .info case specifically. Take the general TLD angle and cite it.

## Deliverability Checker (`/deliverability-checker`)

### B7. Grading a domain A to F before you send from it
`/checks/grade-your-domain-before-sending/` · 1,600 words · links to `/deliverability-checker`
**Intent** "deliverability checker", "check domain deliverability"
**Thesis** A composite grade across authentication, MX, blocklists and domain age is a useful triage signal and a bad target. It tells you in one screen whether a domain has an obvious defect, which is exactly what you want before a first send or when accepting a domain from a vendor. It cannot tell you where your mail will land, because that depends on your list and your content, neither of which the grade can see.
**Outline** What goes into the grade / what a B actually means / the defects it catches / the things it cannot see / using it as an acceptance test on bought domains
**Link** Section 1, running the grade.
**Overlap** `/blog/test-cold-emails`. Broader. Keep this about the pre-send domain grade.

### B8. What a domain grade cannot tell you
`/checks/limits-of-a-deliverability-score/` · 1,200 words · links to `/deliverability-checker`
**Intent** "deliverability score accuracy", "is my spam score real"
**Thesis** There is no portable deliverability score. Every tool that reports one is reporting its own heuristic over things it can observe from outside, and no mailbox provider publishes the number that actually decides placement. A grade is a configuration audit. Treating it as a placement prediction is how teams end up with an A-rated domain sending to a dead list.
**Outline** What can be observed from outside / what cannot / where the "spam score" idea came from / the correct use of a grade / what to measure instead
**Link** Section 4, as the configuration audit it is.
**Overlap** `/blog/inbox-placement-tests-disagree` makes a related argument about placement tools. Cite it; this one is about grades rather than seed tests.

### B9. Accepting or rejecting a bought domain in the first 48 hours
`/checks/accepting-a-bought-domain/` · 1,500 words · links to `/deliverability-checker`
**Intent** "check prewarmed domain", "verify domain purchase"
**Thesis** You have a short window to reject a domain that arrives with a defect, and the defects are all detectable. Grade it, check its history, confirm the records are yours and not the vendor's, verify the mailbox provider and admin access, and run one placement test. Six checks, under twenty minutes, and they are the difference between a refund conversation and a burned month.
**Outline** The acceptance checklist / what each check proves / what constitutes grounds to reject / documenting the state at handover / what to ask the vendor for
**Link** Section 2, the grade as the first check.
**Overlap** `/blog/how-to-buy-pre-warmed-email-accounts` covers buying. This is the post-delivery acceptance test. Complementary, cite it.

## Google Domain Checker (`/google-domain-checker`)

### B10. Is this domain already tied to a Google Workspace account?
`/checks/is-this-domain-on-google-workspace/` · 1,200 words · links to `/google-domain-checker`
**Intent** "domain already in use google workspace", "check google workspace domain"
**Thesis** A domain that has previously been attached to a Google Workspace account cannot be freely claimed by a new one until the old association is released, and discovering that at provisioning time costs you a day. Check before you buy an aftermarket domain and before you hand a client domain to a provisioning process. The check is instant and the alternative is a support ticket.
**Outline** How the association persists / what happens at provisioning when it exists / releasing an old association / checking before purchase / the aftermarket domain case
**Link** Section 1.
**Overlap** None direct. Useful and uncovered.

### B11. Why bulk provisioning fails on some domains and not others
`/checks/why-provisioning-fails/` · 1,300 words · links to `/google-domain-checker`
**Intent** "google workspace domain verification failed", "cannot add domain workspace"
**Thesis** Provisioning failures cluster into four causes: the domain is already claimed, the verification record was not visible when the check ran, the domain is too new for the registrar's DNS to have published, and the TLD is restricted. Each has a different fix and only one of them is a waiting game. Identify which before retrying, because repeated failed verification attempts slow the process down further.
**Outline** The four causes / distinguishing them / the verification record timing problem / restricted TLDs / the retry discipline
**Link** Section 2, checking the claimed state first.
**Overlap** None direct.

### B12. Buying aftermarket domains for Google-based sending
`/checks/aftermarket-domains-and-google/` · 1,400 words · links to `/google-domain-checker`
**Intent** "expired domain cold email", "aftermarket domain google workspace"
**Thesis** An aftermarket domain carries two histories that matter: what the internet remembers about it, and whether it is still attached to someone else's Workspace tenant. The second is the one that stops you provisioning at all, and it is the one nobody checks. Check both before the purchase, not after, because neither is a refundable surprise.
**Outline** The two histories / checking tenant association / checking web and blocklist history / what price a clean history is worth / when to walk away
**Link** Section 2, tenant association.
**Overlap** `/blog/free-domains-cold-email-2026` is adjacent. Different angle. Cross-link.

## Domain Expiry Checker (`/domain-expiry-checker`)

### B13. The domain that expired mid-campaign
`/checks/when-does-my-domain-expire/` · 1,200 words · links to `/domain-expiry-checker`
**Intent** "domain expiry checker", "when does my domain expire"
**Thesis** An expired sending domain stops resolving, which kills delivery and replies at the same time, and the failure looks exactly like a deliverability collapse for the first few hours of diagnosis. On a fleet bought in batches, domains expire in batches. Check the whole fleet quarterly and set renewals to automatic, because the cost of a lapse is a campaign and the cost of prevention is nothing.
**Outline** What actually breaks when a domain lapses / why it is misdiagnosed / the batch expiry problem / the redemption period and what recovery costs / a quarterly routine
**Link** Section 3, the fleet check.
**Overlap** None direct. Already referenced in the site plan as T5 and H12.

### B14. Auto-renew is not a strategy
`/checks/domain-renewal-discipline/` · 1,000 words · links to `/domain-expiry-checker`
**Intent** "domain auto renew failed", "domain renewal cold email"
**Thesis** Auto-renew fails quietly for three reasons: the card on file expired, the registrar account email is a mailbox nobody reads, and the domain was transferred and the setting did not follow. All three are invisible until the domain is. Verify expiry dates independently of the registrar's promise, because the registrar is the party whose failure you are checking for.
**Outline** The three silent failures / why the notification email is the weak point / independent verification / consolidating registrars, and the risk of doing so / the annual audit
**Link** Section 3, independent verification.
**Overlap** None.

### B15. What a domain's registration history tells you before you buy
`/checks/reading-domain-history/` · 1,400 words · links to `/domain-expiry-checker`
**Intent** "domain history check", "has this domain been used before"
**Thesis** Registration age is the attribute marketplaces sell and it is close to meaningless on its own. What matters is whether the domain has been dropped and re-registered, how many times, and what it hosted in between. A domain registered in 2009, dropped four times and last used for affiliate spam is worse than one registered last week, and the listing will only tell you about 2009.
**Outline** What age does and does not indicate / drop cycles and how to spot them / prior use and how to check it / what a marketplace listing hides / a pre-purchase routine
**Link** Section 4, as part of the pre-purchase routine.
**Overlap** None direct on history specifically.

---

# Cluster 3. Diagnosis

Three tools: header analyzer, Outlook SCL analyzer, bounce analyzer. These are the highest-intent pages on the site, because the reader has a live problem.

## Header Analyzer (`/header-analyzer`)

### C1. How to read an email header when something went wrong
`/checks/how-to-read-email-headers/` · 2,200 words · links to `/header-analyzer`
**Intent** "read email headers", "email header analyzer"
**Thesis** Raw headers are the only place where what actually happened is recorded. They tell you which server relayed the message, whether SPF, DKIM and DMARC passed at the receiver rather than in your own DNS, whether alignment held, and where time was lost. Everything else in deliverability diagnosis is inference. Learning to read four fields covers most of what a cold sender needs.
**Outline** Getting the raw headers from Gmail and Outlook / the Received chain, read bottom up / Authentication-Results and the four verdicts / alignment, and spotting a pass that does not align / timing and delays / what headers cannot tell you
**Link** Section 1, as the fast path for a reader who wants the answer now rather than the skill.
**Overlap** `/blog/outlook-scl-score-cold-email` covers the Outlook-specific walkthrough. This is the general skill page.

### C2. Authentication passed in my DNS but failed at the receiver
`/checks/auth-passes-locally-fails-remotely/` · 1,400 words · links to `/header-analyzer`
**Intent** "spf pass dkim fail", "authentication-results fail"
**Thesis** A record checker reads your DNS. A header reads what the receiving server concluded. They disagree when something between you and the receiver changed the message or the envelope: forwarding, a mailing list, link rewriting, or a sending platform using a different envelope domain than you expect. The header is authoritative, because it is the verdict that decided placement.
**Outline** Why the two views differ / the four things that change in transit / reading the receiver's verdict / envelope versus header domains / fixing each cause
**Link** Section 1, to get the receiver's verdict.
**Overlap** None direct.

### C3. Tracing where the delay happened
`/checks/diagnosing-email-delays/` · 1,200 words · links to `/header-analyzer`
**Intent** "email delayed hours", "email slow delivery"
**Thesis** Each Received line carries a timestamp, so the gap between hops is measurable. A long gap at the receiving edge usually means greylisting or rate limiting, which is a reputation signal rather than a network problem. On cold infrastructure, consistent delays into one provider are an early warning that arrives before placement moves.
**Outline** Reading the Received chain as a timeline / greylisting and what it looks like / rate limiting at the edge / what a widening delay predicts / when to slow down
**Link** Section 1.
**Overlap** None direct. Good early-warning angle.

## Outlook SCL Analyzer (`/scl-analyzer`)

### C4. Why Microsoft sent your email to Junk
`/checks/why-outlook-sent-it-to-junk/` · 1,800 words · links to `/scl-analyzer`
**Intent** "outlook spam cold email", "scl score"
**Thesis** Microsoft stamps a Spam Confidence Level and related markers into the headers of mail it filters, and those values name the reason. That makes Outlook the one major provider that tells you why, if you know where to look. Paste the headers, read the SCL and the filter verdict, and you get a specific cause rather than a guess.
**Outline** Where Microsoft records its verdict / the SCL scale and what each band means / the other markers worth reading / the four causes that dominate for cold senders / fixing each / what Gmail does not give you
**Link** Section 1, as the fast route.
**Overlap** `/blog/outlook-scl-score-cold-email` is a direct hit. Either this brief replaces it as the canonical deeper version with a redirect, or it is cut. Decide before commissioning. Same question applies to `/blog/cold-email-outlook-spam-gmail-inbox`.

### C5. Landing in Gmail but not Outlook
`/checks/gmail-inbox-outlook-spam/` · 1,600 words · links to `/scl-analyzer`
**Intent** "gmail inbox outlook spam", "microsoft filtering cold email"
**Thesis** The two providers weight different things. Microsoft leans harder on its own filtering stack and on complaint history attached to the sending infrastructure, and it is less forgiving of new senders. A split result is normal early and is not evidence that your setup is broken. It is evidence that you need to look at the Microsoft-specific signals, which are the ones Outlook actually records in the header.
**Outline** Why the two diverge / what Microsoft weighs more heavily / reading the Microsoft verdict / the fixes that only affect Microsoft / when a split result is expected
**Link** Section 3.
**Overlap** `/blog/cold-email-outlook-spam-gmail-inbox` is a direct hit. Supersede or skip. Do not publish both.

### C6. Tuning a sequence for a Microsoft-heavy list
`/checks/sending-to-microsoft-recipients/` · 1,400 words · links to `/scl-analyzer`
**Intent** "cold email microsoft 365 recipients", "outlook deliverability tips"
**Thesis** If most of your list is on Microsoft 365, your sending profile should reflect it: lower per-inbox volume, slower ramp, tighter bounce discipline, and a preference for sender infrastructure that matches. Confirm what you are actually sending into before tuning, because teams optimise for Gmail and then wonder why the Microsoft half underperforms.
**Outline** Establishing your recipient mix / what changes for a Microsoft-heavy list / volume and ramp differences / verifying with headers / when to split the list by provider
**Link** Section 4, verifying the result in headers.
**Overlap** `/blog/does-esp-matching-improve-deliverability` and `/esp-segmenter` content. Cross-link both; keep this about sending profile rather than matching theory.

## Bounce Analyzer (`/bounce-analyzer`)

### C7. What your bounce message actually means
`/checks/what-does-this-bounce-mean/` · 1,800 words · links to `/bounce-analyzer`
**Intent** "bounce message meaning", "smtp error code"
**Thesis** A bounce carries a response code and a text string from the receiving server, and the text is usually more informative than the code. The practical division is not hard versus soft but permanent-and-your-fault, temporary-and-wait, and blocked-for-reputation. The third looks like a soft bounce and is the one that matters, because continuing to send through it is what turns a warning into a burn.
**Outline** Codes versus text / the three practical categories / the reputation block disguised as a soft bounce / per-provider phrasing / what to do for each / when to stop sending entirely
**Link** Section 1.
**Overlap** `/blog/cold-email-bounce-codes` is a direct hit and it is good. Position this as the paste-and-diagnose companion, or cut. Decide before commissioning.

### C8. Bounce rate thresholds: when to pause, when to stop
`/checks/bounce-thresholds-during-ramp/` · 1,400 words · links to `/bounce-analyzer`
**Intent** "bounce rate cold email", "acceptable bounce rate"
**Thesis** Bounce rate is the fastest leading indicator you have, and it moves before placement does. The thresholds that matter are lower during ramp than at cruising volume, because a new domain has no history to absorb the signal. Set the stop condition before the campaign starts, because the decision to keep sending through a rising bounce rate is never made well in the moment.
**Outline** Why bounces lead placement / thresholds by stage / the ramp-specific numbers / setting stop conditions in advance / what to do after you stop
**Link** Section 2, diagnosing the bounces you have before setting a rule.
**Overlap** `/blog/cold-email-bounce-rate-pause-rules` is a direct hit. Supersede or skip.

### C9. Mining bounces for list intelligence
`/checks/what-bounces-tell-you-about-your-list/` · 1,200 words · links to `/bounce-analyzer`
**Intent** "bounce analysis", "what bounces say about list quality"
**Thesis** A bounce set is a free audit of your data source. A high invalid-mailbox rate points at stale data; a high domain-not-found rate points at a scraper that never validated domains; a cluster of policy rejections from one provider points at a reputation problem rather than a data problem. Categorise the bounces and you learn which vendor to stop paying.
**Outline** The bounce categories as data-quality signals / attributing bounces to a source / the provider-cluster pattern / feeding this back into verification spend / a monthly review
**Link** Section 1, categorising the set.
**Overlap** `/blog/email-verifier-accuracy-comparison` is related but vendor-focused. Cross-link.

---

# Cluster 4. List hygiene and data ops

Six tools: email verifier, CSV cleaner, CSV combiner, suppression checker, waterfall calculator, sequencer CSV converter.

## Email Verifier (`/email-verifier`)

### D1. What SMTP verification actually proves
`/checks/what-email-verification-proves/` · 1,600 words · links to `/email-verifier`
**Intent** "email verifier", "verify email address"
**Thesis** SMTP verification opens a conversation with the receiving server and asks whether a mailbox exists, without sending a message. It proves the address is accepted right now by that server. It does not prove a human reads it, that the person still works there, or that the domain will accept your mail. On catch-all domains it proves almost nothing, which is why catch-all handling is the whole game at scale.
**Outline** The SMTP conversation in plain terms / what a valid result covers / catch-all domains and why they defeat it / role addresses and disposable domains / where verification sits in a list workflow
**Link** Section 1, for a single address check.
**Overlap** `/blog/catch-all-email-verification` covers catch-alls specifically and well. Cite it; keep this the mechanism page.

### D2. How old can a list be before you re-verify it?
`/checks/when-to-reverify-a-list/` · 1,300 words · links to `/email-verifier`
**Intent** "how often verify email list", "old email list"
**Thesis** Business email decays continuously as people change jobs, and the decay rate is what decides your re-verification interval, not a calendar rule. A list bought three months ago and never sent to is a different risk from one sent to weekly, because sending itself surfaces the dead addresses. Re-verify before any list that has been sitting, and treat any list older than a quarter as unverified.
**Outline** Why business email decays / send history as free verification / the three-month heuristic and its limits / cost of re-verifying versus cost of bouncing / a rule for a fleet
**Link** Section 3.
**Overlap** `/blog/how-old-email-list-reverify` is a direct hit. Supersede or skip. Do not publish both.

### D3. Verification is not a substitute for a good list
`/checks/verification-does-not-fix-a-bad-list/` · 1,200 words · links to `/email-verifier`
**Intent** "email verification not working", "still bouncing after verification"
**Thesis** Verification removes addresses that do not exist. It cannot remove addresses that exist and do not want to hear from you, and those are the ones that generate complaints, which damage reputation faster than bounces do. A perfectly verified list of badly targeted people is a reputation problem with clean metrics at the top of the funnel.
**Outline** What verification removes / what it cannot see / complaints versus bounces and which costs more / the targeting problem dressed as a data problem / what to fix instead
**Link** Section 1, once, for context.
**Overlap** None direct. Good contrarian angle for the research site's voice.

## CSV List Cleaner (`/csv-cleaner`)

### D4. Cleaning a lead list before it touches a domain
`/checks/cleaning-a-lead-list/` · 1,600 words · links to `/csv-cleaner`
**Intent** "clean email list csv", "dedupe lead list"
**Thesis** Before a list reaches a sequencer it should have duplicates removed at both the address and the company level, role addresses stripped or segmented, malformed rows dropped, and obvious junk domains removed. Each of those is a bounce or a complaint you have prevented. The order matters: dedupe last, because the earlier steps change what counts as a duplicate.
**Outline** The cleaning order and why / address versus company-level duplicates / role addresses, keep or cut / malformed rows and encoding damage / what to do with the rows you removed
**Link** Section 1, since the whole article is the workflow the tool performs.
**Overlap** `/blog/clean-messy-csv-cold-email` is a direct hit including the role-address regex. Supersede or skip.

### D5. Why your list must never leave your browser
`/checks/lead-list-privacy-when-cleaning/` · 1,100 words · links to `/csv-cleaner`
**Intent** "is it safe to upload email list", "email list privacy tool"
**Thesis** Uploading a client list to a free web tool transfers that data to a third party, and under GDPR that is a processing relationship you probably have not papered. Tools that run entirely in the browser avoid the question, because nothing is transmitted. For agencies handling client data this is the difference between a workflow you can describe to a client and one you cannot.
**Outline** What "runs in your browser" means technically / the processor relationship you create by uploading / what an agency should be able to tell a client / how to verify a tool is local / the wider data handling rules
**Link** Section 4, as the example of a local tool.
**Overlap** `/blog/run-cold-email-agency-client-data` covers agency data isolation. Cite it. This is narrower and tool-specific.

### D6. Deduplication at company level, not just address level
`/checks/company-level-deduplication/` · 1,300 words · links to `/csv-cleaner`
**Intent** "avoid emailing same company twice", "company level dedupe"
**Thesis** Removing duplicate addresses does not stop you emailing four people at one company in the same week, which is the pattern that produces internal forwarding, a shared complaint and occasionally a domain-wide block. Deduplicate by company domain with a policy for how many contacts per account and over what window.
**Outline** Why address dedupe is insufficient / the internal-forwarding failure / contacts per account, and a defensible number / the time window / implementing it in a clean-up pass
**Link** Section 5.
**Overlap** `/blog/stop-emailing-same-company-twice`, `/blog/how-many-contacts-same-company` and `/blog/prevent-duplicate-leads-cold-email` all cover this. Heavily covered. Likely cut this brief; if kept, it must cite all three and add the mechanism they do not.

## CSV Combiner (`/csv-combiner`)

### D7. Merging lead lists without creating duplicates or losing columns
`/checks/merging-lead-lists/` · 1,300 words · links to `/csv-combiner`
**Intent** "combine csv lead lists", "merge email lists"
**Thesis** Merging lists from different sources fails in two ways: headers that mean the same thing but are named differently, which silently drops data, and duplicates that survive because one source stored the address in a different case or with whitespace. Normalise headers and addresses first, then merge, then dedupe.
**Outline** Header mismatch and silent data loss / address normalisation before comparison / merge then dedupe, in that order / keeping provenance of which source a row came from / verifying the row count
**Link** Section 3.
**Overlap** None direct.

### D8. Keeping source attribution when you combine lists
`/checks/tracking-lead-source-through-a-merge/` · 1,100 words · links to `/csv-combiner`
**Intent** "track lead source cold email", "lead list attribution"
**Thesis** If you merge three vendors' lists into one file and lose which row came from where, you can never work out which vendor is selling you bounces. Add a source column before merging. It costs nothing and it is the only way to make a data-spend decision later.
**Outline** Why attribution disappears in a merge / adding the source column / tying bounces back to source / the vendor scorecard this enables / reviewing it quarterly
**Link** Section 2.
**Overlap** None direct. Pairs with C9.

### D9. Building one master list across clients without cross-contamination
`/checks/master-list-across-clients/` · 1,300 words · links to `/csv-combiner`
**Intent** "agency lead list management", "separate client lists"
**Thesis** An agency needs two contradictory things: a global suppression view so no client emails a person who opted out elsewhere, and strict separation so one client's prospect data never reaches another. The resolution is to share the suppression set and never the prospect set, which means hashing addresses for the shared layer.
**Outline** The two requirements and the tension / what may be shared / hashing for suppression / what must stay separate / the contract language this needs
**Link** Section 3.
**Overlap** `/blog/run-cold-email-agency-client-data` and `/blog/global-suppression-list-cold-email`. Both close. Cite both; this is the architecture page.

## Suppression Checker (`/suppression-checker`)

### D10. Checking a list against everyone you must not email
`/checks/checking-against-suppression/` · 1,500 words · links to `/suppression-checker`
**Intent** "suppression list check", "check list against unsubscribes"
**Thesis** A suppression set has four parts: people who unsubscribed, people who asked you to stop by reply, current customers, and companies already in a sales conversation. Emailing anyone in the first two is a complaint and, in some jurisdictions, a legal problem. Emailing the last two is an internal embarrassment that costs deals. Check every list against all four before launch.
**Outline** The four suppression categories / the legal weight of each / where each set lives and why they are rarely in one place / running the check / what to do with matches
**Link** Section 4.
**Overlap** `/blog/cold-email-suppression-list-checker` and `/blog/global-suppression-list-cold-email`. Heavily covered. Take the four-category framing or cut.

### D11. One suppression list across every domain, inbox and tool
`/checks/one-suppression-list-everywhere/` · 1,400 words · links to `/suppression-checker`
**Intent** "sync suppression across tools", "global suppression list"
**Thesis** Suppression that lives inside one sequencer protects one sequencer. The moment you run two platforms, or rotate domains, or move a client between tools, the opt-out you honoured last month is gone. The durable pattern is an external master list that every platform is checked against before launch, rather than trusting each platform's internal state.
**Outline** Why platform-native suppression fails at scale / the external master / the pre-launch check / syncing back into each tool / auditing that it worked
**Link** Section 3.
**Overlap** `/blog/sync-unsubscribes-across-cold-email-tools` is a direct hit. Supersede or skip.

### D12. Honouring an opt-out that arrived as a reply
`/checks/opt-outs-that-arrive-as-replies/` · 1,200 words · links to `/suppression-checker`
**Intent** "reply to opt out cold email", "unsubscribe by reply"
**Thesis** Most cold email opt-outs arrive as a reply saying some version of "take me off your list", not as a click. Those never reach your platform's suppression list unless someone puts them there. An unhandled reply opt-out is the highest-probability source of a complaint, because the person already asked once.
**Outline** Why reply opt-outs dominate in cold email / the manual gap / classifying replies for opt-out intent / getting them into the master list same-day / the audit trail you want if challenged
**Link** Section 3.
**Overlap** `/blog/one-click-unsubscribe-vs-reply-opt-out` and `/blog/ai-cold-email-reply-classifier`. Cite both; this is the operational handling page.

## Waterfall Calculator (`/waterfall-calculator`)

### D13. What a verification waterfall costs per usable email
`/checks/verification-waterfall-cost/` · 1,500 words · links to `/waterfall-calculator`
**Intent** "email verification cost", "verification waterfall"
**Thesis** Running one verifier is simple and leaves usable addresses on the table. Running several in sequence, cheapest first, only paying the expensive one for addresses the cheap one could not resolve, lowers your cost per usable address. The right order depends on each provider's price and its catch-all resolution rate, which is why this is arithmetic rather than opinion.
**Outline** Why a single verifier under-recovers / the waterfall pattern / ordering by price and resolution rate / the arithmetic on a real list / when a waterfall is not worth the complexity
**Link** Section 4.
**Overlap** `/blog/email-verification-waterfall` and `/blog/clay-cost-per-qualified-lead`. Both close. This is the calculator-anchored version; cite both.

### D14. Choosing verifier order with your own accuracy test
`/checks/testing-verifier-accuracy/` · 1,400 words · links to `/waterfall-calculator`
**Intent** "most accurate email verifier", "verifier comparison"
**Thesis** Published accuracy claims are marketing. Run a known sample through each provider, where you already know which addresses are real, and measure false positives and false negatives yourself. The results differ by list composition, so the right order for your data is not necessarily the right order for anyone else's.
**Outline** Building a known-answer sample / what to measure / false positives are the expensive error / feeding results into the order / re-testing when a provider changes
**Link** Section 4, to price the resulting order.
**Overlap** `/blog/email-verifier-accuracy-comparison` is a direct hit. Supersede or skip.

### D15. When to stop paying for verification
`/checks/diminishing-returns-on-verification/` · 1,100 words · links to `/waterfall-calculator`
**Intent** "is email verification worth it", "verification roi"
**Thesis** Each additional verification layer recovers fewer addresses at higher cost. There is a point where the marginal address costs more than a bounce would, and past that point you are buying comfort. Find it with the arithmetic, and accept a bounce rate floor rather than chasing zero.
**Outline** Marginal cost per recovered address / what a bounce actually costs / the crossover point / accepting a floor / the case for stopping earlier on cheap lists
**Link** Section 3.
**Overlap** None direct.

## Sequencer CSV Converter (`/sequencer-csv-converter`)

### D16. Moving a list between Instantly, Smartlead and Email Bison
`/checks/converting-lists-between-sequencers/` · 1,200 words · links to `/sequencer-csv-converter`
**Intent** "instantly to smartlead csv", "sequencer csv format"
**Thesis** Each platform expects its own column names, and a mismatch does not error, it silently drops personalisation variables, which ships sequences with empty merge tags. Convert the format deliberately, then check a sample render before launch rather than after.
**Outline** Where each platform differs / the silent drop problem / converting safely / verifying merge fields survived / the sample render check
**Link** Section 3.
**Overlap** None direct on format conversion.

### D17. What breaks when you migrate sequencers mid-campaign
`/checks/migrating-sequencers-safely/` · 1,400 words · links to `/sequencer-csv-converter`
**Intent** "migrate sequencer", "switch cold email platform"
**Thesis** A mid-campaign migration risks three things: contacts receiving step one twice, replies landing in a platform nobody is watching, and suppression state left behind. Export the current state including step position, convert, import, and keep the old platform's inbox monitored for two weeks.
**Outline** Exporting step position, not just contacts / the duplicate step-one failure / reply continuity / carrying suppression across / the two-week overlap
**Link** Section 2, the conversion step.
**Overlap** `/blog/migrate-instantly-smartlead-without-losing-replies` is a direct hit. Supersede or skip.

### D18. Personalisation variables that do not survive a platform move
`/checks/merge-fields-across-platforms/` · 1,100 words · links to `/sequencer-csv-converter`
**Intent** "merge tag syntax instantly smartlead", "personalization variables sequencer"
**Thesis** Merge tag syntax differs between platforms, so a converted list can carry the right data in the wrong wrapper and render as literal text in a live send. Convert the columns and the syntax, then preview.
**Outline** The syntax differences / what a failed tag renders as / converting both data and syntax / previewing before launch / the fallback value discipline
**Link** Section 2.
**Overlap** `/blog/cold-email-merge-tag-checker` is close. Cite and narrow to the migration case.

---

# Cluster 5. Capacity and fleet planning

Three tools: domain and inbox planner, ESP segmenter, inbox rotation planner. These are the commercial core: every one of these ends in a reader who knows how many inboxes they need.

## Domain & Inbox Planner (`/inbox-planner`)

### E1. How many domains and inboxes for your target volume
`/checks/how-many-inboxes-do-i-need/` · 1,800 words · links to `/inbox-planner`
**Intent** "how many inboxes cold email", "inboxes for 1000 emails a day"
**Thesis** Work backwards from sends per day. Divide by the sustainable per-inbox daily volume for your provider, add headroom for inboxes that will be out of rotation, then divide by the inboxes per domain you are willing to risk. That last figure is a concentration decision rather than a deliverability one: more inboxes per domain is cheaper and loses more when the domain goes.
**Outline** The chain from volume to domains / sustainable per-inbox volume and where the number comes from / headroom and replacement / inboxes per domain as a risk choice / worked examples at 300, 1,000 and 5,000 a day / what changes the answer
**Link** Section 5, to run the reader's own numbers.
**Overlap** `/blog/how-many-domains-cold-email-300-per-day` and `/blog/how-many-inboxes-per-domain-cold-email` both hit this. Both good. This must be the general calculator-anchored page that cites both, or it should be cut.

### E2. The ramp that does not burn what you just bought
`/checks/ramping-a-new-fleet/` · 1,600 words · links to `/inbox-planner`
**Intent** "cold email ramp up schedule", "how fast increase sending volume"
**Thesis** Ramp in steps tied to observed outcomes rather than to the calendar, and define the stop conditions before you start. The most common first-month failure is a volume increase taken while bounce rate was already elevated, which converts a recoverable signal into a burn.
**Outline** Why step increases beat linear / tying steps to bounce and placement / prewarmed versus fresh starting points / stop conditions and what to do at each / the first 30 days as a table
**Link** Section 5, for a plan against the reader's own fleet.
**Overlap** `/blog/cold-email-sending-limits` and `/blog/scale-cold-email-outreach`. Cite both. Keep this ramp-specific.

### E3. Budgeting infrastructure against a pipeline target
`/checks/infrastructure-cost-per-meeting/` · 1,500 words · links to `/inbox-planner`
**Intent** "cold email infrastructure cost", "cost per meeting cold email"
**Thesis** Infrastructure cost per booked meeting is the number that decides whether an outbound programme survives a budget review, and it is computable: inbox and domain cost, divided by meetings, with replacement rate included. Teams model the send volume and forget that a percentage of the fleet is replaced every quarter.
**Outline** The cost chain / replacement rate as a line item / the two assumptions that dominate (reply rate and booking rate) / a worked model / where the model breaks
**Link** Section 4, sizing the fleet the model prices.
**Overlap** `/blog/cold-email-stack-under-200` is adjacent on total stack cost. Cross-link.

## ESP Segmenter (`/esp-segmenter`)

### E4. Splitting a list by receiving provider, and why it changes your setup
`/checks/segmenting-a-list-by-provider/` · 1,600 words · links to `/esp-segmenter`
**Intent** "segment list by esp", "google vs microsoft recipients"
**Thesis** Your list's provider mix decides how much of each kind of sending infrastructure you should buy, because the two major providers tolerate different volumes and respond to different signals. Segmenting first turns an infrastructure guess into arithmetic, and it is the step most teams skip before buying inboxes.
**Outline** Why the mix matters / running the segmentation / what a Microsoft-heavy mix implies / what a Google-heavy mix implies / gateways and what they hide / buying to the mix
**Link** Section 2.
**Overlap** `/blog/which-mailboxes-to-buy-cold-email` and `/blog/does-esp-matching-improve-deliverability`. Both close. Cite both; this is the segmentation mechanics page.

### E5. Does sending Google to Google actually help?
`/checks/does-esp-matching-work/` · 1,400 words · links to `/esp-segmenter`
**Intent** "esp matching cold email", "google to google deliverability"
**Thesis** The claim is that matching sender platform to recipient platform improves placement. The mechanism people cite for it is mostly not how these systems work, but there are second-order reasons matching can help, chiefly that it changes your volume distribution and your infrastructure diversity. Treat it as a hypothesis to test on your own list rather than a rule.
**Outline** The claim and its usual justification / what the mechanism does and does not support / the second-order effects that are real / how to test it on your own data / what to do in the meantime
**Link** Section 4, to build the test segments.
**Overlap** `/blog/does-esp-matching-improve-deliverability` is a direct hit. Supersede or skip.

### E6. Behind a gateway: the recipients your segmentation cannot see
`/checks/gateways-hide-the-real-provider/` · 1,200 words · links to `/esp-segmenter`
**Intent** "email gateway mx record", "proofpoint mimecast cold email"
**Thesis** MX records tell you the gateway, not always the mailbox behind it. A domain fronted by a security gateway is filtered by that gateway's rules before the mailbox provider sees anything, and those rules are stricter and less forgiving of cold mail. Knowing which segment of your list sits behind gateways changes what you expect from it.
**Outline** What an MX lookup actually reveals / common gateways and how they filter / why gateway-fronted domains underperform / segmenting them separately / whether to send to them at all
**Link** Section 1.
**Overlap** None direct. Genuinely uncovered and a strong page.

## Inbox Rotation Planner (`/inbox-rotation-planner`)

### E7. Building a rotation so no inbox carries the whole load
`/checks/planning-inbox-rotation/` · 1,600 words · links to `/inbox-rotation-planner`
**Intent** "inbox rotation cold email", "rotate sending inboxes"
**Thesis** Rotation spreads volume so that no single mailbox looks like a bulk sender and so that losing one costs a fraction of your capacity. The useful model has three states, active, resting and warming, with a schedule that moves inboxes between them, so replacement is continuous rather than an emergency.
**Outline** What rotation actually protects against / the three states / batch sizing / the schedule / what to do when a batch underperforms / measuring whether it is working
**Link** Section 4, to build the schedule.
**Overlap** `/blog/cold-email-inbox-rotation-system` and `/blog/inbox-rotation-strategy`. Both direct. This should be the calculator-anchored version citing both, or cut.

### E8. How many inboxes should be resting at any time?
`/checks/how-many-inboxes-resting/` · 1,200 words · links to `/inbox-rotation-planner`
**Intent** "inbox rotation ratio", "resting inboxes cold email"
**Thesis** The resting share is a function of how hard you push the active ones and how fast you can replace a loss. Push harder and you need a bigger reserve. The mistake is treating resting inboxes as waste, when they are the buffer that keeps a client's campaign running the week a domain goes.
**Outline** Why a reserve exists / sizing it against push rate / replacement lead time as the driver / the cost of the buffer versus the cost of a gap / adjusting after an incident
**Link** Section 2.
**Overlap** None direct.

### E9. Rotating domains, not just inboxes
`/checks/domain-rotation-strategy/` · 1,400 words · links to `/inbox-rotation-planner`
**Intent** "domain rotation cold email", "rotate sending domains"
**Thesis** Inbox rotation inside one domain spreads volume but not risk, because the domain is the unit that gets blocked. Real diversification rotates across domains, and ideally across registrars, DNS providers and mailbox platforms, so that one correlated failure does not take the fleet.
**Outline** What the domain is the unit of / correlated failure modes / the four axes of diversification / a practical spread for a small fleet / what this costs
**Link** Section 3.
**Overlap** `/blog/cold-email-inbox-rotation-system` covers the inbox side. This extends it. Cross-link.

---

# Cluster 6. Pre-send and content QA

Five tools: pre-send checker, spam checker, spintax and Liquid tester, inbox previewer, unsubscribe generator.

## Pre-Send Checker (`/pre-send-checker`)

### F1. The checks to run before a sequence goes live
`/checks/before-you-send/` · 2,000 words · links to `/pre-send-checker`
**Intent** "cold email pre send checklist", "before sending campaign"
**Thesis** A pre-send pass catches the errors that are free to fix now and expensive to fix later: broken merge tags, duplicate contacts, spintax that does not parse, and a daily volume that exceeds what the fleet can carry. Run it as an ordered sequence with a stop at each stage, because the cost of each error rises the moment the first message sends.
**Outline** The ordered checklist / merge tags and the empty-variable failure / duplicates at this stage / spintax parse errors / volume forecast against fleet capacity / what to do when a check fails / the printable version
**Link** Section 1, since the tool performs most of the pass.
**Overlap** `/blog/cold-email-pre-send-checklist` is a direct hit with 37 points. This should be the hub page that cites it, or cut. This is also the anchor page named in `16-TOOLS-HUB.md` section 6, so coordinate.

### F2. Broken merge tags and what recipients actually see
`/checks/broken-merge-tags/` · 1,300 words · links to `/pre-send-checker`
**Intent** "merge tag not working", "personalization variable blank"
**Thesis** A merge tag with no value renders as a blank, a literal tag, or "Hi ," depending on the platform, and every one of those is visible to the recipient as evidence of automation. Set fallbacks for every variable, then check a rendered sample rather than trusting the fallback logic.
**Outline** The three failure renders / fallbacks and where to set them / rows with missing data and whether to send at all / checking a rendered sample / segmenting out incomplete rows
**Link** Section 3.
**Overlap** `/blog/cold-email-merge-tag-checker`. Direct. Supersede or skip.

### F3. Forecasting send volume against what your fleet can carry
`/checks/forecasting-send-volume/` · 1,200 words · links to `/pre-send-checker`
**Intent** "cold email daily send volume", "how long to send list"
**Thesis** A list of 20,000 contacts across a sequence of four steps is not 20,000 sends, it is closer to 60,000 over the campaign, and the daily peak arrives when step one of a new batch overlaps step three of an old one. Forecast the peak before launch, because that is the number your fleet has to carry, not the average.
**Outline** Sends versus contacts / where the peak comes from / overlapping batches / matching the peak to fleet capacity / staggering launches to flatten it
**Link** Section 2.
**Overlap** None direct. Good and genuinely uncovered.

## Spam Checker (`/spam-checker`)

### F4. What content filtering actually reacts to
`/checks/what-spam-filters-react-to/` · 1,800 words · links to `/spam-checker`
**Intent** "spam checker", "spam trigger words"
**Thesis** Word-level spam triggers matter far less than people think and structure matters far more. Filters weigh links and where they point, image-to-text ratio, HTML quality, attachment presence, and the gap between your sending reputation and the message's shape. A word-list scan is a useful hygiene pass, not a placement prediction, and treating it as one leads to copy that is bland and still filtered.
**Outline** The folklore about trigger words / what structure signals do / links and their weight / HTML and formatting / what the scan is genuinely good at / what to fix first
**Link** Section 5.
**Overlap** `/blog/avoid-spam-trigger-words` and `/blog/avoid-spam-filters`. Both close. This is the mechanism-first version. Cite both and keep the contrarian framing.

### F5. Links in cold email: how many, where and pointing at what
`/checks/links-in-cold-email/` · 1,400 words · links to `/spam-checker`
**Intent** "links in cold email", "should cold emails have links"
**Thesis** Every link is a URL whose reputation the receiver evaluates, so the question is not only how many but what they point at. A first message with no link, a tracking domain you control, and a calendar link only after a reply is a low-risk profile. The common failure is a signature carrying four links nobody asked for.
**Outline** How a receiver evaluates a URL / the signature problem / when to introduce a link in a sequence / tracking domains as links / testing a version with none
**Link** Section 4.
**Overlap** `/blog/when-to-add-link-cold-email` and `/blog/plain-text-url-vs-hyperlink-cold-email`. Both direct. Cite; narrow this to link count and destination.

### F6. Why your copy scores clean and still lands in spam
`/checks/clean-score-still-in-spam/` · 1,300 words · links to `/spam-checker`
**Intent** "good spam score still spam", "why cold email spam"
**Thesis** A content scan sees the message. Placement is decided mostly by things the message does not contain: your sending history, your complaint rate, the reputation of your domain and links, and how the recipient's provider has treated mail like yours before. Perfect copy on a damaged domain goes to spam, and the scan cannot tell you that.
**Outline** What the scan can see / what decides placement / the reputation component / diagnosing in the right order / when copy genuinely is the problem
**Link** Section 1, as the first step to eliminate content as a cause.
**Overlap** `/blog/cold-emails-going-spam` is broad. This narrows to the false-negative case. Cite it.

## Spintax & Liquid Tester (`/spintax-tester`)

### F7. Testing spintax before it ships broken
`/checks/testing-spintax/` · 1,300 words · links to `/spintax-tester`
**Intent** "spintax tester", "spintax not working"
**Thesis** Spintax fails in two ways: a syntax error that ships the raw braces to a recipient, and combinations that are grammatically wrong in a fraction of renders you never previewed. Preview the variations, not just one sample, because the broken one is always the one that goes to the best prospect.
**Outline** The two failure modes / previewing all variations rather than one / grammatical drift across combinations / nesting and when to stop / a review discipline for long sequences
**Link** Section 2.
**Overlap** None direct on testing. `/blog/spintax-vs-ai-copy-cold-email` covers the strategic choice. Cross-link.

### F8. Does spintax still do anything for deliverability?
`/checks/does-spintax-help/` · 1,400 words · links to `/spintax-tester`
**Intent** "does spintax work", "spintax deliverability"
**Thesis** Spintax was a response to filters that fingerprinted identical message bodies. Modern filtering weighs sender reputation and engagement far more heavily, which makes heavy spintax a lot of work for a small effect, and badly built spintax actively hurts by producing awkward copy that lowers reply rate. Light variation on subject lines is defensible; spinning every sentence is not.
**Outline** What spintax was built for / what changed in filtering / the reply-rate cost of bad variation / where light variation still helps / a sensible policy
**Link** Section 4.
**Overlap** `/blog/spintax-vs-ai-copy-cold-email` is a decision framework. This is the deliverability question specifically. Cite it.

### F9. Liquid conditionals for personalisation that does not embarrass you
`/checks/liquid-conditionals-for-cold-email/` · 1,400 words · links to `/spintax-tester`
**Intent** "liquid syntax cold email", "conditional personalization"
**Thesis** Conditionals let a sequence degrade gracefully when data is missing, which is the difference between "I saw you're hiring in Leeds" and "I saw you're hiring in ." Write the fallback branch first, then the good branch, and preview both against real rows including the incomplete ones.
**Outline** The fallback-first pattern / the conditionals worth knowing / previewing the missing-data path / testing against your worst rows / when to drop the row instead
**Link** Section 3.
**Overlap** `/playbooks/liquid-syntax-guide` is WarmInboxes' own playbook. This should link to it prominently as the reference and stay focused on the fallback discipline.

## Inbox Previewer (`/inbox-previewer`)

### F10. What your email looks like before anyone opens it
`/checks/how-your-email-looks-in-the-inbox/` · 1,400 words · links to `/inbox-previewer`
**Intent** "email preview gmail outlook", "sender name subject preview"
**Thesis** The open decision is made on three elements: sender name, subject and the snippet, and the snippet is usually the first line of your body rendered by the client, which is why sequences that open with "Hi {{first_name}}," waste it. Preview how the three render together in each client before launch.
**Outline** The three elements and their weight / how the snippet is chosen / the wasted-first-line problem / truncation points on mobile / previewing per client
**Link** Section 1.
**Overlap** None direct. Genuinely uncovered and high-utility.

### F11. Sender name: the field nobody tests
`/checks/choosing-a-sender-name/` · 1,200 words · links to `/inbox-previewer`
**Intent** "cold email from name", "sender name best practice"
**Thesis** The sender name is the most visible element and the least tested. A personal name reads as a person, a name plus company reads as outreach, and a company name alone reads as marketing. Which one wins depends on whether the recipient plausibly knows you, and it renders differently across clients, which is worth seeing before you commit a fleet to it.
**Outline** The three patterns / how each reads to a cold recipient / rendering differences and truncation / matching the name to the mailbox address / testing without burning a segment
**Link** Section 3.
**Overlap** None direct.

### F12. Mobile truncation and the subject lines that get cut
`/checks/subject-line-truncation/` · 1,100 words · links to `/inbox-previewer`
**Intent** "subject line length", "email subject truncation mobile"
**Thesis** Subject lines are cut at different points on mobile and desktop and across clients, so a subject whose meaning lives at the end can arrive meaningless. Front-load the specific detail, and check the cut point rather than trusting a character count rule.
**Outline** Where each client cuts / why character-count rules mislead / front-loading / the snippet as a continuation / checking before launch
**Link** Section 2.
**Overlap** None direct.

## Unsubscribe Generator (`/unsubscribe-generator`)

### F13. The unsubscribe line a cold email actually needs
`/checks/unsubscribe-for-cold-email/` · 1,500 words · links to `/unsubscribe-generator`
**Intent** "cold email unsubscribe", "opt out cold email"
**Thesis** A cold email needs a clear opt-out mechanism, and the argument that it looks like marketing is worth less than the complaint it prevents. A one-line plain-text opt-out at the foot of the message reduces complaints, which is a reputation outcome, not only a legal one. The legal requirements differ by jurisdiction; the reputation benefit does not.
**Outline** The complaint-reduction mechanism / what CAN-SPAM requires / what changes in the UK and EU / plain text versus a link / wording that works without reading as marketing
**Link** Section 4, generating the footer.
**Overlap** `/blog/one-click-unsubscribe-vs-reply-opt-out` and `/blog/can-spam-b2b-physical-address`. Both close. Cite both; this is the practical footer page. Flag for legal review per `01-DECISIONS.md` D-12.

### F14. List-Unsubscribe headers on cold infrastructure
`/checks/list-unsubscribe-headers/` · 1,400 words · links to `/unsubscribe-generator`
**Intent** "list-unsubscribe header", "one click unsubscribe cold email"
**Thesis** The `List-Unsubscribe` header, and its one-click form under RFC 8058, moves the opt-out into the mail client's own interface, where a recipient can use it instead of clicking the spam button. For a cold sender that trade is straightforward: an unsubscribe costs you one prospect, a complaint costs reputation across the fleet.
**Outline** What the headers do / the one-click requirement / whether bulk sender rules apply to your volume / platform support and how to verify / the trade against the spam button
**Link** Section 3.
**Overlap** `/blog/google-5000-email-rule-subdomains` covers the volume threshold question. Cite it.

### F15. Compliance footers across jurisdictions
`/checks/compliance-footers-by-jurisdiction/` · 1,600 words · links to `/unsubscribe-generator`
**Intent** "cold email compliance footer", "gdpr cold email footer"
**Thesis** What must appear at the foot of a cold email depends on where the recipient is, not where you are. The US requires an opt-out and a physical address; the UK and EU add a lawful basis question that a footer cannot solve on its own. Segment your footers by recipient region rather than publishing one footer and hoping.
**Outline** Why recipient location governs / the US requirements / UK and EU differences / what a footer cannot fix / segmenting footers by region
**Link** Section 4.
**Overlap** `/blog/gdpr-compliance-cold-email`, `/blog/cold-email-uk-guide` and `/blog/can-spam-b2b-physical-address` all cover parts. Heavily covered. Either cut, or make this the routing page that sends readers to the right one. Legal review required.

---

# Cluster 7. Playbooks and reading hubs

Playbooks earn multiple linking articles because each one contains several decisions that deserve their own page.

## The Cold Email Inboxing Playbook (`/inboxing-playbook`)

### G1. What a complete inboxing setup looks like end to end
`/learn/complete-inboxing-setup/` · 2,400 words · links to `/inboxing-playbook`
**Intent** "cold email setup guide", "inbox placement setup"
**Thesis** A working setup is seven decisions made in order: domain acquisition, DNS and authentication, mailbox provisioning, warmup or prewarmed purchase, ramp, rotation, and monitoring. Most failures trace to a decision made out of order, usually sending before monitoring exists, so nobody sees the first warning.
**Outline** The seven decisions in order / what each one determines / the ordering failures / where people skip / the full sequence as a reference
**Link** Section 5, as the full playbook.
**Overlap** `/blog/cold-email-infrastructure-setup`. Direct. This should point at the playbook as the canonical, or be cut.

### G2. The five setup mistakes that cost the first month
`/learn/first-month-setup-mistakes/` · 1,600 words · links to `/inboxing-playbook`
**Intent** "cold email mistakes", "new domain mistakes"
**Thesis** Ranked by how often they appear: sending before authentication propagated, ramping on a calendar rather than on signals, one tracking domain shared across a whole fleet, no suppression list at launch, and no monitoring until something broke. All five are prevented by an hour of setup.
**Outline** The five, ranked / the mechanism behind each / what each costs / the hour of prevention / the order to fix them in
**Link** Section 4.
**Overlap** `/blog/cold-email-mistakes` and `/blog/common-mistakes-kill-campaigns`. Both close. Take the setup-specific angle or cut.

### G3. Warmup, prewarmed or neither: what the playbook assumes
`/learn/warmup-prewarmed-or-neither/` · 1,800 words · links to `/inboxing-playbook`
**Intent** "warmup vs prewarmed", "do i need warmup"
**Thesis** Three paths to a domain that can send: warm it yourself over weeks, buy one already warmed, or send carefully from a fresh domain and accept a slower start. Each is correct under different constraints of time, volume and risk tolerance, and the playbook assumes one of them, so it is worth knowing which.
**Outline** The three paths / time, cost and risk for each / what the playbook assumes and why / who should choose each / the case for the third path nobody sells
**Link** Section 3.
**Overlap** `/blog/pre-warmed-inbox-vs-warmup-tool`, `/blog/how-to-skip-email-warmup`, `/blog/are-pre-warmed-inboxes-worth-it`. Heavily covered and the third is a strong honest piece. Cite all three.

## Liquid Syntax Guide (`/playbooks/liquid-syntax-guide`)

### G4. Personalisation that degrades gracefully
`/outbound/personalisation-that-degrades/` · 1,600 words · links to `/playbooks/liquid-syntax-guide`
**Intent** "personalization at scale", "conditional personalization cold email"
**Thesis** Personalisation at scale is a data-completeness problem, not a writing problem. Design every personalised line so the missing-data version still reads as a normal sentence, and your worst-case render is merely generic rather than obviously broken.
**Outline** The completeness problem / designing for the fallback / the three levels of personalisation and their data cost / measuring which level pays / the worst-row test
**Link** Section 2, as the syntax reference.
**Overlap** `/blog/cold-email-personalization` and `/blog/dos-donts-personalization`. Cite both; this is the graceful-degradation angle.

### G5. Stopping AI personalisation from inventing things
`/outbound/ai-personalisation-guardrails/` · 1,500 words · links to `/playbooks/liquid-syntax-guide`
**Intent** "ai personalization cold email", "ai hallucination outreach"
**Thesis** A model asked to write a personalised opener from thin data will produce a confident, specific, wrong sentence, and the recipient will notice. The guardrail is structural: only allow generated text where a verified field exists, and fall back to a conditional branch otherwise rather than asking for creativity.
**Outline** Why the failure is predictable / gating generation on verified fields / the conditional fallback / reviewing a sample before launch / what to never generate
**Link** Section 3, for the conditional structure.
**Overlap** `/blog/stop-ai-hallucinating-cold-email-personalization` is a direct hit. Supersede or skip.

### G6. Which variables are worth collecting
`/outbound/personalisation-variables-worth-collecting/` · 1,300 words · links to `/playbooks/liquid-syntax-guide`
**Intent** "what to personalize cold email", "personalization variables"
**Thesis** Each variable has a collection cost and a reply-rate return, and most teams collect variables that are cheap and generic rather than expensive and specific. Rank candidate variables by the two figures before building enrichment, because an enrichment pipeline is a recurring cost.
**Outline** The cost and return of each common variable / what is cheap and useless / what is expensive and worth it / testing a variable's contribution / deciding what to stop collecting
**Link** Section 4, implementing the ones you keep.
**Overlap** `/blog/ai-lead-scoring-cold-email` and the Clay posts are adjacent. Cross-link.

## Spam Plague Segmentation Playbook (`/playbooks/spam-plague-segmentation-playbook`)

### G7. Segmentation as a deliverability control, not a copy exercise
`/outbound/segmentation-as-deliverability/` · 1,800 words · links to `/playbooks/spam-plague-segmentation-playbook`
**Intent** "cold email segmentation", "segment list deliverability"
**Thesis** Segmentation is usually sold as a way to write sharper copy. Its larger effect is on deliverability: sending a tightly matched message to a narrow segment produces fewer complaints and more replies, and both are reputation inputs. Segment first for the routing, second for the copy.
**Outline** The two reasons to segment / the complaint mechanism / segment dimensions that affect routing / how narrow is too narrow / measuring the deliverability effect separately
**Link** Section 1, as the full system.
**Overlap** None direct, since the playbook is the only coverage. This is the article that should drive traffic to it.

### G8. Persona-based copy without multiplying your sequence count
`/outbound/persona-copy-at-scale/` · 1,500 words · links to `/playbooks/spam-plague-segmentation-playbook`
**Intent** "persona cold email", "copy for segments"
**Thesis** Every new persona multiplies sequences, and sequence count is an operational cost with a quality ceiling. The workable pattern is a shared skeleton with persona-specific proof points slotted in, so you maintain one sequence structure and several evidence sets.
**Outline** The multiplication problem / the shared skeleton pattern / what varies by persona and what does not / maintaining evidence sets / when a persona deserves its own sequence
**Link** Section 2.
**Overlap** `/blog/how-to-write-cold-email-gets-responses`. Adjacent. Cross-link.

### G9. Cleaning and segmenting in the same pass
`/outbound/clean-and-segment-together/` · 1,400 words · links to `/playbooks/spam-plague-segmentation-playbook`
**Intent** "list cleaning segmentation workflow", "prepare list cold email"
**Thesis** Cleaning and segmentation are usually separate steps done by different people at different times, which means the segment definitions are built on data that later gets removed. Do them in one pass, in a fixed order, so segment sizes are real numbers you can plan volume against.
**Outline** Why the two steps drift apart / the combined order / segment sizes as planning inputs / what to do with rows that fit no segment / handing the result to the sequencer
**Link** Section 3.
**Overlap** Cross-link the CSV cleaner briefs (D4) and ESP segmenter briefs (E4).

## Reading hubs

### G10. Running cold email for clients without mixing their data
`/b2b/client-data-isolation/` · 1,800 words · links to `/hub/cold-email-agency`
**Intent** "agency client data separation", "cold email agency operations"
**Thesis** An agency has to prove three things to a client: their prospect data never reaches another client, their replies are seen only by people who should see them, and an opt-out is honoured everywhere. The architecture that delivers all three separates prospect data per client while sharing only a hashed suppression layer.
**Outline** The three commitments / per-client separation in practice / reply routing / the shared suppression exception / what to put in the contract
**Link** Section 1, as the fuller reading path.
**Overlap** `/blog/run-cold-email-agency-client-data` and `/blog/manage-cold-email-replies-multiple-clients`. Both direct. This is the hub-linking overview; cite both.

### G11. Reply operations at agency scale
`/b2b/reply-operations/` · 1,600 words · links to `/hub/cold-email-agency`
**Intent** "manage cold email replies", "reply handling agency"
**Thesis** Replies arrive across dozens of mailboxes and most of them are not interested, so the operational problem is routing the few that matter to a human within hours while handling opt-outs and out-of-office automatically. Classification first, routing second, and an audit trail on opt-outs.
**Outline** The reply mix / classification categories that matter / routing the positive ones / automatic opt-out handling / the audit trail / measuring time to first response
**Link** Section 1.
**Overlap** `/blog/route-positive-cold-email-replies-automatically`, `/blog/ai-cold-email-reply-classifier`, `/blog/out-of-office-replies-cold-email`. Heavily covered. Overview only, citing all three.

### G12. The economics of enrichment
`/b2b/enrichment-economics/` · 1,600 words · links to `/hub/data-ops`
**Intent** "lead enrichment cost", "data ops cold email"
**Thesis** Enrichment spend is justified by reply rate lift, and most teams never measure the lift, so they buy fields that never change an outcome. Price each enrichment per usable record, then test whether the field moves replies before making it a standing cost.
**Outline** Cost per usable record / the fields people buy by default / designing a lift test / the credit-burn failure modes / a quarterly spend review
**Link** Section 1, as the fuller reading path.
**Overlap** `/blog/clay-cost-per-qualified-lead` and `/blog/stop-clay-burning-credits`. Both direct. Overview that cites them.

### G13. Building a list you own rather than renting one
`/b2b/owning-your-data-pipeline/` · 1,700 words · links to `/hub/data-ops`
**Intent** "build lead list", "own lead data pipeline"
**Thesis** Buying a list is fast and gives you data everyone else has. Building a pipeline is slow and gives you a compounding asset with a quality you control. The decision turns on how long you will be sending, because a pipeline pays back over quarters, not weeks.
**Outline** Rent versus build / what a pipeline actually costs to stand up / the compounding quality argument / when renting is correct / a staged path from one to the other
**Link** Section 2.
**Overlap** `/blog/google-maps-lead-generation-pipeline`, `/blog/scrape-sales-navigator-without-duplicates`, `/blog/hiring-signals-cold-email-targeting`. Several. Overview citing them.

### G14. Verification and enrichment in one workflow
`/b2b/verification-and-enrichment-workflow/` · 1,500 words · links to `/hub/data-ops`
**Intent** "verification enrichment workflow", "data pipeline cold email"
**Thesis** Verify before you enrich. Enriching an address that does not exist is paying twice for nothing, and it is the most common ordering error in a data pipeline. The correct order is dedupe, verify, enrich the survivors, then segment.
**Outline** The correct order and why / the cost of enriching dead rows / where re-verification fits on a standing pipeline / handing off to segmentation / auditing the pipeline's cost per usable record
**Link** Section 1.
**Overlap** `/blog/email-verification-waterfall`. Cross-link.

### G15. What belongs in a data ops runbook
`/b2b/data-ops-runbook/` · 1,400 words · links to `/hub/data-ops`
**Intent** "data ops runbook", "lead data process documentation"
**Thesis** A runbook turns a pipeline that one person understands into one the team can operate. It should name every step, the tool that performs it, the acceptance criterion, and who to ask when a step fails. Most agencies have this in one person's head, which is a single point of failure.
**Outline** What a runbook contains / step, tool, acceptance criterion, owner / the failure handoff / keeping it current / the test: can someone else run it
**Link** Section 1.
**Overlap** None direct.

---

# Cluster 8. Product and hub pages

Sixteen briefs against commercial destinations. Every one of these is a decision page first: it answers a real question and links once, where the product is the natural next step. Per `15-MONETISATION-AND-TRUST.md`, the ownership conflict line appears in the body on every page in this cluster.

## Google Workspace inboxes (`/google-workspace-inboxes`)

### H1. Google Workspace for cold email: what you get and what you cannot do
`/how-it-works/google-workspace-for-cold-email/` · 2,000 words · **ownership disclosure required**
**Thesis** Workspace gives you real mailboxes on infrastructure Gmail trusts, admin controls, and per-user sending limits that are enforced and worth knowing before you plan volume. What you cannot do is treat aliases as extra capacity, exceed the per-user limits without consequences, or provision at scale without hitting verification friction.
**Outline** What a Workspace mailbox is / the sending limits that actually bind / aliases versus mailboxes / admin access and why it matters on bought inboxes / provisioning friction at scale / when Workspace is the wrong choice
**Link** One link, in the provisioning section.
**Overlap** `/blog/google-workspace-aliases-cold-email` is a direct hit on aliases. Cite it.

### H2. Google's sending limits per user, and planning around them
`/how-it-works/google-sending-limits/` · 1,500 words
**Thesis** Workspace enforces per-user daily limits, and the safe operating number for cold email is well below the documented ceiling because the ceiling is not a deliverability recommendation. Plan fleet size against the safe number.
**Outline** The documented limits / why the safe number is lower / what happens at the ceiling / planning fleet size against it / verifying your own account's limits
**Link** One link, in the fleet-sizing section.
**Overlap** `/blog/cold-email-sending-limits`. Direct. Cite or supersede.

## Microsoft 365 inboxes (`/microsoft-365-inboxes`)

### H3. Microsoft 365 for cold email: the differences that matter
`/how-it-works/microsoft-365-for-cold-email/` · 2,000 words · **ownership disclosure required**
**Thesis** Microsoft's filtering behaves differently from Gmail's, its tenant structure changes how failure is contained, and it gives you more diagnostic information in headers than Google does. For a list weighted toward Microsoft recipients, sending from Microsoft infrastructure is worth testing rather than assuming.
**Outline** Tenant structure and blast radius / filtering differences / the diagnostic advantage / limits and throttling / when to choose it
**Link** One, in the provisioning section.
**Overlap** `/blog/google-vs-outlook-vs-smtp-cold-email-inboxes`. Cite.

### H4. Containing failure with tenant structure
`/b2b/tenant-structure-and-blast-radius/` · 1,500 words
**Thesis** How you distribute mailboxes across tenants decides what one suspension costs. Concentration is cheaper to run and more expensive to lose.
**Outline** What a suspension takes with it / concentration versus spread / a sensible structure per client / the cost difference / reviewing after an incident
**Link** One.
**Overlap** None direct.

## Azure inboxes (`/azure-inboxes`)

### H5. Azure tenants for cold email: the economics and the trade-offs
`/how-it-works/azure-inboxes-explained/` · 1,800 words · **ownership disclosure required**
**Thesis** Azure tenants offer a much lower cost per inbox at high inbox counts, which changes fleet economics. The trade-offs are concentration risk when 100 inboxes share a tenant, and a different setup path.
**Outline** What an Azure tenant inbox is / the cost comparison at scale / concentration risk / setup differences / who should and should not use it
**Link** One.
**Overlap** None direct on Azure specifically. Good territory.

### H6. When cheaper inboxes are a false economy
`/decide/cheap-inboxes-false-economy/` · 1,400 words
**Thesis** Cost per inbox is the wrong denominator. Cost per inbox that survives a quarter is the right one, and a cheaper inbox with a shorter life or higher concentration risk can cost more per delivered email.
**Outline** The right denominator / survival as a variable / concentration as a cost / a worked comparison / when cheap genuinely wins
**Link** One.
**Overlap** None direct. Strong honest angle.

## Pricing and offer (`/offer`)

### H7. What a prewarmed inbox should cost, and what the price includes
`/how-it-works/what-prewarmed-inboxes-cost/` · 1,500 words · **ownership disclosure required**
**Thesis** Prices vary by an order of magnitude because the products differ: a domain included or not, DNS configured or not, admin access or not, prewarmed or merely aged. Compare on what is included rather than headline price.
**Outline** The components of the price / what "prewarmed" must include to mean anything / admin access and why it is non-negotiable / the market range / questions that expose a thin offer
**Link** One, in the market-range section, alongside at least one competitor per `15-MONETISATION-AND-TRUST.md` Rule 4.
**Overlap** `/blog/how-to-buy-pre-warmed-email-accounts`. Cite.

### H8. Buying for a one-off campaign versus ongoing outbound
`/decide/one-off-versus-ongoing/` · 1,300 words
**Thesis** A single campaign and a standing programme justify different infrastructure. For one campaign under a threshold, the setup cost dominates and buying prewarmed is usually right. For a standing programme, replacement cadence dominates and the model changes.
**Outline** The two cases / where the cost sits in each / the threshold / what changes for ongoing / the mistake of buying for the wrong case
**Link** One.
**Overlap** None direct.

## Infrastructure calculator (`/calculator`)

### H9. Sizing infrastructure from a pipeline target
`/decide/from-pipeline-target-to-infrastructure/` · 1,800 words
**Thesis** Work backwards from meetings, through booking rate and reply rate, to sends, to inboxes and domains. The two conversion assumptions dominate the arithmetic, so state them and let the reader change them.
**Outline** The chain / the two assumptions that dominate / worked examples / headroom and replacement / what the model ignores
**Link** One, to the calculator.
**Overlap** Pairs with E1 and E3. Coordinate so all three do not repeat the same worked example.

### H10. The infrastructure cost nobody budgets for
`/b2b/the-replacement-line-item/` · 1,300 words
**Thesis** Domains and inboxes are consumables. A fleet loses a share every quarter, and a budget without a replacement line is wrong from month three.
**Outline** Why replacement is continuous / estimating your own rate / budgeting it / holding inventory versus buying on demand / reviewing the rate quarterly
**Link** One.
**Overlap** None direct.

## Deliverability approach (`/deliverability`)

### H11. What a deliverability programme looks like at a million sends a month
`/b2b/deliverability-at-scale/` · 2,000 words · **ownership disclosure required**
**Thesis** At volume, deliverability stops being a setup task and becomes an operating routine: monitoring, thresholds, rotation, replacement and incident response, run continuously.
**Outline** The routine / what is monitored and how often / thresholds and kill switches / rotation and replacement / incident response / staffing it
**Link** One.
**Overlap** `/blog/scale-cold-email-outreach` and `/blog/monitor-cold-email-domain-fleet`. Cite both.

### H12. Monitoring thresholds and the kill switch
`/b2b/thresholds-and-kill-switches/` · 1,500 words
**Thesis** The decision to stop sending should be made before the campaign starts and enforced automatically, because it is never made well while a client is watching numbers fall.
**Outline** The three signals worth alerting on / choosing thresholds / automatic pause / who is called / restarting after a stop
**Link** One.
**Overlap** `/blog/cold-email-bounce-rate-pause-rules`. Cite.

## Consultation (`/consultation`)

### H13. Diagnosing a deliverability problem in the right order
`/checks/diagnosing-in-the-right-order/` · 1,800 words
**Thesis** There is an order: authentication, then domain and link reputation, then list quality, then volume behaviour, then content. Teams start at content because it is the easiest to change, and lose a week.
**Outline** The five layers in order / the test at each layer / why content is last / when to escalate / what to bring to someone who can help
**Link** One, at the escalation point, which is genuinely where a consultation belongs.
**Overlap** `/blog/cold-emails-going-spam`. Broader. This is the ordered diagnostic.

### H14. When to bring in an operator
`/decide/when-to-get-help/` · 1,100 words
**Thesis** Three situations justify outside help: a burn you cannot attribute after working the diagnostic order, a migration with live campaigns, and a scale step past what your current setup was designed for. Everything else is documented and solvable.
**Outline** The three cases / what to try first / what to have ready / what good help looks like / what does not need help
**Link** One.
**Overlap** None direct.

## Reviews and social proof (`/reviews`, `/testimonials`, `/reddit` pages)

### H15. How to evaluate a prewarmed inbox vendor
`/decide/evaluating-an-inbox-vendor/` · 2,000 words · **ownership disclosure required**
**Thesis** Twenty questions, of which five are disqualifying: no admin access, no placement testing before handover, no documented warmup method, shared tracking domains, and no replacement policy. Apply them to every vendor including the one that published this page.
**Outline** The twenty questions / the five disqualifiers / what good answers sound like / how to verify the answers / our own answers, published
**Link** One, to the reviews page as evidence rather than as a claim.
**Overlap** None direct. This is the single most important page in this cluster and it must answer its own questions in public.

### H16. Reading vendor reviews in a market with no standards
`/decide/reading-vendor-reviews/` · 1,300 words
**Thesis** In a market where nobody publishes method, reviews are mostly signal about service and almost none about deliverability. Read them for responsiveness, replacement behaviour and honesty when something broke, and get placement evidence elsewhere.
**Outline** What reviews can tell you / what they cannot / the questions to ask a referee / verifying a claim independently / what we would want you to check about us
**Link** One.
**Overlap** `/blog/buy-pre-warmed-emails-reddit-2026` and the Reddit pages. Cite.

---

# Cluster 9. New commercial pages

Added in the commercial scoring pass (`COMMERCIAL-SCORING.md`). These are the bottom-of-funnel pages the original 124 was missing: written for a reader who is about to spend money. Every one carries the ownership disclosure in the body and the conversion block after the answer, per `COMMERCIAL-SCORING.md` section 6.

### N1. Best prewarmed inbox providers, compared on what is included
`/decide/best-prewarmed-inbox-providers/` · 2,400 words · **ownership disclosure required** · ads: primary
**Intent** "best prewarmed inbox provider", "prewarmed inbox providers"
**Thesis** Prices in this category vary by an order of magnitude because the products are not the same thing. Compare on six things: whether a domain is included, whether DNS arrives configured, whether you get admin access, what "prewarmed" meant in practice, what the replacement policy is, and what happens when something breaks at 2am. Headline price per inbox is the least useful number on the page.
**Outline** The six comparison points / the provider table with prices and inclusions / what "prewarmed" must mean to count / the replacement policy question / our own answers, in the same table / who should buy which
**Link** The conversion block, after the table.
**Rules** Rule 4 applies: at least one option we earn nothing from, labelled as such. Ownership conflict line next to the first mention of WarmInboxes. If the honest table does not put us first, publish it anyway.
**Overlap** `/blog/buy-pre-warmed-emails-reddit-2026` and `/prewarmed/reddit`. Cite both.

### N2. Can I use my existing Google Workspace for cold email?
`/decide/cold-email-from-existing-workspace/` · 1,600 words · **ownership disclosure required** · ads: primary
**Intent** "cold email from existing google workspace", "can i use my company email for cold email"
**Thesis** You can, and you should not. Cold email from the Workspace that carries your real business mail puts your invoices, your contracts and your recruiting in the same reputation bucket as a campaign that might generate complaints. The damage is not theoretical and it is not quick to undo. Send from separate domains on separate tenants, and keep the corporate domain out of it entirely.
**Outline** What actually gets pooled / the specific things that break when the corporate domain is hit / why subdomains do not solve it / what separation looks like / the cost of separation versus the cost of the damage
**Link** The conversion block, after the separation section.
**Overlap** `/blog/subdomain-vs-separate-domain-cold-email` covers the subdomain half and is strong. Cite it heavily.

### N3. What cold email infrastructure costs per month, at four scales
`/decide/cold-email-infrastructure-cost/` · 1,800 words · **ownership disclosure required** · ads: primary
**Intent** "cold email infrastructure cost", "how much does cold email cost"
**Thesis** Itemised, at 300, 1,000, 5,000 and 20,000 sends a day: domains, inboxes, sequencer, verification, and the replacement rate nobody budgets for. The last line is what makes most published estimates wrong by a third, because fleets are consumables and a percentage is replaced every quarter.
**Outline** The line items / worked totals at four scales / the replacement line and how to estimate yours / where people underestimate / where people overspend / the cost per thousand delivered
**Link** The conversion block, after the four tables.
**Overlap** `/blog/cold-email-stack-under-200`. Cite it for the low end.

### N4. Google Workspace, Microsoft 365 or Azure: cost and deliverability compared
`/decide/workspace-vs-m365-vs-azure/` · 2,400 words · **ownership disclosure required** · ads: primary
**Intent** "google workspace vs microsoft 365 cold email", "azure vs google cold email"
**Thesis** Three genuinely different products. Workspace costs the most per inbox and is the most forgiving to send from. Microsoft 365 suits a Microsoft-heavy recipient list and gives you better diagnostics. Azure tenants are the cheapest per inbox by a wide margin and concentrate risk, because a hundred inboxes can share a tenant. Pick on your recipient mix and your tolerance for concentrated failure, not on price alone.
**Outline** The three products / cost per inbox at scale / deliverability differences that are real / blast radius per platform / matching to recipient mix / a recommendation per situation
**Link** The conversion block.
**Overlap** `/blog/google-vs-outlook-vs-smtp-cold-email-inboxes`. Direct. This should supersede it or cite it as the canonical.

### N5. Buying cold email domains: where, what to pay, what to avoid
`/decide/buying-cold-email-domains/` · 1,800 words · **ownership disclosure required** · ads: primary
**Intent** "buy cold email domains", "cold email domain names"
**Thesis** Buy boring .com lookalikes of your real domain, fresh rather than aftermarket unless you have checked the history, from a registrar with an API, and expect to pay normal registration prices. The money is wasted on aged domains sold on age alone, and the risk is concentrated in aftermarket domains with a history you did not check.
**Outline** What to buy / naming patterns that work and the ones that look like phishing / fresh versus aftermarket / registrar choice and why the API matters / what to check before purchase / bundled domain and inbox offers
**Link** The conversion block, after the bundling section.
**Overlap** `/blog/free-domains-cold-email-2026`. Cite.

### N6. What to buy for ten clients: an agency infrastructure shopping list
`/b2b/agency-infrastructure-shopping-list/` · 2,000 words · **ownership disclosure required** · ads: primary
**Intent** "cold email agency setup", "agency cold email infrastructure"
**Thesis** A literal list with quantities for ten clients at a typical volume: domains per client, inboxes per domain, the reserve held out of rotation, the verification budget, and the replacement provision. The number that surprises people is the reserve, which is how a client's campaign keeps running the week a domain goes.
**Outline** The assumptions / the list with quantities / per-client isolation and why it constrains the list / the reserve / monthly cost and the replacement provision / what to buy first if the budget is staged
**Link** The conversion block.
**Overlap** `/blog/start-cold-email-agency` and `/blog/run-cold-email-agency-client-data`. Cite both.

### N7. My domain got blocked today: the first two hours
`/checks/domain-blocked-what-now/` · 1,800 words · ads: primary
**Intent** "cold email domain blocked", "domain blocked what to do"
**Thesis** Stop sending from it before anything else, because continuing is what converts a recoverable problem into a permanent one. Then establish what kind of block it is, because a provider suspension, a blocklist listing and a placement collapse look similar from the outside and have completely different prognoses. Two hours of the right sequence decides whether you recover the domain or replace it.
**Outline** Stop sending, and what else to pause / identifying which of the three it is / the evidence to collect now / the recovery path per type / when to accept it is gone / keeping the campaign running meanwhile
**Link** Consultation first in the conversion block, replacement second. This reader wants a person.
**Overlap** `/blog/banned-domain-recovery`, `/blog/domain-recovery-guide`, `/blog/recover-rest-retire-cold-email-domain`. Three close posts. This is the first-two-hours triage; cite all three for the longer path.

### N8. How many Google Workspace accounts can you actually run?
`/how-it-works/how-many-workspace-accounts/` · 1,500 words · ads: test
**Intent** "how many google workspace accounts", "multiple workspace accounts cold email"
**Thesis** There is no published number, and the practical ceiling is set by verification friction, payment instruments and the pattern your provisioning creates, not by a documented limit. Teams hit the wall at different points and misread it as a hard cap. The workable answers are fewer, larger tenants, or a platform where provisioning at volume is expected.
**Outline** Why there is no published limit / what actually stops you / the provisioning pattern problem / fewer larger tenants / when to stop self-provisioning
**Link** The conversion block, after the last section.
**Overlap** None direct. Good territory.

### N9. Connecting prewarmed inboxes to Instantly
`/stack/integrations/instantly-with-prewarmed-inboxes/` · 1,400 words · ads: primary
**Intent** "instantly cold email setup", "connect inboxes to instantly"
**Thesis** Connect by the method the platform prefers, set the per-inbox daily cap to the ramp number rather than the platform default, point tracking at your own domain, and confirm the first send in raw headers before launching the sequence. The default settings are built for an established sender, not for day one on new infrastructure.
**Outline** The connection method and its gotchas / the three settings to change immediately / the ramp schedule to enter / tracking domain configuration / verifying the first send / what to watch in week one
**Link** The conversion block.
**Overlap** None direct. Coordinate numbers with E2 so the ramp figures match exactly.

### N10. Connecting prewarmed inboxes to Smartlead
`/stack/integrations/smartlead-with-prewarmed-inboxes/` · 1,400 words · ads: primary
**Intent** "smartlead inbox setup", "connect inboxes smartlead"
**Thesis** Same structure as N9, with the platform's own connection method, defaults and limits. Written from an actual connection, not from documentation.
**Outline** As N9, platform-specific throughout.
**Overlap** `/blog/connect-smartlead-instantly-hubspot` covers CRM sync, not inbox connection. Complementary.

### N11. Connecting prewarmed inboxes to Email Bison
`/stack/integrations/email-bison-with-prewarmed-inboxes/` · 1,400 words · ads: test
**Intent** "email bison setup", "email bison inboxes"
**Thesis** As N9, platform-specific.
**Outline** As N9.
**Overlap** None.

### N12. Replacing a burned pod without pausing the campaign
`/b2b/replacing-a-burned-pod/` · 1,600 words · ads: test
**Intent** "replace burned cold email domains", "swap out cold email domains"
**Thesis** Replacement is a planned operation, not an emergency, if you hold a reserve. Move the campaign to rested inboxes, bring replacements in at the bottom of the ramp, retire the burned domain rather than trying to recover it if the cause was a provider action, and keep the client's send volume flat throughout. The teams who do this well bought the reserve before they needed it.
**Outline** The swap sequence / keeping volume flat / where the replacements enter the ramp / retire or recover, decided fast / what to tell the client / restocking the reserve
**Link** The conversion block.
**Overlap** `/blog/recover-rest-retire-cold-email-domain`. Cite for the decision; this is the operational swap.
