import GaragePage from '../support/pageObjects/GaragePage.cy.js';

describe('Login and Car Management', () => {

    beforeEach(() => {
        const email = Cypress.env('email');
        const password = Cypress.env('password');

        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('button', 'Sign In').click();

        cy.get('#signinEmail').should('be.visible').type(email);
        cy.get('#signinPassword').should('be.visible').type(password, { sensitive: true });
        cy.get('.modal-footer .btn-primary').last().click();

        cy.get('h1').should('be.visible').and('contain', 'Garage');
    });

    it('Intercept request - add car', () => {
        cy.intercept('POST', '/api/cars').as('apicars');

        GaragePage.addCar('Audi', 'TT', '100');

        cy.wait('@apicars').then((interception) => {
            Cypress.env('carId', interception.response.body.data.id);
            expect(interception.response.statusCode).to.eq(201);
        });
    });

    it('Get list of cars', () => {
        cy.request('GET', '/api/cars').then((response) => {
            expect(response.status).to.eq(200);

            const carId = Cypress.env('carId');
            const createdCar = response.body.data.find(car => car.id === carId);

            expect(createdCar.brand).to.eq('Audi');
            expect(createdCar.model).to.eq('TT');
        });
    });

    it('Create expense', () => {
       
        cy.contains('.car-item', 'Audi TT')
          .first()
          .within(() => {
              cy.contains('button', 'Add fuel').click();
          });

        cy.get('#addExpenseLiters').should('be.visible').clear().type('10');
        cy.get('#addExpenseTotalCost').should('be.visible').clear().type('500');
        cy.get('#addExpenseMileage').should('be.visible').clear().type('110');

        cy.get('.modal-footer .btn-primary').click();
        cy.get('ngb-modal-window').should('not.exist'); 
    });

   it('Validate expense', () => {
    cy.get('.sidebar').find('a[href="/panel/expenses"]').click();

    cy.get('.expenses_table tbody tr', { timeout: 10000 }).first().within(() => {
        cy.get('td').eq(1).should('contain', '110'); 
        cy.get('td').eq(2).should('contain', '10'); 
        cy.get('td').eq(3).should('contain', '500'); 
    });
});


})
