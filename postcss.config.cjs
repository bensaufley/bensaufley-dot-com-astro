// @ts-check

const variables = require('postcss-variables');
const mixins = require('postcss-mixins');
const presetEnv = require('postcss-preset-env');

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [variables, mixins, presetEnv],
};

module.exports = config;
