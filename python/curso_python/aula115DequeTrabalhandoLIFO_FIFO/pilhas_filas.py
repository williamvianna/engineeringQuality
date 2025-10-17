"""
Pilhas e filas
Pilha (stack) - LIFO - last in, first out.
    Exemplo: Pilha de livros que são adicionados um sobre o outro
Fila (queue) - FIFO - first in, first out.
    Exemplo: Uma fila de banco (ou qualquer fila da vida real)
Filas podem ter efeitos colaterias em desempenho, porque a cada item
alterado, todos os índices serão modificados.
"""
# # livros = list()
# # livros.append('Livro 1')
# # livros.append('Livro 2')
# # livros.append('Livro 3')
# # livro_removido = livros.pop()
# # livro_removido = livros.pop()
# # livro_removido = livros.pop()
#
# print(livros, livro_removido)

from collections import deque
from time import sleep

fila = deque(maxlen=10)
fila.extend([10, 20, 30, 40, 50, 60, 70, 80])
fila.rotate(1)
print(fila)
