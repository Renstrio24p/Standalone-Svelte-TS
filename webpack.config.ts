const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack.bundle.js',
    clean: true,
  },
  target: 'web',
  devServer: {
    port: '7600',
    static: {
      directory: path.join(__dirname, './src/images')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.json','.svelte','.mjs'],
    alias: {
        svelte: path.resolve('node_modules', 'svelte/src/runtime') 
      },
      mainFields: ['svelte', 'browser', 'module', 'main'],
      conditionNames: ['svelte', 'browser', 'import']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, 
        exclude: /node_modules/, 
      },
      {
        test: /\.(ts)$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader",],
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images', 
              publicPath: 'src/images', 
            },
          },
        ],
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
     }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html')
    }),
    new CopyPlugin({
        patterns: [
          { from: "src/images", to: "./" },
        ],
      }),
  ]
};
