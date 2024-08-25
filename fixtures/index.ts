import { mergeTests } from '@playwright/test';
import { test as apiTest } from './api-request-test';
import { test as apiKeyStepTest } from './api-key-test';
import { test as sharedAssertionStepTest } from './shared-assertion-test';
import { test as userNavigationTest } from './user-navigation-test';
import { test as broserActionTest } from './browser-action-test';
import { test as authenticationTest } from './authentication-test';

const test = mergeTests(
  apiTest,
  apiKeyStepTest,
  sharedAssertionStepTest,
  userNavigationTest,
  broserActionTest,
  authenticationTest
);

export { test, test as it };
export { expect } from './custom-matchers';
