import { test, expect } from '@playwright/test';

test('Teste de login @temporario', async ({ page }) => {
    // Entra direto na página de inventário logado
    await page.goto('/inventory.html');
    
    // Valida se o título do sistema está visível na tela
    await expect(page.getByText('Swag Labs')).toBeVisible();
});