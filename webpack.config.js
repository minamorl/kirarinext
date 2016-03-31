var webpack = require('webpack');

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
      },
			{ 
				test: /\.css$/,
				loader: "style-loader!css-loader?root=." 
			},
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:9010/"
      }
    }
  },
  devtool: "#inline-source-map",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}
