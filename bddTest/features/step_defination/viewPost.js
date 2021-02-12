const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000

Given('I am on login page to view product details', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as my admin\'s email and I input {string} as my password', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click on "Sign in" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the product section for admin', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElements(By.className('dropdown-item'))
        .then((elements) => {
            elements[1].click()
        })
})

Then('there should be product details list', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/table/tbody')).getText()
        .then(list => {
            assert.isNotEmpty(list, 'Product details viewed')
        })
    // driver.close()
})

Given('I am on Home page', async () => {
    await driver.get('http://localhost:3000/')
})

Then('There should be a list of products', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div')).getText()
        .then(list => {
            assert.isNotEmpty(list, 'Product viewed')
        })
    driver.close()
})