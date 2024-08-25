import { UserCredentials } from 'page-objects/authentication/sign-in-form';
import { test as base } from './page-object-test';
import { testStep } from './utils/test-step';
import { expect } from '@playwright/test';

interface Authentication {
  signIn: (credentials: UserCredentials) => Promise<void>;
  assertRememberMeIsNotChecked: () => Promise<void>;
}

export const test = base.extend<Authentication>({
  signIn: async ({ signInForm }, use) => {
    const signIn = async (credentials: UserCredentials) => {
      await testStep('Sign in', async () => {
        await signInForm.login(credentials);
      });
    };
    await use(signIn);
  },
  assertRememberMeIsNotChecked: async ({ signInForm }, use) => {
    const assertRememberMeIsNotChecked = () =>
      testStep('Assert remember me checkbox is not checked', async () =>
        expect(signInForm.rememberMeCheckbox).not.toBeChecked()
      );
    await use(assertRememberMeIsNotChecked);
  }
});
