# 🐍 Soluções de Testes com Python (PyTest / Requests)

Repositório que concentra soluções de automação e testes usando a linguagem **Python**. Inclui exemplos de testes de API, web e scripts de validação de dados, utilizando as bibliotecas mais populares da comunidade.

## ✨ Destaques
- Utilização do **PyTest** para escrita e execução de testes de forma simples e escalável.
- Exemplos de automação de API com a biblioteca **`requests`** para interações HTTP diretas.
- Uso de **ambientes virtuais** (`venv`) para isolamento e gerenciamento limpo de dependências.

## ⚙️ Pré-requisitos
- Python 3.x (instalado e configurado no PATH).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Python:**
    ```bash
    cd python
    ```
2.  **Crie e ative um ambiente virtual:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/macOS
    # ou
    # venv\Scripts\activate   # Windows
    ```
3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Execute os testes com PyTest:**
    ```bash
    pytest
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Python** | Linguagem base. |
| **PyTest** | Framework de testes robusto e modular. |
| **Requests** | Biblioteca para testes de API RESTful. |
| **venv** | Módulo para criação de ambientes virtuais. |