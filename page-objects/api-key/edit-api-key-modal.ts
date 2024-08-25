import { PageObject } from 'page-objects/page-object';

export class EditApiKeyModal extends PageObject {
  get apiKeyNameField() {
    return this.page.getByLabel('API key name');
  }

  get saveButton() {
    return this.page.getByRole('button', { name: 'Save' });
  }

  async enterApiKeyName(apiKeyName: string) {
    await this.apiKeyNameField.fill(apiKeyName);
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async updateApiKeyName(apiKeyName: string) {
    await this.enterApiKeyName(apiKeyName);
    await this.clickSave();
  }
}
