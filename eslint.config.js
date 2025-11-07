// eslint.config.js
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js'],
    plugins: {
      cypress,
      prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        context: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': ['error', { allow: ['log'] }],
    },
  },
];
module.exports = [
  {
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
      },
    },
  },
];
