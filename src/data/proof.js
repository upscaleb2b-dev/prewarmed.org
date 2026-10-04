/**
 * Operator proof, taken from the Warm Inboxes offer page.
 *
 * Every figure below is published at warminboxes.com/offer. None of it is
 * estimated, rounded up or inferred here. Where a number is theirs rather
 * than an industry average, the copy says so — "the team that fulfils these
 * orders sends this much" is a far stronger claim than an unattributed stat,
 * and it is the only kind this site is willing to print.
 *
 * Re-check against the source before changing anything. `checkedOn` is the
 * date the figures were last read off that page.
 */
export const checkedOn = '2026-10-04';

export const operator = {
  monthlySends: '1,000,000+',
  replyRate: '4%+',
  teamsServed: '500+',
  namedTeams: ['Agency Velocity', 'Revenue Boost', 'PLNitude', 'Understory', 'B2BScale'],
};

export const certifications = [
  { label: 'Instantly Certified Expert' },
  { label: 'Smartlead Partner' },
  { label: 'Clay Verified Partner' },
];

/** Campaign results published on the offer page, biggest first. */
export const campaigns = [
  { sent: '2.8M', reply: '6.05%', pipeline: '$8.5M' },
  { sent: '2.3M', reply: '4.87%', pipeline: '$6.9M' },
  { sent: '1.3M', reply: '4.41%', pipeline: '$3.3M' },
  { sent: '279.5K', reply: '4.61%', pipeline: '$1M' },
];

/**
 * The four failure modes, from the offer page's "4 invisible places where
 * cold email infrastructure dies". Kept because they are the honest answer to
 * "why did my last setup break", and because three of the four are things a
 * buyer can check for themselves before ordering from anyone.
 */
export const failureModes = [
  {
    h: 'DNS misconfiguration',
    p: 'One wrong DMARC policy, p=none where you meant p=reject, or a missing semicolon, and authentication fails silently. Mail still delivers, so nothing looks broken, while reputation decays underneath. Most teams never find it.',
    check: 'dmarc-checker',
  },
  {
    h: 'Shared tenant contamination',
    p: 'When a provider stacks several clients into one Google or Microsoft organisation, one bad sender bleeds into everyone else in it. You did not burn your domain. Someone you have never met did.',
  },
  {
    h: 'Fake warmup signals',
    p: 'Cheap warmup tools cycle the same few hundred accounts between each other. Inbox providers fingerprinted those patterns years ago and discount the engagement entirely, so a domain can finish a full warmup cycle with no real reputation attached to it.',
    check: 'blacklist-checker',
  },
  {
    h: 'No recovery plan',
    p: 'Infrastructure breaks mid-campaign eventually. What decides the cost is how long you wait: a provider on a 24 to 72 hour ticket queue means a stalled pipeline, a client asking questions, and a week spent rebuilding.',
  },
];

/** The sequencers an order exports into, from the offer page. */
export const sequencers = ['Instantly', 'Smartlead', 'EmailBison', 'ManyReach', 'Apollo', 'ZoomInfo', 'HubSpot'];
