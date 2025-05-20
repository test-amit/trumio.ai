// tests/specs/login.spec.js

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login Page Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login with valid credentials', async ({ page }) => {
    await loginPage.login('qanayak@outlook.com', 'Itzmeamit@123');
    await page.waitForLoadState('networkidle');
    expect(page.url()).not.toContain('/auth/login');
  });

  test('should navigate to forgot password', async ({ page }) => {
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(/.*forgot-password.*/);
  });

  test('should show error for invalid email format', async ({ page }) => {
    await loginPage.login('test@123', 'test');
    const errorText = await loginPage.getEmailErrorText();
    expect(errorText).toContain('Invalid email address');
  });
});

