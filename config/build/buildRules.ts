import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export default function buildRules(options: IBuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => /\.module\.(scss|css|sass)$/i.test(resPath),
              localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64]',
            }
          }
        },
        "sass-loader",
      ],
    },
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ]
}