if (false) {
  console.log("Teste");
} else {
  console.log("Esse executa");
}

// const condicao = Boolean("");
// console.log(Boolean(condicao));

// const condicao = 0;
// console.log(Boolean(condicao));

// const condicao = document.querySelector("body");
// console.log(condicao);
// console.log(Boolean(condicao));

// const elemento = document.querySelector("p");
// if (elemento) {
//   elemento.addEventListener("click");
// }

// const elemento = document.querySelector("p");
// if (elemento || document.querySelector("body")) {
//   console.log("teste");
// }

// const elemento = document.querySelector("p");
// if (document.querySelector("body") && elemento) {
//   console.log("teste");
// }

const elemento = document.querySelector("p");
const texto = elemento.innerText;

console.log(texto);

if (texto.toUpperCase() === "HTML") {
  console.log("Executar código");
}

if (10 !== 5) {
  console.log("teste");
}
