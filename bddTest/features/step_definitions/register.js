const { axios } = require('axios')
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')

setDefaultTimeout(60 * 1000);

let driver

Given('I am in registration page', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3001/register')
})

Given('I enter "user12" as my firstname', async () => {
    await driver.findElement(By.id('firstname')).sendKeys('user12')
})

Given('I enter "user12" as my lastname', async () => {
    await driver.findElement(By.id('lastname')).sendKeys('user12')
})

Given('I enter "user12@gmail.com" as my email', async () => {
    await driver.findElement(By.id('email')).sendKeys('user12@gmail.com')
})

Given('I enter "user12" as my username', async () => {
    await driver.findElement(By.id('username')).sendKeys('user12')
})

Given('I enter "password" as my password', async () => {
    await driver.findElement(By.id('password')).sendKeys('password')
})

When('I click on the "sign up" button', async () => {
    await driver.findElement(By.id('Signup')).click()
})

Then('I should be on the login page', async () => {
    // driver.sleep(50000)
    // driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    let pr = driver.wait(until.elementLocated(By.id('Signin')), 5000)
        .then(function(elm) {
            console.log(elm)
            return true
        }).catch(function(ex) {
            console.log('fail')
            return false
        });
    // driver.close();

    // console.log(await driver.findElement(By.id('username')))
    // driver.executeScript(`
    //     setTimeout(() => {
    //         var current = document.getElementById('username');
    //         console.log(current)
    //         return current;
    //     }, 2000);
    // `).then (current => {
    //     console.log(current)
    // })
})