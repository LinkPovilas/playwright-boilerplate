// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  // eslint-disable-next-line
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // eslint-disable-next-line
  eslintConfigPrettier,
  {
    languageOptions: {
      // eslint-disable-next-line
      globals: globals.builtin,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      // eslint-disable-next-line
      unicorn: eslintPluginUnicorn
    }
  },
  {
    ignores: ['playwright*', 'test-results']
  },
  {
    files: ['fixtures/**/*-test.ts'],
    rules: {
      'no-empty-pattern': 'off'
    }
  },
  {
    files: ['decorators/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-argument ': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off'
    }
  }
);
