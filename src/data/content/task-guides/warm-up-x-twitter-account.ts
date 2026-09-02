import type { TaskGuidePage } from '../types.ts';

export const warmUpXTwitterAccountTaskGuide: TaskGuidePage = {
  path: "/guides/warm-up-x-twitter-account/",
  family: "task-guide",
  label: "Warm up X account",
  title: "How to Warm Up an X (Twitter) Account",
  description: "Warm up a new X account with verified contact details, read-only browsing, and small daily engagement inside one persistent AliasMode profile.",
  h1: "Warm up a new X account before any posting or growth work.",
  eyebrow: "X warm-up guide",
  lead: "X scores new accounts on verification, session stability, and early behavior. A persistent profile with a matching proxy keeps those signals consistent from day one.",
  directAnswer: "Verify email and phone, browse from one AliasMode profile on a stable residential proxy, and hold off on following, posting, or automation for the first 5-7 days.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:warm-up-x-twitter-account",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/manage-multiple-x-twitter-accounts/", "/guides/one-proxy-per-browser-profile/", "/best-antidetect-browsers-for-x-twitter/", "/docs/browser-profiles/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A new X handle with verified contact details and one to two weeks of human-paced history, running on one fingerprint and IP.",
  prerequisites: [
    "AliasMode installed and a workspace to hold your profiles",
    "One residential proxy in the region you want the account associated with",
    "A dedicated email address and phone number for the new handle",
    "The X login credentials for the account",
  ],
  steps: [
    { title: "Create a profile for the handle", body: "Name the profile after the handle, for example x·handle·uk·main. One profile per handle, with its own fingerprint seed generated at creation." },
    { title: "Match the proxy to the account region", body: "Attach a residential proxy in the account region, then run the proxy preflight. X compares login geography against account history, so fix the location before the first session." },
    { title: "Verify email and phone first", body: "Log in and complete email and phone verification before anything else. Unverified new accounts hit posting and following limits much sooner." },
    { title: "Days 1-3: read only", body: "Complete the profile with a photo, bio, and header. Read the timeline, run a few searches, and open a couple of profiles. No posts, replies, or follows yet." },
    { title: "Days 4-7: small engagement", body: "Follow 5-15 accounts relevant to the niche and like a few posts per day. Keep totals small; the goal is a pattern, not activity." },
    { title: "Week 2: first posts and replies", body: "Publish a first post, reply to two or three others, and keep the daily totals modest. Avoid follow-then-unfollow cycles entirely; X treats them as a spam signal." },
    { title: "Before any automation: read the rules", body: "Review the X automation rules before connecting a scheduler or bot tool, and run any tool through this same profile so its session history stays in one place." },
  ],
  verification: ["Email and phone both show as verified in account settings.", "Closing and relaunching the profile restores the session with no forced re-authentication.", "Proxy preflight reports the region you registered the account for.", "No limited-account banners or locked-post notices appear in the first two weeks."],
  cautions: ["X automation rules restrict bulk following, posting, and identical replies; warm-up pacing does not exempt an account from them.", "Purchased followers and follow-back schemes create spam signals that outlast the warm-up window.", "Do not register or run several new handles from one IP in the same week."],
  aliasModeWorkflow: [
    { title: "Create the profile", body: "One profile per handle, fingerprint seed generated once, named with your handle pattern." },
    { title: "Preflight the proxy", body: "Confirm connection, exit country, and timezone before the first login of a new handle." },
    { title: "Keep every session in the profile", body: "Always launch the handle from AliasMode so X sees the same device and a continuous session history." },
    { title: "Tag the warm-up start", body: "Tag the profile with its warm-up start date so the team knows when normal volume is allowed." },
  ],
  sections: [
    { id: "x-warm-up-schedule", title: "X warm-up schedule at a glance", blocks: [
      { type: 'steps', items: [{ title: "Days 1-3", body: "Verification, profile completion, and read-only browsing." }, { title: "Days 4-7", body: "5-15 follows and a few likes per day. No posts yet." }, { title: "Week 2", body: "First posts and replies at low volume, from the same profile." }, { title: "Week 3 onward", body: "Normal cadence, then scheduled tooling only after a rules review." }] },
    ]},
    { id: "x-platform-notes", title: "X-specific notes", blocks: [
      { type: 'table', caption: "X signals and how to handle them", columns: ["Signal", "Why it matters", "Profile handling"], rows: [
        ["Verification state", "Unverified accounts face lower limits", "Email and phone verified on day one, in the profile"],
        ["Login geography", "New regions on login trigger challenges", "One residential proxy per handle, preflighted before first login"],
        ["Session age", "Fresh sessions on new devices look risky", "Cookies persist in the profile, so sessions accumulate"],
        ["Automation rules", "Bulk actions breach the platform rules", "Any tooling runs through this profile at human-adjacent rates"],
      ] },
    ]},
    { id: "x-warm-up-faq", title: "X warm-up FAQ", blocks: [
      { type: 'faq', items: [{ question: "How soon can a new X account post?", answer: "Technically within limits after verification, but a few read-only days first produces a cleaner history. Start posting in week two." }, { question: "Can I run several handles from one computer?", answer: "Yes. Each handle lives in its own profile with its own proxy, so the fingerprints, cookies, and IPs never overlap." }, { question: "Does warm-up protect against suspension?", answer: "No. It reduces friction and false positives, but X enforces its rules on its own judgment and can still restrict an account." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "x-rules", source: "X Help Center", title: "Platform manipulation and spam policy", url: "https://help.x.com/en/rules-and-policies/platform-manipulation", checkedOn: "2026-09-01" },
    { id: "x-automation", source: "X Help Center", title: "Automation rules", url: "https://help.x.com/en/rules-and-policies/x-automation", checkedOn: "2026-09-01" },
    { id: "x-help", source: "X Help Center", title: "Account settings and profile help", url: "https://help.x.com/en/managing-your-account", checkedOn: "2026-09-01" },
  ],
};
