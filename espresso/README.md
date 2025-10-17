# ☕ Testes Nativos de Android com Espresso

Este repositório foca em testes de interface (UI) e funcionalidade para aplicativos Android nativos, utilizando o framework **Espresso**. Os testes são rápidos, confiáveis e rodados diretamente no dispositivo ou emulador.

## ✨ Destaques
- Utilização de `ViewMatchers` e `ViewActions` para interagir com a UI.
- Testes que consideram a arquitetura de *threads* do Android, garantindo confiabilidade.
- Exemplos de testes de interação e validação de estado da Activity/Fragment.

## ⚙️ Pré-requisitos
- Android Studio e Android SDK instalados.
- Um emulador ou dispositivo Android conectado.
- O projeto deve ser aberto no Android Studio (que detectará a subpasta como um módulo Gradle).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Abra o Android Studio** e abra a **pasta raiz** do seu Monorepo (`engineeringQuality`). O projeto `espresso` deve ser reconhecido como um módulo.
2.  **Sincronize o Gradle** e espere o projeto carregar.
3.  **Execute os testes de Instrumentação:**
    - Navegue até a pasta `app/src/androidTest` (dentro da pasta `espresso/` no Project Explorer).
    - Clique com o botão direito na classe de teste Espresso e selecione **Run** (`Executar`).

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Espresso** | Framework nativo para testes de UI Android. |
| **Kotlin/Java** | Linguagens para desenvolvimento e teste Android. |
| **JUnit** | Utilizado para estruturar e rodar os casos de teste. |
| **Gradle** | Sistema de build para gerenciamento de dependências. |