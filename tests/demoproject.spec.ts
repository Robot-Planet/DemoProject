const {test, expect} = require('@playwright/test')

test ('validate page title' , async ({ page}) => {
    //await page.goto('https://www.saucedemo.com/');
    await page.goto('https://www.xxx.saucedemoXXX.com/');
    await expect(page).toHaveTitle('Swag Labs')

});