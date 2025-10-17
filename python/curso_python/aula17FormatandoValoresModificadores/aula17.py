"""
Formatando valores com modificadores

:s - Texto (strings)
:d - Inteiros (int)
:f - Números de ponto flutuante (float)
:.(NÚMERO)f - Quantidade de casas decimais (float)
:(CARACTERE)(> ou < ou ^)(QUANTIDADE)(TIPO - s, d ou f)

> - Esquerda
< - Direita
^ - Centro
"""
# num_1 = 10
# num_2 = 3
# divisao = num_1 / num_2
# print(f'{divisao:.2f}')

# num_1 = 1
# print(f'{num_1:0>10}')
#
# num_2 = 1150
# print(f'{num_2:0<10}')

nome = 'William Pinto Vianna'
print(nome.lower()) # tudo minúsculo
print(nome.upper()) # tudo maiúsculo
print(nome.title()) # Primeiras letras maiúsculas
