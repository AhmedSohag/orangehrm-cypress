import { LandingPage } from "./LandingPage"
import { LoginPage } from "./LoginPage"

describe('template spec', () => {
  it('Visit Website and Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    let loginPage = new LoginPage()
    loginPage.loginUser()
    let landingPage = new LandingPage()
    landingPage.goToAdmin()

    
  })
})
