import { taskGuidePages as existing } from './_existing.ts';
import { warmUpInstagramAccountTaskGuide } from './warm-up-instagram-account.ts';
import { warmUpXTwitterAccountTaskGuide } from './warm-up-x-twitter-account.ts';
import { warmUpTiktokAccountTaskGuide } from './warm-up-tiktok-account.ts';
import { warmUpFacebookAccountTaskGuide } from './warm-up-facebook-account.ts';
import { manageMultipleInstagramAccountsTaskGuide } from './manage-multiple-instagram-accounts.ts';
import { manageMultipleXTwitterAccountsTaskGuide } from './manage-multiple-x-twitter-accounts.ts';
import { manageMultipleTiktokAccountsTaskGuide } from './manage-multiple-tiktok-accounts.ts';
import { manageMultipleFacebookAccountsTaskGuide } from './manage-multiple-facebook-accounts.ts';
import { manageMultipleLinkedinAccountsTaskGuide } from './manage-multiple-linkedin-accounts.ts';
import { manageMultipleSocialMediaAccountsSafelyTaskGuide } from './manage-multiple-social-media-accounts-safely.ts';
import { shareSocialMediaAccountsWithoutPasswordsTaskGuide } from './share-social-media-accounts-without-passwords.ts';
import { manageMultipleEcommerceSellerAccountsTaskGuide } from './manage-multiple-ecommerce-seller-accounts.ts';
import { manageMultipleGoogleAdsMetaAdsClientAccountsTaskGuide } from './manage-multiple-google-ads-meta-ads-client-accounts.ts';
import { browserProfilesForAffiliateMarketingTaskGuide } from './browser-profiles-for-affiliate-marketing.ts';
import { persistentBrowserProfilesForAiAgentsTaskGuide } from './persistent-browser-profiles-for-ai-agents.ts';
import { authenticatedBrowserProfilesForScrapingTaskGuide } from './authenticated-browser-profiles-for-scraping.ts';
import { reuseLoginStateWithPlaywrightTaskGuide } from './reuse-login-state-with-playwright.ts';
import { localizationGeoTestingWithBrowserProfilesTaskGuide } from './localization-geo-testing-with-browser-profiles.ts';

/** New per-page records are appended here as files land in this directory. */
export const taskGuidePages = [
  ...existing,
  warmUpInstagramAccountTaskGuide,
  warmUpXTwitterAccountTaskGuide,
  warmUpTiktokAccountTaskGuide,
  warmUpFacebookAccountTaskGuide,
  manageMultipleInstagramAccountsTaskGuide,
  manageMultipleXTwitterAccountsTaskGuide,
  manageMultipleTiktokAccountsTaskGuide,
  manageMultipleFacebookAccountsTaskGuide,
  manageMultipleLinkedinAccountsTaskGuide,
  manageMultipleSocialMediaAccountsSafelyTaskGuide,
  shareSocialMediaAccountsWithoutPasswordsTaskGuide,
  manageMultipleEcommerceSellerAccountsTaskGuide,
  manageMultipleGoogleAdsMetaAdsClientAccountsTaskGuide,
  browserProfilesForAffiliateMarketingTaskGuide,
  persistentBrowserProfilesForAiAgentsTaskGuide,
  authenticatedBrowserProfilesForScrapingTaskGuide,
  reuseLoginStateWithPlaywrightTaskGuide,
  localizationGeoTestingWithBrowserProfilesTaskGuide,
];
