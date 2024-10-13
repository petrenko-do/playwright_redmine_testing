class searchPage {
    constructor(page) {
        this.page = page;
    }
    getSearchForm(){
        return this.page.locator('#quick-search > form > label > a')
    }
    inputSearchText() {
        return this.page.locator('#search-input')
    }
    clickSubOption(){
        return this.page.locator('.collapsible legend')
    }
    submitButton() {
        return this.page.locator('#search-form .box~p>input[type="submit"]')
    }
}
module.exports = searchPage