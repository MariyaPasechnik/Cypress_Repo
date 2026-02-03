
Cypress.Commands.add('loginAsGuest', () => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
})
describe('My first test', () => {
  it('Should open main page using custom command', () => {
    cy.loginAsGuest()
    cy.get('h1').should('have.text', 'Do more!')
  })
})
describe('Check header buttons', () => {
  it('Check visibility and click', () => {
      cy.loginAsGuest()
    cy.contains('Home').should('be.visible').click()
    cy.contains('About').should('be.visible').click()
    cy.contains('Contacts').should('be.visible').click()
    cy.contains('Guest log in').should('be.visible').click()
    cy.contains('Log out').should('be.visible').click()
    cy.contains('Sign In').should('be.visible').click()
  })
})
describe('Check button Sign In', () => {
  it('Check registration form', () => {
      cy.loginAsGuest()
      cy.contains('Sign In').should('be.visible').click()
      cy.contains('button', 'Registration').click()
      cy.get('#signupName').type('Mariya').should('have.value', 'Mariya')
      cy.get('#signupLastName').type('Pasichnyk').should('have.value', 'Pasichnyk')
      cy.get('#signupEmail').type('mariyapasechnik1992@gmail.com').should('have.value', 'mariyapasechnik1992@gmail.com')
      cy.get('#signupPassword').type('Aa123456789').should('have.value', 'Aa123456789')
      cy.get('#signupRepeatPassword').type('Aa123456789').should('have.value', 'Aa123456789')
      cy.contains('button', 'Register').should('be.enabled').click()

        })
})
describe('Check signIn as registered user', () => {
    it('Click SignIn', () => {
        cy.loginAsGuest()
         cy.contains('Sign In').should('be.visible').click()
         cy.get('#signinEmail').type('mariyapasechnik1992@gmail.com').should('have.value', 'mariyapasechnik1992@gmail.com')
         cy.get('#signinPassword').type('Aa123456789').should('have.value', 'Aa123456789')
         cy.contains('button', 'Login').should('be.enabled').click()



    })
})
describe('Check footer', () => {
    it('Check Contacts social icons', () => {
        cy.loginAsGuest()
        cy.get('#contactsSection a').eq(0).should('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School')
        cy.get('#contactsSection a').eq(1).should('have.attr', 'href', 'https://t.me/ithillel_kyiv')
        cy.get('#contactsSection a').eq(2).should('have.attr', 'href', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1')
        cy.get('#contactsSection a').eq(3).should('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/')
        cy.get('#contactsSection a').eq(4).should('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/')
        cy.get('#contactsSection a').eq(5).should('have.attr', 'href', 'https://ithillel.ua')
        cy.get('#contactsSection a').eq(6).should('have.attr', 'href', 'mailto:developer@ithillel.ua')
    })
    it('Should have exactly 7 links', () => {
    cy.loginAsGuest()
    cy.get('#contactsSection a').should('have.length', 7)
})
})
