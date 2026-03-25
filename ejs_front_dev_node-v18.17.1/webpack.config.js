const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    script: `./src/js/index.js`,
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          filename: '[name][ext]',
          options: {
            encodeOptions: {
              /* 各種libSquooshのオプション設定 */
              mozjpeg: {
                quality: 90,
              },
            },
          },
        },
      }),
    ],
  },
  devtool: 'source-map',
};