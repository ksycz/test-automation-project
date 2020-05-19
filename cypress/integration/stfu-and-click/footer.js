let selectors = require('../../fixtures/selectors.json');
let context = require('../../fixtures/context.json');

describe('Testing link in footer', function() {

    beforeEach(() => {
        cy.appSetup()
    })

    it('6.1 - The link in the footer should open the Applifting website', function () {
        cy
        .get(selectors.footerLink)
        .should('have.attr', 'href').and('eq', context.footerLink)
        .then((href) => {
        cy.visit(href)
        })
    });
});