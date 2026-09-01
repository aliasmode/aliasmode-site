import type { TaskGuidePage } from '../types.ts';

export const manageMultipleLinkedinAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-linkedin-accounts/",
  family: "task-guide",
  label: "Manage LinkedIn accounts",
  title: "How to Manage Multiple LinkedIn Accounts",
  description: "Keep each LinkedIn client login in its own isolated profile with a stable IP, clear ownership, and handoffs that never share a browser session.",
  h1: "Keep every LinkedIn client login in its own profile.",
  eyebrow: "LinkedIn accounts guide",
  lead: "LinkedIn allows one personal account per person, so multi-account work means operating client logins and company pages cleanly — not stacking personal profiles.",
  directAnswer: "Operate each client's LinkedIn through its own AliasMode profile with a dedicated proxy and documented ownership, and manage company activity through official page roles.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-linkedin-accounts",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/organize-client-browser-profiles/", "/guides/share-social-media-accounts-without-passwords/", "/best-antidetect-browsers-for-social-media/", "/use-cases/social-media-agencies/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Client LinkedIn logins separated into owned, isolated profiles with page roles handled officially and no shared sessions.",
  prerequisites: [
    "Written client consent to operate their LinkedIn login",
    "AliasMode installed with a group per client",
    "One residential proxy per client login, in a sensible region",
    "A record of page roles and who holds them",
  ],
  steps: [
    { title: "Confirm the legal basis", body: "LinkedIn's User Agreement allows one personal account per person. Your multi-account work is operating client logins with permission and company pages through official roles — document that per client." },
    { title: "One profile per client login", body: "Create an AliasMode profile per client login, named client·role·owner. Fixed fingerprint seed, one login, no reuse." },
    { title: "Dedicated proxy per profile", body: "Attach one residential proxy per client, ideally near the client's market. A login appearing from two countries in one day draws security checks." },
    { title: "Log in once and persist", body: "Log into the client's account inside the profile once. Persisted sessions avoid the repeated fresh-device logins that trigger LinkedIn verification." },
    { title: "Use official page roles", body: "For company page work, have the client grant your named access through LinkedIn's page admin roles where possible, instead of borrowing their personal session for everything." },
    { title: "Keep volume human", body: "LinkedIn restricts aggressive outreach and automation. Keep connection requests, messages, and views at levels a human could sustain, and never buy engagement." },
    { title: "Hand off cleanly", body: "Close the profile, sync through Cloud, and log who operated the login and when. Shared sessions with no record are how disputes start." },
    { title: "Audit access quarterly", body: "Each quarter, confirm every profile still has consent, a current owner, and a passing preflight. Retire profiles for ended engagements." },
  ],
  verification: ["Each client login restores in its own profile without a verification loop.", "Page admin activity is traceable to a named, authorized role.", "The handoff log shows one operator per session window.", "No profile remains for a client whose contract has ended."],
  cautions: ["Creating multiple personal LinkedIn accounts breaches the User Agreement and gets accounts restricted.", "Bulk outreach tools and scrapers breach LinkedIn's terms and put client logins at risk.", "Operating a login without documented client consent is a trust and legal failure, not just an ops one."],
  aliasModeWorkflow: [
    { title: "Client boundary in groups", body: "One group per client; team members see only the profiles they are contracted to operate." },
    { title: "Fixed identity per login", body: "One profile, one seed, one proxy — the login always appears from the same device and region." },
    { title: "Preflight for region", body: "Confirm the exit IP before each session, especially when a client's team travels or the proxy was replaced." },
    { title: "Cloud handoffs", body: "Persistent sessions move between operators through Cloud sync, not through shared passwords." },
  ],
  sections: [
    { id: "linkedin-operations-loop", title: "The LinkedIn client loop", blocks: [
      { type: 'steps', items: [{ title: "Open the engagement", body: "Launch the client's profile and confirm consent, owner, and preflight are current." }, { title: "Work the session", body: "Do the engagement's tasks — page posts, inbox triage, connection follow-ups — at human volume." }, { title: "Record the session", body: "Log the operator, time window, and actions taken on the client's record." }, { title: "Close and sync", body: "Close the profile so the session and cookies persist for the next operator." }] },
    ]},
    { id: "linkedin-multi-notes", title: "LinkedIn-specific notes", blocks: [
      { type: 'bullets', items: ["One personal account per person: operate client logins with permission, never create parallel identities.", "Company pages: use LinkedIn's official page admin roles for publishing and analytics access.", "Volume discipline: LinkedIn's limits on invitations and messages are enforced; steady human-paced activity is the safe ceiling.", "Session isolation: one profile per client keeps cookies, IP, and fingerprints from crossing engagements."] },
    ]},
    { id: "linkedin-multi-faq", title: "Multiple LinkedIn accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can my agency hold one LinkedIn account for client work?", answer: "Your agency operates its own single account and client logins with consent. Creating extra personal accounts for client personas breaches the User Agreement." }, { question: "How do I avoid LinkedIn security checks on client logins?", answer: "One persistent profile and one proxy per login. The account should only ever see one device and one region." }, { question: "Is automation allowed on LinkedIn?", answer: "Bulk automation breaches LinkedIn's terms. Keep outreach and engagement within human-paced limits from the profile." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "li-agreement", source: "LinkedIn", title: "User Agreement", url: "https://www.linkedin.com/legal/user-agreement", checkedOn: "2026-09-01" },
    { id: "li-help", source: "LinkedIn Help", title: "Managing your account and page access", url: "https://www.linkedin.com/help/linkedin/", checkedOn: "2026-09-01" },
    { id: "li-2fa", source: "LinkedIn Help", title: "Account security and two-step verification", url: "https://www.linkedin.com/help/linkedin/", checkedOn: "2026-09-01" },
  ],
};
