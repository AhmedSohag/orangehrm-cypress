export class LandingPage {

    landingPageLocators = {
        adminOption:() => cy.get('body').contains('Admin')
    }

    goToAdmin() {
        this.landingPageLocators.adminOption().click()
    }

}