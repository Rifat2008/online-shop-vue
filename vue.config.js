const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/style.scss";`,
        implementation: require('node-sass')
      }
    }
  }
})


