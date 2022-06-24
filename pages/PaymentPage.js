const { BasePage } = require("./BasePage");

exports.PaymentPage = class PaymentPage extends BasePage {
    constructor(page) {
        super(page);
        this.payWithCardRadioButton = ".adyen-checkout__payment-method--card>div>div>.adyen-checkout__payment-method__radio";
        this.cardNumberTextField = "[aria-label='Card number']";
        this.expiryDateTextField = "[aria-label='Expiry date']";
        this.cvvTextField = "[aria-label='Security code']";
        this.cardHolderNameTextField = "#nameoncard";
        this.placeYourOrder = ".button-container__button";
        this.productTitleText = ".order-item-block__title";
        this.orderQuanityText = ".order-item-block__quantity-number";
        this.cardIframe = ".adyen-checkout__card__cardNumber__input>iframe";
        this.expDateIframe = ".adyen-checkout__card__exp-date__input>iframe";
        this.cvvIframe = ".adyen-checkout__card__cvc__input>iframe";
    }

    async getOrderQuanity() {
        await this.page.locator(this.orderQuanityText).waitFor()
        let text = await this.page.locator(this.orderQuanityText).textContent()
        return text
    }



    async selectPayWithCard() {
        await this.click(this.payWithCardRadioButton)
    }

    async enterCardDetails(cardNumber, expDate, cvv, name) {
        await this.page.frameLocator(this.cardIframe).nth(1).locator(this.cardNumberTextField).fill(cardNumber);
        await this.page.frameLocator(this.expDateIframe).nth(0).locator(this.expiryDateTextField).fill(expDate);
        await this.page.frameLocator(this.cvvIframe).nth(1).locator(this.cvvTextField).fill(cvv);
        await this.enterText(this.cardHolderNameTextField, name);
    }

    async clickOnPlaceYourOrder() {
        await this.click(this.placeYourOrder)
    }


}