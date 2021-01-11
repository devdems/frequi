module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.0.10:7080',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_variables.scss";',
      },
    },
  },
};
