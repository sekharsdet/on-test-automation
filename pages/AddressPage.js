const { BasePage } = require("./BasePage");

exports.AddressPage = class AddressPage extends BasePage {
    constructor(page) {
        super(page);

        this.emailTextField = "#email";
        this.firstNameTextField  = "#firstname";
        this.lastNameTextField  = "#lastname";
        this.streetAddressTextField = "#address1";
        this.companyAddressTextField  = "#address2";
        this.postCodeTextField  = "#zipcode";
        this.cityTextField = "#city";
        this.stateDropdown  = "#state_id";
        this.countryDropdown  = "#country";
        this.phoneTextField = "#phone";
        this.showShippingOptionsButton  = ".button-container__button";
        this.continueToPaymentButton  = "Continue to Payment";

    }
}