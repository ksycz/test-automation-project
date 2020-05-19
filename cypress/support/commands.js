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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

let selectors = require('../fixtures/selectors.json');

Cypress.Commands.add('appSetup', (force=false) => {
    cy
    .visit("https://test-stfu-applifting.herokuapp.com/")
  });

Cypress.Commands.add('openGame', (force=false) => {
    cy
    .visit("https://test-stfu-applifting.herokuapp.com/666_very_GoodTeamName6")
});