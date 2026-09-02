import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

/** Home plus one representative page per family; every route here must exist in the registry. */
const pages = [
  { path: '/', family: 'home' },
  { path: '/alternatives/adspower/', family: 'comparison' },
  { path: '/best-antidetect-browsers/', family: 'ranking' },
  { path: '/guides/manage-multiple-instagram-accounts/', family: 'task-guide' },
  { path: '/docs/local-api/', family: 'docs' },
  { path: '/docs/mcp/', family: 'docs' },
  { path: '/integrations/claude-code/', family: 'integration' },
  { path: '/alternatives/', family: 'hub' },
  { path: '/sitemap/', family: 'directory' },
];

for (const item of pages) {
  test.describe(item.path, () => {
    test('renders one H1, no horizontal overflow, no console errors, no broken local resources', async ({ page }) => {
      const errors: string[] = [];
      const failures: string[] = [];
      // The aggregate beacon is the site's own first-party collector. Fulfill it
      // locally so production builds stay CORS-clean and never hit the network.
      await page.route('**/_am/events', async (route) => {
        const headers = { 'Access-Control-Allow-Origin': '*' };
        if (route.request().method() === 'OPTIONS') return route.fulfill({ status: 204, headers });
        return route.fulfill({ status: 204, headers });
      });
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      page.on('response', (response) => {
        const url = new URL(response.url());
        if (url.origin === 'http://127.0.0.1:4321' && response.status() >= 400) failures.push(`${response.status()} ${url.pathname}`);
      });
      page.on('request', (request) => {
        const url = new URL(request.url());
        if (url.origin !== 'http://127.0.0.1:4321' && !url.pathname.startsWith('/_am/')) failures.push(`external request ${url.href}`);
      });
      await page.goto(item.path, { waitUntil: 'networkidle' });
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'page must not scroll horizontally').toBeLessThanOrEqual(1);
      expect(errors, 'console errors').toEqual([]);
      expect(failures, 'failed or external requests').toEqual([]);
      // Indexable pages have no robots meta; preview pages have no canonical. Bound the waits.
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href', { timeout: 500 }).catch(() => null);
      const robots = await page.locator('meta[name="robots"]').getAttribute('content', { timeout: 500 }).catch(() => null);
      expect(canonical === null || canonical.endsWith(item.path)).toBeTruthy();
      expect(robots === null || robots.includes('noindex')).toBeTruthy();
      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      for (const schema of schemas) expect(() => JSON.parse(schema)).not.toThrow();
    });

    test('keyboard navigation reaches the header CTA and the first content link', async ({ page }) => {
      await page.goto(item.path);
      const cta = page.locator('a.header-cta');
      await expect(cta).toHaveAttribute('data-track-cta', '');
      await cta.focus();
      await expect(cta).toBeFocused();
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      expect(['A', 'BUTTON']).toContain(focused);
    });

    test('tables and code blocks scroll inside their own containers', async ({ page }) => {
      await page.goto(item.path);
      const wide = await page.evaluate(() => {
        const viewport = document.documentElement.clientWidth;
        return [...document.querySelectorAll('table, pre')].filter((element) => {
          let node: HTMLElement | null = element as HTMLElement;
          while (node && node !== document.body) {
            const style = getComputedStyle(node);
            if (style.overflowX === 'auto' || style.overflowX === 'scroll') return false;
            node = node.parentElement;
          }
          return element.getBoundingClientRect().width > viewport;
        }).length;
      });
      expect(wide, 'wide tables or code blocks without a scroll container').toBe(0);
    });

    test('has no serious accessibility violations', async ({ page }) => {
      await page.goto(item.path);
      const results = await new AxeBuilder({ page }).disableRules(['color-contrast']).analyze();
      const serious = results.violations.filter((violation) => violation.impact === 'serious' || violation.impact === 'critical');
      expect(serious.map((violation) => `${violation.id}: ${violation.nodes.map((node) => node.target.join(' ')).join(', ')}`)).toEqual([]);
    });
  });
}

test('analytics events share one page group and contain only allowlisted fields', async ({ page }) => {
  const events: Record<string, unknown>[] = [];
  await page.route('**/_am/events', async (route) => {
    // Answer the CORS preflight, then capture only the real event POSTs.
    const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'content-type' };
    if (route.request().method() === 'OPTIONS') return route.fulfill({ status: 204, headers });
    events.push(JSON.parse(route.request().postData() ?? '{}'));
    await route.fulfill({ status: 204, headers });
  });
  await page.goto('/docs/local-api/?utm_source=Test%20Source&utm_medium=email');
  test.skip(!(await page.evaluate(() => Boolean(document.querySelector('script[data-astro-exec], script:not([src])')))), 'analytics only exists in production builds');
  const measured = await page.evaluate(() => document.documentElement.outerHTML.includes('/_am/events'));
  test.skip(!measured, 'analytics only exists in production builds');
  await page.waitForTimeout(500);
  // Any visible tracked CTA works: the click only adds a cta event on top of the pageview.
  // Prevent the default navigation so the destination page's pageview cannot join the capture.
  await page.evaluate(() => document.addEventListener('click', (event) => event.preventDefault(), { capture: true, once: true }));
  const cta = page.locator('[data-track-cta]:visible').first();
  await cta.click({ noWaitAfter: true, timeout: 4_000 }).catch(() => {});
  await page.waitForTimeout(500);
  expect(events.length).toBeGreaterThanOrEqual(1);
  const allowed = new Set(['eventType', 'pageGroup', 'source', 'utmSource', 'utmMedium', 'utmCampaign', 'ctaType', 'destination', 'campaign']);
  const groups = new Set(events.map((event) => event.pageGroup));
  expect(groups.size).toBe(1);
  expect([...groups][0]).toBe('docs-local-api');
  for (const event of events) {
    for (const key of Object.keys(event)) expect(allowed.has(key), `unexpected analytics field ${key}`).toBeTruthy();
    expect(JSON.stringify(event)).not.toMatch(/http|\/docs\/|utm_source|Test Source|referrer/i);
  }
  expect(events[0]).toMatchObject({ eventType: 'pageview', utmSource: 'testsource', utmMedium: 'email' });
});

test('preview keeps every page noindex and production home is indexable', async ({ page }) => {
  await page.goto('/');
  const robots = await page.locator('meta[name="robots"]').getAttribute('content', { timeout: 500 }).catch(() => null);
  const canonical = await page.locator('link[rel="canonical"]').count();
  if (process.env.PUBLIC_SITE_ENV === 'production') {
    expect(robots).toBeNull();
    expect(canonical).toBe(1);
  } else {
    expect(robots).toBe('noindex,nofollow');
    expect(canonical).toBe(0);
  }
});

test('reduced motion disables marquee and reveal animations', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto('/');
  const durations = await page.evaluate(() => [...document.querySelectorAll('.ribbon-track, .deck-inner')].map((element) => getComputedStyle(element).animationDuration));
  for (const duration of durations) expect(parseFloat(duration)).toBeLessThan(0.01);
  await context.close();
});
