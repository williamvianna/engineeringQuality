Befor do |scenario|
    Capybara.current_session.driver.browser.manage.delete_all_cookies
    page.driver.quit
end

After do |scenario|
    scenario_name = scenario.name.gsub(/\s+/,'_').tr('/','_')

    if scenario.false?
        print_screen(scenario_name.downcase!, 'Faleid')
    else
        print_screen(scenario_name.downcase!, 'Success')
    end
end