export interface ProxyProvider {
  name: string;
  fit: string;
  publicOffer: string;
  targeting: string;
  protocols: string;
  commercialModel: string;
  evidence: 'Provider claim' | 'Not independently tested';
  relationship: string;
  source: string;
  sourceLabel: string;
}

export const proxyProviders: ProxyProvider[] = [
  {
    name: 'Bright Data',
    fit: 'Teams that need a large ISP-proxy network, detailed location options, and enterprise service choices.',
    publicOffer: 'Bright Data markets ISP proxies with static residential IP characteristics and options across shared and dedicated service models.',
    targeting: 'Country, state, city, and other targeting options vary by plan and inventory.',
    protocols: 'HTTP, HTTPS, and SOCKS5 support is described in product documentation.',
    commercialModel: 'Plan, bandwidth, and IP charges vary by service model. Normalize the quote to monthly cost per usable IP.',
    evidence: 'Not independently tested',
    relationship: 'No relationship disclosed.',
    source: 'https://brightdata.com/pricing/proxy-network/isp-proxies',
    sourceLabel: 'Bright Data ISP proxy pricing',
  },
  {
    name: 'Oxylabs',
    fit: 'Organizations that want a managed static residential product and enterprise sales or support.',
    publicOffer: 'Oxylabs markets static residential proxies built from ISP-assigned addresses for persistent sessions.',
    targeting: 'Published location coverage and allocation depend on the selected product and contract.',
    protocols: 'Check the current static residential documentation for the protocols available to the purchased plan.',
    commercialModel: 'Commercial terms can include traffic, IP count, and minimum commitments. Request a normalized quote.',
    evidence: 'Not independently tested',
    relationship: 'No relationship disclosed.',
    source: 'https://oxylabs.io/products/static-residential-proxies',
    sourceLabel: 'Oxylabs static residential proxies',
  },
  {
    name: 'IPRoyal',
    fit: 'Operators who want a public self-service static residential offer with country-level inventory choices.',
    publicOffer: 'IPRoyal markets dedicated static residential proxies with unlimited bandwidth and long-lived assignments.',
    targeting: 'Country and inventory options are shown during selection and can change with availability.',
    protocols: 'HTTP(S) and SOCKS5 availability is described on the product page.',
    commercialModel: 'Plans are commonly sold by proxy count and duration. Compare renewal, replacement, and minimum order terms.',
    evidence: 'Not independently tested',
    relationship: 'No relationship disclosed.',
    source: 'https://iproyal.com/static-residential-proxies/',
    sourceLabel: 'IPRoyal static residential proxies',
  },
  {
    name: 'Proxy-Seller',
    fit: 'Buyers comparing country-specific ISP or static residential inventory with flexible order durations.',
    publicOffer: 'Proxy-Seller markets ISP and residential proxy products with plan details that vary by country and inventory.',
    targeting: 'Country and selected location inventory are visible in the current product catalog.',
    protocols: 'Verify HTTP(S) and SOCKS5 support for the exact product before purchase.',
    commercialModel: 'Price varies by location, quantity, product type, and rental period. Use checkout terms for the calculation.',
    evidence: 'Not independently tested',
    relationship: 'No relationship disclosed.',
    source: 'https://proxy-seller.com/',
    sourceLabel: 'Proxy-Seller product catalog',
  },
  {
    name: 'SOAX',
    fit: 'Workflows that value a broad residential network, location targeting, and configurable sticky sessions.',
    publicOffer: 'SOAX markets residential proxy access with rotating and sticky session controls rather than a simple dedicated-IP catalog.',
    targeting: 'Country, region, city, and carrier or ASN options depend on the current service.',
    protocols: 'Protocol support and gateway behavior are documented by the provider.',
    commercialModel: 'Residential plans commonly scale with traffic and service level. Calculate expected bandwidth as well as session count.',
    evidence: 'Not independently tested',
    relationship: 'No relationship disclosed.',
    source: 'https://soax.com/proxies/residential',
    sourceLabel: 'SOAX residential proxies',
  },
  {
    name: 'Outreach Proxy',
    fit: 'Outreach teams evaluating proxy plans designed around persistent account and agency workflows.',
    publicOffer: 'Outreach Proxy publishes proxy products for outreach and browser-profile use cases. Confirm the current IP type and persistence at checkout.',
    targeting: 'Available locations and assignment options depend on current inventory.',
    protocols: 'Verify protocol and authentication support for the selected plan.',
    commercialModel: 'Compare monthly price, usable IP count, replacement terms, and minimum commitment with the same method used for every provider.',
    evidence: 'Not independently tested',
    relationship: 'Relationship disclosure pending confirmation; no scoring preference is applied.',
    source: 'https://outreachproxy.com/',
    sourceLabel: 'Outreach Proxy homepage',
  },
];

export const proxyCriteria = [
  'Static, sticky rotating, or per-request rotating behavior',
  'Dedicated or shared IP assignment',
  'Country, state, and city targeting',
  'HTTP, HTTPS, and SOCKS5 support',
  'Session and IP persistence',
  'Bandwidth and concurrency rules',
  'Authentication methods',
  'Price per usable IP and minimum commitment',
  'Replacement and refund policy',
  'Acceptable-use terms',
] as const;
