import { Step } from 'decorators/step-decorator';
import { PageObject } from '../page-object';

export class ApiKeyForm extends PageObject {
  get apiKeyNameField() {
    return this.page.getByPlaceholder('API key name');
  }

  get generateButton() {
    return this.page.getByRole('button', { name: 'Generate' });
  }

  /**
   * Fills the API key name field with the provided value.
   *
   * @param {string} apiKeyName - The value to be filled into the API key name field.
   */
  @Step('Enter API key name')
  async enterApiKeyName(apiKeyName: string) {
    await this.apiKeyNameField.fill(apiKeyName);
  }

  /**
   * Clicks the generate button.
   */
  @Step('Click generate button')
  async clickGenerate() {
    await this.generateButton.click();
  }

  /**
   * Creates an API key with the given name.
   *
   * @param {string} apiKeyName - The name of the API key to be created.
   */
  @Step('Create a new API key')
  async createApiKey(apiKeyName: string) {
    await this.enterApiKeyName(apiKeyName);
    await this.clickGenerate();
  }
}
