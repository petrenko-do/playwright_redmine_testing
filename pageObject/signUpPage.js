class SignUpPage {
    constructor(page) {
        this.page = page;
    }
    getUserLogin() {
        return this.page.locator('#user_login')
    }
    getUserPassword() {
        return this.page.locator('#user_password')
    }
    getUserPasswordConfirm() {
        return this.page.locator('#user_password_confirmation')
    }
    getUserName() {
        return this.page.locator('#user_firstname')
    }
    getLastName() {
        return this.page.locator('#user_lastname')
    }
    getUserEmail() {
        return this.page.locator('#user_mail')
    }
    isElementChecked() {
        return this.page.locator('#pref_hide_mail')
    }
    getUserLanguage() {
        return this.page.locator('#user_language')
    }
    getAdditionalField_1() {
        return this.page.locator('#user_custom_field_values_5')
    }
    getAdditionalField_2() {
        return this.page.locator('#user_custom_field_values_6')
    }
    getAdditionalField_3() {
        return this.page.locator('#user_custom_field_values_3')
    }
    submitButton() {
        return this.page.locator('#new_user > div ~ input[type="submit"]')
    }
}
module.exports = SignUpPage;