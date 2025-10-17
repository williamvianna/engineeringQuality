# 🎬 Automação Mobile com Maestro (Fluxos YAML)

Este repositório contém fluxos de testes End-to-End para aplicativos móveis (Android e iOS) escritos utilizando o framework **Maestro**. A principal característica é a sintaxe **YAML**, que torna os testes extremamente legíveis e fáceis de manter, focados em gestos e interações do usuário.

## ✨ Destaques
- Fluxos de teste declarativos, focados na experiência real do usuário.
- Suporte nativo para tolerância a atrasos e **flakiness** em aplicativos móveis.
- Testes compatíveis com iOS, Android, React Native e Flutter, usando um único script.

## ⚙️ Pré-requisitos
- O Maestro CLI deve estar instalado na sua máquina.
- Um emulador/simulador (ou dispositivo real) configurado e rodando.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto Maestro:**
    ```bash
    cd maestro
    ```
2.  **Execute um fluxo específico:**
    ```bash
    maestro test caminho/para/seu_fluxo.yaml
    ```
3.  **Execute em modo Studio (para debug visual e *record*):**
    ```bash
    maestro studio
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Maestro** | Framework de testes de UI Mobile baseado em código declarativo. |
| **YAML** | Linguagem para definição dos fluxos de teste. |
| **Android / iOS** | Plataformas de destino compatíveis. |