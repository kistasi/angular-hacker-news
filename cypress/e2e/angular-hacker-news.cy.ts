describe('AngularHackerNews E2E tests', () => {
  beforeEach(() => cy.visit('/'));

  it('checks the header', () => {
    cy.contains('AngularHackerNews');
  });

  it('checks if we have 30 stories rendered', () => {
    cy.get('article.story').should('have.length', 30);
  });

  it('checks the footer', () => {
    cy.contains('Made by kistasi for Genesys in late 2023.');
  });
});
