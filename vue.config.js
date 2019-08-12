// vue.config.js
module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  publicPath: './',
  devServer: {
    // proxy: 'http://<another-origin-path>', // <- solving CORS issue
    port: 8081
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.js'
      }
    }
  }
}
