const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/Sharing/',
  devServer: {
    allowedHosts: ["all"],
  },
  outputDir: "docs"
})
