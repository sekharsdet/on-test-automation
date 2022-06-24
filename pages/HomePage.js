const { BasePage } = require("./BasePage");

exports.HomePage = class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.acceptprivacySettingsButton = "button#onetrust-accept-btn-handler";
        this.productsTitle = ".category-slider__card>div>h3>div";
        this.closeTheMarketingTab = ".bx-close.bx-close-link.bx-close-inside";
        this.categoryWomen="//a/div[contains(text(),'Women')]";
    }


    async selectCategoryWomen() {
        await this.clickOnFirst(this.categoryWomen)
    }
    

    async closeTheMarketingPopup() {
        // if (this.verifyElementIsDisplayed(this.closeTheMarketingTab)) {
        //     await this.click(this.closeTheMarketingTab)
        // }
    }

    async acceptprivacySettings() {
        //await this.click(this.acceptprivacySettingsButton)
    }
}