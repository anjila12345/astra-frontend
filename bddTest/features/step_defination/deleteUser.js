const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')
const { assert } = require('chai')

setDefaultTimeout(60 * 1000);

let driver
const TIMEOUT = 10000
let counter = 0
let email

Given('A normal user has already registered', async () => {
    email = "testadmin@test.com"
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/register')
    await driver.findElement(By.id('name')).sendKeys('test')
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys('test')
    await driver.findElement(By.id('confirmPassword')).sendKeys('test')
    await driver.findElement(By.className('btn-success')).click()
    await driver.close()
})

Given('I am on login page to delete a user', async () => {
    driver = new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3000/login')
})

Given('I input {string} as admin email and I input {string} as my password to delete a user', async (email, password) => {
    await driver.findElement(By.id('email')).sendKeys(email)
    await driver.findElement(By.id('password')).sendKeys(password)
})

When('I click the "signin" button', async () => {
    await driver.findElement(By.className('btn-success')).click()
})

When('I go to the user section to delete a user', async () => {
    await driver.manage().setTimeouts( { implicit: TIMEOUT, pageLoad: 
        TIMEOUT, script: TIMEOUT } )
    await driver.findElement(By.id('adminmenu')).click()
    await driver.findElement(By.xpath('/html/body/div/header/nav/div/div/div/div[2]/div/a[1]')).click()
})

When('I click on the delete icon button', async () => {
    let emailId

    do {
        counter++
        emailId = await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody/tr[${counter}]/td[3]`)).getText()
            .then((getId) => {
                return getId
            })
    } while (emailId.toLowerCase()!=email.toLowerCase());
    await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody/tr[${counter}]/td[5]/button`)).click()
})

When('I click on "OK" button on the alert tab', async () => {
    await driver.switchTo().alert().accept();
})

Then('the user should be deleted', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`/html/body/div/main/div/div/table/tbody/tr[${counter}]/td[4]`)).getText()
    .then(user => {
            assert.notEqual(user, email, 'User updated')
        })
    driver.close()
})
