const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
function isEnvSet(name, def) {
    return name in process.env ? ['1', 't', 'true'].indexOf(
        process.env[name]) !== -1 : def;
}

const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';
const TEST = NODE_ENV === 'test';

const HAPPYPACK = isEnvSet('HAPPYPACK', !PRODUCTION);
const OUTPUTNAME = process.env.HASH_OUTPUT ? '[hash].[ext]' : '[name].[ext]';
const SOURCEMAP = isEnvSet('SOURCEMAP', false);

function styleLoader(loaders, id) {
    return PRODUCTION && !HAPPYPACK ? plugins.extractText.extract({
        fallback: 'style-loader', use: loaders}) :
        [{loader: 'style-loader', options: {sourceMap: SOURCEMAP}}, ...loaders];
}

const config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss|sass/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {minimize: true}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    })
    // new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css",
    //     disable: process.env.NODE_ENV === "development"
    // })
  ]
};

if (DEVELOPMENT) {
    config.cache = true;
    config.devtool = SOURCEMAP ? 'source-map' : 'eval-cheap-module-source-map';
    if (isEnvSet('DASHBOARD')) {
        const dashboard = require('webpack-dashboard/plugin');
        config.plugins.push(new dashboard({port: 3001}));
    }
} else if(PRODUCTION) {
  if (SOURCEMAP)
        config.devtool = 'source-map';
}

const happypack = require('happypack');
const happyThreadPool = happypack.ThreadPool({size: 5});

config.module.rules.forEach((rule) => {
    if (HAPPYPACK && rule.happy) {
        config.plugins.push(new happypack({
            id: rule.happy,
            loaders: rule.use instanceof Array ? rule.use : [rule.use],
            threadPool: happyThreadPool,
            verbose: false,
        }));
        rule.use = {loader: 'happypack/loader?id=' + rule.happy};
    }
    delete rule.happy;
});

module.exports = config;
