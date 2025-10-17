"""
EM PYTHON TUDO É UM OBJETO: incluindo classes.
Metaclasses são as "classes" que criam classes.
type é uma metaclasse (!!!???)
"""


class Pai:
    nome = 'Teste'


A = type(
    'A',
    (Pai,),
    {'attr': 'Olá Mundo!'}
)

a = A()
print(a.nome)
