# puts "Informe o valor"
# v = gets.to_i

# if - valida primeiro o valor verdadeiro
# if v == 1
#     puts "Você digitou o valor 1"
# else
#     puts "Você digitou o valor 2"
# end

# if v == 1
#     puts "Você digitou o valor #{v}"
# elsif v == 2
#     puts "Você digitou o valor #{v}"
# else
#     puts "Você não digitou o valor 1 e nem o valor 2. Você digitou o valor #{v}"
# end

# unless - valida primeiro o valor falso
# unless v == 2
#     puts "Falso"
# else
#     puts "Verdadeiro"
# end

# case v
# when 0
#     puts "Você digitou #{v}"
# when 1
#     puts "Você digitou #{v}"
# when 2
#     puts "Você digitou #{v}"
# else
#     puts "Opção invalida"
# end

# Verificar se o número é par ou ímpar
puts "Informe um valor para saber se é par ou ímpar"
valor = gets.to_f
total = valor % 2
if total == 0
    puts "O valor informado é par"
else
    puts "O valor informado é ímpar"
end