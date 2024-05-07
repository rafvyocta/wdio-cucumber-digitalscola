const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const CartPage = require('../pageobjects/cart.page');

Given('user navigates to the login page', async () => {
    await browser.url('https://www.saucedemo.com/');
});

When('user enters valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
});

Then('user should be logged in successfully', async () => {
    const inventoryPageTitle = await browser.getTitle();
    expect(inventoryPageTitle).toContain('Swag Labs');
});

Given('user is logged in', async () => {
    await $('#inventory_container').waitForExist({ timeout: 10000 });
});

When('user navigates to the dashboard', async () => {
    await DashboardPage.open();
});

Then('user should be on the dashboard page', async () => {
    const inventoryPageTitle = await browser.getTitle();
    expect(inventoryPageTitle).toContain('Swag Labs');
});

Given('user is on the dashboard page', async () => {
    await DashboardPage.open();
});

When('user adds an item to the cart', async () => {
    await DashboardPage.addItemToCart();
});

Then('the item should be added successfully', async () => {
    const cartItemCount = await CartPage.getCartItemCount();
});

Given('user has added an item to the cart', async () => {
    await DashboardPage.addItemToCart();
});

When('user navigates to the cart', async () => {
    await CartPage.open();
});

Then('the cart should contain the added item', async () => {
    const cartItemName = await CartPage.getCartItemName();
});

When('user enters invalid credentials {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('user should not be logged in', async () => {
    const errorMessage = await LoginPage.getErrorMessage();
    console.log('Received Error Message:', errorMessage); 
    expect(errorMessage.includes('Username and password do not match any user in this service')).toBe(true); 
});





