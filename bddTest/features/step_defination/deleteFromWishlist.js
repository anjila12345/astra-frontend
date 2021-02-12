const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000

Given('I am on login page to checkout', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as my normal user email and I input {string} as my password for checkout', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click on the "Sign In" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I add product to cart', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div/div/a/div')).click()
    await driver.findElement(By.xpath('/html/body/div/main/div/div[1]/div[3]/div/div/div[4]/button')).click();
})

When('I click on "checkout"', async () => {
    await driver.findElement(By.className('btn-block')).click()
})

When('I enter {string} as address, {string} as city, {string} as postal code and {string} as country', async (address, city, postal, country) => {
    await driver.findElement(By.id('address')).sendKeys(address)
    await driver.findElement(By.id('city')).sendKeys(city)
    await driver.findElement(By.id('postalCode')).sendKeys(postal)
    await driver.findElement(By.id('country')).sendKeys(country)
})

When('I enter click on the "continue" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I click on "Cash on Delivery" method and click "continue" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I click "Place order" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

Then('there should be a order placed', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/h1')).getText()
        .then(detail => {
            assert.isNotEmpty(detail, 'Product in cart checkout')
        })
    driver.close()
})