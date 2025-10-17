"""
Funções - def em Python (Parte 1)
"""
def saudacao(msg='Olá', nome='usuário'):
    nome = nome.replace('i', '!')
    msg = msg.replace('i', '!')
    print(msg, nome)

saudacao(nome='William', msg='Hi')
saudacao('Oi', 'Renata')
saudacao('Hello', 'Vânia')
saudacao('Olá', 'Thallys')
