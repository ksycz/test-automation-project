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

    it('2.4 - The number of clicks before clicking the Click! button should be lower than the number after click', function () {
        cy.get(selectors.activeTeamNameRowClicks).invoke('text').then((initialNr) => {
            cy.get(selectors.clickActionBtn).click()
            cy.get(selectors.activeTeamNameRowClicks).invoke('text').should((updatedNr) => {
            expect(parseInt(initialNr)).to.be.lessThan(parseInt(updatedNr))
            })
        })
    })

    it.skip('2.6 - The number of clicks should not change after pressing the Enter key on the keyboard', function () {
        cy.get(selectors.activeTeamNameRowClicks).invoke('text').then((initialNr) => {
            for (let i = 0; i < 10; i++) {
                cy.get(selectors.clickActionBtn).trigger('mouseover').trigger('keydown', { keycode: 13, release: false })
                cy.get(selectors.clickActionBtn).trigger('mouseover').trigger('keypress', { keycode: 13, release: false })
                cy.wait(50)
              }
            cy.get(selectors.activeTeamNameRowClicks).invoke('text').should((updatedNr) => {
            expect(parseInt(initialNr)).to.be.eq(parseInt(updatedNr))
            })
        })
    })
});