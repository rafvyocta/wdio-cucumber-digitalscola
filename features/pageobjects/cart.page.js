const { $ } = require('@wdio/globals');

class CartPage {
    get cartItemName() { return $('.inventory_item_name'); }

    async open() {
        await browser.url('https://www.saucedemo.com/cart.html');
    }

    async getCartItemCount() {
        const cartItemCount = await $('.shopping_cart_badge').getText();
        return cartItemCount;
    }

    async getCartItemName() {
        const cartItemName = await this.cartItemName.getText();
        return cartItemName;
    }
}

module.exports = new CartPage();
