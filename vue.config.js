const path = require('path')

module.exports = {
  outputDir: 'dist/src',
  transpileDependencies: ['vuetify'],

  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/assets/sass/main.sass'",
        implementation: require('sass')
      }
    }
  },

  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./src/main.js')
      .end()
    config.resolve.alias.set('@', path.join(__dirname, './src'))
  }
}
