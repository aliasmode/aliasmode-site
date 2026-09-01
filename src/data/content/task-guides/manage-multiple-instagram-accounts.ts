import type { TaskGuidePage } from '../types.ts';

export const manageMultipleInstagramAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-instagram-accounts/",
  family: "task-guide",
  label: "Manage Instagram accounts",
  title: "How to Manage Multiple Instagram Accounts",
  description: "Run many Instagram accounts side by side with one AliasMode profile, one proxy, and one saved session per account — no in-app switching limits.",
  h1: "Run every Instagram account in its own persistent profile.",
  eyebrow: "Instagram accounts guide",
  lead: "Instagram's in-app account switching caps out quickly and mixes sessions in one app. Dedicated browser profiles scale past that and keep each login on its own device identity.",
  directAnswer: "Create one AliasMode profile per Instagram account, attach a dedicated proxy, and launch each account from its own fingerprinted browser so sessions never mix.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-instagram-accounts",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/warm-up-instagram-account/", "/best-antidetect-browsers-for-instagram/", "/guides/share-social-media-accounts-without-passwords/", "/docs/browser-profiles/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "An Instagram portfolio where every account has its own profile, proxy, and session, with zero cross-logins and clear ownership.",
  prerequisites: [
    "AliasMode installed with a Local or Cloud workspace",
    "Your account list with owner, market, and purpose for each one",
    "One residential proxy per account, in the account's country",
    "A naming pattern the whole team agrees on",
  ],
  steps: [
    { title: "Inventory the accounts", body: "List every Instagram account with its purpose, market, owner, and proxy status. Decide which accounts are active, warming, or parked before you build anything." },
    { title: "Create one profile per account", body: "Create an AliasMode profile per account using a pattern like ig·client·market·role. Unlimited profiles cost nothing extra in AliasMode, so give every account its own even if it is rarely used." },
    { title: "Attach a dedicated proxy to each", body: "Give every profile its own residential proxy and run the preflight. Two accounts of the same brand can share an IP only if you accept that a flag on one touches both." },
    { title: "Log in once, stay logged in", body: "Log into each account inside its profile. Cookies persist in the user-data directory, so daily work means launching the profile, not typing passwords." },
    { title: "Group by brand or client", body: "Use groups for the brand or client boundary and tags for market, status, and review date. Operators should find any account in seconds." },
    { title: "Set a launch order for shared machines", body: "AliasMode runs profiles concurrently with separate fingerprints, but on a shared workstation agree which profiles stay open during which shift." },
    { title: "Sync for the team", body: "Enable Cloud sync so teammates download the current profile version instead of trading desktop sessions. AliasMode warns on concurrent opens of the same profile." },
    { title: "Watch for verification prompts", body: "If an account asks for verification, handle it inside its own profile and record what happened. Cross-account prompts in one day usually mean a shared IP or device." },
  ],
  verification: ["Every account opens from its own profile with no password prompts on relaunch.", "No two profiles share a proxy, and preflight passes on each.", "Group and tag structure matches the client or brand list.", "Cloud sync shows the same current profile version for every teammate."],
  cautions: ["Instagram links accounts that share devices, IPs, or contact details; separation in profiles reduces, but cannot eliminate, that risk.", "Running dozens of accounts identically and in parallel creates its own pattern; vary schedules and behavior.", "Respect Instagram's Terms of Use for every account, regardless of how well separated the sessions are."],
  aliasModeWorkflow: [
    { title: "Template the profile shape", body: "Standardize proxy type, user agent class, and naming across the portfolio with a profile template so new accounts start consistent." },
    { title: "Preflight before every session", body: "A quick proxy preflight catches dead IPs before they become failed logins on client accounts." },
    { title: "Hand off through Cloud", body: "Close the profile, let sync finish, and the next operator opens the same session with full cookies from their own device." },
  ],
  sections: [
    { id: "instagram-operations-loop", title: "The daily Instagram operations loop", blocks: [
      { type: 'steps', items: [{ title: "Open the shift's profiles", body: "Launch only the profiles on today's rota; leave parked accounts closed." }, { title: "Work account by account", body: "Finish one account's tasks before opening the next to keep sessions intentional." }, { title: "Close and sync", body: "Close each profile when done so Cloud sync uploads the latest session state." }, { title: "Log anomalies", body: "Record any verification prompts or limits against the profile's tags." }] },
    ]},
    { id: "instagram-multi-notes", title: "Instagram portfolio notes", blocks: [
      { type: 'table', caption: "Scaling rules for Instagram portfolios", columns: ["Rule", "Why", "How"], rows: [
        ["One profile per account", "Shared cookies leak sessions into each other", "New profile per account, no exceptions"],
        ["One proxy per profile", "Shared IPs link accounts", "Dedicated residential proxy, preflighted"],
        ["Stagger activity", "Identical timing reads as one operator", "Different schedules per account in the rota"],
        ["Separate contact details", "Shared emails and phones link accounts", "Dedicated email and number per account"],
      ] },
    ]},
    { id: "instagram-multi-faq", title: "Multiple Instagram accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Doesn't Instagram already support multiple accounts?", answer: "The app supports a small set of linked accounts with in-app switching, and all of them share one device identity. Profiles give every account its own fingerprint and IP instead." }, { question: "How many accounts can I run in AliasMode?", answer: "As many as you need. Profiles are unlimited and free, and Cloud sync keeps them available across the team's machines." }, { question: "Can two accounts share one proxy?", answer: "Technically yes, practically no. A shared IP lets one flag touch both accounts, so treat one proxy per profile as the default." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "ig-multi", source: "Instagram Help Center", title: "Managing multiple Instagram accounts", url: "https://help.instagram.com/", checkedOn: "2026-09-01" },
    { id: "ig-terms", source: "Instagram", title: "Terms of Use", url: "https://help.instagram.com/581066165581870", checkedOn: "2026-09-01" },
    { id: "ig-2fa", source: "Instagram Help Center", title: "Two-factor authentication and login security", url: "https://help.instagram.com/", checkedOn: "2026-09-01" },
  ],
};
