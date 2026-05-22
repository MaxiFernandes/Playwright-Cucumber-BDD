import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';

export class CustomWorld extends World {

  page!: Page;
  loginPage!: LoginPage;
  dashboard!: Dashboard;

}

setWorldConstructor(CustomWorld);