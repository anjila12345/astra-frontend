const { axios } = require('axios')
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')

setDefaultTimeout(60 * 1000);

let driver

Given('I am in agent registration page', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3001/agentregister')
})

Given('I enter "agent1" as my firstname', async () => {
    await driver.findElement(By.id('firstname')).sendKeys('agent1')
})

Given('I enter "agent1" as my lastname', async () => {
    await driver.findElement(By.id('lastname')).sendKeys('agent1')
})

Given('I enter "agent1@gmail.com" as my email', async () => {
    await driver.findElement(By.id('email')).sendKeys('agent1@gmail.com')
})

Given('I enter "agent1" as my username', async () => {
    await driver.findElement(By.id('username')).sendKeys('agent1')
})

Given('I enter "password123" as my password', async () => {
    await driver.findElement(By.id('password')).sendKeys('password123')
})

When('I press the "sign up" button', async () => {
    await driver.findElement(By.id('Signup')).click()
})

Then('I should be on the agent login page', async () => {
    // driver.sleep(50000)
    // driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    driver.wait(until.elementLocated(By.id('registerh')), 5000)
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