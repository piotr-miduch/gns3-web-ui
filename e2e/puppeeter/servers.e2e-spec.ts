import * as puppeteer from 'puppeteer'

const appUrlBase = 'http://localhost:4200'
let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch(
    process.env.DEBUG
      ? {
          headless: false,
          slowMo: 100,
        }
      : {}
  )
  page = await browser.newPage()
})

xdescribe('servers', () => {
    it('can add server', async () => {
        await page.goto(appUrlBase)
        await page.waitForSelector('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > app-server-discovery > mat-card > mat-card-actions > button:nth-child(2)')
        await page.click('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > app-server-discovery > mat-card > mat-card-actions > button:nth-child(2)')
        await page.waitForSelector('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.mat-elevation-z8 > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-name.mat-column-name.ng-star-inserted > a')
        await page.click('body > app-root > app-default-layout > main > app-server-list > div > div.default-content > div.mat-elevation-z8 > mat-table > mat-row > mat-cell.mat-cell.cdk-cell.cdk-column-name.mat-column-name.ng-star-inserted > a')
    })
})

afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close()
    }
})
