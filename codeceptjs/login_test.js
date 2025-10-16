Feature("login");

Scenario("Login com sucesso", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
});

Scenario("Tentando Logar digitando apenas e-mail", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
});

Scenario("Tentando Logar sem digitar e-mail e senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
});

Scenario("Tentando Logar digitando apenas senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
});
