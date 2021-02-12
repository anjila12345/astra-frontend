const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 300000000
let productId;

Given('I am on login page to delete a product', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I enter {string} as my admin email and {string} as my password', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I press on "sign in" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the products section', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElements(By.className('dropdown-item'))
        .then((elements) => {
            elements[1].click()
        })
})

When('I click on the delete icon', async () => {
    await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/table/tbody/tr[1]/td[1]')).getText()
        .then((text)=> {
            productId = text
        })
    await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/table/tbody/tr[1]/td[6]/button')).click()
})

When('I click on the "OK" button on the alert tab', async () => {
    await driver.switchTo().alert().accept();
})

Then('the product name should be deleted', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div[2]/table/tbody/tr[1]/td[1]')).getText()
        .then(id => {
            assert.notEqual(id, productId, 'product deleted')
        })
    driver.close()
})