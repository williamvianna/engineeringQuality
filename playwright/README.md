# 🎭 Testes End-to-End com Playwright

Repositório dedicado à automação de testes End-to-End utilizando o Playwright. Este projeto explora a capacidade multi-browser e a execução paralela da ferramenta, garantindo a qualidade em diversas plataformas.

## ✨ Destaques
- Configuração para execução de testes em **Chromium, Firefox e WebKit**.
- Exemplos de Page Object Model (POM) para organização e reuso de código.
- Demonstração de *trace viewers* para análise detalhada de falhas.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/playwright-tests.git](https://github.com/williamvianna/playwright-tests.git)
    cd playwright-tests
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
4.  **Execute em modo UI (para debug):**
    ```bash
    npx playwright test --ui
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Playwright** | Framework de testes E2E rápido e robusto. |
| **TypeScript/JavaScript** | Utilizado para a escrita dos casos de teste. |
| **Playwright Test Runner** | Executor nativo com suporte a execução paralela. |