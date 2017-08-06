var WebpackDevServer = require( 'webpack-dev-server' ),
  webpack = require( 'webpack' ),
  config = require( './webpack.config.js' )(),
  compiler = webpack( config ),
  server = new WebpackDevServer( compiler, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  } );
server.listen( 8080, 'localhost', function () {
  console.log( '(-.-) server running, ENV=' + process.env.NODE_ENV );
} );