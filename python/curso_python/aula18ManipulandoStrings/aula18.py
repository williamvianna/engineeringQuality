"""
Manipulando strings
* String indices
* Fatiamento de strings [inicio:fim:passo]
* Funções built-in len, abs, type, print, etc...
Essas funções podem ser usadas diretamente em cada tipo.

Você pode conferir tudo isso em:
 https://docs.python.org/3/library/stdtypes.html (tipos built-in)
 https://docs.python.org/3/library/functions.html (funções built-in)
"""
# positivos   [012345678]
texto       = 'Python_s2'
# negativos  -[987654321]
# [2:6] - o indice final não pega
# [:6] - inicia do primeiro e vai até o indice indicado
# [7:] - inicia no indice indicado e vai até o final
nova_string = texto[2:6]
print(nova_string)
