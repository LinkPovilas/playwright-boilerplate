import { test } from 'fixtures';

export function Step(stepName?: string) {
  return function decorator(
    target: Function,
    context: ClassMethodDecoratorContext
  ) {
    return function replacementMethod(this: any, ...args: any) {
      const name =
        stepName ?? `${this.constructor.name}.${context.name as string}`;
      return test.step(
        name,
        async () => {
          return await target.call(this, ...args);
        },
        { box: true }
      );
    };
  };
}
