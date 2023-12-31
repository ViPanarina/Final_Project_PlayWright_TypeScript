import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 180 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    actionTimeout: 5000,
    baseURL: 'https://erich416.softr.app',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'local chromium',
      use: {
        viewport: {width: 1280, height: 720},
        browserName: 'chromium',
        video: 'on',
        trace: 'on',
        screenshot: 'on',
        headless: false,
        launchOptions: {
          slowMo: 0,
        },
      },
    },

    {
      name: 'local firefox',
      use: {
        viewport: {width: 1280, height: 720},
        browserName: 'firefox',
        video: 'on',
        trace: 'on',
        screenshot: 'on',
        headless: false,
        launchOptions: {
          slowMo: 0,
        },
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
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
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
