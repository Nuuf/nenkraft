var webpack = require( 'webpack' ),
  path = require( 'path' ),
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
      './src/tests.js',
    ]
  }
  : {
    nk: [
      './src/nk.js',
      './src/tests.js',
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

console.log( JSON.stringify( entry.nk ) );
console.log( JSON.stringify( entry.tests ) );
console.log( JSON.stringify( plugins ) );

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  externals: {},
  module: {
    rules: [ {
      test: /\.png|jpg$/,
      use: [ 'url-loader?limit=1024&name=img/[hash:12].[ext]' ],
      exclude: /node_modules/
    }, {
      test: /\.gif$/,
      use: [ 'file-loader?name=img/[hash:12].[ext]' ],
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
    filename: PRODUCTION ? '[name].min.js' : '[name].min.js'
  }
};