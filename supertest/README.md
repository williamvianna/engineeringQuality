# 🔌 Testes de API com Supertest (Node.js)

Este projeto implementa testes de integração e funcionalidade para APIs Node.js utilizando o **Supertest**. A biblioteca se integra perfeitamente com frameworks de teste como Jest ou Mocha para uma experiência fluente e concisa.

## ✨ Destaques
- Sintaxe *fluent* para fazer requisições HTTP e validar respostas (status code, headers, body).
- Capacidade de testar servidores HTTP Node.js **sem a necessidade de subir uma porta** (testes de integração eficientes).
- Exemplos de teste de autenticação, manipulação de cookies e validação de schema.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Supertest:**
    ```bash
    cd supertest
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute os testes (usando o script de teste definido no `package.json`):**
    ```bash
    npm test
    ```
*(Consulte o arquivo `package.json` para o comando de teste exato, ex: `jest`, `mocha`)*

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Supertest** | Biblioteca para testes de requisições HTTP no ambiente Node.js. |
| **Node.js** | Ambiente de execução. |
| **Jest / Mocha** | Frameworks de teste para estruturar e rodar os casos. |