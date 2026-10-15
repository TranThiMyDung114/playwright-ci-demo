
import { test, expect } from '@playwright/test';

test('LOGIN-001 - Login successfully', async ({ page }) => {

  // Step 1: Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Step 2: Enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // Step 3: Enter password
  await page.getByPlaceholder('Password').fill('admin123');

  // Step 4: Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Verify Dashboard
  await expect(page).toHaveURL(/dashboard/);
  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();

});
