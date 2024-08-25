import { alertMessage, noticeMessage } from 'data/ui/messages';
import { urlPath } from 'data/ui/url-path';
import { env } from 'env';
import { test as setup } from 'fixtures';
import { authFilePath } from 'playwright.config';

setup(
  'authenticate',
  async ({
    goToUrl,
    assertTextIsVisible,
    assertRememberMeIsNotChecked,
    signIn,
    saveStorageState
  }) => {
    await goToUrl(urlPath.homePage);
    await assertTextIsVisible(alertMessage.signInOrSignUp);
    await assertRememberMeIsNotChecked();
    await signIn({ email: env.USER_EMAIL, password: env.USER_PASSWORD });
    await assertTextIsVisible(noticeMessage.signedInSuccessfully);
    await saveStorageState(authFilePath);
  }
);
