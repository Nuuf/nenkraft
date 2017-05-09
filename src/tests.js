require( './../style/default.css' );

var tests = [];

tests.push(
  require( './nk-tests/themask.test' ),
  require( './nk-tests/performance.test' ),
  require( './nk-tests/playground_nightsky.test' ),
  require( './nk-tests/playground_butterflyish.test' ),
  require( './nk-tests/playground_grabndrag.test' ),
  require( './nk-tests/playground_aabbcollision.test' ),
  require( './nk-tests/playground_circlecollision.test' ),
  require( './nk-tests/playground_elasticcollision.test' ),
  require( './nk-tests/playground_sprite.test' ),
  require( './nk-tests/playground_animation.test' ),
  require( './nk-tests/playground_cli.test' )
);

for ( var i = 0, l = tests.length; i < l; ++i ) {
  tests[ i ]();
}

if ( DEVELOPMENT && module.hot ) module.hot.accept();