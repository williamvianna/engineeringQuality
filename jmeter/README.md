# 📈 Testes de Performance com Apache JMeter

Este repositório armazena planos de teste (Test Plans) e recursos relacionados ao **Apache JMeter**. O JMeter é uma ferramenta robusta para análise de performance de diversos serviços, com foco em testes de carga e estresse.

## ✨ Destaques
- Arquivos `.jmx` (Test Plans) configurados para diferentes cenários de carga.
- Uso de elementos chave como **Grupos de Threads**, Assertions e Listeners para análise detalhada.
- Exemplos de testes para API REST, Web Services e testes de protocolos diversos.

## ⚙️ Pré-requisitos
- **Java Runtime Environment (JRE)** instalado.
- **Apache JMeter** instalado e configurado no PATH do sistema.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`):

1.  **Navegue para a pasta do projeto JMeter:**
    ```bash
    cd jmeter
    ```
2.  **Execute via Linha de Comando (Modo Headless, recomendado):**
    ```bash
    # O modo headless ('-n') é usado para execuções de alta carga
    jmeter -n -t nome_do_plano.jmx -l resultado.jtl -e -o /caminho/para/dashboard
    ```
3.  **Abra o JMeter (Modo GUI, para edição e análise):**
    - Abra a interface gráfica do JMeter e utilize a opção **File > Open** para carregar o arquivo `.jmx` desejado.

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Apache JMeter** | Ferramenta Java para testes de performance e carga. |
| **.jmx** | Formato de arquivo dos planos de teste do JMeter. |
| **JTL** | Formato de arquivo dos resultados de execução para análise. |