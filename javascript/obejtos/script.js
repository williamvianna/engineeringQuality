const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J. R. R. Tolkien",
};
console.log(2022 - livro.ano);

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  autor: "J. R. R. Tolkien",
  diretor: "Peter Jackson",
};
console.log(livro.nome + " " + filme.diretor);
console.log(livro.nome === nome);

const texto = document.querySelector("p");
console.log(texto.innerHTML);
console.log(texto.clientHeight);

console.log(autor.length);
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());

const decimal = 122.99;
console.log(Number(decimal.toFixed()) + 3);
console.log(3);

// const total = decimal.toFixed().length.toFixed().length.toFixed();
// console.log(total);

const total = decimal.toFixed().length.toFixed().toUpperCase();
console.log(total);
