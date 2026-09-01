import type { TaskGuidePage } from '../types.ts';

export const manageMultipleXTwitterAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-x-twitter-accounts/",
  family: "task-guide",
  label: "Manage X accounts",
  title: "How to Manage Multiple X (Twitter) Accounts",
  description: "Keep every X account in its own fingerprinted browser profile with a dedicated proxy, a saved login, and a clear group for each brand or client.",
  h1: "Run every X account in its own persistent profile.",
  eyebrow: "X accounts guide",
  lead: "X handles are cheap to create and expensive to lose. Isolated profiles keep each handle's session, IP, and history separate so a problem on one never spreads.",
  directAnswer: "Give each X handle its own AliasMode profile and proxy, log in once, and operate every handle from its persistent session instead of logging in and out of one browser.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-x-twitter-accounts",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/warm-up-x-twitter-account/", "/best-antidetect-browsers-for-x-twitter/", "/guides/share-social-media-accounts-without-passwords/", "/docs/proxies/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A stable roster of X handles, each with a saved session, dedicated IP, and a documented owner and purpose.",
  prerequisites: [
    "AliasMode installed with a workspace for your profiles",
    "One dedicated email per handle",
    "One residential proxy per handle, matched to its region",
    "A list of handles with owner and purpose",
  ],
  steps: [
    { title: "Register the roster", body: "List every handle with its market, owner, and job, such as support, founder brand, or regional news. Handles without a job are liabilities; park or retire them." },
    { title: "One profile per handle", body: "Create an AliasMode profile per handle, named x·handle·region·role. Keep the generated fingerprint seed unique per profile." },
    { title: "Dedicated proxy per profile", body: "Attach a residential proxy per handle and preflight it. Handles that share an IP are linked in practice, whatever the org chart says." },
    { title: "Log in once and persist", body: "Log into X inside each profile once. The session persists in the profile, so day-to-day work never re-types credentials or re-triggers verification." },
    { title: "Keep handle interactions natural", body: "Avoid obvious cross-patterns: identical follow times, synchronized posting, or new handles following each other in the same hour. Space out real interactions." },
    { title: "Route tools through profiles", body: "Point any scheduler or monitoring tool at one profile per handle, with its own API credentials, so every session stays attributable to one environment." },
    { title: "Group and tag the roster", body: "Group by brand or region, tag by role and status. When a handle changes owner, update the tag, not just the password manager." },
    { title: "Audit monthly", body: "Once a month, relaunch each profile, confirm the session holds, check for X security notices, and verify preflight still reports the expected region." },
  ],
  verification: ["Every handle restores its session on relaunch without re-authentication.", "No two profiles share a proxy or an email address.", "Security notices from X are answered inside the owning profile.", "The group structure matches the brand or client list one to one."],
  cautions: ["X judges automation and bulk behavior under its platform rules for every handle, however well separated the sessions are.", "Synchronized activity across handles creates visible patterns; vary timing and behavior.", "Losing a phone number or email locks handles out; keep recovery details per handle documented."],
  aliasModeWorkflow: [
    { title: "Template, then create", body: "Use a profile template for X handles: proxy type, user agent class, and naming, so every new handle starts the same way." },
    { title: "Preflight every session", body: "Confirm the exit IP region before opening a handle, especially after any proxy replacement." },
    { title: "Hand off via Cloud", body: "Close, sync, and let the next operator open the handle from their device with the full session intact." },
  ],
  sections: [
    { id: "x-operations-loop", title: "The weekly X roster loop", blocks: [
      { type: 'steps', items: [{ title: "Review the roster", body: "Confirm every handle still has an owner, a purpose, and a passing preflight." }, { title: "Work from profiles", body: "Open handles from AliasMode only; no side logins from phones or shared browsers." }, { title: "Watch interactions", body: "Keep cross-handle follows and replies sparse and spread out over days." }, { title: "Close and sync", body: "End each session by closing the profile so the team always sees the current version." }] },
    ]},
    { id: "x-multi-notes", title: "X roster notes", blocks: [
      { type: 'table', caption: "Separation rules for X handles", columns: ["Shared thing", "Risk", "Rule"], rows: [
        ["One IP for two handles", "A flag on one touches both", "One residential proxy per handle"],
        ["One email for two handles", "Recovery overlap links accounts", "One dedicated email per handle"],
        ["One browser session", "Cookie mix-ups post to the wrong handle", "One profile per handle, always launched from it"],
        ["Identical scheduling", "Synchronized posts read as a network", "Per-handle schedules with real gaps"],
      ] },
    ]},
    { id: "x-multi-faq", title: "Multiple X accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can I run personal and client handles on one machine?", answer: "Yes, as long as each lives in its own profile with its own proxy. The separation happens at the profile level, not the machine level." }, { question: "Do I need a new proxy for every handle?", answer: "That is the default. If budget forces sharing, share only across non-interacting handles and record the pairing." }, { question: "How do I hand a handle to a teammate?", answer: "Close the profile, let Cloud sync finish, and the teammate opens the same profile. No password sharing needed." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "x-multi", source: "X Help Center", title: "How to manage multiple X accounts", url: "https://help.x.com/", checkedOn: "2026-09-01" },
    { id: "x-rules", source: "X Help Center", title: "Platform manipulation and spam policy", url: "https://help.x.com/en/rules-and-policies/platform-manipulation", checkedOn: "2026-09-01" },
    { id: "x-security", source: "X Help Center", title: "Keep your X account secure", url: "https://help.x.com/", checkedOn: "2026-09-01" },
  ],
};
