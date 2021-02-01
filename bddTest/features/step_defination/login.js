const { axios } = require('axios')
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')

setDefaultTimeout(60 * 1000);

let driver

Given('I am in login page', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3001/login')
})

Given('I enter "test@test.com" as my email', async () => {
    await driver.findElement(By.id('username')).sendKeys('user2')
})

Given('I enter "test" as my password', async () => {
    await driver.findElement(By.id('password')).sendKeys('password')
})

When('I click on the "sign in" button', async () => {
    await driver.findElement(By.id('Signin')).click()
})

Then('I should be on the login success page', async () => {
    // driver.sleep(50000)
    // driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    let pr = driver.wait(until.elementLocated(By.id('logout')), 5000)
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