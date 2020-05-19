let selectors = require('../../fixtures/selectors.json');
let context = require('../../fixtures/context.json');

describe('Testing team name input', function() {

    beforeEach(() => {
        cy.appSetup()
    })

    it('1.1 - The team name should not be created if the input is empty', function () {
        cy
        .get(selectors.teamNameInput).clear()
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', 'Team name contains forbidden characters')
    });
  
    it('1.2 - The team name should be created with the correct input', function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersOnly)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameLettersOnly}`)
    });

    it('1.3 - The team name should be created if only digits were inserted', function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameDigitsOnly)
        .get(selectors.submitTeamNameBtn).click()
        .location('pathname').should('eq', `/${context.correctTeamNameDigitsOnly}`)
  });

    it('1.4 - The team name should be created if the combination of letters and numbers was inserted', function () {
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
        .and('contain', 'Team name contains forbidden characters')
    });

    it(`1.8 - The team name should not be created with the incorrect input containing diacritis: ${context.incorrectTeamNameDiacritics}`, function () {
        cy
            .get(selectors.teamNameInput).type(context.incorrectTeamNameDiacritics)
            .get(selectors.submitTeamNameBtn).click()
            .get(selectors.errorMessage)
            .should('be.visible')
            .and('contain', 'Team name contains forbidden characters')
        });

    it(`1.9 - The team name should not be created with the incorrect input containing spaces: ${context.incorrectTeamNameTextWithSpaces}`, function () {
    cy
        .get(selectors.teamNameInput).type(context.incorrectTeamNameTextWithSpaces)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', 'The team name cannot contain spaces. Please create a new name.')
    });

    it('1.10 - The team name should not be created if only the space was inserted', function () {
    cy
        .get(selectors.teamNameInput).type(' ')
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', 'The team name contains only space(s). Please insert some letters and/or digits to create the name.')
    });

    it(`1.11 - The team name should not be created if the input is too long, for example: ${context.incorrectTeamNameTooLong}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.incorrectTeamNameTooLong)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', 'The team name is too long. Please insert the name that has no more than 21 characters')
    });

    it(`1.12 - The team name should not be created if the inserted name already exists, for example: ${context.correctTeamNameLettersOnly}`, function () {
        cy
        .get(selectors.teamNameInput).type(context.correctTeamNameLettersOnly)
        .get(selectors.submitTeamNameBtn).click()
        .get(selectors.errorMessage)
        .should('be.visible')
        .and('contain', 'The inserted team name already exists. Please create a unique name.')
    });
});