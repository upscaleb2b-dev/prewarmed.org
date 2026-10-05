export const site = {
  name: 'prewarmed.org',
  tagline: 'Prewarmed inboxes and domains for cold email',
  operator: 'Warm Inboxes',
  operatorUrl: 'https://warminboxes.com',
  // Sister property: done-for-you cold email campaigns, same team.
  agency: 'Upscale B2B',
  agencyUrl: 'https://upscaleb2b.com',
  // Same number warminboxes.com publishes as 'Contact via WhatsApp'.
  whatsapp: 'https://wa.me/19047362539',
  correctionsEmail: 'hello@prewarmed.org',
  // Registered operating entity. Named on the legal pages and in the
  // Organization schema: Google Ads advertiser verification asks for it, and
  // a site that will not say who it trades as is one people bounce from.
  entity: 'Upscale Systems LLC',
  phone: '+1 904 736 2539',

  /**
   * Alpha Foundation.
   *
   * prewarmed.org is a commercial service whose net proceeds fund the
   * foundation's work, and /alpha-foundation/ is the disclosure that says so.
   * Every fact below is published by the foundation itself; none of it is
   * inferred, and the wording deliberately says "net proceeds" rather than
   * "revenue", because licences, domains and fulfilment are paid before
   * anything can be given away.
   */
  alpha: {
    name: 'Alpha Foundation',
    url: 'https://alpha-f.org',
    email: 'founder@alpha-f.org',
    charityId: '4274876-3',
    address: {
      street: 'Kot Ghulam Muhammad Khan, 372-E Gulburg Colony',
      city: 'Kasur',
      postal: '55050',
      country: 'PK',
    },
  },
  /**
   * Front page override. True serves the Alpha Foundation page at / instead
   * of the home page; everything else on the site stays exactly where it is
   * and stays reachable. Set it to false to put the home page back. That is
   * the whole revert, nothing else moves.
   */
  alphaMode: true,
  /**
   * Where the contact form posts.
   *
   * Warm Inboxes' existing capture endpoint, cross-origin. It already sends
   * Access-Control-Allow-Origin: * and already answers the preflight, so this
   * site needs no backend of its own, which is the point. prewarmed.org
   * stays a static asset with no server, no secrets and nothing to maintain,
   * and there is exactly one copy of the GoHighLevel token, on one site.
   *
   * Empty this and the form falls back to showing the visitor their message
   * to send by hand. It never claims delivery it cannot perform.
   */
  leadEndpoint: 'https://warminboxes.com/.netlify/functions/ghl-capture',
  // Becomes a GHL tag. Namespaced so leads from here stay separable from
  // warminboxes.com's own, and allow-listed at the endpoint.
  leadSource: 'prewarmed:contact',
  /**
   * Measurement. Nothing renders while these are empty, so the site ships no
   * third-party script until someone deliberately turns one on. Running paid
   * traffic without at least ga4 or adsId set means buying clicks blind.
   */
  analytics: {
    ga4: 'G-YNG4RRZ4YQ',
    adsId: '',      // 'AW-XXXXXXXXX'
    adsLabel: '',   // conversion label for the lead action
    /**
     * Cross-domain. The sale completes on warminboxes.com, so without these
     * the handoff looks like a bounce here and a fresh direct visit there.
     * gtag decorates outbound links to these hosts with _gl.
     */
    linkDomains: ['warminboxes.com', 'upscaleb2b.com'],
    /**
     * Extra GA4 properties configured alongside ga4 on every page.
     *
     * GA4 stitches a journey only inside ONE property, and the sale happens
     * on warminboxes.com, so its property has to see this side too or the
     * funnel is split in half with no way to join it. Firing both ids keeps
     * ga4 above as the clean prewarmed.org-only property for content and SEO,
     * while the Warm Inboxes property gets the whole path through to the
     * order. Cross-domain must list both domains in that property as well.
     */
    ga4Extra: ['G-E7DJJB6E4D'],
    /**
     * Tag Manager, Meta and X, all from the warminboxes.com build.
     *
     * Installed the standard way rather than the deferred way that site runs:
     * it holds every tracker until first interaction or 12 seconds, which is
     * good for page speed and is also the likeliest reason Google's tag
     * checker reports "not detected" there. Ads are about to run here, so the
     * checker has to pass.
     *
     * NOTE: if the GTM container itself fires a GA4 config tag for
     * G-E7DJJB6E4D, that property counts every page view twice, once from
     * GTM, once from the gtag config above. Check the container before
     * trusting the numbers.
     */
    gtm: 'GTM-N4S35S8Z',
    metaPixel: '590848983594765',
    xPixel: 'r5gy0',
    xLeadEvent: 'tw-r5gy0-r5gy1',
  },
  // One line, every page footer. Ads policy and buyer trust both need it.
  disclosure:
    'prewarmed.org is operated by the team behind Warm Inboxes (warminboxes.com) and Upscale B2B (upscaleb2b.com). Orders are fulfilled by Warm Inboxes.',
  trademark:
    'Google Workspace, Microsoft 365, Azure and Entra are trademarks of their respective owners. prewarmed.org is not affiliated with or endorsed by Google or Microsoft.',
};

