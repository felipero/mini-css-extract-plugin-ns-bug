const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  return {
    plugins: [
      new MiniCssExtractPlugin({
        // filename: "[name].[contenthash:8].css",
        filename: "stylesheets/[name].[contenthash:8].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        title: "Mini css bug",
        template: "src/index.html",
        minify: {
          html5: true,
          preserveLineBreaks: true,
          decodeEntities: true
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.(scss|sass|css)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                minimize: false,
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  };
};
