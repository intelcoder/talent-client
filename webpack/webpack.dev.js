const CWD = process.cwd()
const path = require('path')
const webpack = require('webpack')

module.exports = {
 
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=http://localhost:9966/__webpack_hmr',
      path.resolve(CWD, './app/devMain.js')
    ],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path]__[name]__[local]',
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
      },
      //
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}