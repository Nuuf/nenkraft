require( './../style/default.css' );

var tests = [];

tests.push(
  require( './nk-tests/themask.test' ),
  require( './nk-tests/performance.test' ),
  require( './nk-tests/playground_0.test' ),
  require( './nk-tests/playground_1.test' )
);

for ( var i = 0, l = tests.length; i < l; ++i ) {
  tests[ i ]();
}

if ( DEVELOPMENT && module.hot ) module.hot.accept();