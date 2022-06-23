const { BasePage } = require("./BasePage");

exports.ProductResultsPage = class ProductResultsPage extends BasePage {
    constructor(page) {
        super(page);

        this.firstProduct = "(//div[@class='products']/span/div/a)[1]";
        this.departmentOptions = '#deps>option';
        this.searchButton = '.js-search-button';
        this.marketingHeader = 'h2.tesonet-marketing';
    }

}