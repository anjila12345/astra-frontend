const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000

Given('I am on login page to view all user', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as admin email and I input {string} as my password to view all user', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click the "signIn" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the user section to view all user', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElement(By.xpath('/html/body/div/header/nav/div/div/div/div[2]/div/a[1]')).click()
})

Then('the user should be list of users', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody`)).getText()
    .then(list => {
            assert.isNotEmpty(list, 'List of users viewed')
        })
    driver.close()
})
