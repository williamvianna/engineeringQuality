# 🎭 Testes End-to-End com Playwright

Repositório dedicado à automação de testes End-to-End utilizando o **Playwright**. Este projeto explora a capacidade multi-browser e a execução paralela da ferramenta, garantindo a qualidade em diversas plataformas com alta velocidade.

## ✨ Destaques
- Configuração para execução de testes em **Chromium, Firefox e WebKit** (suporte multi-browser nativo).
- Exemplos de Page Object Model (POM) para organização e reuso de código.
- Demonstração de *trace viewers* para análise detalhada e eficiente de falhas (debug).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Playwright:**
    ```bash
    cd playwright
    ```
2.  **Instale as dependências e os browsers:**
    ```bash
    npm install
    npx playwright install
    ```
3.  **Execute todos os testes:**
    ```bash
    npx playwright test
    ```
4.  **Execute em modo UI (para debug e visualização interativa):**
    ```bash
    npx playwright test --ui
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Playwright** | Framework de testes E2E rápido e robusto. |
| **TypeScript/JavaScript** | Utilizado para a escrita dos casos de teste. |
| **Playwright Test Runner** | Executor nativo com suporte a execução paralela e relatórios. |
| **Node.js** | Ambiente de execução. |
