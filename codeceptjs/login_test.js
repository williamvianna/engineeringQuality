Feature("login");

Scenario("Login com sucesso", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
  I.click("a[href='/login']");
  I.waitForText("Login", 5);
  I.fillField("#user", "teste@gmail.com");
  I.fillField("#password", "123456");
  I.click("#btnLogin");
  I.waitForText("Login realizado", 3);
}).tag("@sucesso")

Scenario("Tentando Logar digitando apenas e-mail", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
  I.click("a[href='/login']");
  I.waitForText("Login", 5);
  I.fillField("#user", "teste@gmail.com");
  I.click("#btnLogin");
  I.waitForText("Senha inválida.", 3);
}).tag("@falha")

Scenario("Tentando Logar sem digitar e-mail e senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
  I.click("a[href='/login']");
  I.waitForText("Login", 5);
  I.click("#btnLogin");
  I.waitForText("E-mail inválido.", 3);
}).tag("@falha")

Scenario("Tentando Logar digitando apenas senha", ({ I }) => {
  I.amOnPage("http://automationpratice.com.br");
  I.click("a[href='/login']");
  I.waitForText("Login", 5);
  I.fillField("#password", "123456");
  I.click("#btnLogin");
  I.waitForText("E-mail inválido.", 3);
});
