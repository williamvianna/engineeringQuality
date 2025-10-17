# 📱 Automação Mobile Cross-Platform com Appium

Este projeto explora a automação de testes para aplicativos móveis nativos, híbridos e web móvel usando o **Appium**. O Appium permite o uso de linguagens de programação padrão (como Java, Python, JavaScript) para interagir com o UI do dispositivo.

## ✨ Destaques
- Automação para iOS e Android com o mesmo conjunto de código/lógica.
- Uso de padrões de projeto (e.g., **Page Object Model - POM**) adaptados para Appium.
- Estratégias robustas de localização de elementos (Accessibility IDs, XPath) em ambientes simulados e reais.

## ⚙️ Pré-requisitos
- Appium Server instalado e rodando.
- Plataformas de desenvolvimento (Android Studio/SDK ou Xcode) configuradas.
- O código de teste (neste diretório) depende de um ambiente Node.js.

## 🚀 Como Rodar os Testes (Exemplo JavaScript/Node.js)

Assumindo que você já clonou o repositório central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Appium:**
    ```bash
    cd appium
    ```
2.  **Inicie o Appium Server** (em outra janela do terminal).
3.  **Instale as dependências (e.g., Appium Client):**
    ```bash
    npm install
    ```
4.  **Execute os testes:**
    ```bash
    npm run test:android  # Executa suíte para Android
    # ou
    npm run test:ios      # Executa suíte para iOS (emulador/simulador)
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Appium** | Servidor de automação móvel e cliente WebDriver. |
| **Linguagem (e.g., JavaScript/TypeScript)** | Linguagem utilizada para escrever os testes. |
| **UIAutomator/XCUITest** | Frameworks nativos utilizados pelo Appium para comunicação com os dispositivos. |
| **Node.js** | Ambiente de execução para os scripts de teste. |