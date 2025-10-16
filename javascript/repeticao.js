// repetição por array

// array.forEach(element => {
// });

const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"];

cidades.forEach((elemento, index) => {
  // cidades[0]
  // cidades[1]
  // console.log("Execução número: " + index);
  // console.log(elemento);
});

// for normal
// for (let index = 0; index < array.length; index++) {
// }

for (let indice = 0; indice < cidades.length; indice++) {
  console.log(cidades[indice]);
}
