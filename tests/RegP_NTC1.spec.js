// @ts-check
const { test, expect } = require('@playwright/test');

test('registration with not valid credentials', async ({ page }) => {
    const register = page.locator('[href="/account/register"]');
    const submit = page.locator('[type="submit"]');
    const passfield = page.locator('[id="user_password"]');
    const confpassfield = page.locator('[id="user_password_confirmation"]');
    const result = Math.random().toString(36).substring(4,14);
    const emailresult = Math.random().toString(36).substring(4,14);
    const elemtext = page.locator('[id="errorExplanation"]');

    await page.goto('https://www.redmine.org/');
    await register.click();
    
    await page.locator('[id="user_login"]').fill(result);
    await passfield.fill("1");
    await confpassfield.fill("1");
    await page.locator('[id="user_firstname"]').fill(result);
    await page.locator('[id="user_lastname"]').fill(result);

    await page.locator('[id="user_mail"]').fill(emailresult+"@gmail.com");
    await submit.click();

    await expect(elemtext).toHaveText(/Password is too short .*/);
    await expect(passfield).toHaveText('');
    await expect(confpassfield).toHaveText('');

  });