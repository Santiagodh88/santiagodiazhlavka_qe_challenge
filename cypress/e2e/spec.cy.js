describe('Get Github repos', () => {

  beforeEach(() =>{
    cy.visit('')

  })

  it('search username with repositories', () => {
    cy.searchUsername('santiagodh88')
    cy.get('.message-success').should('be.visible')
  })

  it('search username with no repositories', () => {
    cy.searchUsername('santiagodhinvalid ')
    cy.get('.message-failure').should('be.visible')
    cy.contains('No repos').should('be.visible')
  })

  it('search with empty username', () => {
    cy.searchUsername(' ')
    cy.get('.message-failure').should('be.visible')
    cy.contains('No repos').should('be.visible')
  })

  it('count results', () => {
    cy.searchUsername('santiagodh88')
    cy.get('.repo-list-container').find('li').should('have.length', 8)
  })

  it('check no undefined in the links', () => {
    cy.searchUsername('santiagodh88')
    //Check every anchor link does not has an undefined in the middle
    cy.get("a").each($a => {
      const message = $a.text();
      expect($a, message).to.have.attr("href").not.contain("undefined");
    });
  })

  it('verify page title', () => {
    cy.title().should('eq', 'Get Github Repos')
  })

})