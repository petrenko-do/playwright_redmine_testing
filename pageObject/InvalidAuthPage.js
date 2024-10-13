class InvalidAuthPage {
    constructor(page) {
        this.page = page;
    }
    getLoginButton(){
        return this.page.locator('#account a.login')
    }
    getUserName() {
        return this.page.locator('#username')
    }
    getUserPassword() {
        return this.page.locator('#password')
    }  
    submitButton() {
        return this.page.locator('#login-form input#login-submit')
    }
}
module.exports = InvalidAuthPage;