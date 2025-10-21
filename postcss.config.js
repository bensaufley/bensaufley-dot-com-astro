// @ts-check
import mixins from 'postcss-mixins';
import presetEnv from 'postcss-preset-env';
import simpleVars from 'postcss-simple-vars';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [simpleVars(), mixins(), presetEnv],
};

export default config;
