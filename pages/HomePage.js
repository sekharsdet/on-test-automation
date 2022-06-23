const { BasePage } = require("./BasePage");

exports.HomePage = class HomePage extends BasePage {
    constructor(page) {
        super(page);

        this.departments = "//p[contains(text(),'Cloud Collection')]";
        this.departmentOptions = '#deps>option';
        this.searchButton = '.js-search-button';
        this.marketingHeader = 'h2.tesonet-marketing';
    }
    }

    async visit() {
        await this.page.goto('/');
    }

}