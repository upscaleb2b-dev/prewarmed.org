/**
 * Broad-intent pages: the searches people make before they know which
 * product they want ("cold email inboxes", "reseller inboxes", "inboxes for
 * Instantly"). Each page answers its own question with its own substance and
 * then hands off to the matching page on warminboxes.com, which is where the
 * order happens.
 *
 * Only the metadata lives here, so the footer, llms.txt and the pages share
 * one list. The body of each page is in src/pages/<slug>.astro.
 *
 * Figures come from volume.js and pricing.json, never typed into copy.
 */
import tools from './tools.json';
import { toolUrl } from './site.js';

export const intents = [
  {
    slug: 'cold-email-inboxes',
    label: 'Cold email inboxes',
    eyebrow: 'Cold email inboxes',
    title: 'Cold Email Inboxes on Google, Microsoft and Azure | prewarmed.org',
    description: 'Cold email inboxes on Google Workspace, Microsoft 365 and Azure, on their own domains with DNS set and warmup running. How many you need and what they cost.',
    h1: 'Cold email inboxes, ready to send',
    lede: 'Real Google Workspace, Microsoft 365 and Azure mailboxes on separate sending domains, authenticated before you log in, with warmup already running underneath.',
    wi: { url: 'https://warminboxes.com/offer', label: 'See the full offer' },
  },
  {
    slug: 'cold-email-infrastructure',
    label: 'Cold email infrastructure',
    eyebrow: 'Cold email infrastructure',
    title: 'Cold Email Infrastructure Setup: The Six Layers | prewarmed.org',
    description: 'Cold email infrastructure in the order it gets built: domains, inboxes, platform, DNS, warmup and pace, plus what 1,000 sends a day costs a month.',
    h1: 'Cold email infrastructure, built in order',
    lede: 'Six layers, each one decided before the next. Get them in this order and the fleet lasts; skip one and the sequencer is the first thing that notices.',
    wi: { url: 'https://warminboxes.com/blog/cold-email-infrastructure-setup', label: 'Read the full setup guide' },
  },
  {
    slug: 'reseller-inboxes',
    label: 'Reseller inboxes',
    eyebrow: 'Reseller inboxes',
    title: 'Reseller Inboxes for Cold Email: What Matters | prewarmed.org',
    description: 'Reseller inboxes are Google or Microsoft seats set up on a provider\'s tenants. The four things that decide whether they last, and how to test a batch.',
    h1: 'Reseller inboxes for cold email',
    lede: 'Google and Microsoft seats provisioned on a provider\'s infrastructure, with the setup done for you. Four things decide whether a batch keeps landing for months.',
    wi: { url: 'https://warminboxes.com/blog/google-vs-outlook-vs-smtp-cold-email-inboxes', label: 'Google vs Microsoft vs SMTP' },
  },
  {
    slug: 'buy-email-accounts',
    label: 'Buy email accounts',
    eyebrow: 'Buy email accounts',
    title: 'Buy Cold Email Accounts: Prices, Setup and Steps | prewarmed.org',
    description: 'Buy prewarmed email accounts for cold email: what a complete account includes, what it costs per inbox, how many to buy, and the first steps after payment.',
    h1: 'Buy email accounts for cold email',
    lede: 'What a complete account includes, what it costs, how many you need for your volume, and the six things to do between paying and your first campaign.',
    wi: { url: 'https://warminboxes.com/blog/how-to-buy-pre-warmed-email-accounts', label: 'Read the buying guide' },
  },
  {
    slug: 'agency-inboxes',
    label: 'Inboxes for agencies',
    eyebrow: 'For agencies',
    title: 'Inboxes for Cold Email Agencies, Per Client | prewarmed.org',
    description: 'Cold email inboxes for agencies, ordered one client at a time so one client\'s list can never touch another\'s domain. Launch, scale and offboard cleanly.',
    h1: 'Inboxes for cold email agencies',
    lede: 'One order per client, on domains nobody else sends from. A client\'s bad week stays theirs, and onboarding the next one is a new order rather than a rebuild.',
    wi: { url: 'https://warminboxes.com/hub/cold-email-agency', label: 'Agency ops hub' },
  },
  {
    slug: 'instantly-inboxes',
    label: 'Inboxes for Instantly',
    eyebrow: 'For Instantly',
    title: 'Inboxes for Instantly: Connect and Set Limits | prewarmed.org',
    description: 'Google, Microsoft 365 and Azure inboxes for Instantly: how to connect them, the daily limit to set on each, and how many you need for 1,000 sends a day.',
    h1: 'Inboxes for Instantly',
    lede: 'Official mailboxes, authenticated before handover and ready to connect to your Instantly workspace. What to connect, what limit to set, and how big the fleet needs to be.',
    wi: { url: 'https://warminboxes.com/instantly-inboxes', label: 'Instantly setup guide' },
  },
  {
    slug: 'smartlead-inboxes',
    label: 'Inboxes for Smartlead',
    eyebrow: 'For Smartlead',
    title: 'Inboxes for Smartlead, Laid Out per Client | prewarmed.org',
    description: 'Google, Microsoft 365 and Azure inboxes for Smartlead, exported into the client workspace you name. The per-client layout, the import and the caps.',
    h1: 'Inboxes for Smartlead',
    lede: 'Mailboxes exported straight into the Smartlead client workspace you name, laid out so one client\'s scraped list never reaches another client\'s domain.',
    wi: { url: 'https://warminboxes.com/smartlead-inboxes', label: 'Smartlead setup guide' },
  },
];

export const intent = (slug) => intents.find((i) => i.slug === slug);

/** UTM-tagged link to one free tool by its key in tools.json. */
export const tool = (key, page, placement = 'body') => toolUrl(tools.tools.find((t) => t.id === key), { page, placement });
