import { test as base } from './page-object-test';
import { generateRandomApiKeyName } from 'utils/test-data-utils';
import { urlPath } from 'data/ui/url-path';
import { expect } from './custom-matchers';

interface ApiKey {
  name: string;
  value: string;
}

interface PageTask {
  navigateTo: (url: string) => Promise<void>;
  apiKey: ApiKey;
}

export const test = base.extend<PageTask>({
  navigateTo: async ({ page }, use) => {
    const goTo = (url: string) =>
      expect(async () => {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
      }).toPass();

    await use(goTo);
  },
  apiKey: async ({ navigateTo, apiKeyForm, apiKeyTable }, use) => {
    await navigateTo(urlPath.apiKeysPage);
    const name = generateRandomApiKeyName();
    await apiKeyForm.createApiKey(name);
    const apiKey = await apiKeyTable.getApiKeyByName(name);
    expect(apiKey).toBeTruthy();
    await use({ name, value: apiKey });
  }
});
