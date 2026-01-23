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
Cypress.Commands.add('loginAsGuest', () => {
  cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
})
