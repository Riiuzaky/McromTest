// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['allure-playwright']],
});
