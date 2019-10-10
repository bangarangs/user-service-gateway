module.exports = {
  entry: './_src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.jsx$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
};