/**
 * Builds the web app with the "production" NODE_ENV set.
 *
 * @author Sai Kalyan Moguloju
 */

import path from 'path';
// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
import webpack from 'webpack';
import getTerraToolkitWebpackConfig from 'terra-toolkit/config/webpack/webpack.config';
import webpackMerge from 'webpack-merge';
import webpackConfig from './webpackConfigProd';

import { chalkError, chalkSuccess, chalkWarning, chalkProcessing } from './chalkConfig';

process.env.NODE_ENV = 'production'; // Assures React is built in prod mode and that Babel dev config is not applied
process.env.BABEL_ENV = 'production';
process.env.disableAggregateTranslations = true;
console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

const terraToolkitConfig = getTerraToolkitWebpackConfig(
  {},
  {
    'output-path': path.resolve(process.cwd(), 'output/generated/web'),
  },
);

const mergedConfig = webpackMerge.strategy({
  'resolve.modules': 'prepend',
})(terraToolkitConfig, webpackConfig);

webpack(mergedConfig).run((error, stats) => {
  if (error) {
    // so a fatal error occurred. Stop here.
    console.log(chalkError(error));
    throw new Error('Webpack Error');
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    jsonStats.errors.forEach((jsonStatError) => console.log(chalkError(jsonStatError)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map((warning) => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log(chalkSuccess('Your app is compiled in production mode in output/generated/web.'));
});