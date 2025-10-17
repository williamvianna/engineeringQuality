Dado('que eu esteja na pagina de login do projeto Qa.Coders') do
    login.load
    login.click_button_login
end

Quando('informo os dados de acesso') do
    login.fill_in_acess_data
end

E('clico no botão {string}') do |text_entrar|
    login.button_click(text_entrar)
end

Então('sou direcionado para a página home logada') do
    login.validade_login_user
end
