const { test, expect } = require('@playwright/test')
const AuthPage = require('../pageObject/AuthPage.js')
const AuthHelper = require('../helper/authHelper.js');
const createQuestion = require('../pageObject/createQuestionePage.js')
const questionData = require('./../fixtures/createQuestionData.json')
const Helper = require('./../helper/randomTextGenerate.js')

test.beforeEach(async ({ page }) => {
    const auth = new AuthHelper()
    await auth.authorizeUser(page, AuthPage)
})

test('Create new questions in Redmine', async ({ page }) => {
    const create = new createQuestion(page)
    const helperText = new Helper()
    const randomText = helperText.randomTextGenerate(10)
    await create.getButtonPlus().hover()
    await create.getButtonCreateQuestion().click()
    await create.getSelectIssue().selectOption(({ label: questionData.issue[questionData.issueIndex] }))
    await create.inputIssueTitle().fill(randomText)
    await create.inputIssueDescr().fill(randomText)
    await create.getSelectStatus().selectOption(({ label: questionData.issueStatus[questionData.issueStatusIndex] }))
    await create.getSelectCategory().selectOption({ label: questionData.issueCategory })
    await create.getSelectversion().selectOption({ label: questionData.issueAffectedVersion })
    await expect(page.locator('#content h2')).toHaveText('Нові питання')
    const selectedStatusText = await page.locator('#issue_status_id option:checked').textContent();
    await expect(selectedStatusText.trim()).toBe(questionData.issueStatus[questionData.issueStatusIndex]);
    const selectedCategoryText = await page.locator('#issue_category_id option:checked').textContent();
    await expect(selectedCategoryText.trim()).toBe(questionData.issueCategory);
    const selectedVersionText = await page.locator('#issue_custom_field_values_4 option:checked').textContent();
    await expect(selectedVersionText.trim()).toBe(questionData.issueAffectedVersion);
    await create.button().click()
    await expect(page.locator('#flash_notice ~ h2')).toContainText('Defect')
})