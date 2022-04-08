const element = "section:nth-of-type(1)";

describe("Introduction Section End-To-End Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(element).scrollIntoView();
  });

  it("Introduction Section should be visible", () => {
    cy.get(element).should("be.visible");
  });
});
