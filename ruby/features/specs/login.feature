# language: pt

Funcionalidade: Login

- Eu como area da qualidade
- Quero que seja realizado a automação do Login
- Para que o time ganhe tempo com os testes

@login
Cenario: Efetuar login com sucesso

Dado que eu esteja na pagina de login do projeto Qa.Coders
Quando informo os dados de acesso
E clico no botão "Entrar"
Então sou direcionado para a página home logada