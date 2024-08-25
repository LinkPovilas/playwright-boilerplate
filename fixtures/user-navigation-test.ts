import { test as base } from './page-object-test';
import { testStep } from './utils/test-step';

interface UserNavigation {
  navigateToMyApiKeys: () => Promise<void>;
}

export const test = base.extend<UserNavigation>({
  navigateToMyApiKeys: async ({ navigationBar }, use) => {
    const navigateToMyApiKeys = () =>
      testStep('Navigate to my API keys', async () => {
        await navigationBar.userDropdownMenu.navigateToMyApiKeys();
      });
    await use(navigateToMyApiKeys);
  }
});
