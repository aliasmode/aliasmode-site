const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const placeholder = /example|invalid|localhost/i;

function httpsOrigin(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const local = host === 'localhost' || host === '::1' || host === '0.0.0.0' || host.startsWith('127.') || host.endsWith('.local');
    const reserved = placeholder.test(host) || host.endsWith('.test');
    return url.protocol === 'https:' && url.pathname === '/' && !url.username && !url.password && !url.search && !url.hash && !local && !reserved ? url.origin : '';
  } catch {
    return '';
  }
}

const isProduction = process.env.PUBLIC_SITE_ENV === 'production';
const origin = process.env.PUBLIC_SITE_ORIGIN ?? '';
const supportEmail = process.env.PUBLIC_SUPPORT_EMAIL ?? '';
const securityEmail = process.env.PUBLIC_SECURITY_EMAIL ?? '';
const googleSiteVerification = process.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '';
const bingSiteVerification = process.env.PUBLIC_BING_SITE_VERIFICATION ?? '';
const analyticsEndpoint = process.env.PUBLIC_ANALYTICS_ENDPOINT ?? '';

if (isProduction) {
  if (!httpsOrigin(origin)) throw new Error('PUBLIC_SITE_ORIGIN must be an HTTPS origin in production.');
  for (const [name, value] of Object.entries({ PUBLIC_SUPPORT_EMAIL: supportEmail, PUBLIC_SECURITY_EMAIL: securityEmail })) {
    if (!email.test(value) || placeholder.test(value)) throw new Error(`${name} must be a real contact address in production.`);
  }
}

const productionOrigin = isProduction ? httpsOrigin(origin) : '';
let productionAnalyticsEndpoint = '';
if (isProduction && analyticsEndpoint) {
  try {
    const url = new URL(analyticsEndpoint, productionOrigin);
    if (url.origin !== productionOrigin || url.protocol !== 'https:') throw new Error();
    productionAnalyticsEndpoint = url.toString();
  } catch {
    throw new Error('PUBLIC_ANALYTICS_ENDPOINT must use the production site origin.');
  }
}

export const siteConfig = {
  isProduction,
  origin: productionOrigin,
  metadataOrigin: productionOrigin || 'https://aliasmode.com',
  supportEmail: isProduction ? supportEmail : '',
  securityEmail: isProduction ? securityEmail : '',
  googleSiteVerification: isProduction ? googleSiteVerification : '',
  bingSiteVerification: isProduction ? bingSiteVerification : '',
  analyticsEndpoint: productionAnalyticsEndpoint,
  index: isProduction,
  githubRepository: 'https://github.com/aliasmode/aliasmode',
  githubReleases: 'https://github.com/aliasmode/aliasmode/releases',
};
