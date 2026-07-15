import { test, expect } from '@playwright/test';

test('Teste de login @temporario', async ({ page }) => {
    // Abre a página pública de login do projeto
    await page.goto('/');
    
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});