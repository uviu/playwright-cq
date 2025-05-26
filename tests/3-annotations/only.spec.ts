import{test, expect} from "@playwright/test";

//when running the whole file
// .only modifier focuses execution on this specific test group
// Only tests within this group will run, test "three" will be skipped
test.describe.only("group of tests", () => {
    test("one", async ({page}) => {
        await page.goto("https://playwright.dev");
        console.log(page.url());
    });
    test("two", async ({page}) => {
        await page.goto("https://playwright.dev/docs/intro");
        console.log(page.url());
    });
});

// This test will be skipped because it's outside the .only test group
test("three", async ({page}) => {
    await page.goto("https://playwright.dev/docs/api/class-playwright");
    console.log(page.url());
});
