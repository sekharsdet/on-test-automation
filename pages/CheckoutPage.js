const { BasePage } = require("./BasePage");

exports.CheckoutPage = class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);

        this.itemInTheCartText = ".cart__cart-items-counter>span";
        this.checkoutButton = ".button.cart__cta";
        this.searchButton = '.js-search-button';
        this.marketingHeader = 'h2.tesonet-marketing';
    }

    async getItemsInCartText() {
        let text = await this.page.$eval(this.itemInTheCartText, el => el.textContent.trim()).split("")[0]
        return text;
    }
}