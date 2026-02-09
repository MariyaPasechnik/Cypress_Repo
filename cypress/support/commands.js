Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false;
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }
  return originalFn(element, text, options);
});
Cypress.Commands.add('createExpense', (carName, liters, totalCost) => {

    cy.contains('.car-item', carName)
      .first()
      .within(() => {
          cy.contains('button', 'Add fuel').click();
      });

    cy.get('#addExpenseLiters').should('be.visible').clear().type(liters);
    cy.get('#addExpenseTotalCost').should('be.visible').clear().type(totalCost);
    cy.get('#addExpenseMileage').should('be.visible').clear().type('110');

    cy.get('.modal-footer .btn-primary').click();

    cy.get('ngb-modal-window').should('not.exist');
});

