const CopyWebpackPlugin = require('copy-webpack-plugin');
const Webpack = require('webpack');
const dev = require('./webpack.config');

const Path = require('path');

// This config is run to compile and export the production environment to the dist/ folder.
const options = {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.txt'],
  },
  entry: dev.entry,
  output: {
    // This must be an absolute path, and thus must be defined per-service
    // path: 'dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.tsx$/, enforce: 'pre', loader: 'tslint-loader',
        options: {
          fix: true,
          typeCheck: false, // Explicitly disable extended type checking for dev workflow due to performance
          tsConfigFile: Path.resolve(__dirname, '../tsconfig.json'),
        },
      },
      { test: /\.(svg|png|gif|jpe?g)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader',
        options: { name: 'images/[name].[ext]' }, // disable filename hashing for infrequently changed static assets to enable preloading
      },
      { test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' }, // disable filename hashing for infrequently changed static assets to enable preloading
      },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.tsx$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ },
    ],
  },
  plugins: [
    new Webpack.optimize.AggressiveMergingPlugin(),
    new Webpack.DefinePlugin({
      // Default to beta for safety
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST || 'http://betaapi.expeditiongame.com'),
      'process.env.OAUTH2_CLIENT_ID': JSON.stringify(process.env.OAUTH2_CLIENT_ID || '545484140970-jq9jp7gdqdugil9qoapuualmkupigpdl.apps.googleusercontent.com'),
    }),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
    ]),
    new CopyWebpackPlugin([
      { from: 'src/scripts', to: 'scripts' },
    ]),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
    ]),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = options;