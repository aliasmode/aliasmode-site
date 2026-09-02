import type { TaskGuidePage } from '../types.ts';

export const warmUpInstagramAccountTaskGuide: TaskGuidePage = {
  path: "/guides/warm-up-instagram-account/",
  family: "task-guide",
  label: "Warm up Instagram account",
  title: "How to Warm Up an Instagram Account Safely",
  description: "Build early history on a new Instagram account with a stable fingerprint, a matching residential proxy, and daily actions that ramp up over two weeks.",
  h1: "Warm up a new Instagram account on a stable fingerprint.",
  eyebrow: "Instagram warm-up guide",
  lead: "New Instagram accounts are judged on device, IP, and early behavior. A persistent AliasMode profile keeps all three constant while your daily actions scale up slowly.",
  directAnswer: "Create one AliasMode profile per Instagram account, pin a residential proxy in the account country, then ramp activity from passive browsing to light engagement over 10-14 days.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:warm-up-instagram-account",
  topicCluster: "social-accounts",
  parent: "/guides/",
  related: ["/guides/manage-multiple-instagram-accounts/", "/guides/one-proxy-per-browser-profile/", "/best-antidetect-browsers-for-instagram/", "/docs/proxies/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A new Instagram account with two weeks of consistent, low-volume history that survives relaunches on the same fingerprint and IP.",
  prerequisites: [
    "AliasMode installed on a Windows machine with a Local or Cloud workspace",
    "One residential proxy per account, located in the account country",
    "A fresh email address and, where Instagram asks, a phone number for the new account",
    "The Instagram login details for the account you are warming up",
  ],
  steps: [
    { title: "Create one profile per account", body: "Create a profile named for the account, for example ig·brand-a·us·warmup. Never reuse a profile across two Instagram accounts; cookies and the fingerprint seed must stay unique to one login." },
    { title: "Attach a matching proxy", body: "Add a residential HTTP or SOCKS5 proxy in the same country as the account, paste the credentials into the profile, and run the proxy preflight. Confirm the exit IP country and timezone before the first login." },
    { title: "Set the fingerprint once and leave it alone", body: "Keep the deterministic fingerprint seed AliasMode generated. A phone-class user agent and screen size match how most people use Instagram. Changing the fingerprint after login is the regression you want to avoid." },
    { title: "Days 1-2: browse only", body: "Launch the profile, log in, and complete the basics: avatar, bio, and a follow of a few obvious accounts. Scroll the feed, watch some Reels, and stop there. Read-only history looks normal." },
    { title: "Days 3-6: light engagement", body: "Like a handful of posts per day and follow 5-10 accounts that fit the niche. No comments, no DMs, and no link in the bio yet." },
    { title: "Days 7-13: grow the pattern", body: "Double the daily engagement, publish a first post or story, and reply to a comment or two. Keep every action inside this profile so Instagram sees one stable device and IP." },
    { title: "Day 14 onward: normal operations", body: "Move the account to its real job, such as posting cadence or inbox work. Increase volume in steps, and pause the ramp for a few days if an unusual-activity prompt appears." },
  ],
  verification: ["The login survives closing and relaunching the profile without a new code challenge.", "Proxy preflight reports the same exit country as the account region settings.", "Daily action counts match the written schedule instead of a quota.", "No unusual-login or verification emails appear during the warm-up window."],
  cautions: ["Instagram enforces its Terms of Use and can restrict or disable accounts; steady pacing lowers risk but never removes it.", "Never run mass follows, DM blasts, or bot tools on an account younger than a few weeks.", "Avoid datacenter IPs and never share one proxy across several accounts in the same niche."],
  aliasModeWorkflow: [
    { title: "Create the profile", body: "Create a new profile in AliasMode with your account naming pattern, and keep the generated fingerprint seed." },
    { title: "Preflight the proxy", body: "Run the proxy preflight to confirm the connection, exit IP, and timezone before the first Instagram login." },
    { title: "Keep sessions inside the profile", body: "Launch from AliasMode every time so cookies and session state persist in the same user-data directory." },
    { title: "Group the account", body: "Add the profile to an Instagram group and tag it with country and warm-up start date so the schedule is auditable." },
  ],
  sections: [
    { id: "warm-up-schedule", title: "Two-week Instagram warm-up schedule", blocks: [
      { type: 'steps', items: [{ title: "Days 1-2", body: "Profile basics and feed browsing only. No likes, follows, or DMs." }, { title: "Days 3-6", body: "5-10 likes and 5-10 follows per day, plus one search session per day." }, { title: "Days 7-13", body: "10-20 likes, the first one or two posts, and an occasional comment. Still no bio link." }, { title: "Day 14 onward", body: "Normal posting cadence. Add a bio link only after two clean weeks with no prompts." }] },
    ]},
    { id: "instagram-risk-signals", title: "What Instagram checks and how the profile answers", blocks: [
      { type: 'table', caption: "Warm-up signals handled by the profile", columns: ["Signal", "What it means", "AliasMode handling"], rows: [
        ["Device fingerprint", "New devices on an account trigger scrutiny", "One deterministic seed and user agent, pinned for the life of the account"],
        ["IP address", "Country mismatch and datacenter ranges stand out", "Residential proxy matched to the account country, verified in preflight"],
        ["Session continuity", "Repeated fresh logins look automated", "Cookies persist in the profile, so relaunches are returning sessions"],
        ["Action volume", "Spikes on new accounts trigger limits", "Stepped schedule recorded per day, with pauses on prompts"],
      ] },
    ]},
    { id: "instagram-warm-up-faq", title: "Instagram warm-up FAQ", blocks: [
      { type: 'faq', items: [{ question: "Can I warm up several Instagram accounts at once?", answer: "Yes. Each account gets its own profile and its own proxy, and you stagger the schedules so no two accounts ramp on the same days." }, { question: "How long does an Instagram warm-up take?", answer: "Plan 10-14 days for a brand-new account. Aged accounts that were already active usually need less, but keep the same one-device, one-IP rule." }, { question: "Do I need a phone number for every account?", answer: "Instagram increasingly asks for verification. Use a real, dedicated number per account and never share one number across a batch." }, { question: "Can two accounts share one proxy?", answer: "Avoid it. One proxy per profile keeps the account-to-IP map simple and stops one ban from touching both accounts." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "ig-help", source: "Instagram Help Center", title: "Creating and managing your Instagram account", url: "https://help.instagram.com/1559401974384809", checkedOn: "2026-09-01" },
    { id: "ig-terms", source: "Instagram", title: "Terms of Use", url: "https://help.instagram.com/581066165581870", checkedOn: "2026-09-01" },
    { id: "ig-security", source: "Instagram Help Center", title: "Keeping your Instagram account secure", url: "https://help.instagram.com/", checkedOn: "2026-09-01" },
  ],
};
