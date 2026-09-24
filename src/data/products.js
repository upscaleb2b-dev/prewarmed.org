/**
 * One entry per bottom-of-funnel page. Copy lives here, not in templates, so
 * it is reviewable in one diff and so no two pages end up near-duplicates.
 * Each `body` section is unique per product. Do not templatise the prose.
 */
export const products = [
  {
    slug: 'prewarmed-google-inboxes',
    eyebrow: 'Prewarmed Google inboxes',
    h1: 'Prewarmed Google inboxes, ready to send today',
    title: 'Prewarmed Google Inboxes for Cold Email — Official Workspace, Same Day',
    description:
      'Official Google Workspace inboxes, warmed on an aged .com, with super-admin access and DNS configured before handover. Delivered same day.',
    keyword: 'prewarmed google inboxes',
    subhead:
      'Official Google Workspace accounts on a domain we aged for 30 days and warmed for 21 more. Super-admin access, SPF, DKIM and DMARC set before you log in.',
    pricingKey: 'google-prewarmed',
    inlineTool: 'deliverability-checker',
    specs: [
      ['Provider', 'Google Workspace'],
      ['Domain age at handover', '30 days minimum'],
      ['Warming', '21 days, real send and receive'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['DNS', 'SPF · DKIM · DMARC · MX set'],
      ['Access', 'Super Admin'],
      ['Recommended send', '15 per inbox per day'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Agencies onboarding a client this week', 'The client signed. The campaign was supposed to start Monday. Warming your own would put first send in November.'],
      ['Teams whose infrastructure just burned', 'Placement collapsed and you need capacity that is not on the damaged domain, today, not after a delisting appeal.'],
      ['Founders testing outbound', 'You want to know whether the channel works before you invest six weeks in learning to warm domains.'],
    ],
    body: [
      {
        h: 'Why Google, and when not to',
        p: [
          'Google infrastructure places best into Gmail and Workspace recipients, which for most B2B lists is between half and two thirds of the file. If your recipients are predominantly on Google, sending from Google is the lower-friction path.',
          'It is the wrong choice in one specific case: a list weighted heavily toward Microsoft 365 tenants, which is common in enterprise, finance and the public sector. There, Microsoft infrastructure gives you better placement and materially better diagnostics, because Outlook records its filtering verdict in the message headers and Gmail does not.',
          'Run your list through the segmenter before you decide. Buying the wrong provider is the most expensive mistake available at this stage, and it takes four minutes to avoid.',
        ],
      },
      {
        h: 'What super-admin access actually gets you',
        p: [
          'Admin access is the single question that separates a real inbox from a rented seat on someone else\'s tenant. With Super Admin you can add aliases, rotate signatures, set app passwords, connect the mailbox to a sequencer over OAuth rather than basic auth, and export or delete the account. Without it you are a tenant, and when the relationship ends your infrastructure stays with the seller.',
          'Ask any vendor this before you pay. If the answer is anything other than a clear yes, the inboxes are not yours.',
        ],
      },
      {
        h: 'Sending limits, and the number that actually matters',
        p: [
          'Google publishes per-user daily limits. They are not a deliverability recommendation, they are an abuse ceiling, and cold senders who treat them as a target burn domains. The ceiling is not what constrains you; reputation is.',
          'We recommend 15 cold sends per inbox per day as a cruising volume, three inboxes per domain. That is deliberately conservative. It is also the configuration that survives, and survival is the only metric that matters when a domain costs you a month of pipeline to replace.',
        ],
      },
    ],
    faqs: [
      ['Are these real Google Workspace accounts?', 'Yes. Licensed Workspace accounts on a tenant you receive Super Admin access to, not SMTP relays and not shared seats.'],
      ['How many inboxes per domain?', 'Three. More is cheaper per inbox and concentrates risk: when the domain goes, everything on it goes with it.'],
      ['Can I connect these to Smartlead or Instantly?', 'Yes, over OAuth or app password. Set the per-inbox daily cap to your ramp figure rather than the platform default before the first send.'],
      ['What if Google suspends an account?', 'Ask about the replacement policy and get the exact terms in writing before ordering. Suspensions happen to every provider; what differs is how fast the replacement ships.'],
      ['Can I add my own domain later?', 'Yes, though a domain you add yourself starts at zero reputation. The aged, warmed domain is the part you are actually buying.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-domains'],
  },
  {
    slug: 'prewarmed-microsoft-365-inboxes',
    eyebrow: 'Prewarmed Microsoft 365 inboxes',
    h1: 'Prewarmed Microsoft 365 inboxes for Outlook-heavy lists',
    title: 'Prewarmed Microsoft 365 Inboxes for Cold Email — Outlook Ready, Same Day',
    description:
      'Licensed Microsoft 365 mailboxes, warmed on an aged .com, with Exchange admin access and authentication configured. Delivered same day.',
    keyword: 'prewarmed microsoft 365 inboxes',
    subhead:
      'Licensed Microsoft 365 mailboxes on a domain aged 30 days and warmed 21 more, with Exchange admin access and SPF, DKIM and DMARC already set.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'scl-analyzer',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Domain age at handover', '30 days minimum'],
      ['Warming', '21 days, real send and receive'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['DNS', 'SPF · DKIM · DMARC · MX set'],
      ['Access', 'Exchange admin'],
      ['Recommended send', '15 per inbox per day'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Enterprise and mid-market sellers', 'Your ICP runs Microsoft. Sending from Google into a Microsoft-heavy file gives up placement you did not need to give up.'],
      ['Teams that want to see why mail failed', 'Microsoft stamps its filtering verdict into the headers. It is the only major provider that tells you the reason.'],
      ['Anyone diversifying off a single provider', 'A fleet entirely on one platform fails together. Splitting across two is the cheapest correlated-failure insurance there is.'],
    ],
    body: [
      {
        h: 'The diagnostic advantage nobody mentions',
        p: [
          'When Microsoft filters a message it writes a Spam Confidence Level and a set of related markers into the headers. Paste those headers into an analyser and you get a specific cause rather than a guess. Gmail gives you nothing comparable.',
          'For an operator this changes how fast you can fix a problem. A Google-only fleet tells you placement dropped. A Microsoft fleet tells you placement dropped because bulk filtering caught a content pattern, or because the sending IP reputation moved, or because authentication failed at the receiver. One of those is fixable this afternoon.',
        ],
      },
      {
        h: 'Why a 60/40 split is the common answer',
        p: [
          'Most agencies running at volume end up roughly 60 percent Google and 40 percent Microsoft, and they get there by measuring rather than by preference. The right ratio is the one that matches your recipient mix, which you can establish in minutes and most teams never do.',
          'Two practical effects beyond placement: your capacity is not hostage to one provider\'s policy change, and when one platform tightens enforcement you still have a working fleet while you adapt.',
        ],
      },
      {
        h: 'Authentication and sequencer connection',
        p: [
          'Microsoft has been progressively restricting basic authentication. Connect over OAuth where your sequencer supports it. If it only supports SMTP AUTH, confirm the tenant allows it before you build a campaign on the assumption.',
          'Every domain ships with DMARC published. On a domain used only for outbound sequencing nothing legitimate sends except your platform, which makes enforcement both safe and correct once reports confirm it.',
        ],
      },
    ],
    faqs: [
      ['Is this the same as the Azure tenant product?', 'No. These are individual licensed mailboxes in packs. An Azure tenant is a directory of 100 mailboxes at a much lower per-inbox cost with a shared reputation pool. See the comparison.'],
      ['Do I get admin access?', 'Yes, Exchange admin on the tenant.'],
      ['Will these work with my sequencer?', 'Yes. Use OAuth where available. Set per-inbox daily caps to your ramp figure, not the platform default.'],
      ['Why send from Microsoft at all?', 'Because a meaningful share of B2B recipients are on Microsoft, and placement into those mailboxes is better from Microsoft infrastructure.'],
      ['How is DMARC configured?', 'Published before handover. Read the reports for a fortnight before moving policy to enforcement.'],
    ],
    related: ['prewarmed-google-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-outlook-inboxes'],
  },
  {
    slug: 'prewarmed-outlook-inboxes',
    eyebrow: 'Prewarmed Outlook inboxes',
    h1: 'Prewarmed Outlook inboxes for cold email',
    title: 'Prewarmed Outlook Inboxes for Cold Email — Licensed, Warmed, Same Day',
    description:
      'Prewarmed Outlook inboxes on licensed Microsoft 365 mailboxes, on an aged domain with authentication configured. Delivered same day.',
    keyword: 'prewarmed outlook inboxes',
    subhead:
      'If you call them Outlook inboxes, these are them: licensed Microsoft 365 mailboxes on a domain aged 30 days and warmed 21 more, delivered ready to send.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'dmarc-checker',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Also called', 'Outlook inboxes, M365 mailboxes'],
      ['Domain age at handover', '30 days minimum'],
      ['Warming', '21 days, real send and receive'],
      ['DNS', 'SPF · DKIM · DMARC · MX set'],
      ['Access', 'Exchange admin'],
      ['Recommended send', '15 per inbox per day'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Sellers who say Outlook, not M365', 'Same product, plainer name. Nothing about the mailbox differs.'],
      ['Teams migrating off consumer accounts', 'Free Outlook.com accounts are not sending infrastructure. Licensed mailboxes on a domain you control are.'],
      ['Anyone told to avoid Microsoft for cold email', 'That advice is usually a generalisation from a Google-weighted list. Check your own mix first.'],
    ],
    body: [
      {
        h: 'Outlook, Outlook.com, Microsoft 365: which one you are buying',
        p: [
          'The word Outlook covers three different things and the difference decides whether your campaign works. Outlook the mail client is software. Outlook.com is Microsoft\'s free consumer service. Microsoft 365 is the licensed business platform with Exchange Online behind it.',
          'Cold email infrastructure means the third. A free consumer account cannot carry a custom domain properly, cannot be administered, and will not survive volume. If a seller offers cheap Outlook inboxes, establish which of the three they mean before paying.',
        ],
      },
      {
        h: 'What changes when your recipients are on Outlook',
        p: [
          'Microsoft filtering is less forgiving of new senders than Gmail and weights complaint history heavily. The practical consequences are a slower ramp, tighter bounce discipline, and a stronger case for sending from matching infrastructure.',
          'A split result, landing in Gmail and filtering at Outlook, is normal early and is not evidence your setup is broken. It is evidence you should be reading the Microsoft headers, which record the reason.',
        ],
      },
    ],
    faqs: [
      ['Are these Outlook.com accounts?', 'No. Licensed Microsoft 365 mailboxes with Exchange Online, on a domain you control.'],
      ['What is the difference from your Microsoft 365 page?', 'None. Same product, different vocabulary. Buyers search both.'],
      ['Can I use these with any sequencer?', 'Yes. Prefer OAuth over basic authentication where supported.'],
      ['How many can I run?', 'Three per domain at 15 sends a day each is the configuration we recommend and operate.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-azure-inboxes',
    eyebrow: 'Prewarmed Azure tenants',
    h1: 'Prewarmed Azure inboxes: 100 per tenant, ready to send',
    title: 'Prewarmed Azure Inboxes — 100-Inbox Tenants, Volume Cold Email Infrastructure',
    description:
      'A dedicated prewarmed Azure tenant with 100 Exchange Online mailboxes. Volume infrastructure for agencies and high-send teams.',
    keyword: 'prewarmed azure inboxes',
    subhead:
      'A dedicated, prewarmed Azure tenant with 100 Exchange Online mailboxes behind one admin. Volume infrastructure at a fraction of the per-inbox cost.',
    pricingKey: 'azure-tenant',
    inlineTool: 'inbox-rotation-planner',
    specs: [
      ['Product', 'Dedicated Azure tenant'],
      ['Mailboxes', '100 per tenant'],
      ['Mailbox type', 'Exchange Online'],
      ['Access', 'Global Admin, tenant ID, mailbox CSV'],
      ['DNS', 'Configured before handover'],
      ['Recommended send', '10 to 15 per mailbox per day'],
      ['Tenant capacity', '1,000 to 1,500 sends a day, comfortably'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Agencies running many clients', 'Per-inbox economics change entirely at tenant scale. The same budget buys an order of magnitude more sending surface.'],
      ['Teams sending 1,000+ a day', 'Spreading volume across 100 mailboxes at 10 to 15 each is a fundamentally safer shape than pushing 10 mailboxes at 100.'],
      ['Operators who already know the risk model', 'A tenant is one reputation pool. This product rewards discipline and punishes a bad list faster than packs do.'],
    ],
    body: [
      {
        h: 'What a tenant is, and why the cost per inbox collapses',
        p: [
          'A tenant is your own Microsoft cloud directory. Instead of buying individual licensed mailboxes in packs of three, you get a directory containing 100 mailboxes under one Global Admin. The licensing model behind it is different, and that is why per-inbox cost falls by an order of magnitude rather than a percentage.',
          'What you receive: Global Admin credentials, the tenant ID, a CSV of all 100 mailboxes with credentials, and DNS already pointed and authenticated.',
        ],
      },
      {
        h: 'The volume shape that makes this work',
        p: [
          'The reason to buy a tenant is not that it is cheap. It is that it lets you send the same volume in a safer shape. Fifteen hundred emails a day from 100 mailboxes is 15 each, which looks like a hundred people doing their jobs. The same 1,500 from 10 mailboxes is 150 each, which looks like exactly what it is.',
          'Receiving providers evaluate per-sender behaviour. Spreading volume is the single most effective lever available to a high-volume sender, and it is the one that tenant pricing makes affordable.',
        ],
      },
      {
        h: 'The risk you are taking on, stated plainly',
        warn: 'A tenant is a shared reputation pool. One unverified list can affect all 100 mailboxes at once. Verify before sending, stagger the ramp across cohorts, and never point a new tenant at a list you have not cleaned.',
        p: [
          'With packs, a burned domain costs you three inboxes. With a tenant, a serious reputation event can affect the whole directory. That is the trade for the price, and anyone selling you a tenant without saying so is not doing you a favour.',
          'Operate it accordingly: verified lists only, ramp in cohorts of roughly twenty mailboxes rather than all hundred at once, and monitor bounce rate daily for the first fortnight. Teams who do this run tenants for a long time. Teams who treat a tenant as cheap inboxes do not.',
        ],
      },
    ],
    faqs: [
      ['What is an Azure tenant for cold email?', 'Your own Microsoft cloud directory containing 100 Exchange Online mailboxes under one admin, delivered prewarmed with DNS configured.'],
      ['Do I get Global Admin?', 'Yes, plus the tenant ID and a CSV of all mailbox credentials.'],
      ['How is this different from Microsoft 365 packs?', 'Packs are three licensed mailboxes with isolated risk. A tenant is a hundred mailboxes sharing one reputation pool at far lower per-inbox cost.'],
      ['Can I bring my own domains into the tenant?', 'Yes, though a domain you add yourself starts at zero reputation and needs its own aging and warming.'],
      ['How many sends a day can a tenant carry?', 'At our recommended 10 to 15 per mailbox, comfortably 1,000 to 1,500 a day. Higher is possible and increases risk across the whole pool.'],
      ['What happens if the tenant gets flagged?', 'Get the replacement terms in writing before ordering. Tenant-level events are rarer than domain burns but larger when they happen.'],
    ],
    related: ['prewarmed-entra-inboxes', 'prewarmed-microsoft-365-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-entra-inboxes',
    eyebrow: 'Prewarmed Entra tenants',
    h1: 'Prewarmed Entra inboxes (Microsoft Entra ID tenants)',
    title: 'Prewarmed Entra Inboxes — Microsoft Entra ID Tenants for Cold Email',
    description:
      'Prewarmed Microsoft Entra ID tenants with 100 Exchange Online mailboxes. What changed from Azure AD, and why it does not affect sending.',
    keyword: 'prewarmed entra inboxes',
    subhead:
      'Entra ID is what Azure AD is called now. If you are searching for Entra inboxes, this is the same tenant product, explained in the current vocabulary.',
    pricingKey: 'azure-tenant',
    inlineTool: 'nameserver-checker',
    specs: [
      ['Identity layer', 'Microsoft Entra ID, formerly Azure AD'],
      ['Mailboxes', '100 Exchange Online per tenant'],
      ['Access', 'Global Admin in the Entra admin centre'],
      ['Provisioning', 'Bulk CSV user creation'],
      ['DNS', 'Configured before handover'],
      ['Recommended send', '10 to 15 per mailbox per day'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Technical buyers using current Microsoft vocabulary', 'Your admin centre says Entra. Most vendors still say Azure AD. Same directory.'],
      ['Teams standing up identity alongside mail', 'If you are managing users, conditional access and MFA, the Entra admin centre is where you will live.'],
      ['Anyone comparing quotes', 'Sellers quoting Azure AD and sellers quoting Entra are quoting the same thing. Compare on mailbox count, admin access and warming, not on the name.'],
    ],
    body: [
      {
        h: 'Azure AD became Entra ID. What that means for sending: nothing',
        p: [
          'Microsoft renamed Azure Active Directory to Entra ID. The identity layer, the directory, the admin surface and the licensing are the same product with a new name and a redesigned admin centre. No deliverability characteristic changed.',
          'We keep separate pages because buyers search both terms and deserve to land on copy written in the vocabulary they used. If you arrived here from an Azure search, the tenant page covers the same product with more detail on the volume model.',
        ],
      },
      {
        h: 'Conditional access and MFA, configured for sequencer authentication',
        p: [
          'This is where Entra tenants trip people up. Microsoft applies security defaults to new tenants, which enforce MFA and can block the authentication method your sequencer uses. A tenant that looks correctly provisioned will simply refuse to connect.',
          'Tenants ship configured for sequencer authentication. If you change the policy yourself, change it deliberately: the failure mode is silent, and you will spend an afternoon debugging the sequencer before you think to look at conditional access.',
        ],
      },
      {
        h: 'Bulk provisioning at a hundred mailboxes',
        p: [
          'Creating a hundred users by hand is a day nobody should spend. Entra supports bulk CSV provisioning, and tenants arrive with the mailboxes already created, licensed and warmed. You receive the CSV, import it into your sequencer, and start.',
          'The part that cannot be bulk-provisioned is reputation. That is the 51 days that happened before the tenant reached you.',
        ],
      },
    ],
    faqs: [
      ['Is Entra ID different from Azure AD?', 'Only in name and admin interface. Same directory, same licensing, no deliverability difference.'],
      ['Should I buy the Entra page or the Azure page?', 'Same product. Buy whichever page you understood better.'],
      ['Do I get Global Admin in the Entra admin centre?', 'Yes.'],
      ['Will conditional access block my sequencer?', 'Not as delivered. Tenants arrive configured for sequencer authentication. If you alter the policy, expect to re-test the connection.'],
      ['Can I add users beyond the hundred?', 'Yes, subject to licensing. New mailboxes start at zero reputation.'],
    ],
    related: ['prewarmed-azure-inboxes', 'prewarmed-microsoft-365-inboxes', 'prewarmed-inboxes'],
  },
  {
    slug: 'prewarmed-domains',
    eyebrow: 'Prewarmed domains',
    h1: 'Prewarmed domains with sending history, not just age',
    title: 'Prewarmed Domains for Cold Email — Aged 30 Days, Warmed 21, DNS Set',
    description:
      'Prewarmed .com domains aged 30 days and warmed 21 more, with SPF, DKIM, DMARC and MX configured. Included free with every inbox pack.',
    keyword: 'prewarmed domains',
    subhead:
      'Thirty days of registration age, then twenty-one days of real sending and receiving, with authentication published throughout. Included free with every inbox pack.',
    pricingKey: 'domain-standalone',
    inlineTool: 'blacklist-checker',
    specs: [
      ['Aging', '30 days minimum before first send'],
      ['Warming', '21 days of real send and receive'],
      ['TLD', '.com or .co'],
      ['DNS', 'SPF · DKIM · DMARC · MX set and published'],
      ['Tracking', 'Custom tracking hostname, not shared'],
      ['History', 'Drop and blocklist history checked before acquisition'],
      ['Included', 'Free with every inbox pack'],
      ['Delivery', 'Same day, business days'],
    ],
    whoFor: [
      ['Anyone who has been sold an aged domain', 'Age is the attribute marketplaces sell because it is the one they can measure. It is not the one that matters.'],
      ['Teams rebuilding after a burn', 'Replacement capacity on a clean domain, today, rather than a delisting appeal that may not stick.'],
      ['Operators spreading risk', 'More domains at fewer inboxes each is the correct shape. Free domains are what makes it affordable.'],
    ],
    body: [
      {
        h: 'Why thirty days of aging, and not seven',
        p: [
          'A domain that starts sending in its first days gets listed on the major blacklists almost immediately, and an early listing is the hardest kind to undo. Registration age is one of the very few signals a receiving provider can check that a sender cannot fake or accelerate.',
          'It is also the cheapest protection available, and the step most sellers skip, because waiting costs them inventory turnover. When a vendor advertises a prewarmed domain delivered in 48 hours, that is the part they left out.',
        ],
      },
      {
        h: 'Aged, fresh and prewarmed are three different products',
        p: [
          'Fresh means registered recently with no history. Aged means registered a long time ago, which tells you nothing about whether it ever sent email and may tell you something bad about what it sent. Prewarmed means it has aged and then sent and received real mail under authentication that is still in place.',
          'Only the third has a reputation to transfer. An aftermarket domain registered in 2011, dropped four times and last used for affiliate spam is worse than one registered last month, and the marketplace listing will only tell you about 2011.',
        ],
      },
      {
        h: 'Why the domains are free',
        p: [
          'A .com costs about ten dollars a year. The fifty-one days of aging, authentication, engagement and testing is where the cost actually sits, and that work lives in the mailboxes rather than in the registration. So we do not charge for domains.',
          'It also means you can spread across more domains than you would if you were paying per domain, which is how a fleet should be built anyway. Concentration is what turns one bad week into a dead campaign.',
        ],
      },
    ],
    faqs: [
      ['What makes a domain prewarmed rather than aged?', 'Aged means old. Prewarmed means aged and then used to send and receive real mail under published authentication. Only the second builds reputation.'],
      ['Do I own the domain?', 'Confirm registrar access and nameserver control in writing before ordering, from us or anyone. Domains on a vendor nameserver are the vendor\'s.'],
      ['Can I point it at my main website?', 'Yes, forwarding is standard practice and makes the domain look like what it claims to be.'],
      ['What happens if a domain burns?', 'Get the replacement terms in writing before ordering. Recovery is slow and often does not stick, so replacement speed is the thing to ask about.'],
      ['Are non-.com domains available?', 'Yes, via support. TLD carries real reputation differences, so ask before assuming a cheaper TLD is equivalent.'],
    ],
    related: ['prewarmed-inboxes', 'prewarmed-google-inboxes', 'prewarmed-azure-inboxes'],
  },
];

export const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
