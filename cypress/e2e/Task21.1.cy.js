import GaragePage from '../support/pageObjects/GaragePage.cy.js';
import GaragePage2 from '../support/pageObjects/GaragePage2.cy.js'; 

describe('Fuel Expenses Flow', () => {
    
  beforeEach(() => {
        const email = Cypress.env('email'); 
        const password = Cypress.env('password'); 
        
        cy.visit('/'); 
        cy.contains('button', 'Sign In').click();
        cy.get('#signinEmail').type(email);
        cy.get('#signinPassword').type(password, { sensitive: true });
        cy.get('.modal-footer .btn-primary').click();
        cy.get('h1').should('be.visible').and('contain', 'Garage');
    });

    it('should create a car and add expenses automatically calculating mileage', () => {
        GaragePage.addCar('Audi', 'TT', '100');
        GaragePage2.addFuel('40', '1000');

    });
});