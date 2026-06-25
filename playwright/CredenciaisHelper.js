import credentials from './credentials.json';

export class CredenciaisHelper {
  static getUsername() {
    return credentials.username;
  }

  static getPassword() {
    return credentials.password;
  }
}