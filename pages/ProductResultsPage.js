const { BasePage } = require("./BasePage");

exports.ProductResultsPage = class ProductResultsPage extends BasePage {
    constructor(page) {
        super(page);
        this.products = ".cards>a";
    }

    async selectFirstProduct() {
        await this.clickOnFirst(this.products)
    }
}