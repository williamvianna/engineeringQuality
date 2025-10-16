# 🤖 Automação de Testes com Robot Framework

Este projeto demonstra a automação de testes utilizando o Robot Framework, um framework genérico de automação de código aberto que adota a abordagem *Keyword-Driven* e é facilmente legível por não-desenvolvedores.

## ✨ Destaques
- Criação de Keywords personalizadas para reutilização de lógica.
- Integração com a SeleniumLibrary para automação web.
- Demonstração da sintaxe Gherkin (Given/When/Then) com o Robot.

## ⚙️ Pré-requisitos
- Python 3.x
- `pip` (gerenciador de pacotes Python)

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/robotframework-tests.git](https://github.com/williamvianna/robotframework-tests.git)
    cd robotframework-tests
    ```
2.  **Instale o Robot Framework e as bibliotecas necessárias:**
    ```bash
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