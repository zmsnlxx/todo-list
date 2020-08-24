const tsImportPlugin = require('ts-import-plugin')
const path = require('path')

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  
  productionSourceMap: false,
  
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "${ path.join(__dirname, '/src/styles/vars.less') }";`,
          },
        },
      },
    },
  },
  
  chainWebpack: config => {
    
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        // 配置ts-import-plugin以按需引入所需依赖
        options.transpileOnly = true
        options.getCustomTransformers = () => ({
          before: [tsImportPlugin({ libraryName: 'vant', libraryDirectory: 'es', style: true })],
        })
        options.compilerOptions = { module: 'es2015' }
        return options
      })
    
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE = process.env.BASE || 1
      return args
    })
  },
  lintOnSave: false,
}
