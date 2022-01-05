/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it('Should login when all fields are entered', () => {
        cy.get('input[name="email"]').type('polina@abv.bg');
        cy.get('input[name="password"]').type('polina');
        cy.get('button[class="btn-primary"]').contains('Continue').click();
        cy.contains('h1', 'Offers').should('be.visible');
    });

    it('Should show error when user email is not entered', () => {
        cy.get('input[name="email"]').focus();
        cy.get('input[name="email"]').blur();
        cy.contains('Enter a valid email.').should('be.visible');
    });

    it('Should show error when user password is not entered', () => {
        cy.get('input[name="password"]').focus();
        cy.get('input[name="password"]').blur();
        cy.contains('Password should contain only numbers and letters').should('be.visible');
    });

    it('Should show error message for entered invalid user', () => {
        cy.get('input[name="email"]').type('notvalid@abv.bg');
        cy.get('input[name="password"]').type('notvalid');
        cy.get('button[class="btn-primary"]').contains('Continue').click();
        cy.contains('.Toastify', 'Error: No such user');
    });

    it('Should show error message when entered password is invalid', () => {
        cy.get('input[name="email"]').type('polina@abv.bg');
        cy.get('input[name="password"]').type('notvalid');
        cy.get('button[class="btn-primary"]').contains('Continue').click();
        cy.contains('.Toastify', 'Error: Incorrect password');
    });
});