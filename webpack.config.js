
var webpack = require( 'webpack' ),
  path = require( 'path' ),
  HTMLWebpackPlugin = require( 'html-webpack-plugin' ),
  PRODUCTION = process.env.NODE_ENV === 'production',
  DEVELOPMENT = !PRODUCTION;

var entry = PRODUCTION
  ? [
    './src/index.js'
  ]
  : [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ];

var plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new HTMLWebpackPlugin( {
      template: 'build_template.html'
    } )
  ]
  : [
    new webpack.HotModuleReplacementPlugin()
  ];

plugins.push(
  new webpack.DefinePlugin( {
    DEVELOPMENT: JSON.stringify( DEVELOPMENT ),
    PRODUCTION: JSON.stringify( PRODUCTION )
  } )
);

console.log( JSON.stringify( entry ) );
console.log( JSON.stringify( plugins ) );

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  externals: {

  },
  module: {
    rules: []
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    publicPath: PRODUCTION ? './' : '/dist/',
    filename: PRODUCTION ? 'nk.min.js' : 'nk.min.js'
  }
};