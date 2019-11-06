describe("Testing the twitter homepage", () => {
  it("Should display a welcome", () => {
    cy.visit('http://localhost:4200');
    cy.contains("Welcome To Twitter");
  })

  it("Should contain username input element", () => {
    cy.get('[data-test="loginButton"]')
      .click();
    cy.get('[data-test="usernameInput"]').should('exist');
  })

  it("Should contain password input element", () => {
    cy.get('[data-test="passwordInput"]').should('exist');
  })

  it("redirect to the index page when we click on submit", () => {
    cy.get('[data-test="formSubmit"]')
      .click();
    cy.location('pathname').should('eq', '/index')
  })
})