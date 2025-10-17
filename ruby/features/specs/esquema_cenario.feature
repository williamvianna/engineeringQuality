# language: pt

Funcionalidade: Esquema de cenario

Esquema do Cenario: Criando esquema de cenario

Dado que eu compre <qtd> caixas de uva
Quando eu vendo <qtdVenda> caixas para meu primo Leandro
Entao deve sobrar apenas <qtdTotal> caixas de uva

Example:

| qtdCompra | qtdVenda  | qtdTotal  |
|    10     |     5     |     5     |
|    20     |     15    |     5     |
|    30     |     10    |     20    |
