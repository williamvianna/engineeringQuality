// Exercício 2 - Estrutura de decisão

// Percorrer uma lista de cidades
// Contendo:
// Para cada item, verificar se a cidade Rio de Janeiro, está presente na lista
// Printar nome da cidade
// Caso esteja, avisar
// Caso não seja o elemento procurado, avisar
// Número da execução

// Execução: 1
// Cidade: São Paulo
// Encontrado / Não encontrado
// ---------------------------

const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"];

cidades.forEach((cidade, indice) => {
  console.log("Execução:", indice + 1);
  console.log("Cidade:", cidade);

  if (cidade == "Rio de Janeiro") {
    console.log("Encontrado");
  } else {
    console.log("Não encontrado");
  }

  console.log("--------------");
});
