const { BasePage } = require("./BasePage");

exports.ProductPage = class ProductPage extends BasePage {
    constructor(page) {
        super(page);

        this.sizeSelector = ".size-selector>.sizes__wrapper>.sizes__size";
        this.addToCartButton = ".purchase-pod__button-content";
        this.yourCartButton = "a.icon-bag>span";

    }


    async selectTheSize(givenSize) {
        await this.page.locator(this.sizeSelector,{ hasText: givenSize }).click()
    }

    async clickOnAddToCart() {
        await this.click(this.addToCartButton);
    }    


    async navigateToCheckoutPage(){
        await this.click(this.yourCartButton)
    }


}