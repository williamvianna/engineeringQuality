// playwright/tests/smoke.spec.js
const { test, expect } = require('@playwright/test');

test('Smoke Test: Google homepage loads', async ({ page }) => {
  await page.goto('https://www.google.com');
  // Espera que o título contenha 'Google'
  await expect(page).toHaveTitle(/Google/);
});