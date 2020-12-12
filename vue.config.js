module.exports = {
  devServer: {
    proxy: {
      "^/upload$": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure:false,
        pathRewrite: { "^/upload/": "/upload/" },
        logLevel: "debug",
      }
    }
  }
}