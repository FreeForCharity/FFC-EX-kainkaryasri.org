import { test, expect } from '@playwright/test'
import { PENDING_TEXT, isPending, siteConfig } from '../src/lib/site.config'
import { team } from '../src/data/team'

/**
 * Footer-Only Template Smoke Tests
 *
 * This repo intentionally renders only:
 * - Team section
 * - Footer
 */

test.describe('Footer-only template', () => {
  test('should render the Team section (or its pending placeholder)', async ({ page }) => {
    await page.goto('/')
    test.skip(team.length === 0 && !isPending('team'), 'No team and not pending: section hidden')

    await expect(page.getByRole('heading', { name: `The ${siteConfig.name} Team` })).toBeVisible()

    // Cards render an initials monogram, not a photo — there are no team images.
    await expect(page.locator('#team img')).toHaveCount(0)

    if (team.length === 0) {
      // A pending team shows the plain-text placeholder, never FFC's staff.
      await expect(page.locator('#team').getByText(PENDING_TEXT)).toBeVisible()
    }
    for (const member of team) {
      await expect(page.getByRole('heading', { level: 3, name: member.name })).toBeVisible()
    }
  })

  test('should render the Footer', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible()
  })
})
