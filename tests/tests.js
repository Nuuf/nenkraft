require( './../style/default.css' );

require( './../assets/images/1to8.png' );
require( './../assets/images/4dots.png' );
require( './../assets/images/glass-of-blueberryjuice.png' );
require( './../assets/images/raindrop.png' );
require( './../assets/images/smudge.png' );
require( './../assets/images/colors.png' );
require( './../assets/images/font.png' );

var tests = [];

var context = require.context( './nk-tests', true, /\.(test)$/ );

context.keys().forEach( function ( file ) {
  tests.push( context( file ) );
} );

for ( var i = 0, l = tests.length; i < l; ++i ) {
  tests[ i ]();
}

//if ( DEVELOPMENT && module.hot ) module.hot.accept();