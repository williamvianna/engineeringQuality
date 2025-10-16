# 🤖 Automação BDD com CodeceptJS

Este projeto utiliza o CodeceptJS para escrever testes End-to-End com uma sintaxe BDD (Behavior-Driven Development) limpa e focada no usuário. A principal vantagem é a abstração do *driver* subjacente (Playwright, WebDriver, etc.).

## ✨ Destaques
- Cenários de teste escritos em um formato linear e legível.
- Suporte nativo ao Page Object Model (POM).
- Driver agnóstico: permite alternar facilmente entre Puppeteer, Playwright ou WebDriver.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/codeceptjs-bdd-automation.git](https://github.com/williamvianna/codeceptjs-bdd-automation.git)
    cd codeceptjs-bdd-automation
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute os testes:**
    ```bash
    npx codeceptjs run --steps
    ```
4.  **Execute em modo UI (para debug):**
    ```bash
    npx codeceptjs run --ui
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **CodeceptJS** | Framework de testes BDD. |
| **JavaScript/TypeScript** | Linguagem para escrita dos testes. |
| **Playwright/WebDriver** | *Driver* de automação configurado. |