# Informe casa decimais sempre com . Ex: 1.80 para altura

puts "Informe o peso"
peso = gets.to_f

puts "Informe a altura"
altura = gets.to_f

puts "Seu IMC é: #{imc = peso / (altura * altura)}"
