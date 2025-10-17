class login < site_prism::page
    set_url '/br/pt'
    element :btnLogin, 'a[class="active"]'
    element :inputMail, 'input[id="authEmail"]'
    element :inputPass, 'input[id="authPass"]'
    element :btnEnter, 'button[class="btn btn-primary btn-block btn-flat"]'
    element :lnkNtuQmc, 'button[class="link-no-arquive ng-binding"]'
    element :txtUserName, 'p[class="ng-binding"]'

    def click_button_login
        btnLogin.click
    end

    def fill_in_acess_data
        inputMail.visible?
        inputMail.set 'admin@admin.com.br'

        inputPass.visible?
        inputPass.set 'W@Sinfo1985'
    end

    def button_click(text_entrar)
        puts text_entrar
        btnEnter.click
    end

    def button_click(text_entrar)
        puts text_entrar
        binding.pry
        find('*["btn btn-primary btn-block btn-flat"]', text: text_entrar).click
        # btnEnter(text: text_entrar).text.click
    end

    def validate_login_user
        txtExpected = "Lis"
        if txtUserName.text.eql?(txtExpected) != true
            raise "Esperado: #{txtExpected}, mas retornou #{txtUserName.text}"
        end
    end
end