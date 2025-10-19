# 🤖 Automação BDD com CodeceptJS

Este projeto utiliza o **CodeceptJS** para escrever testes End-to-End com uma sintaxe BDD (Behavior-Driven Development) limpa e focada no usuário. A principal vantagem é a abstração do *driver* subjacente (Playwright, WebDriver, etc.), permitindo flexibilidade e manutenção simplificada.

## ✨ Destaques
- Cenários de teste escritos em um formato linear e legível (*"I See", "I Click"*).
- Suporte nativo ao **Page Object Model (POM)** para organização do código.
- **Driver Agnóstico**: Permite alternar facilmente entre Puppeteer, Playwright ou WebDriver.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto:**
    ```bash
    cd codeceptjs
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute os testes:**
    ```bash
    npx codeceptjs run --steps
    ```
4.  **Execute em modo UI (para debug visual):**
    ```bash
    npx codeceptjs run --ui
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **CodeceptJS** | Framework de testes BDD de alto nível. |
| **JavaScript/TypeScript** | Linguagem para escrita dos testes. |
| **Playwright/WebDriver** | *Driver* de automação configurado para interagir com o navegador. |
| **Node.js** | Ambiente de execução. |