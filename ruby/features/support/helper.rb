module helper
    def print_screen(file_name, result)
        file_path = "report/screenshots/tests#{result}"
        screenshot = "#{file_path}/#{file_name}.png"
        page.save_screenshot(screenshot)
        attach(screenshot, 'image/png')
    end
end