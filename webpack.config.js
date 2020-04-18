const path = require('path');
/**
 * cejt会将此文件中的webpack配置与内置配置自动合并
 * 可以在此文件中根据项目情况扩展webpack更多的配置，如扩展更多loader、plugin等。
 */
module.exports = {
  resolve: {
    plugins: [
      // 使用TsconfigPathsPlugin插件后，你不需要在配置 `alias`,
      // 插件会自动将 tsconfig.json 中的 paths 映射到 webpack
      new TsconfigPathsPlugin({
        configFile: path.join(process.cwd(), 'tsconfig.json'),
        logLevel: 'info',
        extensions: ['.ts', '.tsx', 'js', 'json'],
      }),
    ],
  },
};
