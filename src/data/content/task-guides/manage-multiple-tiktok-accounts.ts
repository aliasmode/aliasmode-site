import type { TaskGuidePage } from '../types.ts';

export const manageMultipleTiktokAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-tiktok-accounts/",
  family: "task-guide",
  label: "Manage TikTok accounts",
  title: "How to Manage Multiple TikTok Accounts",
  description: "Manage TikTok accounts across regions with one persistent profile per account, a market-matched proxy, and sessions that never mix.",
  h1: "Run every TikTok account in its own isolated profile.",
  eyebrow: "TikTok accounts guide",
  lead: "TikTok ties each account to a region and a device. Per-account profiles with market-matched proxies keep distribution predictable and logins durable.",
  directAnswer: "Give every TikTok account its own AliasMode profile with a proxy in its market, and run all posting and engagement from that persistent session.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-tiktok-accounts",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/warm-up-tiktok-account/", "/best-antidetect-browsers-for-tiktok/", "/docs/browser-profiles/", "/best-antidetect-browsers-for-social-media/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A multi-market TikTok operation where each account keeps its region, its session, and its audience, with no cross-account leakage.",
  prerequisites: [
    "AliasMode installed and your account-to-market list ready",
    "One residential proxy per account in the account's target market",
    "A dedicated email per TikTok account",
    "A content or posting plan per market",
  ],
  steps: [
    { title: "Map accounts to markets", body: "Write down which account serves which market: tt·us·food, tt·uk·fitness. The market decides the proxy, and the proxy decides the audience." },
    { title: "Create one profile per account", body: "Build an AliasMode profile per account with the market in the name. Keep the fingerprint seed fixed; TikTok links accounts that share device characteristics." },
    { title: "Match the proxy to the market", body: "Attach the market's residential proxy and run preflight. A US account on a UK IP trains the wrong feed and invites checks." },
    { title: "Log in once, stay persistent", body: "Log into TikTok web inside the profile and let the session persist. Daily work is launching the profile, not re-verifying logins." },
    { title: "Keep engagement per-market", body: "Interact inside each account's own language and market: comments, follows, and trends from the account's region, not yours." },
    { title: "Schedule across markets", body: "Spread posting times across accounts so they do not all publish at 09:00 in your office timezone. Each market gets its own clock." },
    { title: "Track performance in the profile's context", body: "Read analytics from inside each profile and note anomalies per account. A reach collapse on one account usually means a proxy or region problem." },
    { title: "Sync for the team", body: "Use Cloud sync so editors and operators in different regions all open the same persistent sessions." },
  ],
  verification: ["Each profile's preflight reports the market it was assigned.", "Sessions persist across relaunches with no re-verification loops.", "For You feeds inside each account reflect that account's market niche.", "Posting schedules differ across accounts instead of firing together."],
  cautions: ["TikTok enforces its Community Guidelines on every account; isolation reduces cross-risk, not per-account risk.", "Mismatched regions (IP versus account history) distort reach and draw reviews.", "Do not run one operator's accounts in perfect lockstep; synchronized behavior is a pattern TikTok can read."],
  aliasModeWorkflow: [
    { title: "Profile per market", body: "Create profiles with market names and fixed seeds so every account has a stable device identity." },
    { title: "Preflight before posting", body: "Confirm exit IP and timezone before each posting session so the region never drifts." },
    { title: "Cloud sync across regions", body: "Let operators in different countries open the same persistent sessions through Cloud." },
  ],
  sections: [
    { id: "tiktok-operations-loop", title: "The TikTok market loop", blocks: [
      { type: 'steps', items: [{ title: "Open one market at a time", body: "Work each account inside its own profile and finish its tasks before switching markets." }, { title: "Check the region signals", body: "Preflight, then confirm the feed language and trending content match the market." }, { title: "Post on the market's clock", body: "Use local peak hours per market instead of one global schedule." }, { title: "Close and log", body: "Close the profile, sync, and note reach or anomalies in the account's record." }] },
    ]},
    { id: "tiktok-multi-notes", title: "TikTok portfolio notes", blocks: [
      { type: 'table', caption: "Region rules for TikTok portfolios", columns: ["Element", "Effect if shared", "Rule"], rows: [
        ["Proxy region", "Feed and audience drift to the wrong market", "One market-matched residential proxy per account"],
        ["Device fingerprint", "Accounts link through device signals", "One profile with one fixed seed per account"],
        ["Cookies", "Logins bleed across accounts", "Persistent user-data directory per profile"],
        ["Posting clock", "Lockstep publishing reads as one operator", "Per-market schedules in local time"],
      ] },
    ]},
    { id: "tiktok-multi-faq", title: "Multiple TikTok accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can I target a market my team is not in?", answer: "Yes, with a proxy in that market. The profile's exit IP and timezone present the account as a local viewer and creator." }, { question: "Do TikTok accounts in different niches need different proxies?", answer: "Each account needs its own proxy regardless of niche; sharing one is how a single flag spreads across a portfolio." }, { question: "How do I keep regions from drifting?", answer: "Preflight before every session and keep the proxy assignment fixed. Replace a dead proxy with one in the same country." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "tt-guidelines", source: "TikTok", title: "Community Guidelines", url: "https://www.tiktok.com/community-guidelines", checkedOn: "2026-09-01" },
    { id: "tt-accounts", source: "TikTok Support", title: "Managing your TikTok accounts and logins", url: "https://support.tiktok.com/en/managing-your-account", checkedOn: "2026-09-01" },
    { id: "tt-data", source: "TikTok Support", title: "Personalization and region on TikTok", url: "https://support.tiktok.com/en/tiktok-basics/personalization-and-region", checkedOn: "2026-09-01" },
  ],
};
