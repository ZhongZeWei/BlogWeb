const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#1DA57A' },
   }),
  );

//用@定义src目录
const path = require('path')
module.exports = function override(config, env) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
    };
    return config;
};