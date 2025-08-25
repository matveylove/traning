import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildPlugins } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildPlugins(options: IBuildPlugins): webpack.WebpackPluginInstance[] {
  const {templatePath, isDev} = options;

  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: templatePath,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // позволяет прокидывать глобальные переменные в приложение
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
