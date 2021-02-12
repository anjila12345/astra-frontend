const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000

Given('I am on login page to add product to cart', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as my normal user email and I input {string} as my password', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click on "Sign In" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I click on a product', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div/div/a/div')).click()
})

When('I enter {string} as quantity', async (noOfProduct) => {
    let dropDown =  await driver.findElement(By.xpath('/html/body/div/main/div/div[1]/div[3]/div/div/div[3]/div/div[2]/select'));
    await dropDown.click()
    await dropDown.findElement(By.css(`option[value='${noOfProduct}']`)).click();
})

When('I click "Add to cart"', async () => {
    (await driver.findElement(By.xpath('/html/body/div/main/div/div[1]/div[3]/div/div/div[4]/button'))).click();
})

Then('there should be a product in the cart', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div')).getText()
        .then(list => {
            assert.notEqual(list, 'Your cart is empty Go Back', 'Product added to cart')
        })
    driver.close()
})