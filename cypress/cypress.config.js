const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/mochawesome-report',
      charts: true,
      reportPageTitle: 'Relatório Cypress',
      embeddedScreenshots: true,
      overwrite: false,
      html: true,
      json: true
    },

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    video: true,
    videosFolder: 'cypress/videos'
  },
});