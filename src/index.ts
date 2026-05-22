import { chromium, Browser, Page, BrowserContext } from 'playwright';
import dotenv from 'dotenv';

// Carga variables de entorno desde .env
dotenv.config();

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Inicializa el navegador, el contexto y la página
export async function initBrowser(headless?: boolean) {

  browser = await chromium.launch({

    // Usa variable HEADLESS del .env
    headless: headless ?? (process.env.HEADLESS === 'true'),

    // Local = lento para visualizar
    // CI/CD = rápido
    slowMo: process.env.CI ? 0 : 500

  });

  // Contexto con grabación de video
  context = await browser.newContext({

    recordVideo: {

      // Carpeta donde se guardan los videos
      dir: 'reports/videos',

      // Tamaño del video
      size: { width: 1280, height: 720 }

    }

  });

  // Nueva pestaña
  page = await context.newPage();

  return page;
}

// Retorna la página actual
export function getPage(): Page {

  if (!page) {
    throw new Error('Page no inicializada. Llama a initBrowser() primero.');
  }

  return page;

}

// Cierra correctamente todo
export async function closeBrowser() {

  if (page) {
    await page.close();
  }

  if (context) {
    await context.close();
  }

  if (browser) {
    await browser.close();
  }

}

// Reinicia página/contexto
export async function resetPage() {

  if (context) {
    await context.close();
  }

  context = await browser.newContext({

    recordVideo: {
      dir: 'reports/videos',
      size: { width: 1280, height: 720 }
    }

  });

  page = await context.newPage();

  return page;

}