import webpack from 'webpack';
import { IBuildOptions } from './types/config';

export default function buildResolves(options: IBuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      options.src, 'node_modules'
    ],
    mainFiles: ["index"],
    alias: {}
  }
};
