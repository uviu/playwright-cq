import{test, expect} from "@playwright/test";

//when running the whole file
// .skip modifier will skip execution of this test group
// All tests within this group will be skipped, test "three" will run
test.describe.skip("group of tests", () => {
    test("one", async ({page}) => {
        await page.goto("https://playwright.dev");
        console.log(page.url());
    });
    test("two", async ({page}) => {
        await page.goto("https://playwright.dev/docs/intro");
        console.log(page.url());
    });
});

// This test will run because it's outside the skipped test group
test("three", async ({page}) => {
    await page.goto("https://playwright.dev/docs/api/class-playwright");
    console.log(page.url());
});
