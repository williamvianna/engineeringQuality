/// <reference types="cypress" />

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'

describe('Cadastro de usuário', () => {
  
  beforeEach('Acessar cadastro de usuário', () => {
    commum_page.acessarCadastroUsuario()
  });
  it('Campo Nome vazio', () => {
    cadastro_page.clicarCadastrar()
    cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
  })

  it('Campo E-mail vazio', () => {

})

  it('Campo E-mail inválido', () => {

})

  it('Campo Senha vazio', () => {

})

  it('Campo Senha inválido', () => {

})

it('Cadastro com sucesso', () => {

  })
});