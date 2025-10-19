// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@bensaufley', 'plugin:astro/recommended'],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': ['error', { ignore: ['astro:content'] }],
  },
  globals: {
    dataLayer: 'writable',
    gtag: 'writable',
    partytown: 'writable',
  },
  overrides: [
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
