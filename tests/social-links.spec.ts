import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * These tests verify that:
 * 1. Social media links are present and functional
 * 2. Defunct platforms (like Google+) are not present
 * 3. All social icons link to correct destinations
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Check that Google+ link is not present
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    // Also check that Google Plus label is not present
    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test("should display the site's active social media links", async ({ page }) => {
    await page.goto('/')
    for (const { href, label } of testConfig.socialLinks.links) {
      const link = page.locator(`footer a[href="${href}"]`)
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('aria-label', label)
    }
  })

  test('should render exactly one icon per configured social link', async ({ page }) => {
    test.skip(testConfig.socialLinks.links.length === 0, 'No social links configured')
    await page.goto('/')
    const selector = testConfig.socialLinks.links
      .map(({ label }) => `footer a[aria-label="${label}"]`)
      .join(', ')
    await expect(page.locator(selector)).toHaveCount(testConfig.socialLinks.links.length)
  })
})
