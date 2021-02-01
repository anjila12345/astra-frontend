const { axios } = require('axios')
const { Given, When, Then, setDefaultTimeout } = require('cucumber')
const { Builder, By, until } = require('selenium-webdriver')

setDefaultTimeout(60 * 1000);

let driver

Given('I am in post job page', async () => {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.get('http://localhost:3001/postjob')
})

Given('I enter "first test post" as my Job-title', async () => {
    await driver.findElement(By.id('title')).sendKeys('first test post')
})

Given('I enter "test description" as my Description', async () => {
    await driver.findElement(By.id('descriptiond')).sendKeys('test description')
})

When('I click on the "submit" button', async () => {
    await driver.findElement(By.id('insert')).click()
})

Then('I should be on the same page', async () => {
    // driver.sleep(50000)
    // driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    driver.wait(until.elementLocated(By.id('clear')), 5000)
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