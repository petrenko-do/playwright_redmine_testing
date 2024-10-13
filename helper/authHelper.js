const { test, expect } = require('@playwright/test')
const userData = require('./../fixtures/userData.json');
class authHelper {
    async authorizeUser(page, AuthPage) {
        const signIn = new AuthPage(page);
        await page.goto('/');
        await page.locator('#account a.login').click();
        await signIn.getUserName().fill(userData.login);
        await signIn.getUserPassword().fill(userData.password);
        await signIn.isAutoLoginChecked().check();
        await signIn.submitButton().click();
    }
}
module.exports = authHelper;