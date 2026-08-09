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

if (isProduction) {
  if (!httpsOrigin(origin)) throw new Error('PUBLIC_SITE_ORIGIN must be an HTTPS origin in production.');
  for (const [name, value] of Object.entries({ PUBLIC_SUPPORT_EMAIL: supportEmail, PUBLIC_SECURITY_EMAIL: securityEmail })) {
    if (!email.test(value) || placeholder.test(value)) throw new Error(`${name} must be a real contact address in production.`);
  }
}

export const siteConfig = {
  isProduction,
  origin: isProduction ? httpsOrigin(origin) : '',
  supportEmail: isProduction ? supportEmail : '',
  securityEmail: isProduction ? securityEmail : '',
  index: isProduction,
  githubReleases: 'https://github.com/aliasmode/aliasmode/releases',
};
