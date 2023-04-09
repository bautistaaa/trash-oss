/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: ['**/node_modules/*', '**/dist/*', '**/build/*'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
};

module.exports = config;
