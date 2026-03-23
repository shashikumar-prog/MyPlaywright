import { test } from '@playwright/test';


test ('Hello',async function abc({page})  {

await page.goto('https://www.amazon.in/');  

await page.goto('https://www.saucedemo.com/');
});

test ( 'Hello welocme to JS', async({page}) => {
await page.goto ('https://fc-th-qa.ivydms.com/web/DMS/Welcome');
await page.pause();
 });