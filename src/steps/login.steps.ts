import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { config } from '../../config';
import { expect, Page } from '@playwright/test';

// Preconcición 📌
Given('Que estoy en la pagina de Login', async function () {
  await this.loginPage.open()
});


// Validación de inicio de sesión exitoso 📌
When('Ingreso credenciales validas', async function () {
  await this.loginPage.ingresarCredenciales(config.username, config.password);
});

When('Hago click en el botón Login', async function () {
  await this.loginPage.clickLoginBtn();
});

Then('Deberia visualizar el dashboard', async function () {
  await expect(this.page).toHaveURL(/dashboard/);
  await expect(this.page.locator('.oxd-topbar-header-breadcrumb h6')).toHaveText('Dashboard');
});

// Validación de campos obligatorios y credenciales incorrectas 📌
When('Ingreso el usuario {string} y la contraseña {string}', async function (usuario: string, contraseña: string) {
  await this.loginPage.ingresarCredenciales(usuario, contraseña);
});

// No uso When para hacer click en el botón Login porque ya esta declarado en el primer When
Then('Deberia visualizar {int} mensaje {string}', async function (cantidad: number, expectedMessage: string) {
    await this.loginPage.expectErrorMessage(expectedMessage, cantidad);
  }
);