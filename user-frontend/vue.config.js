const webpack = require('webpack')

const vueConfig = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 构建输出路径
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: '',
  devServer: {
    port: 8888,
    proxy: {
      '/': {
        target: process.env.VUE_PROXY_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/': ''
        },
        ws: false
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },

  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV === 'development' ? 'error' : true
}

module.exports = vueConfig
