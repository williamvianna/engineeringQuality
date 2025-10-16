# 📊 Testes de Carga e Performance com k6

Este repositório contém scripts e cenários para testes de carga, estresse e pico utilizando o k6. A ferramenta, construída em Go e *scriptada* em JavaScript, oferece uma experiência moderna para testes de performance.

## ✨ Destaques
- Configuração de limiares (Thresholds) para definir metas de SLA (Service Level Agreement).
- Definição de cenários complexos (execução constante, rampa de usuários).
- Uso de JavaScript para criar lógica de teste realista.

## ⚙️ Pré-requisitos
- k6 CLI instalado.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/k6-performance-scripts.git](https://github.com/williamvianna/k6-performance-scripts.git)
    cd k6-performance-scripts
    ```
2.  **Execute o script de teste:**
    ```bash
    k6 run meu_cenario.js
    ```
3.  **Execute um teste de carga (Exemplo):**
    ```bash
    k6 run --vus 50 --duration 1m meu_cenario.js
    ```

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **k6** | Ferramenta moderna para testes de carga. |
| **JavaScript (ES6)** | Linguagem para escrita dos scripts. |
| **Thresholds** | Conceito para definição de métricas de sucesso/falha. |