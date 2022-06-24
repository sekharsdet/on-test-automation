exports.BasePage = class BasePage {
    constructor(page) {
        this.page = page;
    }
    async click(element) {
        await this.page.locator(element).click();

    }

    async clickOnFirst(element) {
        await this.page.locator(element).first().click(60000);
    }


    async enterText(element, text) {
        await this.page.locator(element).fill(text);
    }

    async check(element) {
        await this.page.locator(element).check;
    }

    async select(element, text) {
        await this.page.selectOption(element, text);
    }

    async visitHomePage() {
        await this.page.goto('/');
    }

    async verifyElementIsDisplayed(element) {
        let isDisplayed = await this.page.locator(element).count()
        if(isDisplayed>=0){
            return true
        }else {
            return false
        }
    }
}