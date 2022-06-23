exports.BasePage = class BasePage {
    constructor(page) {
        this.page = page;
    }
    async click(element) {
        await this.page.locator(element).click();
    }

    async enterText(element, text) {
        await this.page.locator(element).fill(text);
    }

    async check(element) {
        await this.page.locator(element).check;
    }

    async select(element, text) {
        await this.page.locator(element).selectOption(text);
    }

    async visitHomePage() {
        await this.page.goto('/');
    }
}