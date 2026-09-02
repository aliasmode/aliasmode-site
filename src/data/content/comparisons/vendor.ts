export const comparisonTitle = (name: string) => `${name} Alternative: AliasMode vs ${name}`;
export const comparisonH1 = (name: string) => `AliasMode vs ${name}: A Free Open-Source Alternative`;
export const comparisonEyebrow = (name: string) => `${name} alternative`;

/**
 * AliasMode-side row facts. The five facts are identical in every vendor
 * comparison; four wording variants keep the pages from shipping duplicate
 * boilerplate cells. `commonAliasModeFor(slug)` picks one deterministically.
 */
const commonAliasModeSet = [
  {
    price: 'Cloud and Local are free with unlimited profiles. Paid service is support only.',
    source: 'Desktop client is Apache-2.0 open source. CloakBrowser and managed Cloud are separate.',
    local: 'Local mode needs no AliasMode account and sends no traffic to AliasMode Cloud.',
    team: 'Free Cloud sync with one workspace, owner/member roles, device revocation, and trash.',
    automation: 'AdsPower-shaped Local API subset and Playwright attachment over CDP.',
  },
  {
    price: 'Free: unlimited profiles in Cloud or Local, and the only paid service is support.',
    source: 'The desktop client is public under Apache-2.0; CloakBrowser and Cloud stay separate products.',
    local: 'Local mode runs account-free and sends nothing to AliasMode Cloud.',
    team: 'One workspace is free to share, with owner and member roles plus device revocation.',
    automation: 'The Local API mirrors the AdsPower shape, and Playwright attaches over CDP.',
  },
  {
    price: 'Unlimited profiles at no cost in either mode; support is the only thing you can pay for.',
    source: 'Desktop client source is published under Apache-2.0. CloakBrowser and managed Cloud are distinct.',
    local: 'A Local install needs no account and talks to no AliasMode servers.',
    team: 'Cloud teamwork is free: shared workspace, role-based access, device revocation, and trash.',
    automation: 'An AdsPower-compatible Local API plus Playwright connected over CDP.',
  },
  {
    price: 'No profile limits and no license fees in Cloud or Local; support is the only paid service.',
    source: 'The desktop client ships as Apache-2.0 source, while CloakBrowser and Cloud carry their own terms.',
    local: 'Local works without signing in and without any AliasMode Cloud traffic.',
    team: 'Teams get one free workspace with owner and member roles and device revocation.',
    automation: 'Automation goes through the AdsPower-shaped Local API and Playwright over CDP.',
  },
] as const;

export type CommonAliasMode = (typeof commonAliasModeSet)[number];

/** Deterministic variant per vendor slug, so sibling pages never share identical cells. */
export const commonAliasModeFor = (slug: string): CommonAliasMode => {
  let hash = 0;
  for (let index = 0; index < slug.length; index += 1) hash = (hash * 31 + slug.charCodeAt(index)) % 997;
  return commonAliasModeSet[hash % commonAliasModeSet.length];
};

/** Back-compat alias for the first variant. */
export const commonAliasMode: CommonAliasMode = commonAliasModeSet[0];
