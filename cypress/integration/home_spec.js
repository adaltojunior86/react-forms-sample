describe('home actions', () => {
  it('page should be loaded', () => {
    cy.visit('http://localhost:5000');
    cy.get('header > div > h3').contains('React Forms')
  })
})