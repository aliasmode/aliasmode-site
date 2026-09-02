import type { TaskGuidePage } from '../types.ts';

export const authenticatedBrowserProfilesForScrapingTaskGuide: TaskGuidePage = {
  path: "/guides/authenticated-browser-profiles-for-scraping/",
  family: "task-guide",
  label: "Authenticated scraping profiles",
  title: "Authenticated Browser Profiles for Web Scraping",
  description: "Collect data from sites you hold accounts on with persistent authenticated profiles, steady rate limits, and Local API control over each browser session.",
  h1: "Collect from logged-in sites through persistent profiles.",
  eyebrow: "Authenticated scraping guide",
  lead: "Login-walled data needs a session, and sessions need continuity. Persistent profiles hold the login while your collector works at a pace a real user could sustain.",
  directAnswer: "Log into the target once in an AliasMode profile, then start and connect over CDP for each collection run via the Local API, keeping one account per site per profile and gentle rate limits.",
  audience: "agents",
  intent: "procedural",
  intentKey: "guide:authenticated-browser-profiles-for-scraping",
  topicCluster: "ai-agents",
  parent: "/guides/",
  related: ["/use-cases/ai-agents/", "/guides/one-proxy-per-browser-profile/", "/docs/local-api/", "/best-antidetect-browsers-for-ai-agents/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A repeatable authenticated collection setup: persistent logins, controlled sessions, and rate limits that keep accounts healthy over months.",
  prerequisites: [
    "Accounts on the target sites that your terms of service permit you to use this way",
    "AliasMode installed and the Local API available at 127.0.0.1:50400",
    "A Playwright or Puppeteer collector",
    "A residential proxy per profile matching the account's usual region",
  ],
  steps: [
    { title: "Confirm you may collect, then how much", body: "Check the site's terms, robots directives, and your account agreement. Decide a sustainable rate — pages per minute and runs per day — before writing code." },
    { title: "One profile per site account", body: "Create an AliasMode profile per target account: scrape·site·account-name. If a site bans an account, the blast radius is one profile." },
    { title: "Match the proxy to the account", body: "Attach a residential proxy in the region the account normally logs in from, and preflight. A familiar IP is the cheapest anti-challenge measure there is." },
    { title: "Seed the login by hand", body: "Log in manually once inside the profile and solve any challenge personally. Collectors never handle the login form; they inherit the session." },
    { title: "Start the session per run", body: "Start the profile through the Local API at the beginning of each run.", code: "const res = await fetch('http://127.0.0.1:50400/api/v1/browser/start?user_id=' + profileId);\nconst { data } = await res.json();\nconst browser = await chromium.connectOverCDP(data.ws.puppeteer);" },
    { title: "Collect at a human pace", body: "Throttle requests, randomize pacing modestly, and stop on rate-limit signals rather than pushing through. Long, slow, boring runs beat fast, hot ones.", code: "const context = browser.contexts()[0];\nfor (const url of queue) {\n  await page.goto(url);\n  // extract, then wait — keep it slow and steady\n  await page.waitForTimeout(3000 + Math.random() * 4000);\n}" },
    { title: "Stop and sync", body: "Close the browser and stop the profile after each run so the session is saved cleanly for tomorrow.", code: "await browser.close();\nawait fetch('http://127.0.0.1:50400/api/v1/browser/stop?user_id=' + profileId);" },
    { title: "Monitor session health", body: "If a run lands on a login page or challenge, stop that profile, re-seed the login manually, and investigate the rate before resuming." },
  ],
  verification: ["Runs land on logged-in pages with no login flow executed by code.", "Collection rates match the documented throttle, sampled from run logs.", "Stopping a run mid-way leaves a stoppable, resumable state — no orphan browser.", "Account health is stable: no new challenges or warnings across a month of runs."],
  cautions: ["Scraping can breach a site's terms even when the data itself is public — get the legal basis right for your jurisdiction and data types.", "Never collect personal data without a lawful basis; authenticated access is not consent.", "Pushing through rate limits risks the account and, on shared IPs, the proxy's reputation."],
  aliasModeWorkflow: [
    { title: "Profiles as site credentials", body: "One profile per site account keeps logins, cookies, and fingerprint history attributable to one identity." },
    { title: "Local API as the run switch", body: "Start and stop sessions from your collector's scheduler; nothing runs outside a managed session." },
    { title: "Preflight per run", body: "Confirm the exit IP region before each run so the account never sees a surprise geo." },
  ],
  sections: [
    { id: "collection-run-loop", title: "The collection run loop", blocks: [
      { type: 'steps', items: [{ title: "Pre-run", body: "Preflight proxy, confirm rate limits, check yesterday's run ended clean." }, { title: "Start", body: "Local API start returns the CDP endpoint; connect your collector." }, { title: "Collect", body: "Throttled extraction with stop-on-challenge guards." }, { title: "Post-run", body: "Stop the profile, store the data, log session health." }] },
    ]},
    { id: "scraping-guardrails", title: "Collection guardrails", blocks: [
      { type: 'table', caption: "Guardrails that keep accounts alive", columns: ["Guardrail", "Setting", "Why"], rows: [
        ["Request pacing", "Seconds between pages, randomized", "Machine-gun pacing is the top account killer"],
        ["Daily volume", "Cap pages per account per day", "Volume spikes read as abuse"],
        ["Stop conditions", "Halt on login pages and challenges", "Pushing through turns a warning into a ban"],
        ["Run windows", "Collect at plausible hours", "4 a.m. marathons are a pattern"],
      ] },
    ]},
    { id: "scraping-faq", title: "Authenticated scraping FAQ", blocks: [
      { type: 'faq', items: [{ question: "Is authenticated scraping legal?", answer: "It depends on terms, data types, and jurisdiction. Get a legal review for your targets; the tooling here assumes you have the right to collect what you collect." }, { question: "Why not log in inside the script?", answer: "Login forms carry the highest challenge risk. Log in once by hand in the profile, and your code only reuses a stable session." }, { question: "How many accounts per site should I run?", answer: "Prefer one healthy account per site per project. Extra accounts multiply your maintenance and risk for little throughput." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "robots", source: "IETF", title: "Robots Exclusion Protocol (RFC 9309)", url: "https://www.rfc-editor.org/rfc/rfc9309.html", checkedOn: "2026-09-01" },
    { id: "pw-cdp", source: "Playwright", title: "Browser.connectOverCDP API reference", url: "https://playwright.dev/docs/api/class-browser", checkedOn: "2026-09-01" },
    { id: "cdp", source: "Chrome DevTools Protocol", title: "DevTools Protocol documentation", url: "https://chromedevtools.github.io/devtools-protocol/", checkedOn: "2026-09-01" },
  ],
};
