let selectors = require('../../fixtures/selectors.json');
let context = require('../../fixtures/context.json');

describe('Testing team name input', function() {

    beforeEach(() => {
        cy.appSetup()
    })

    it('1.1 - The team name should not be created if the input is empty. The input should have the "required" attribute', function () {
        cy
        .get(selectors.teamNameInput).clear()
        .get(selectors.teamNameInput)
        .should('have.attr', 'required')
    });
  
    it(`1.2 - The team name should be created with the correct input: ${context.correctTeamNameLettersOnly}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersOnly)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameLettersOnly}`)
    });

    it(`1.3 - The team name should be created if only digits were inserted: ${context.correctTeamNameDigitsOnly}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameDigitsOnly)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameDigitsOnly}`)
  });

    it(`1.4 - The team name should be created if the combination of letters and numbers was inserted: ${context.correctTeamNameLettersDigitsCombo}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersDigitsCombo)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameLettersDigitsCombo}`)
    });

    it(`1.5 - The team name should be created if the combination of letters, numbers and underscores was inserted: ${context.correctTeamNameLettersDigitsUnderscoreCombo}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersDigitsUnderscoreCombo)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameLettersDigitsUnderscoreCombo}`)
    });

    it(`1.6 - The team name should be created if at least one valid character was inserted: ${context.correctTeamNameShortest}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameShortest)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameShortest}`)
    });

    it(`1.7 - The team name should not be created with the incorrect input containing special characters: ${context.incorrectTeamNameSpecialChar}`, function () {
    cy
        .get(selectors.teamNameInput).type(context.incorrectTeamNameSpecialChar)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', context.errorMessageTeamNameForbiddenChar)
    });

    it(`1.8 - The team name should not be created with the incorrect input containing diacritis: ${context.incorrectTeamNameDiacritics}`, function () {
        cy
            .get(selectors.teamNameInput).type(context.incorrectTeamNameDiacritics)
            .get(selectors.submitTeamNameBtn).click()
            .get(selectors.errorMessage)
            .should('be.visible')
            .and('contain', context.errorMessageTeamNameForbiddenChar)
        });

    it(`1.9 - The team name should not be created with the incorrect input containing spaces: ${context.incorrectTeamNameTextWithSpaces}`, function () {
    cy
        .get(selectors.teamNameInput).type(context.incorrectTeamNameTextWithSpaces)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', context.errorMessageTeamNameSpaces)
    });

    it(`1.10 - The team name should not be created if the input is too long: ${context.incorrectTeamNameTooLong}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.incorrectTeamNameTooLong)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', context.errorMessageTeamNameTooLong)
    });

    it(`1.11 - The team name should not be created if the inserted name already exists: ${context.correctTeamNameLettersOnly}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersOnly)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', context.errorMessageTeamNameDuplicate)
    });

    it('1.12 - Nothing should happen after you click the team input field and then click the white space under it', function () {
        cy
        .get(selectors.teamNameInput).clear()
        .get(selectors.teamNameInput).click()
        .get(selectors.teamNameInputContainer).click()
        .get(selectors.errorMessage)
        .should('not.be.visible')
    });
});