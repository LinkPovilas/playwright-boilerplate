import { PageObject } from './page-object';

export class LoginForm extends PageObject {
  get emailField() {
    return this.page.getByPlaceholder('Email');
  }

  get passwordField() {
    return this.page.getByPlaceholder('Password');
  }

  get submitButton() {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  async enterEmail(email: string) {
    await this.emailField.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }
}
