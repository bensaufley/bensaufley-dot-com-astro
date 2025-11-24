// @ts-check

// Just run astro check on whole application;
// it does not support single file checking.
/** @type import('lint-staged').GenerateTask */
const astroCheck = (..._files) => `npm run lint:astro`;

// Just run typechecking on whole application;
// it does not support single file checking.
/** @type import('lint-staged').GenerateTask */
const typecheck = (..._files) => `npm run typecheck`;

/** @type import('lint-staged').Configuration */
const config = {
  '**/*.mdx': ['npm run format:es'],
  '**/*.{astro,json,md}': ['npx prettier --write'],
  '**/*.astro': ['npm run format:es', astroCheck],
  '**/*.{js,cjs,ts,tsx}': ['npm run format:es', typecheck],
  '**/*.css': ['npm run format:css', 'npx prettier --write'],
};

export default config;
