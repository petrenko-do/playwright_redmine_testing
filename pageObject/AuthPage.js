class AuthPage {
    constructor(page) {
        this.page = page;
    }
    getUserName() {
        return this.page.locator('#username')
    }
    getUserPassword() {
        return this.page.locator('#password')
    }
    isAutoLoginChecked() {
        return this.page.locator('#autologin')
    }    
    submitButton() {
        return this.page.locator('#login-form input#login-submit')
    }
}
module.exports = AuthPage;