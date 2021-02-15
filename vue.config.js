module.exports = {
  configureWebpack: {
    output: {
      libraryExport: "default",
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue3-google-maps/" : "/",
  css: {
    extract: false,
  },
};
