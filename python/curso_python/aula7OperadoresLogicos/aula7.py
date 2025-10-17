nome = 'William' # str
idade = 44 # int
altura = 1.70 # float
e_maior = idade > 18 # bool
peso = 70
imc = peso / altura ** 2

print(nome, 'tem', idade, 'anos de idade e seu imc é', imc)
print(f'{nome} tem {idade} anos de idade e seu imc é {imc:.2f}')
print('{} tem {} anos de idade e seu imc é {:.2f}'.format(nome, idade, imc))
print('{n} tem {i} anos de idade e seu imc é {im}'.format(n=nome, i=idade, im=imc))
