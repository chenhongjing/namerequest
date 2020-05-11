const path = require("path")

module.exports = {
  configureWebpack: {
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.vue', '.jsx']
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, "./src/sass/theme.sass")]
    }
  },
  transpileDependencies: [
    'vuetify',
    'vuex-module-decorators'
  ],
  publicPath: process.env.VUE_APP_PATH
}