# 🧪 Projeto de Automação E2E com Cypress

Este projeto contém uma coleção de testes End-to-End (E2E) desenvolvidos utilizando o **Cypress**. Focado em qualidade e velocidade, o projeto demonstra as melhores práticas para a automação de testes de interface moderna.

## ✨ Destaques
- Estrutura de pastas organizada para testes, fixtures e comandos personalizados.
- Uso de recursos avançados do Cypress, como `cy.intercept()` para **mock de API** e isolamento de testes de front-end.
- Implementação de testes resilientes e tolerantes a falhas.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Cypress:**
    ```bash
    cd cypress
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Abra o Cypress Test Runner (Modo Interativo):**
    ```bash
    npx cypress open
    ```
4.  **Execute os testes via linha de comando (Headless):**
    ```bash
    npx cypress run
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Cypress** | Framework de testes End-to-End moderno. |
| **JavaScript/TypeScript** | Linguagem principal para escrita dos testes. |
| **Mocha/Chai** | Utilizados internamente pelo Cypress para estruturação e asserções. |
| **Node.js** | Ambiente de execução. |