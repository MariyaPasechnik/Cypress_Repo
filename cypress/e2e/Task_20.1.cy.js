import '../support/commands'
describe('Check button Sign In', () => {
  it('Check registration form', () => {
      cy.loginAsGuest()
      cy.contains('Sign In').should('be.visible').click()
      cy.contains('button', 'Registration').click()
      cy.get('#signupName').type('Maria').should('have.value', 'Maria')
      cy.get('#signupLastName').type('Pasichnik').should('have.value', 'Pasichnik')
      cy.get('#signupEmail').type('mariyapasechnik@gmail.com').should('have.value', 'mariyapasechnik@gmail.com')
      cy.get('#signupPassword').type('Aa123456789').should('have.value', 'Aa123456789')
      cy.get('#signupRepeatPassword').type('Aa123456789').should('have.value', 'Aa123456789')
      cy.contains('button', 'Register').should('be.enabled').click()

        })
})
Cypress.Commands.add('loginAsUser', () => {
    cy.loginAsGuest();
    cy.contains('Sign In').click();
    cy.get('#signinEmail').type('mariyapasechnik@gmail.com');
    cy.get('#signinPassword').type('Aa123456789', { sensitive: true });
    cy.contains('button', 'Login').should('be.enabled').click();
});
describe ('check commands', () => {
    it('Check commands', () => {
        cy.loginAsGuest()
        cy.loginAsUser()
    })
})

