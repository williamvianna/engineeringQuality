from vendas.calc_precos import aumento, reducao
from vendas.formata import preco as preco2

preco = 49.90
preco_com_aumento = aumento(valor=preco, porcentagem=15, formata=True)
print(preco_com_aumento)

preco_com_reducao = reducao(valor=preco, porcentagem=15, formata=True)
print(preco_com_reducao)

print(preco2.real(59.95))
