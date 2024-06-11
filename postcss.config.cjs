/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const simpleVars = require('postcss-simple-vars');
const mixins = require('postcss-mixins');
const presetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [simpleVars(), mixins(), presetEnv],
};

module.exports = config;
