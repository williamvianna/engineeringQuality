import fs from 'fs';
import path from 'path';

export class CredenciaisHelper {
  static getUsername() {
    // Se existir a variável no ambiente (GitHub), usa ela. Se não, tenta ler o arquivo local.
    if (process.env.PLAYWRIGHT_USER) {
      return process.env.PLAYWRIGHT_USER;
    }
    
    const credentialsPath = path.resolve(__dirname, './credentials.json');
    if (fs.existsSync(credentialsPath)) {
      const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
      return credentials.username;
    }
    
    throw new Error("Credenciais de usuário não encontradas localmente ou no ambiente.");
  }

  static getPassword() {
    if (process.env.PLAYWRIGHT_PASSWORD) {
      return process.env.PLAYWRIGHT_PASSWORD;
    }

    const credentialsPath = path.resolve(__dirname, './credentials.json');
    if (fs.existsSync(credentialsPath)) {
      const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
      return credentials.password;
    }

    throw new Error("Credenciais de senha não encontradas localmente ou no ambiente.");
  }
}