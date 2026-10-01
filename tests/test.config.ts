/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

import { siteConfig } from '../src/lib/site.config'

export const testConfig = {
  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts. This site's own links, from
   * siteConfig (the template's were Free For Charity's).
   */
  socialLinks: {
    links: siteConfig.social.filter((s) => s.href.trim()),
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: `All Rights Are Reserved by ${siteConfig.name}${
      siteConfig.taxStatusLabel.trim() ? ` ${siteConfig.taxStatusLabel.trim()}` : ''
    }`,
    searchText: 'All Rights Are Reserved',
    // The permanent "Supported by" attribution (FFC footer standard).
    linkUrl: siteConfig.supportedBy.url,
    linkText: siteConfig.supportedBy.name,
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/footer-only.spec.ts
   */
  logo: {
    // No charity logo yet: the header shows the site name as text.
    headerText: siteConfig.name,
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
