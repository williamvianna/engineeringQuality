# 🔌 Simulação de API com WireMock (Stubbing e Mocking)

Este projeto demonstra como utilizar o WireMock para simular comportamentos de APIs externas. A prática de *stubbing* e *mocking* é essencial para testes de integração estáveis, isolamento de dependências e simulação de falhas.

## ✨ Destaques
- Definição de stubs com diferentes respostas (sucesso, 404, 500).
- Verificação de requisições recebidas (*request verification*).
- Uso em modo *standalone* (Jar) ou como biblioteca (Java).

## ⚙️ Configuração (Modo Standalone)

1.  **Baixe o WireMock JAR** (se não for usar como dependência).
2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/wiremock-stubbing-examples.git](https://github.com/williamvianna/wiremock-stubbing-examples.git)
    cd wiremock-stubbing-examples
    ```
3.  **Inicie o WireMock com as definições JSON:**
    ```bash
    java -jar wiremock-standalone.jar --port 8080 --root-dir src/main/resources
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **WireMock** | Ferramenta para mocking e stubbing de APIs HTTP. |
| **JSON** | Linguagem para definição dos stubs e mapeamentos. |
| **Java** | (Se aplicável) Uso como biblioteca em testes unitários/de integração. |