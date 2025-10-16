// Funções

// Precisa ser chamada
// Pode ou não receber parâmetros
// Pode ou não retonar dados

// function gerarNome(nome, sobrenome, idade) {
//   console.log("Nome:", nome + sobrenome);
//   console.log("Idade:", idade);
// }

function gerarNome(nome, sobrenome, idade) {
  return "Nome: " + nome + sobrenome;
}

// console.log(gerarNome("Renata", " Vicente"));

const nomeGerado = gerarNome("William", " Vianna");
console.log(nomeGerado);
