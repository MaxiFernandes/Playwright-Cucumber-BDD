<h1 align="left">Playwright + Cucumber BDD Automation Framework 🧪</h1>

[![CI](https://github.com/MaxiFernandes/Playwright-Cucumber-BDD/actions/workflows/playwright.yml/badge.svg)](https://github.com/MaxiFernandes/Playwright-Cucumber-BDD/actions/workflows/playwright.yml)
###

<p align="left">Framework de automatización E2E desarrollado con Playwright, Cucumber BDD y TypeScript.<br>Está diseñado para pruebas escalables, mantenibles y fácil integración con CI/CD.</p>

###

<h2 align="left">🚀 Features</h2>

###

* Playwright + TypeScript
* Cucumber BDD
* Page Object Model (POM)
* HTML Reports
* Screenshots y Videos automáticos
* Ejecución por Tags
* Headless Execution
* CI/CD con GitHub Actions

###

<h2 align="left">🛠️ Tech Stack</h2>

###

* Playwright
* Cucumber
* TypeScript
* Node.js
* GitHub Actions

###

<h2 align="left">⚙️ Instalación</h2>

###

* Clone repository → `git clone https://github.com/MaxiFernandes/Playwright-Cucumber-BDD.git`  
* Install dependencies → `npm install`  
* Install Playwright browsers → `npx playwright install`

###

<h2 align="left">🎯 Ejecución</h2>

###

* All Tests → `npm test`  
* Regression Suite → `npm run test:regression`  
* Validation Suite → `npm run test:validation`  
* Headless Execution → `npm run test:headless`

###

<h2 align="left">📊 Reportes</h2>

###

Luego de cada ejecución se generan automáticamente:

* Reporte HTML con resumen de ejecución  
* Screenshots en caso de fallos  
* Videos de ejecución  
* Resultados JSON para integraciones

Ubicación:<br><br>reports/html

###

<h2 align="left">🔁 CI/CD - GitHub Actions</h2>

###

El proyecto utiliza GitHub Actions para ejecutar automáticamente los tests en cada push o pull request.

El pipeline incluye:

* Instalación de dependencias
* Instalación de navegadores Playwright
* Ejecución automática de tests
* Generación de reportes
* Publicación de artifacts

Workflow ubicado en:<br><br>.github/workflows/

###

<h2 align="left">✅ Buenas Prácticas Implementadas</h2>

###

* Page Object Model (POM)
* Separación de responsabilidades
* Reutilización de componentes
* Hooks centralizados
* Configuración desacoplada
* Evidencias automáticas
* Framework escalable

###
