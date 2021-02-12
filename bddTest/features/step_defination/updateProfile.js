const { axios } = require('axios')
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver

Given('I am at login page', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as my email and I input {string} as my password', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click the "sign in" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})
const TIMEOUT = 300000000
When('I go to the profile', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('username')).click()
    await driver.findElement(By.className('dropdown-item')).click()
})

When('I input {string} as my updated name', async (string) => {
    await driver.findElement(By.id('name')).clear()
    await driver.findElement(By.id('name')).sendKeys(string)
})

When('I click on the "update" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

Then('My profile name should be updated to {string}', async (updatedName) => {
    await driver.sleep(1000)
    await driver.findElement(By.id('username')).getText()
        .then(name => {
            assert.equal(name.toLowerCase(), updatedName.toLowerCase(), 'profile name updated')
        })
    driver.close()
})