const { test, expect } = require('@playwright/test');

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