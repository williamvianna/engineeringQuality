// const lista = ["JavaScript", 20, true];
// console.log(lista);

// const lista = ["JavaScript", 20, true];
// const nome = lista[0];
// console.log(nome);

// const lista = ["JavaScript", 20, true];
// for (let index = 0; index <= 100; index++) {
//   console.log("teste" + index);
// }

// const lista = ["JavaScript", "HTML", "CSS"];
// for (let index = 0; index < lista.length; index++) {
//   console.log(lista[index]);
// }

// const lista = ["JavaScript", "HTML", "CSS", "PHP"];
// const body = document.querySelector("body");

// for (let index = 0; index < lista.length; index++) {
//   body.innerHTML += "<li>" + lista[index] + "</li>";
// }

// const lista = ["JavaScript", "HTML", "CSS", "PHP"];
// const body = document.querySelector("body");

// function adicionarBody(item) {
//   body.innerHTML += "<li>" + item + "</li>";
// }

// lista.forEach(adicionarBody);

// const links = document.querySelectorAll("nav a");

// function logHref(item) {
//   const href = item.href;
//   console.log(href);
// }

// links.forEach(logHref);

// console.log(links[links.length - 1]);

const links = Array.from(document.querySelectorAll("nav a"));

console.log(links);
const ultimoLink = links.pop();
console.log(links);

function logHref(item) {
  const href = item.href;
  console.log(href);
}

links.forEach(logHref);
console.log(links[links.length - 1]);

const lista = ["JavaScript", "HTML", "CSS"];
const ultimo = lista.pop();
const primeiro = lista.shift();

console.log(ultimo);
console.log(primeiro);

lista.push("PHP");
console.log(lista);
