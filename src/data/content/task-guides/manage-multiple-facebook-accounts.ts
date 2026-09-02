import type { TaskGuidePage } from '../types.ts';

export const manageMultipleFacebookAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-facebook-accounts/",
  family: "task-guide",
  label: "Manage Facebook accounts",
  title: "How to Manage Multiple Facebook Accounts",
  description: "Separate Facebook client and business logins into persistent profiles with dedicated proxies while keeping commercial work inside official Meta assets.",
  h1: "Run every Facebook login in its own isolated profile.",
  eyebrow: "Facebook accounts guide",
  lead: "Facebook is the strictest major platform on account identity. Separate your logins at the browser level, and put commercial work in Pages and Business Manager.",
  directAnswer: "Keep one Facebook login per AliasMode profile with its own proxy, and run all business activity through Pages, ad accounts, and Business Manager assets.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-facebook-accounts",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/warm-up-facebook-account/", "/best-antidetect-browsers-for-facebook/", "/guides/organize-client-browser-profiles/", "/use-cases/social-media-agencies/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Facebook work split into clean, isolated logins — one per profile — with business assets organized inside Meta's official structure.",
  prerequisites: [
    "AliasMode installed with groups ready per client or brand",
    "One residential proxy per login, in the account's country",
    "Meta Business Manager access for the business assets you manage",
    "A record of which personal login owns which assets",
  ],
  steps: [
    { title: "Split logins from assets", body: "Decide first what each login is for: a personal login, a client's login you operate, or a test account. Business assets (Pages, ad accounts) hang off Business Manager, not off extra personal accounts." },
    { title: "One profile per login", body: "Create an AliasMode profile per Facebook login and give it a fixed fingerprint seed. Never open one login from two profiles or machines at once." },
    { title: "Dedicated proxy per profile", body: "Attach a country-matched residential proxy per login. Facebook reads shared IPs as linked accounts." },
    { title: "Log in once, persist forever", body: "Complete each login inside its profile once. Persisted cookies mean daily work avoids the repeated fresh logins that trip Facebook's security." },
    { title: "Move commercial work into assets", body: "Give each login only the Business Manager roles it needs: Pages access, ad account access, or asset admin. The personal login stays personal." },
    { title: "Group per client", body: "Use AliasMode groups for the client boundary, so a contractor sees exactly one client's profiles and nothing else." },
    { title: "Set 2FA per login", body: "Enable two-factor authentication per login, with recovery codes stored in the client's password manager, not in chat threads." },
    { title: "Review account quality monthly", body: "Open each profile monthly, check Facebook's Account Quality and support notices, and resolve flags inside the owning profile." },
  ],
  verification: ["Each login restores inside its own profile with no security checkpoints.", "Preflight reports one distinct IP per profile.", "Business Manager roles match the access list per client.", "No login appears in more than one profile or device."],
  cautions: ["Facebook's terms require authentic personal identities; duplicate or fake personal accounts risk permanent restriction.", "Running ads from personal profiles instead of ad accounts violates Meta's policies and loses client reporting.", "Never operate a client's login from your personal devices outside the profile; it breaks the separation you built."],
  aliasModeWorkflow: [
    { title: "Fixed fingerprints", body: "Keep the generated seed per profile so Facebook sees the same device every session." },
    { title: "Preflight per login", body: "Verify the exit IP before opening any client login, especially after proxy changes." },
    { title: "Cloud handoffs", body: "Close, sync, and hand the session to the next operator without sharing passwords." },
  ],
  sections: [
    { id: "facebook-operations-loop", title: "The Facebook operations loop", blocks: [
      { type: 'steps', items: [{ title: "Open the client's group", body: "Launch only the profiles in today's client scope." }, { title: "Check Account Quality first", body: "Resolve any flags or notices before posting or spending." }, { title: "Work in assets", body: "Do the commercial work in Pages and ad accounts; keep the profile login quiet." }, { title: "Close and sync", body: "Close each profile after the session so the next operator gets the current state." }] },
    ]},
    { id: "facebook-multi-notes", title: "Facebook separation notes", blocks: [
      { type: 'table', caption: "What links Facebook logins and how to separate", columns: ["Linking signal", "Consequence", "Profile rule"], rows: [
        ["Shared IP", "Logins read as one person's accounts", "One residential proxy per profile"],
        ["Shared device", "Session data crosses logins", "One persistent profile per login"],
        ["Shared contact details", "Recovery paths link accounts", "Dedicated email and phone per login"],
        ["Business work on profiles", "Policy violations hit the personal login", "Commercial work in Business Manager assets"],
      ] },
    ]},
    { id: "facebook-multi-faq", title: "Multiple Facebook accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can I create a second personal account for a client?", answer: "No. Facebook allows one authentic personal account per person, and duplicates are removed. Operate the client's assets through Business Manager roles instead." }, { question: "How do I manage a client's ad spend safely?", answer: "Through their ad account with your role limited to what you need, accessed from a dedicated profile so the login environment never mixes." }, { question: "What if Facebook flags a client login?", answer: "Work the checkpoint inside the owning profile with the client's real details, and record the event on the profile before the next session." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "fb-help", source: "Facebook Help Center", title: "Account settings and login help", url: "https://www.facebook.com/help/", checkedOn: "2026-09-01" },
    { id: "fb-business", source: "Meta Business Help Center", title: "Business Manager accounts and roles", url: "https://www.facebook.com/business/help", checkedOn: "2026-09-01" },
    { id: "fb-standards", source: "Meta", title: "Community Standards: account integrity", url: "https://transparency.meta.com/policies/community-standards/", checkedOn: "2026-09-01" },
  ],
};
