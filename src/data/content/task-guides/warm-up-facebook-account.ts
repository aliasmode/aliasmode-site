import type { TaskGuidePage } from '../types.ts';

export const warmUpFacebookAccountTaskGuide: TaskGuidePage = {
  path: "/guides/warm-up-facebook-account/",
  family: "task-guide",
  label: "Warm up Facebook account",
  title: "How to Warm Up a Facebook Account",
  description: "Reduce early restrictions on a new Facebook profile with complete details, gradual friend activity, and one stable device identity in AliasMode.",
  h1: "Warm up a new Facebook account with gradual, human pacing.",
  eyebrow: "Facebook warm-up guide",
  lead: "Facebook restricts new accounts that add friends fast or drop links on day one. Complete the profile, act slowly, and keep one device identity from the first login.",
  directAnswer: "Fill in real profile details, add a few genuine friends per day, join one or two groups, and hold all links and ads for two weeks — from one persistent profile.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:warm-up-facebook-account",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/manage-multiple-facebook-accounts/", "/best-antidetect-browsers-for-facebook/", "/docs/browser-profiles/", "/guides/organize-client-browser-profiles/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A new Facebook account with a completed profile and two weeks of steady history, without early checkpoints or feature blocks.",
  prerequisites: [
    "AliasMode installed and a group ready for the account",
    "A residential proxy in the country the account is registered in",
    "A dedicated email and phone number for the account",
    "Real profile details you are prepared to keep consistent",
  ],
  steps: [
    { title: "Create the profile before the account", body: "Create an AliasMode profile with a country-matched residential proxy and run the preflight. Facebook checks device and IP at registration, so the environment should be ready before the account exists." },
    { title: "Register or log in once", body: "Register the account from inside the profile, or log in if it already exists. Use the dedicated email and phone, and never open this account outside the profile again." },
    { title: "Complete the profile immediately", body: "Add a real photo, cover image, bio, and workplace or school details. Half-empty new accounts draw checks faster than complete ones." },
    { title: "Days 1-7: small, genuine connections", body: "Add a few people you actually know or have a real reason to contact, in small daily batches. Interact with the feed: react, comment briefly, wish a happy birthday." },
    { title: "Week 2: groups and pages", body: "Join one or two relevant groups, follow a few pages, and continue light daily activity. Do not create a Page or run ads from the personal account yet." },
    { title: "Hold links and promos for two weeks", body: "No external links, no promotional posts, no Marketplace listings in the first fortnight. Link-heavy behavior from a new account is the classic restriction trigger." },
    { title: "Secure and settle", body: "Enable two-factor authentication, review recent logins to confirm only this profile appears, and let the account settle into a normal cadence." },
  ],
  verification: ["No account-quality checkpoints or identity prompts appear during the first two weeks.", "Recent logins show only this profile's sessions and one consistent IP.", "The profile is complete: photo, cover, bio, and details.", "Friend and group counts grew gradually, matching the plan, not a spike."],
  cautions: ["Facebook requires authentic personal accounts under its terms; fake or rented personas risk permanent loss of the account.", "Commercial activity belongs on Pages and Business assets, not on warmed personal profiles.", "Adding dozens of strangers in week one is the most common cause of instant restrictions."],
  aliasModeWorkflow: [
    { title: "Prepare the environment", body: "Country-matched proxy in the profile, preflight passed, before registration or first login." },
    { title: "One profile, one account", body: "Keep a strict one-to-one map of Facebook accounts to profiles, with the fingerprint seed fixed at creation." },
    { title: "Track the pace", body: "Tag the profile with its start date and note friend-batch dates so pacing stays honest." },
    { title: "Group by client or purpose", body: "Put the profile in a group that reflects its job so handoffs and audits stay simple." },
  ],
  sections: [
    { id: "facebook-warm-up-schedule", title: "Facebook warm-up schedule", blocks: [
      { type: 'steps', items: [{ title: "Day 0", body: "Environment ready, registration or first login inside the profile." }, { title: "Days 1-7", body: "Profile completion plus a small daily batch of genuine friend activity." }, { title: "Days 8-14", body: "Groups, page follows, light daily engagement. Still no links or promos." }, { title: "Day 15 onward", body: "Normal personal cadence. Move commercial work to Pages and Business assets." }] },
    ]},
    { id: "facebook-platform-notes", title: "Facebook-specific notes", blocks: [
      { type: 'table', caption: "What draws early restrictions and how to avoid it", columns: ["Trigger", "Why Facebook flags it", "Safer approach"], rows: [
        ["Mass friend requests", "New accounts add friends at human speeds", "Small daily batches of genuine connections"],
        ["Links from day one", "Link-heavy new profiles match spam patterns", "Hold external links for two weeks"],
        ["Device or IP changes", "New sessions read as compromised accounts", "One persistent profile with one proxy"],
        ["Instant ad spending", "Payment activity on a new identity draws review", "Build history first, then use official business assets"],
      ] },
    ]},
    { id: "facebook-warm-up-faq", title: "Facebook warm-up FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can I warm up a Facebook account for advertising?", answer: "Advertising runs through ad accounts and Business Manager, not the personal profile. Warm the personal login, then attach it to proper business assets." }, { question: "What happens if Facebook asks for ID?", answer: "Respond through the official checkpoint with genuine details. A warm-up cannot substitute for authentic identity information." }, { question: "How many friends should I add in week one?", answer: "A small, realistic trickle of people with a real connection to the account. Exact numbers matter less than the absence of spikes." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "fb-help", source: "Facebook Help Center", title: "Creating an account and profile basics", url: "https://www.facebook.com/help/", checkedOn: "2026-09-01" },
    { id: "fb-standards", source: "Meta", title: "Community Standards: authenticity", url: "https://transparency.meta.com/policies/community-standards/", checkedOn: "2026-09-01" },
    { id: "fb-business", source: "Meta Business Help Center", title: "Business accounts, Pages, and access", url: "https://www.facebook.com/business/help", checkedOn: "2026-09-01" },
  ],
};
