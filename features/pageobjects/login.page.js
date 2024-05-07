const { $ } = require('@wdio/globals');

class LoginPage {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnLogin() { return $('#login-button'); }
    get errorContainer() { return $('.error-message-container'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async getErrorMessage() {
        if (await this.errorContainer.isExisting()) {
            return await this.errorContainer.getText();
        } else {
            return 'No error message';
        }
    }
}

module.exports = new LoginPage();
