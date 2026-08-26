<h1 align="left">Playwright + Cucumber BDD Automation Framework 🧪</h1>

[![CI](https://github.com/MaxiFernandes/Playwright-Cucumber-BDD/actions/workflows/playwright.yml/badge.svg)](https://github.com/MaxiFernandes/Playwright-Cucumber-BDD/actions/workflows/playwright.yml)
###

<p align="left">E2E automation framework developed with Playwright, Cucumber BDD, and TypeScript.<br>It is designed for scalable, maintainable testing and easy CI/CD integration.</p>

###

<h2 align="left">🚀 Features</h2>

###

* Playwright + TypeScript
* Cucumber BDD
* Page Object Model (POM)
* HTML Reports
* Screenshots y Automatic Videos
* Execution by Tags
* Headless Execution
* CI/CD with GitHub Actions

###

<h2 align="left">🛠️ Tech Stack</h2>

###

* Playwright
* Cucumber
* TypeScript
* Node.js
* GitHub Actions

###

<h2 align="left">📁 Project Structure</h2>

```text
PLAYWRIGHT_CUCUMBER_BDD/
│
├── .github/
│
├── reports/
│   ├── html/
│   ├── json/
│   ├── screenshots/
│   └── videos/
│
├── src/
│   ├── features/
│   ├── pages/
│   ├── steps/
│   ├── support/
│   └── index.ts
│
├── .env
├── .gitignore
├── config.ts
├── cucumber.cjs
├── generate-report.js
├── notas.txt
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

<h2 align="left">⚙️ Installation</h2>

###

* Clone repository → `git clone https://github.com/MaxiFernandes/Playwright-Cucumber-BDD.git`  
* Install dependencies → `npm install`  
* Install Playwright browsers → `npx playwright install`

###

<h2 align="left">🎯 Run Tests</h2>

###

* All Tests → `npm test`  
* Regression Suite → `npm run test:regression`  
* Validation Suite → `npm run test:validation`  
* Headless Execution → `npm run test:headless`

###

<h2 align="left">📊 Reporting</h2>

###

After each execution, the following are automatically generated:

* HTML report with execution summary 
* Screenshots in case of errors  
* Execution videos  
* JSON results for integrations

Location:<br><br>reports/html

###

<h2 align="left">🔁 CI/CD - GitHub Actions</h2>

###

The project uses GitHub Actions to automatically run tests on every push or pull request.

Pipeline includes:

* Installing dependencies
* Installation of Playwright browsers
* Automatic test execution
* Report generation
* Posting artifacts

Workflow located in:<br><br>.github/workflows/

###

<h2 align="left">✅ Implemented Best Practices</h2>

###

* Page Object Model (POM)
* Separation of responsibilities
* Component reuse
* Centralized hooks
* Decoupled configuration
* Automated evidence
* Scalable framework

###

<h2 align="left">👨‍💻 Author</h2>

###

Maximiliano Fernandes

QA Automation Engineer
