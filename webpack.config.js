const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    main: './src/client/ts/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'client'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      },
    ]
  },

  plugins: [],
};

module.exports = (env, argv) => {
  var cssFilename = '[name].[chunkhash].css';
  const mode = argv.mode || 'production';

  config.mode = mode;

  if (mode == 'development') {
    config.output.filename = '[name].js';
    cssFilename = '[name].css';
  }

  config.plugins.push(new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }));
  config.plugins.push(new MiniCssExtractPlugin({
    filename: cssFilename,
  }));
  config.plugins.push(new CopyPlugin([
    {
      from: './src/client/static',
      to: '.',
      ignore: [
        '.DS_Store',
        '.gitkeep'
      ],
    },
  ]));
  config.plugins.push(new HtmlWebPackPlugin({
    template: './src/client/index.html',
    filename: './index.html',
  }));

  return config;
};
