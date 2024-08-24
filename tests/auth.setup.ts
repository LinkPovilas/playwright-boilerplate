import { alertMessage, noticeMessage } from 'data/ui/messages';
import { urlPath } from 'data/ui/url-path';
import { env } from 'env';
import { test as setup, expect } from 'fixtures';
import { authFilePath } from 'playwright.config';

setup('authenticate', async ({ page, signInForm }) => {
  await page.goto(urlPath.homePage);
  await expect(page.getByText(alertMessage.signInOrSignUp)).toBeVisible();
  await expect(signInForm.rememberMeCheckbox).not.toBeChecked();
  await signInForm.login({
    email: env.USER_EMAIL,
    password: env.USER_PASSWORD
  });
  await expect(
    page.getByText(noticeMessage.signedInSuccessfully)
  ).toBeVisible();
  await page.context().storageState({ path: authFilePath });
});
