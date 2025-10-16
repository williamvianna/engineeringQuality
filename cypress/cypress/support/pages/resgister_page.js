/// <reference types="cypress" />

// Elementos
const elements = {
  buttons: {
    register: '#btnRegister'
  },
  fields: {
    name: '#user',
    email: '#email',
    password: '#password'
  },
  messages: {
    error: '#errorMessageFirstName',
    successTitle: '#swal2-title',
    successSubtitle: '#swal2-html-container'
  }
}

// Ações/Métodos/Funções
export default {
  saveRegister() {
  cy.get(elements.buttons.register)
      .should('be.visible')
      .click()
  },

  fillEmail(email) {
    cy.get(elements.fields.email)
        .type(email)
  },

  fillName(name) {
    cy.get(elements.fields.name)
        .type(name)
  },

  fillPassword(password) {
    cy.get(elements.fields.password)
      .type(password)
  },

  checkMessage(message) {
    cy.get(elements.messages.error)
        .should('be.visible')
        .should('contain', message)
  },

  checkRegisterSuccess(name) {
  cy.get(elements.messages.successTitle)
      .should('be.visible') 
  cy.get(elements.messages.successSubtitle)
      .should('be.visible')
      .should('contain', `Bem-vindo ${name}`)
  }
}