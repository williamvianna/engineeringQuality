require 'capybara/cucumber'
require 'selenium-webdriver'
require 'site_prism'
require 'pry'

require_relative 'helper.rb'
require_relative 'page_helper.rb'

ENVIRONMENT = ENV['ENVIRONMENT']

puts "Ambiente >> #{ENVIRONMENT}"
CONFIG = YAML.load_file(file.dirname(__FILE__) + "/environments/#{ENVIRONMENT}.yml")

World(helper)
World(pages)

Capybara.configure do |config|
    config.default_driver = :selenium_chrome
    config.app_host = CONFIG['url_default']
    config.default_max_wait_time = 10
end