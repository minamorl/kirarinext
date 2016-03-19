module.exports = {
  entry: './app/entry.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  devtool: "#inline-source-map"
}
