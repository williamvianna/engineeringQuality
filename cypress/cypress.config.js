const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
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