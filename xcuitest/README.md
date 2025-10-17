# 📱 Testes Nativos de iOS com XCUITest

Repositório dedicado à automação de testes de UI e funcionalidade para aplicativos iOS utilizando o **XCUITest**, o framework nativo da Apple integrado ao Xcode.

## ✨ Destaques
- Testes rápidos e profundamente integrados ao ecossistema de desenvolvimento iOS/macOS.
- Uso de APIs nativas para manipulação de elementos de UI (baseado em **Accessibility**).
- Estratégias para testes em diferentes dispositivos e versões do iOS/iPadOS.

## ⚙️ Pré-requisitos
- **macOS**
- **Xcode** instalado e configurado.
- Simulador de iOS.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Abra o projeto no Xcode:**
    - Navegue para a pasta `xcuitest` dentro do seu Monorepo.
    - Abra o arquivo `.xcodeproj` ou `.xcworkspace` (dependendo da sua estrutura) diretamente no Xcode.
2.  **Selecione o Esquema (Scheme):**
    - Certifique-se de que o esquema de teste (ex: `MyApplicationUITests`) e o simulador desejado estejam selecionados.
3.  **Execute os testes:**
    - Vá para a aba **Product > Test** (ou use o atalho `⌘U`).

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **XCUITest** | Framework nativo de testes de UI para iOS/macOS. |
| **Swift/Objective-C** | Linguagens para desenvolvimento e teste iOS. |
| **Xcode** | IDE de desenvolvimento, compilação e execução. |