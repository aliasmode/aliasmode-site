import type { TaskGuidePage } from '../types.ts';

export const reuseLoginStateWithPlaywrightTaskGuide: TaskGuidePage = {
  path: "/guides/reuse-login-state-with-playwright/",
  family: "task-guide",
  label: "Reuse login state in Playwright",
  title: "How to Reuse Login State With Playwright",
  description: "Reuse saved logins in Playwright by connecting over CDP to an AliasMode profile that already holds the session state, instead of restoring storage files.",
  h1: "Connect Playwright to a profile that already remembers login.",
  eyebrow: "Playwright login-state guide",
  lead: "storageState files go stale the day a session rotates. A persistent profile is live: connect Playwright over CDP and the login is already there.",
  directAnswer: "Keep the login in an AliasMode profile, start it through the Local API, and connect with chromium.connectOverCDP — no storageState export, no login flows in your tests.",
  audience: "developers",
  intent: "procedural",
  intentKey: "guide:reuse-login-state-with-playwright",
  topicCluster: "ai-agents",
  parent: "/guides/",
  related: ["/integrations/playwright/", "/docs/playwright/", "/docs/local-api/", "/guides/persistent-browser-profiles-for-ai-agents/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "Playwright scripts that run against logged-in sessions maintained in a profile, with no credential handling in code and no storageState files to refresh.",
  prerequisites: [
    "AliasMode installed on Windows with the Local API on 127.0.0.1:50400",
    "A Node.js project with playwright installed",
    "An AliasMode profile with the target site's login seeded manually",
    "The profile ID from GET /api/v1/user/list",
  ],
  steps: [
    { title: "Seed the login once, by hand", body: "Open the profile in AliasMode, log into the site, and close the profile. The session now lives in the profile's user-data directory — the durable copy." },
    { title: "Get the profile ID", body: "List profiles and record the ID of the profile you just seeded.", code: "curl 'http://127.0.0.1:50400/api/v1/user/list'" },
    { title: "Start the profile from the script", body: "Start the browser and capture the CDP websocket endpoint AliasMode returns.", code: "const origin = 'http://127.0.0.1:50400';\nconst res = await fetch(`${origin}/api/v1/browser/start?user_id=${profileId}`);\nconst payload = await res.json();\nif (payload.code !== 0) throw new Error(payload.msg);\nconst cdp = payload.data.ws.puppeteer;" },
    { title: "Connect over CDP — do not launch", body: "Connect to the running browser instead of launching your own. The profile's cookies, storage, and fingerprint are already live.", code: "import { chromium } from 'playwright';\nconst browser = await chromium.connectOverCDP(cdp);\nconst context = browser.contexts()[0];\nconst page = context.pages()[0] ?? await context.newPage();\nawait page.goto('https://example.com/dashboard'); // already logged in" },
    { title: "Assert the session, not the login", body: "Treat the logged-in state as an assertion, not a setup step. If the session died, fail loudly and let a human re-seed it.", code: "const loggedIn = await page.locator('[data-testid=\"account-menu\"]').isVisible();\nif (!loggedIn) throw new Error('Session expired — re-seed the AliasMode profile');" },
    { title: "Stop the profile in finally", body: "Always release the session so the profile stays consistent for the next run.", code: "try {\n  // ... test or scrape work ...\n} finally {\n  await browser.close();\n  await fetch(`${origin}/api/v1/browser/stop?user_id=${profileId}`);\n}" },
    { title: "Compare with storageState honestly", body: "storageState is fine for short-lived fixtures. When a site rotates sessions weekly, the profile wins: the cookie jar stays warm without a refresh pipeline." },
    { title: "CI caveat", body: "In CI, keep AliasMode and the profiles on a long-lived Windows runner or self-hosted agent; ephemeral containers cannot hold persistent sessions." },
  ],
  verification: ["The first page.goto lands on the logged-in dashboard with zero login code in the script.", "Killing the script mid-run still stops the profile via the finally block.", "Consecutive runs reuse the same session without new cookies warnings.", "GET /api/v1/browser/stop returns success and no chromium process lingers."],
  cautions: ["Only automate sites in ways their terms allow; a logged-in scripted session is still automation.", "Never print cookies or tokens from the CDP connection into logs.", "Two runs connecting to one profile at once will interleave state — serialize per profile."],
  aliasModeWorkflow: [
    { title: "Profiles replace storageState", body: "The profile's user-data directory is the durable session store; your repo holds no credentials and no cookie files." },
    { title: "Local API as the lifecycle hook", body: "start and stop bracket every run; the API contract is AdsPower-shaped, so existing tooling maps over." },
    { title: "Fingerprint stability", body: "The deterministic seed means the session always presents the same device, week after week." },
    { title: "Group by project", body: "Keep test identities in their own group so CI and local runs share one source of truth." },
  ],
  sections: [
    { id: "playwright-run-loop", title: "The login-state run loop", blocks: [
      { type: 'steps', items: [{ title: "Resolve", body: "Profile ID from GET /api/v1/user/list, or an env var in CI." }, { title: "Start", body: "GET /api/v1/browser/start?user_id=... returns data.ws.puppeteer." }, { title: "Connect", body: "chromium.connectOverCDP(cdp) — the session is already live." }, { title: "Release", body: "browser.close(), then GET /api/v1/browser/stop?user_id=... in finally." }] },
    ]},
    { id: "state-strategies", title: "Login-state strategies compared", blocks: [
      { type: 'table', caption: "Ways to get Playwright logged in", columns: ["Strategy", "Durability", "Best for"], rows: [
        ["Login flow in test", "None — re-runs the risk every time", "Testing the login itself"],
        ["storageState JSON", "Expires with the session", "Short-lived fixtures"],
        ["AliasMode profile over CDP", "Persistent, self-healing sessions", "Long-running scrapers and monitors"],
      ] },
    ]},
    { id: "playwright-faq", title: "Playwright FAQ", blocks: [
      { type: 'faq', items: [{ question: "Do I need Puppeteer instead for CDP?", answer: "No. Playwright's chromium.connectOverCDP supports CDP endpoints directly; contexts() and pages() work as usual." }, { question: "What if the site rotates cookies mid-run?", answer: "Fine — the profile's cookie jar updates live in the user-data directory, so the next run inherits the rotation." }, { question: "Can I run several tests against one profile in parallel?", answer: "Use separate browser contexts per test if they must be isolated, but serialize the profile itself: one connection at a time." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "pw-cdp", source: "Playwright", title: "Browser.connectOverCDP API reference", url: "https://playwright.dev/docs/api/class-browser", checkedOn: "2026-09-01" },
    { id: "pw-auth", source: "Playwright", title: "Authentication and storageState guide", url: "https://playwright.dev/docs/auth", checkedOn: "2026-09-01" },
    { id: "cdp", source: "Chrome DevTools Protocol", title: "DevTools Protocol documentation", url: "https://chromedevtools.github.io/devtools-protocol/", checkedOn: "2026-09-01" },
  ],
};
