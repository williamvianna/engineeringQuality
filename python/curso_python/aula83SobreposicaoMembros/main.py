from classes import *

"""
Associação - Usa | Agregação - Tem | Composição - É dono | Herança - É
"""

c1 = Cliente('William', 45)
c1.comprar()

print()

c2 = ClienteVIP('Renata', 41, 'Vicente')
c2.falar()
