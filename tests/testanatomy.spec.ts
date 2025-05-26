import {test, expect} from '@playwright/test';

//**when using jetbrains add the compile options like --headed it the edit run configurations tab under the dropdown playwright options

// This test navigates to Playwright website and verifies that page title contains 'Playwright' text
test('basic test', async ({page}) => {

    // Navigate to Playwright documentation homepage
    await page.goto('https://playwright.dev');

    // Find title element in the navigation bar 
    const title = page.locator('.navbar__inner .navbar__title');

    // Verify that title text matches expected value
    await expect(title).toHaveText('Playwright');
});