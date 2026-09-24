export const site = {
  name: 'prewarmed.org',
  tagline: 'Prewarmed inboxes and domains for cold email',
  operator: 'Warm Inboxes',
  operatorUrl: 'https://warminboxes.com',
  whatsapp: '', // TODO: wa.me link
  correctionsEmail: 'hello@prewarmed.org',
  // One line, every page footer. Ads policy and buyer trust both need it.
  disclosure:
    'prewarmed.org is operated by the team behind Warm Inboxes (warminboxes.com). Orders are fulfilled by Warm Inboxes.',
  trademark:
    'Google Workspace, Microsoft 365, Azure and Entra are trademarks of their respective owners. prewarmed.org is not affiliated with or endorsed by Google or Microsoft.',
};

/** Outbound link builder. Brand anchors only — never keyword-rich anchor text. */
export function wi(path = '/', { page = 'site', placement = 'body' } = {}) {
  const u = new URL(path, 'https://warminboxes.com');
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
  { label: 'Inboxes', href: '/prewarmed-inboxes/', children: [
    { label: 'Google Workspace', href: '/prewarmed-google-inboxes/' },
    { label: 'Microsoft 365', href: '/prewarmed-microsoft-365-inboxes/' },
    { label: 'Outlook', href: '/prewarmed-outlook-inboxes/' },
    { label: 'Azure tenants', href: '/prewarmed-azure-inboxes/' },
    { label: 'Entra tenants', href: '/prewarmed-entra-inboxes/' },
  ]},
  { label: 'Domains', href: '/prewarmed-domains/' },
  { label: 'Free tools', href: '/tools/', mega: true },
  { label: 'Free leads', href: '/leads/', leads: true },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'How it works', href: '/how-it-works/' },
];
