import * as selectors from '../common/selectors';
import { v4 as uuid } from 'uuid';

context('Project', () => {
    beforeEach(() => {
      cy.visit(selectors.url);
    });
  
    specify('Add & import project button should be visible', () => {
        cy.navigateToProjectsPage();
        cy.get(selectors.addProjectButtonSelector);
        cy.get(selectors.importProjectButtonSelector);
    });

    specify('User should have possibility to add new blank project', () => {
        cy.navigateToProjectsPage();
        cy.get(selectors.addProjectButtonSelector).click();
        cy.findByLabelText('Please enter name').type('sample project with correct name ' + uuid());
        cy.findByText('Add project').click();
    });

    specify('Newly added project should be visible on the project list', () => {
        const newProjectName = 'sample project with correct name ' + uuid();
        cy.navigateToProjectsPage();
        cy.get(selectors.addProjectButtonSelector).click();
        cy.findByLabelText('Please enter name').type(newProjectName);
        cy.findByText('Add project').click();
        cy.wait(1000);
        cy.go('back');
        cy.findByText(newProjectName);
    });

    specify('User should have possibility to start/close project', () => {
        const newProjectName = 'sample project with correct name ' + uuid();
        cy.navigateToProjectsPage();
        cy.get(selectors.addProjectButtonSelector).click();
        cy.findByLabelText('Please enter name').type(newProjectName);
        cy.findByText('Add project').click();
        cy.wait(1000);
        cy.go('back');
        cy.wait(1000);
        let projects = cy.get(selectors.projectTableSelector);
        projects.children().each((elem) => {
            if (elem.children()[0] && elem.children()[0].textContent === newProjectName) {
                elem.children()[1].children[0].dispatchEvent(new Event('click'));
            }
        });
        cy.findByText('Yes').click();
    });
});
