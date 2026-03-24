    import {test} from '@playwright/test'
    test.only ('Login scenario to saucedemo', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("//input[@id='password']").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()
    console.log("you just completed one simple login flow using playwight-congrats");
    await page.waitForTimeout(5000);
});