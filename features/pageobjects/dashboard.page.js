const { $ } = require('@wdio/globals');

class DashboardPage {
    get btnAddToCart() { return $('.btn_primary'); }
    get badgeCart() { return $('.shopping_cart_badge'); }

    async open() {
        await browser.url('https://www.saucedemo.com/inventory.html');
    }

    async addItemToCart() {
        await this.btnAddToCart.click();
    }

    async getCartItemCount() {
        return await this.badgeCart.getText();
    }
}

module.exports = new DashboardPage();
