const paises = ["Brasil", "Argentina", "Alemanha"]; // lista de dados

console.log("Acessando o país: " + paises[0]); // acessando uma posição do array
console.log("Tamanho do array:", paises.length); // tamanho do array

// Operações com o array
paises.push("USA"); // Adiciona no final do array
paises.pop(); // Remove último elemento
paises.unshift("França"); // Adiciona no primeiro elemento
paises.shift(); // Remove no primeiro elemento

console.log(paises);
