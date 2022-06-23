const { BasePage } = require("./BasePage");

exports.PaymentPage = class PaymentPage extends BasePage {
    constructor(page) {
        super(page);

        this.payWithCardRadioButton = ".adyen-checkout__payment-method--card>div>div>.adyen-checkout__payment-method__radio";
        this.cardNumberTextField = "#encryptedCardNumber";
        this.expiryDateTextField = '#encryptedExpiryDate';
        this.cvvTextField = '.adyen-checkout__input--small.adyen-checkout__card__cvc__input';
        this.placeYourOrder = ".button-container__button";
        this.productTitleText = '.order-item-block__title';
        this.orderQuanityText = '.order-item-block__quantity-number';

    }

    async getItemsInCartText() {
        let text = await this.page.$eval(this.itemInTheCartText, el => el.textContent.trim()).split("")[0]
        return text;
    }
}