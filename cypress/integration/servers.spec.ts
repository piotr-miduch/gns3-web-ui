context('Server', () => {
    const url = 'http://localhost:4200/servers';
    const addDetectedServerButtonSelector = 'body > app-root > app-default-layout > main > app-server-list > div > div.default-content > app-server-discovery > mat-card > mat-card-actions > button:nth-child(2)';
    const addServerButtonSelector = 'body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.buttons-bar > button';
    const addedServerSelector = 'body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.mat-elevation-z8 > mat-table > mat-row';

    beforeEach(() => {
      cy.visit(url);
    });
  
    specify('Add server button should be visible', () => {
        cy.get(addServerButtonSelector);
    });

    specify('User should have possibility to add detected server', () => {
        if (!cy.get(addedServerSelector)) {
            cy.get(addDetectedServerButtonSelector);
        }
    });

    specify('User should see added server in the list', () => {
        if (!cy.get(addedServerSelector)) {
            cy.get(addDetectedServerButtonSelector)
                .click();
            cy.get(addedServerSelector);   
        }
    });
});
