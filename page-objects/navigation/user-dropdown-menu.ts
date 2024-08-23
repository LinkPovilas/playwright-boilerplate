import { PageObject } from '../page-object';
import { Step } from 'decorators/step-decorator';

export class UserDropdownMenu extends PageObject {
  get self() {
    return this.page.locator('#user-dropdown');
  }

  get myApiKeysLink() {
    return this.page.getByRole('link', { name: 'My API keys' });
  }

  /**
   * Clicks the user dropdown menu.
   */
  @Step('Click on username')
  async clickSelf() {
    await this.self.click();
  }

  /**
   * Clicks the 'My API keys' link in the user dropdown menu.
   */
  @Step('Click "My API Keys" link')
  async clickMyApiKeys() {
    await this.myApiKeysLink.click();
  }

  /**
   * Clicks on the user dropdown menu and then clicks on the 'My API keys' link.
   */
  @Step('Go to "My API Keys"')
  async goToMyApiKeys() {
    await this.clickSelf();
    await this.clickMyApiKeys();
  }
}
