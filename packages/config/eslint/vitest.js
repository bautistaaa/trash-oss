/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:vitest/recommended',
      ],
    },
  ],
};
