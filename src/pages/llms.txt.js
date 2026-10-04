/**
 * /llms.txt — a plain-text map of the site for language models.
 *
 * Generated from the same data the pages render from, so it cannot drift.
 * The convention is a title, a one-paragraph summary, then grouped links with
 * a short description each.
 */
import { products } from '../data/products.js';
import { site } from '../data/site.js';
import pricing from '../data/pricing.json';
import tools from '../data/tools.json';
import leads from '../data/leads.json';

const B = 'https://prewarmed.org';
const P = pricing.products;
const link = (path, title, desc) => `- [${title}](${B}${path})${desc ? `: ${desc}` : ''}`;

export function GET() {
  const prewarmed = products.filter((p) => p.family === 'prewarmed');
  const fresh = products.filter((p) => p.family === 'fresh');
  const live = tools.tools.filter((t) => t.live);

  const body = `# prewarmed.org

> Prewarmed inboxes and domains for cold email. A domain is aged 30 days, then
> warmed 21 days on real traffic, so it can send cold email the day you receive
> it. Google Workspace, Microsoft 365 and Azure tenants. ${site.disclosure}

Key definitions used throughout this site:

- **Prewarmed**: a domain that has been aged AND then used to send and receive real mail under published authentication. 51 days total.
- **Fresh**: a licensed mailbox with no sending history. The buyer runs the 51 days.
- **Aged**: registered long ago. Says nothing about whether it ever sent mail, and is not the same as prewarmed.

Current pricing (confirmed ${pricing._confirmedAt}, ${pricing.currency}):

- Prewarmed Google Workspace and Microsoft 365: from $${P['google-prewarmed'].perUnit.quarterly} per inbox per month, sold in packs of ${P['google-prewarmed'].packSize}, prewarmed domain included.
- Prewarmed Azure tenant: $${P['azure-tenant'].perTenant.quarterly} per tenant, holding ${P['azure-tenant'].densities.map((d) => d.inboxes).join(', ')} mailboxes by choice — $${(P['azure-tenant'].perTenant.quarterly / 25).toFixed(2)}, $${(P['azure-tenant'].perTenant.quarterly / 49).toFixed(2)} or $${(P['azure-tenant'].perTenant.quarterly / 100).toFixed(2)} an inbox.
- Fresh Google Workspace: $${P['google-fresh'].perUnit.monthly} per inbox per month, monthly only. Fresh Microsoft 365: $${P['microsoft-fresh'].perUnit.monthly}, monthly only.
- Fresh Azure tenant: $${P['azure-fresh'].perTenant.monthly} per tenant, monthly only, flat, unwarmed and without a domain. A prewarmed tenant is $${P['azure-tenant'].perTenant.monthly} monthly or $${P['azure-tenant'].perTenant.quarterly} on a three-month commit, so at a quarterly commit the warmed tenant costs the same as the fresh one.
- Fresh .com domain: $${P['domain-fresh'].price} one-time. Prewarmed domain: free with any inbox pack.

## Prewarmed products

${prewarmed.map((p) => link('/' + p.slug + '/', p.eyebrow, p.description)).join('\n')}

## Fresh products

${fresh.map((p) => link('/' + p.slug + '/', p.eyebrow, p.description)).join('\n')}

## Guides and comparisons

${link('/prewarmed-inboxes/', 'Prewarmed inboxes', 'Every prewarmed option in one place.')}
${link('/prewarmed-vs-fresh-inboxes/', 'Prewarmed vs fresh inboxes', 'The same mailbox at two points in its life, and which to buy.')}
${link('/best-prewarmed-inboxes/', 'How to choose a provider', 'The criteria, the questions to ask any seller, and when NOT to buy prewarmed.')}
${link('/google/', 'Google Workspace', 'What Gmail checks, how many inboxes you need, prewarmed vs fresh.')}
${link('/microsoft/', 'Microsoft 365, Outlook and Azure', 'Packs vs tenants, and why Microsoft tells you why mail failed.')}
${link('/how-it-works/', 'How it works', 'The 51 days: 30 aging, 21 warming.')}
${link('/providers/', 'Provider directory', 'Who sells prewarmed inboxes, and the criteria to judge on.')}
${link('/methodology/', 'Methodology', 'How this site judges, where numbers come from, and what it will not claim.')}
${link('/pricing/', 'Pricing', 'Every price, from one data file.')}
${link('/compare/google-vs-microsoft-vs-azure/', 'Google vs Microsoft vs Azure', 'Which platform matches your list.')}
${link('/compare/azure-tenant-vs-microsoft-365/', 'Azure tenant vs Microsoft 365 packs', 'Cost per inbox against how much one bad week reaches.')}

## Free tools

${live.length} free tools, no signup. Hub: ${B}/tools/

${live.slice(0, 12).map((t) => `- ${t.name}: ${t.short}`).join('\n')}

Calculators on this site:

${link('/calculator/', 'Prewarmed vs fresh calculator', 'Volume and launch date in, the right buy out, on all three platforms.')}
${link('/tools/warmup-tax/', 'Warmup tax calculator', 'What running your own 51-day cycle costs per year.')}
${link('/tools/stack-calculator/', 'How many inboxes do you need', 'The sizing arithmetic, with a worked example.')}

## Free data

${link('/leads/', 'Free B2B lead lists', `${leads.totalLists} lists, about ${Math.round(leads.totalLeads / 1e6)} million contacts across ${leads.categories.length} categories, free and without signup.`)}

## About

${link('/about/', 'About', 'Who runs this site and how it is funded.')}
${link('/contact/', 'Contact', '')}

Operated by ${site.operator} (${site.operatorUrl}) and ${site.agency} (${site.agencyUrl}).
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=0, must-revalidate' },
  });
}
