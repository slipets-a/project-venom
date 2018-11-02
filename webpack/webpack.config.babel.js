// Paths
import { path } from './path';
// Plugins
import * as plugins from './plugins';
// Environments
import { development } from './modes/development';
import { production } from './modes/production';

export default (env) => {
    const isDevelopment = env === 'development';
    const environment = isDevelopment ? development(path, plugins, env) : production(path, plugins, env);

    environment.devtool = isDevelopment ? 'cheap-module-eval-source-map' : false;

    return environment;
};
