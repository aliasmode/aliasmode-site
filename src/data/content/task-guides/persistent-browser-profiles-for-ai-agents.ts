import type { TaskGuidePage } from '../types.ts';

export const persistentBrowserProfilesForAiAgentsTaskGuide: TaskGuidePage = {
  path: "/guides/persistent-browser-profiles-for-ai-agents/",
  family: "task-guide",
  label: "AI agent profiles",
  title: "Persistent Browser Profiles for AI Agents",
  description: "Give AI agents a reusable browser identity: AliasMode profiles keep logins, cookies, and site state across every scheduled or interactive agent run.",
  h1: "Give each AI agent a persistent, reusable browser identity.",
  eyebrow: "AI agent browser guide",
  lead: "Agents that log in fresh every run fight captchas and lose state. A persistent profile is the agent's memory: logins, cookies, and site state survive between runs.",
  directAnswer: "Create one AliasMode profile per agent identity, log in once, and start the profile through the Local API at 127.0.0.1:50400 whenever the agent runs, connecting over CDP.",
  audience: "agents",
  intent: "procedural",
  intentKey: "guide:persistent-browser-profiles-for-ai-agents",
  topicCluster: "ai-agents",
  parent: "/guides/",
  related: ["/use-cases/ai-agents/", "/docs/local-api/", "/integrations/playwright/", "/best-antidetect-browsers-for-ai-agents/"],
  publishedOn: '2026-09-01',
  modifiedOn: '2026-09-01',
  verifiedOn: '2026-09-01',
  outcome: "An agent whose browser is a durable resource: one identity, saved logins, and repeatable start-and-connect runs through the Local API.",
  prerequisites: [
    "AliasMode installed on Windows (drive it remotely from macOS/Linux via Remote MCP or the Local API on a reachable host)",
    "A Playwright or Puppeteer project in your agent stack",
    "One AliasMode profile per agent, with a named login per site it works on",
    "Local API reachable at 127.0.0.1:50400 on the host",
  ],
  steps: [
    { title: "Create one profile per agent", body: "Name profiles after agents, not tasks: agent·researcher, agent·poster. Tasks change weekly; the identity should not. Keep the generated fingerprint seed fixed." },
    { title: "Seed the logins once", body: "Launch the profile by hand, log into the sites the agent needs, and close it. From now on the agent inherits those sessions on every run." },
    { title: "List profiles from the API", body: "Have your agent tooling discover profile IDs instead of hardcoding them.", code: "curl 'http://127.0.0.1:50400/api/v1/user/list'" },
    { title: "Start the profile for a run", body: "Start the browser for the run and read the CDP endpoint from the response.", code: "const res = await fetch('http://127.0.0.1:50400/api/v1/browser/start?user_id=' + profileId);\nconst { data } = await res.json();\nconst cdp = data.ws.puppeteer; // chromium.connectOverCDP(cdp)" },
    { title: "Connect the agent over CDP", body: "Connect Playwright or Puppeteer to the running profile. Everything the agent does lands in the same persistent session.", code: "const browser = await chromium.connectOverCDP(cdp);\nconst context = browser.contexts()[0];\n// agent drives page work inside the logged-in profile" },
    { title: "Stop the browser cleanly", body: "End every run by stopping the profile so state syncs and the next run starts from a clean launch, not a zombie browser.", code: "await browser.close();\nawait fetch('http://127.0.0.1:50400/api/v1/browser/stop?user_id=' + profileId);" },
    { title: "Assign one agent per profile", body: "Two agents sharing one profile fight over the same sessions and cookies. One identity per agent keeps runs deterministic and logs attributable." },
    { title: "Handle re-auth gracefully", body: "When a site invalidates the session, the agent should detect the login page, stop, and alert a human — seeding logins stays a supervised step." },
  ],
  verification: ["A run connects over CDP and lands on a logged-in page without a fresh login flow.", "Stopping and restarting the profile preserves cookies and site state.", "The Local API list matches the agent-to-profile assignment you documented.", "No run leaves a browser process behind after stop."],
  cautions: ["Agents must respect each site's terms, rate limits, and robots rules; a persistent login makes automation visible and attributable.", "Do not point agents at accounts whose loss would hurt you; use dedicated accounts with minimal privileges.", "Parallel runs on one profile corrupt session state — serialize runs per profile."],
  aliasModeWorkflow: [
    { title: "Profiles as agent identities", body: "One profile per agent, grouped by project, with tags for the sites each agent may touch." },
    { title: "Local API as the control plane", body: "Start, stop, and list profiles over HTTP on the loopback — the AdsPower-shaped API your orchestration already expects." },
    { title: "MCP for agent clients", body: "Claude Code, Codex, OpenClaw, and Hermes drive AliasMode through MCP; local stdio on Windows, Remote MCP for remote agents." },
  ],
  sections: [
    { id: "agent-run-loop", title: "The agent run loop", blocks: [
      { type: 'steps', items: [{ title: "Resolve the profile", body: "GET /api/v1/user/list returns profile IDs; pick the agent's own." }, { title: "Start", body: "GET /api/v1/browser/start?user_id=... returns the CDP websocket." }, { title: "Connect and work", body: "chromium.connectOverCDP(cdp) and run the agent's page work." }, { title: "Stop", body: "Close the connection, then GET /api/v1/browser/stop?user_id=... — every time." }] },
    ]},
    { id: "agent-state-notes", title: "Agent state notes", blocks: [
      { type: 'table', caption: "What persists in an agent profile", columns: ["State", "Lives in", "Survives a run?"], rows: [
        ["Logins and cookies", "Profile user-data directory", "Yes, across runs"],
        ["Fingerprint", "Deterministic seed in the profile", "Yes, forever until changed"],
        ["Proxy identity", "Profile proxy settings", "Yes, preflighted per run"],
        ["In-page state (carts, drafts)", "Site-side, tied to the session", "Yes, while the session is valid"],
      ] },
    ]},
    { id: "agent-faq", title: "AI agent FAQ", blocks: [
      { type: 'faq', items: [{ question: "Why not just launch Chromium with a user-data dir myself?", answer: "You can, but you lose managed fingerprints, proxy preflight, Cloud sync, and the Local API contract. AliasMode packages that into one profile object." }, { question: "Can two agents run at the same time?", answer: "Yes — on different profiles. Each profile is one identity with one session; concurrency happens across profiles." }, { question: "How does this work from macOS or Linux?", answer: "The dashboard is Windows-native today. Run AliasMode on a Windows host and drive it through Remote MCP or the Local API from other platforms." }] },
    ]},
    { id: "sources-and-verification", title: "Sources and verification", blocks: [
      { type: 'sources' },
    ]},
  ],
  evidence: [
    { id: "pw-cdp", source: "Playwright", title: "Browser.connectOverCDP API reference", url: "https://playwright.dev/docs/api/class-browser", checkedOn: "2026-09-01" },
    { id: "cdp", source: "Chrome DevTools Protocol", title: "DevTools Protocol documentation", url: "https://chromedevtools.github.io/devtools-protocol/", checkedOn: "2026-09-01" },
    { id: "mcp", source: "Model Context Protocol", title: "MCP specification and concepts", url: "https://modelcontextprotocol.io/", checkedOn: "2026-09-01" },
  ],
};
