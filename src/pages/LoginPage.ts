import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { config } from '../../config';

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;
  readonly requiredMessage: Locator;
  readonly globalErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByText('Invalid credentials');
    this.requiredMessage = page.getByText('Required');
    this.globalErrorMessage = page.locator('.oxd-input-field-error-message, .oxd-alert-content-text');
  }

  // Actions 
  async open() {
    await this.page.goto(`${config.baseUrl}${config.paths.login}`, {
    waitUntil: 'domcontentloaded'
    });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async ingresarCredenciales(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLoginBtn() {
    await Promise.all([
    this.page.waitForLoadState('networkidle'), // Espera a que la pagina se estabilice 
    this.loginBtn.click()
    ]);
  }

  // Getters
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.innerText();
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return await this.loginBtn.isVisible();
  }
  /*
  async expectErrorMessage(expectedMessage: string) {
    // Filtra solo los elementos que tengan el texto que esperamos
    await expect(this.globalErrorMessage.filter({ hasText: expectedMessage })).toBeVisible();
  }
  */
  async expectErrorMessage(expectedMessage: string, count: number) {
  const errors = this.globalErrorMessage.filter({ hasText: expectedMessage });
  await expect(errors).toHaveCount(count);
  }
}