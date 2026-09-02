import type { TaskGuidePage } from '../types.ts';

export const localizationGeoTestingWithBrowserProfilesTaskGuide: TaskGuidePage = {
  path: "/guides/localization-geo-testing-with-browser-profiles/",
  family: "task-guide",
  label: "Geo testing profiles",
  title: "Geo Testing and Localization With Browser Profiles",
  description: "Test geo-dependent pages from real regional environments with one proxy-matched profile per market, consistent timezones, and repeatable Local API launches.",
  h1: "Test geo-specific pages from real regional profiles.",
  eyebrow: "Geo testing guide",
  lead: "Geo pages react to IP, timezone, and locale together. A browser profile pins all three per market, so what you test is what your users in that market see.",
  directAnswer: "Create one AliasMode profile per market with a proxy in that region, then launch it through the Local API in your test runs and assert on the geo signals you care about.",
  audience: "developers",
  intent: "procedural",
  intentKey: "guide:localization-geo-testing-with-browser-profiles",
  topicCluster: "geo-testing",
  parent: "/guides/",
  related: ["/docs/proxies/", "/integrations/playwright/", "/docs/local-api/", "/guides/one-proxy-per-browser-profile/"],
  primaryCta: { href: '/download/', label: 'Download AliasMode free', type: 'download-installer' },
  secondaryCta: { href: '/best-antidetect-browsers-for-social-media/', label: 'Best antidetect browsers for social media', type: 'compare' },
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "A repeatable per-market test matrix: one profile per region, each with a consistent IP, timezone, and fingerprint, driven from Playwright or CI.",
  prerequisites: [
    "The list of markets you must verify: country, language, currency",
    "One residential proxy per market",
    "AliasMode installed on Windows, Local API on 127.0.0.1:50400",
    "A Playwright test suite or a simple check script",
  ],
  steps: [
    { title: "Build the market matrix", body: "List each market with its expected signals: country, language, currency, tax or legal banner, and any redirect behavior. This matrix is the spec your profiles will verify." },
    { title: "One profile per market", body: "Create a profile per market: geo·de·berlin, geo·jp·tokyo. Fixed fingerprint seed per profile so each market also has a stable device." },
    { title: "Match proxy, timezone, and locale", body: "Attach the market's residential proxy and run the preflight — it reports exit IP and timezone. Set the browser's locale to the market language so navigator.language and Accept-Language agree with the IP." },
    { title: "Baseline the signals", body: "Open a geo-signal page (search 'my ip', currency display, or your own /api/geo endpoint) from each profile and record what the market really presents before you assert anything." },
    { title: "Automate the launch per run", body: "Your CI or test script starts the market's profile and connects over CDP, exactly as an agent would.", code: "const res = await fetch(`http://127.0.0.1:50400/api/v1/browser/start?user_id=${profileId}`);\nconst { data } = await res.json();\nconst browser = await chromium.connectOverCDP(data.ws.puppeteer);\nconst page = await browser.contexts()[0].newPage();" },
    { title: "Assert on user-visible geo facts", body: "Check what users actually experience, not just HTTP layer redirects.", code: "await page.goto('https://yourshop.example/');\nconst currency = await page.locator('.price').first().textContent();\nconst lang = await page.evaluate(() => navigator.language);\nif (!currency.includes('€')) throw new Error(`DE market shows ${currency}`);" },
    { title: "Stop and rotate", body: "Stop each profile after its run and loop to the next market. Keep run output tagged per profile so failures name the market.", code: "await browser.close();\nawait fetch(`http://127.0.0.1:50400/api/v1/browser/stop?user_id=${profileId}`);" },
    { title: "Review drift monthly", body: "Proxy exits move and sites change geo logic. Re-run the baseline step monthly and update the matrix before trusting old assertions." },
  ],
  verification: ["Each profile's preflight reports exit IP and timezone in the intended market.", "navigator.language and the page's rendered language agree in every market profile.", "Currency and legal banners match the market matrix on the money pages.", "A full market loop completes from CI with per-market pass/fail output."],
  cautions: ["Geo results reflect your proxy's exit, so a rotated exit inside the wrong country silently falsifies tests — preflight every run.", "CDN edge behavior varies by city, not just country; add a second market profile for critical regions.", "Respect target-site terms when testing against third-party properties; this workflow is for sites you own or are permitted to test."],
  aliasModeWorkflow: [
    { title: "Market profiles as fixtures", body: "One profile per market, grouped by project, tagged with country and locale — the test matrix lives in the browser layer." },
    { title: "Preflight as a test precondition", body: "Treat proxy preflight as step zero of the suite; a wrong exit invalidates every downstream assertion." },
    { title: "Local API for CI", body: "start/stop per market keeps runs isolated and repeatable, with no browser state leaking between markets." },
  ],
  sections: [
    { id: "geo-test-loop", title: "The geo-test loop", blocks: [
      { type: 'steps', items: [{ title: "Preflight", body: "Confirm exit IP and timezone for the market profile before any assertion." }, { title: "Launch", body: "Local API start, then connectOverCDP from the test runner." }, { title: "Assert", body: "Language, currency, banners, redirects — the user-visible signals." }, { title: "Stop", body: "Local API stop, log results per market, move to the next profile." }] },
    ]},
    { id: "geo-signal-notes", title: "Geo signals worth asserting", blocks: [
      { type: 'table', caption: "Signals per market profile", columns: ["Signal", "Where it shows", "Assert via"], rows: [
        ["Country / IP", "Geo endpoints, CDN, redirects", "Your own /api/geo or an IP echo page"],
        ["Timezone", "Date rendering, cron-facing UIs", "Intl.DateTimeFormat().resolvedOptions().timeZone"],
        ["Language", "navigator.language, page content", "page.evaluate on navigator, locator text"],
        ["Currency", "Prices, checkout", "Locator text against the market matrix"],
      ] },
    ]},
    { id: "geo-faq", title: "Geo testing FAQ", blocks: [
      { type: 'faq', items: [{ question: "Why profiles instead of one browser with proxy flags?", answer: "A profile pins fingerprint, locale, cookies, and proxy together per market — and the preflight plus Local API make the launch repeatable from CI." }, { question: "Do cookies interfere between markets?", answer: "No. Each profile has its own user-data directory, so DE never sees JP's consent choices or currency cookies." }, { question: "How is this different from VPN-based testing?", answer: "A VPN moves the IP but not the timezone, locale, or device. Profiles align all four, which is what geo pages actually read." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "iana-tz", source: "IANA", title: "Time Zone Database", url: "https://www.iana.org/time-zones", checkedOn: "2026-09-01" },
    { id: "mdn-lang", source: "MDN Web Docs", title: "Navigator.language API", url: "https://developer.mozilla.org/docs/Web/API/Navigator/language", checkedOn: "2026-09-01" },
    { id: "pw-cdp", source: "Playwright", title: "Browser.connectOverCDP API reference", url: "https://playwright.dev/docs/api/class-browser", checkedOn: "2026-09-01" },
  ],
};
