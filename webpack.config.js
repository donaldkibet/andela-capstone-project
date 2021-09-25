const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env, argv = {}) => {
  const mode = argv.mode || process.env.NODE_ENV || "development";
  const styleLoader = process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader;
  return {
    mode: mode,
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name]chunks.js'
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      open: true
    },
    performance: {
      hints: mode === 'production' && "warning",
    },
    module: {
      rules: [
        {
          test: /\.m?(js|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: require.resolve("babel-loader"),
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }, "sass-loader"]
        },
        {
          test: /\.module\.(sa|sc|c)ss$/,
          use: [styleLoader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }, "sass-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "andela-capstone.min.css",
      }),
      new ForkTsCheckerWebpackPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), "..."],
      runtimeChunk: {
        name: 'runtime',
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
    }
  }
}