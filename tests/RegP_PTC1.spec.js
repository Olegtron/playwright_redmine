// @ts-check
const { test, expect } = require('@playwright/test');

test('registration with valid credentials', async ({ page }) => {
    const register = page.locator('[href="/account/register"]');
    const submit = page.locator('[type="submit"]');
    const elemtext = page.locator('[id="flash_notice"]');
    const result = Math.random().toString(36).substring(4,14);
    const emailresult = Math.random().toString(36).substring(4,14);

    await page.goto('https://www.redmine.org/');
    await register.click();

    await page.locator('[id="user_login"]').fill(result);
    await page.locator('[id="user_password"]').fill(result);
    await page.locator('[id="user_password_confirmation"]').fill(result);
    await page.locator('[id="user_firstname"]').fill(result);
    await page.locator('[id="user_lastname"]').fill(result);

    await page.locator('[id="user_mail"]').fill(emailresult+"@gmail.com");
    await submit.click();

    await expect(elemtext).toHaveText(/Account was successfully created. .*/);
a
  });