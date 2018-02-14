var WebpackDevServer = require( 'webpack-dev-server' ),
  webpack = require( 'webpack' ),
  colors = require( 'colors/safe' ),
  config = require( './webpack.config.js' )(),
  compiler = webpack( config ),
  server = new WebpackDevServer( compiler, {
    hot: false,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      warnings: true
    }
  } );
server.listen( 8080, 'localhost', function () {

  console.log( '(-.-) server running, ENV=' + colors.green( process.env.NODE_ENV ) );

} );
