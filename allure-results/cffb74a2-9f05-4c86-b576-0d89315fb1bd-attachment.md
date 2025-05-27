# Test info

- Name: Marketplace Page Tests >> search input should be visible and editable
- Location: /Users/ajitnayak/Desktop/trumio/tests/specs/marketplace.spec.js:36:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('input[placeholder="Search team name"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('input[placeholder="Search team name"]')

    at /Users/ajitnayak/Desktop/trumio/tests/specs/marketplace.spec.js:42:31
```

# Page snapshot

```yaml
- navigation:
  - img "logo"
  - text: v1.2.0 Dashboard Marketplace Projects My Team Clubs
  - list:
    - listitem:
      - img
    - img
    - link:
      - /url: /notifications
      - img
    - listitem:
      - link "Amit Nayak Talent avatarImg":
        - /url: /
        - text: Amit Nayak Talent
        - img "avatarImg"
- navigation "breadcrumb":
  - list:
    - listitem:
      - link:
        - /url: /dashboard
        - img
    - listitem:
      - link "Marketplace":
        - /url: /marketplace/all_listings
    - listitem: All listings
- heading "1" [level=3]
- paragraph: All Listings
- img "money"
- heading "0" [level=3]
- paragraph: My Bids
- img
- heading "70" [level=3]
- paragraph: Teams
- img
- heading "92" [level=3]
- paragraph: Clients
- img "client"
- img
- textbox "Search project name, user name"
- text: "View:"
- img "collactive"
- text: Project Select type
- combobox
- text: Payment type Select type
- combobox
- text: Skills Select skill
- combobox
- text: Tools Select tool
- combobox
- img
- text: Reset Open Listing Looking for Uber kind of ride sharing app
- paragraph: Variable Price
- paragraph:
  - img "Mpin"
  - text: United States
- paragraph: Posted 10 days ago
- paragraph: Looking for Uber clone with two apps - one for customer and other for partner. The apps need to deployed for both android and iphone.
- img
- img "avatar"
- text: AKDA GLOBAL EXPORTS PTY LTD
- paragraph: Kshiteej Deshpande
- img "Filled star"
- text: "0"
- paragraph: 0 Projects
- text: Skills Mobile App Development (iOS/Android) Tools Ionic React Native
- contentinfo:
  - paragraph: Copyright ©2025 Trumio , All Rights Reserved
```

# Test source

```ts
   1 |
   2 | const { test, expect } = require('@playwright/test');
   3 | const LoginPage = require('../pages/loginPage');
   4 | const MarketplacePage = require('../pages/marketplacePage');
   5 |
   6 | test.describe('Marketplace Page Tests', () => {
   7 |   let loginPage;
   8 |   let marketplacePage;
   9 |
  10 |   test.beforeEach(async ({ page }) => {
  11 |     loginPage = new LoginPage(page);
  12 |     marketplacePage = new MarketplacePage(page);
  13 |
  14 |     await loginPage.goto();
  15 |     await loginPage.login('qanayak@outlook.com', 'Itzmeamit@123');
  16 |     await page.waitForURL('**/dashboard');
  17 |
  18 |     console.log('Clicking Marketplace...');
  19 |     await page.locator('text=Marketplace').first().click({ force: true });
  20 |     console.log('Clicked Marketplace. Waiting for page to load...');
  21 |
  22 |     await page.waitForURL('**/marketplace/all_listings', { timeout: 10000 });
  23 |
  24 |     await page.waitForSelector('a[href="/marketplace/all_listings"]', {
  25 |       state: 'visible',
  26 |       timeout: 10000
  27 |     });
  28 |   });
  29 |
  30 |   test('should land on marketplace page after clicking sidebar', async ({ page }) => {
  31 |     expect(page.url()).toContain('/marketplace/all_listings');
  32 |     const sidebarActive = await marketplacePage.isMarketplaceSidebarActive();
  33 |     expect(sidebarActive).toBeTruthy();
  34 |   });
  35 |
  36 |   test('search input should be visible and editable', async ({ page }) => {
  37 |     // Wait for and click the "Teams" button
  38 |     await page.waitForSelector('text=Teams', { state: 'visible' });
  39 |     await page.locator('text=Teams').click();
  40 |   
  41 |     const searchInput = page.locator('input[placeholder="Search team name"]');
> 42 |     await expect(searchInput).toBeVisible();
     |                               ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  43 |     await searchInput.fill('AI Geeks');
  44 |     await expect(searchInput).toHaveValue('AI Geeks');
  45 |   });
  46 |   
  47 |   
  48 |   test('searching for "AI Geeks" should display the corresponding team', async ({ page }) => {
  49 |     await page.waitForSelector('text=Teams', { state: 'visible' });
  50 |     await page.locator('text=Teams').click(); // Click on the "Teams" button first
  51 |
  52 |   
  53 |     const searchInput = page.locator('input[placeholder="Search team name"]');
  54 |     await searchInput.fill('AI Geeks');
  55 |     await page.keyboard.press('Enter');
  56 |     await expect(page.locator('text=AI Geeks')).toBeVisible();
  57 |   });
  58 |   
  59 |   test('searching for a non-existent team should return no results', async ({ page }) => {
  60 |     // Wait for and click "Teams"
  61 |     await page.waitForSelector('text=Teams', { state: 'visible' });
  62 |     await page.locator('text=Teams').click(); // Click on the "Teams" button first
  63 |
  64 |     // ✅ Now try finding the search input
  65 |     const searchInput = page.locator('input[placeholder="Search team name"]');
  66 |   
  67 |   
  68 |     await searchInput.fill('NonExistentTeam123');
  69 |     await page.keyboard.press('Enter');
  70 |   
  71 |     const noResults = page.locator('text=No data found!');
  72 |     await expect(noResults).toBeVisible();
  73 |   });
  74 |   
  75 |   
  76 |   
  77 | });
  78 |
```