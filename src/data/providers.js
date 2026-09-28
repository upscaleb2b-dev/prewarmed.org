/**
 * Provider directory.
 *
 * HARD RULE: every field about a company other than Warm Inboxes is null
 * until somebody has checked it against that company's own site and written
 * the date here. Nothing in this file may be filled in from memory, from a
 * competitor's ad copy, or from what "everyone knows". A directory that gets
 * a rival's spec wrong is worse than no directory: it is both a legal problem
 * and the fastest way to lose the reader we are trying to earn.
 *
 * `scripts/check-providers.mjs` blocks `npm run build:live` while any listed
 * provider still has verified === false.
 *
 * Field meanings (these are the criteria the whole site judges on):
 *   agingDays      days the domain is left alone before its first send
 *   warmingDays    days of real send/receive traffic before handover
 *   adminAccess    'full' | 'partial' | 'none' | null
 *   domainIncluded true | false | null
 *   replacement    replacement terms available in writing before ordering
 *   platforms      which mailbox platforms they sell
 *   delivery       how fast you receive it
 */
export const criteria = [
  ['Domain aging', 'Days the domain sits with its records published before the first send. Under 30 and the domain is exposed to an early blocklisting that is very hard to reverse.'],
  ['Warming', 'Days of real sending and receiving before you get it. Age without traffic builds no reputation, and a lot of what is sold as prewarmed is aged only.'],
  ['Admin access', 'Whether the login that owns the mailboxes is transferred to you. Without it you are renting, and everything stays with the seller the day you stop paying.'],
  ['Domain included', 'Whether the domain costs extra. Paying per domain pushes buyers toward more inboxes on fewer domains, which is the wrong shape.'],
  ['Replacement terms', 'What happens when a domain stops landing, in writing, before you order. Every provider has failures; they differ in how fast they replace.'],
  ['Platforms', 'Google Workspace, Microsoft 365 and Azure tenants behave differently. A provider selling only one cannot match you to your list.'],
];

export const providers = [
  {
    slug: 'warm-inboxes',
    name: 'Warm Inboxes',
    ours: true,
    verified: true,
    checkedOn: '2026-09-16',
    checkedBy: 'owner-supplied site export',
    summary:
      'The provider this site is operated by. Prewarmed inboxes on domains aged 30 days and warmed 21, with the domain included and admin access transferred.',
    agingDays: 30,
    warmingDays: 21,
    adminAccess: 'full',
    domainIncluded: true,
    replacement: 'Ask for the terms in writing before ordering, from us as much as anyone.',
    platforms: ['Google Workspace', 'Microsoft 365', 'Azure / Entra tenants'],
    delivery: 'Same day, business days',
    page: '/providers/warm-inboxes/',
  },
  // ---- Not yet checked. Names supplied by the site owner; every fact null. ----
  { slug: 'zapmail', name: 'Zapmail', verified: false },
  { slug: 'inboxkit', name: 'InboxKit', verified: false },
  { slug: 'puzzleinbox', name: 'PuzzleInbox', verified: false },
  { slug: 'instantly', name: 'Instantly', verified: false },
].map((p) => ({
  ours: false,
  summary: null,
  agingDays: null,
  warmingDays: null,
  adminAccess: null,
  domainIncluded: null,
  replacement: null,
  platforms: null,
  delivery: null,
  page: null,
  checkedOn: null,
  checkedBy: null,
  ...p,
}));

export const unverified = providers.filter((p) => !p.verified);
export const allVerified = unverified.length === 0;

/** Renders a field, or says plainly that nobody has checked it. */
export const val = (v, fmt = (x) => x) => (v === null || v === undefined ? null : fmt(v));
