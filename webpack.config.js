const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: ['./assets/scss/main.scss', './assets/js/main.js'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },  {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                grid: true,
                browsers: ['last 2 version', 'IE 10', 'IE 11']
              })]
            }
          }
          ,
          'sass-loader',
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.*$|$)/,
        exclude: [/fonts/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '/img/'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'assets/img',
        to: 'img'
      }
    ])
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  watch: true,
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/main.js'
  },
};

module.exports = config;
