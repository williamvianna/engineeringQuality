// function logEstudo() {
//   const teste = "Treinamento";
//   console.log(teste);
// }

// logEstudo();

// function logAprender(pessoa, idade) {
//   console.log(pessoa, idade, "anos");
//   return pessoa;
// }

// const informe = logAprender("William", "48");
// console.log(informe);

// function logCursos(nome, horas) {
//   console.log(nome, horas, "horas");
//   return {
//     nomeTeste: nome,
//     horasTeste: horas,
//   };
// }

// const retornos = logCursos("JavaScript", "40");
// logCursos("HTML", "20");

// console.log(retornos);

// function logCurso(nome, horas) {
//   console.log(nome, horas, "horas");
//   return {
//     nomeTeste: nome,
//     horasTeste: horas,
//   };
// }

// const retorno = logCurso("JavaScript", "40");
// logCurso("HTML", "20");

// console.log(retorno);

// function logCurso(nome, horas) {
//   console.log(nome, horas, "horas");
//   return {
//     nomeTeste: nome,
//     horasTeste: horas,
//   };
// }

// const retorno = logCurso("JavaScript", "40");
// logCurso("HTML", "20");

// console.log(retorno.horasTeste);

// function logCurso(nome, horas) {
//   console.log(nome, horas, "horas");
//   return {
//     nome,
//     horas,
//   };
// }

// const retorno = logCurso("JavaScript", "40");
// logCurso("HTML", "20");

// console.log(retorno.horas);

// function logCurso(nome, horas) {
//   console.log(nome, horas, "horas");
//   return {
//     nome,
//     horas,
//   };
// }

// const retorno = logCurso("JavaScript", "40");
// logCurso("HTML", "20");

// console.log(retorno);

// const nome = "JavaScript";

// function logCurso() {
//   const nome = "HTML";
//   console.log(nome);
//   return nome;
// }

// const nomedaFuncao = logCurso();

// console.log(nomedaFuncao);
// console.log(nome);

// Exercício
// function livro(nome, ano, autor) {
//   const nomeMaior = nome.toUpperCase();
//   const totalAnos = 2024 - ano;
//   const frase = nome + " por " + autor;
//   const objeto = {
//     nome: nomeMaior,
//     totalAnos,
//     frase,
//   };
//   return objeto;
// }

// const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(livroRetorno.frase);

// Refatorado
// function livro(nome, ano, autor) {
//   const objeto = {
//     nome: nome.toUpperCase(),
//     totalAnos: 2024 - ano,
//     frase: nome + " por " + autor,
//   };
//   return objeto;
// }

// const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
// console.log(livroRetorno.frase);

// Refatorado
function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos: 2024 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno);
