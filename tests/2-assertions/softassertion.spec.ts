import {test, expect} from '@playwright/test';

test('soft assertion', async ({page}) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__inner .navbar__title');
    // Soft assertion continues test execution even if assertion fails
    await expect.soft(title).toHaveText("fail", {timeout: 3000}); // Test continues if text doesn't match
    await page.locator("text=Get Started").click()
    // Regular assertion would stop test if it fails
    await expect(title).toHaveText('Playwright'); // Test stops here if text doesn't match
});