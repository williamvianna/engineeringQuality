/// <reference types="cypress" />

describe('Asserts', () => {
 
  it('Verificar se está visível', () => {
    cy.visit('/')
        .get('.header-logo')

    cy.get('.fa-user')
        .should('be.visible')
        .click()

    cy.get('.account_form > h3')
        .should('be.visible')
    
    cy.get('.account_form > h3')
        .should('contain', 'Login')
        .should('have.text', 'Login')

    cy.get('.account_form > h3')
        .then((element) => {
            expect(element.text()).eq('Login')
            expect(element).to.be.visible
            expect(element).not.disabled
        })

  })

});