const config = require("config");
const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const loaders = require("./loaders");

const prod = config.get("minify");
module.exports = {
  mode: prod ? "production" : "development",
  entry: {
    app: ["./src/standalone.tsx"],
  },
  performance: {
    assetFilter(filename) {
      // Don't size test uncompressed javascript - we just care about the .js.gz files
      return !/\.(js|map)$/.test(filename);
    },
  },

  devtool: prod ? false : "eval-cheap-module-source-map",

  // https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalseO
  stats: {
    warningsFilter: /export .* was not found in/,
  },

  plugins: [
    // Define global letiables in the client to instrument behavior.
    new webpack.DefinePlugin({
      // Flag to detect non-production
      __BUILD_ENV__: JSON.stringify("webpack"),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      __TEST__: "false",
      "process.env.PUBLIC_HOST": JSON.stringify(
        config.get("server.publicHost")
      ),
      // Allow switching on NODE_ENV in client code
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    // Don't proceed in generating code if there are errors
    new webpack.NoEmitOnErrorsPlugin(),
    // Show a nice progress bar on the console.
    new ProgressBarPlugin({
      clear: false,
    }),

    ...(process.env.ANALYZE
      ? [new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)()]
      : []),
  ],

  output: {
    path: path.resolve(__dirname, "../dist/standalone"),
    // publicPath: "/",
    publicPath: `${JSON.stringify(config.get("server.publicHost"))}/standalone`,
    filename: "client.js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, ".."), "node_modules"],
  },

  module: {
    rules: [
      loaders.clientSideTypeScript,
      loaders.graphql,
      loaders.scss,
      loaders.workers,
    ].concat(loaders.allImagesAndFontsArray),
  },
};
