# ☕ Projetos de Automação com Java (JUnit / TestNG)

Este repositório é dedicado à automação de testes utilizando a linguagem **Java**, a espinha dorsal de muitas soluções corporativas. O foco está na estruturação de projetos de teste escaláveis e manuteníveis.

## ✨ Destaques
- Utilização de frameworks de teste padrão da indústria (**JUnit 5** ou **TestNG**).
- Implementação de padrões de projeto robustos, como **Page Object Model (POM)** ou **Factory Pattern**.
- Exemplos de integração de relatórios (e.g., **Allure Reports**) para visualização profissional dos resultados.

## 🚀 Como Rodar os Testes

Assumindo que você já clonou o monorepo central (`engineeringQuality`) e tem o JDK instalado:

1.  **Navegue para a pasta do projeto Java:**
    ```bash
    cd java
    ```
2.  **Compilar e Executar com Maven/Gradle:**
    ```bash
    # Exemplo com Maven para limpar, instalar dependências e rodar os testes
    mvn clean install
    mvn test
    ```
3.  **Via IDE:** Você também pode importar a pasta `java/` como um módulo Maven/Gradle em sua IDE (IntelliJ, Eclipse ou VS Code) e executar as classes de teste diretamente.

## 📚 Tecnologias Envolvidas
| Tecnologia | Descrição |
| :--- | :--- |
| **Java (JDK)** | Linguagem base para o desenvolvimento de automação. |
| **Maven / Gradle** | Gerenciadores de dependências e build. |
| **JUnit / TestNG** | Frameworks de teste unitário e funcional. |
| **Selenium / Appium** | (Se aplicável) Ferramentas de automação de UI/Mobile integradas. |