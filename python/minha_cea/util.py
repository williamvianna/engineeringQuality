from selenium import webdriver
import time
import datetime


navegador = webdriver.Chrome()


def login():
    navegador.maximize_window()
    navegador.get('https://frontend-cea-minhacea.apps.ocpah1.cea.com.br/login')
    evidencia()
    navegador.find_element_by_xpath('//*[@id="mat-input-0"]').send_keys('embaixadoracea@gmail.com')
    navegador.find_element_by_xpath('//*[@id="mat-input-1"]').send_keys('S&nh@1976!')
    evidencia()
    navegador.find_element_by_xpath('/html/body/app-root/app-login/div/div/form/div[3]/button').click()
    evidencia()


def evidencia():
    time.sleep(5)
    nomeArquivo = datetime.datetime.now().strftime('%Y-%M-%d_%H%M%S' + '.png')
    navegador.save_screenshot('C:\Projetos_Python\projetos_python\MinhaCea\Evidencias/' + nomeArquivo)


def minhas_vendas():
    login()
    navegador.find_element_by_xpath('/html/body/app-root/app-pages/app-sidebar/div/mat-sidenav-container/mat-sidenav'
                                    '/div/mat-nav-list/mat-list/a[5]/div/div[2]/p').click()
    evidencia()


def segmentacao():
    login()
    navegador.find_element_by_xpath('/html/body/app-root/app-pages/app-sidebar/div/mat-sidenav-container/mat-sidenav'
                                    '/div/mat-nav-list/mat-list/a[5]/div/div[2]/p').click()
    evidencia()
