# 🔁 Experimentos com CI/CD e GitHub Actions

Este projeto serve como um *playground* e documentação para a configuração de pipelines de Integração Contínua (CI) e Entrega Contínua (CD) utilizando o **GitHub Actions**. O foco é automatizar o ciclo de testes e validação do código, especialmente em arquiteturas **Monorepo**.

## ✨ Destaques
- Workflows para execução automática de testes em Pull Requests.
- Configuração de *matrix builds* para testes em múltiplas versões/SO.
- **Implementação de CI/CD Seletivo (Path Filtering)**: Demonstração de pipelines que rodam **somente** quando o código em uma subpasta específica (ex: `/cypress/`) é alterado.

## ⚙️ Estrutura do Workflow no Monorepo

No Monorepo, os arquivos de configuração dos workflows são segregados por projeto e localizados na raiz, com a lógica de seletividade.

A estrutura de pipelines é a seguinte:
.github/workflows/ ├── cypress_ci.yml <-- Exemplo de pipeline seletiva ├── java_ci.yml <-- Exemplo de pipeline seletiva └── ... (outros arquivos YAML)

> *O conteúdo desta pasta (`ci-cd/`) pode conter scripts de deploy, exemplos de `action.yml` customizadas ou documentação extra, servindo como referência para as pipelines globais.*

## 🚀 Como Usar / Visualizar

1.  **Visualizar Workflows:** Todos os arquivos `.yml` que definem as pipelines de CI/CD seletivas para este Monorepo estão localizados na pasta **`.github/workflows/`** na raiz do repositório.
2.  **Gatilhos:** Acompanhe os gatilhos (`on: [push, pull_request]`) configurados em cada arquivo YAML para iniciar a pipeline automaticamente.
3.  **Acompanhamento:** Acompanhe o status e os logs das execuções na aba **Actions** do repositório principal do GitHub.

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **GitHub Actions** | Motor principal para a automação do pipeline. |
| **YAML** | Linguagem de configuração dos workflows. |
| **Path Filtering** | Técnica usada para criar o CI/CD seletivo (essencial em Monorepos). |
