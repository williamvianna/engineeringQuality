# numero_inteiro = input('Digite um número inteiro: ')
#
# if not numero_inteiro.isdigit():
#     print('Isso não é um número inteiro')
# else:
#     numero_inteiro = int(numero_inteiro)
#
#     if not numero_inteiro % 2 == 0:
#         print(f'{numero_inteiro} é ímpar')
#     else:
#         print(f'{numero_inteiro} é par')

# horario = input('Digite um horário (0-23): ')
#
# if horario.isdigit():
#     horario = int(horario)
#
#     if horario < 0 or horario > 23:
#         print('Horário deve estar entre 0 e 23')
#     else:
#         if horario <= 11:
#             print('Bom dia!')
#         elif horario <= 17:
#             print('Boa tarde!')
#         else:
#             print('Boa noite!')
# else:
#     print('Por favor, digite um horário entre 0 e 23.')

nome = input('Digite o seu primeiro nome: ')
tamanho = len(nome)

if tamanho <= 4:
    print('Seu nome é curto.')
elif tamanho <= 6:
    print('Seu nome é normal.')
else:
    print('Seu nome é grande.')
