// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.UI_BASE_URL || 'https://www.saucedemo.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'api',
      testDir: './e2e/api',
      testMatch: ['**/*.spec.js'],
      use: { baseURL: process.env.API_BASE_URL || 'https://restful-booker.herokuapp.com' },
    },

    {
      name: 'ui',
      testDir: './e2e',
      testMatch: ['*.spec.js', 'login/**/*.spec.js'],
      use: { baseURL: process.env.UI_BASE_URL || 'https://www.saucedemo.com', ...devices['Desktop Chrome'] },
    },
    
    {
      name: 'chromium',
      testDir: './e2e',
      testMatch: ['*.spec.js', 'login/**/*.spec.js'],
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      testDir: './e2e',
      testMatch: ['*.spec.js', 'login/**/*.spec.js'],
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      testDir: './e2e',
      testMatch: ['*.spec.js', 'login/**/*.spec.js'],
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      testDir: './e2e',
      testMatch: ['*.spec.js', 'login/**/*.spec.js'],
      use: { ...devices['Pixel 5'] },
    },
    { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'chromium:saved-credentials',
      use: { ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
        viewport: { width: 1920, height: 1080 },
       },
       dependencies: ['setup'],
    },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});