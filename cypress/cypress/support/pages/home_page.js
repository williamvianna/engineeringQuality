/// <reference types="cypress" />

export default {
  accessRegisterPage() {
      cy.get('.account_form > h3')
          .should('contain', 'Cadastro de usuário')
  },

  accessLogin() {
      cy.visit('/')
          .get('#top_header')

      cy.get('.fa-user')
          .click()
  }
}