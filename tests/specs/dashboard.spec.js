// tests/specs/dashboard.spec.js

import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage';

test.describe('Dashboard Page Tests', () => {
  let loginPage;
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login('qanayak@outlook.com', 'Itzmeamit@123');
    await page.waitForURL('**/dashboard');
  });

  test('should land on dashboard after login', async ({ page }) => {
    const atDashboard = await dashboardPage.isAtDashboard();
    expect(atDashboard).toBeTruthy();

    const breadcrumb = await dashboardPage.getBreadcrumbText();
    expect(breadcrumb.trim()).toBe('Dashboard');
  });

  test('should display profile completion alert', async () => {
    const visible = await dashboardPage.isProfileCompletionVisible();
    expect(visible).toBeTruthy();
  });

//   test('should display active projects section', async () => {
//     const visible = await dashboardPage.isActiveProjectsVisible();
//     expect(visible).toBeTruthy();
//   });

//   test('should display Take Assessment button', async () => {
//     const visible = await dashboardPage.isAssessmentButtonVisible();
//     expect(visible).toBeTruthy();
//   });

  test('should show rewards section', async () => {
    const visible = await dashboardPage.isRewardsSectionVisible();
    expect(visible).toBeTruthy();
  });

  test('should show alerts section', async () => {
    const visible = await dashboardPage.isAlertsVisible();
    expect(visible).toBeTruthy();
  });
});
