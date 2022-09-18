module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/raspored/' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        }
      ] 
    }
  }
};