from selenium import webdriver


navegador = webdriver.Chrome()


def login():
    navegador.maximize_window()
    navegador.get('https://pt-br.facebook.com/')
    navegador.find_element_by_xpath('//*[@id="email"]').send_keys('projetosdetestes@gmail.com')
    navegador.find_element_by_xpath('//*[@id="pass"]').send_keys('Testes123')
    navegador.find_element_by_xpath('/html/body/app-root/app-login/div/div/form/div[3]/button').click()
    botao = navegador.find_element_by_xpath('//*[@type="submit"]')
    botao.submit()


def facebook():
    login()
    navegador.find_element_by_xpath('//*[@id="facebook"]/body/div[3]/div[1]/div/div[2]').click()
