// @ts-check
const { test, expect } = require('@playwright/test');

test('login with not valid credentials', async ({ page }) => {
    const signIn = page.locator('[href="/login"]');
    const login = page.locator('[type="submit"]');
    const loginfield = page.locator('[id="username"]');
    const passfield = page.locator('[id="password"]');
    const result = Math.random().toString(36).substring(4,14);
    const elemtext = page.locator('[id="flash_error"]');

    await page.goto('https://www.redmine.org/');
    await signIn.click();

    await loginfield.fill(result);
    await passfield.fill(result);
    await login.click();

    await expect(elemtext).toHaveText('Invalid user or password');
    await expect(passfield).toHaveText('');

  });

