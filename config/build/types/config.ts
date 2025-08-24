type TMode = 'development' | 'production';
type TEntryPath = string;

export interface IBuildEnv {
  mode: TMode;
  port: number;

}

export interface IBuildPlugins {
  templatePath: string;
}

export interface IOutputConfig {
  path: string;
  filename: string;
  clean: boolean;
}

export interface IBuildOptions {
  mode: TMode;
  entry: TEntryPath;
  output: IOutputConfig
  templatePath: string;
  isDev: boolean;
  devtool: string;
  port: number
  src: string;
}

