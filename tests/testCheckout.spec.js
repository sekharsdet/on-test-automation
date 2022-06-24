const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pages/BasePage');
const { HomePage } = require('../pages/HomePage');
const { ProductResultsPage } = require('../pages/ProductResultsPage');
const { ProductPage } = require('../pages/ProductPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { Chance } = require('chance');
const { AddressPage } = require('../pages/AddressPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');
const { PaymentPage } = require('../pages/PaymentPage');


let page;
let chance = new Chance()

const authData = require("../testData/basicAuthData")
const product = require("../testData/productData")
const address = require("../testData/addressData");
const credicard = require("../testData/creditCardData");


test.describe('Place an order successfully', () => {
  test.setTimeout(80000);
  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: authData.basicAuthData.userName,
        password: authData.basicAuthData.password,
      },
    });
    page = await context.newPage();
    const basePage = new BasePage(page);
    await basePage.visitHomePage();
  })

  test('Add product to Cart , enter the address and place the order with paying credit card ', async () => {

    // naviagte to home page and select menu "women"
    const homePage = new HomePage(page);
    await homePage.acceptprivacySettings()
    await homePage.closeTheMarketingPopup()
    await homePage.selectCategoryWomen()

    // on the product results page select the first product
    const productResultsPage = new ProductResultsPage(page)
    await productResultsPage.selectFirstProduct()

    // on the product page select the size , add to cart
    // and naviagte to checkout page
    const productPage = new ProductPage(page)
    await productPage.selectTheSize(product.productData.productSize)
    await productPage.clickOnAddToCart()
    await productPage.navigateToCheckoutPage()

    //collect prodct name and prive and quantity on checkout page
    // also the verify quantity and move to address page
    const checkoutPage = new CheckoutPage(page)
    expect.soft(await checkoutPage.getItemsInCartText()).toEqual(product.productData.quanity);
    const productName = await checkoutPage.getProductName()
    const totalPrice = await checkoutPage.getTotalPrice()
    await checkoutPage.clickOnCheckout()

    //on the address page eneter email and address 
    // and navigate to payment page
    const addressPage = new AddressPage(page)
    await addressPage.enterEmail(address.addressData.email)
    await addressPage.clickOnContinueToShipping()
    await addressPage.enterShippingAddress(chance.name(), chance.name(), address.addressData.street,
      address.addressData.postCode, address.addressData.city, address.addressData.country,
      address.addressData.state, chance.phone())
    await addressPage.clickOnshowShippingOptions()
    await addressPage.clickOncontinueToPayment()

    //on the payment page enetr the credit card details and moved to confirmation page 
    // also verify the quantity 
    const paymentPage = new PaymentPage(page)
    expect.soft(await paymentPage.getOrderQuanity()).toEqual(product.productData.quanity);
    await paymentPage.selectPayWithCard()
    await paymentPage.enterCardDetails(credicard.creditCardData.cardNumber,
      credicard.creditCardData.expiryDate, credicard.creditCardData.cvv, chance.name())
    await paymentPage.clickOnPlaceYourOrder()

    //on the confirmation page verify quanity, price, product name
    //and order number
    let confirmationPage = new ConfirmationPage(page)
    expect.soft(await confirmationPage.getOrderQuanityText()).toEqual(product.productData.quanity);
    expect.soft(await confirmationPage.getProductName()).toEqual(productName);
    expect.soft(await confirmationPage.getTotalPrice()).toEqual(totalPrice);
    expect.soft(await confirmationPage.getThankYouText()).toContainText(product.productData.message);
    expect.soft(await confirmationPage.getOrderNumber()).toBeTruthy()
  })

})