import { APIResponse, test as base } from '@playwright/test';
import { LoginData } from '../api/user-request';
import { endpoint } from '../api/endpoint';

interface ApiRequest {
  userLoginRequest: ({ data }: { data: LoginData }) => Promise<APIResponse>;
}

export const test = base.extend<ApiRequest>({
  userLoginRequest: async ({ request }, use) => {
    await use(({ data }: { data: LoginData }) => {
      return request.post(endpoint.userLogin(), { data });
    });
  }
});
