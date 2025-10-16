# 🎬 Automação Mobile com Maestro (Fluxos YAML)

Este repositório contém fluxos de testes End-to-End para aplicativos móveis (Android e iOS) escritos utilizando o framework Maestro. A principal característica é a sintaxe YAML, que torna os testes extremamente legíveis e fáceis de manter.

## ✨ Destaques
- Fluxos de teste declarativos, focados em gestos e interações do usuário.
- Suporte nativo para tolerância a atrasos e flakiness em aplicativos móveis.
- Testes compatíveis com iOS, Android, React Native e Flutter.

## ⚙️ Pré-requisitos
- O Maestro CLI deve estar instalado na sua máquina.
- Um emulador/simulador (ou dispositivo real) configurado e rodando.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/maestro-mobile-flows.git](https://github.com/williamvianna/maestro-mobile-flows.git)
    cd maestro-mobile-flows
    ```
2.  **Execute um fluxo específico:**
    ```bash
    maestro test caminho/para/seu_fluxo.yaml
    ```
3.  **Execute em modo Studio (para debug):**
    ```bash
    maestro studio
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Maestro** | Framework de testes de UI Mobile. |
| **YAML** | Linguagem para definição dos fluxos. |
| **Android / iOS** | Plataformas de destino. |