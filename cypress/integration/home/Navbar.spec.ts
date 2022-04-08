describe("Navigation Bar (Navbar) component unit test", () => {
  context("Desktop Viewport", () => {
    beforeEach(() => {
      cy.viewport("macbook-11");
      cy.visit("/");
      cy.scrollTo(0, 0);
    });

    it('Mobile menu should be visible', () => {
        cy.get('nav .menu').should('be.visible')
    })
    });

  context("Mobile Viewport", () => {
    beforeEach(() => {
      cy.viewport("samsung-note9");
      cy.visit("/");
      cy.scrollTo(0, 0);
    });

    it('Mobile menu should not be visible', () => {
        cy.get('nav .menu').should('not.be.visible')
    })
  });
});