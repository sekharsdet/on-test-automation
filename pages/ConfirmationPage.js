const { BasePage } = require("./BasePage");

exports.ConfirmationPage = class ConfirmationPage extends BasePage {
    constructor(page) {
        super(page);

        this.thankYouText = ".confirmation-container__title";
        this.productTitleText = ".order-item-block__title";
        this.orderQuanityText = ".order-item-block__quantity-number";
        this.totalAmountText = ".order-totals-row--bold>.order-totals-row__amount";
        this.orderNumberText = ".confirmation-container__order-details-item-text";

    }


    async getThankYouText() {
        return await this.page.locator(this.thankYouText)
    }

    async getOrderQuanityText() {
        let text = await this.page.locator(this.orderQuanityText).textContent()
        return text
    }

    async getProductName() {
        let text = await this.page.locator(this.productTitleText).textContent()
        return text
    }

    async getTotalPrice() {
        let text = await this.page.locator(this.totalAmountText).textContent()
        return text
    }

    async getOrderNumber() {
        let text = await this.page.locator(this.orderNumberText).textContent()
        return text
    }




}