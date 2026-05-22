import { Given, When, Then } from '@cucumber/cucumber';
import { config } from '../../config';
import { expect } from '@playwright/test';

// Precondición 1 📌
Given('Que estoy en la pagina de iniciar sesión', async function () {
  await this.page.goto(`${config.baseUrl}${config.paths.login}`)
})

// Precondición 2 📌
Given('Inicio sesión correctamente', async function () {
  await this.loginPage.ingresarCredenciales(config.username, config.password)
  await this.loginPage.clickLoginBtn()
  await expect(this.page).toHaveURL(/dashboard/)
})

// Acción 📌
When('Escribo {string} en la barra de busqueda', async function (seccion: string) {

  await this.dashboard.barraBusqueda.fill(seccion)

})

// Validación 📌
Then('Deberia visualizar {string} en el panel lateral izquierdo', async function (seccion: string) {

  await expect(this.dashboard.itemsMenu).toHaveText(seccion)

  await this.dashboard.borrarTexto()

})