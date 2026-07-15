const { test, expect } = require('@playwright/test');

var tokenRecebido

test('Consultando as reservas cadastradas', async ({ request }) => {
  const response = await request.get('/booking');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test('Consultando as reservas cadastradas com base em um ID', async ({ request }) => {
  const bookingsResponse = await request.get('/booking');
  expect(bookingsResponse.ok()).toBeTruthy();
  expect(bookingsResponse.status()).toBe(200);

  const bookings = await bookingsResponse.json();
  expect(Array.isArray(bookings)).toBeTruthy();
  expect(bookings.length).toBeGreaterThan(0);

  const bookingId = bookings[0].bookingid || bookings[0].id || bookings[0].bookingId;
  expect(bookingId).toBeTruthy();

  const response = await request.get(`/booking/${bookingId}`);
  const responseBody = await response.json();

  expect(typeof responseBody.firstname).toBe('string');
  expect(typeof responseBody.lastname).toBe('string');
  expect(typeof responseBody.totalprice).toBe('number');
  expect(typeof responseBody.depositpaid).toBe('boolean');
  expect(typeof responseBody.bookingdates?.checkin).toBe('string');
  expect(typeof responseBody.bookingdates?.checkout).toBe('string');
  if (responseBody.additionalneeds !== undefined && responseBody.additionalneeds !== null) {
    expect(typeof responseBody.additionalneeds).toBe('string');
  }
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(responseBody);
});

test('Consultando as reservas cadastradas com base em um ID validando apenas os campos', async ({ request }) => {
  const bookingsResponse = await request.get('/booking');
  expect(bookingsResponse.ok()).toBeTruthy();
  expect(bookingsResponse.status()).toBe(200);

  const bookings = await bookingsResponse.json();
  expect(Array.isArray(bookings)).toBeTruthy();
  expect(bookings.length).toBeGreaterThan(0);

  const bookingId = bookings[0].bookingid || bookings[0].id || bookings[0].bookingId;
  expect(bookingId).toBeTruthy();

  const response = await request.get(`/booking/${bookingId}`);
  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('firstname');
  expect(responseBody).toHaveProperty('lastname');
  expect(responseBody).toHaveProperty('totalprice');
  expect(responseBody).toHaveProperty('depositpaid');
  expect(responseBody).toHaveProperty('bookingdates');
  if (responseBody.additionalneeds !== undefined && responseBody.additionalneeds !== null) {
    expect(responseBody).toHaveProperty('additionalneeds');
  }
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(responseBody);
});

test('Cadastrando uma reserva', async ({ request }) => {
  const response = await request.post('/booking', {
    data: {
      "firstname" : "William",
      "lastname" : "Teste",
      "totalprice" : 222,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2026-01-01",
          "checkout" : "2099-01-01"
      },
      "additionalneeds" : "Breakfast"
    }
});
console.log(await response.json());

 // Verificando se a resposta da API está OK
 expect(response.ok()).toBeTruthy();
 expect(response.status()).toBe(200);

// validando dados de retorno
const responseBody = await response.json()
  expect(responseBody.booking).toHaveProperty("firstname", "William");
  expect(responseBody.booking).toHaveProperty("lastname", "Teste");
  expect(responseBody.booking).toHaveProperty("totalprice", 222);
  expect(responseBody.booking).toHaveProperty("depositpaid", true);
});

test('Gerando um token', async ({ request }) => {
  const response = await request.post('/auth', {
    data: {
      "username": "admin",
      "password": "password123"
    }
});
    console.log(await response.json());

    // Verificando se a resposta da API está OK
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    tokenRecebido = responseBody.token;
    console.log("Token gerado: " + tokenRecebido);
});

test('Atualização parcial', async ({ request }) => {
    // Criando o token
  const response = await request.post('/auth', {
    data: {
      "username": "admin",
      "password": "password123"
    }
});
    console.log(await response.json());

    // Verificando se a resposta da API está OK
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    tokenRecebido = responseBody.token;
    console.log("Token gerado: " + tokenRecebido);

    // Atualizando dados da reserva
    const partialUpdateRequest = await request.patch('/booking/5', {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${tokenRecebido}`
    },
    data: {
        "firstname": "William",
        "lastname": "Atualizado",
        "totalprice": 111,
        "depositpaid": false
    }
});

console.log(await partialUpdateRequest.json());
expect(partialUpdateRequest.ok()).toBeTruthy();
expect(partialUpdateRequest.status()).toBe(200);

const partialUpdatedResponseBody = await partialUpdateRequest.json()
expect(partialUpdatedResponseBody).toHaveProperty("firstname", "William");
expect(partialUpdatedResponseBody).toHaveProperty("lastname", "Atualizado");
expect(partialUpdatedResponseBody).toHaveProperty("totalprice", 111);
expect(partialUpdatedResponseBody).toHaveProperty("depositpaid", false);
});