import { urlPath } from 'data/ui/url-path';
import { it } from 'fixtures';

it.describe('User navigation', () => {
  it.beforeEach(async ({ goToUrl }) => {
    await goToUrl(urlPath.homePage);
  });

  it('should redirect user to the API keys page', async ({
    navigateToMyApiKeys,
    assertUrl
  }) => {
    await navigateToMyApiKeys();
    await assertUrl(urlPath.apiKeysPage);
  });
});
