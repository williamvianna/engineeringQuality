// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('teste@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Login com email vazio', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('E-mail inválido.')).toBeVisible({timeout: 10000});
});

test('Login com senha vazia', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  await page.locator('#user').fill('teste@gmail.com');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Senha inválida.')).toBeVisible();
});