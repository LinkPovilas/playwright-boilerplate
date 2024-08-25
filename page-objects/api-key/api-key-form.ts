import { PageObject } from '../page-object';

export class ApiKeyForm extends PageObject {
  get apiKeyNameField() {
    return this.page.getByPlaceholder('API key name');
  }

  get generateButton() {
    return this.page.getByRole('button', { name: 'Generate' });
  }

  async enterApiKeyName(apiKeyName: string) {
    await this.apiKeyNameField.fill(apiKeyName);
  }

  async clickGenerate() {
    await this.generateButton.click();
  }

  async generateApiKey(apiKeyName: string) {
    await this.enterApiKeyName(apiKeyName);
    await this.clickGenerate();
  }
}
