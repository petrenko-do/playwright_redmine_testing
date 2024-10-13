const { test, expect } = require('@playwright/test')
const InvalidAuthPage = require('../pageObject/InvalidAuthPage.js')
const invalidUserData = require('../fixtures/invalidUserData.json')

test('Authorization with invalid passwords', async ({ page }) => {
    const InvalidAuth = new InvalidAuthPage(page)
    await page.goto('/')
    await InvalidAuth.getLoginButton().click()
    await InvalidAuth.getUserName().fill(invalidUserData.login)
    await InvalidAuth.getUserPassword().fill(invalidUserData.password)
    await InvalidAuth.submitButton().click()
    await expect(page.locator('#flash_error')).toHaveText('Invalid user or password')
});