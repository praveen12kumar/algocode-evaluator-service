// ESLint v9 config for TypeScript (ESM format)
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    files: ['**/*.ts'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      // ESLint core rules
      "semi": ["error", "always"],
      'no-console': 'warn',
      'no-unused-vars': 'off',

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Import sorting
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    }
  }
];
