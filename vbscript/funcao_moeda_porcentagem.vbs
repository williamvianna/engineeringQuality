'Format Functions

'Função formato de moeda
'msgbox (FormatCurrency(2000000))
'msgbox (FormatCurrency(.30, -1))
'msgbox (FormatCurrency(-40, -1))

'Format Number
'msgbox (FormatNumber(80))
'msgbox (FormatNumber(.90, -1))

c = .76
MsgBox FormatPercent(c, 0)
MsgBox FormatPercent(5/345)