import type { Config } from 'stylelint';

const config: Config = {
  extends: ['stylelint-config-standard', 'stylelint-config-alphabetical-order'],
  rules: {
    'selector-class-pattern': '^([a-z][a-zA-Z0-9]+|no-border|no-link|align-left|align-right)$',
    'custom-property-pattern': '^[a-z][A-Za-z0-9]+$',
    'keyframes-name-pattern': '^[a-z][A-Za-z0-9]+$',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['define-mixin', 'mixin'],
      },
    ],
    'selector-type-no-unknown': [true, { ignoreTypes: ['astro-island', 'spoiler'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'no-descending-specificity': null,
  },
};

export default config;
