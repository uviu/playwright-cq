import {test, expect} from '@playwright/test';

// Demonstrating a simple assertion expecting true to be false (will fail)
test('concept expect assertion', async () => {
    // toBeFalsy() checks if value is false, null, undefined, 0 or empty string
    expect(true, "expected to be true but was false").toBeFalsy();
});

// Testing text content of an element on playwright.dev (will fail)
test('expected string', async ({page}) => {
    // Navigate to Playwright docs site
    await page.goto('https://playwright.dev');

    // Find the title element in navigation bar
    const title = page.locator('.navbar__inner .navbar__title');

    // Assert the title text is 'fail' (will fail since actual text is 'Playwright')
    // Timeout after 3 seconds of waiting
    await expect(title).toHaveText('fail', {timeout: 3000});
});