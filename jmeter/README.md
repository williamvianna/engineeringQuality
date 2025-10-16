# 📈 Testes de Performance com Apache JMeter

Este repositório armazena planos de teste (Test Plans) e recursos relacionados ao Apache JMeter. O JMeter é uma ferramenta robusta para análise de performance de diversos serviços, com foco em testes de carga e estresse.

## ✨ Destaques
- Arquivos `.jmx` (Test Plans) configurados para diferentes cenários de carga.
- Uso de elementos como Grupos de Threads, Assertions e Listeners.
- Exemplos de testes para API REST, Web Services e protocolos de banco de dados.

## ⚙️ Pré-requisitos
- **Java Runtime Environment (JRE)** instalado.
- **Apache JMeter** instalado.

## 🚀 Como rodar os testes

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/williamvianna/jmeter-performance-tests.git](https://github.com/williamvianna/jmeter-performance-tests.git)
    cd jmeter-performance-tests
    ```
2.  **Execute via Linha de Comando (Modo Headless, recomendado):**
    ```bash
    jmeter -n -t nome_do_plano.jmx -l resultado.jtl
    ```
3.  **Abra o JMeter (Modo GUI, para edição):**
    - Abra o JMeter e carregue o arquivo `.jmx`.

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Apache JMeter** | Ferramenta Java para testes de performance. |
| **.jmx** | Formato de arquivo dos planos de teste. |
| **JTL** | Formato de arquivo dos resultados de execução. |