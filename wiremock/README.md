# 🔌 Simulação de API com WireMock (Stubbing e Mocking)

Este projeto demonstra como utilizar o **WireMock** para simular comportamentos de APIs externas. A prática de ***stubbing*** e ***mocking*** é essencial para testes de integração estáveis, isolamento de dependências e simulação de cenários de falha.

## ✨ Destaques
- Definição de stubs com diferentes respostas (sucesso, 404/500, latência, etc.).
- Verificação de requisições recebidas (*request verification*) para garantir que o cliente está chamando a API corretamente.
- Uso em modo *standalone* (Jar) para testes end-to-end ou como biblioteca (Java) para testes de integração de back-end.

## ⚙️ Configuração (Modo Standalone)

Assumindo que você já clonou o monorepo central (`engineeringQuality`) e baixou o WireMock JAR:

1.  **Navegue para a pasta do projeto WireMock:**
    ```bash
    cd wiremock
    ```
2.  **Inicie o WireMock com as definições JSON:**
    ```bash
    # Este comando irá iniciar o servidor e carregar os stubs da pasta 'mappings'
    java -jar wiremock-standalone.jar --port 8080 --root-dir src/main/resources
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **WireMock** | Ferramenta para mocking e stubbing de APIs HTTP/HTTPS. |
| **JSON** | Linguagem para definição dos stubs e mapeamentos na pasta `mappings/`. |
| **Java** | (Se aplicável) Uso como biblioteca em testes unitários/de integração Java/Kotlin. |