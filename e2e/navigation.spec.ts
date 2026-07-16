import { expect, test } from '@playwright/test';

test('player can enter and exit the batting sandbox', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Enter Batting Sandbox' }).click();
  await expect(
    page.getByRole('heading', { name: 'Batting Sandbox' }),
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: /placeholder baseball field/i }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Back to Title' }).click();
  await expect(
    page.getByRole('heading', { name: 'Project Omaha' }),
  ).toBeVisible();
});
