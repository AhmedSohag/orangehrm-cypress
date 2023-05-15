export class LoginPage {


    loginLocators = {
        usernameField:() => cy.get("input[name='username']"),
        passwordField:() => cy.get("input[name='password']")
    }

    loginUser() {
        this.loginLocators.usernameField().type('Admin')
        this.loginLocators.passwordField().type('admin123')
    }

}