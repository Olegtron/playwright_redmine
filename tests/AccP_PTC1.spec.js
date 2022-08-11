// @ts-check
const { test, expect } = require('@playwright/test');

test('deletion of existing account', async ({ page }) => {
    const signIn = page.locator('[href="/login"]');
    const login = page.locator('[type="submit"]');
    const loginfield = page.locator('[id="username"]');
    const passfield = page.locator('[id="password"]');
    const myacc = page.locator('[href="/my/account"]');
    const del = page.locator('[href="/my/account/destroy"]');
    const checkbox = page.locator('[type="checkbox"]');
    const delconfirm = page.locator('[value="Delete my account"]');
    const notification = page.locator('[id="flash_notice"]');

    await page.goto('https://www.redmine.org/');
    await signIn.click();

    await loginfield.fill('OlegtronDel');
    await passfield.fill('000000');
    await login.click();

    await myacc.click();
    await del.click();

    await expect(page).toHaveURL('https://www.redmine.org/my/account/destroy');

    await checkbox.click();
    await delconfirm.click();

    await expect(page).toHaveURL('https://www.redmine.org/');
    await expect(notification).toHaveText('Your account has been permanently deleted.');

  });

