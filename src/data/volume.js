/**
 * Safe cold sends per inbox per day, by platform.
 *
 * These are the figures Warm Inboxes publishes and sizes every fleet on, and
 * they are identical across warminboxes.com/how-it-works, /instantly-inboxes
 * and /smartlead-inboxes as checked on the date below. Every table and sizing
 * figure on this site that is not a product spec sheet renders from here, so
 * the figure is changed once and every page follows.
 *
 * perContainer is how many inboxes share one reputation: three to a domain on
 * Google, up to 100 to a domain on Microsoft 365, and the tenant size on
 * Azure, which is billed flat whatever is on it. A lighter tenant therefore
 * sends more per inbox for the same money.
 */
export const volume = {
  checkedOn: '2026-10-21',
  source: 'https://warminboxes.com/how-it-works',
  warmupPerDay: 30,
  rows: [
    { key: 'google', label: 'Google Workspace', perDay: 15, perContainer: 3, container: 'domain' },
    { key: 'microsoft', label: 'Microsoft 365', perDay: 8, perContainer: 100, container: 'domain' },
    { key: 'azure-100', label: 'Azure, full tenant of 100', perDay: 2, perContainer: 100, container: 'tenant' },
    { key: 'azure-50', label: 'Azure, 50 per tenant', perDay: 4, perContainer: 50, container: 'tenant' },
    { key: 'azure-25', label: 'Azure, 25 per tenant', perDay: 6, perContainer: 25, container: 'tenant' },
  ],
};

export const rate = (key) => volume.rows.find((r) => r.key === key).perDay;

/** Inboxes and domains or tenants needed for a daily cold-send target. */
export function sizeFor(target, key) {
  const r = volume.rows.find((x) => x.key === key);
  const inboxes = Math.ceil(target / r.perDay);
  return { inboxes, containers: Math.ceil(inboxes / r.perContainer), container: r.container };
}
