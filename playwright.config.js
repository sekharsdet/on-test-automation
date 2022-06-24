const config = {
  workers: 1,
  use: {
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    retries: 2,
    timeout: 100000,
    reporter: 'allure-playwright',
    ignoreHTTPSErrors: true,
    baseURL: "https://staging-beta.on-running.com"
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'Webkit', use: { browserName: 'webkit' } },
  ],
  reporter: [
    ['line'], 
    ['allure-playwright']
  ],
  launchOptions: {
    args: ["--start-maximized"]
  }
};

module.exports = config;