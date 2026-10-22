/**
 * Client reviews, taken from the Warm Inboxes reviews page.
 *
 * Every one is published at warminboxes.com/reviews as a named video review.
 * `video` is the YouTube id Warm Inboxes embeds for that person and `review`
 * is their page at warminboxes.com/reviews/<review>. All are vertical (9:16).
 * Nothing here is written for this site: no quote is paraphrased, no name or
 * company is invented, and anything that reads as a page title rather than
 * something a person said is flagged `summary` so it is never dressed up in
 * quotation marks.
 *
 * Orders are fulfilled by Warm Inboxes, so these are reviews of the thing
 * this site sells rather than of a third party, site.disclosure says so on
 * every page that shows them.
 */
export const reviewsUrl = '/reviews';
export const checkedOn = '2026-10-22';
export const totalReviews = 27;

export const testimonials = [
  { name: "AJ Cassata", role: "Founder, Revenue Boost", quote: "Great support and stellar setup they are our main suppliers for cold email inboxes", video: 'vKruruEpFrc', review: 'aj-cassata-revenue-boost' },
  { name: "Leevi", role: "Founder Agency Velocity", quote: "Easiest way to launch cold email", video: 'QjPc4jfTo9g', review: 'leevi-agency-velocity' },
  { name: "Naufal", role: "Founder GTM APAC & GTMX, Head GTM Engineer @Understory", quote: "Warm Inboxes delivers exceptional results", video: 'pffm5jr1gEY', review: 'naufal-understory' },
  { name: "Phil Sergenti", role: "Founder, MailFirst", quote: "WarmInboxes gives us the deliverability foundation we need to consistently land in the primary inbox and book meetings at scale", video: 'PT7b3J1oAxM', review: 'phil-sergenti-mailfirst' },
  { name: "Josiah Ansu", role: "Founder, Agency Advanta", quote: "I have been with them four years and I have not left. WarmInboxes are, in my opinion, the best in the market", video: 'uXXdO5lNigo', review: 'josiah-ansu-agency-advanta' },
  { name: "Emmanuel", role: "Founder PLNitude", quote: "Getting New Clients Through Our Cold Email Infrastructure", video: '6Be_oJvVNSk', review: 'emmanuel-plnitude' },
  { name: "Harry", role: "Founder", quote: "Would Recommend Upscale 10 Out Of 10", video: 'JVY0bpOMTtE', review: 'harry' },
  { name: "Ernesto Vilagut", role: "WarmInboxes Client", quote: "Ernesto shares his experience running cold email on WarmInboxes infrastructure", summary: true, video: 'FNmS9brtwd0', review: 'ernesto-vilagut' },
  { name: "Diyor", role: "Eleon Acquisition", quote: "How Eleon Acquisition runs cold email on WarmInboxes infrastructure", summary: true, video: 'bfazqlcRUtE', review: 'diyor-eleon-acquisition' },
  { name: "Jakub", role: "WarmInboxes Client", quote: "Jakub's results with prewarmed inboxes from WarmInboxes", summary: true, video: '7icDa3fjf78', review: 'jakub' },
  { name: "Papa", role: "Founder Leveraged Outbound", quote: "Our Infra was completely burned and Warm Inboxes saved us from loosing clients", video: 'v0wlIhiWha8', review: 'papa-leveraged-outbound' },
  { name: "Ryan", role: "Founder Growth Circle", quote: "Saving Myself & My Team Hours Of Time", video: '2OONP9l3694', review: 'ryan-growth-circle' },
  { name: "Sabrina", role: "Marketplace Founder", quote: "Helping The Creators Marketplace Reach Their Ideal Audience & Acquire New Clients", video: 'rrr6KF5_bs4', review: 'sabrina-marketplace' },
  { name: "Louis", role: "Founder Castelli Soun", quote: "I Would Highly Recommend Working With Upscales Team", video: 'SPx6caFCL-U', review: 'louis-castelli' },
  { name: "Jagbir", role: "Business Development", quote: "Talking About Upscale Overdelivering", video: 'eG_kgvNMoWM', review: 'jagbir' },
  { name: "Hariate", role: "Entrepreneur", quote: "Setup Cold Email Infrastructure To Get New Clients", video: '2E4X-Ca2E2M', review: 'hariate' },
  { name: "Jake", role: "Business Owner", quote: "To Date We've Got About \u00a378,918 Worth Of Quotes Sent Out", video: 'QRoVDy3MgnU', review: 'jake' },
  { name: "Artem", role: "Founder GrowIQ", quote: "Optimised Agency Operations With Warm Inboxes Stellar Support", video: 'A262gXmDjaI', review: 'artem-growiq' },
  { name: "Hussien Al Hirz", role: "Business Owner", quote: "Best Support From An Infra Company I've Ever Gotten", video: 'dv67TRAr0qk', review: 'hussien-al-hirz' },
  { name: "Robert", role: "Business Owner", quote: "Robert loved the prewarmed inboxes from Warm Inboxes", summary: true, video: 'Rg99NBZKyqc', review: 'robert' },
  { name: "Goodness", role: "Revenue Boost", quote: "Testimonial Tuesday - Revenue Boost Success", summary: true, video: 'I3R72ulGUIs', review: 'goodness-revenue-boost' },
  { name: "Will", role: "Founder, Carecraft Media", quote: "Prewarmed Inboxes Transformed Our Outreach", video: 'B9gvFGDHUeU', review: 'will-carecraft' },
  { name: "Adam", role: "Startup Accelerator", quote: "Upscale Has Been Amazing", video: 'DOkfnOIf7sY', review: 'adam-startup-accelerator' },
  { name: "Nick", role: "CoreConversions", quote: "Nick from CoreConversions on running cold email on prewarmed inboxes", summary: true, video: 'bgmOyWD6Bzs', review: 'nick-coreconversions' },
  { name: "Otavio", role: "CreatorMonetize", quote: "Otavio from CreatorMonetize on WarmInboxes prewarmed infrastructure", summary: true, video: '4nhZrtxNwPw', review: 'otavio-creatormonetize' },
  { name: "Can", role: "WarmInboxes Client", quote: "Can on sending from Google prewarmed inboxes", summary: true, video: 'b7Qy1hi7BIc', review: 'can-google-prewarmed' },
  { name: "Greg", role: "WarmInboxes Client", quote: "Prewarmed Google and Azure inboxes", video: 'znWmNjt1-F0', review: 'greg-deliverability-system' },
];

/** The ones that name a company and speak to a specific outcome. */
export const featured = testimonials.filter((t) =>
  ['AJ Cassata', 'Josiah Ansu', 'Papa', 'Phil Sergenti', 'Naufal', 'Jake', 'Will', 'Hussien Al Hirz'].includes(t.name));

/**
 * The reel for a platform's pages: reviews that name that platform lead,
 * then the featured set. Only Can and Greg name a platform in their review
 * titles, so that is the whole mapping.
 */
const aboutPlatform = { google: ['Can', 'Greg'], azure: ['Greg'] };
export function reelFor(platform) {
  const lead = (aboutPlatform[platform] ?? []).map((n) => testimonials.find((t) => t.name === n));
  return [...lead, ...featured.filter((t) => !lead.includes(t))];
}
