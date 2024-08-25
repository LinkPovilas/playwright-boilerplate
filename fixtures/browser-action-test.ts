import { test as base } from '@playwright/test';

interface BrowserAction {
  goToUrl: (url: string) => Promise<void>;
  saveStorageState: (path: string) => Promise<void>;
}

export const test = base.extend<BrowserAction>({
  goToUrl: async ({ page }, use) => {
    const goToUrl = async (url: string) => {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
    };
    await use(goToUrl);
  },
  saveStorageState: async ({ page }, use) => {
    const saveStorageState = async (path: string) => {
      await page.context().storageState({ path });
    };
    await use(saveStorageState);
  }
});
