const { BasePage } = require("./BasePage");

exports.CheckoutPage = class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);

        this.itemInTheCartText =  "a.icon-bag>span" ;
        this.productTitleText=".order-item-block__title--large";
        this.totalAmountText=".cart__section--summary>div>div>div>.order-totals-row--bold>.order-totals-row__amount"
        this.checkoutButton = ".button.cart__cta";
    }

    async getItemsInCartText() {
        await  this.page.locator(this.itemInTheCartText).waitFor()
        let text = await this.page.locator(this.itemInTheCartText).textContent()
        return text
    }

    async getProductName() {
        await  this.page.locator(this.productTitleText).waitFor()
        let text = await this.page.locator(this.productTitleText).textContent()
        return text
    }

    async getTotalPrice() {
        await  this.page.locator(this.totalAmountText).waitFor()
        let text = await this.page.locator(this.totalAmountText).textContent()
        return text
    }

    async clickOnCheckout(){
        await this.click(this.checkoutButton)
    }

}