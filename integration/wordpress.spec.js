/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost/wp-login.php')
  })

  it('should be logging', () => {
    cy.get('#loginform')
      .find('[type="text"]').type('testuser')
    cy.get('#loginform')
      .find('[type="password"]').type('testpass')
    cy.get('#loginform').submit()
    cy.contains('Dashboard')
  })


})
