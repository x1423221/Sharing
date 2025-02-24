const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/MySharing/',
  devServer: {
    allowedHosts: ["all"],
  },
  outputDir: "docs"
})
