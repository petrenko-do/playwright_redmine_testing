const { test, expect } = require('@playwright/test');
const SignUpPage = require('../pageObject/signUpPage.js')
const userData = require('../fixtures/userData.json')
const Helper = require('../helper/randomTextGenerate.js')

test('Registration of a user on the website using valid data', async ({ page }) => {
    const signUp = new SignUpPage(page)
    const helperText = new Helper()
    const randomText = helperText.randomTextGenerate(10)
    await page.goto('/');
    await page.locator('#account a.register').click()
    await expect(page.locator('#content h2')).toHaveText('Register')
    await signUp.getUserLogin().fill(userData.login)
    await expect(signUp.getUserPassword()).toHaveAttribute('type', 'password')
    await expect(signUp.getUserPasswordConfirm()).toHaveAttribute('type', 'password')
    await signUp.getUserPassword().fill(userData.password)
    await signUp.getUserPasswordConfirm().fill(userData.password)
    await signUp.getUserName().fill(userData.firstName)
    await signUp.getLastName().fill(userData.lastName)
    await signUp.getUserEmail().fill(userData.email)
    await expect(signUp.isElementChecked()).toBeChecked()
    await signUp.getUserLanguage().selectOption({ label: userData.language })
    await signUp.getAdditionalField_1().fill(randomText)
    await signUp.getAdditionalField_2().fill(randomText)
    await signUp.getAdditionalField_3().fill(randomText)
    await expect(signUp.getUserLogin()).toBeVisible()
    await expect(signUp.getUserPassword()).toBeVisible()
    await expect(signUp.getUserPasswordConfirm()).toBeVisible()
    await expect(signUp.getUserName()).toBeVisible()
    await expect(signUp.getLastName()).toBeVisible()
    await expect(signUp.getUserEmail()).toBeVisible()
    await expect(signUp.getUserLanguage()).toBeVisible()
    await expect(signUp.getUserLogin()).toHaveValue(userData.login)
    await expect(signUp.getUserPassword()).toHaveValue(userData.password)
    await expect(signUp.getUserName()).toHaveValue(userData.firstName)
    await expect(signUp.getLastName()).toHaveValue(userData.lastName)
    await expect(signUp.getUserEmail()).toHaveValue(userData.email)
    await signUp.submitButton().click()
    await expect(page.locator('#flash_notice')).toHaveText(new RegExp(`Account was successfully created. An email containing the instructions to activate your account was sent to ${userData.email}.`))
    await expect(page).toHaveURL(/https:\/\/www\.redmine\.org\/login\//)
})