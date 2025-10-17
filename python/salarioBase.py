nome = (input("Digite o nome: "))
cargo = (input("Digite o cargo: "))
salario_base=float(input("Digite o salario base: "))
desconto = 0
salario_liquido = salario_base
nome = nome
cargo = cargo

if salario_base >= 0:
    
    if salario_base < 2000:
        desconto = (salario_base * 15) / 100
        salario_liquido = salario_base - desconto
    
    if salario_base >= 2000 and salario_base <= 2999.99:
        desconto = (salario_base * 25) / 100
        salario_liquido = salario_base - desconto
    
    if salario_base < 3000 and salario_base >= 2000.01:
        desconto = (salario_base * 10) / 100
        salario_liquido = salario_base - desconto
        
    if salario_base >= 3000 and salario_base <= 4999.99:
        desconto = (salario_base * 20) / 100
        salario_liquido = salario_base - desconto
    
    if salario_base >= 5000:
        desconto = (salario_base * 30) / 100
        salario_liquido = salario_base - desconto
        
else:
    salario_liquido = salario_base

print(
    f"\nNome           : {nome}",
    f"\nCargo          : {cargo}",
    f"\nSalário Base   : R${salario_base:.2f}",
    f"\nDesconto       : R${desconto:.2f}",
    f"\nSalário Liquido: R${salario_liquido:.2f}",
)
