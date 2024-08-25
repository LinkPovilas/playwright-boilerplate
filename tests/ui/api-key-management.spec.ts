import { noticeMessage } from 'data/ui/messages';
import { it } from 'fixtures';

it.describe('API key management', () => {
  it('should update API key name', async ({
    apiKey,
    generateRandomApiKeyName,
    updateApiKeyName,
    assertTextIsVisible
  }) => {
    const newApiKeyName = generateRandomApiKeyName();
    await updateApiKeyName(apiKey.name, newApiKeyName);
    await assertTextIsVisible(noticeMessage.apiKeyEditedSuccessfully);
  });
});
