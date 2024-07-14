import { LoginData } from '../api/user-request';
import { test as base } from './page-objects-test';

interface PageTask {
  loginAs(user: LoginData): Promise<void>;
}

export const test = base.extend<PageTask>({
  loginAs: async ({ loginForm }, use) => {
    await use(async ({ email, password }: LoginData) => {
      await loginForm.enterEmail(email);
      await loginForm.enterPassword(password);
      await loginForm.clickSubmit();
    });
  }
});