/** Outbound link builder. Brand anchors only, never keyword-rich anchor text. */
export function wi(path = '/', { page = 'site', placement = 'body' } = {}) {
  const u = new URL(path, 'https://warminboxes.com');
  u.searchParams.set('utm_source', 'prewarmed.org');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', page);
  u.searchParams.set('utm_content', placement);
  return u.toString();
}

/** Same contract as wi(), for the agency side. */
export function ub(path = '/', { page = 'site', placement = 'body' } = {}) {
  const u = new URL(path, site.agencyUrl);
  u.searchParams.set('utm_source', 'prewarmed.org');
  u.searchParams.set('utm_medium', 'referral');
  u.searchParams.set('utm_campaign', page);
  u.searchParams.set('utm_content', placement);
  return u.toString();
}

export function toolUrl(tool, { page = 'site', placement = 'body', domain = '' } = {}) {
  if (tool.host === 'prewarmed.org') return tool.url;
  const u = new URL(tool.url);
  if (domain && tool.supportsDomainParam) u.searchParams.set('domain', domain);
  u.searchParams.set('utm_source', 'prewarmed.org');
  u.searchParams.set('utm_medium', 'tools');
  u.searchParams.set('utm_campaign', page);
  u.searchParams.set('utm_content', placement);
  return u.toString();
}

/**
 * WhatsApp link. Falls back to /contact/ while site.whatsapp is empty, so a
 * missing number never ships as a dead link.
 */
export function wa(message = '') {
  if (!site.whatsapp) return '/contact/';
  const u = new URL(site.whatsapp);
  if (message) u.searchParams.set('text', message);
  return u.toString();
}

export const nav = [
  /**
   * Four entries on purpose. Outlook, Entra and the Microsoft 365 variants
   * all have their own pages and are linked from the footer, the hubs and
   * each product's related list, they earn search traffic without having to
   * sit in a dropdown that a buyer has to read before choosing.
   */
  { label: 'Inboxes', href: '/prewarmed-inboxes/', children: [
    { label: 'Prewarmed Google Inboxes', href: '/prewarmed-google-inboxes/' },
    { label: 'Prewarmed Azure Inboxes', href: '/prewarmed-azure-inboxes/' },
    { label: 'Fresh Google Inboxes', href: '/fresh-google-inboxes/' },
    { label: 'Fresh Azure Inboxes', href: '/fresh-azure-inboxes/' },
  ]},
  { label: 'Domains', href: '/prewarmed-domains/', children: [
    { label: 'Prewarmed Domains', href: '/prewarmed-domains/' },
    { label: 'Fresh Domains', href: '/fresh-domains/' },
  ]},
  { label: 'Free tools', href: '/tools/', mega: true },
  { label: 'Free leads', href: '/leads/', leads: true },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'How it works', href: '/how-it-works/' },
  { label: 'DFY Cold Email', href: ub('/', { page: 'nav', placement: 'header' }), external: true },
];
