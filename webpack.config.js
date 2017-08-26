const path = require('path');

const resolvePath = value => path.resolve(__dirname, value)

module.exports = {
  entry: resolvePath('src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: resolvePath('build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: {
    alias: {
      components: resolvePath('src/components'),
      models: resolvePath('src/models'),
    },
    extensions: [".js", ".json", '.ts', '.tsx', '.scss', '.sass'],
  },
  devServer: {
    contentBase: resolvePath('build'),
    compress: true,
    port: 9000
  },
  devtool: 'eval',
}
