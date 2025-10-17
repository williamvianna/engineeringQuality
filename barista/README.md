# ☕ Testes de UI Android com Barista

Este repositório contém testes de interface de usuário (UI) para Android utilizando a biblioteca **Barista**. O Barista atua como uma camada de abstração sobre o Espresso, simplificando a sintaxe e tornando os testes mais legíveis e concisos.

## ✨ Destaques
- Sintaxe de teste fluente e fácil de ler, reduzindo a verbosidade do Espresso.
- Foco em interações comuns de UI (clicar, preencher, verificar textos).
- Testes confiáveis e rápidos para o ecossistema Android.

## ⚙️ Pré-requisitos
- Android Studio e Android SDK instalados.
- Um emulador ou dispositivo Android conectado e configurado.
- O projeto deve ser aberto no Android Studio (que detectará a subpasta como um módulo Gradle).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Abra o Android Studio** e abra a **pasta raiz** do seu Monorepo (`engineeringQuality`). O projeto `barista` deve ser reconhecido como um módulo.
2.  **Sincronize o Gradle** e espere o projeto carregar.
3.  **Execute os testes de Instrumentação:**
    - Navegue até a pasta `app/src/androidTest` (dentro da pasta `barista/` no Project Explorer).
    - Clique com o botão direito na classe de teste Barista e selecione **Run** (`Executar`).

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Barista** | Camada de abstração de alto nível sobre o Espresso. |
| **Kotlin/Java** | Linguagens primárias para desenvolvimento e testes nativos Android. |
| **Espresso** | Framework de teste base (utilizado internamente pelo Barista). |
| **Gradle** | Sistema de build para gerenciamento de dependências. |