require( './../style/default.css' );

require( './../images/1to8.png' );
require( './../images/4dots.png' );
require( './../images/glass-of-blueberryjuice.png' );
require( './../images/raindrop.png' );
require( './../images/smudge.png' );

var tests = [];

var context = require.context( './nk-tests', true, /\.(test)$/ );

context.keys().forEach( function ( file ) {
  tests.push( context( file ) );
} );

for ( var i = 0, l = tests.length; i < l; ++i ) {
  tests[ i ]();
}

//if ( DEVELOPMENT && module.hot ) module.hot.accept();