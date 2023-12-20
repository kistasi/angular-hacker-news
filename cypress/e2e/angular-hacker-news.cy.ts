describe('AngularHackerNews E2E tests', () => {
  it('header', () => {
    cy.visit('/')
    cy.contains('AngularHackerNews')
  })
})
