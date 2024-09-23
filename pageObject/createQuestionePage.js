class CreateQuestion {
    constructor(page) {
        this.page = page;
    }
    getButtonPlus() {
        return this.page.locator('#new-object')
    }
    getButtonCreateQuestion() {
        return this.page.locator('#main-menu> ul .menu-children a.new-issue-sub')
    }
    getSelectIssue() {
        return this.page.locator('#issue_tracker_id')
    }
    inputIssueTitle() {
        return this.page.locator('#issue_subject')
    }
    inputIssueDescr() {
        return this.page.locator('#issue_description')
    }
    getSelectStatus() {
        return this.page.locator('#issue_status_id')
    }
    getSelectCategory() {
        return this.page.locator('#issue_category_id')
    }
    getSelectversion() {
        return this.page.locator('#issue_custom_field_values_4')
    }
    button() {
        return this.page.locator('#issue-form input[name="commit"]')
    }
}
module.exports = CreateQuestion;