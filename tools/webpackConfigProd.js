/**
 * @license
 *
 * @author Daniel Vu
 * @author Sai Kalyan Moguloju
 */

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const webpackConfig = {
  entry: {
    FunnerBoard: path.resolve(process.cwd(), 'src/index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/main/components/html/index.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      // Don't include the lib-generated CSS file in the dist server network requests
      excludeAssets: [/lib/],
      inject: true,
    }),
  ],
};

export default webpackConfig;