/**
 * One entry per bottom-of-funnel page. Copy lives here, not in templates, so
 * it is reviewable in one diff and so no two pages end up near-duplicates.
 * Each `body` section is unique per product. Do not templatise the prose.
 */
export const products = [
  {
    slug: 'prewarmed-google-inboxes',
    alt: { lead: 'Not needed until later in the quarter?', slug: 'fresh-google-inboxes', label: 'Fresh Google inboxes cost less and you warm them yourself' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Google inboxes',
    h1: 'Prewarmed Google inboxes, ready to send today',
    title: 'Prewarmed Google Inboxes for Cold Email — Official Workspace, Same Day',
    description:
      'Official Google Workspace inboxes, warmed on an aged .com, with super-admin access and DNS configured before handover. Delivered same day.',
    keyword: 'prewarmed google inboxes',
    subhead:
      'Real Google Workspace accounts on a domain we let age for 30 days and then warmed for 21 more. You get the super-admin login, and the SPF, DKIM and DMARC records are already set up.',
    pricingKey: 'google-prewarmed',
    inlineTool: 'deliverability-checker',
    specs: [
      ['Provider', 'Google Workspace'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Your login', 'Super Admin'],
      ['Suggested volume', '15 cold emails per inbox per day'],
      ['You get it', 'Same day, business days'],
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
          'Email sent from Google lands in the inbox more reliably when the person receiving it is also on Google. For most business lists that is somewhere between half and two thirds of the people on it. If most of your list is on Gmail or Google Workspace, sending from Google is the easier path.',
          'There is one case where it is the wrong choice: a list made up mostly of people on Microsoft 365, which is common in large companies, finance and government. There, sending from Microsoft lands better, and it also tells you far more when something goes wrong, because Outlook writes the reason it filtered a message into the email itself. Gmail does not.',
          'Check your list before you decide. Buying inboxes from the wrong provider is the most expensive mistake you can make at this point, and it takes about four minutes to avoid.',
        ],
      },
      {
        h: 'What super-admin access actually gets you',
        p: [
          'Whether you get the admin login is the one question that separates a real account from a rented seat on somebody else\'s. With it you can add addresses, change signatures, connect the mailbox to your sending tool properly, and export or delete the account whenever you want. Without it, you are renting, and the day you stop paying, everything stays with the seller.',
          'Ask anyone you buy from this before you pay. If the answer is anything other than a straight yes, the inboxes are not really yours.',
        ],
      },
      {
        h: 'Sending limits, and the number that actually matters',
        p: [
          'Google publishes a daily sending limit per account. That number is the point where they stop you, not advice on what is safe to send. People who treat it as a target lose their domains. What actually limits you is how much Gmail and Outlook trust you, not the published cap.',
          'We suggest 15 cold emails per inbox per day as a steady rate, with three inboxes on each domain. That is deliberately cautious. It is also the setup that keeps working, and staying alive is the only thing that matters when replacing a domain costs you a month of meetings.',
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
    alt: { lead: 'Building capacity rather than launching?', slug: 'fresh-microsoft-365-inboxes', label: 'Fresh Microsoft 365 inboxes cost less and you warm them yourself' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Microsoft 365 inboxes',
    h1: 'Prewarmed Microsoft 365 inboxes for Outlook-heavy lists',
    title: 'Prewarmed Microsoft 365 Inboxes for Cold Email — Outlook Ready, Same Day',
    description:
      'Licensed Microsoft 365 mailboxes, warmed on an aged .com, with Exchange admin access and authentication configured. Delivered same day.',
    keyword: 'prewarmed microsoft 365 inboxes',
    subhead:
      'Paid Microsoft 365 mailboxes on a domain we let age for 30 days and then warmed for 21 more. You get the Exchange admin login, and SPF, DKIM and DMARC are already set up.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'scl-analyzer',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Domain', 'Prewarmed .com or .co, included'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Your login', 'Exchange admin'],
      ['Suggested volume', '15 cold emails per inbox per day'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Enterprise and mid-market sellers', 'The companies you are targeting run Microsoft. Sending from Google into a Microsoft-heavy file gives up placement you did not need to give up.'],
      ['Teams that want to see why mail failed', 'Microsoft stamps its filtering verdict into the headers. It is the only major provider that tells you the reason.'],
      ['Anyone diversifying off a single provider', 'A fleet entirely on one platform fails together. Splitting across two is the cheapest correlated-failure insurance there is.'],
    ],
    body: [
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
    ],
    faqs: [
      ['Is this the same as the Azure tenant product?', 'No. These are individual paid mailboxes sold in packs. An Azure tenant is one account holding 100 mailboxes at a much lower cost per inbox, but all 100 share one reputation. See the comparison.'],
      ['Do I get admin access?', 'Yes, Exchange admin on the tenant.'],
      ['Will these work with my sequencer?', 'Yes. Use OAuth where available. Set per-inbox daily caps to your ramp figure, not the platform default.'],
      ['Why send from Microsoft at all?', 'Because a meaningful share of B2B recipients are on Microsoft, and placement into those mailboxes is better from Microsoft infrastructure.'],
      ['How is DMARC configured?', 'Published before handover. Read the reports for a fortnight before moving policy to enforcement.'],
    ],
    related: ['prewarmed-google-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-outlook-inboxes'],
  },
  {
    slug: 'prewarmed-outlook-inboxes',
    alt: { lead: 'Start date more than two months out?', slug: 'fresh-microsoft-365-inboxes', label: 'Fresh Microsoft 365 inboxes cost less and you warm them yourself' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed Outlook inboxes',
    h1: 'Prewarmed Outlook inboxes for cold email',
    title: 'Prewarmed Outlook Inboxes for Cold Email — Licensed, Warmed, Same Day',
    description:
      'Prewarmed Outlook inboxes on licensed Microsoft 365 mailboxes, on an aged domain with authentication configured. Delivered same day.',
    keyword: 'prewarmed outlook inboxes',
    subhead:
      'If you call them Outlook inboxes, these are them. Paid Microsoft 365 mailboxes on a domain aged 30 days and warmed 21 more, ready to send cold email the day you get them.',
    pricingKey: 'microsoft-prewarmed',
    inlineTool: 'dmarc-checker',
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Also called', 'Outlook inboxes, M365 mailboxes'],
      ['Domain age when you get it', '30 days minimum'],
      ['Warming', '21 days of real emails sent and received'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Your login', 'Exchange admin'],
      ['Suggested volume', '15 cold emails per inbox per day'],
      ['You get it', 'Same day, business days'],
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
          'Outlook means three different things, and which one you buy decides whether your campaign works. Outlook the app is just software for reading email. Outlook.com is Microsoft\'s free personal email. Microsoft 365 is the paid business product, and that is the one that matters here.',
          'For cold email you want the third one. A free personal account cannot use your own domain properly, has no admin controls, and will not hold up once you send at any real volume. If someone offers you cheap Outlook inboxes, find out which of the three they mean before you pay.',
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
      ['How many can I run?', 'Three per domain at 15 sends a day each is the configuration we recommend and operate.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'prewarmed-azure-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-azure-inboxes',
    family: 'prewarmed',
    alt: { lead: 'Start date more than two months out?', slug: 'fresh-azure-inboxes', label: 'A fresh Azure tenant costs less and you run the warming' },
    eyebrow: 'Prewarmed Azure tenants',
    h1: 'Prewarmed Azure inboxes: 100 per tenant, ready to send',
    title: 'Prewarmed Azure Inboxes — 100-Inbox Tenants, Volume Cold Email Infrastructure',
    description:
      'A dedicated prewarmed Azure tenant with 100 Exchange Online mailboxes. Volume infrastructure for agencies and high-send teams.',
    keyword: 'prewarmed azure inboxes',
    subhead:
      'Your own Azure account holding 100 mailboxes, all under one admin login, already warmed. Built for people sending a lot of cold email, at a fraction of the cost per inbox.',
    pricingKey: 'azure-tenant',
    inlineTool: 'inbox-rotation-planner',
    specs: [
      ['Product', 'Dedicated Azure tenant'],
      ['Mailboxes', '100 per tenant'],
      ['Mailbox type', 'Exchange Online, the business version'],
      ['What you get', 'Global Admin login, account ID, mailbox list'],
      ['Email records', 'Set up before you get it'],
      ['Suggested volume', '10 to 15 cold emails per mailbox per day'],
      ['Total capacity', '1,000 to 1,500 cold emails a day, comfortably'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Agencies running many clients', 'Per-inbox economics change entirely at tenant scale. The same budget buys an order of magnitude more sending surface.'],
      ['Teams sending 1,000+ a day', 'Spreading volume across 100 mailboxes at 10 to 15 each is a fundamentally safer shape than pushing 10 mailboxes at 100.'],
      ['Operators who already know the risk model', 'All 100 mailboxes share one reputation. This product rewards discipline and punishes a bad list faster than packs do.'],
    ],
    body: [
      {
        h: 'What a tenant is, and why the cost per inbox collapses',
        p: [
          'A tenant is your own Microsoft account, the kind a whole company would have. Instead of buying mailboxes three at a time, you get one account holding 100 mailboxes with a single admin login. Microsoft charges for it differently, which is why the cost per inbox drops by about ten times rather than by a few percent.',
          'You get the Global Admin login, the account ID, a spreadsheet of all 100 mailboxes and their passwords, and the email records already set up.',
        ],
      },
      {
        h: 'The volume shape that makes this work',
        p: [
          'The reason to buy a tenant is not that it is cheap. It is that you can send the same number of emails in a much safer way. Fifteen hundred a day spread over 100 mailboxes is 15 each, which looks like a hundred people doing their jobs. The same 1,500 from 10 mailboxes is 150 each, which looks like exactly what it is.',
          'Gmail and Outlook judge each sending address on its own behaviour. Spreading your sending across more mailboxes is the most effective thing a high-volume sender can do, and tenant pricing is what makes it affordable.',
        ],
      },
      {
        h: 'The risk you are taking on, stated plainly',
        warn: 'All 100 mailboxes share one reputation. A single unchecked list can damage every one of them at the same time. Clean your list first, start the mailboxes in batches rather than all at once, and never point a new tenant at data you have not verified.',
        p: [
          'If you buy in packs and a domain stops working, you lose three inboxes. With a tenant, something serious can affect all 100 at once. That is the trade you make for the lower price, and anyone selling you a tenant without mentioning it is not doing you a favour.',
          'So run it carefully. Only send to verified lists, start about twenty mailboxes at a time rather than all hundred, and check your bounce rate every day for the first two weeks. Teams who do this keep tenants running for a long time. Teams who treat them as cheap inboxes do not.',
        ],
      },
    ],
    faqs: [
      ['What is an Azure tenant for cold email?', 'Your own Microsoft cloud directory containing 100 Exchange Online mailboxes under one admin, delivered prewarmed with DNS configured.'],
      ['Do I get Global Admin?', 'Yes, plus the tenant ID and a CSV of all mailbox credentials.'],
      ['How is this different from Microsoft 365 packs?', 'A pack is three paid mailboxes, and a problem on one domain stays there. A tenant is a hundred mailboxes that all share one reputation, at a far lower cost per inbox.'],
      ['Can I bring my own domains into the tenant?', 'Yes, though a domain you add yourself starts at zero reputation and needs its own aging and warming.'],
      ['How many sends a day can a tenant carry?', 'At our recommended 10 to 15 per mailbox, comfortably 1,000 to 1,500 a day. Higher is possible and increases risk across the whole pool.'],
      ['What happens if the tenant gets flagged?', 'Get the replacement terms in writing before ordering. Tenant-level events are rarer than domain burns but larger when they happen.'],
    ],
    related: ['prewarmed-entra-inboxes', 'prewarmed-microsoft-365-inboxes', 'prewarmed-google-inboxes'],
  },
  {
    slug: 'prewarmed-entra-inboxes',
    family: 'prewarmed',
    eyebrow: 'Prewarmed Entra tenants',
    h1: 'Prewarmed Entra inboxes (Microsoft Entra ID tenants)',
    title: 'Prewarmed Entra Inboxes — Microsoft Entra ID Tenants for Cold Email',
    description:
      'Prewarmed Microsoft Entra ID tenants with 100 Exchange Online mailboxes. What changed from Azure AD, and why it does not affect sending.',
    keyword: 'prewarmed entra inboxes',
    subhead:
      'Entra ID is the new name for Azure AD. If you searched for Entra inboxes, this is the same thing as our Azure product, just described the way Microsoft names it today.',
    pricingKey: 'azure-tenant',
    inlineTool: 'nameserver-checker',
    specs: [
      ['Identity layer', 'Microsoft Entra ID, formerly Azure AD'],
      ['Mailboxes', '100 Exchange Online per tenant'],
      ['Access', 'Global Admin in the Entra admin centre'],
      ['Adding mailboxes', 'Upload a spreadsheet, get the accounts'],
      ['Email records', 'Set up before you get it'],
      ['Suggested volume', '10 to 15 cold emails per mailbox per day'],
      ['You get it', 'Same day, business days'],
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
          'Microsoft renamed Azure Active Directory to Entra ID. It is the same product with a new name and a redesigned admin screen. Nothing about how your email lands changed.',
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
    alt: { lead: 'Stocking up for a date further out?', slug: 'fresh-domains', label: 'Fresh .com domains are $12 and you run the 51 days' },
    family: 'prewarmed',
    eyebrow: 'Prewarmed domains',
    h1: 'Prewarmed domains with sending history, not just age',
    title: 'Prewarmed Domains for Cold Email — Aged 30 Days, Warmed 21, DNS Set',
    description:
      'Prewarmed .com domains aged 30 days and warmed 21 more, with SPF, DKIM, DMARC and MX configured. Included free with every inbox pack.',
    keyword: 'prewarmed domains',
    subhead:
      'Thirty days of registration age, then twenty-one days of real sending and receiving, with authentication published throughout. Included free with every inbox pack.',
    tiers: [
      { k: 'domain-prewarmed', h: 'Prewarmed .com', price: 'Free with any inbox pack',
        b: 'Aged 30 days, warmed 21, authenticated and placement tested. This is the one the rest of this page is about.' },
      { k: 'domain-fresh', h: 'Fresh .com', price: '$12 per domain',
        b: 'Registered clean and handed straight over. No aging, no warming, no sending history. You run the 51 days.',
        to: '/fresh-domains/', toLabel: 'See fresh domains →' },
      { k: 'domain-aged', h: 'Aged .com', price: 'Custom, per domain',
        b: 'Sourced individually against your requirement, with registration and drop history checked before anything is handed over. Priced per domain because every one is different.',
        wa: 'Hi — I am looking for aged .com domains. Here is what I need:' },
    ],
    pricingKey: 'domain-prewarmed',
    inlineTool: 'blacklist-checker',
    specs: [
      ['Aging', '30 days minimum before first send'],
      ['Warming', '21 days of real send and receive'],
      ['TLD', '.com or .co'],
      ['DNS', 'SPF · DKIM · DMARC · MX set and published'],
      ['Tracking', 'Custom tracking hostname, not shared'],
      ['History', 'Drop and blocklist history checked before acquisition'],
      ['Included', 'Free with every inbox pack'],
      ['You get it', 'Same day, business days'],
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
          'A domain that starts sending in its first few days gets added to the major blacklists almost straight away, and a listing that early is the hardest kind to get removed. Age is one of the very few things Gmail and Outlook can check that a sender cannot fake or speed up.',
          'It is also the cheapest protection there is, and the step most sellers skip, because waiting means slower stock turnover for them. When someone advertises a prewarmed domain delivered in 48 hours, this is the part they left out.',
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
          'A prewarmed .com is included free with every inbox pack. Registration costs about twelve dollars a year; the fifty-one days of aging, authentication, engagement and testing is where the cost actually sits, and that work lives in the mailboxes rather than in the registration. So we do not charge for the domain on top.',
          'A fresh .com is twelve dollars, registered clean and handed over the same day. It has no history and no reputation, and you run the 51 days yourself. Buy these when you are building capacity for a start date two months out.',
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
      ['Do I own the domain?', 'Confirm registrar access and nameserver control in writing before ordering, from us or anyone. Domains on a vendor nameserver are the vendor\'s.'],
      ['Can I point it at my main website?', 'Yes, forwarding is standard practice and makes the domain look like what it claims to be.'],
      ['What happens if a domain burns?', 'Get the replacement terms in writing before ordering. Recovery is slow and often does not stick, so replacement speed is the thing to ask about.'],
      ['Are non-.com domains available?', 'Yes, via support. TLD carries real reputation differences, so ask before assuming a cheaper TLD is equivalent.'],
      ['How much is an aged domain?', 'It depends entirely on the domain. Age, prior use, drop history and blocklist exposure all move the price, so aged domains are quoted individually rather than listed. Message us with what you need.'],
      ['What is the difference between fresh at $12 and prewarmed free?', 'The 51 days. A fresh .com is a clean registration you warm yourself. A prewarmed .com has already been aged 30 days and warmed 21, and comes with the inboxes.'],
    ],
    related: ['prewarmed-inboxes', 'prewarmed-google-inboxes', 'prewarmed-azure-inboxes'],
  },
  {
    slug: 'fresh-google-inboxes',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-google-inboxes', label: 'Prewarmed Google inboxes arrive with the 51 days already done' },
    family: 'fresh',
    eyebrow: 'Fresh Google inboxes',
    h1: 'Fresh Google Workspace inboxes, for a start date that is not this week',
    title: 'Fresh Google Workspace Inboxes for Cold Email — Unwarmed, Admin Access Included',
    description:
      'Brand new licensed Google Workspace inboxes with super-admin access and SPF, DKIM and DMARC published. No aging and no warming — you run the 51 days yourself.',
    keyword: 'fresh google inboxes',
    subhead:
      'Real licensed Google Workspace accounts, set up properly and handed over the same day. They have never sent an email, so Gmail and Outlook do not know them yet. You do the aging and the warming, and you pay a lot less for the mailbox.',
    pricingKey: 'google-fresh',
    inlineTool: 'warmup-tax',
    ships: [
      'Licensed Google Workspace accounts, **brand new**',
      'Super Admin login transferred to you',
      'SPF, DKIM, DMARC and MX published for you',
      '**No aging and no warming** — that part is yours',
      'Delivered same day',
    ],
    specs: [
      ['Provider', 'Google Workspace'],
      ['Domain age when you get it', 'Whatever your domain already is'],
      ['Warming', 'None. You run it'],
      ['Domain', 'Yours, or add a fresh .com for $12'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Your login', 'Super Admin'],
      ['Ready to send cold email', 'About 51 days from today'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Teams building for a start date two months out', 'If nothing has to go out until then, warming it yourself is the cheaper path and you have the one thing it needs, which is time.'],
      ['Operators who already warm well', 'You have a warming tool, a routine that works and the patience to follow it. You are paying us for licensed mailboxes and clean records, not for the 51 days.'],
      ['Anyone adding capacity behind a working fleet', 'Inboxes that come online in two months, behind ones that are already sending, cost you nothing in missed weeks.'],
    ],
    body: [
      {
        h: 'What fresh actually means here',
        p: [
          'Fresh means the mailbox is real and licensed but has no history. It has never sent or received anything, so as far as Gmail and Outlook are concerned it does not exist yet. That is not a fault. Every inbox that ever worked started in exactly this state.',
          'What you are buying is the part that is annoying rather than slow: a licensed Workspace account, the super-admin login, and SPF, DKIM, DMARC and MX published correctly the first time. Those records are where most people quietly go wrong, and getting them wrong costs you the domain, not just a week.',
        ],
      },
      {
        h: 'The 51 days you are taking on, honestly',
        warn: 'Do not send cold email from these on day one. A domain that starts sending in its first few days gets added to the major blacklists almost straight away, and a listing that early is the hardest kind to remove. If your domain is new, it needs 30 days of sitting still before anything goes out.',
        p: [
          'Our own process is 30 days of aging and then 21 days of warming, which is 51 days before the first cold email. If you buy fresh inboxes on a domain you registered today, that is the clock you are starting.',
          'If the domain is already old and has been sending normal business email for a while, you skip most of the aging and only owe the 21 days of warming. That is the single biggest thing that decides whether fresh is a smart buy or an expensive delay, so work out which case you are in before you order.',
          'Warming means sending and receiving small amounts of real-looking email every day, going up slowly, with replies coming back. Warming tools do this between accounts. It works, but it is not free: you pay for the tool, and a warming tool cannot fix a list that is full of dead addresses.',
        ],
      },
      {
        h: 'What the cheaper price is really buying you',
        p: [
          'A fresh mailbox costs less than a prewarmed one because the 51 days have not been spent yet. The gap between the two prices is roughly what that work costs. Nobody is giving anything away in either direction.',
          'So the question is not which is cheaper. It is what a week of delay costs you. If a client campaign starts on Monday, a fresh inbox is not a saving, it is a missed month. If the campaign starts in December, buying prewarmed is paying for time you already had.',
          'Run your own numbers rather than taking our word for it. The calculator below asks for your deal size and how many meetings you expect, and tells you what the waiting period costs in your business.',
        ],
      },
      {
        h: 'Do this on day one, then leave it alone',
        p: [
          'Check that your records resolve, connect the mailboxes to your warming tool at a low daily number, point the domain at your real website, and set up a real signature and a real profile photo on each account. Then do nothing for a month.',
          'The most common way people ruin fresh inboxes is impatience. They warm for four days, decide it looks fine, send two hundred cold emails, and lose the domain in a fortnight. The schedule is the product. If you are not going to follow it, buy prewarmed instead.',
        ],
      },
    ],
    faqs: [
      ['Are these real Google Workspace accounts?', 'Yes, licensed Workspace accounts on a tenant you get Super Admin access to. The only difference from our prewarmed inboxes is that these have no sending history.'],
      ['When can I send cold email from them?', 'If the domain is brand new, about 51 days: 30 days of aging, then 21 days of warming. If the domain is already old and has been sending normal email, roughly 21 days.'],
      ['Is a domain included?', 'No. Fresh inboxes go on a domain you already own, or you can add a fresh .com for $12. The free prewarmed domain comes with prewarmed inbox packs, not with these.'],
      ['Do I get admin access?', 'Yes, Super Admin. Ask this of every vendor: without it, the inboxes are not yours and stay with the seller the day you stop paying.'],
      ['Do you warm them for me if I change my mind?', 'At that point you want the prewarmed product, which is the same mailbox with the 51 days already done and the domain included.'],
      ['What warming tool should I use?', 'Most sequencers include one. What matters more than which tool you pick is that you let it run the full period and keep the daily number low afterwards.'],
    ],
    related: ['prewarmed-google-inboxes', 'fresh-microsoft-365-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-microsoft-365-inboxes',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-microsoft-365-inboxes', label: 'Prewarmed Microsoft 365 inboxes arrive with the 51 days already done' },
    family: 'fresh',
    eyebrow: 'Fresh Microsoft 365 inboxes',
    h1: 'Fresh Microsoft 365 inboxes you warm yourself',
    title: 'Fresh Microsoft 365 Inboxes for Cold Email — Licensed, Unwarmed, Admin Access',
    description:
      'Brand new licensed Microsoft 365 mailboxes with Exchange admin access and authentication published. No aging and no warming — the cheapest way to build capacity ahead of time.',
    keyword: 'fresh microsoft 365 inboxes',
    subhead:
      'Paid Microsoft 365 mailboxes with the Exchange admin login and SPF, DKIM and DMARC already published. They have no sending history, so you run the warming. It is the cheapest inbox we sell, and the slowest to become useful.',
    pricingKey: 'microsoft-fresh',
    inlineTool: 'inbox-planner',
    ships: [
      'Licensed Microsoft 365 mailboxes, **brand new**',
      'Exchange admin login transferred to you',
      'SPF, DKIM, DMARC and MX published for you',
      '**No aging and no warming** — that part is yours',
      'Delivered same day',
    ],
    specs: [
      ['Provider', 'Microsoft 365, Exchange Online'],
      ['Also called', 'Fresh Outlook inboxes, unwarmed M365'],
      ['Warming', 'None. You run it'],
      ['Domain', 'Yours, or add a fresh .com for $12'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['Your login', 'Exchange admin'],
      ['Ready to send cold email', 'About 51 days from today'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Teams selling into Microsoft-heavy lists, on a budget', 'If the companies you email run Microsoft, sending from Microsoft lands better. These are the cheapest way to get there if you can wait.'],
      ['Anyone splitting their sending across two providers', 'A fleet entirely on Google fails together. Adding Microsoft capacity ahead of time is the cheap version of that insurance.'],
      ['Agencies stocking up between launches', 'Buy the quiet month, warm through it, and have working Microsoft inboxes on the shelf when the next client signs.'],
    ],
    body: [
      {
        h: 'Microsoft is harder on new senders, and that changes the schedule',
        p: [
          'Microsoft is stricter than Gmail with senders it does not know, and it pays close attention to how often people mark your mail as spam. Warming a fresh Microsoft mailbox usually takes longer to show results than warming a fresh Google one, and going up in volume too fast is punished faster.',
          'So if you are warming both at once, expect the Microsoft side to lag. That is normal. It is not a sign the mailbox is broken or the records are wrong.',
        ],
      },
      {
        h: 'The one thing Microsoft gives you that Google does not',
        p: [
          'When Microsoft sends a message to junk, it writes a score and a few related notes into the hidden part of the email. Paste that into a header analyser and you get the actual reason it was filtered. Gmail tells you nothing comparable.',
          'That matters more on fresh inboxes than on warmed ones, because during warming you are flying blind on everything else. If your test emails start going to junk halfway through, Microsoft will usually tell you whether it was the copy, the server or a record failing a check. Use it.',
        ],
      },
      {
        h: 'Authentication is set before you get it, and that is deliberate',
        p: [
          'SPF, DKIM, DMARC and MX are published and checked before handover. That is the step where people building their own infrastructure most often quietly go wrong, and a record that has been wrong for three weeks means three weeks of warming that did nothing.',
          'DMARC is set up from the start. On a domain you only use for cold email, nothing else should ever be sending from it, which makes the strictest setting both safe and correct once the reports confirm it. Read the reports for the first two weeks rather than assuming.',
        ],
      },
      {
        h: 'When fresh is the wrong call',
        warn: 'If a client campaign starts inside the next six weeks, do not buy these. There is no way to shorten warming that does not also cost you the domain, and every trick that claims otherwise is just sending early.',
        p: [
          'Fresh is a good buy when time is the thing you have and money is the thing you do not. It is a bad buy the moment a date is fixed and close. The cost of getting that wrong is not the price difference between the two products; it is the month of meetings you do not get.',
          'If you are somewhere in between, split it. Buy prewarmed inboxes for the campaign that starts now, buy fresh inboxes for the capacity you will need in the quarter, and warm the second set behind the first. That is what most teams sending seriously end up doing, and it is cheaper than either extreme.',
        ],
      },
    ],
    faqs: [
      ['Are these the same mailboxes as your prewarmed Microsoft 365 inboxes?', 'The same product with no sending history. Same licence, same Exchange admin access, same records. What is missing is the 51 days and the included domain.'],
      ['When can I send cold email from them?', 'About 51 days if the domain is new: 30 days of aging then 21 of warming. Roughly 21 days if the domain is already old and has been sending normal business email.'],
      ['Are these Outlook.com accounts?', 'No. Licensed Microsoft 365 mailboxes with Exchange Online on a domain you control. Free personal accounts are not sending infrastructure.'],
      ['Is a domain included?', 'No. Use your own, or add a fresh .com for $12. The free prewarmed domain comes with prewarmed packs.'],
      ['Will these connect to my sequencer?', 'Yes. Use the modern login method where your tool offers it, and set the daily cap per inbox to your warming figure rather than the platform default.'],
      ['How many should I put on one domain?', 'Three, the same as prewarmed. Fewer inboxes across more domains is the right shape whether or not you warmed them yourself.'],
    ],
    related: ['prewarmed-microsoft-365-inboxes', 'fresh-google-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-azure-inboxes',
    family: 'fresh',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-azure-inboxes', label: 'A prewarmed Azure tenant arrives with all 100 mailboxes already warmed' },
    eyebrow: 'Fresh Azure tenants',
    h1: 'Fresh Azure tenants: 100 mailboxes you warm yourself',
    title: 'Fresh Azure Inboxes — 100-Mailbox Tenants, Unwarmed, Admin Access Included',
    description:
      'A dedicated Azure tenant with 100 Exchange Online mailboxes, delivered with no aging and no warming. The cheapest sending capacity there is, and the hardest to bring online.',
    keyword: 'fresh azure inboxes',
    subhead:
      'Your own Azure account holding 100 mailboxes, handed over with the admin login and the records already set up. No aging, no warming, no domain. Warming a hundred mailboxes is a real job, and most of this page is about whether you should take it on.',
    pricingKey: 'azure-fresh',
    inlineTool: 'inbox-rotation-planner',
    waMessage: 'Hi — I am interested in a fresh Azure tenant (100 mailboxes, unwarmed). Could you send me the price?',
    ships: [
      'A dedicated Azure tenant, **100 mailboxes**',
      'Global Admin login, tenant ID and the mailbox list',
      'SPF, DKIM, DMARC and MX published for you',
      '**No aging and no warming** — that part is yours',
      'Delivered same day',
    ],
    specs: [
      ['Product', 'Dedicated Azure tenant'],
      ['Mailboxes', '100 Exchange Online'],
      ['Warming', 'None. You run it'],
      ['Domain', 'Yours, or add a fresh .com for $12'],
      ['Email records', 'SPF · DKIM · DMARC · MX already set'],
      ['What you get', 'Global Admin login, tenant ID, mailbox list'],
      ['Ready to send cold email', 'About 51 days from today'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Teams who have warmed a tenant before', 'You have done this, you know how many weeks it takes and what it costs in warming seats. You are buying the tenant, not the help.'],
      ['Operators building for next quarter', 'Buy now, warm through a quiet month, and have 1,000 to 1,500 emails a day of capacity ready the week you need it.'],
      ['Anyone who has priced the warming and still wants it', 'Warming tools charge per mailbox. A hundred mailboxes for the better part of two months is the number that decides this, and most people never work it out.'],
    ],
    body: [
      {
        h: 'Warming a hundred mailboxes is not warming three, a hundred times over',
        p: [
          'This is the part that catches people. Almost every warming tool charges per mailbox. Three mailboxes for three weeks is a rounding error. A hundred mailboxes for the better part of two months is a real bill, and it arrives every month until you are done.',
          'Work that number out before you order, not after. Take what your warming tool charges per mailbox, multiply by a hundred, multiply by two months. Compare it to the gap between this and a prewarmed tenant. For a lot of teams the gap closes completely, and some find that warming it themselves costs more than buying it warmed.',
          'The other cost is the calendar. It is not a hundred separate 51-day clocks, it is one clock running on all hundred at once, and nothing you buy can make it shorter.',
        ],
      },
      {
        h: 'One reputation, and nothing to fall back on',
        warn: 'All 100 mailboxes share one reputation, and on a fresh tenant none of them have any yet. There is no history to absorb a mistake. A single unverified list in the first month can finish the whole tenant before it has ever landed anything.',
        p: [
          'When you buy in packs of three and something goes wrong, you lose three inboxes. Here you can lose a hundred at once. That is the trade you make for the cost per inbox, and it is the same trade the prewarmed tenant asks you to make.',
          'The difference is that a prewarmed tenant has already sent and received real mail for three weeks and survived it. A fresh one has proved nothing. You are taking on the concentrated risk and the unproven start at the same time, which is why this is the most advanced thing on the site rather than just the cheapest.',
        ],
      },
      {
        h: 'Bring them online in batches, not all at once',
        p: [
          'Do not switch on a hundred brand new mailboxes on the same morning. Start about twenty, let them run, watch what happens, and add the next twenty when the first are behaving. A hundred accounts appearing from nowhere and immediately sending is a pattern worth avoiding.',
          'Verify every list before it touches the tenant, and check your bounce rate daily for the first fortnight. Bounces are the fastest way to lose a tenant, and on a hundred shared mailboxes they are the most expensive.',
          'Plan the rotation before the first send rather than after. Ten to fifteen emails per mailbox per day across a hundred mailboxes is a thousand to fifteen hundred a day, which is plenty, and going higher buys you very little while risking all of it.',
        ],
      },
      {
        h: 'When to buy the prewarmed tenant instead',
        p: [
          'If you have never run a tenant, do not start with a fresh one. The prewarmed version exists because the first two months are where tenants die, and having someone else take that risk is most of what you are paying for.',
          'Buy fresh when all three of these are true: your start date is more than two months out, you already run warming infrastructure and know what it costs, and you have done a staged tenant startup before. If any one of them is false, the prewarmed tenant is cheaper than it looks.',
          'And if you are somewhere in between, split it. Run a prewarmed tenant for what is live now and warm a fresh one behind it for next quarter. That is what teams sending at this volume actually do.',
        ],
      },
    ],
    faqs: [
      ['What is an Azure tenant for cold email?', 'Your own Microsoft cloud directory containing 100 Exchange Online mailboxes under one admin login. Buying a tenant rather than mailboxes three at a time is what drops the cost per inbox by about ten times.'],
      ['When can I send cold email from it?', 'About 51 days if the domain is new: 30 days of aging, then 21 of warming. Roughly 21 days if the domain is already old and has been sending normal business email.'],
      ['Is a domain included?', 'No. Fresh products go on a domain you already own, or you can add a fresh .com for $12. The free prewarmed domain comes with prewarmed packs and prewarmed tenants.'],
      ['Do I get Global Admin?', 'Yes, plus the tenant ID and a spreadsheet of all 100 mailboxes and their passwords.'],
      ['What does it cost to warm 100 mailboxes?', 'That depends on your warming tool, and it is the number that should decide this purchase. Most tools charge per mailbox per month. Multiply by a hundred, then by two months, before you order.'],
      ['Should I buy this if I have never run a tenant?', 'Honestly, no. Start with the prewarmed tenant, learn how it behaves, and buy fresh ones once you know what the first two months take.'],
      ['How is it priced?', 'Per tenant. The figure is not published on this page yet — message us and we will send you the current one.'],
    ],
    related: ['prewarmed-azure-inboxes', 'fresh-microsoft-365-inboxes', 'fresh-domains'],
  },
  {
    slug: 'fresh-domains',
    alt: { lead: 'Need to send this week?', slug: 'prewarmed-domains', label: 'A prewarmed domain is free with any inbox pack' },
    family: 'fresh',
    eyebrow: 'Fresh domains',
    h1: 'Fresh .com domains, registered clean and handed over',
    title: 'Fresh .com Domains for Cold Email — $12, Registered Clean, No History',
    description:
      'Fresh .com domains registered clean and handed over the same day. No prior use, no blocklist history, no warming. $12 per domain, one-time.',
    keyword: 'fresh domains for cold email',
    subhead:
      'A .com registered new, with nothing behind it. No previous owner, no old spam, nothing to inherit. It also has no reputation at all, so it needs 30 days of sitting still and then 21 days of warming before you send anything cold from it.',
    pricingKey: 'domain-fresh',
    inlineTool: 'record-generator',
    ships: [
      'A **.com registered new** in your name',
      'Registrar and nameserver control handed to you',
      'No prior owner and no prior use',
      '**No aging and no warming** — that part is yours',
      'Delivered same day',
    ],
    specs: [
      ['Type', 'Newly registered .com'],
      ['Price', '$12 per domain, one-time'],
      ['History', 'None. That is the point'],
      ['Aging', 'None. You run the 30 days'],
      ['Warming', 'None. You run the 21 days'],
      ['DNS', 'Yours to publish, or we set it up with inboxes'],
      ['Ready to send cold email', 'About 51 days from registration'],
      ['You get it', 'Same day, business days'],
    ],
    whoFor: [
      ['Teams planning a quarter ahead', 'Register now, let it sit, warm it, and have clean capacity the month you need it. This is the cheapest way to build a fleet if you start early enough.'],
      ['Anyone burned by a second-hand domain', 'A fresh registration cannot be carrying somebody else\'s spam history, because there is no history to carry.'],
      ['Operators who want more domains, not more inboxes', 'Three inboxes across ten domains survives an incident that ends thirty inboxes on three. At $12 each, spreading out is affordable.'],
    ],
    body: [
      {
        h: 'Fresh, aged and prewarmed are three different things',
        p: [
          'Fresh means registered recently, with no history at all. Aged means registered a long time ago, which tells you nothing about whether it ever sent email and can hide something bad about what it did send. Prewarmed means it has both aged and then sent and received real email, with its records in place the whole time.',
          'Only the third one comes with any trust attached. But fresh has one real advantage over aged: you know exactly what you are getting, because there is nothing there. A domain registered in 2011, abandoned four times and last used for spam is worse than one registered last month, and the listing that sells it to you will only mention 2011.',
        ],
      },
      {
        h: 'The 30 days of doing nothing is not optional',
        warn: 'Do not send from a domain in its first month. A domain that starts sending in its first few days gets added to the major blacklists almost straight away, and a listing that early is the hardest kind to get removed. This is the step most sellers skip, because waiting means slower stock turnover for them.',
        p: [
          'Age is one of the very few things Gmail and Outlook can check that a sender cannot fake or speed up. It is also the cheapest protection there is, and it costs you nothing but patience.',
          'Publish your records on day one, point the domain at your real website, and then leave it alone for thirty days. After that, warm it for twenty-one more. Fifty-one days from registration, it is ready for cold email.',
          'When someone advertises a prewarmed domain delivered in 48 hours, this is the part they left out.',
        ],
      },
      {
        h: 'What twelve dollars is and is not buying',
        p: [
          'Twelve dollars is roughly what a .com registration costs. We are not making money on the domain itself, and we are not pretending that registering one is difficult. You could do it yourself in five minutes.',
          'The reason to buy it here is that it arrives alongside the inboxes, in one order, with the records already prepared to match. If you would rather register it yourself at your own registrar, do that. It is the same domain.',
          'What it is not buying is reputation. A fresh domain and a prewarmed domain are not the same product at different prices. One is a starting point, the other is fifty-one days of finished work, and the prewarmed one is free with any inbox pack for exactly that reason.',
        ],
      },
      {
        h: 'Why the free prewarmed domain usually wins',
        p: [
          'Our prewarmed .com costs nothing when you buy inboxes with it. It has already had its thirty days of aging, its twenty-one days of warming, and its records checked. Against that, a twelve dollar fresh domain is only the better buy when you are building capacity for a date that is more than two months out.',
          'So the honest version is this: buy fresh domains when you are stocking up. Take the free prewarmed one when you need to send. Most teams end up doing both, and the split is decided by the calendar rather than by the price.',
        ],
      },
    ],
    faqs: [
      ['Do I own the domain?', 'Yes. Registrar access and nameserver control are transferred to you. Ask this of any vendor: a domain sitting on their nameservers is theirs.'],
      ['When can I send cold email from it?', 'About 51 days after registration: 30 days of sitting still, then 21 days of warming. Sending earlier is the most common way people lose a domain in week two.'],
      ['Why is this $12 when the prewarmed domain is free?', 'The prewarmed one is free because the fifty-one days of work lives in the mailboxes you buy with it. A fresh domain is just the registration, and twelve dollars is about what a .com costs.'],
      ['Can I use my own registrar instead?', 'Yes, and it is the same domain. Buy it here only if you want it to arrive with the inboxes in one order.'],
      ['Are non-.com domains available?', 'Yes, via support. TLD carries real reputation differences, so ask before assuming a cheaper one is equivalent.'],
      ['What about aged domains?', 'Those are priced per domain, because age, prior use, drop history and blocklist exposure all vary. We check the history before anything is handed over. See the domains page for how that works.'],
    ],
    related: ['prewarmed-domains', 'fresh-google-inboxes', 'fresh-microsoft-365-inboxes'],
  },
];

export const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
