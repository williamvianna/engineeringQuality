# 📦 JavaScript / Fundamentos e Testes Unitários

Este projeto é um *showcase* de fundamentos da linguagem **JavaScript (ES6+)** aplicados no contexto de Engenharia de Qualidade, com foco em lógica de programação e testes de unidade.

## 🎯 Objetivo

* Demonstrar proficiência nos fundamentos do JavaScript moderno (manipulação de arrays, Promises, async/await, classes).
* Implementar **testes unitários** para a lógica de negócio, garantindo a robustez do código antes de ser usado em frameworks de automação (como Cypress ou Playwright).

## 🛠 Tecnologias

| Tecnologia | Descrição |
| :--- | :--- |
| **Linguagem:** | JavaScript (ES6+) |
| **Ambiente:** | Node.js |
| **Testes Unitários:** | **Jest** (ou outra ferramenta configurada, como Mocha/Chai) |

## 📁 Estrutura do Projeto

* `src/`: Contém a lógica de negócio (funções, classes) a ser testada.
* `tests/`: Contém os arquivos de testes unitários (`.spec.js` ou `.test.js`).
* `package.json`: Configuração do projeto e scripts para rodar testes.

## ⚙️ Como Executar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto:**
    ```bash
    cd javascript
    ```
2.  **Instalação das dependências:**
    ```bash
    npm install
    ```
3.  **Execução dos Testes:**
    ```bash
    npm test
    ```