const { BasePage } = require("./BasePage");

exports.ProductPage = class ProductPage extends BasePage {
    constructor(page) {
        super(page);

        this.sizeSelector = ".size-selector>.sizes__wrapper>.sizes__size";
        this.addToCartButton = ".purchase-pod__button-content"
    }


    async selectTheSize(givenSize) {
        const sizes = await page.$$(this.sizeSelector)
        for (let i = sizes.length - 1; i >= 0; i--) {
            let availableSize = await sizes[i].textContent.trim()
            if (availableSize == givenSize) {
                await sizes[i].click();
            }
        }
    }

    async clickOnAddToCart() {
        await this.click(this.addToCartButton);
    }


}