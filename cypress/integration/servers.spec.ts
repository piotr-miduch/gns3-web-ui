context('Server', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200/servers');
    });
  
    it('Add server button should be visible', () => {
        cy.get('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.buttons-bar > button');
    });

    it('User should have possibility to add detected server', () => {
        cy.get('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > app-server-discovery > mat-card > mat-card-actions > button:nth-child(2)');
    });

    it('User should see added server in the list', () => {
        cy.get('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > app-server-discovery > mat-card > mat-card-actions > button:nth-child(2)')
            .click();

        cy.wait(100);

        cy.get('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.mat-elevation-z8 > mat-table > mat-row');
    });
});
