import { test } from '@playwright/test';

test ('10-wap launch amazon site', async ({page}) => {

await page.goto('https://www.amazon.in/');  

});