// Exercício 1 - Estrutura de repetição

// Percorrer uma lista de nomes, contendo os nomes:
// William, Renata, Thallys, Jean e Vânia
// Número da execução, começando em 1
// Nome que está sendo executado
// Separadores

// Execução: 1
// Nome: William
// --------------

const nomes = ["William", "Renata", "Thallys", "Jean", "Vânia"];
nomes.forEach((nome, indice) => {
  console.log("Execução:", indice + 1);
  console.log("Nome: " + nome);
  console.log("---------------------");
});
