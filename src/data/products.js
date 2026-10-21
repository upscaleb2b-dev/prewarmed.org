/**
 * One entry per bottom-of-funnel page. Copy lives here, not in templates, so
 * it is reviewable in one diff and so no two pages end up near-duplicates.
 * Each `body` section is unique per product. Do not templatise the prose.
 */
export const products = [
  {
    slug: 'prewarmed-google-inboxes',
    alt: { lead: 'Not needed until later in the quarter?', slug: 'fresh-google-inboxes', label: 'Fresh Google inboxes cost less and are warmed for you before they send' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Google inboxes',
    h1: 'Prewarmed Google inboxes, ready to send on arrival',
    title: 'Prewarmed Google Workspace Inboxes for Cold Email',
    description:
      'Official Google Workspace inboxes, warmed on an aged .com, with DNS configured before handover. Delivered within 48 to 72 hours.',
    keyword: 'prewarmed google inboxes',
    card: 'Real Google Workspace accounts on an aged domain, ready on arrival.',
    subhead:
      'Licensed Workspace accounts on a domain aged 30 days and warmed 21, with the email records set up before you get it.',
    pricingKey: 'google-prewarmed',
    inlineTool: 'deliverability-checker',
    specs: [
      ['Provider', 'Google Workspace'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Suggested volume', '15 cold emails per inbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Agencies onboarding a client this week', 'The client signed. The campaign was supposed to start Monday. Warming your own would put first send in November.'],
      ['Teams whose infrastructure just burned', 'Placement collapsed and you need capacity that is not on the damaged domain within days, not after a delisting appeal.'],
      ['Founders testing outbound', 'You want to know whether the channel works before you invest six weeks in learning to warm domains.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {},
      },
      {
        h: 'Why Google, and when not to',
        tool: 'esp-segmenter',
        p: [
          'Email sent from Google lands in the inbox more reliably when the person receiving it is also on Google. For most business lists that is somewhere between half and two thirds of the people on it. If most of your list is on Gmail or Google Workspace, sending from Google is the easier path.',
          'There is one case where it is the wrong choice: a list made up mostly of people on Microsoft 365, which is common in large companies, finance and government. There, sending from Microsoft lands better, and it also tells you far more when something goes wrong, because Outlook writes the reason it filtered a message into the email itself. Gmail does not.',
          'Check your list before you decide. Buying inboxes from the wrong provider is the most expensive mistake you can make at this point, and it takes about four minutes to avoid.',
        ],
      },
      {
        h: 'Why three inboxes to a domain',
        p: [
          'Three is the number that keeps a failure small. Everything on a domain shares its reputation, so when a domain stops landing, every inbox on it goes at the same time. More inboxes per domain is cheaper per inbox and concentrates the damage into one event.',
          'Spread across more domains at three each and a bad week costs you three inboxes rather than thirty. That shape is why the domain is included rather than charged for: paying per domain pushes people toward the concentration you want to avoid.',
        ],
      },
      {
        h: 'Sending limits, and the number that actually matters',
        p: [
          'Google publishes a daily sending limit per account. That number is the point where they stop you, not advice on what is safe to send. People who treat it as a target lose their domains. What actually limits you is how much Gmail and Outlook trust you, not the published cap.',
          'We suggest 15 cold emails per inbox per day as a steady rate, with three inboxes on each domain. That is deliberately cautious. It is also the setup that keeps working, and staying alive is the only thing that matters when replacing a domain costs you a month of meetings.',
        ],
      },
          {
        h: 'What the first thirty days should actually look like',
        p: [
          'A prewarmed inbox arrives with reputation, not immunity. The domain has sent and received real mail for twenty-one days, so Gmail already has a file on it, but that file records a quiet, well-behaved sender. Open at two hundred a day and you have not used the reputation, you have contradicted it.',
          'Week one: ten to fifteen a day per inbox, which on three inboxes is thirty to forty-five. Week two: hold. Week three: step up only if replies are coming and bounces stay under two per cent. Week four onward: fifteen a day per inbox, indefinitely. That is not a ramp toward a bigger number. Fifteen is the number.',
          'The teams who burn prewarmed domains almost never do it through volume alone. They do it by pairing a sudden volume jump with a list they have not verified, which produces a bounce spike on a domain with three weeks of history and no tolerance built up yet.',
        ],
      },
      {
        h: 'Connecting to your sequencer without undoing the warming',
        p: [
          'Every sequencer ships with defaults set for a mature domain, and every one of them will happily send far more than fifteen a day from a brand new connection. Change the per-inbox daily cap before the first send, not after the first week.',
          'Turn the sequencer\'s own warmup off on these inboxes. It is built to create sending history where none exists, and there already is history here: history built on real traffic rather than on a pool of accounts emailing each other. Running a warmup network on top of it adds the exact fingerprint the twenty-one days were spent avoiding.',
          'Set a minimum gap between sends, enable the sequencer\'s bounce protection, and connect over OAuth where the tool supports it. An app password works and is sometimes the only option, but OAuth survives security-policy changes that quietly break app passwords mid-campaign.',
        ],
      },
      {
        h: 'When prewarmed is the wrong buy',
        p: [
          'If your campaign is not starting for six weeks, you are paying a premium for time you are not going to use. Fresh inboxes cost about a third as much at volume, and their 14 to 21 days of warmup, which Warm Inboxes runs for you, fit inside the window you were going to wait through anyway.',
          'If your list is mostly Microsoft-hosted, the premium is going to the wrong platform. Check before you order rather than after.',
          'And if the last three campaigns failed on copy or targeting, infrastructure is not the constraint. Better inboxes deliver a message nobody wanted to read, faster. We would rather say that now than sell you the wrong thing twice.',
        ],
      },
    ],
    faqs: [
      ['Are these real Google Workspace accounts?', 'Yes. Licensed Google Workspace accounts on a domain we age and warm, not SMTP relays and not shared seats.'],
      ['How many inboxes per domain?', 'Three. More is cheaper per inbox and concentrates risk: when the domain goes, everything on it goes with it.'],
      ['Can I connect these to Smartlead or Instantly?', 'Yes, over OAuth or app password. Set the per-inbox daily cap to your ramp figure rather than the platform default before the first send.'],
      ['What if Google suspends an account?', 'Order a fresh batch. Suspensions happen on every provider, and we do not chase a recovery, because it takes weeks and the sending reputation rarely comes back with the account. A new batch can be ordered the same day and arrives within 48 to 72 hours, which is both quicker and cleaner for deliverability.'],
      ['Can I add my own domain later?', 'Yes, though a domain you add yourself starts at zero reputation. The aged, warmed domain is the part you are actually buying.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-domains'],
  },
  {
    slug: 'prewarmed-microsoft-365-inboxes',
    alt: { lead: 'Building capacity rather than launching?', slug: 'fresh-microsoft-365-inboxes', label: 'Fresh Microsoft 365 inboxes cost less and are warmed for you before they send' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Microsoft 365 inboxes',
    h1: 'Prewarmed Microsoft 365 inboxes for Outlook-heavy lists',
    title: 'Prewarmed Microsoft 365 Inboxes for Cold Email',
    description:
      'Licensed Microsoft 365 mailboxes for cold email, warmed on an aged .com with authentication configured. Delivered in 48 to 72 hours by Warm Inboxes.',
    keyword: 'prewarmed microsoft 365 inboxes',
    card: 'Licensed Microsoft mailboxes, best for Outlook-heavy lists.',
    subhead:
      'Paid Microsoft 365 mailboxes on a domain aged 30 days and warmed 21, with the email records set up before you get it.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'scl-analyzer',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Suggested volume', '8 cold emails per inbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Enterprise and mid-market sellers', 'The companies you are targeting run Microsoft. Sending from Google into a Microsoft-heavy file gives up placement you did not need to give up.'],
      ['Teams that want to see why mail failed', 'Microsoft stamps its filtering verdict into the headers. It is the only major provider that tells you the reason.'],
      ['Anyone diversifying off a single provider', 'A fleet entirely on one platform fails together. Splitting across two is the cheapest correlated-failure insurance there is.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Eight a day per inbox from the first send, three inboxes to a domain, and keep it there rather than climbing.', split: 'You bought Microsoft because the list skews Microsoft. Confirm that before the first send rather than assuming it. Anything Google-hosted in there lands better from Google, and splitting the file takes minutes.'},
      },
      {
        h: 'The diagnostic advantage nobody mentions',
        p: [
          'When Microsoft sends a message to junk, it writes a score and a few related notes into the hidden part of the email. Paste that into a header analyser and you get the actual reason, not a guess. Gmail gives you nothing like it.',
          'That changes how fast you can fix things. If you only send from Google, all you know is that fewer emails are landing. With Microsoft you find out whether it was something in your copy, a problem with the server you send from, or your records failing a check. One of those you can fix this afternoon.',
        ],
      },
      {
        h: 'Why a 60/40 split is the common answer',
        p: [
          'Most agencies sending a lot of cold email end up around 60 percent Google and 40 percent Microsoft, and they get there by measuring, not by guessing. The right split is whatever matches your list. You can work that out in minutes, and most teams never do.',
          'There are two other benefits. One provider changing its rules cannot take out your whole operation, and when one of them cracks down you still have working inboxes while you adjust.',
        ],
      },
      {
        h: 'Authentication and sequencer connection',
        p: [
          'Microsoft has been shutting off the older, simpler way of logging in. Connect your sending tool using the modern method where it offers one. If your tool only supports the old way, check it still works before you build a campaign around it.',
          'Every domain arrives with DMARC already set up. On a domain you only use for cold email, nothing else should ever be sending from it, which makes the strictest setting both safe and correct once the reports confirm it.',
        ],
      },
          {
        h: 'Why Outlook tells you more than Gmail ever will',
        p: [
          'This is the underrated reason to send from Microsoft, and almost nobody buying infrastructure factors it in. When Outlook filters or rejects a message, it writes the reason into the bounce itself as a diagnostic code. You get a specific, actionable string back.',
          'Gmail does not do this. A message that lands in spam at Gmail looks identical, from the sender\'s side, to one that landed in the inbox. You find out from your reply rate, three weeks later, by inference.',
          'On a Microsoft-heavy list that difference compounds. You find out a domain is in trouble within hours instead of after a fortnight of sending into a folder nobody opens, and the fix arrives while the campaign is still worth saving.',
        ],
      },
      {
        h: 'Who is actually on Microsoft, and why it matters more than preference',
        tool: 'esp-segmenter',
        p: [
          'Enterprise, finance, manufacturing, healthcare, government and most companies above a few hundred staff skew heavily to Microsoft 365. The larger and older the company, the more likely it is. Startups and agencies skew Google.',
          'Matching the sending platform to the receiving platform is worth real placement, because both providers extend more trust to mail that originates inside their own ecosystem. It is not a guarantee and nobody honest will tell you it is, but it is the single largest lever available to you before you have written a word of copy.',
          'So the order of operations is: check what your list is on, then buy. Not the reverse. A Microsoft-heavy list sent from Google inboxes is the most common and most expensive misconfiguration in cold email, and it takes a few minutes to rule out.',
        ],
      },
      {
        h: 'Your mailboxes are not sharing a workspace',
        p: [
          'Every domain here sits in its own isolated workspace. That matters because where several clients share one Microsoft organisation, reputation events travel between them: a sender you have never met can cost you placement, and you would spend a week auditing your own list and copy before the real cause occurred to you.',
          'Isolation removes that entirely. The only sending reputation touching your mailboxes is the one you built, which means every result you see, good or bad, is yours to read and yours to fix.',
        ],
      },
      {
        h: 'Ramp, and the two numbers that decide whether this holds',
        p: [
          'Eight cold emails per inbox per day, three inboxes to a domain. Hold that for the first fortnight even though these arrived warmed, then keep holding it, because eight is the steady state rather than a starting point.',
          'The two numbers to watch are bounce rate and reply rate, and they fail in opposite directions. Bounces above about two per cent mean your list, not your infrastructure, and no amount of warming survives a bad list. A reply rate that falls while bounces stay flat usually means placement has moved to a folder. On Microsoft the diagnostic codes will tell you which, and that is the whole argument for this platform.',
        ],
      },
    ],
    faqs: [
      ['Is this the same as the Azure tenant product?', 'No. These are individual paid mailboxes sold in packs. An Azure tenant is one account holding 100 mailboxes at a much lower cost per inbox, but all 100 share one reputation. See the comparison.'],
      ['Will these work with my sequencer?', 'Yes. Use OAuth where available. Set per-inbox daily caps to your ramp figure, not the platform default.'],
      ['Why send from Microsoft at all?', 'Because a meaningful share of B2B recipients are on Microsoft, and placement into those mailboxes is better from Microsoft infrastructure.'],
      ['How is DMARC configured?', 'Published before handover. Read the reports for a fortnight before moving policy to enforcement.'],
    ],
    related: ['prewarmed-google-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-outlook-inboxes'],
  },
  {
    slug: 'prewarmed-outlook-inboxes',
    alt: { lead: 'Start date three weeks or more out?', slug: 'fresh-microsoft-365-inboxes', label: 'Fresh Microsoft 365 inboxes cost less and are warmed for you before they send' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Outlook inboxes',
    h1: 'Prewarmed Outlook inboxes for cold email',
    title: 'Prewarmed Outlook Inboxes for Cold Email, Ready to Send',
    description:
      'Prewarmed Outlook inboxes on licensed Microsoft 365 mailboxes, on an aged domain with authentication configured. Delivered in 48 to 72 hours.',
    keyword: 'prewarmed outlook inboxes',
    subhead:
      'If you call them Outlook inboxes, these are them. Paid Microsoft 365 mailboxes, aged 30 days and warmed 21, ready the day you get them.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'dmarc-checker',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Also called', 'Outlook inboxes, M365 mailboxes'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Suggested volume', '8 cold emails per inbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Sellers who say Outlook, not M365', 'Same product, plainer name. Nothing about the mailbox differs.'],
      ['Teams migrating off consumer accounts', 'Free Outlook.com accounts are not sending infrastructure. Licensed mailboxes on a domain you control are.'],
      ['Anyone told to avoid Microsoft for cold email', 'That advice is usually a generalisation from a Google-weighted list. Check your own mix first.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Eight a day per inbox from the first send, three inboxes to a domain, and keep it there rather than climbing.'},
      },
      {
        h: 'Outlook, Outlook.com, Microsoft 365: which one you are buying',
        p: [
          'Outlook means three different things, and which one you buy decides whether your campaign works. Outlook the app is just software for reading email. Outlook.com is Microsoft\'s free personal email. Microsoft 365 is the paid business product, and that is the one that matters here.',
          'For cold email you want the third one. A free personal account cannot use your own domain properly and will not hold up once you send at any real volume. If someone offers you cheap Outlook inboxes, find out which of the three they mean before you pay.',
        ],
      },
      {
        h: 'What changes when your recipients are on Outlook',
        p: [
          'Microsoft is harder on new senders than Gmail, and it pays close attention to how often people mark your mail as spam. In practice that means building up your volume more slowly, keeping bounces low, and a stronger reason to send from Microsoft if your list is on Microsoft.',
          'Landing in Gmail but going to junk at Outlook is normal early on and does not mean your setup is broken. It means you should read what Microsoft wrote into the email, because it tells you why.',
        ],
      },
    ],
    faqs: [
      ['Are these Outlook.com accounts?', 'No. Licensed Microsoft 365 mailboxes with Exchange Online, on a domain you control.'],
      ['What is the difference from your Microsoft 365 page?', 'None. Same product, different vocabulary. Buyers search both.'],
      ['Can I use these with any sequencer?', 'Yes. Prefer OAuth over basic authentication where supported.'],
      ['How many can I run?', 'Three per domain at 8 sends a day each is the configuration we recommend and operate.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-azure-inboxes',
    family: 'prewarmed',
    alt: { lead: 'Start date three weeks or more out?', slug: 'fresh-azure-inboxes', label: 'A fresh Azure tenant costs less and is warmed for you before it sends' },
    eyebrow: 'Prewarmed Azure tenants',
    h1: 'Prewarmed Azure inboxes: 100 mailboxes per tenant',
    title: 'Prewarmed Azure Inboxes: 100-Mailbox Tenants',
    description:
      'A dedicated prewarmed Azure tenant with 100 Exchange Online mailboxes. Volume infrastructure for agencies and high-send teams.',
    keyword: 'prewarmed azure inboxes',
    card: '100 mailboxes in one account. For high volume.',
    subhead:
      'Your own Azure account with 100 mailboxes, warmed and ready. One flat price per tenant, the lowest cost per inbox on this site.',
    pricingKey: 'azure-tenant',
    inlineTool: 'inbox-rotation-planner',
    specs: [
      ['Product', 'Dedicated Azure tenant'],
      ['Mailboxes', '100 per tenant'],
      ['Cost per inbox', '$0.69 monthly, $0.60 on 2 months, $0.50 quarterly'],
      ['Mailbox type', 'Exchange Online, the business version'],
      ['What you get', 'Account ID and the full mailbox list'],
      ['Email records', 'Set up before you get it'],
      ['Suggested volume', '2 cold emails per mailbox per day'],
      ['Total capacity', 'Up to 200 cold emails a day at 100 mailboxes'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Agencies running many clients', 'Per-inbox economics change entirely at tenant scale. The same budget buys an order of magnitude more sending surface.'],
      ['Teams who want volume without volume per address', 'Spreading sending across 100 mailboxes at two each is a fundamentally safer shape than pushing ten mailboxes at twenty.'],
      ['Operators who want the lowest cost per inbox', 'One flat price for a hundred warmed mailboxes is $0.50 an inbox on a quarterly commit, the cheapest sending capacity on this site.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Two cold emails per mailbox per day. That is the whole shape of a tenant: a hundred quiet addresses rather than ten busy ones.', split: 'An Entra tenant sends from Microsoft, so the Microsoft-hosted half of your list is the half this is best at. Split the file and point the rest at Google infrastructure.'},
      },
      {
        h: 'What a tenant is, and why the cost per inbox collapses',
        p: [
          'A tenant is your own Microsoft account, the kind a whole company would have. Instead of buying mailboxes three at a time, you get one account holding 100 mailboxes. Microsoft charges for it differently, which is why the cost per inbox drops by about ten times rather than by a few percent.',
          'You get the account ID, a spreadsheet of all 100 mailboxes and their passwords, and the email records already set up.',
        ],
      },
      {
        h: 'The volume shape that makes this work',
        p: [
          'The reason to buy a tenant is not that it is cheap. It is that you can send from far more addresses, at a rate per address that does not look like software. We run two cold emails per mailbox per day here. Two hundred a day across a hundred mailboxes is a hundred people sending a couple of emails each, which is simply what a company looks like.',
          'Two is far lower than the fifteen we suggest on a Google pack or the eight on Microsoft, and that is the point of the shape rather than a limitation of the platform. When mailboxes are cheap enough to buy a hundred of, the right move is to spend that surplus on a quieter per-address rate instead of on more total volume. Volume comes from the number of addresses, not from working each one harder.',
          'Gmail and Outlook judge each sending address on its own behaviour, not your campaign\'s. Two a day from a hundred addresses and twenty a day from ten are the same volume and nothing like the same risk. Tenant pricing is what makes the first one affordable.',
        ],
      },
      {
        h: 'The risk you are taking on, stated plainly',
        warn: 'Every mailbox in a tenant shares one reputation, so a single unchecked list can damage all hundred at once. Verify every list before it touches the tenant.',
        p: [
          'If you buy in packs and a domain stops working, you lose three inboxes. With a tenant, something serious can affect all 100 at once. That is the trade you make for the lower price, and anyone selling you a tenant without mentioning it is not doing you a favour.',
          'So run it carefully. Only send to verified lists, start about twenty mailboxes at a time rather than all hundred, and check your bounce rate every day for the first two weeks. Teams who do this keep tenants running for a long time. Teams who treat them as cheap inboxes do not.',
        ],
      },
          {
        h: 'What an isolated tenant actually buys you',
        p: [
          'A tenant is your own Microsoft Entra organisation. Nobody else\'s mailboxes are in it, which removes the failure mode where another provider\'s client damages your placement from somewhere you cannot see or audit.',
          'It also changes what a bad week costs. On shared infrastructure you are exposed to decisions made by senders you will never meet. On your own tenant the only sending reputation that touches your mailboxes is the reputation you created, which means every problem is one you can diagnose and fix rather than one you can only escalate.',
          'The trade is that you now own the whole surface. There is nobody else\'s good behaviour propping you up either, so the ramp discipline matters more here than anywhere else on this site.',
        ],
      },
      {
        h: 'Always a full hundred, so run it like one',
        p: [
          'Every prewarmed tenant comes with a hundred mailboxes on it. That is what makes it the lowest cost per inbox on this site, and it also means one reputation event touches a hundred mailboxes at once.',
          'You contain that by how you run it, not by how full it is: verified lists only, mailboxes brought online about twenty at a time, and a second tenant rather than a higher rate when you need more volume.',
          'The honest rule: if this is additional capacity alongside Google or Microsoft inboxes you already run, a tenant is the efficient choice, because a tenant-level event is survivable when it is not all you have. If you want a lighter tenant, a fresh tenant on your own domain can carry 25 to 100 mailboxes.',
        ],
      },
      {
        h: 'The arithmetic nobody runs before ordering',
        p: [
          'At a hundred mailboxes and two cold sends each, one tenant carries two hundred cold emails a day, bought for the price of a few Google inboxes, and it gets there without any single address sending enough to stand out. Want four hundred, buy a second tenant rather than doubling the rate on this one.',
          'The number to work out before you order is not the monthly cost, it is the cost of the worst week. A full tenant at two a day is two hundred cold emails of daily capacity in one place. Ask whether losing that overnight stops the business. If it would, run the tenant alongside packs rather than instead of them.',
          'This is also why a tenant is the strongest second platform rather than the obvious first one. A filtering change at Google cannot touch Entra-hosted mail, and the reverse is equally true.',
        ],
      },
      {
        h: 'Where a tenant is the wrong tool',
        tool: 'esp-segmenter',
        p: [
          'If you need far fewer than a hundred mailboxes, the per-inbox price stops being an advantage and you are buying administrative surface you do not need. Google or Microsoft 365 packs are simpler at that size.',
          'If your list is overwhelmingly Gmail-hosted, the platform match argument runs against this and sending from Google is likely to place better, whatever the price difference says.',
          'And if you want to be able to hand the whole thing to someone else in six months, a tenant is more to hand over than a set of mailboxes. Worth knowing before rather than after.',
        ],
      },
    ],
    faqs: [
      ['What is an Azure tenant for cold email?', 'Your own Microsoft cloud directory containing 100 Exchange Online mailboxes, delivered prewarmed with DNS configured.'],
      ['How is this different from Microsoft 365 packs?', 'A pack is three mailboxes and a problem stays on that domain. A tenant is one flat price holding a hundred mailboxes that share a reputation: $0.50 an inbox on a quarterly commit, with all of the risk in one place.'],
      ['Can I bring my own domains into the tenant?', 'Yes, though a domain you add yourself starts at zero reputation and needs its own aging and warming.'],
      ['How many sends a day can a tenant carry?', 'At our recommended two cold per mailbox, 200 a day on a full tenant. Higher per mailbox is possible and raises risk across the whole pool, which is the one thing a shared reputation does not forgive. More volume should come from more mailboxes, not a higher rate on each.'],
      ['What happens if the tenant gets flagged?', 'Move to a fresh tenant. Tenant-level events are rarer than domain burns and larger when they happen, and a flagged pool is not worth rehabilitating: that takes weeks with no guarantee the reputation returns. A new tenant can be ordered the same day and arrives within 48 to 72 hours.'],
    ],
    related: ['prewarmed-entra-inboxes', 'prewarmed-microsoft-365-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-entra-inboxes',
    family: 'prewarmed',
    eyebrow: 'Prewarmed Entra tenants',
    h1: 'Prewarmed Entra inboxes (Microsoft Entra ID tenants)',
    title: 'Prewarmed Entra Inboxes: Microsoft Entra ID Tenants',
    description:
      'Prewarmed Microsoft Entra ID tenants with 100 Exchange Online mailboxes. What changed from Azure AD, and why it does not affect sending.',
    keyword: 'prewarmed entra inboxes',
    subhead:
      'Entra ID is the new name for Azure AD. Same product as our Azure tenants, described the way Microsoft names it today.',
    pricingKey: 'azure-tenant',
    inlineTool: 'nameserver-checker',
    specs: [
      ['Identity layer', 'Microsoft Entra ID, formerly Azure AD'],
      ['Mailboxes', '100 Exchange Online per tenant'],
      ['Adding mailboxes', 'Upload a spreadsheet, get the accounts'],
      ['Email records', 'Set up before you get it'],
      ['Suggested volume', '2 cold emails per mailbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Technical buyers using current Microsoft vocabulary', 'Microsoft calls it Entra now. Most vendors still say Azure AD. Same directory.'],
      ['Teams already running on Microsoft', 'If your own company runs on Microsoft, the vocabulary here matches what you already use.'],
      ['Anyone comparing quotes', 'Sellers quoting Azure AD and sellers quoting Entra are quoting the same thing. Compare on mailbox count, aging and warming, not on the name.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Two cold emails per mailbox per day. That is the whole shape of a tenant: a hundred quiet addresses rather than ten busy ones.', split: 'An Entra tenant sends from Microsoft, so the Microsoft-hosted half of your list is the half this is best at. Split the file and point the rest at Google infrastructure.'},
      },
      {
        h: 'Azure AD became Entra ID. What that means for sending: nothing',
        p: [
          'Microsoft renamed Azure Active Directory to Entra ID. It is the same product with a new name and a redesigned interface. Nothing about how your email lands changed.',
          'We keep separate pages because people search for both names and should land on a page that uses the words they typed. If you came here looking for Azure, that page covers the same product with more detail on sending volume.',
        ],
      },
      {
        h: 'Conditional access and MFA, configured for sequencer authentication',
        p: [
          'This is where Entra accounts trip people up. Microsoft turns on security settings by default that require two-factor login and can block the way your sending tool connects. Everything looks set up correctly, and the connection simply fails.',
          'We hand over accounts already configured so sending tools can connect. If you change those settings yourself, do it on purpose: nothing warns you, and you will spend an afternoon blaming your sending tool before you think to check the security policy.',
        ],
      },
      {
        h: 'Creating a hundred mailboxes at once',
        p: [
          'Creating a hundred users by hand is a day nobody should spend. Entra lets you create them in bulk from a spreadsheet, and accounts arrive with all the mailboxes already made, paid for and warmed. You get the spreadsheet, load it into your sending tool, and start.',
          'The one thing you cannot create in bulk is trust. That is the 51 days that happened before the account reached you.',
        ],
      },
    ],
    faqs: [
      ['Is Entra ID different from Azure AD?', 'Only in name and interface. Same directory, same licensing, no deliverability difference.'],
      ['Should I buy the Entra page or the Azure page?', 'Same product. Buy whichever page you understood better.'],
      ['Will conditional access block my sequencer?', 'Not as delivered. Tenants arrive configured for sequencer authentication. If you alter the policy, expect to re-test the connection.'],
      ['Can I add users beyond the hundred?', 'Yes, subject to licensing. New mailboxes start at zero reputation.'],
    ],
    related: ['prewarmed-azure-inboxes', 'prewarmed-microsoft-365-inboxes', 'prewarmed-inboxes'],
  },
  {
    slug: 'prewarmed-domains',
    alt: { lead: 'Stocking up for a date further out?', slug: 'fresh-domains', label: 'Fresh .com domains are $12 one off, and inboxes on them are warmed for you' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed domains',
    h1: 'Prewarmed domains with sending history, not just age',
    title: 'Prewarmed Domains: Aged 30 Days, Warmed 21',
    description:
      'Prewarmed .com domains aged 30 days and warmed 21 more, with SPF, DKIM, DMARC and MX configured. Included free with every inbox pack.',
    keyword: 'prewarmed domains',
    subhead:
      'Thirty days of registration age, then twenty-one days of real sending and receiving, with authentication published throughout. Included free with every inbox pack.',
    tiers: [
      { k: 'domain-prewarmed', h: 'Prewarmed .com', price: 'Free with any inbox pack',
        b: 'Aged 30 days, warmed 21, authenticated and placement tested. This is the one the rest of this page is about.' },
      { k: 'domain-fresh', h: 'Fresh .com', price: '$12 per domain, one off',
        b: 'Registered clean and handed over with your order. No history yet, so fresh inboxes built on it are warmed by Warm Inboxes for 14 to 21 days before they send. Lists at $20.',
        to: '/fresh-domains/', toLabel: 'See fresh domains →' },
      { k: 'domain-aged', h: 'Aged .com', price: 'Custom, per domain',
        b: 'Sourced individually against your requirement, with registration and drop history checked before anything is handed over. Priced per domain because every one is different.',
        // Quoted individually, so this tier sends people to WhatsApp rather
        // than to a checkout. A flag, not a message: the opener is the same
        // everywhere and lives in site.waMessage.
        wa: true },
    ],
    pricingKey: 'domain-prewarmed',
    inlineTool: 'deliverability-checker',
    specs: [
      ['Aging', '30 days minimum before first send'],
      ['Warming', '21 days of real send and receive'],
      ['TLD', '.com or .co'],
      ['DNS', 'SPF · DKIM · DMARC · MX set and published'],
      ['Tracking', 'Custom tracking hostname, not shared'],
      ['History', 'Drop and blocklist history checked before acquisition'],
      ['Included', 'Free with every inbox pack'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Anyone who has been sold an aged domain', 'Age is the attribute marketplaces sell because it is the one they can measure. It is not the one that matters.'],
      ['Teams rebuilding after a burn', 'New capacity on a clean domain within 48 to 72 hours, rather than a delisting appeal that may not stick.'],
      ['Operators spreading risk', 'More domains at fewer inboxes each is the correct shape. Free domains are what makes it affordable.'],
    ],
    body: [
      {
        h: 'Why thirty days of aging, and not seven',
        p: [
          'A domain that starts sending in its first few days gets added to the major blacklists almost straight away, and a listing that early is the hardest kind to get removed. Age is one of the very few things Gmail and Outlook can check that a sender cannot fake or speed up.',
          'It is also the cheapest protection there is, and the step most sellers skip, because waiting means slower stock turnover for them. When someone advertises a domain registered this week as prewarmed, this is the part they left out.',
        ],
      },
      {
        h: 'Aged, fresh and prewarmed are three different products',
        p: [
          'Fresh means registered recently, with no history at all. Aged means registered a long time ago, which tells you nothing about whether it ever sent email, and can hide something bad about what it did send. Prewarmed means it has both aged and then sent and received real email, with its records in place the whole time.',
          'Only the third one comes with any trust attached. A domain bought second hand, registered in 2011, abandoned four times and last used for spam, is worse than one registered last month. The listing that sells it to you will only mention 2011.',
        ],
      },
      {
        h: 'Three kinds of domain, three different prices',
        p: [
          'A prewarmed .com is included free with every inbox pack. Registration costs about twelve dollars; the fifty-one days of aging, authentication, engagement and testing is where the cost actually sits, and that work lives in the mailboxes rather than in the registration. So we do not charge for the domain on top.',
          'A fresh .com is twelve dollars, one off, against a list price of twenty, registered clean and handed over with your order. It has no history yet, so the fresh inboxes built on it are warmed by Warm Inboxes for 14 to 21 days before they send. Buy these when you want inboxes on your own brand and can wait three weeks for them.',
          'An aged .com is priced per domain, because every one is different. Age, prior use, drop history and blocklist exposure all vary, and a sensible price depends on what the specific domain turns out to be. Those are sourced against your requirement rather than sold off a shelf, which is why the conversation happens before the price.',
        ],
      },
      {
        h: 'Free domains let you spread, which is the point',
        p: [
          'Including the domain means you can run more domains at fewer inboxes each, which is how a fleet should be built anyway. Concentration is what turns one bad week into a dead campaign.',
          'Three inboxes per domain across ten domains survives an incident that would end thirty inboxes on three domains. Paying per domain pushes people toward the second shape for reasons that have nothing to do with deliverability.',
        ],
      },
    ],
    faqs: [
      ['What makes a domain prewarmed rather than aged?', 'Aged means old. Prewarmed means aged and then used to send and receive real mail under published authentication. Only the second builds reputation.'],
      ['Do I own the domain?', 'Yes. The domain is registered to you with registrar access and nameserver control handed over, so you can move it, point it anywhere, or keep it if you stop buying from us. A domain left on a vendor nameserver is the vendor\'s, and that is not what you get here.'],
      ['Can I point it at my main website?', 'Yes, forwarding is standard practice and makes the domain look like what it claims to be.'],
      ['What happens if a domain burns?', 'Retire it and order a new batch the same day; it arrives within 48 to 72 hours. We do not repair burnt domains or swap them: recovery takes weeks and rarely sticks, so the fast route is also the one that sends better. Hold back a little spare capacity and a burn costs you nothing in downtime.'],
      ['Are non-.com domains available?', 'Yes, via support. TLD carries real reputation differences, so ask before assuming a cheaper TLD is equivalent.'],
      ['How much is an aged domain?', 'It depends entirely on the domain. Age, prior use, drop history and blocklist exposure all move the price, so aged domains are quoted individually rather than listed. Message us with what you need.'],
      ['What is the difference between fresh at $12 and prewarmed free?', 'Time. A fresh .com is a clean registration, and the inboxes on it are warmed for 14 to 21 days before they send. A prewarmed .com has already been aged 30 days and warmed 21, and comes with the inboxes, ready on arrival.'],
    ],
    related: ['prewarmed-inboxes', 'prewarmed-google-inboxes', 'prewarmed-azure-inboxes'],
  },
  {
    slug: 'fresh-google-inboxes',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-google-inboxes', label: 'Prewarmed Google inboxes send the day they arrive' },
    family: 'fresh',
    eyebrow: 'Fresh Google inboxes',
    h1: 'Fresh Google Workspace inboxes on your own domain',
    title: 'Fresh Google Workspace Inboxes for Cold Email',
    description:
      'Fresh Google Workspace inboxes on your own domain, with SPF, DKIM and DMARC set and 14 to 21 days of warmup done for you. From $3.50 an inbox.',
    keyword: 'fresh google inboxes',
    subhead:
      'Licensed Workspace accounts built on your own branded domain, records set, then warmed for you for 14 to 21 days. Your brand on every email, at about a third of the prewarmed price at volume.',
    pricingKey: 'google-fresh',
    inlineTool: 'esp-segmenter',
    ships: [
      'Licensed Google Workspace accounts on **your own domain**',
      'SPF, DKIM, DMARC and MX published for you',
      'Warmed by Warm Inboxes for **14 to 21 days** before you send',
      'Delivered within **48 to 72 hours** of payment',
    ],
    specs: [
      ['Provider', 'Google Workspace'],
      ['Domain', 'Yours, or a .com bought with the order ($12, one off)'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Warming', '14 to 21 days, run by Warm Inboxes'],
      ['Ready to send cold email', 'Once warmup is done, 14 to 21 days after delivery'],
      ['Suggested volume', '15 cold emails per inbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Teams who want their own brand on the domain', 'Prewarmed inboxes come on a prewarmed domain and stay on it. Fresh ones are built on yours, so every prospect sees your name.'],
      ['Teams with three weeks before the first send', 'The warmup fits inside the wait, and you pay less for the mailbox.'],
      ['Anyone adding capacity behind a working fleet', 'Fresh inboxes warm while the prewarmed ones send, and come online the week you need them.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Once the 14 to 21 days of warmup are done, fifteen a day per inbox, three inboxes to a domain.'},
      },
      {
        h: 'What fresh means here',
        p: [
          'Fresh means a real, licensed Google Workspace mailbox built by technicians on your own branded domain, with SPF, DKIM, DMARC and MX published correctly the first time. It has no sending history yet, so before it carries cold email it is warmed by Warm Inboxes for 14 to 21 days.',
          'The difference from prewarmed is where the domain comes from and when you can send. Prewarmed inboxes arrive on a domain that has already done its weeks and send on arrival. Fresh inboxes carry your brand and send once their warmup is done.',
        ],
      },
      {
        h: 'The 14 to 21 days, and what to do with them',
        p: [
          'The inboxes arrive within 48 to 72 hours of payment and warmup starts on them straight away. You do not need a warmup tool: Warm Inboxes runs it, and keeps running it at 30 emails per inbox per day underneath your campaigns afterwards.',
          'Use the weeks for the parts only you can do. Set a display name, signature and profile photo on every inbox, point the domain at your real website, connect the inboxes to your sequencer with campaigns paused, and verify your list. When warmup finishes, everything is ready to switch on.',
          'Leave your sequencer\'s own warmup off. It sends from the same mailbox against the same daily budget, so running both spends it twice.',
        ],
      },
      {
        h: 'What it costs, and how it gets cheaper',
        p: [
          'Fresh Google inboxes start at $3.50 per inbox per month with no minimum, and get cheaper with order size and billing cycle: 30 inboxes or more, 100 inboxes or more, and quarterly or yearly billing each bring the price down, to $2.00 at the far end. At volume that is about a third of the prewarmed price.',
          'Domains are separate. Bring your own and there is no domain charge, or buy a .com with the order: they list at $20 and are currently $12, one off.',
        ],
      },
      {
        h: 'Fresh or prewarmed',
        p: [
          'The question is not which is cheaper. It is what three weeks of waiting costs you. If a client campaign starts on Monday, fresh is a missed month of meetings. If it starts next month, prewarmed is paying for time you already had.',
          'Most teams sending seriously do both: prewarmed to launch, fresh on their own brand to scale, and a few prewarmed inboxes kept in reserve.',
        ],
      },
    ],
    faqs: [
      ['Are these real Google Workspace accounts?', 'Yes, licensed Google Workspace accounts on your own domain. The difference from prewarmed inboxes is that these start with no sending history and are warmed for you before you send.'],
      ['When can I send cold email from them?', 'Once warmup is done: 14 to 21 days after they are delivered, and delivery is within 48 to 72 hours of payment.'],
      ['Is a domain included?', 'No. Use a domain you already own, at no domain charge, or buy a .com with the order. Domains list at $20 and are currently $12, one off. The free prewarmed domain comes with prewarmed inboxes.'],
      ['Do I need my own warmup tool?', 'No. Warm Inboxes warms them for 14 to 21 days before you send, then keeps warmup running at 30 emails per inbox per day underneath your campaigns.'],
      ['Are there volume discounts?', 'Yes. The price drops at 30 inboxes and again at 100, and quarterly and yearly billing are cheaper than monthly. The table above has every figure.'],
    ],
    related: ['prewarmed-google-inboxes', 'fresh-microsoft-365-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-microsoft-365-inboxes',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-microsoft-365-inboxes', label: 'Prewarmed Microsoft 365 inboxes send the day they arrive' },
    family: 'fresh',
    eyebrow: 'Fresh Microsoft 365 inboxes',
    h1: 'Fresh Microsoft 365 inboxes on your own domain',
    title: 'Fresh Microsoft 365 Inboxes for Cold Email',
    description:
      'Fresh Microsoft 365 mailboxes on your own domain, authenticated and warmed for you for 14 to 21 days before you send. From $3.00 an inbox, $2.00 yearly.',
    keyword: 'fresh microsoft 365 inboxes',
    subhead:
      'Paid Microsoft 365 mailboxes built on your own branded domain, records set, then warmed for you for 14 to 21 days. The cheapest way to reach Outlook-hosted prospects under your own name.',
    pricingKey: 'microsoft-fresh',
    inlineTool: 'inbox-planner',
    ships: [
      'Licensed Microsoft 365 mailboxes on **your own domain**',
      'SPF, DKIM, DMARC and MX published for you',
      'Warmed by Warm Inboxes for **14 to 21 days** before you send',
      'Delivered within **48 to 72 hours** of payment',
    ],
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Also called', 'Fresh Outlook inboxes, new M365 mailboxes'],
      ['Domain', 'Yours, or a .com bought with the order ($12, one off)'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Warming', '14 to 21 days, run by Warm Inboxes'],
      ['Ready to send cold email', 'Once warmup is done, 14 to 21 days after delivery'],
      ['Suggested volume', '8 cold emails per inbox per day'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Teams selling into Microsoft-heavy lists', 'If the companies you email run Microsoft, sending from Microsoft lands better. These are the lowest-cost way to get there under your own brand.'],
      ['Anyone splitting their sending across two providers', 'A fleet entirely on Google fails together. Adding Microsoft capacity is the cheap version of that insurance.'],
      ['Agencies stocking up between launches', 'Order in a quiet week and have warmed Microsoft inboxes on the client\'s own domain when the campaign starts.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Once the 14 to 21 days of warmup are done, eight a day per inbox, three inboxes to a domain.'},
      },
      {
        h: 'Microsoft is harder on new senders, which is why the warmup matters',
        p: [
          'Microsoft is stricter than Gmail with senders it does not know, and it pays close attention to how often people mark your mail as spam. That is why these are warmed for 14 to 21 days before they carry cold email, and why the steady pace afterwards is eight a day per inbox rather than Google\'s fifteen.',
          'Volume comes from more inboxes, not from pushing each one. Eight a day across forty inboxes is three hundred and twenty, and every one of them stays quiet enough to keep landing.',
        ],
      },
      {
        h: 'The one thing Microsoft gives you that Google does not',
        p: [
          'When Microsoft sends a message to junk, it writes a score and a few related notes into the hidden part of the email. Paste that into a header analyser and you get the actual reason it was filtered. Gmail tells you nothing comparable.',
          'That makes Microsoft the easier platform to fix. If a test message goes to junk, it will usually tell you whether it was the copy, the server or a record failing a check.',
        ],
      },
      {
        h: 'Connecting to your sequencer',
        p: [
          'Connect over OAuth by provider where your tool offers it. If you connect over IMAP and SMTP instead, authenticated SMTP is off by default on recent Microsoft tenants, at the tenant and again per mailbox, and it fails looking exactly like a wrong password. Enable it for the mailbox, or use OAuth and skip the question.',
          'Set the daily cap per inbox before the first send rather than leaving the platform default, and leave the sequencer\'s own warmup off: Warm Inboxes keeps warmup running at 30 a day underneath your campaigns.',
        ],
      },
      {
        h: 'What it costs',
        p: [
          'Fresh Microsoft 365 inboxes are $3.00 per inbox per month on monthly billing, $2.50 quarterly and $2.00 yearly, whatever the order size. Bring your own domain at no charge, or buy a .com with the order for $12, one off.',
          'If you need to send this week, the prewarmed version arrives having already done its weeks. If you can wait three weeks and want your own brand on the domain, this is the cheaper route.',
        ],
      },
    ],
    faqs: [
      ['Are these the same mailboxes as your prewarmed Microsoft 365 inboxes?', 'The same licence and the same records, on your own domain instead of a prewarmed one, and warmed for 14 to 21 days after delivery instead of before.'],
      ['When can I send cold email from them?', 'Once warmup is done: 14 to 21 days after delivery, and delivery is within 48 to 72 hours of payment.'],
      ['Are these Outlook.com accounts?', 'No. Licensed Microsoft 365 mailboxes with Exchange Online on a domain you control.'],
      ['Is a domain included?', 'No. Use your own at no domain charge, or buy a .com with the order: $20 list, currently $12, one off.'],
      ['Will these connect to my sequencer?', 'Yes. Use OAuth where your tool offers it, and set the daily cap per inbox to eight rather than the platform default.'],
      ['How many should I put on one domain?', 'Three, the same as prewarmed. Fewer inboxes across more domains keeps any one bad week small.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'fresh-google-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-azure-inboxes',
    family: 'fresh',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-azure-inboxes', label: 'A prewarmed Azure tenant sends the day it arrives' },
    eyebrow: 'Fresh Azure tenants',
    h1: 'Fresh Azure tenants: up to 100 mailboxes on your domain',
    title: 'Fresh Azure Inboxes: 100-Mailbox Tenants, $50 Flat',
    description:
      'A dedicated Azure tenant with up to 100 Exchange Online mailboxes on your own domain, warmed for you for 14 to 21 days. $50 per tenant on every billing cycle.',
    keyword: 'fresh azure inboxes',
    subhead:
      'Your own Azure tenant with 25 to 100 mailboxes on your branded domain, records set, then warmed for you for 14 to 21 days. One flat price whatever the billing cycle.',
    pricingKey: 'azure-fresh',
    inlineTool: 'inbox-rotation-planner',
    ships: [
      'A dedicated Azure tenant, **up to 100 mailboxes**',
      'Tenant ID and the full mailbox list',
      'SPF, DKIM, DMARC and MX published for you',
      'Warmed by Warm Inboxes for **14 to 21 days** before you send',
      'Delivered within **48 to 72 hours** of payment',
    ],
    specs: [
      ['Product', 'Dedicated Azure tenant'],
      ['Mailboxes', '25, 49 or 100 Exchange Online. Your choice'],
      ['Domain', 'Yours, or a .com bought with the order ($12, one off)'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Warming', '14 to 21 days, run by Warm Inboxes'],
      ['Price', '$50 per tenant, flat, every billing cycle'],
      ['Ready to send cold email', 'Once warmup is done, 14 to 21 days after delivery'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Teams who want a tenant on their own brand', 'A prewarmed tenant comes on a prewarmed domain. A fresh one is built on yours.'],
      ['Operators building for next month', 'Order now, let the warmup run, and have a full tenant of capacity ready the week you need it.'],
      ['Anyone who wants tenant pricing on monthly billing', 'A fresh tenant is $50 on any cycle. A prewarmed one is $50 only on a quarterly commit.'],
    ],
    body: [
      {
        h: 'Four things that decide whether this works',
        p: [
          'The infrastructure is handled. What is left is the part you control, and it is the part that actually decides your reply rate. All four have a free tool behind them.',
        ],
        nextSteps: {ramp: 'Two cold emails per mailbox per day once warmed. That is the whole shape of a tenant: a hundred quiet addresses rather than ten busy ones.', split: 'An Entra tenant sends from Microsoft, so the Microsoft-hosted half of your list is the half this is best at. Split the file and point the rest at Google infrastructure.'},
      },
      {
        h: 'What a fresh tenant is',
        p: [
          'A tenant is your own Microsoft organisation holding 25 to 100 Exchange Online mailboxes on one domain. Buying the tenant rather than mailboxes three at a time is what drops the cost per inbox, to $0.50 at full capacity.',
          'Fresh means it is built on your own branded domain and starts with no sending history, so every mailbox in it is warmed by Warm Inboxes for 14 to 21 days before it carries cold email. You do not need a warmup tool, and warmup keeps running at 30 a day per mailbox underneath your campaigns afterwards.',
        ],
      },
      {
        h: 'One reputation, so choose the density deliberately',
        warn: 'Every mailbox in a tenant shares one reputation, so a single unchecked list can reach all of them at once. That is the strongest argument for filling a first tenant with 25 mailboxes rather than 100: the price is the same and a bad first month reaches a quarter as many.',
        p: [
          'When you buy in packs of three and something goes wrong, you lose three inboxes. Here one event can touch the whole tenant. That is the trade for the cost per inbox, and it is the same trade a prewarmed tenant asks you to make.',
          'Verify every list before it touches the tenant, and check the bounce rate daily for the first fortnight after warmup ends.',
        ],
      },
      {
        h: 'Bring them online in batches, not all at once',
        p: [
          'When warmup is done, do not switch on every mailbox on the same morning. Start about twenty, watch what happens, and add the next twenty when the first are behaving.',
          'Plan the rotation before the first send. Two emails per mailbox per day on a full tenant of a hundred is two hundred a day; a lighter tenant sends more per mailbox for the same flat price, six a day each at 25 mailboxes.',
        ],
      },
      {
        h: 'Fresh or prewarmed tenant',
        p: [
          'A fresh tenant is $50 on every billing cycle. A prewarmed tenant is $69 monthly, $60 on two months, or $50 on a quarterly commit, and sends the day it lands.',
          'So on a quarterly commit the prewarmed one costs the same and saves you the three weeks. Fresh wins when you want the tenant on your own domain, want a lighter tenant (a prewarmed one is always a full hundred), or want tenant pricing without a three-month commit and can wait for the warmup.',
          'If you have never run a tenant, start with a prewarmed one, learn how it behaves, and add fresh tenants on your own domain once you know what the first weeks take.',
        ],
      },
    ],
    faqs: [
      ['What is an Azure tenant for cold email?', 'Your own Microsoft organisation holding 25 to 100 Exchange Online mailboxes on one domain. Buying a tenant rather than mailboxes three at a time is what drops the cost per inbox.'],
      ['When can I send cold email from it?', 'Once warmup is done: 14 to 21 days after delivery, and delivery is within 48 to 72 hours of payment.'],
      ['Is a domain included?', 'No. Use your own at no domain charge, or buy a .com with the order: $20 list, currently $12, one off. The free prewarmed domain comes with prewarmed tenants.'],
      ['Do I need a warmup tool for a hundred mailboxes?', 'No. Warm Inboxes warms every mailbox in the tenant for 14 to 21 days before you send, then keeps warmup running underneath your campaigns.'],
      ['Should I buy this if I have never run a tenant?', 'Start with the prewarmed tenant, learn how it behaves, and add fresh ones once you know what the first weeks take.'],
      ['How is it priced?', '$50 per tenant, flat, on every billing cycle and whatever density you choose. A prewarmed tenant is $69 monthly or $50 on a quarterly commit.'],
    ],
    related: ['prewarmed-azure-inboxes', 'fresh-microsoft-365-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-domains',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-domains', label: 'A prewarmed domain is free with any inbox pack' },
    family: 'fresh',
    eyebrow: 'Fresh domains',
    h1: 'Fresh .com domains, registered clean and handed over',
    title: 'Fresh .com Domains for Cold Email: $12, One Off',
    description:
      'Fresh .com domains registered clean with your order: no prior use, no blocklist history. $20 list, currently $12, one off. Or bring your own at no charge.',
    keyword: 'fresh domains for cold email',
    subhead:
      'A .com registered new, with nothing behind it. No previous owner and no old spam. Fresh inboxes are built on it and warmed for you before they send.',
    pricingKey: 'domain-fresh',
    inlineTool: 'record-generator',
    ships: [
      'A **.com registered new** in your name',
      'Registrar and nameserver control handed to you',
      'No prior owner and no prior use',
      'Records set up with the inboxes built on it',
      'Delivered within **48 to 72 hours** of payment',
    ],
    specs: [
      ['Type', 'Newly registered .com'],
      ['Price', '$12 per domain, one off ($20 list)'],
      ['History', 'None. That is the point'],
      ['DNS', 'Set up with the fresh inboxes built on it'],
      ['Warming', 'Inboxes on it are warmed 14 to 21 days by Warm Inboxes'],
      ['Ready to send cold email', 'Once the inboxes on it finish warmup'],
      ['You get it', 'Within 48 to 72 hours of payment'],
    ],
    whoFor: [
      ['Teams who want sending domains on their own brand', 'Variants of your name, registered clean, with fresh inboxes built on them and warmed before they send.'],
      ['Anyone burned by a second-hand domain', 'A fresh registration cannot be carrying somebody else\'s spam history, because there is no history to carry.'],
      ['Operators who want more domains, not more inboxes', 'Three inboxes across ten domains survives an incident that ends thirty inboxes on three. At $12 each, spreading out is affordable.'],
    ],
    body: [
      {
        h: 'Fresh, aged and prewarmed are three different things',
        p: [
          'Fresh means registered recently, with no history at all. Aged means registered a long time ago, which tells you nothing about whether it ever sent email and can hide something bad about what it did send. Prewarmed means it has both aged and then sent and received real email, with its records in place the whole time.',
          'Fresh has one real advantage over aged: you know exactly what you are getting, because there is nothing there. A domain registered in 2011, abandoned four times and last used for spam is worse than one registered last month, and the listing that sells it to you will only mention 2011.',
        ],
      },
      {
        h: 'What happens after you buy one',
        p: [
          'Fresh inboxes are built on it by technicians, with SPF, DKIM, DMARC and MX published, and the domain forwarded to your real website so a prospect who types it in lands somewhere. Then the inboxes are warmed by Warm Inboxes for 14 to 21 days before they carry cold email.',
          'You do not need to run a warmup tool or leave the domain sitting idle on your own schedule. When the warmup finishes, the inboxes are ready to connect and send.',
        ],
      },
      {
        h: 'What twelve dollars is and is not buying',
        p: [
          'Domains bought through Warm Inboxes list at $20 and are currently $12, one off. That is roughly what a .com registration costs. Bring your own domain instead and there is no domain charge at all.',
          'The reason to buy it here is that it arrives alongside the inboxes, in one order, with the records set up to match. If you would rather register it yourself at your own registrar, do that. It is the same domain.',
          'What it is not buying is history. A fresh domain and a prewarmed domain are not the same product at different prices: the prewarmed one has already done its fifty-one days, sends on arrival, and is free with any inbox pack for exactly that reason.',
        ],
      },
      {
        h: 'Fresh or the free prewarmed domain',
        p: [
          'Take the free prewarmed domain when you need to send this week. Buy fresh domains when you want your own brand on the sending domain and can wait three weeks for the inboxes on it to warm.',
          'Most teams end up doing both, and the split is decided by the calendar rather than by the price.',
        ],
      },
    ],
    faqs: [
      ['Do I own the domain?', 'Yes. Registrar access and nameserver control are transferred to you. Ask this of any vendor: a domain sitting on their nameservers is theirs.'],
      ['When can I send cold email from it?', 'Once the inboxes built on it have finished their 14 to 21 days of warmup, which Warm Inboxes runs for you.'],
      ['Why is this $12 when the prewarmed domain is free?', 'The prewarmed one is free because the fifty-one days of work lives in the mailboxes you buy with it. A fresh domain is the registration: $20 list, currently $12, one off.'],
      ['Can I use my own registrar instead?', 'Yes, and it is the same domain. Bring your own and there is no domain charge. Buy it here only if you want it to arrive with the inboxes in one order.'],
      ['Are non-.com domains available?', 'Yes, via support. TLD carries real reputation differences, so ask before assuming a cheaper one is equivalent.'],
      ['What about aged domains?', 'Those are priced per domain, because age, prior use, drop history and blocklist exposure all vary. We check the history before anything is handed over. See the domains page for how that works.'],
    ],
    related: ['prewarmed-domains', 'fresh-google-inboxes', 'fresh-microsoft-365-inboxes'],
  },
];

export const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
