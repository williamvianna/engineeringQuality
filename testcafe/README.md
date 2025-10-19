# ☕ Testes End-to-End com TestCafe

Coleção de testes E2E desenvolvidos com o **TestCafe**. Este framework se destaca por sua arquitetura ***driverless***, que elimina problemas comuns de sincronização e *flakiness* (instabilidade) da automação web tradicional.

## ✨ Destaques
- Testes rápidos e estáveis, **sem a necessidade de gerenciar WebDrivers** (arquitetura injetada).
- Suporte nativo à espera automática de elementos e requisições AJAX.
- Execução em múltiplos navegadores e em nuvens de testes a partir de um único comando.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto TestCafe:**
    ```bash
    cd testcafe
    ```
2.  **Instale as dependências (incluindo o TestCafe):**
    ```bash
    npm install
    ```
3.  **Execute os testes (Exemplo em Chrome):**
    ```bash
    npx testcafe chrome tests/
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **TestCafe** | Framework de testes End-to-End. |
| **JavaScript/TypeScript** | Linguagem para escrita dos testes. |
| **Node.js** | Ambiente de execução. |
| **Driverless Architecture** | Arquitetura principal que garante a estabilidade. |
