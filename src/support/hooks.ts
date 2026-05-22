import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { initBrowser, closeBrowser } from '../index';
import { CustomWorld } from './world';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/Dashboard';

Before(async function (this: CustomWorld) {

  const page = await initBrowser(false);

  this.page = page;

  this.loginPage = new LoginPage(page);
  this.dashboard = new Dashboard(page);

});

After(async function (this: CustomWorld, scenario) {

  if (scenario.result?.status === 'FAILED') {

    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/${scenario.pickle.name}.png`,
      type: 'png',
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  await closeBrowser();

});

setDefaultTimeout(40 * 1000);