import * as selectors from '../common/selectors';
import { v4 as uuid } from 'uuid';

context('Project map', () => {
    beforeEach(() => {
      cy.visit(selectors.url);
    });

    specify('User should have possibility to add new node', () => {
        cy.navigateToProjectsPage();
        cy.get(selectors.addProjectButtonSelector).click();
        cy.findByLabelText('Please enter name').type('sample project with correct name ' + uuid());
        cy.findByText('Add project').click();
        cy.wait(1000);
        cy.visit('http://localhost:4200/server/2/project/cd788bde-ff0c-43d9-acc6-73d08a9f8a0f');
        cy.get(selectors.addNodeButtonSelector).click();
        cy.findByText('Open dialog to configure').click();
        cy.wait(1000);
        cy.get('#mat-select-20').contains('VPCS').click({ force: true });
        cy.findByText('Add').click();
    });
});
