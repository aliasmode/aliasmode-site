export interface ComparisonRow {
  criterion: string;
  aliasMode: string;
  competitor: string;
  source?: string;
}

export interface CompetitorComparison {
  path: string;
  name: string;
  eyebrow: string;
  headline: string;
  lead: string;
  verified: string;
  directAnswer: string;
  rows: ComparisonRow[];
  migration: string[];
  competitorFits: string[];
  aliasModeFits: string[];
  sources: { label: string; href: string }[];
}

const commonAlias = {
  price: 'Cloud and Local are free with unlimited profiles. Paid service is support only.',
  source: 'Desktop client is Apache-2.0 open source. CloakBrowser and managed Cloud are separate.',
  local: 'Local mode needs no AliasMode account and sends no traffic to AliasMode Cloud.',
  team: 'Free Cloud sync with one workspace, owner/member roles, device revocation, and trash.',
  automation: 'AdsPower-shaped Local API subset and Playwright attachment over CDP.',
};

export const comparisons: CompetitorComparison[] = [
  {
    path: '/alternatives/adspower/',
    name: 'AdsPower',
    eyebrow: 'AdsPower alternative',
    headline: 'AliasMode or AdsPower: choose by operating model.',
    lead: 'AliasMode leads with unlimited free profiles, open-source desktop code, account-free Local use, and free Cloud teamwork. AdsPower is an established commercial platform with a broader documented product and service footprint.',
    verified: '2026-08-10',
    directAnswer: 'Choose AliasMode when free unlimited profiles, inspectable desktop code, or a no-account Local workflow is central. Choose AdsPower when its established support operation, complete documented API, automation products, or existing team controls match a required workflow.',
    rows: [
      { criterion: 'Free use', aliasMode: commonAlias.price, competitor: 'Official pricing documented two free profiles at the verification date, followed by paid plans.', source: 'https://www.adspower.com/pricing' },
      { criterion: 'Source availability', aliasMode: commonAlias.source, competitor: 'No open-source license for the core desktop product was linked from the reviewed official product material.', source: 'https://www.adspower.com/' },
      { criterion: 'Local workflow', aliasMode: commonAlias.local, competitor: 'AdsPower describes profile data as local by default and offers optional synchronization. Product use follows its account and commercial platform model.', source: 'https://www.adspower.com/account-security' },
      { criterion: 'Cloud and teams', aliasMode: commonAlias.team, competitor: 'Official material documents synchronization, profile sharing, permissions, and team features across commercial plans.', source: 'https://help.adspower.com/docs/Profile_Sharing' },
      { criterion: 'API and automation', aliasMode: commonAlias.automation, competitor: 'AdsPower publishes a broader Local API and built-in automation documentation.', source: 'https://help.adspower.com/docs/api' },
      { criterion: 'Migration', aliasMode: 'Supported API-shaped workflows can be mapped route by route. Profile archive migration is not presented as automatic.', competitor: 'AdsPower publishes a workflow for transferring profiles from other antidetect browsers.', source: 'https://help.adspower.com/docs/transfer_profiles_to_adspower_from_another_antidetect' },
    ],
    migration: ['Inventory every AdsPower API route the current tool calls.', 'Map only routes listed in the AliasMode Local API reference.', 'Create test groups and profiles before moving production identifiers.', 'Verify browser start, CDP attachment, cookies, cache, update, stop, and deletion.', 'Move one workflow at a time and keep the original data until validation is complete.'],
    competitorFits: ['The workflow depends on AdsPower endpoints outside the AliasMode subset.', 'The team wants an established paid support and account-management operation.', 'Built-in automation or current AdsPower sharing behavior is already a hard requirement.'],
    aliasModeFits: ['The team wants unlimited free profiles.', 'Operators need a no-account Local option.', 'Inspecting and contributing to the desktop client matters.', 'The required automation fits the documented Local API subset or Playwright CDP.'],
    sources: [
      { label: 'AdsPower homepage', href: 'https://www.adspower.com/' },
      { label: 'AdsPower pricing', href: 'https://www.adspower.com/pricing' },
      { label: 'AdsPower API documentation', href: 'https://help.adspower.com/docs/api' },
      { label: 'AdsPower account security', href: 'https://www.adspower.com/account-security' },
      { label: 'AdsPower profile sharing', href: 'https://help.adspower.com/docs/Profile_Sharing' },
    ],
  },
  {
    path: '/alternatives/gologin/',
    name: 'GoLogin',
    eyebrow: 'GoLogin alternative',
    headline: 'AliasMode or GoLogin: free Local control or a mature hosted platform.',
    lead: 'AliasMode combines open-source desktop code, no-account Local mode, unlimited free profiles, and free Cloud collaboration. GoLogin offers an established commercial service, cloud-browser workflows, SDKs, and broad public documentation.',
    verified: '2026-08-10',
    directAnswer: 'Choose AliasMode for free unlimited profiles, an inspectable desktop client, or use without an AliasMode account. Choose GoLogin when its Cloud Browser, supported SDKs, established service, or current cross-device product workflow is required.',
    rows: [
      { criterion: 'Free use', aliasMode: commonAlias.price, competitor: 'GoLogin publishes free access and trial options alongside paid profile and team plans. Confirm current checkout terms before purchase.', source: 'https://gologin.com/pricing/' },
      { criterion: 'Source availability', aliasMode: commonAlias.source, competitor: 'GoLogin publishes SDK repositories. No open-source license for the complete core desktop product was linked in reviewed official material.', source: 'https://github.com/gologinapp' },
      { criterion: 'Local workflow', aliasMode: commonAlias.local, competitor: 'GoLogin centers an account-backed service with profile synchronization and Cloud Browser options.', source: 'https://gologin.com/docs/browser-profiles/profile-management/profile-synchronization' },
      { criterion: 'Cloud and teams', aliasMode: commonAlias.team, competitor: 'Official pricing and documentation describe synchronized profiles, team workspaces, sharing, and cloud execution options.', source: 'https://gologin.com/pricing/' },
      { criterion: 'API and automation', aliasMode: commonAlias.automation, competitor: 'GoLogin publishes APIs and maintained SDKs for browser-profile automation.', source: 'https://gologin.com/docs/api-reference/introduction/quickstart' },
      { criterion: 'Profile transfer', aliasMode: 'AliasMode documents profile creation and API workflows rather than a one-click GoLogin archive import.', competitor: 'GoLogin publishes profile import and export documentation.', source: 'https://gologin.com/docs/profile-export-and-import' },
    ],
    migration: ['List the profile fields, cookies, extensions, proxy details, and automation hooks in use.', 'Create equivalent AliasMode profile records and proxy assignments.', 'Re-establish approved account sessions through the normal sign-in process.', 'Replace SDK-specific calls with documented AliasMode Local API and CDP calls.', 'Verify one complete operator workflow before expanding the migration.'],
    competitorFits: ['Cloud Browser execution is required.', 'Existing applications depend on GoLogin SDK behavior.', 'The team prefers an established commercial product and current GoLogin service model.'],
    aliasModeFits: ['Unlimited free profiles matter.', 'The operator wants Local mode without an AliasMode account.', 'Open-source desktop code is a selection requirement.', 'Playwright over a local CDP endpoint covers the automation need.'],
    sources: [
      { label: 'GoLogin homepage', href: 'https://gologin.com/' },
      { label: 'GoLogin pricing', href: 'https://gologin.com/pricing/' },
      { label: 'GoLogin synchronization', href: 'https://gologin.com/docs/browser-profiles/profile-management/profile-synchronization' },
      { label: 'GoLogin API quickstart', href: 'https://gologin.com/docs/api-reference/introduction/quickstart' },
      { label: 'GoLogin GitHub organization', href: 'https://github.com/gologinapp' },
    ],
  },
  {
    path: '/alternatives/multilogin/',
    name: 'Multilogin',
    eyebrow: 'Multilogin alternative',
    headline: 'AliasMode or Multilogin: free profiles or a larger commercial platform.',
    lead: 'AliasMode focuses on free Cloud and Local browser profiles with an open-source desktop client. Multilogin packages browser profiles, team seats, automation, proxy traffic, and cloud-phone capacity in a commercial platform.',
    verified: '2026-08-10',
    directAnswer: 'Choose AliasMode when the goal is unlimited free browser profiles, account-free Local use, and open-source desktop code. Choose Multilogin when its commercial support, hosted Android environments, included proxy traffic, or broader platform bundle is a requirement.',
    rows: [
      { criterion: 'Free use', aliasMode: commonAlias.price, competitor: 'Multilogin publishes a free tier and paid plans whose allowances can include seats, profiles, proxy traffic, API use, and mobile minutes.', source: 'https://multilogin.com/pricing/' },
      { criterion: 'Source availability', aliasMode: commonAlias.source, competitor: 'No open-source license for the complete core platform was linked from reviewed official product material.', source: 'https://multilogin.com/' },
      { criterion: 'Local workflow', aliasMode: commonAlias.local, competitor: 'Multilogin documents both local and cloud profile storage inside its account-backed product.', source: 'https://multilogin.com/help/en_US/cloud-and-local-storage' },
      { criterion: 'Cloud and teams', aliasMode: commonAlias.team, competitor: 'Plans package team seats and cloud capabilities with commercial allowances.', source: 'https://multilogin.com/pricing/' },
      { criterion: 'API and automation', aliasMode: commonAlias.automation, competitor: 'Multilogin documents API access and browser automation within its platform and plans.', source: 'https://multilogin.com/pricing/' },
      { criterion: 'Additional environments', aliasMode: 'Windows desktop browser profiles through CloakBrowser.', competitor: 'Multilogin also markets Android cloud phones and bundled proxy services.', source: 'https://multilogin.com/' },
    ],
    migration: ['Choose whether each current profile uses local or cloud storage.', 'Record proxy, extensions, account purpose, and team owner.', 'Create equivalent AliasMode profiles and re-establish approved sessions.', 'Replace Multilogin-specific API calls with the documented AliasMode subset.', 'Verify handoff and synchronization behavior with a small workspace first.'],
    competitorFits: ['Android cloud phones are part of the required workflow.', 'The buyer wants proxy traffic and profile tooling in one paid contract.', 'Existing automation depends on Multilogin-specific API behavior.'],
    aliasModeFits: ['The team wants all profile functionality free.', 'A no-account Local mode is important.', 'The desktop client must be open source.', 'The workflow needs straightforward free Cloud profile handoffs.'],
    sources: [
      { label: 'Multilogin homepage', href: 'https://multilogin.com/' },
      { label: 'Multilogin pricing', href: 'https://multilogin.com/pricing/' },
      { label: 'Multilogin local and cloud storage', href: 'https://multilogin.com/help/en_US/cloud-and-local-storage' },
      { label: 'Multilogin profile transfer', href: 'https://multilogin.com/help/en_US/transferring-profiles-to-multilogin' },
    ],
  },
  {
    path: '/alternatives/dolphin-anty/',
    name: 'Dolphin Anty',
    eyebrow: 'Dolphin Anty alternative',
    headline: 'AliasMode or Dolphin Anty: unlimited open-source profiles or an established commercial app.',
    lead: 'AliasMode offers unlimited free profiles, account-free Local mode, free Cloud teamwork, and an Apache-2.0 desktop client. Dolphin Anty offers a commercial product with a free profile allowance, team roles, sharing, synchronization, and API access.',
    verified: '2026-08-10',
    directAnswer: 'Choose AliasMode when unlimited free profiles, no-account Local use, or inspectable desktop code drives the decision. Choose Dolphin Anty when its established commercial workflow, current built-in automation, roles, or documented product behavior is a closer fit.',
    rows: [
      { criterion: 'Free use', aliasMode: commonAlias.price, competitor: 'Dolphin Anty advertised five free profiles at the verification date, with paid capacity and team plans beyond that allowance.', source: 'https://dolphin-anty.com/' },
      { criterion: 'Source availability', aliasMode: commonAlias.source, competitor: 'No open-source license for the complete core desktop product was linked in reviewed official material.', source: 'https://dolphin-anty.com/' },
      { criterion: 'Local workflow', aliasMode: commonAlias.local, competitor: 'Dolphin documents an option to disable cloud synchronization inside its account-backed commercial product.', source: 'https://dolphin-anty.com/' },
      { criterion: 'Cloud and teams', aliasMode: commonAlias.team, competitor: 'Official material describes roles, sharing, synchronization, and team workflows.', source: 'https://dolphin-anty.com/' },
      { criterion: 'API and automation', aliasMode: commonAlias.automation, competitor: 'Dolphin Anty publishes API and automation capabilities for its product workflow.', source: 'https://dolphin-anty.com/' },
      { criterion: 'Operating model', aliasMode: 'Cloud and Local functionality is free; Premium Support is optional.', competitor: 'Free allowance plus commercial plans and service.', source: 'https://dolphin-anty.com/' },
    ],
    migration: ['Export only data the current Dolphin workflow can safely provide.', 'Record profile names, groups, proxies, owners, and extensions.', 'Create matching AliasMode profiles and re-establish approved sessions.', 'Map API operations to the documented AliasMode subset.', 'Test one full launch, work, close, and handoff cycle before scaling.'],
    competitorFits: ['The current process depends on Dolphin-specific API or automation features.', 'The team wants its established commercial support and interface.', 'Five free profiles are sufficient and minimize a near-term migration.'],
    aliasModeFits: ['More than five free profiles are needed.', 'Operators want no-account Local use.', 'The desktop manager must be Apache-2.0 open source.', 'Free Cloud synchronization and straightforward owner/member roles cover the team workflow.'],
    sources: [
      { label: 'Dolphin Anty homepage and product information', href: 'https://dolphin-anty.com/' },
      { label: 'Dolphin Anty public documentation', href: 'https://docs.dolphin-anty.com/' },
    ],
  },
];

export const getComparison = (path: string) => comparisons.find((comparison) => comparison.path === path);
