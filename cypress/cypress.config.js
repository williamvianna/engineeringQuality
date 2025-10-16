const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    // Configura listeners e plugins
    setupNodeEvents(on, config) {
      // Integrando o cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    // Relatórios
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/mochawesome-report',  // pasta dos relatórios
      charts: true,
      reportPageTitle: 'Relatório Cypress',
      embeddedScreenshots: true,               // screenshots dentro do relatório
      overwrite: false,
      html: true,
      json: true
    },

    // Screenshots
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',

    // Vídeos
    video: true,
    videosFolder: 'cypress/videos'
  },
});
