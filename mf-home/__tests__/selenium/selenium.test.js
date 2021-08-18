require('msedgedriver');
const assert = require('assert');
const {Builder, By, until, Capabilities} = require('selenium-webdriver');

const caps = new Capabilities()
caps.setPageLoadStrategy("normal")

describe('Calculator Test Suite', function() {
  let driver
  const url = 'http://localhost:8080'

  // Specify browser
  before(async function() {
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .build();
  })

  it('Calculator app is visible', async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(By.id('app')), 2000);
    let actualVisibility = await driver.findElement(By.id('app')).isDisplayed();
    assert.ok(actualVisibility);
  });

  it('Navbar is visible', async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(By.xpath(`//iframe[@id='display']`)), 1000);
    let actualVisibility = await driver.findElement(By.xpath(`//iframe[@id='display']`)).isDisplayed();
    assert.ok(actualVisibility);
  });

  it('Display is visible', async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(By.id('display')), 1000);
    let actualVisibility = await driver.findElement(By.id('display')).isDisplayed();
    assert.ok(actualVisibility);
  });

  it('Buttons is visible', async function() {
    await driver.get(url);
    await driver.wait(until.elementLocated(By.id('buttons')), 1000);
    let actualVisibility = await driver.findElement(By.id('buttons')).isDisplayed();
    assert.ok(actualVisibility);
  });

  it('Button 1 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '1'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 2 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '2'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 3 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '3'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 4 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '4'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 5 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '5'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 6 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '6'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 7 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '7'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 8 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '8'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 9 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '9'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Button 0 is clickable', async function() {
    await driver.get(url)
    await driver.switchTo().frame(2)
    const number = '0'
    const button = await driver.findElement(By.xpath(`//button[contains(text(),${number})]`))

    let buttonStatus = await button.isEnabled()
    assert.ok(buttonStatus)
    await button.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)

    let displayValue = await driver.findElement(By.id('display-val')).getText()
    assert.strictEqual(displayValue, number)
  });

  it('Operator buttons are clickable', async function() {
    await driver.get(url);
    await driver.switchTo().frame(2)
    const button = await driver.findElements(By.css('#operator-buttons button'))
    for(let i = 0; i < button.length; i++) {
      // let buttonText = await button[i].getText()
      let buttonStatus = await button[i].isEnabled()
      await button[i].click()
      assert.ok(buttonStatus)
    }
  });

  it('Sum operation', async function() {
    await driver.get(url);
    await driver.switchTo().frame(2)
    const button2 = await driver.findElement(By.xpath(`//button[contains(text(),'2')]`))
    const button3 = await driver.findElement(By.xpath(`//button[contains(text(),'3')]`))
    const sumOp = await driver.findElement(By.xpath(`//button[contains(text(),'+')]`))
    const eqOp = await driver.findElement(By.xpath(`//button[contains(text(),'=')]`))

    await button2.click()
    await sumOp.click()
    await button3.click()
    await eqOp.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)
    const displayVal = await driver.findElement(By.id('display-val')).getText()

    assert.strictEqual(displayVal, '5')
  });

  it('Minus operation', async function() {
    await driver.get(url);
    await driver.switchTo().frame(2)
    const button2 = await driver.findElement(By.xpath(`//button[contains(text(),'2')]`))
    const button3 = await driver.findElement(By.xpath(`//button[contains(text(),'3')]`))
    const minOp = await driver.findElement(By.xpath(`//button[contains(text(),'-')]`))
    const eqOp = await driver.findElement(By.xpath(`//button[contains(text(),'=')]`))

    await button3.click()
    await minOp.click()
    await button2.click()
    await eqOp.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)
    const displayVal = await driver.findElement(By.id('display-val')).getText()

    assert.strictEqual(displayVal, '1')
  });

  it('Clear operation', async function() {
    await driver.get(url);
    await driver.switchTo().frame(2)
    const clsOp = await driver.findElement(By.xpath(`//button[contains(text(),'C')]`))

    await clsOp.click()

    await driver.switchTo().parentFrame()
    await driver.switchTo().frame(1)
    const displayVal = await driver.findElement(By.id('display-val')).getText()

    assert.strictEqual(displayVal, '0')
  });

  // Close the browser after running test
  after(async function() {
    return driver.quit()
  })
})