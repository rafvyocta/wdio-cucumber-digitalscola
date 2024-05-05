const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

Given('user navigates to the login page', async () => {
    await browser.url('https://www.saucedemo.com/');
});

When('user enters valid credentials', async () => {
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('.btn_action').click();
});

Then('user should be logged in successfully', async () => {
    const inventoryPageTitle = await browser.getTitle();
    expect(inventoryPageTitle).toContain('Swag Labs');
});

Given('user is logged in', async () => {
    await $('#inventory_container').waitForExist({ timeout: 10000 });
});

When('user navigates to the dashboard', async () => {
    await browser.url('https://www.saucedemo.com/inventory.html');
});

Then('user should be on the dashboard page', async () => {
    const inventoryPageTitle = await browser.getTitle();
    expect(inventoryPageTitle).toContain('Swag Labs');
});

Given('user is on the dashboard page', async () => {
    await browser.url('https://www.saucedemo.com/inventory.html');
});

When('user adds an item to the cart', async () => {
    await $('.btn_primary').click();
});

Then('the item should be added successfully', async () => {
    const cartItemCount = await $('.shopping_cart_badge').getText();
    expect(cartItemCount).toBe('1');
});

Given('user has added an item to the cart', async () => {
    await $('.shopping_cart_badge').waitForExist();
});

When('user navigates to the cart', async () => {
    await $('.shopping_cart_link').click();
});

Then('the cart should contain the added item', async () => {
    const cartItemName = await $('.inventory_item_name').getText();
    expect(cartItemName).toBe('Sauce Labs Backpack');
});