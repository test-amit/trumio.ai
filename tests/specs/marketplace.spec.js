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
    await marketplacePage.navigateToMarketplace();
    console.log('Clicked Marketplace. Waiting for page to load...');
  });

  test('search input should be visible and editable', async () => {
    await marketplacePage.goToTeamsPage();
    await marketplacePage.fillSearchInput('AI Geeks');
    await expect(marketplacePage.searchInput).toHaveValue('AI Geeks');
  });

  test('searching for "AI Geeks" should display the corresponding team', async () => {
    await marketplacePage.goToTeamsPage();
    await marketplacePage.fillSearchInput('AI Geeks');
    await marketplacePage.pressEnterInSearch();
    await expect(await marketplacePage.isTeamVisible('AI Geeks')).toBeVisible();
  });

  test('searching for a non-existent team should return no results', async () => {
    await marketplacePage.goToTeamsPage();
    await marketplacePage.fillSearchInput('NonExistentTeam123');
    await marketplacePage.pressEnterInSearch();
    await expect(await marketplacePage.isNoResultVisible()).toBeVisible();
  });
});
