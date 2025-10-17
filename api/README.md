# 🔌 Coleção de Testes de API REST (Postman / REST Assured)

Este projeto contém coleções de testes de API focadas em validação funcional e de saúde de serviços REST. Dependendo da implementação, utiliza o Postman para testes manuais/automatizados ou uma biblioteca programática como o REST Assured (Java) ou Supertest (Node.js).

## ✨ Destaques
- Cobertura de diferentes verbos HTTP (GET, POST, PUT, DELETE).
- Validação de status codes, schemas (JSON/XML) e dados de resposta.
- Uso de variáveis de ambiente para diferentes contextos (staging, produção).

## 📂 Estrutura do Projeto

O repositório é tipicamente estruturado em:
- **`collections/`**: Arquivos de coleção do Postman (`.json`).
- **`environments/`**: Arquivos de variáveis de ambiente do Postman.
- **`src/test/java/` (ou similar)**: Código fonte dos testes de API programáticos.

## 🚀 Como Rodar

Assumindo que você está no diretório raiz do monorepo (`engineeringQuality`):

### Opção 1: Via Postman
1.  Importe os arquivos `.json` das pastas `collections/` e `environments/` para o seu Postman.
2.  Selecione o ambiente desejado.
3.  Utilize o **Collection Runner** para executar a suíte completa (ou via Newman).

### Opção 2: Via Código (Ex: REST Assured)
1.  **Navegue para a pasta do projeto API:**
    ```bash
    cd api
    ```
2.  **Instale as dependências** (Maven/Gradle/npm, dependendo da linguagem usada nesta subpasta).
3.  **Execute os testes a partir da linha de comando:**
    ```bash
    # Exemplo para projeto Java com Maven
    mvn test
    ```
    ou
    ```bash
    # Exemplo para projeto Node.js com Supertest
    npm test
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Postman** | Ferramenta para testes manuais e automatizados de API (via Newman). |
| **REST Assured / Supertest** | Bibliotecas para testes de API programáticos (depende do projeto). |
| **JSON/XML** | Formatos de dados validados nas respostas. |