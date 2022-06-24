const { BasePage } = require("./BasePage");

exports.AddressPage = class AddressPage extends BasePage {
    constructor(page) {
        super(page);

        this.emailTextField = "#email";
        this.firstNameTextField = "#firstname";
        this.lastNameTextField = "#lastname";
        this.streetAddressTextField = "#address1";
        this.companyAddressTextField = "#address2";
        this.postCodeTextField = "#zipcode";
        this.cityTextField = "#city";
        this.stateDropdown = "#state_id";
        this.countryDropdown = "#country_id";
        this.phoneTextField = "#phone";
        this.showShippingOptionsButton = ".button-container__button";
        this.continueToPaymentButton = ".checkout-shipping-method-form>div>button";
        this.continueToShippingButton = ".checkout-guest-login-form__submit";


    }


    async enterEmail(email) {
        await this.page.locator(this.emailTextField).waitFor()
        await this.enterText(this.emailTextField, email);
    }

    async clickOnContinueToShipping() {
        await this.click(this.continueToShippingButton)
    }

    async enterShippingAddress(firstName, lastName, streetName, postCode, city, country, state, phone) {
        await this.enterText(this.firstNameTextField, firstName);
        await this.enterText(this.lastNameTextField, lastName);
        await this.enterText(this.streetAddressTextField, streetName);
        await this.enterText(this.postCodeTextField, postCode);
        await this.enterText(this.cityTextField, city);
        await this.select(this.countryDropdown, country);
        await this.select(this.stateDropdown, state);
        await this.enterText(this.phoneTextField, phone);
    }

    async clickOnshowShippingOptions() {
        await this.click(this.showShippingOptionsButton)
    }

    
    async clickOncontinueToPayment() {
        await this.click(this.continueToPaymentButton)
    }

    

}


