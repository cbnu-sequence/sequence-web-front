/// <reference types="Cypress"/>

describe('Navigation', () => {
  it('should navigate to the login page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__right > :nth-child(1) > a').click();
    cy.url().should('include', '/login');
    cy.get('label').contains('이메일');
  });

  it('should navigate to the signup page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__right > :nth-child(2) > a').click();
    cy.url().should('include', '/signup');
    cy.get('label').contains('이름');
  });

  it('should navigate to the introduce sequence page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__menulist > :nth-child(1)').click();
    cy.url().should('include', '/introduce');
  });
});
