// @ts-check
const { test, expect } = require('@playwright/test');

test('login with valid credentials', async ({ page }) => {
    const signIn = page.locator('[href="/login"]');
    const login = page.locator('[type="submit"]');
    const loggeduser = page.locator('[id="loggedas"]');

    await page.goto('https://www.redmine.org/');
    await signIn.click();

    await page.locator('[id="username"]').fill("Olegtron222");
    await page.locator('[id="password"]').fill("000000");
    await login.click();

    await expect(page).toHaveURL('https://www.redmine.org/');
    await expect(loggeduser).toHaveText('Logged in as Olegtron222');

  });

