
# Utilizando For

'''
for num in range(1,101):
    saida = ""
    if num % 3 == 0:
        saida = saida + "Fizz"
    if num % 5 == 0:
        saida = saida + "Buzz"
    if num % 5 != 0 and num % 3 != 0:
        saida = saida + str(num)
    print(saida)
'''
# Utilizando lambda
print(*map(lambda i: 'Fizz'*(not i%3)+'Buzz'*(not i%5) or i, range(1,101)),sep='\n')
