class MarketplacePage {
    constructor(page) {
      this.page = page;
    }
  
    async isMarketplaceSidebarActive() {
      return await this.page.isVisible('a[href="/marketplace/all_listings"]');
    }
  
    async isMyBidsCardVisible() {
      return await this.page.locator('text=My Bids').isVisible();
    }
  
    async isTeamCardVisible() {
      return await this.page.locator('text=Team').isVisible();
    }
  
    async isClientsCardVisible() {
      return await this.page.locator('text=Clients').isVisible();
    }
  
    async areFiltersVisible() {
      return await this.page.locator('text=Reset').isVisible();
    }
  
    async isListingVisible() {
      return await this.page.locator('.listing-card').first().isVisible();
    }
  }
  
  
  module.exports = MarketplacePage;
  
  