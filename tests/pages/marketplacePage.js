class MarketplacePage {
  constructor(page) {
    this.page = page;
    this.marketplaceLink = page.locator('text=Marketplace');
    this.marketplaceSidebarActive = page.locator('a[href="/marketplace/all_listings"].active');
    this.teamsStatCard = page.locator('div.stat-box:has-text("Teams")');
    this.searchInput = page.locator('input[placeholder="Search team name"]');
    this.noResultsText = page.locator('text=No data found!');
  }

  async navigateToMarketplace() {
    await this.marketplaceLink.first().click({ force: true });
    await this.page.waitForURL('**/marketplace/all_listings', { timeout: 10000 });
    await this.page.waitForSelector('a[href="/marketplace/all_listings"]', {
      state: 'visible',
      timeout: 10000
    });
  }

  async isMarketplaceSidebarActive() {
    return this.marketplaceSidebarActive.isVisible();
  }

  async goToTeamsPage() {
    await this.page.goto('https://app.trumio.ai/marketplace/teams');
    await this.teamsStatCard.click();
    await this.searchInput.waitFor({ state: 'visible', timeout: 10000 });
  }

  async fillSearchInput(value) {
    await this.searchInput.fill(value);
  }

  async pressEnterInSearch() {
    await this.page.keyboard.press('Enter');
  }

  async isTeamVisible(teamName) {
    return this.page.locator(`text=${teamName}`);
  }

  async isNoResultVisible() {
    return this.noResultsText;
  }
}

module.exports = MarketplacePage;


  
  