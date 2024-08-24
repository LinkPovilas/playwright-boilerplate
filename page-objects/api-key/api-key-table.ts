import { Step } from 'decorators/step-decorator';
import { PageObject } from '../page-object';

export class ApiKeyTable extends PageObject {
  get self() {
    return this.page.getByRole('table');
  }
  get tableRow() {
    return this.page.getByRole('row');
  }

  get tableCell() {
    return this.page.getByRole('cell');
  }

  get actionButton() {
    return this.tableCell.getByRole('link');
  }

  /**
   * Opens the edit API key modal by clicking the edit button for the API key with the specified name.
   *
   * **Usage**
   *
   * ```js
   * await apiKeyTable.clickEditKeyName(apiKey.name);
   * await editApiKeyModal.updateApiKeyName(newApiKeyName);
   * ```
   *
   * @param {string} apiKeyName - The name of the API key to edit.
   */
  @Step('Click edit API key name')
  async clickEditApiKeyName(apiKeyName: string) {
    await this.tableRow
      .filter({ hasText: apiKeyName })
      .locator('a')
      .nth(1)
      .click();
  }

  /**
   * Retrieves the API key associated with the given API key name.
   *
   * @param {string} apiKeyName - The name of the API key to retrieve.
   */
  @Step('Get an API key by name')
  getApiKeyByName(apiKeyName: string) {
    return this.tableRow
      .filter({
        has: this.tableCell.filter({ hasText: apiKeyName })
      })
      .locator(this.tableCell)
      .first()
      .innerText();
  }
}
