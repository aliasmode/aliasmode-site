import type { TaskGuidePage } from '../types.ts';

export const warmUpTiktokAccountTaskGuide: TaskGuidePage = {
  path: "/guides/warm-up-tiktok-account/",
  family: "task-guide",
  label: "Warm up TikTok account",
  title: "How to Warm Up a TikTok Account",
  description: "Start a TikTok account with realistic watch behavior, a region-matched proxy, and a delayed first post inside a persistent AliasMode profile.",
  h1: "Warm up a new TikTok account with realistic watch behavior.",
  eyebrow: "TikTok warm-up guide",
  lead: "TikTok defines an account by what it watches: completion rate, niche, and follows feed the recommendation engine. Build that history before you post anything.",
  directAnswer: "Watch and complete videos in one persistent profile for several days, follow a small niche set, and wait about a week before publishing the first video.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:warm-up-tiktok-account",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/manage-multiple-tiktok-accounts/", "/best-antidetect-browsers-for-tiktok/", "/docs/proxies/", "/guides/one-proxy-per-browser-profile/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A new TikTok account with a week of niche watch history and a region-consistent session, ready for a low-pressure first post.",
  prerequisites: [
    "AliasMode installed on Windows with your profiles workspace ready",
    "A residential proxy in the market you want the account to belong to",
    "A dedicated email for the new TikTok account",
    "The niche or content plan the account will eventually post in",
  ],
  steps: [
    { title: "Create the profile for one account", body: "Create a profile named for the account and market, for example tt·cooking·us·01. Keep the generated fingerprint seed; TikTok is sensitive to device changes." },
    { title: "Pin the market with a proxy", body: "Attach a residential proxy in the target market and run the preflight. TikTok distributes content by region, so a mismatched IP puts the account in front of the wrong audience and looks risky." },
    { title: "Log in and set up quietly", body: "Log in, add an avatar and a short bio, and skip connecting other social accounts on day one. Keep the first session short." },
    { title: "Days 1-3: watch like a viewer", body: "Scroll the For You feed and watch videos to completion, especially in the target niche. Like a handful of videos. Watch behavior is the main warm-up signal on TikTok." },
    { title: "Days 4-6: follow and search", body: "Follow 10-15 accounts in the niche, search a few niche keywords, and keep watching daily. Avoid comment storms; one or two short comments is enough." },
    { title: "Day 7+: first post", body: "Publish one native-style video, ideally vertical and trend-aware, and nothing else for two or three days. Watch how the account performs before a second post." },
    { title: "Keep sessions in the profile", body: "Always launch TikTok from the same AliasMode profile so the device, IP, and cookies stay identical across every session." },
  ],
  verification: ["Preflight reports the proxy country and timezone you intend the account to use.", "The For You feed within a few days is dominated by the target niche.", "Relaunching the profile keeps the login without a new verification loop.", "The first post reaches a small non-zero audience within the target region."],
  cautions: ["TikTok enforces its Community Guidelines and can limit or remove accounts; warm-up does not override that.", "An IP region that disagrees with the account region distorts distribution and invites checks.", "Skip automation and bulk upload tools until the account has a real posting history."],
  aliasModeWorkflow: [
    { title: "One profile, one market", body: "Create the profile with the market in its name and keep the fingerprint seed fixed." },
    { title: "Preflight the region", body: "Run the proxy preflight so exit IP and timezone match the target market before login." },
    { title: "Persist the session", body: "Launch TikTok from the profile every time so watch history and login state accumulate in one place." },
    { title: "Group by market", body: "Group profiles by market and tag them with niche and warm-up start date." },
  ],
  sections: [
    { id: "tiktok-warm-up-schedule", title: "TikTok warm-up schedule", blocks: [
      { type: 'steps', items: [{ title: "Days 1-3", body: "Watch to completion, like sparingly, no posting." }, { title: "Days 4-6", body: "Follow 10-15 niche accounts, search niche terms, one or two comments." }, { title: "Days 7-10", body: "First native-style post, then pause and observe distribution." }, { title: "Day 11 onward", body: "Steady two-to-four posts per week, all from the same profile." }] },
    ]},
    { id: "tiktok-platform-notes", title: "TikTok-specific notes", blocks: [
      { type: 'bullets', items: ["Region drives reach: the proxy country decides which audience the account is distributed to, so choose it before login.", "Watch behavior is the core signal: completed views in one niche train both the feed and the account history.", "Web and app experiences differ: a browser profile works for the web version, and app-based workflows need their own device plan.", "First posts matter: a trend-aware native-style video in week one gives the account its earliest distribution data."] },
    ]},
    { id: "tiktok-warm-up-faq", title: "TikTok warm-up FAQ", blocks: [
      { type: 'faq', items: [{ question: "Why does watch time matter more than posting early?", answer: "TikTok profiles accounts by consumption first. A week of completed niche videos makes the first post land with the right audience instead of a random one." }, { question: "Can I change the account market later?", answer: "You can change the proxy, but the account history stays attached to its early sessions. Pick the market before login and keep it." }, { question: "Is one week of warm-up enough?", answer: "One week is a working minimum for a viewer history plus a first post. Keep volume low for the first month either way." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "tt-guidelines", source: "TikTok", title: "Community Guidelines", url: "https://support.tiktok.com/", checkedOn: "2026-09-01" },
    { id: "tt-start", source: "TikTok Support", title: "Getting started on TikTok", url: "https://support.tiktok.com/", checkedOn: "2026-09-01" },
    { id: "tt-data", source: "TikTok Support", title: "Personalization and data on TikTok", url: "https://support.tiktok.com/", checkedOn: "2026-09-01" },
  ],
};
