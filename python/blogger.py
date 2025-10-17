from selenium import webdriver


def blogger():
    navegador = webdriver.Chrome()
    navegador.maximize_window()
    navegador.get('https://william-vianna.blogspot.com')
    navegador.find_element_by_xpath('//*[@id="BlogArchive1_ArchiveList"]/ul[1]/li/ul[1]/li/ul/li[7]/a').click()
    navegador.find_element_by_xpath('//*[@id="BlogArchive1_ArchiveList"]/ul[1]/li/ul[1]/li/ul/li[1]/a').click()
    navegador.find_element_by_xpath('//*[@id="BlogArchive1_ArchiveList"]/ul[1]/li/ul[1]/li/ul/li[2]/a').click()
    navegador.find_element_by_xpath('//*[@id="BlogArchive1_ArchiveList"]/ul[1]/li/ul[1]/li/ul/li[7]/a').click()
    navegador.close()


blogger()
blogger()
