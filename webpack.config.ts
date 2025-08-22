import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IOutputConfig } from './config/build/types/config';
import { IBuildEnv } from './config/build/types/config';

export default (env: IBuildEnv) => {

  const templatePath = path.resolve(__dirname, 'public', 'index.html');

  const output: IOutputConfig = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  return buildWebpackConfig({
    mode,
    entry: './src/index.ts',
    output,
    templatePath,
    isDev,
    port: PORT,
    devtool: isDev ? 'inline-source-map' : undefined,
  });
};
