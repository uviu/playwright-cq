import {expect, test} from "@playwright/test";

test('polling', async () => {
    // poll() assertion repeatedly checks returned value for 2 seconds by default
    // until it matches expected condition
    // in this case it checks if false === true, which will always fail
    await expect.poll(async () => {
        return true; // returning constant value for demo
        }, {
            timeout: 10000, // Maximum time to wait for condition to be true
            intervals: [150, 250, 350, 450] // Custom polling intervals in milliseconds
        }
    ).toBe(false)
});