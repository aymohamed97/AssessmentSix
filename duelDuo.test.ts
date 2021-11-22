
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays with id that is choices',async () =>{
    await driver.sleep(2000);
    const drawBtn = await driver.findElement(By.xpath("//div[@id='choices']"))
    await drawBtn.click;  
})

test('add to duo btn displays the div with player id', async () => {
    await driver.sleep(2000);
    const addToDuoBtn = await driver.findElement(By.xpath("//div[@id='player-duo']"))
    await addToDuoBtn.click;

})
