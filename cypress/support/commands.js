Cypress.Commands.add('searchUsername', (username) => { 
    cy.get('#username').clear().type(username)
    cy.get('.message-success').should('not.exist')
    cy.get('.submit').click();
 })
