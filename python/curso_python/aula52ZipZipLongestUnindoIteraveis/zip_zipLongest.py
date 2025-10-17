"""
Zip Unindo iteráveis
Zip_longest - Itertools
"""
from itertools import zip_longest, count

indice = count()
cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Monte Belo', 'Outra']
estados = ['SP', 'RJ', 'MG']

cidades_estados = zip(
    indice,
    estados,
    cidades
)

for indice, estado, cidade in cidades_estados:
    print(indice, estado, cidade)
