# Measuring the handoff to app.warminboxes.com

The order is placed on another domain. The click that leaves this site is the
last thing prewarmed.org can observe, so that click is what gets measured,
and it is measured three independent ways so that no single failure loses it.

## What the code already does

Every click on a link to `warminboxes.com` or `app.warminboxes.com` fires
`pwTrack('checkout')` (or `'application'` for `/affiliate`), from a delegated
capture-phase listener in `src/components/Tracking.astro`. That sends:

| Platform | Event |
| --- | --- |
| GA4, both properties | `begin_checkout` |
| Meta | `InitiateCheckout` |
| OpenAI | `InitiateCheckout` |
| GTM dataLayer | `pw_checkout` |

### The three ways across

**1. UTMs, on the link itself.** Built at build time by `order()` and `wi()`
in `src/data/site.js`:

```
utm_source=prewarmed.org
utm_medium=referral
utm_campaign=<page>          e.g. nav, pricing, prewarmed-google-inboxes
utm_content=<placement>      e.g. header, hero, order-panel, tier-pack-3
```

Nothing else on either site writes `utm_source=prewarmed.org`, so in the app's
analytics that one value isolates every visitor this site sent, and
`utm_content` says which button did it.

**2. GA4 cross-domain.** `app.warminboxes.com` is in `analytics.linkDomains`,
so gtag appends `_gl` and GA4 continues the session instead of starting a new
one attributed to a referral. **This only works if the app's GA4 property also
lists prewarmed.org** (see below). It is the cleanest join and the most
fragile: `_gl` expires in about two minutes and some browsers and in-app
webviews drop it.

**3. `pw_hid`, the handoff id.** A UUID minted at click time, stamped onto the
outbound URL *and* sent as a parameter on the GA4 event, the GTM push and the
Meta event id. Same string on both sides. This is the fallback that survives
when `_gl` does not: if a landing on the app carries `?pw_hid=abc`, the
`begin_checkout` row carrying `abc` is the click that produced it, with the
page and the button attached.

### Parameters on the GA4 event

| Parameter | Example | What it answers |
| --- | --- | --- |
| `pw_hid` | `602492ff-…` | which click this was |
| `pw_dest` | `app.warminboxes.com` | app or marketing site |
| `pw_placement` | `header` | which button |
| `pw_campaign` | `prewarmed-google-inboxes` | which page |
| `pw_from` | `/prewarmed-google-inboxes/` | the path they left from |

All `pw_` prefixed: GA4 reports a custom parameter only once it is registered
as a custom dimension, and an unprefixed `placement` or `from` is one
collision away from a name GA4 or a GTM template already owns.

## What still has to be done by hand

Nothing above reports until these are set. They are account settings, not code.

1. **Register the custom dimensions.** GA4 → Admin → Custom definitions →
   Create custom dimension, event-scoped, one per parameter above. Until this
   is done the events arrive but the parameters are invisible in reports.
   Do it in both properties: `G-YNG4RRZ4YQ` (this site) and `G-E7DJJB6E4D`
   (Warm Inboxes), since both receive the event.

2. **Configure cross-domain on the Warm Inboxes property.** GA4 → Admin →
   Data streams → the warminboxes.com stream → Configure tag settings →
   Configure your domains. List `prewarmed.org`, `warminboxes.com` and
   `app.warminboxes.com`. The linker only stitches a session when *both* ends
   list each other; this side already does.

3. **Confirm the app does not strip the query string.** If
   `app.warminboxes.com` redirects on entry, or rewrites the URL before its
   own tag fires, `pw_hid`, the UTMs and `gclid` are all lost at the door and
   every arrival looks direct. Load a link from this site with the network tab
   open and check the parameters survive to the first page view.

4. **Mark `begin_checkout` as a key event** in the Warm Inboxes property, if
   the funnel is going to be reported on there.

5. **Google Ads, for the handoff.** The lead conversion is wired
   (`AW-17860457598/C2jOCKvsnd8bEP7ow8RC`, fired on `pwTrack('lead')`). The
   handoff has no Ads conversion action yet. Create one, send the label, and
   it attaches to `pwTrack('checkout')` in one line.

## Checking it works

Open any page with `?gclid=TEST` and click an orange button. The URL you land
on should carry `utm_source`, `utm_campaign`, `utm_content`, `gclid`, `pw_hid`
and `_gl`, and the GA4 DebugView on both properties should show a
`begin_checkout` whose `pw_hid` is the same string as the one in the URL.
