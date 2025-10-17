"""
Biblioteca -> chama_interface
    Interface(Biblioteca) -> metodo_interface
        metodo_da_interface

main -> interface
"""
"""
Associação - Usa | Agregação - Tem | Composição - É dono | Herança - É
"""
from classes import *
from classes.interface import Interface


i1 = Interface()
i1.chama_metodo_da_interface()


# c1 = Cliente('William', 45)
# c1.falar()
# c1.comprar()
#
# a1 = Aluno('Renata', 41)
# a1.falar()
# a1.estudar()
#
# p1 = Pessoa('João', 43)
# p1.falar()
