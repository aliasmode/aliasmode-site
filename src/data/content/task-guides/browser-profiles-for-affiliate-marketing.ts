import type { TaskGuidePage } from '../types.ts';

export const browserProfilesForAffiliateMarketingTaskGuide: TaskGuidePage = {
  path: "/guides/browser-profiles-for-affiliate-marketing/",
  family: "task-guide",
  label: "Affiliate marketing profiles",
  title: "Browser Profiles for Affiliate Marketing",
  description: "Match every affiliate identity and offer geo to one persistent browser profile so tracking, logins, and creatives stay consistent across networks.",
  h1: "Match one affiliate identity to one persistent profile.",
  eyebrow: "Affiliate marketing guide",
  lead: "Affiliate work stacks identities: network logins, ad accounts, landing-page CMSes, tracking dashboards. One profile per identity keeps every stack consistent and auditable.",
  directAnswer: "Build one AliasMode profile per affiliate identity, attach a proxy in the offer's geo, and run the network login, ad account, and tracker for that identity from that profile only.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:browser-profiles-for-affiliate-marketing",
  topicCluster: "affiliates",
  parent: "/guides/",
  related: ["/best-antidetect-browsers-for-affiliate-marketing/", "/guides/one-proxy-per-browser-profile/", "/docs/proxies/", "/blog/static-residential-proxies-browser-profiles/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Each affiliate identity runs as a self-contained stack — network, ads, tracker, creatives — on a stable fingerprint and geo-matched IP.",
  prerequisites: [
    "A list of identities: network account, ad account, tracker, and offer geo per identity",
    "AliasMode installed with a group per identity",
    "One residential proxy per identity, in the offer's market",
    "Disclosure and ad-policy review for the offers you promote",
  ],
  steps: [
    { title: "Define the identity, not just the account", body: "Write down each identity: which network, which offer geo, which ad account, which tracker. An identity is the unit of isolation — everything it touches lives in its profile." },
    { title: "Create the profile with the geo built in", body: "Create an AliasMode profile per identity, named id·network·geo. Attach the residential proxy for the offer's market and preflight it before anything logs in." },
    { title: "Log into the stack once", body: "Inside the profile, log into the network dashboard, the ad account, and the tracking platform. Sessions persist, so relaunches are returning visits." },
    { title: "Keep creative testing inside the profile", body: "Review landing pages and creatives from the profile's geo and fingerprint. Geo-mismatched QA hides real problems: wrong currency, wrong language, wrong legal text." },
    { title: "Separate payment and payout details", body: "Keep network payout details per identity per the network's rules. Shared payout details across identities is a linking signal networks act on." },
    { title: "Watch frequency and spend patterns", body: "Run ad accounts at distinct, realistic budgets and schedules. Identical spend rhythms across identities is a pattern ad platforms and networks both notice." },
    { title: "Track conversions in context", body: "Open the tracker from the same profile when debugging a campaign. Conversions read differently from mismatched geos, which wastes hours." },
    { title: "Audit monthly", body: "Monthly: preflight every identity's proxy, confirm sessions hold, check network notices, and verify the identity-to-profile map is still one to one." },
  ],
  verification: ["Every identity opens from its own profile with live sessions and no re-login.", "Preflight reports the offer geo for each identity before ad work.", "Landing-page QA from the profile shows the correct currency, language, and disclosure.", "No payout or contact detail appears in two identities' records."],
  cautions: ["Follow each network's terms and the ad platforms' destination and endorsement rules; profile isolation does not change what is allowed.", "Undisclosed endorsements and misleading creatives carry legal risk beyond platform enforcement — disclose plainly.", "One bad offer can poison an identity; keep identities separate so the blast radius is one profile, not your whole portfolio."],
  aliasModeWorkflow: [
    { title: "Geo preflight", body: "Confirm exit IP and timezone match the offer market before any session on the identity." },
    { title: "Fixed fingerprints", body: "Ad accounts and networks see the same device every session — no fingerprint drift." },
    { title: "Cloud sync for media buyers", body: "Buyers open identity sessions through Cloud sync without sharing network credentials." },
  ],
  sections: [
    { id: "affiliate-operations-loop", title: "The affiliate identity loop", blocks: [
      { type: 'steps', items: [{ title: "Open the identity", body: "Launch the profile; preflight confirms the geo before anything else." }, { title: "Check the stack", body: "Network dashboard, ad account, tracker — all live, in one session." }, { title: "QA from the geo", body: "Click through landing pages from the profile so you see what the user sees." }, { title: "Close and log", body: "Sync the session and log spend, conversions, and anomalies per identity." }] },
    ]},
    { id: "affiliate-stack-notes", title: "Affiliate stack notes", blocks: [
      { type: 'table', caption: "One identity, one stack", columns: ["Stack piece", "Linking risk if shared", "Profile rule"], rows: [
        ["Network login", "Identities link through sessions", "Log in only from the identity's profile"],
        ["Ad account", "Shared IPs and devices link accounts", "One proxy and fingerprint per identity"],
        ["Tracker", "Cross-domain cookies leak between identities", "Cookies live in one profile's user-data directory"],
        ["Payout details", "Networks link identities on shared payouts", "Per-identity payout per network rules"],
      ] },
    ]},
    { id: "affiliate-faq", title: "Affiliate profiles FAQ", blocks: [
      { type: 'faq', items: [{ question: "Do I need a new profile for every offer?", answer: "Per identity, not per offer. One identity can run several offers in the same geo from the same profile; a new identity gets a new profile." }, { question: "Why a proxy in the offer's geo?", answer: "You QA creatives, see localized pages, and present a consistent location to the network and ad platform. Mismatched geos waste spend and hide bugs." }, { question: "How is this different from just using incognito tabs?", answer: "Incognito throws away cookies and fingerprint every time. Affiliates need the opposite: persistent sessions and stable identities that survive weeks of work." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "ftc-endorse", source: "FTC", title: "Endorsement Guides: what people are asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides", checkedOn: "2026-09-01" },
    { id: "gads-dest", source: "Google Ads Help", title: "Destination requirements and editorial policy", url: "https://support.google.com/google-ads", checkedOn: "2026-09-01" },
    { id: "meta-ads", source: "Meta Business Help Center", title: "Personal attributes and unsupported content policies", url: "https://www.facebook.com/business/help", checkedOn: "2026-09-01" },
  ],
};
