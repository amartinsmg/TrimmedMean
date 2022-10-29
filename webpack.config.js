const CssMinimizerWebpack = require("css-minimizer-webpack-plugin"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path"),
  TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "assets/bundle.js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: 'assets/[hash][ext]',
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerWebpack()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/bundle.css",
    }),
  ],
};
