import { sleep } from 'k6';
export default function () {
  // Script mínimo para evitar erro de 'file not found' ou sintaxe.
  sleep(0.01); 
}