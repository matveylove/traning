import { IBuildOptions } from './types/config';
import webpack from 'webpack';
import buildPlugins from './buildPlugins';
import buildRules from './buildRules';
import buildResolves from './buildResolves';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
  const { mode, output, entry, templatePath, devtool, isDev } = options;

  return {
    mode,
    entry,
    output,

    plugins: buildPlugins({
      templatePath,
      isDev,
    }),
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolves(options),
    devtool: devtool,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
