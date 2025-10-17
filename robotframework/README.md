# 🤖 Automação de Testes com Robot Framework

Este projeto demonstra a automação de testes utilizando o **Robot Framework**, um framework genérico de automação de código aberto que adota a abordagem **Keyword-Driven** e é facilmente legível por não-desenvolvedores.

## ✨ Destaques
- Criação de **Keywords personalizadas** para reutilização eficiente de lógica.
- Integração com a `SeleniumLibrary` para automação web robusta.
- Demonstração da sintaxe Gherkin (**Given/When/Then**) com o Robot para cenários de teste claros.

## ⚙️ Pré-requisitos
- Python 3.x (instalado e configurado no PATH).
- `pip` (gerenciador de pacotes Python).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Robot Framework:**
    ```bash
    cd robotframework
    ```
2.  **Instale o Robot Framework e as bibliotecas necessárias:**
    ```bash
    # Recomenda-se o uso de um ambiente virtual (venv)
    pip install robotframework robotframework-seleniumlibrary
    ```
3.  **Execute a suíte de testes:**
    ```bash
    robot nome_do_arquivo.robot
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Robot Framework** | Framework de automação *Keyword-Driven*. |
| **Python** | Linguagem base para execução e criação de bibliotecas. |
| **SeleniumLibrary** | Biblioteca para automação da web. |