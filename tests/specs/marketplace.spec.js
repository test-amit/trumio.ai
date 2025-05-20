const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const MarketplacePage = require('../pages/marketplacePage');

test.describe('Marketplace Page Tests', () => {
  let loginPage;
  let marketplacePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    marketplacePage = new MarketplacePage(page);
  
    await loginPage.goto();
    await loginPage.login('qanayak@outlook.com', 'Itzmeamit@123');
    await page.waitForURL('**/dashboard');
  
    console.log('Clicking Marketplace...');
    await page.locator('text=Marketplace').first().click({ force: true });
    console.log('Clicked Marketplace. Waiting for page to load...');
  
    await page.waitForURL('**/marketplace/all_listings', { timeout: 10000 });
  
    // Now just wait for a generic sidebar link to be visible (more stable)
    await page.waitForSelector('a[href="/marketplace/all_listings"]', {
      state: 'visible',
      timeout: 10000
    });
  });
  
  

  test('should land on marketplace page after clicking sidebar', async ({ page }) => {
    expect(page.url()).toContain('/marketplace/all_listings');
    const sidebarActive = await marketplacePage.isMarketplaceSidebarActive();
    expect(sidebarActive).toBeTruthy();
  });

});
