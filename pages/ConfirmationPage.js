const { BasePage } = require("./BasePage");

exports.ConfirmationPage = class ConfirmationPage extends BasePage {
    constructor(page) {
        super(page);

        this.thankYouText = ".confirmation-container__title";
        this.productTitleText = '.order-item-block__title';
        this.orderQuanityText = '.order-item-block__quantity-number';
        this.orderNumberText = '.confirmation-container__order-details-item-text';


    }
}