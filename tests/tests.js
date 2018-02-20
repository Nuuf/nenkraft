require( './../style/default.css' );

var tests = [];

var context = require.context( './nk-tests', true, /\.(test)$/ );

context.keys().forEach( function ( file ) {

  tests.push( context( file ) );

} );

for ( var i = 0, l = tests.length; i < l; ++i ) {

  tests[ i ]();

}

// if ( DEVELOPMENT && module.hot ) module.hot.accept();
