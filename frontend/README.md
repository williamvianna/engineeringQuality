# 🌐 Testes de Frontend (JavaScript, HTML e CSS)

Este repositório foca em estratégias de testes de interface do usuário (UI) na camada de apresentação, cobrindo interações do lado do cliente, validação de formulários e integridade visual dos elementos.

## ✨ Destaques
- Exemplos de testes unitários e de integração para componentes de frontend.
- Uso de bibliotecas de testes de renderização (**Testing Library**), focadas na experiência real do usuário.
- Verificação de **acessibilidade** e *responsiveness* em diferentes viewports (se aplicável).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Frontend:**
    ```bash
    cd frontend-tests
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute os testes (Unitários/Integração):**
    ```bash
    npm run test
    ```
*(Consulte o arquivo `package.json` nesta pasta para comandos de script específicos)*

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **JavaScript/TypeScript** | Linguagens principais para o frontend. |
| **Jest / Vitest** | Frameworks de testes unitários e de integração de alta velocidade. |
| **React / Vue / Angular** | (Se aplicável) Frameworks de UI testados e suas bibliotecas de teste específicas. |
| **Testing Library** | Utilitários para simular interações do usuário sem depender da implementação interna do componente. |
