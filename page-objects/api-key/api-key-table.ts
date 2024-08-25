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

  async clickEditApiKeyName(apiKeyName: string) {
    await this.tableRow
      .filter({ hasText: apiKeyName })
      .locator('a')
      .nth(1)
      .click();
  }

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
