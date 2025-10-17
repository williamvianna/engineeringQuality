const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos");
const homeLink = document.querySelector("#menu li a");
const texto = document.querySelector("#texto");

console.log(nav);
console.log(produtos);
console.log(homeLink);
console.log(texto);
console.dir(texto);

// Puxar informação
console.log(texto.innerHTML);
console.log(texto.innerText);
console.log(texto.clientHeight);
console.log(texto.clientWidth);

// Definir informação
texto.style.backgroundColor = "black";
texto.style.padding = "1rem";
texto.style.height = document.body.clientHeight / 2 + "px";

texto.classList.add("ativo");
texto.setAttribute("aria-label", "Cursos");
