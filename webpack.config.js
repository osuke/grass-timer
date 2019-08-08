const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app/index'
  },  
  output: {
    path: __dirname + '/dist',
    filename: '[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]',
              namedExport: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3838
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/index.html'),
      template: './src/template/index.html'
    }),
    new CleanWebpackPlugin(),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css']
  }
}
