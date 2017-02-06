// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: {
    app: [path.join(__dirname, 'src', 'app-client.jsx')],
    appportal: [path.join(__dirname, 'src', 'app-portal.jsx')],
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'axios',
      'jquery'

    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules$/,
        query: {
          presets: ['es2015', 'stage-2', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbacklLoader: 'style',
          loader: 'css-loader'
        })
      }, {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&minetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&minetype=image/svg+xml"
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  watch: true
};