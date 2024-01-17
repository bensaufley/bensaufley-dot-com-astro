// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@bensaufley', 'plugin:astro/recommended'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['astro:content'] }],
  },
  overrides: [
    {
      files: ['.tsx', '.jsx'],
      extends: [require.resolve('@bensaufley/eslint-config/preact.cjs')],
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      plugins: ['astro'],
      rules: {
        'import/prefer-default-export': 'off',
        // doesn't play nice with Astro
        'prettier/prettier': 'off',
      },
    },
  ],
};
