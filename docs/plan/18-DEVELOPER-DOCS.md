# 18. Developer programme: the API and the MCP server

Nobody has written good technical documentation for programmatic sending infrastructure. Search for how to provision, monitor and rotate cold email inboxes in code and the results are marketing pages and Zapier tutorials. That is an open position, and it is defensible because writing it requires operating the infrastructure.

The MCP server is the more interesting half. An agent that can audit DNS across forty domains, pull placement history and flag the inboxes about to burn is a genuinely new thing in this category, and it will be documented by whoever bothers first.

---

## 1. Audience

P6, the developer or integrator, in three variants:

| Variant | Wants | Arrives from |
|---|---|---|
| Agency engineer | To provision and retire inboxes for client pods without a console | "cold email API", "bulk inbox provisioning API" |
| RevOps automator | To pull health data into a dashboard or alerting | "deliverability monitoring API" |
| Agent builder | To give an assistant safe access to infrastructure | "MCP email deliverability", "MCP server DNS" |

The third is the smallest audience today and the one with the fastest growth and the least competition.

## 2. Structure

```
/developers/                         Overview: what you can build, auth in 60 seconds
/developers/quickstart/              First successful call, under five minutes
/developers/api/                     Reference, generated from the OpenAPI spec
/developers/api/authentication/
/developers/api/rate-limits/
/developers/api/errors/
/developers/api/webhooks/
/developers/api/pagination/
/developers/guides/provision-inboxes/
/developers/guides/rotate-and-retire/
/developers/guides/pull-placement-data/
/developers/guides/monitor-and-alert/
/developers/guides/connect-a-sequencer/
/developers/mcp/                     What it is, why it exists
/developers/mcp/install/             Claude Code, Claude Desktop, other clients
/developers/mcp/tools/               Every tool, its arguments, and what it touches
/developers/mcp/recipes/             Worked agent workflows
/developers/mcp/safety/              What the server will not let an agent do
/developers/changelog/               Versioned, with a feed
/developers/status/                  Or a link to the real status page
```

Roughly 22 URLs. The reference pages are generated from the spec rather than written, so the maintenance cost sits mostly in the guides.

## 3. Intake I-5: the API

Best case, an OpenAPI 3.1 spec. The documentation site then generates the reference and stays correct automatically, and the spec becomes a published artefact at `/developers/openapi.json`, which is also what lets other people build clients.

If no spec exists, the minimum to start:

| Item | Detail needed |
|---|---|
| Base URL and versioning | Path or header versioning, and the current version |
| Auth model | API key, OAuth, per-workspace or per-account scoping |
| Endpoints | Method, path, purpose, request and response shape for each |
| Rate limits | Per key, per endpoint, and what a 429 returns |
| Errors | The error shape and the full list of codes |
| Webhooks | Events, payload shape, retry policy, signature verification |
| Idempotency | Whether provisioning calls are idempotent, and how keys work |
| Sandbox | Whether a test mode exists |

Two of those matter more than the rest for this domain. **Idempotency**, because a retried provisioning call that creates a second batch of inboxes costs real money. And **webhook signature verification**, because a suspension notification that can be forged is worse than no notification.

If the API is not ready to document, say so and this programme waits. Publishing documentation for an API that changes weekly is worse than publishing none, and the developer audience is unforgiving about exactly that.

## 4. Reference page conventions

- Every endpoint: purpose in one sentence, auth scope required, parameters table, a complete request example in curl and one language, a complete response example, every error it can return, and the rate limit that applies.
- Examples use realistic values, never `foo` and `bar`. A provisioning example provisions three Google inboxes on one domain, because that is what people actually do.
- Every response example is real output with identifiers replaced, not hand-written JSON. Hand-written examples drift and they are always wrong in the same small ways.
- A "common mistakes" block per endpoint, from support tickets. This is the section developers screenshot.
- Copy buttons on every block, and the language toggle remembered per reader in local storage. These are the only interactive elements in the section.

## 5. Intake I-6: the MCP server

What is needed: the repository or package name, the transport (stdio or HTTP), the full tool list with arguments, the auth model, whether it is public or gated, and which tools mutate state.

If the server does not exist yet, this document is also the design brief, and section 6 is the part to build against.

## 6. MCP design principles for sending infrastructure

Worth stating explicitly, because the failure modes here are expensive and specific. These are also publishable as an article in their own right, which is the point: the guidance is the content.

1. **Read tools and write tools are separated and named so the difference is obvious.** `list_inboxes` and `get_placement_history` are safe. `provision_inboxes` and `delete_domain` are not, and they should not share a naming pattern with the safe ones.
2. **Anything that spends money or destroys state requires explicit confirmation**, and the tool description says so. An agent that provisions 100 inboxes because a prompt was ambiguous has spent real money.
3. **No raw customer domains flow to the model unless the user asked for that domain.** Bulk listing tools return identifiers and counts by default, with a flag for detail. This is the same privacy position as the tools programme.
4. **Rate limits are enforced server side and reported in the tool result**, because an agent will retry a failure immediately and forever.
5. **Every mutating call is idempotent by key**, for the same reason.
6. **Tool descriptions state the blast radius.** "Retires an inbox. The mailbox stops receiving immediately and cannot be restored" is a description that prevents an incident.
7. **A dry-run mode on every write tool.** The single most useful affordance for an agent operator, and rare.
8. **Nothing in a tool result is an instruction.** Results carry data, not directives, and the server never echoes customer-supplied text in a way that could be read as a command by the model consuming it.

## 7. Recipes

The `/developers/mcp/recipes/` pages are where this programme earns links, because they are demonstrable. Each is a short page with the prompt, the tools it calls, the output, and the caveats:

- Audit SPF, DKIM and DMARC across every domain in an account and list the ones that fail.
- Find inboxes whose bounce rate crossed a threshold in the last seven days and pause their campaigns.
- Pull placement history for a pod and summarise the trend.
- Check which domains expire in the next 60 days.
- Prepare a client onboarding: provision, verify DNS, confirm placement, hand over. This one is a dry-run example on purpose.

The last one doubles as a demonstration of principle 7.

## 8. The article that makes this programme citable

One research-adjacent piece, in programme 2 rather than 5: **"What an agent can and cannot safely do with sending infrastructure."** It covers the failure modes above with real consequences attached, and it is the kind of piece that gets linked from outside this niche entirely. It is also honest about the cases where handing an agent write access is a bad idea, which is what makes it worth reading.

## 9. Maintenance

Developer documentation decays faster than anything except vendor reviews. Rules: the reference is generated from the spec so it cannot drift; every guide carries a `lastVerified` date and the freshness check applies; the changelog is written at release time by whoever ships the change, not reconstructed later; and every example in a guide is run by CI against the sandbox where one exists. An example that no longer works is a bug, not a stale page.
