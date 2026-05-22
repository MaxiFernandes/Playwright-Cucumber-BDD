import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { config } from '../../config';

export class Dashboard {
  readonly page: Page;

  // Locators
  readonly barraBusqueda: Locator;
  readonly itemsMenu: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.barraBusqueda = page.getByPlaceholder('Search');
    this.itemsMenu = page.locator('.oxd-main-menu-item-wrapper');
  }

  // Actions 
  async borrarTexto () {
    await this.barraBusqueda.fill('');
  }
}