// tests/pages/loginPage.js

class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = 'input[name="email"]';
      this.passwordInput = 'input[name="password"]';
      this.signInButton = 'button[type="submit"]';
      this.googleSignInButton = 'button:has-text("Sign in with Google")';
      this.forgotPasswordLink = 'text=Forgot Password?';
      this.emailError = 'div.invalid-feedback'; // Error message for invalid email
    }
  
    async goto() {
      await this.page.goto('https://app.trumio.ai/auth/login');
    }
  
    async login(email, password) {
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.signInButton);
    }
  
    async clickForgotPassword() {
      await this.page.click(this.forgotPasswordLink);
    }
  
    async getEmailErrorText() {
      return this.page.textContent(this.emailError);
    }
  }
  
  module.exports = LoginPage;
  
  