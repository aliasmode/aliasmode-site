import type { TaskGuidePage } from '../types.ts';

export const manageMultipleGoogleAdsMetaAdsClientAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-google-ads-meta-ads-client-accounts/",
  family: "task-guide",
  label: "Manage ads client accounts",
  title: "How to Manage Google Ads and Meta Ads Client Accounts",
  description: "Give every Google Ads and Meta Ads client a persistent login profile with clear ownership, client groups, and Local API checks before campaign work.",
  h1: "Give every ads client a persistent, owned login environment.",
  eyebrow: "Agency ads operations guide",
  lead: "Ad platforms score logins too: a client account that logs in from a new device every week collects friction. Persistent profiles give each client one stable environment.",
  directAnswer: "Create one AliasMode profile per client ad account login, group profiles by client, and use the official manager structures (Google MCC, Meta Business Manager) for access — the profile handles the session, not the permissions.",
  audience: "agencies",
  intent: "procedural",
  intentKey: "guide:manage-multiple-google-ads-meta-ads-client-accounts",
  topicCluster: "ads",
  parent: "/guides/",
  related: ["/guides/organize-client-browser-profiles/", "/agencies/", "/use-cases/social-media-agencies/", "/best-antidetect-browsers-for-agencies-and-teams/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Every client's Google Ads and Meta Ads logins live in owned, persistent profiles grouped by client, with pre-flight checks before media buyers work.",
  prerequisites: [
    "Google Ads manager account (MCC) and Meta Business Manager access per client",
    "AliasMode installed with one group per client",
    "One proxy per client profile, in or near the client's market",
    "A media-buyer rota: who opens which client on which days",
  ],
  steps: [
    { title: "Structure access officially first", body: "Link client Google Ads accounts to your MCC and grant Meta Business Partner or partner-business access. The profile never replaces platform permissions; it stabilizes the environment you use them from." },
    { title: "One profile per client login", body: "Create a profile per login the agency operates: client·google-ads, client·meta-bm. Fixed fingerprint seed. A client with both platforms gets two profiles." },
    { title: "Proxy per client, matched to market", body: "Attach one residential proxy per client, in the client's country. Campaign accounts logging in from switching geographies draw security reviews at the worst time." },
    { title: "Log in once, persist the session", body: "Log into the MCC or Business Manager inside the profile once. Cookies persist, so buyers open a returning session instead of a new device every week." },
    { title: "Group by client, tag by platform", body: "One AliasMode group per client, tags for platform and role. Contractors get workspace access to their client's group only." },
    { title: "Pre-check sessions before spend", body: "Before a buyer starts, launch the profile and confirm the session is live. For scripted checks, use the Local API to start the profile and inspect it over CDP.", code: "const res = await fetch('http://127.0.0.1:50400/api/v1/browser/start?user_id=' + profileId);\nconst { data } = await res.json();\nconst browser = await chromium.connectOverCDP(data.ws.puppeteer);\n// ... work inside the logged-in session ...\nawait browser.close();\nawait fetch('http://127.0.0.1:50400/api/v1/browser/stop?user_id=' + profileId);" },
    { title: "Keep the 2FA map", body: "Record where each client's 2FA codes land — an authenticator on your side or the client's phone. A buyer locked out mid-flight is an incident; a documented 2FA map is not." },
    { title: "Hand off between buyers", body: "Close and sync the profile at shift end. The next buyer opens the same session through Cloud sync, on their own machine, with no credential movement." },
  ],
  verification: ["Each client profile restores its session on relaunch with no security checkpoint.", "Preflight reports the client's market for every profile before spend.", "MCC and Business Manager roles match the signed access list per client.", "The buyer rota log shows one open session per profile at a time."],
  cautions: ["Google and Meta restrict certain regulated ad categories regardless of login hygiene; isolation does not change ad policy.", "Do not run client ad accounts from personal logins outside the agency structure; it breaks access audits.", "Shared office IPs across many clients' accounts create linking patterns — one proxy per client profile avoids it."],
  aliasModeWorkflow: [
    { title: "Preflight before spend", body: "Proxy preflight confirms the exit country before any buyer opens a spend-capable account." },
    { title: "Local API session checks", body: "Scripted start, connectOverCDP, and stop let your internal tools verify sessions before shifts." },
    { title: "Cloud handoffs", body: "Persistent sessions move between buyers through encrypted sync — never through shared passwords." },
  ],
  sections: [
    { id: "ads-operations-loop", title: "The client ads loop", blocks: [
      { type: 'steps', items: [{ title: "Pre-flight the client", body: "Preflight the proxy, launch the profile, confirm the session is live." }, { title: "Buy from the fixed environment", body: "All campaign work happens inside the client's profile — never from a buyer's side browser." }, { title: "Log changes against the client", body: "Budget and campaign changes go in the client's log with the operator's name." }, { title: "Close and sync at shift end", body: "The profile syncs so the next buyer inherits exactly this session." }] },
    ]},
    { id: "ads-platform-notes", title: "Platform notes for ads teams", blocks: [
      { type: 'table', caption: "Official access versus session stability", columns: ["Layer", "Tool", "Rule"], rows: [
        ["Permissions", "Google MCC, Meta Business Manager", "All access flows through official manager structures"],
        ["Session", "AliasMode profile per client login", "One fingerprint, one proxy, persisted cookies"],
        ["Team", "Cloud workspace groups", "Contractors see only their client's profiles"],
        ["Checks", "Local API start/stop and CDP", "Scripted pre-shift session verification"],
      ] },
    ]},
    { id: "ads-faq", title: "Ads client accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Does the browser profile replace Business Manager or MCC access?", answer: "No. Permissions always come from the platforms' official structures. The profile stabilizes where and how your team logs in." }, { question: "Why give each client a proxy?", answer: "Ad accounts that log in from one shared agency IP, then another, collect security reviews. A stable per-client IP reads like a normal office." }, { question: "Can scripts check client sessions automatically?", answer: "Yes. The Local API on 127.0.0.1:50400 starts and stops profiles, and your script connects over CDP to verify the login state before a shift." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "gads-mcc", source: "Google Ads Help", title: "About manager accounts", url: "https://support.google.com/google-ads/answer/6139186", checkedOn: "2026-09-01" },
    { id: "meta-bm", source: "Meta Business Help Center", title: "Add people and partners to Business Manager", url: "https://www.facebook.com/business/help", checkedOn: "2026-09-01" },
    { id: "gads-2fa", source: "Google Ads Help", title: "2-step verification and account security", url: "https://support.google.com/google-ads", checkedOn: "2026-09-01" },
  ],
};
