import { test as base, expect } from '@playwright/test';
import { testStep } from './utils/test-step';

interface SharedAssertion {
  assertUrl: (url: string | RegExp) => Promise<void>;
  assertTextIsVisible: (text: string) => Promise<void>;
}

export const test = base.extend<SharedAssertion>({
  assertUrl: async ({ page }, use) => {
    const assertUrl = (url: string | RegExp) =>
      testStep(`Assert URL is ${url}`, async () => expect(page).toHaveURL(url));
    await use(assertUrl);
  },
  assertTextIsVisible: async ({ page }, use) => {
    const assertTextIsVisible = (text: string) =>
      testStep(`Assert ${text} is visible`, async () =>
        expect(page.getByText(text)).toBeVisible()
      );
    await use(assertTextIsVisible);
  }
});
