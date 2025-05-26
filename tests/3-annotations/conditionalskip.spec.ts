import {test, expect} from "@playwright/test";

// This test file demonstrates conditional test skipping
// First two tests have conditional execution based on browser type
test.describe("group of tests", () => {
    test("one", async ({page, browserName}) => {
        test.skip(
            browserName == "chromium",
            "This test is skipped on Chromium"
        );
        await page.goto("https://playwright.dev");
        console.log(page.url());
    });
    test("two", async ({page, browserName}) => {
        test.fixme(
            browserName == "chromium",
            "This test is marked as a fixme, meaning it has a bug"
        );
        await page.goto("https://playwright.dev/docs/intro");
        console.log(page.url());
    });
});

// This test runs unconditionally for all browser types
test("three", async ({page}) => {
    await page.goto("https://playwright.dev/docs/api/class-playwright");
    console.log(page.url());
});