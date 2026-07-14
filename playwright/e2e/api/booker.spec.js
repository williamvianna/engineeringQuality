const { test, expect } = require('@playwright/test');

test('Consultando as reservas cadastradas', async ({ request }) => {
  const response = await request.get('/booking');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test('Consultando as reservas cadastradas com base em um ID', async ({ request }) => {
  const response = await request.get('/booking/5');
//   Transformando a resposta em JSON para poder acessar os dados
  const responseBody = await response.json();
//   Validando os tipos dos dados retornados para garantir sucesso estável no CI/CD
  expect(typeof responseBody.firstname).toBe('string');
  expect(typeof responseBody.lastname).toBe('string');
  expect(typeof responseBody.totalprice).toBe('number');
  expect(typeof responseBody.depositpaid).toBe('boolean');
  expect(typeof responseBody.bookingdates.checkin).toBe('string');
  expect(typeof responseBody.bookingdates.checkout).toBe('string');
  expect(typeof responseBody.additionalneeds).toBe('string');
// Validando o status da resposta
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(responseBody);
});

test('Consultando as reservas cadastradas com base em um ID validando apenas os campos', async ({ request }) => {
  const response = await request.get('/booking/5');
  const responseBody = await response.json();
//   Verificando se os campos existem na resposta
  expect(responseBody).toHaveProperty('firstname');
  expect(responseBody).toHaveProperty('lastname');
  expect(responseBody).toHaveProperty('totalprice');
  expect(responseBody).toHaveProperty('depositpaid');
  expect(responseBody).toHaveProperty('bookingdates');
  expect(responseBody).toHaveProperty('additionalneeds');
  
// Validando o status da resposta
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(responseBody);
});