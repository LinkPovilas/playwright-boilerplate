import { Step } from 'decorators/step-decorator';
import { PageObject } from '../page-object';

export interface UserCredentials {
  email: string;
  password: string;
}

export class SignInForm extends PageObject {
  get emailField() {
    return this.page.getByLabel('Email');
  }

  get passwordField() {
    return this.page.getByPlaceholder('Password');
  }

  get submitButton() {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  get rememberMeCheckbox() {
    return this.page.getByLabel('Remember me');
  }

  /**
   * Fills the email field with the provided email address.
   *
   * @param {string} email - The email address to be filled into the email field.
   */
  @Step('Enter email address')
  async enterEmail(email: string) {
    await this.emailField.fill(email);
  }

  /**
   * Fills the password field with the provided password.
   *
   * @param {string} password - The password to be filled into the password field.
   */
  @Step('Enter password')
  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  /**
   * Clicks the submit button.
   */
  @Step('Click submit button')
  async clickSubmit() {
    await this.submitButton.click();
  }

  /**
   * Logs in with the provided email and password.
   *
   * @param {UserCredentials} credentials - The user's email and password.
   */
  @Step('Login')
  async login({ email, password }: UserCredentials) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSubmit();
  }
}
