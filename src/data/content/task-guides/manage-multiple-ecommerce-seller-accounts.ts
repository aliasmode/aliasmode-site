import type { TaskGuidePage } from '../types.ts';

export const manageMultipleEcommerceSellerAccountsTaskGuide: TaskGuidePage = {
  path: "/guides/manage-multiple-ecommerce-seller-accounts/",
  family: "task-guide",
  label: "Manage seller accounts",
  title: "How to Manage Multiple Ecommerce Seller Accounts",
  description: "Run several marketplace seller accounts with one persistent profile per store, a region-matched proxy, and separation rules that follow each platform policy.",
  h1: "Run every seller account in its own fingerprint and region.",
  eyebrow: "Ecommerce seller accounts guide",
  lead: "Marketplaces link seller accounts through devices, IPs, and business details. Technical separation protects accounts that are allowed to exist; policy compliance decides what is allowed.",
  directAnswer: "Give each seller account its own AliasMode profile with a dedicated proxy in its marketplace region, and keep every business detail per-store separate — after confirming each platform's multi-account policy.",
  audience: "operators",
  intent: "procedural",
  intentKey: "guide:manage-multiple-ecommerce-seller-accounts",
  topicCluster: "ecommerce",
  parent: "/guides/",
  related: ["/best-antidetect-browsers-for-ecommerce/", "/best-antidetect-browsers-for-amazon/", "/guides/one-proxy-per-browser-profile/", "/docs/proxies/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Seller accounts that stay technically isolated per store, with separation strong enough that a problem on one store cannot touch another.",
  prerequisites: [
    "Written confirmation of each marketplace's multi-account policy for your situation",
    "AliasMode installed with a group per marketplace or brand",
    "One residential proxy per store, in the store's region",
    "Separate banking, tax, and contact details per selling entity",
  ],
  steps: [
    { title: "Check the policy before the setup", body: "Amazon generally requires a legitimate business need and approval for multiple accounts; eBay allows multiple accounts under conditions; Etsy has its own shop rules. Confirm your case fits the current policy before building infrastructure around a second account." },
    { title: "One profile per store", body: "Create an AliasMode profile per store, named store·marketplace·region. Fixed fingerprint seed per profile — marketplaces link stores through device signals first." },
    { title: "Dedicated proxy per store", body: "Attach a residential proxy in the store's region and preflight it. Seller accounts appearing from one IP is the classic linking signal." },
    { title: "Keep business details per store", body: "Separate email, phone, bank account, and tax identity per selling entity, as each platform's rules require. Shared details link accounts as surely as shared IPs." },
    { title: "Log in once, persist the session", body: "Log into Seller Central, Seller Hub, or the shop dashboard inside its profile once. Persistent cookies avoid repeated fresh logins from new devices." },
    { title: "Separate the daily operations", body: "Work one store per profile per session. Do not open two stores side by side on one machine during the same work window if you can avoid it; if you must, they are still fully isolated in AliasMode." },
    { title: "Watch for verification requests", body: "Marketplaces periodically re-verify sellers. Handle requests inside the owning profile, with that store's documents, and record the event." },
    { title: "Review the map quarterly", body: "Each quarter, confirm the store-profile-proxy map is still one to one and preflight passes everywhere. Drift here is how stores get linked." },
  ],
  verification: ["Each store opens from its own profile with no security challenges on relaunch.", "Preflight reports one distinct region per store, matching its marketplace settings.", "No email, bank, or contact detail appears in two stores' records.", "Every proxy replacement kept the same country as the store."],
  cautions: ["Running multiple accounts without meeting a marketplace's multi-account conditions can suspend every linked store — policy first, tooling second.", "Shared devices, IPs, or business details are the main linking signals; keep the one-to-one map honest.", "Do not log into two stores from one non-AliasMode browser 'just this once' — that session usually becomes the link."],
  aliasModeWorkflow: [
    { title: "Store template", body: "A profile template per marketplace keeps proxy type and fingerprint class consistent across your stores." },
    { title: "Preflight per store", body: "Confirm the exit IP matches the store's registered region before every seller session." },
    { title: "Cloud sync for teams", body: "Operators and VAs open the same persistent store sessions through Cloud, without sharing Seller Central passwords." },
  ],
  sections: [
    { id: "seller-operations-loop", title: "The seller operations loop", blocks: [
      { type: 'steps', items: [{ title: "Open the store's profile", body: "Launch the profile, confirm preflight, then open the seller dashboard." }, { title: "Work one store", body: "Finish that store's tasks — orders, listings, cases — before moving to the next." }, { title: "Handle checks in place", body: "Answer verification requests from inside the owning profile with that store's documents." }, { title: "Close, sync, log", body: "Close the profile so the session persists, and log anything unusual per store." }] },
    ]},
    { id: "marketplace-policy-notes", title: "Marketplace notes", blocks: [
      { type: 'table', caption: "Multi-account posture by marketplace", columns: ["Marketplace", "General posture", "Separation must-haves"], rows: [
        ["Amazon", "Multiple accounts need a legitimate business need and approval", "Separate entity, bank, and a distinct region-matched proxy per approved account"],
        ["eBay", "Multiple accounts allowed under selling-practice conditions", "One profile and IP per account, all in good standing"],
        ["Etsy", "Shop rules per seller apply", "Follow current seller policy; keep each shop's session in its own profile"],
        ["Shop-own stores", "You set the rules", "Still isolate: one profile per store simplifies teams and audits"],
      ] },
    ]},
    { id: "seller-faq", title: "Seller accounts FAQ", blocks: [
      { type: 'faq', items: [{ question: "Why do I need browser isolation if my accounts are policy-compliant?", answer: "Marketplace linking systems match devices and IPs, and false links are common with shared office networks or VAs. Isolation prevents accidental linking." }, { question: "Can my VA run three stores from one computer?", answer: "Yes — each store in its own profile with its own proxy, opened one at a time, with Cloud sync handing off sessions." }, { question: "What happens if a proxy dies mid-session?", answer: "Replace it with one in the same country, preflight, and reopen the profile. Never let a store session run exposed on your real IP." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "amz-multi", source: "Amazon Seller Central Help", title: "Multiple seller accounts policy and approvals", url: "https://sellercentral.amazon.com/gp/help/external/", checkedOn: "2026-09-01" },
    { id: "ebay-multi", source: "eBay Help Center", title: "Multiple accounts and selling practices policy", url: "https://www.ebay.com/help/home", checkedOn: "2026-09-01" },
    { id: "etsy-policy", source: "Etsy", title: "Seller Policy", url: "https://www.etsy.com/legal/sellers/", checkedOn: "2026-09-01" },
  ],
};
