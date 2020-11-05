import * as selectors from '../common/selectors';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add("navigateToProjectsPage", () => {
    cy.visit(selectors.url);
    if (!cy.get(selectors.addedServerSelector)) {
        cy.get(selectors.addDetectedServerButtonSelector);
    }
    cy.get(selectors.serverSelector).click();
});
