"""
Operadores Lógicos
and, or, not
in e not in
"""
# # (Verdadeiro e Falso) = Falso
# comparacao1 and comparacao

# # Verdadeiro OU Verdadeiro
# comp1 OR comp2

# a = 2
# b = 3
#
# if not b > a:
#     print('B é maior do que A.')
# else:
#     print('A é maior do que B.')

# nome = 'William'
#
# if 'iam' not in nome:
#     print('Executei.')
# else:
#     print('Existe o texto')

usuario = input('Nome de usuário: ')
senha = input('Senha do usuário: ')
senha = int(senha)

usuario_bd = 'william'
senha_bd = 123456

if usuario_bd == usuario and senha_bd == senha:
    print('Você está logado no sistema.')
else:
    print('Usuário ou senha inválidos.')

