describe("Testing the twitter homepage", () => {
  it("Should display a welcome", () => {
    cy.visit('http://localhost:4200');
    cy.contains("Welcome To Twitter");
  })

  it("Should contain a form title", () => {
    cy.visit('http://localhost:4200');
    cy.contains("Login");
  })

  it("Should contain username input title", () => {
    cy.visit('http://localhost:4200');
    cy.contains("username");
  })

  it("Should contain username input element", () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-test="usernameInput"]').should('exist');
  })

  it("Should contain password input title", () => {
    cy.visit('http://localhost:4200');
    cy.contains("password");
  })

  it("Should contain password input element", () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-test="passwordInput"]').should('exist');
  })

  it("redirect to the index page when we click on submit", () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-test="formSubmit"]')
      .click();
    cy.location('pathname').should('eq', '/index')
  })
})