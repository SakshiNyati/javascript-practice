import { test, expect } from "playwright/test";

test("Form basic interactions test", async({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");

    const messageInputLocator = page.locator("input#user-message");
    // await messageInputLocator.scrollIntoViewIfNeeded();
    console.log(await messageInputLocator.getAttribute("placeholder"));
    expect(messageInputLocator).toHaveAttribute("placeholder", "Please enter your Message");    // case sensitive
})