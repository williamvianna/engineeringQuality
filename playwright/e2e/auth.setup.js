// @ts-check
import { test as setup } from '@playwright/test';
import { CredenciaisHelper } from '../CredenciaisHelper';

const TOKEN_PATH = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // 1. Vai para a página inicial (mapeada no baseURL)
  await page.goto('/');
  
  // 2. Preenche os campos usando os seletores específicos do Sauce Demo
  await page.locator('#user-name').fill(CredenciaisHelper.getUsername());
  await page.locator('#password').fill(CredenciaisHelper.getPassword());
  
  // 3. Clica no botão de Login
  await page.locator('#login-button').click();
  
  // 4. Espera a página de produtos carregar para garantir o login
  await page.waitForURL('**/inventory.html');
  
  // 5. Salva o estado da sessão (cookies e local storage)
  await page.context().storageState({ path: TOKEN_PATH });
});