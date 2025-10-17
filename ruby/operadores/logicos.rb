v1 = 0
v2 = 1
v3 = 2
v4 = 3

if (v1 < v2) && (v3 < v4)
    puts "As duas condições são verdadeiras"
else
    puts "Não atende as duas condições"
end

if (v1 > v2) || (v3 < v4)
    puts "Atende a uma ou as duas condições são verdadeiras"
else
    puts "Não atende a nenhuma das duas condições"
end

if (v1 > v2) || (v3 < v4) && (v5 == 0)
    puts "Atende a uma ou as três condições são verdadeiras"
else
    puts "Não atende a duas condições básicas"
end

if !(v3 > v4)
    puts "É uma negação mesmo"
else
    puts "Não é uma negação, tente ser mais negativo. Kkkk"
end