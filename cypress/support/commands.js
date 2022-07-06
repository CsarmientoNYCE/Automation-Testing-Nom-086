import Locators from "../support/UI/locators.json"; 
import "cypress-ntlm-auth/dist/commands";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (user, password) =>{
    cy.visit(Cypress.env('url').login);
    cy.get(Locators.loginPagelocators.username).type(user);
    cy.get(Locators.loginPagelocators.password).type(password);
    cy.get(Locators.loginPagelocators.loginBtn).click()
    cy.wait(3000);
})
// Cypress.Commands.add('loginAnalist', (user, password) =>{
//     cy.visit(Cypress.env('url').login);
//     cy.get(Locators.loginAnalist.loginLink).click()
//     cy.contains(Locators.loginAnalist.username).type(user);
//     cy.contains(Locators.loginAnalist.password).type(password);
//     //cy.get(Locators.loginPagelocators.loginBtn).click()
//     cy.wait(3000);
// });

// Access element whose parent is hidden
Cypress.Commands.add('isVisible', {
    prevSubject: true
  }, (subject) => {
    const isVisible = (elem) => !!(
      elem.offsetWidth ||
      elem.offsetHeight ||
      elem.getClientRects().length
    )
    expect(isVisible(subject[0])).to.be.true
  });
