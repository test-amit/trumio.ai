# 🧪 Trumio Marketplace Tests

This repository contains end-to-end tests for the [Trumio](https://app.trumio.ai) platform using [Playwright](https://playwright.dev/). The test suite is designed with **Page Object Model (POM)** for improved modularity and maintainability, and integrates with **Allure** for beautiful test reporting.

---

## 📁 Project Structure

├── pages/ # Page Object Models
│ ├── loginPage.js
│ └── marketplacePage.js
├── tests/
│ └── specs/
│ └── marketplace.spec.js
├── playwright.config.js
└── README.md

yaml
Copy
Edit

---

## 🧱 Page Object Model (POM)

This project uses POM for the following pages:

1. **Login Page**
   - Encapsulates login actions
   - Manages navigation to the login screen

2. **Marketplace Page**
   - Handles interactions with Marketplace and Teams section
   - Provides reusable methods for search functionality, sidebar navigation, etc.

This abstraction improves test readability and makes the suite easier to maintain and scale.

---

## 🧪 Running the Tests

### Install Dependencies

```bash
npm install
Run Tests
bash
Copy
Edit
npx playwright test
📊 Allure Reports
Generate Report
After running the tests:

bash
Copy
Edit
npx allure generate ./allure-results --clean
View Report
bash
Copy
Edit
npx allure open
Make sure allure is installed globally or via dev dependencies:

bash
Copy
Edit
npm install -D allure-playwright
Also update your playwright.config.js to include:

js
Copy
Edit
reporter: [['allure-playwright']],
✅ Features Covered
Login flow validation

Sidebar and page navigation

Marketplace Teams search functionality

Edge case handling for search results

🧠 Future Enhancements
Add fixtures for user sessions

CI/CD integration (GitHub Actions)

Extend coverage to listing creation and filtering

🛡️ Tech Stack
Playwright

JavaScript

Allure Reporting

📌 Author
Amit Nayak
📧 qanayak@outlook.com

