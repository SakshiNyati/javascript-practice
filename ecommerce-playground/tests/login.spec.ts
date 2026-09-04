import {chromium, test} from "@playwright/test"

test("Login test demo", async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//*[@id='widget-navbar-217834']/ul/li[6]/a/div/span");
    await page.getByText("Login").click();

    await page.fill("input[name='email']", "koushik350@gmail.com");
    await page.fill("input[name='password']", "Pass123$");
    await page.click("input[value='Login']");

    await page.close();
    await context.close();
    await browser.close();
})  