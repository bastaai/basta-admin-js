import { defineConfig, globalIgnores } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import parser from '@graphql-eslint/eslint-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    '**/dist',
    '**/node_modules',
    '**/examples',
    'tests/types',
    '**/fragment-masking.ts',
  ]),
  {
    extends: compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
    ),

    plugins: {
      jest,
      '@typescript-eslint': typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
    },

    rules: {
      'lines-between-class-members': [
        1,
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      'no-console': 0,
      'func-style': 2,
      'prefer-spread': 0,
      'consistent-return': 2,

      'prefer-arrow-callback': [
        2,
        {
          allowNamedFunctions: false,
          allowUnboundThis: false,
        },
      ],

      'no-unused-vars': 0,
      'jest/no-disabled-tests': 2,
      'jest/no-focused-tests': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-empty-interface': 0,

      '@typescript-eslint/no-unused-vars': [
        1,
        {
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.graphql'],

    plugins: {
      '@graphql-eslint': parser,
    },

    languageOptions: {
      parser: parser,
    },

    rules: {
      '@graphql-eslint/known-type-names': 'error',
    },
  },
]);
