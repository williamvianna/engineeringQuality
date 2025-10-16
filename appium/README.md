# 📱 Automação Mobile Cross-Platform com Appium

Este projeto explora a automação de testes para aplicativos móveis nativos, híbridos e web móvel usando o Appium. O Appium permite o uso de linguagens de programação padrão (como Java, Python, JavaScript) para interagir com o UI do dispositivo.

## ✨ Destaques
- Automação para iOS e Android com o mesmo conjunto de código/lógica.
- Uso de padrões de projeto (e.g., POM) adaptados para Appium.
- Estratégias de localização de elementos (Accessibility IDs, XPath).

## ⚙️ Pré-requisitos
- Appium Server instalado e rodando.
- Plataformas de desenvolvimento (Android Studio/SDK ou Xcode).

## 🚀 Como rodar os testes (Exemplo JavaScript)

1.  **Inicie o Appium Server.**
2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/appium-crossplatform-tests.git](https://github.com/williamvianna/appium-crossplatform-tests.git)
    cd appium-crossplatform-tests
    ```
3.  **Instale as dependências (e.g., Appium Client):**
    ```bash
    npm install
    ```
4.  **Execute os testes:**
    ```bash
    npm run test:android  # ou test:ios
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Appium** | Servidor de automação móvel. |
| **Linguagem (e.g., JavaScript)** | Linguagem para escrever os testes. |
| **UIAutomator/XCUITest** | Frameworks nativos utilizados pelo Appium. |