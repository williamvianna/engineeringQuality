const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      charts: true,
      reportPageTitle: 'Relatório Cypress',
      embeddedScreenshots: true,
      overwrite: false,
      html: false,
      json: true
    },

    screenshotOnRunFailure: true,
    screenshotsFolder: 'screenshots',

    video: true,
    videosFolder: 'videos'
  },
});