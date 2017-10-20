var webpack = require( 'webpack' ),
  path = require( 'path' ),
  os = require( 'os' ),
  colors = require( 'colors/safe' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  HTMLWebpackPlugin = require( 'html-webpack-plugin' ),
  PRODUCTION = process.env.NODE_ENV === 'production',
  DEVELOPMENT = !PRODUCTION;

var entry = PRODUCTION
  ? {
    nk: [
      './src/nk.js'
    ],
    tests: [
      './tests/tests.js',
    ]
  }
  : {
    nk: [
      './src/nk.js',
      './tests/tests.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ]
  };

var plugins = PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin( 'style-[contenthash:10].css' ),
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

var cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]--[local]';
var cssLoader = PRODUCTION
  ? ExtractTextPlugin.extract( {
    use: [ 'css-loader?minimize&localIdentName=' + cssIdentifier, 'postcss-loader' ]
  } )
  : [ 'style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'postcss-loader' ];

console.log( JSON.stringify( entry.nk ) || colors.red( 'undefined' ), os.EOL + 'entry nk' );
console.log( JSON.stringify( entry.tests ) || colors.red( 'undefined' ), os.EOL + 'entry tests' );
console.log( JSON.stringify( entry.nkb ) || colors.red( 'undefined' ), os.EOL + 'entry nkb' );
console.log( JSON.stringify( plugins ) || colors.red( 'undefined' ), os.EOL + 'plugins' );

module.exports = function ( env ) {
  var fileName = '[name].min.js';
  if ( env && env.bigBundle ) {
    fileName = '[name].js';
    plugins.shift();
  }
  return {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    externals: {},
    module: {
      rules: [ {
        test: /\.png|jpg|gif$/,
        use: [ 'file-loader?name=[path][name].[ext]' ],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: cssLoader,
        exclude: /node_modules/
      }]
    },
    output: {
      path: path.join( __dirname, 'dist' ),
      publicPath: PRODUCTION ? './' : '/dist/',
      filename: fileName
    }
  };
};