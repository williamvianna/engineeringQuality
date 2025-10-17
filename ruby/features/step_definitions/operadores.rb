Dado('que eu compre {int} caixas de uva') do |quantidade|
    @cxUva = quantidade
end

Quando('eu vendo {int} caixas para meu primo Leandro') do |qtdVendida|
    @cxVendida = qtdVendida
    @total = @cxUva - @cxVendida
end

Entao('quantas caixas sobram') do
    expect(@total).to eq 7
end


Entao('deve sobrar apenas {int} caixas de uva') do |qtdSobra|
    expect(@total).to eq qtdSobra
end