import { testStep } from './utils/test-step';
import { test as base } from './page-object-test';
import { urlPath } from 'data/ui/url-path';
import { expect } from '@playwright/test';
import { randomUUID } from 'crypto';

interface ApiToken {
  name: string;
  value: string;
}

interface ApiKey {
  goToApiKeysPage: () => Promise<void>;
  generateApiKey: (apiKeyName: string) => Promise<void>;
  getApiKeyByName: (apiKeyName: string) => Promise<string>;
  updateApiKeyName: (
    apiKeyName: string,
    newApiKeyName: string
  ) => Promise<void>;
  createNewApiKey: (apiKeyName: string) => Promise<ApiToken>;
  generateRandomApiKeyName: () => string;
  apiKey: ApiToken;
}

export const test = base.extend<ApiKey>({
  goToApiKeysPage: async ({ page }, use) => {
    const goToApiKeysPage = () =>
      testStep('Navigate to API keys page', async () => {
        await page.goto(urlPath.apiKeysPage, { waitUntil: 'domcontentloaded' });
      });
    await use(goToApiKeysPage);
  },
  generateApiKey: async ({ apiKeyForm }, use) => {
    const generateApiKey = (apiKeyName: string) =>
      testStep('Generate API key', async () => {
        await apiKeyForm.generateApiKey(apiKeyName);
      });
    await use(generateApiKey);
  },
  getApiKeyByName: async ({ apiKeyTable }, use) => {
    const getApiKeyByName = (apiKeyName: string) =>
      testStep('Get API key by name', () =>
        apiKeyTable.getApiKeyByName(apiKeyName)
      );
    await use(getApiKeyByName);
  },
  updateApiKeyName: async ({ apiKeyTable, editApiKeyModal }, use) => {
    const updateApiKeyName = (apiKeyName: string, newApiKeyName: string) =>
      testStep('Update API key name', async () => {
        await apiKeyTable.clickEditApiKeyName(apiKeyName);
        await editApiKeyModal.updateApiKeyName(newApiKeyName);
      });
    await use(updateApiKeyName);
  },
  createNewApiKey: async (
    { goToApiKeysPage, generateApiKey, getApiKeyByName },
    use
  ) => {
    const createNewApiKey = (apiKeyName: string) =>
      testStep('Create new API key', async () => {
        await goToApiKeysPage();
        await generateApiKey(apiKeyName);
        const apiKey = await getApiKeyByName(apiKeyName);
        expect(apiKey).toBeTruthy();
        return { name: apiKeyName, value: apiKey };
      });
    await use(createNewApiKey);
  },
  generateRandomApiKeyName: async ({}, use) => {
    const randomApiKeyName = () =>
      randomUUID().replaceAll('-', '').slice(0, 19);
    await use(randomApiKeyName);
  },
  apiKey: async ({ generateRandomApiKeyName, createNewApiKey }, use) => {
    const apiKeyName = generateRandomApiKeyName();
    const apiKey = await createNewApiKey(apiKeyName);
    await use(apiKey);
  }
});
