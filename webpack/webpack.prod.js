const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: false,
  entry: path.resolve(CWD, './react/index'),
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /react-flexbox-grid/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                minimize: true,
                localIdentName: '[hash:base64:5]'
                // localIdentName: '[path]__[name]__[local]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-modules-values')(),
                  require('postcss-nested')(),
                  require('autoprefixer')(),
                ]
              }
            }
          ]
        })
      },
      //
    ]
  },

  plugins: [

  ]
}









