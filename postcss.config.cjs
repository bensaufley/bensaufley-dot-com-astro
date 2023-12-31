// @ts-check

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [require('postcss-variables'), require('postcss-mixins'), require('postcss-preset-env')],
};

module.exports = config;
