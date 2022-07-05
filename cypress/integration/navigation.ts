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

  it('should navigate to the introduce sequence page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__menulist > :nth-child(1)').click();
    cy.url().should('include', '/introduce');
  });

  it('should navigate to the project team page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.members_ul').invoke('show');
    cy.get('.members_ul >:nth-child(1) >a').click({ force: true });
    cy.url().should('include', '/projectteam');
  });

  it('should navigate to the techcourse team page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.members_ul').invoke('show');
    cy.get('.members_ul >:nth-child(2) >a').click({ force: true });
    cy.url().should('include', '/techcourseteam');
  });

  it('should navigate to the manager page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.members_ul').invoke('show');
    cy.get('.members_ul >:nth-child(3) >a').click({ force: true });
    cy.url().should('include', '/manager');
  });
  it('should navigate to the notice page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.board_ul').invoke('show');
    cy.get('.board_ul >:nth-child(1) >a').click({ force: true });
    cy.url().should('include', '/notice');
  });
  it('should navigate to the project page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.board_ul').invoke('show');
    cy.get('.board_ul >:nth-child(2) >a').click({ force: true });
    cy.url().should('include', '/project');
  });
  it('should navigate to the sharingInfo page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.board_ul').invoke('show');
    cy.get('.board_ul >:nth-child(3) >a').click({ force: true });
    cy.url().should('include', '/sharinginfo');
  });
  it('should navigate to the pomodoro page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.header__menulist > :nth-child(4) >a').click();
    cy.url().should('include', '/pomodoro');
  });
});
