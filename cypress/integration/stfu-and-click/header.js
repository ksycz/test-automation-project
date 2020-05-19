let selectors = require('../../fixtures/selectors.json');
let context = require('../../fixtures/context.json');

describe('Testing link in header', function() {

    beforeEach(() => {
        cy.appSetup()
    })

    it('5.1 - The link/logo in the header should open the website', function () {
        cy
        .get(selectors.headerLink)
        .should('have.attr', 'href').and('include', context.headerLink)
        .then((href) => {
        cy.visit(href)
        })
    });
});