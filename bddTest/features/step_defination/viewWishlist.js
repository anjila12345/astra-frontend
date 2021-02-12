const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000
let orderId

Given('A user has already placed order', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
    await driver.findElement(By.id('email')).sendKeys("test@test.com")
    await driver.findElement(By.id('password')).sendKeys("test")
    await driver.findElement(By.className('btn-success')).click()
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div/div/a/div')).click()
    await driver.findElement(By.xpath('/html/body/div/main/div/div[1]/div[3]/div/div/div[4]/button')).click();
    await driver.findElement(By.className('btn-block')).click()
    await driver.findElement(By.id('address')).sendKeys('test address')
    await driver.findElement(By.id('city')).sendKeys('test city')
    await driver.findElement(By.id('postalCode')).sendKeys('44600')
    await driver.findElement(By.id('country')).sendKeys('Nepal')
    await driver.findElement(By.className('btn-success')).click()
    await driver.findElement(By.className('btn-success')).click()
    await driver.findElement(By.className('btn-success')).click()
    await driver.findElement(By.xpath('/html/body/div/main/div/h1')).getText().then((id) => {
        orderId = id.slice(6, id.length)
    })
    driver.close()
})

Given('I am on login page to manage order', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as admin email and I input {string} as my password to manage order', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click on the "Signin" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the order section', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElement(By.xpath('/html/body/div/header/nav/div/div/div/div[2]/div/a[4]')).click()
})

When('I click on the "Details" button', async () => {
    let counter = 0
    let id

    do {
        counter++
        id = await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody/tr[${counter}]/td[1]`)).getText()
            .then((getId) => {
                return getId
            })
    } while (id.toLowerCase()!=orderId.toLowerCase());
    await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody/tr[${counter}]/td[7]/a`)).click()
})

When('I click to the "Mark as Paid" button to make the order paid', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I click to the "Mark As Delivered" button to make the order delivered', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.className('btn-success')).click()
})

Then('there should be date on the "Paid" and "Delivered" of order', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div/div[1]/div')).getText()
        .then(delivered => {
            assert.notEqual(delivered, 'Not Delivered', 'Order viewed')
        })
    await driver.findElement(By.xpath('/html/body/div/main/div/div/div[1]/div/div[2]/div')).getText()
        .then(payment => {
            assert.notEqual(payment, 'Not Paid', 'Order viewed')
        })
    driver.close()
})
