/**
 * Client reviews, taken from the Warm Inboxes reviews page.
 *
 * Every one is published at warminboxes.com/reviews as a named video review.
 * Nothing here is written for this site: no quote is paraphrased, no name or
 * company is invented, and anything that reads as a page title rather than
 * something a person said is flagged `summary` so it is never dressed up in
 * quotation marks.
 *
 * Orders are fulfilled by Warm Inboxes, so these are reviews of the thing
 * this site sells rather than of a third party — site.disclosure says so on
 * every page that shows them.
 */
export const reviewsUrl = '/reviews';
export const checkedOn = '2026-10-04';
export const totalReviews = 27;

export const testimonials = [
  { name: "AJ Cassata", role: "Founder, Revenue Boost", quote: "Great support and stellar setup they are our main suppliers for cold email inboxes" },
  { name: "Leevi", role: "Founder Agency Velocity", quote: "Easiest way to launch cold email" },
  { name: "Naufal", role: "Founder GTM APAC & GTMX, Head GTM Engineer @Understory", quote: "Warm Inboxes delivers exceptional results" },
  { name: "Phil Sergenti", role: "Founder, MailFirst", quote: "WarmInboxes gives us the deliverability foundation we need to consistently land in the primary inbox and book meetings at scale" },
  { name: "Josiah Ansu", role: "Founder, Agency Advanta", quote: "I have been with them four years and I have not left. WarmInboxes are, in my opinion, the best in the market" },
  { name: "Emmanuel", role: "Founder PLNitude", quote: "Getting New Clients Through Our Cold Email Infrastructure" },
  { name: "Harry", role: "Founder", quote: "Would Recommend Upscale 10 Out Of 10" },
  { name: "Ernesto Vilagut", role: "WarmInboxes Client", quote: "Ernesto shares his experience running cold email on WarmInboxes infrastructure", summary: true },
  { name: "Diyor", role: "Eleon Acquisition", quote: "How Eleon Acquisition runs cold email on WarmInboxes infrastructure", summary: true },
  { name: "Jakub", role: "WarmInboxes Client", quote: "Jakub's results with prewarmed inboxes from WarmInboxes", summary: true },
  { name: "Papa", role: "Founder Leveraged Outbound", quote: "Our Infra was completely burned and Warm Inboxes saved us from loosing clients" },
  { name: "Ryan", role: "Founder Growth Circle", quote: "Saving Myself & My Team Hours Of Time" },
  { name: "Sabrina", role: "Marketplace Founder", quote: "Helping The Creators Marketplace Reach Their Ideal Audience & Acquire New Clients" },
  { name: "Louis", role: "Founder Castelli Soun", quote: "I Would Highly Recommend Working With Upscales Team" },
  { name: "Jagbir", role: "Business Development", quote: "Talking About Upscale Overdelivering" },
  { name: "Hariate", role: "Entrepreneur", quote: "Setup Cold Email Infrastructure To Get New Clients" },
  { name: "Jake", role: "Business Owner", quote: "To Date We've Got About \u00a378,918 Worth Of Quotes Sent Out" },
  { name: "Artem", role: "Founder GrowIQ", quote: "Optimised Agency Operations With Warm Inboxes Stellar Support" },
  { name: "Hussien Al Hirz", role: "Business Owner", quote: "Best Support From An Infra Company I've Ever Gotten" },
  { name: "Robert", role: "Business Owner", quote: "Robert loved the prewarmed inboxes from Warm Inboxes", summary: true },
  { name: "Goodness", role: "Revenue Boost", quote: "Testimonial Tuesday - Revenue Boost Success", summary: true },
  { name: "Will", role: "Founder, Carecraft Media", quote: "Prewarmed Inboxes Transformed Our Outreach" },
  { name: "Adam", role: "Startup Accelerator", quote: "Upscale Has Been Amazing" },
  { name: "Nick", role: "CoreConversions", quote: "Nick from CoreConversions on running cold email on prewarmed inboxes", summary: true },
  { name: "Otavio", role: "CreatorMonetize", quote: "Otavio from CreatorMonetize on WarmInboxes prewarmed infrastructure", summary: true },
  { name: "Can", role: "WarmInboxes Client", quote: "Can on sending from Google prewarmed inboxes", summary: true },
  { name: "Greg", role: "WarmInboxes Client", quote: "Prewarmed Google and Azure inboxes" },
];

/** The ones that name a company and speak to a specific outcome. */
export const featured = testimonials.filter((t) =>
  ['AJ Cassata', 'Josiah Ansu', 'Papa', 'Phil Sergenti', 'Naufal', 'Jake', 'Will', 'Hussien Al Hirz'].includes(t.name));
