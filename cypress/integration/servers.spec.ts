import * as selectors from '../common/selectors';

context('Server', () => {
    beforeEach(() => {
      cy.visit(selectors.url);
    });
  
    specify('Add server button should be visible', () => {
        cy.get(selectors.addServerButtonSelector);
    });

    specify('User should have possibility to add detected server', () => {
        if (!cy.get(selectors.addedServerSelector)) {
            cy.get(selectors.addDetectedServerButtonSelector);
        }
    });

    specify('User should see added server in the list', () => {
        if (!cy.get(selectors.addedServerSelector)) {
            cy.get(selectors.addDetectedServerButtonSelector)
                .click();
            cy.get(selectors.addedServerSelector);   
        }
    });
});
