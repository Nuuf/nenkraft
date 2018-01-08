var 
  webpack = require( 'webpack' ),
  path = require( 'path' ),
  os = require( 'os' ),
  colors = require( 'colors/safe' ),
  banner = require( './banner' )(),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  HTMLWebpackPlugin = require( 'html-webpack-plugin' ),
  PRODUCTION = process.env.NODE_ENV === 'production',
  DEVELOPMENT = process.env.NODE_ENV === 'development',
  LIBRARYBUNDLE = process.env.NODE_ENV === 'librarybundle',
  entry,
  plugins,
  cssIdentifier,
  cssLoader,
  output;

output = {
  path: path.join( __dirname, 'dist' ),
  filename:  '[name].min.js'
};

if ( PRODUCTION ) {

  entry = {
    nk: [
      './src/nk.js'
    ],
    tests: [
      './tests/tests.js'
    ],
    nkb: [
      './src/nkb.js'
    ]
  };

  plugins =[
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin( 'style-[contenthash:10].css' ),
    new HTMLWebpackPlugin( {
      template: 'build_template.html',
      excludeChunks: [ 'nkb' ]
    } ),
    new webpack.BannerPlugin( { banner: banner, raw: true, entryOnly: true } )
  ];

  cssIdentifier = '[hash:base64:10]';
  cssLoader = ExtractTextPlugin.extract( {
    use: [ 'css-loader?minimize&localIdentName=' + cssIdentifier, 'postcss-loader' ]
  } );

  output.publicPath = './';

} else if ( DEVELOPMENT ) {

  entry = {
    nk: [
      './src/nk.js',
      './tests/tests.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ]
  };

  plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];

  cssIdentifier = '[path][name]--[local]';
  cssLoader = [ 'style-loader', 'css-loader?localIdentName=' + cssIdentifier, 'postcss-loader' ];

  output.publicPath = '/dist/';

} else if ( LIBRARYBUNDLE ) {

  entry = {
    nk: [
      './src/nk.js'
    ]
  };

  plugins = [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.BannerPlugin( { banner: banner, raw: true, entryOnly: true } )
  ];

  output.library = 'nk';
  output.libraryTarget = 'umd';
  output.path = path.join( __dirname, 'npm/src' );
  output.publicPath = './';

}

plugins.push(
  new webpack.DefinePlugin( {
    DEVELOPMENT: JSON.stringify( DEVELOPMENT ),
    PRODUCTION: JSON.stringify( PRODUCTION ),
    LIBRARYBUNDLE: JSON.stringify( LIBRARYBUNDLE )
  } )
);

console.log( JSON.stringify( entry.nk ) || colors.red( 'undefined' ), os.EOL + 'entry nk' );
console.log( JSON.stringify( entry.tests ) || colors.red( 'undefined' ), os.EOL + 'entry tests' );
console.log( JSON.stringify( entry.nkb ) || colors.red( 'undefined' ), os.EOL + 'entry nkb' );
console.log( JSON.stringify( plugins ) || colors.red( 'undefined' ), os.EOL + 'plugins' );

module.exports = function ( env ) {

  if ( env && env.bigBundle && PRODUCTION ) {

    output.filename = '[name].js';
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
      }, {
        test: /\.shader|txt$/,
        use: [ 'raw-loader' ],
        exclude: /node_modules/
      } ]
    },
    output: output
  };

};
