# ☕ Testes Nativos de Android com Espresso

Este repositório foca em testes de interface (UI) e funcionalidade para aplicativos Android nativos, utilizando o framework Espresso. Os testes são rápidos, confiáveis e rodados diretamente no dispositivo ou emulador.

## ✨ Destaques
- Utilização de `ViewMatchers` e `ViewActions` para interagir com a UI.
- Testes que consideram a arquitetura de *threads* do Android, garantindo confiabilidade.
- Exemplos de testes de interação e validação de estado da Activity/Fragment.

## ⚙️ Pré-requisitos
- Android Studio e Android SDK.
- Um emulador ou dispositivo Android conectado.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/espresso-android-native-tests.git](https://github.com/williamvianna/espresso-android-native-tests.git)
    ```
2.  **Abra o projeto no Android Studio.**
3.  **Execute os testes de Instrumentação:**
    - Clique com o botão direito na classe de teste Espresso (localizada em `androidTest`) e selecione **Run**.

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Espresso** | Framework nativo para testes de UI Android. |
| **Kotlin/Java** | Linguagens para desenvolvimento e teste Android. |
| **JUnit** | Utilizado para estruturar e rodar os casos de teste. |