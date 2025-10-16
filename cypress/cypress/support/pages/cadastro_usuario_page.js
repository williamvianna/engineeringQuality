/// <reference types="cypress" />

export default {
  clicarCadastrar() {
    cy.get('#btnRegister')
        .click()
  },

  // validarMensagemErro() {
  //   cy.get('.errorLabel')
  //       .then((element) => {
  //         expect(element).to.be.visible
  //         expect(element.text()).eq('O campo nome deve ser prenchido')
  //       })
  // },

   validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
        .should('be.visible')
        .should('have.text', mensagem)
  }
}