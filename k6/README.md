# 📊 Testes de Carga e Performance com k6

Este repositório contém scripts e cenários para testes de carga, estresse e pico utilizando o **k6**. A ferramenta, construída em Go e *scriptada* em JavaScript, oferece uma experiência moderna e eficiente para testes de performance.

## ✨ Destaques
- Configuração de **Limiares (Thresholds)** para definir metas claras de **SLA (Service Level Agreement)**, permitindo falha imediata em caso de violação de performance.
- Definição de cenários complexos (execução constante, rampa de usuários - *ramping*).
- Uso de JavaScript para criar lógica de teste realista e fácil de manter.

## ⚙️ Pré-requisitos
- k6 CLI instalado (Instalação via Brew, Chocolatey, etc.).

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto k6:**
    ```bash
    cd k6
    ```
2.  **Execute o script de teste básico:**
    ```bash
    k6 run meu_cenario.js
    ```
3.  **Execute um teste de carga específico (Exemplo):**
    ```bash
    # 50 Usuários Virtuais (VUs) por 1 minuto
    k6 run --vus 50 --duration 1m meu_cenario.js
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **k6** | Ferramenta moderna e de código aberto para testes de carga e estresse. |
| **JavaScript (ES6)** | Linguagem para escrita dos scripts de teste. |
| **Thresholds** | Conceito fundamental para a validação automática de métricas de performance. |