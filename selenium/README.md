# 🌐 Automação Web Clássica com Selenium

Repositório que demonstra a automação web utilizando o **Selenium WebDriver**. O projeto foca nos conceitos fundamentais do Selenium, como a manipulação de elementos, *waits* explícitos/implícitos e a abordagem **Page Object Model (POM)**.

## ✨ Destaques
- Implementação do Page Object Model para organização, reuso e manutenção.
- Configuração para diferentes linguagens/bindings (ex: Java, Python) dependendo do projeto nesta pasta.
- Estratégias robustas de localização de elementos (**XPath**, **CSS Selectors**) com foco em resiliência.

## ⚙️ Pré-requisitos (Exemplo Python)
- Python 3.x
- **Ambiente Virtual** para isolamento de dependências.
- Navegador (Chrome/Firefox) instalado.

## 🚀 Como Rodar os Testes (Exemplo Python)

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Selenium:**
    ```bash
    cd selenium
    ```
2.  **Crie e ative um ambiente virtual** (para isolamento, se aplicável).
3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    # (ou pip install selenium webdriver-manager se não houver requirements.txt)
    ```
4.  **Execute a suíte de testes principal** (dependendo da linguagem):
    ```bash
    # Exemplo Python com PyTest
    pytest
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Selenium WebDriver** | Ferramenta principal para automação de browser. |
| **Linguagem de Programação** | Java, Python, C#, ou outra utilizada no projeto. |
| **POM** | Page Object Model (padrão de projeto essencial para Selenium). |
| **WebDriver Manager** | (Se aplicável) Biblioteca para gerenciamento automático de drivers. |