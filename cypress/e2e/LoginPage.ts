export class LoginPage {


    loginLocators = {
        usernameField:() => cy.get("input[name='username']"),
        passwordField:() => cy.get("input[name='password']"),
        loginBtn:() => cy.get("button[type='submit']")
    }

    loginUser() {
        this.loginLocators.usernameField().type('Admin')
        this.loginLocators.passwordField().type('admin123')
        this.loginLocators.loginBtn().click()
    }

}