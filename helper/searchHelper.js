const { expect } = require('@playwright/test');
class searchHelper {
    async checkAllCheckboxes(page) {
        const checkboxes = page.locator('#search-types label input[type="checkbox"]');
        const count = await checkboxes.count();
        for (let i = 0; i < count; i++) {
            await expect(checkboxes.nth(i)).toBeChecked();
        }
    }
}
module.exports = searchHelper