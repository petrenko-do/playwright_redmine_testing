const { test, expect } = require('@playwright/test')
const AuthPage = require('../pageObject/AuthPage.js')
const AuthHelper = require('./../helper/authHelper.js');
const searchPage = require('./../pageObject/searchPage.js')
const searchData = require('./../fixtures/searchData.json')
const searchHelper = require('./../helper/searchHelper.js')

test.beforeEach(async ({ page }) => {
    const auth = new AuthHelper()
    await auth.authorizeUser(page, AuthPage)
})
test('Search by keyword with filtering by category', async ({ page }) => {
    const search = new searchPage(page)
    const helper = new searchHelper()
    const word = searchData.text;
    await search.getSearchForm().click()
    await search.inputSearchText().fill(searchData.text)
    await page.locator('#titles_only').check()
    await search.clickSubOption().click()    
    await page.locator('#open_issues').check()
    await expect(page.locator('#titles_only')).toBeChecked()
    await expect(page.locator('#open_issues')).toBeChecked()
    await helper.checkAllCheckboxes(page)
    await search.submitButton().click()
    const highlightedWord = page.locator(`.highlight:has-text("${word}")`).first();
    await expect(highlightedWord).toBeVisible();
})
