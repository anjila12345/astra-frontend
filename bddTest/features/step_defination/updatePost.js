const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 300000000

Given('I am on login page', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as my admin email and I input {string} as my password', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click on "sign in" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the product section', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElements(By.className('dropdown-item'))
        .then((elements) => {
            elements[1].click()
        })
    // await driver.findElements(By.className('dropdown-item'))[1].click()
})

When('I click on the edit icon', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.className('btn-light')).click()
})

When('I input {string} as product name', async (string) => {
    await driver.findElement(By.id('name')).clear()
    await driver.findElement(By.id('name')).sendKeys(string)
})

When('I click on the "update" button in product page', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

Then('the product name should be updated to {string}', async (updatedName) => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/table/tbody/tr[1]/td[2]')).getText()
        .then(name => {
            assert.equal(name.toLowerCase(), updatedName.toLowerCase(), 'profile name updated')
        })
    driver.close()
})