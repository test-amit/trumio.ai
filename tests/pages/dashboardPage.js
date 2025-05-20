// tests/pages/dashboardPage.js

class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardBreadcrumb = 'ol.breadcrumb li.text-capitalize.breadcrumb-item'; // Breadcrumb text
    this.profileCompletionBar = 'text=Profile Completion!';
    this.activeProjects = 'text=Active Projects';
    this.takeAssessmentButton = 'text=Take Assessment';
    this.rewardsSection = 'text=Rewards';
    this.viewAllEarnings = 'text=View All';
    this.alertSection = 'text=Alerts';
  }

  async isAtDashboard() {
    return this.page.url().includes('/dashboard');
  }

  async getBreadcrumbText() {
    return this.page.textContent(this.dashboardBreadcrumb);
  }

  async isProfileCompletionVisible() {
    return this.page.isVisible(this.profileCompletionBar);
  }

  async isAssessmentButtonVisible() {
    return this.page.isVisible(this.takeAssessmentButton);
  }

  async isActiveProjectsVisible() {
    return this.page.isVisible(this.activeProjects);
  }

  async isRewardsSectionVisible() {
    return this.page.isVisible(this.rewardsSection);
  }

  async isAlertsVisible() {
    return this.page.isVisible(this.alertSection);
  }
}

module.exports = DashboardPage;
