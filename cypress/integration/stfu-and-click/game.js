let selectors = require('../../fixtures/selectors.json');
let context = require('../../fixtures/context.json');

describe('Testing the game screen', function() {

    before(() => {
        cy.openGame()
    })

    it('2.1 - The URL for team should be the same as the currently opened website', function () {
        cy
        .get(selectors.inputLinkForTeam)
        .should('have.value', context.linkForTeam)
    });
});