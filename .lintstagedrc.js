// @ts-check

/** @type import('lint-staged').GenerateTask */
const typecheck = (..._files) => {
  return `npm run typecheck`;
};

/** @type import('lint-staged').Configuration */
const config = {
  '**/*.{astro,md,mdx}': ['npx prettier --write'],
  '**/*.astro': ['npm run lint:astro'],
  '**/*.{js,cjs,ts,tsx}': ['npm run format', 'npm run lint:es', typecheck],
};

export default config;
