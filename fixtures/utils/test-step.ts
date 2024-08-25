import { test } from 'fixtures';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const testStep = <T extends () => any>(title: string, callback: T) =>
  test.step(title, callback, { box: true });
