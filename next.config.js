const withSass = require("@zeit/next-sass");

module.exports = withSass({
  sassLoaderOptions: {
    includePaths: ["node_modules/semantic-ui-sass"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          publicPath: "/_next/static/",
          outputPath: "static/",
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
