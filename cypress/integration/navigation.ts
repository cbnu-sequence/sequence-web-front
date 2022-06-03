/// <reference types="Cypress"/>

describe('Navigation', () => {
  it('should navigate to the login page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__right > :nth-child(1) > a').click();
    cy.url().should('include', '/login');
    cy.get('label').contains('이메일 주소');
  });

  it('should navigate to the signup page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get('.header__right > :nth-child(2) > a').click();
    cy.url().should('include', '/signup');

    // The new page should contain an h1 with "About page"
    cy.get('label').contains('이름');
  });
});
