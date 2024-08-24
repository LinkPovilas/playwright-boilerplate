import { urlPath } from 'data/ui/url-path';
import { expect, it } from 'fixtures';

it.describe('Navigation', () => {
  it.beforeEach(async ({ page }) => {
    await page.goto(urlPath.homePage);
  });

  it('should redirect user to the API keys page', async ({
    navigationBar,
    page
  }) => {
    await navigationBar.userDropdownMenu.goToMyApiKeys();
    await expect(page).toHaveURL(urlPath.apiKeysPage);
  });
});
