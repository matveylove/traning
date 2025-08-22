import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IBuildPlugins } from './types/config';

export default function buildPlugins(options: IBuildPlugins): webpack.WebpackPluginInstance[] {
  const {templatePath} = options;

  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: templatePath,
    })
  ]
}
