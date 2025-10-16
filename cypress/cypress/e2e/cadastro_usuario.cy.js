/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import resgister_page from '../support/pages/resgister_page';
faker.locale = 'pt_BR'

const userData = require('../fixtures/cadastro_valido.json')

  describe('Cadastro de usuário', () => {

    let name;
    let email;
    let password;

    beforeEach(() => {
      name = faker.person.fullName()
      email = faker.internet.email()
      password = faker.internet.password({length:6})

      cy.visit('register')
    })

    it('Validar acesso a página cadastro', () => {
      home_page.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
      resgister_page.saveRegister()
      resgister_page.checkMessage('O campo nome deve ser prenchido')    
    })

    it('Validar campo e-mail vazio', () => {
      resgister_page.fillName(userData.name)
      resgister_page.saveRegister()
      resgister_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
      resgister_page.fillName(name)
      resgister_page.saveRegister()
      resgister_page.fillEmail('emailinvalido')
      resgister_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Validar campo senha vazio', () => {
      resgister_page.fillName(name)
      resgister_page.saveRegister()
      resgister_page.fillEmail(email)
      resgister_page.saveRegister()
      resgister_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })
    
    it('Validar campo senha inválido', () => {
      resgister_page.fillName(name)
      resgister_page.saveRegister()
      resgister_page.fillEmail(email)
      resgister_page.saveRegister()
      resgister_page.fillPassword(12345)
      resgister_page.saveRegister()
      resgister_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

  it('Cadastro realizado com sucesso', () => {
    resgister_page.fillName(name)
    resgister_page.saveRegister()
    resgister_page.fillEmail(email)
    resgister_page.saveRegister()
    resgister_page.fillPassword(password)
    resgister_page.saveRegister()
    resgister_page.checkRegisterSuccess(name)
    })

  })