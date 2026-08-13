import { localApiEndpoints, playwrightExample, productFacts } from './product';

export interface SeoSection {
  title: string;
  paragraphs: string[];
  bullets?: readonly string[];
  code?: string;
  links?: { href: string; label: string }[];
}

export interface SeoPage {
  path: string;
  eyebrow: string;
  headline: string;
  lead: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  facts?: { value: string; label: string }[];
  sections: SeoSection[];
  children?: string[];
  template?: 'standard' | 'calculator' | 'providers' | 'detection';
  lastTested?: string;
}

export const seoPages: SeoPage[] = [
  {
    path: '/product/',
    eyebrow: 'AliasMode product',
    headline: 'One profile manager. Cloud or Local.',
    lead: 'AliasMode gives each account a persistent browser profile with its own session, proxy, browser settings, and operating context. Use free Cloud sync with a team or keep the workflow on one computer.',
    primary: { href: '/download/', label: 'Download AliasMode free' },
    secondary: { href: '/local-vs-cloud/', label: 'Compare Local and Cloud' },
    facts: [
      { value: 'Free', label: 'All product functionality' },
      { value: 'Open source', label: 'Apache-2.0 desktop client' },
      { value: 'Unlimited', label: 'Browser profiles' },
    ],
    sections: [
      {
        title: 'Persistent browser identities',
        paragraphs: ['A profile is a reusable browser workspace. It keeps the data required to return to an authorized account without mixing that session with another client, brand, or project.'],
        bullets: productFacts.profiles,
        links: [{ href: '/docs/browser-profiles/', label: 'See how browser profiles work' }],
      },
      {
        title: 'Desktop, browser, and Cloud',
        paragraphs: [
          'The AliasMode desktop client manages profiles, groups, proxies, Local API requests, and profile launches. The desktop client is Apache-2.0 open source.',
          'AliasMode installs and launches CloakBrowser separately. CloakBrowser keeps its own license. AliasMode Cloud is the managed synchronization and collaboration service.',
          'The Xreacher team developed AliasMode and used it internally for months before releasing the desktop client as a free, open-source product.',
        ],
        links: [
          { href: '/docs/cloakbrowser/', label: 'Install CloakBrowser' },
          { href: '/cloud/', label: 'Explore Cloud collaboration' },
          { href: '/about/', label: 'Read the AliasMode story' },
        ],
      },
      {
        title: 'Proxy and automation support',
        paragraphs: ['Assign HTTP, HTTPS, or SOCKS5 proxy settings per profile. Start profiles through the Local API and connect Playwright to the returned CDP endpoint when a workflow needs browser automation.'],
        bullets: ['Proxy import and credential handling', 'Proxy preflight, exit, and timezone checks', 'AdsPower-shaped Local API subset', 'Playwright connection through chromium.connectOverCDP'],
        links: [
          { href: '/docs/proxies/', label: 'Configure proxies' },
          { href: '/integrations/', label: 'View automation integrations' },
        ],
      },
    ],
  },
  {
    path: '/about/',
    eyebrow: 'About AliasMode',
    headline: 'Built at Xreacher for real multi-account operations.',
    lead: 'The Xreacher team developed AliasMode for its own work, used it internally for months, and released it as a free, open-source browser profile manager.',
    primary: { href: '/product/', label: 'Explore AliasMode' },
    secondary: { href: 'https://xreacher.com/', label: 'Visit Xreacher' },
    facts: [
      { value: 'Xreacher', label: 'Development team' },
      { value: 'Months', label: 'Internal use before release' },
      { value: 'Apache-2.0', label: 'Desktop client license' },
    ],
    sections: [
      {
        title: 'Developed by the Xreacher team',
        paragraphs: ['AliasMode started as an internal Xreacher tool for managing separate browser profiles across real multi-account operations. The same team continues to develop the public product.'],
      },
      {
        title: 'Proven in our own operations',
        paragraphs: ['Before the public release, Xreacher used AliasMode internally for months. That operating history shaped its persistent profiles, proxy assignments, organization tools, Cloud handoffs, and browser automation support.'],
        links: [{ href: '/product/', label: 'See what AliasMode includes' }],
      },
      {
        title: 'Two products from one team',
        paragraphs: ['AliasMode manages browser profiles and is available as a free, open-source desktop client with optional Cloud synchronization. Xreacher is the team’s separate outreach product. Each product works independently.'],
        links: [{ href: 'https://xreacher.com/', label: 'Explore Xreacher' }],
      },
    ],
  },
  {
    path: '/local/',
    eyebrow: 'AliasMode Local',
    headline: 'Browser profiles without an AliasMode account.',
    lead: 'Local mode keeps AliasMode profile data on one computer and does not connect to AliasMode Cloud. It is the direct path for solo operators who want an account-free profile manager.',
    primary: { href: '/download/', label: 'Download for Windows' },
    secondary: { href: '/cloud/', label: 'See Cloud mode' },
    facts: [
      { value: 'No account', label: 'Start in Local mode' },
      { value: 'No Cloud traffic', label: 'From AliasMode Local' },
      { value: '127.0.0.1', label: 'Default API address' },
    ],
    sections: [
      {
        title: 'What stays Local',
        paragraphs: ['Profile records, groups, tags, browser state, and the Local working copy stay on that computer. AliasMode does not upload Local profiles to Cloud unless you explicitly choose a Cloud move.'],
        bullets: productFacts.local,
        links: [{ href: '/docs/browser-profiles/', label: 'Review profile storage' }],
      },
      {
        title: 'Network boundary',
        paragraphs: ['Local means no AliasMode account and no AliasMode Cloud connection. The browser can still contact websites, proxy servers, DNS and GeoIP services, and update sources as part of normal browsing and setup.'],
        links: [
          { href: '/security/', label: 'Review security boundaries' },
          { href: '/docs/proxies/', label: 'Configure a profile proxy' },
        ],
      },
      {
        title: 'Local automation',
        paragraphs: ['The desktop app exposes an optional loopback API at http://127.0.0.1:50400 by default. Supported routes can manage profiles and groups, control browsers, inspect cookies, clear cache, and return a CDP connection.'],
        links: [{ href: '/docs/local-api/', label: 'Open the Local API reference' }],
      },
    ],
  },
  {
    path: '/cloud/',
    eyebrow: 'AliasMode Cloud',
    headline: 'Free profile sync for teams.',
    lead: 'Move portable browser profiles between authorized devices, invite workspace members, and coordinate profile access without paying for feature tiers.',
    primary: { href: '/download/', label: 'Download and sign up free' },
    secondary: { href: '/local/', label: 'Use account-free Local' },
    facts: [
      { value: '$0', label: 'Cloud functionality' },
      { value: '1 workspace', label: 'Owner and member roles' },
      { value: 'Unlimited', label: 'Profiles' },
    ],
    sections: [
      {
        title: 'Portable profile synchronization',
        paragraphs: ['Cloud synchronizes encrypted portable-profile data and keeps a local cache for active work. Sign in on an authorized device to download the workspace state and continue from the latest accepted version.'],
        bullets: productFacts.cloud,
        links: [{ href: '/local-vs-cloud/', label: 'Compare Cloud with Local' }],
      },
      {
        title: 'Team access and devices',
        paragraphs: ['Each account has one workspace with owner and member roles. Owners can coordinate workspace access and revoke devices. Deleted profiles move through trash so teams have a clear recovery path inside the current service workflow.'],
        links: [
          { href: '/agencies/', label: 'See the agency workflow' },
          { href: '/security/', label: 'Review Cloud controls' },
        ],
      },
      {
        title: 'Conflict-aware work',
        paragraphs: ['AliasMode warns when the same profile opens concurrently, uses version checks to reject stale uploads, and retries pending uploads. These controls make handoffs visible when several operators share a workspace.'],
        links: [{ href: '/docs/troubleshooting/', label: 'Resolve synchronization issues' }],
      },
    ],
  },
  {
    path: '/agencies/',
    eyebrow: 'AliasMode for agencies',
    headline: 'Keep every client session in its own profile.',
    lead: 'Give agency operators a clear place for each authorized account, proxy, browser session, owner, and handoff. Start with free Cloud collaboration or use Local on one computer.',
    primary: { href: '/download/', label: 'Start with AliasMode free' },
    secondary: { href: '/use-cases/', label: 'Browse agency use cases' },
    facts: [
      { value: 'Unlimited', label: 'Client profiles' },
      { value: 'Free', label: 'Cloud and Local' },
      { value: 'Owner + member', label: 'Workspace roles' },
    ],
    sections: [
      {
        title: 'Separate client context',
        paragraphs: ['Create one profile for each approved account or working context. Keep cookies, session storage, extensions, user agent, screen values, and proxy settings with that profile instead of sharing one browser state across clients.'],
        bullets: ['Name profiles by client, channel, market, and owner', 'Use groups and tags for portfolios and workflow state', 'Document the assigned proxy and operator', 'Archive or delete profiles during offboarding'],
        links: [{ href: '/guides/organize-client-browser-profiles/', label: 'Build a profile naming system' }],
      },
      {
        title: 'Handoffs without shared desktops',
        paragraphs: ['Cloud lets an authorized workspace member download the current portable profile, complete work, and upload the next version. Device revocation, trash, conflict checks, and concurrent-open warnings support controlled handoffs.'],
        links: [
          { href: '/cloud/', label: 'See Cloud teamwork' },
          { href: '/use-cases/social-media-agencies/', label: 'Plan social account operations' },
        ],
      },
      {
        title: 'Plan proxies and automation',
        paragraphs: ['Assign proxies at the profile level, verify the exit location before work, and estimate the monthly IP budget. For internal tools, start a profile through the Local API and attach Playwright over CDP.'],
        links: [
          { href: '/tools/agency-proxy-budget-calculator/', label: 'Calculate a proxy budget' },
          { href: '/integrations/playwright/', label: 'Automate with Playwright' },
        ],
      },
    ],
  },
  {
    path: '/docs/',
    eyebrow: 'AliasMode documentation',
    headline: 'Set up profiles, proxies, Cloud, and automation.',
    lead: 'Use these guides to move from installation to a working browser profile, then add proxy settings, Local API control, or Playwright automation.',
    primary: { href: '/docs/getting-started/', label: 'Start the setup guide' },
    secondary: { href: '/download/', label: 'Download AliasMode' },
    children: ['/docs/getting-started/', '/docs/browser-profiles/', '/docs/proxies/', '/docs/local-api/', '/docs/playwright/', '/docs/cloakbrowser/', '/docs/troubleshooting/'],
    sections: [
      { title: 'Start with a working profile', paragraphs: ['Install the Windows desktop client and CloakBrowser. Choose Cloud or Local, create a profile, confirm its settings, and open the browser.'], links: [{ href: '/docs/getting-started/', label: 'Follow getting started' }] },
      { title: 'Configure the workflow', paragraphs: ['Learn what a profile stores, assign an HTTP, HTTPS, or SOCKS5 proxy, and organize repeatable profile groups.'], links: [{ href: '/docs/browser-profiles/', label: 'Understand browser profiles' }, { href: '/docs/proxies/', label: 'Set up proxies' }] },
      { title: 'Connect internal tools', paragraphs: ['Use the supported Local API subset for profile and browser control. Attach Playwright to a started browser over CDP.'], links: [{ href: '/docs/local-api/', label: 'Read the API reference' }, { href: '/docs/playwright/', label: 'Connect Playwright' }] },
    ],
  },
  {
    path: '/docs/getting-started/',
    eyebrow: 'Getting started',
    headline: 'Open your first AliasMode profile.',
    lead: 'Install the Windows app, add CloakBrowser, choose Cloud or Local, create a profile, and confirm the isolated browser opens with the expected settings.',
    primary: { href: '/download/', label: 'Download AliasMode' },
    secondary: { href: '/docs/troubleshooting/', label: 'Open troubleshooting' },
    lastTested: '2026-08-10',
    sections: [
      {
        title: '1. Install AliasMode',
        paragraphs: ['Download the current Windows installer from the AliasMode release page. Check the version and SHA-256 shown on the download page before running the installer. Windows may show SmartScreen guidance for the unsigned beta.'],
        links: [{ href: '/download/', label: 'Open the verified download flow' }],
      },
      {
        title: '2. Install CloakBrowser',
        paragraphs: ['AliasMode uses CloakBrowser as the browser runtime. Install it through the app when prompted. The runtime is distributed separately and keeps its own license.'],
        links: [{ href: '/docs/cloakbrowser/', label: 'Read the CloakBrowser setup' }],
      },
      {
        title: '3. Choose a mode',
        paragraphs: ['Choose Cloud to sign up with a verified email, synchronize portable profiles, and invite workspace members. Choose Local to work on one computer without an AliasMode account or Cloud connection.'],
        links: [{ href: '/local-vs-cloud/', label: 'Compare both modes' }],
      },
      {
        title: '4. Create and open a profile',
        paragraphs: ['Create a profile, give it a clear name, select browser and screen settings, and assign a proxy if the workflow needs one. Open the profile and confirm a dedicated browser window appears. Close it from AliasMode when the task ends.'],
        bullets: ['Expected result: the profile shows as active while its browser is open', 'The same profile retains cookies and session state across approved launches', 'A different profile starts from its own persistent data directory'],
        links: [{ href: '/docs/browser-profiles/', label: 'Learn what the profile stores' }],
      },
    ],
  },
  {
    path: '/docs/browser-profiles/',
    eyebrow: 'Browser profile reference',
    headline: 'A persistent workspace for each account.',
    lead: 'AliasMode profiles separate browser state and configuration so an authorized account can return to the same working context without sharing another profile’s session.',
    lastTested: '2026-08-10',
    sections: [
      { title: 'Persistent profile data', paragraphs: ['Each profile points to its own persistent user-data directory. Cookies, local storage, extension state, and other browser session data remain attached to that profile between launches.'], bullets: productFacts.profiles },
      { title: 'Configuration and identity', paragraphs: ['A profile combines the selected proxy, user agent, screen values, deterministic fingerprint seed, tags, and group metadata. Review those values before opening a profile or handing it to another operator.'], links: [{ href: '/docs/proxies/', label: 'Add a profile proxy' }] },
      { title: 'Cloud and Local copies', paragraphs: ['Local mode keeps the profile on one computer. Cloud mode maintains a local working copy and synchronizes portable-profile data with the workspace. Version checks and concurrent-open warnings help operators avoid overwriting newer work.'], links: [{ href: '/local-vs-cloud/', label: 'Choose the storage model' }, { href: '/security/', label: 'Review profile boundaries' }] },
    ],
  },
  {
    path: '/docs/proxies/',
    eyebrow: 'Proxy setup',
    headline: 'Assign and verify a proxy per profile.',
    lead: 'AliasMode supports HTTP, HTTPS, and SOCKS5 profile proxies, credential imports, preflight checks, and exit-location checks before a browser session starts.',
    lastTested: '2026-08-10',
    sections: [
      { title: 'Supported formats', paragraphs: ['Add proxy details directly or import a host, port, username, and password. AliasMode accepts host:port:user:password and URL-style inputs for supported proxy types.'], bullets: ['HTTP with or without credentials', 'HTTPS without credentials', 'SOCKS5 with or without credentials'], code: 'http://username:password@host:port\nsocks5://username:password@host:port\nhost:port:username:password' },
      { title: 'Credential relay', paragraphs: ['AliasMode uses a loopback credential relay for authenticated HTTP and SOCKS5 connections. Native unauthenticated HTTPS is supported. Authenticated HTTPS proxy entries are rejected during validation.'] },
      { title: 'Test before work', paragraphs: ['Run the proxy preflight before opening a profile. Confirm the connection, observed exit IP, and timezone or location signals match the intended workflow. Record the assignment when one profile should keep one stable proxy session.'], links: [{ href: '/guides/one-proxy-per-browser-profile/', label: 'Plan one proxy per profile' }, { href: '/guides/static-vs-rotating-proxies/', label: 'Choose a session model' }] },
    ],
  },
  {
    path: '/docs/local-api/',
    eyebrow: 'Local API reference',
    headline: 'Control AliasMode through a loopback API.',
    lead: 'The Local API exposes an AdsPower-shaped compatible subset for status, profiles, groups, browser control, cookies, cache, and CDP attachment.',
    primary: { href: '/docs/playwright/', label: 'Connect with Playwright' },
    secondary: { href: '/download/', label: 'Download AliasMode' },
    lastTested: '2026-08-10',
    facts: [{ value: '127.0.0.1:50400', label: 'Default loopback endpoint' }, { value: '13', label: 'Documented routes' }, { value: 'CDP', label: 'Browser automation connection' }],
    sections: [
      {
        title: 'Keep the API local',
        paragraphs: ['The Local API has no authentication. Keep port 50400 on the loopback interface. Never expose it to a LAN or the internet through port forwarding or a reverse proxy. A returned CDP URL grants control of the active browser profile, so do not share or publish it.'],
      },
      {
        title: 'Check API availability',
        paragraphs: ['Start the AliasMode desktop app on the same computer as your integration. Confirm one status route returns a JSON response before sending profile commands.'],
        code: 'curl http://127.0.0.1:50400/api/v1/status',
      },
      {
        title: 'Find the route you need',
        paragraphs: ['AliasMode implements only the documented subset below. Do not assume that an unlisted AdsPower API route is available.'],
        bullets: ['Status: API health and compatibility', 'Browser lifecycle: start, stop, and active state', 'Session data: cookies and browser cache', 'Groups: list and create', 'Profiles: list, create, update, and delete'],
        code: localApiEndpoints.join('\n'),
      },
      {
        title: 'Follow the request conventions',
        paragraphs: ['Responses use the JSON envelope { code, msg, data }. Treat code 0 as success. A successful HTTP response can still contain code -1 and an error message.', 'Send POST bodies as JSON. URL-encode query values. The user_id value is a profile ID from GET /api/v1/user/list. The optional launch_args value is a URL-encoded JSON array of browser arguments.'],
        code: '{"code":0,"msg":"success","data":{}}\n\nlaunch_args=["--lang=en-US"]',
      },
      {
        title: 'Discover, start, and stop a profile',
        paragraphs: ['Call GET /api/v1/user/list to find a profile ID. Set ALIASMODE_PROFILE_ID, then run the example. It checks both HTTP status and the API envelope, validates data.ws.puppeteer, connects through chromium.connectOverCDP, and stops the profile during cleanup.'],
        code: playwrightExample,
        links: [{ href: '/docs/playwright/', label: 'Follow the Playwright setup' }, { href: '/integrations/adspower-api/', label: 'Plan an AdsPower API migration' }],
      },
      {
        title: 'Handle failures and cleanup',
        paragraphs: ['If a command fails, confirm the desktop app is open, the status route responds, and the profile ID exists. Check both the HTTP status and the response code and message. Treat a missing CDP URL as a failed start.', 'Disconnect Playwright and stop the profile when automation finishes. Stop a browser before deleting its profile.'],
        links: [{ href: '/docs/troubleshooting/', label: 'Troubleshoot Local API access' }],
      },
    ],
  },
  {
    path: '/docs/playwright/',
    eyebrow: 'Playwright setup',
    headline: 'Attach Playwright to a persistent profile.',
    lead: 'Start an AliasMode browser through the Local API, read its CDP WebSocket endpoint, and connect Playwright without creating a separate temporary browser context.',
    lastTested: '2026-08-10',
    sections: [
      { title: 'Prerequisites', paragraphs: ['Install AliasMode and CloakBrowser, create a profile, enable the Local API, and add Playwright to the automation project. The profile must be available on the same computer as the script.'], bullets: ['AliasMode desktop app running', 'Local API available at 127.0.0.1:50400', 'A valid profile ID', 'Playwright installed in the Node.js project'] },
      { title: 'Start and connect', paragraphs: ['Call the browser start route with the profile ID. Read response.data.ws.puppeteer, then pass it to chromium.connectOverCDP. The attached browser uses the profile’s persistent data, proxy, cookies, and active session.'], code: playwrightExample },
      { title: 'Close cleanly', paragraphs: ['The example uses finally so it disconnects Playwright and stops the profile after success or failure. Keep one automation owner per active profile to avoid overlapping actions.'], links: [{ href: '/integrations/playwright/', label: 'Review integration fit' }, { href: '/docs/local-api/', label: 'See every supported API route' }] },
    ],
  },
  {
    path: '/docs/cloakbrowser/',
    eyebrow: 'Browser runtime',
    headline: 'Install the CloakBrowser runtime.',
    lead: 'AliasMode manages profiles and launches them in CloakBrowser. The runtime installs separately from the Apache-2.0 AliasMode desktop client and retains its own license.',
    lastTested: '2026-08-10',
    template: 'detection',
    facts: [
      { value: '0.9', label: 'reCAPTCHA v3 score (rated human)' },
      { value: 'Pass', label: 'Cloudflare Turnstile' },
      { value: 'Chrome-identical', label: 'TLS fingerprint' },
    ],
    sections: [
      { title: 'Install from AliasMode', paragraphs: ['Open AliasMode and follow the browser installation prompt. Let the app complete the runtime download and installation before creating the first browser session.'] },
      { title: 'Why the runtime matters', paragraphs: ['Websites and protection vendors check whether a browser behaves like a normal human-driven Chrome install. Out-of-the-box automation tools such as Playwright or headless Chrome fail many of these checks. CloakBrowser is patched at the browser source level, so the signals detection scripts read, from the user agent down to the TLS fingerprint, match a genuine Chrome browser. See the full test results below.'] },
      { title: 'License boundary', paragraphs: ['The AliasMode desktop client is Apache-2.0 open source. That license does not apply to CloakBrowser. AliasMode Cloud is also a managed service with a separate source and service boundary.'], links: [{ href: '/product/', label: 'Review the product architecture' }] },
      { title: 'Verify the runtime', paragraphs: ['Create a test profile and open it. A successful setup starts CloakBrowser with the profile’s persistent data directory and selected settings. If installation or launch fails, check the troubleshooting page.'], links: [{ href: '/docs/getting-started/', label: 'Open a first profile' }, { href: '/docs/troubleshooting/', label: 'Fix browser launch problems' }] },
    ],
  },
  {
    path: '/docs/troubleshooting/',
    eyebrow: 'Troubleshooting',
    headline: 'Resolve setup, proxy, API, and sync issues.',
    lead: 'Use the symptom and expected result below to isolate the failing step before changing profile data or repeating a Cloud upload.',
    lastTested: '2026-08-10',
    sections: [
      { title: 'Browser does not open', paragraphs: ['Confirm CloakBrowser finished installing and the selected profile is not already open. Restart the desktop app, then retry one profile. Keep the error text when contacting support.'], links: [{ href: '/docs/cloakbrowser/', label: 'Check CloakBrowser setup' }] },
      { title: 'Proxy preflight fails', paragraphs: ['Recheck protocol, host, port, and credentials. Authenticated HTTPS proxy entries are not accepted; use supported HTTP or SOCKS5 credentials. Test the proxy outside a production profile before continuing.'], links: [{ href: '/docs/proxies/', label: 'Review supported proxy formats' }] },
      { title: 'Local API is unavailable', paragraphs: ['Confirm the desktop app is running and the optional API is enabled. Request GET /status on 127.0.0.1:50400. If another process uses the port, resolve that conflict before retrying.'], code: 'curl http://127.0.0.1:50400/status', links: [{ href: '/docs/local-api/', label: 'Open the API reference' }] },
      { title: 'Cloud reports a conflict', paragraphs: ['Close duplicate profile sessions and use the newest workspace version. Stale uploads are rejected so an older local copy does not replace newer Cloud work. Let pending uploads retry before opening the profile elsewhere.'], links: [{ href: '/cloud/', label: 'Review Cloud conflict controls' }, { href: '/contact/', label: 'Contact product support' }] },
    ],
  },
  {
    path: '/alternatives/',
    eyebrow: 'Product comparisons',
    headline: 'Compare browser profile managers by workflow.',
    lead: 'Choose based on the operating model your team needs: open-source desktop code, account-free Local use, managed Cloud teamwork, established enterprise support, or a specific automation interface.',
    children: ['/alternatives/adspower/', '/alternatives/gologin/', '/alternatives/multilogin/', '/alternatives/dolphin-anty/'],
    sections: [
      { title: 'Comparison method', paragraphs: ['We compare public product information, official documentation, pricing pages, and current AliasMode behavior. Each competitor page records a verification date, sources, migration considerations, and cases where the competitor may fit better.'] },
      { title: 'AliasMode position', paragraphs: ['AliasMode combines a free Apache-2.0 desktop client, unlimited profiles, account-free Local mode, free Cloud synchronization, and an AdsPower-shaped Local API subset. CloakBrowser and the managed Cloud service have separate license boundaries.'], links: [{ href: '/product/', label: 'Review AliasMode product evidence' }, { href: '/pricing/', label: 'See free pricing' }] },
      { title: 'Choose on operating fit', paragraphs: ['A mature paid platform can fit teams that need its existing support organization, integrations, mobile products, or enterprise controls. AliasMode fits teams that prioritize free functionality, inspectable desktop code, Local independence, and a direct path to Cloud collaboration.'] },
    ],
  },
  {
    path: '/integrations/',
    eyebrow: 'AliasMode integrations',
    headline: 'Connect profile control and browser automation.',
    lead: 'Use the Local API for supported AdsPower-shaped operations, then attach Playwright over CDP to automate the persistent browser session.',
    children: ['/integrations/adspower-api/', '/integrations/playwright/', '/integrations/import/'],
    sections: [
      { title: 'AdsPower-compatible subset', paragraphs: ['Keep supported profile, group, browser-control, cookie, cache, and CDP workflows while moving them to a loopback AliasMode endpoint.'], links: [{ href: '/integrations/adspower-api/', label: 'Review the migration path' }] },
      { title: 'Playwright over CDP', paragraphs: ['Start a selected AliasMode profile through the Local API and connect Playwright to response.data.ws.puppeteer. The automation works in the same persistent session an operator can open manually.'], links: [{ href: '/integrations/playwright/', label: 'See Playwright integration' }] },
      { title: 'Bulk profile import', paragraphs: ['Moving from AdsPower, GoLogin, Multilogin, or Dolphin Anty? Export the profiles to a text file and import them all into AliasMode in one step.'], links: [{ href: '/integrations/import/', label: 'Import profiles in one step' }] },
      { title: 'Local by default', paragraphs: ['The API listens on 127.0.0.1:50400 by default. Keep it on loopback and treat CDP endpoints as operational access to the active profile.'], links: [{ href: '/docs/local-api/', label: 'Read the API reference' }] },
    ],
  },
  {
    path: '/integrations/adspower-api/',
    eyebrow: 'AdsPower API integration',
    headline: 'Move supported local API workflows to AliasMode.',
    lead: 'AliasMode uses AdsPower-shaped routes for a defined subset of profile, group, browser-control, cookie, cache, and CDP operations.',
    primary: { href: '/download/', label: 'Download AliasMode free' },
    secondary: { href: '/docs/local-api/', label: 'Open the endpoint reference' },
    lastTested: '2026-08-10',
    sections: [
      { title: 'Support level', paragraphs: ['Compatibility covers the documented AliasMode routes. Point a migration adapter at http://127.0.0.1:50400 and test each operation the existing tool uses.'], bullets: localApiEndpoints },
      { title: 'Migration sequence', paragraphs: ['List the current API calls, map profile identifiers and groups, create a test profile, then verify browser start, CDP connection, stop, update, and deletion in a non-production workflow.'], bullets: ['Inventory endpoint and response dependencies', 'Map user_id values to AliasMode profiles', 'Test status and browser lifecycle', 'Confirm cookie and cache behavior', 'Move profile creation and update last'] },
      { title: 'Browser automation response', paragraphs: ['The start response includes data.ws.puppeteer and a debug port. Existing automation can use the returned CDP endpoint where it already supports a Puppeteer or Playwright connection.'], code: playwrightExample, links: [{ href: '/alternatives/adspower/', label: 'Compare AliasMode and AdsPower' }, { href: '/docs/playwright/', label: 'Connect Playwright' }] },
    ],
  },
  {
    path: '/integrations/import/',
    eyebrow: 'Profile import',
    headline: 'Move every profile to AliasMode in one step.',
    lead: 'Switching from AdsPower or another antidetect browser? Export the profiles from the current tool as a text file, then import the whole list into AliasMode at once. No profile-by-profile rebuild.',
    primary: { href: '/download/', label: 'Download AliasMode free' },
    secondary: { href: '/alternatives/', label: 'Compare antidetect browsers' },
    lastTested: '2026-08-10',
    facts: [
      { value: 'One step', label: 'Import the full list at once' },
      { value: '.txt', label: 'Standard export format' },
      { value: 'Free', label: 'Unlimited imported profiles' },
    ],
    sections: [
      { title: 'Export from the current tool', paragraphs: ['AdsPower, GoLogin, Multilogin, Dolphin Anty, and similar tools can export the profile list as a text file. Use the standard export option in that product and save the file locally. Include every profile the team still needs; there is no per-profile fee on the AliasMode side.'] },
      { title: 'Import into AliasMode', paragraphs: ['Open AliasMode, choose the import option, and select the exported file. AliasMode reads the list and creates a browser profile for each row in one pass, keeping names, proxy settings, and other exported fields mapped to the new profiles.'], links: [{ href: '/docs/browser-profiles/', label: 'See what a profile stores' }] },
      { title: 'Verify before retiring the old setup', paragraphs: ['Open a sample of imported profiles, confirm the proxy and session details look right, and sign in where the exported session did not carry over. Keep the old tool installed until every active account works from AliasMode.'], links: [{ href: '/docs/getting-started/', label: 'Open the setup guide' }, { href: '/docs/troubleshooting/', label: 'Fix import or launch issues' }] },
      { title: 'Moving API workflows too', paragraphs: ['Teams that also automate the old tool through its local API can point supported AdsPower-shaped routes at the AliasMode Local API and attach Playwright over CDP.'], links: [{ href: '/integrations/adspower-api/', label: 'Review API compatibility' }, { href: '/integrations/playwright/', label: 'Connect Playwright' }] },
    ],
  },
  {
    path: '/integrations/playwright/',
    eyebrow: 'Playwright integration',
    headline: 'Automate the same persistent profile your team uses.',
    lead: 'AliasMode starts a configured browser profile and returns a CDP WebSocket URL. Playwright attaches to that active profile with its stored session, proxy, and settings.',
    primary: { href: '/docs/playwright/', label: 'Follow the setup' },
    secondary: { href: '/docs/local-api/', label: 'Read the Local API' },
    lastTested: '2026-08-10',
    sections: [
      { title: 'Where the integration fits', paragraphs: ['Use this connection for internal QA, approved account operations, repeatable browser checks, and workflows that need a persistent signed-in profile rather than a new temporary context.'] },
      { title: 'Connection flow', paragraphs: ['Enable the Local API, start a profile with user_id, read data.ws.puppeteer, and call chromium.connectOverCDP. Keep the AliasMode desktop app running while the profile is active.'], code: playwrightExample },
      { title: 'Operational ownership', paragraphs: ['Give one operator or automation job ownership of an active profile. Close Playwright and stop the browser after the task so the profile can synchronize or move cleanly to another authorized device.'], links: [{ href: '/docs/playwright/', label: 'Read the complete steps' }, { href: '/agencies/', label: 'Plan team handoffs' }] },
    ],
  },
  {
    path: '/use-cases/',
    eyebrow: 'Agency workflows',
    headline: 'Choose a repeatable multi-account workflow.',
    lead: 'Start from the account operations your team already performs, then define profile ownership, proxy assignment, handoff, and offboarding.',
    children: ['/use-cases/social-media-agencies/', '/use-cases/outreach-agencies/', '/use-cases/ai-agents/'],
    sections: [
      { title: 'Social media operations', paragraphs: ['Separate authorized client sessions and keep each brand’s profile, proxy, cookies, and working owner clear.'], links: [{ href: '/use-cases/social-media-agencies/', label: 'Open the social agency workflow' }] },
      { title: 'Outreach operations', paragraphs: ['Organize client outreach profiles and handoffs, then connect a separate outreach product only where that campaign workflow needs it.'], links: [{ href: '/use-cases/outreach-agencies/', label: 'Open the outreach agency workflow' }] },
      { title: 'AI browser agents', paragraphs: ['Connect AI agents to profiles over Playwright CDP. CloakBrowser passes the bot checks that block stock automated browsers.'], links: [{ href: '/use-cases/ai-agents/', label: 'Run agents without bot walls' }] },
      { title: 'Shared agency foundation', paragraphs: ['Both workflows benefit from consistent names, one documented owner, a recorded proxy assignment, and a clear archive or deletion step when client access ends.'], links: [{ href: '/guides/organize-client-browser-profiles/', label: 'Create the operating standard' }] },
    ],
  },
  {
    path: '/use-cases/social-media-agencies/',
    eyebrow: 'Social media agencies',
    headline: 'Separate every authorized client social session.',
    lead: 'Give each client account a persistent browser profile, a documented proxy, an assigned operator, and a clear Cloud handoff path.',
    primary: { href: '/download/', label: 'Start free' },
    secondary: { href: '/agencies/', label: 'See AliasMode for agencies' },
    sections: [
      { title: 'Build the client map', paragraphs: ['Create profiles from an approved client inventory. Use a stable naming pattern with the client, channel, market, account purpose, and current owner.'], bullets: ['Client and brand', 'Platform or channel', 'Market or location', 'Assigned proxy', 'Primary and backup operator'], links: [{ href: '/guides/organize-client-browser-profiles/', label: 'Use the organization guide' }] },
      { title: 'Keep sessions separated', paragraphs: ['Open one client account in its assigned profile. The profile keeps cookies, storage, extensions, user agent, screen values, and proxy settings separate from another client’s browser state.'], links: [{ href: '/docs/browser-profiles/', label: 'Understand profile separation' }] },
      { title: 'Hand off and offboard', paragraphs: ['Close the browser before handoff, let Cloud upload the current version, and tell the next operator when ownership changes. Revoke devices and archive or delete profiles when access ends.'], links: [{ href: '/cloud/', label: 'Review Cloud teamwork' }, { href: '/security/', label: 'Review access controls' }] },
    ],
  },
  {
    path: '/use-cases/outreach-agencies/',
    eyebrow: 'Outreach agencies',
    headline: 'Organize profiles before campaigns scale.',
    lead: 'Keep each authorized outreach account in a named browser profile with a stable proxy assignment, clear owner, repeatable handoff, and documented offboarding step.',
    primary: { href: '/download/', label: 'Start with AliasMode free' },
    secondary: { href: 'https://xreacher.com/', label: 'Explore Xreacher separately' },
    sections: [
      { title: 'Create an account workspace', paragraphs: ['Map each approved sending or research account to an AliasMode profile. Add the client, channel, market, proxy, campaign owner, and current status to the name, group, or tags.'], links: [{ href: '/guides/organize-client-browser-profiles/', label: 'Build the naming system' }] },
      { title: 'Assign the network path', paragraphs: ['Use the proxy configuration selected for that account and verify the exit before work. Keep the assignment stable for a persistent profile unless the operating plan calls for a controlled change.'], links: [{ href: '/docs/proxies/', label: 'Configure and test proxies' }, { href: '/tools/agency-proxy-budget-calculator/', label: 'Estimate proxy cost' }] },
      { title: 'Connect campaign work deliberately', paragraphs: ['AliasMode manages browser profiles. Xreacher is a separate outreach product from the same team. Use it when the campaign needs an outreach workflow; it is not required to use AliasMode.'], links: [{ href: 'https://xreacher.com/', label: 'Visit Xreacher' }] },
    ],
  },
  {
    path: '/use-cases/ai-agents/',
    eyebrow: 'AI agents',
    headline: 'Run AI browser agents that pass bot detection.',
    lead: 'Connect an AI agent to an AliasMode profile over Playwright CDP. Because every profile opens in CloakBrowser, the agent browses with the signals of a normal human-driven Chrome browser instead of getting stopped by bot checks.',
    primary: { href: '/download/', label: 'Download AliasMode free' },
    secondary: { href: '/docs/playwright/', label: 'Connect an agent over CDP' },
    template: 'detection',
    facts: [
      { value: 'CDP', label: 'Standard agent connection' },
      { value: '0.9', label: 'reCAPTCHA v3 score (rated human)' },
      { value: 'Local', label: 'No cloud browser vendor required' },
    ],
    sections: [
      { title: 'Connect the agent', paragraphs: ['Start a profile through the Local API, then connect the agent framework to the returned Chrome DevTools Protocol endpoint. Any framework that speaks CDP, including Playwright-based agents, browser-use, or custom loops, can drive the opened profile.'], links: [{ href: '/docs/playwright/', label: 'Follow the Playwright connection' }, { href: '/docs/local-api/', label: 'Read the Local API reference' }] },
      { title: 'Why agents get blocked elsewhere', paragraphs: ['Most agents run on stock Playwright or headless Chrome, which detection services flag quickly: reCAPTCHA v3 scores them as bots, Turnstile fails, and the TLS fingerprint does not match a real browser. CloakBrowser is patched at the browser source level, so the checks below pass.'], links: [{ href: '/docs/cloakbrowser/', label: 'Read about the runtime' }] },
      { title: 'Keep agent work authorized', paragraphs: ['Point agents only at sites and accounts you are authorized to access, respect each service’s terms, and keep one agent per active profile. The AliasMode acceptable use policy applies to automated sessions too.'], links: [{ href: '/acceptable-use/', label: 'Review acceptable use' }, { href: '/docs/browser-profiles/', label: 'Set up profiles' }] },
    ],
  },
  {
    path: '/guides/',
    eyebrow: 'Workflow guides',
    headline: 'Run browser profiles with a clear operating system.',
    lead: 'Use these guides to organize client profiles, choose proxy session behavior, and estimate the resources an agency workflow needs.',
    children: ['/guides/one-proxy-per-browser-profile/', '/guides/static-vs-rotating-proxies/', '/guides/organize-client-browser-profiles/'],
    sections: [
      { title: 'Profile organization', paragraphs: ['Define names, groups, owners, handoffs, and offboarding before a profile list grows.'], links: [{ href: '/guides/organize-client-browser-profiles/', label: 'Organize client profiles' }] },
      { title: 'Proxy assignment', paragraphs: ['Understand when one profile should retain one stable proxy identity and how to document that mapping.'], links: [{ href: '/guides/one-proxy-per-browser-profile/', label: 'Plan profile-to-proxy assignments' }] },
      { title: 'Proxy session model', paragraphs: ['Compare static, sticky rotating, and per-request rotating sessions by the work each supports.'], links: [{ href: '/guides/static-vs-rotating-proxies/', label: 'Compare static and rotating proxies' }] },
    ],
  },
  {
    path: '/guides/one-proxy-per-browser-profile/',
    eyebrow: 'Proxy assignment guide',
    headline: 'Map persistent profiles to stable proxy sessions.',
    lead: 'A one-profile-to-one-proxy rule gives operators a simple ownership map for recurring account work. Document the assignment and verify it before each sensitive session.',
    sections: [
      { title: 'Start from the profile inventory', paragraphs: ['Count active profiles that need simultaneous or recurring proxy access. Record the account purpose, market, profile owner, selected proxy type, and replacement history.'] },
      { title: 'Create the assignment', paragraphs: ['Add the proxy to the profile, run the preflight, and record the observed exit IP. Use a static IP or a provider’s sticky session when the workflow expects continuity.'], bullets: ['Profile ID and name', 'Proxy protocol and provider', 'Expected country or region', 'Observed exit IP', 'Assignment and review date'], links: [{ href: '/docs/proxies/', label: 'Configure the proxy in AliasMode' }] },
      { title: 'Plan capacity and replacement', paragraphs: ['Reserve enough active proxies for concurrent profiles and expected replacements. Change one assignment at a time, verify the new exit, and update the operating record.'], links: [{ href: '/tools/agency-proxy-budget-calculator/', label: 'Calculate proxy count and cost' }, { href: '/guides/static-vs-rotating-proxies/', label: 'Choose the session type' }] },
    ],
  },
  {
    path: '/guides/static-vs-rotating-proxies/',
    eyebrow: 'Proxy strategy guide',
    headline: 'Choose the session model that matches the task.',
    lead: 'Static, sticky rotating, and per-request rotating proxies solve different problems. Persistent account profiles usually value continuity; collection workflows can value frequent rotation.',
    sections: [
      { title: 'Static and dedicated sessions', paragraphs: ['A static proxy keeps the same exit IP until the provider or operator changes it. It fits recurring profile work where the team wants a simple, documented account-to-IP map.'] },
      { title: 'Sticky rotating sessions', paragraphs: ['A rotating network can hold one exit for a provider-defined session window. This can support shorter persistent tasks when the session duration and replacement behavior are clear.'] },
      { title: 'Per-request rotation', paragraphs: ['A new exit on each request fits some research or collection jobs. It is a weaker match for a browser profile that must return to one account context over time.'], links: [{ href: '/guides/one-proxy-per-browser-profile/', label: 'Plan persistent assignments' }] },
      { title: 'Decision checklist', paragraphs: ['Ask how long the identity must persist, whether operators work concurrently, what locations matter, how replacements work, and how cost scales per usable IP. Test the selected plan with the actual workflow.'], links: [{ href: '/blog/static-residential-proxies-browser-profiles/', label: 'Compare provider options' }, { href: '/tools/agency-proxy-budget-calculator/', label: 'Estimate the monthly budget' }] },
    ],
  },
  {
    path: '/guides/organize-client-browser-profiles/',
    eyebrow: 'Agency operations guide',
    headline: 'Give every client profile a name, owner, and lifecycle.',
    lead: 'A consistent profile system reduces accidental crossover and makes handoffs easier to audit as an agency adds clients, channels, operators, and proxies.',
    sections: [
      { title: 'Use one naming pattern', paragraphs: ['Choose fields operators can scan without opening the profile. Keep the sequence stable across teams and document the allowed status values.'], code: 'CLIENT · CHANNEL · MARKET · ACCOUNT · OWNER · STATUS', bullets: ['Acme · Social · US · Brand A · Dana · Active', 'Northstar · Outreach · UK · Research 02 · Lee · Review'] },
      { title: 'Group by client, tag by work', paragraphs: ['Use groups for durable client or portfolio boundaries. Use tags for workflow state, market, channel, proxy type, review date, or temporary assignments.'] },
      { title: 'Record ownership and handoff', paragraphs: ['One operator owns the active session. Close the browser, synchronize the current version, and record the next owner before another operator opens it.'], links: [{ href: '/cloud/', label: 'Use Cloud for team handoffs' }] },
      { title: 'Offboard completely', paragraphs: ['Remove workspace access, revoke devices when needed, export required client records through the approved process, then archive or delete the profile according to the engagement policy.'], links: [{ href: '/agencies/', label: 'Return to the agency workflow' }, { href: '/security/', label: 'Review device and profile controls' }] },
    ],
  },
  {
    path: '/tools/',
    eyebrow: 'Free planning tools',
    headline: 'Estimate the resources behind your profile workflow.',
    lead: 'Start with the agency proxy budget calculator, then use the proxy guides and configuration documentation to build the operating plan.',
    children: ['/tools/agency-proxy-budget-calculator/'],
    sections: [
      { title: 'Agency proxy budget calculator', paragraphs: ['Enter profile count, profiles per proxy, and monthly proxy price. The tool calculates required proxies and estimated monthly cost in the browser.'], links: [{ href: '/tools/agency-proxy-budget-calculator/', label: 'Open the calculator' }] },
      { title: 'Turn the estimate into a plan', paragraphs: ['Decide which profiles run concurrently, which need a stable IP, and what replacement capacity the provider includes.'], links: [{ href: '/guides/one-proxy-per-browser-profile/', label: 'Plan assignments' }, { href: '/docs/proxies/', label: 'Configure AliasMode' }] },
    ],
  },
  {
    path: '/tools/agency-proxy-budget-calculator/',
    eyebrow: 'Free agency calculator',
    headline: 'Estimate proxy count and monthly cost.',
    lead: 'Model a one-proxy-per-profile plan or share each proxy across a chosen number of profiles. The calculation runs in your browser and sends no input data.',
    template: 'calculator',
    sections: [
      { title: 'How the calculation works', paragraphs: ['Required proxies equal profile count divided by profiles per proxy, rounded up. Monthly cost equals required proxies multiplied by the monthly cost per proxy.'] },
      { title: 'Use the result', paragraphs: ['Compare the estimate with the provider’s minimum order, bandwidth, concurrency, session persistence, and replacement terms. Add operational reserve only when the real plan requires it.'], links: [{ href: '/guides/one-proxy-per-browser-profile/', label: 'Plan profile assignments' }, { href: '/blog/static-residential-proxies-browser-profiles/', label: 'Review provider criteria' }] },
    ],
  },
  {
    path: '/blog/',
    eyebrow: 'Maintained research',
    headline: 'Research for browser-profile operating decisions.',
    lead: 'AliasMode research pages publish their method and source dates so agencies can compare proxy and workflow options.',
    children: ['/blog/static-residential-proxies-browser-profiles/'],
    sections: [
      { title: 'Static residential proxies', paragraphs: ['Compare public plan details against a consistent set of criteria for persistent browser profiles.'], links: [{ href: '/blog/static-residential-proxies-browser-profiles/', label: 'Open the provider comparison' }] },
      { title: 'Supporting guides', paragraphs: ['Use the provider shortlist with the static-versus-rotating guide, AliasMode proxy setup, and the agency calculator.'], links: [{ href: '/guides/static-vs-rotating-proxies/', label: 'Choose a proxy session model' }, { href: '/tools/agency-proxy-budget-calculator/', label: 'Estimate monthly cost' }] },
    ],
  },
  {
    path: '/blog/static-residential-proxies-browser-profiles/',
    eyebrow: 'Proxy provider research',
    headline: 'Static residential proxies for persistent profiles.',
    lead: 'Compare public provider information using the same session, targeting, protocol, commitment, replacement, and pricing criteria.',
    template: 'providers',
    lastTested: '2026-08-10',
    sections: [
      { title: 'Published method', paragraphs: ['We record whether a provider offers static or sticky residential sessions, dedicated or shared IPs, location targeting, HTTP/HTTPS/SOCKS5, authentication, bandwidth and concurrency terms, minimum commitment, and replacement policy.'] },
      { title: 'How to choose', paragraphs: ['Start with the required country or region, session lifetime, simultaneous profile count, authentication support, and monthly commitment. Calculate cost per usable persistent IP rather than comparing only a headline price.'] },
    ],
  },
];

export const getSeoPage = (path: string) => seoPages.find((page) => page.path === path);
