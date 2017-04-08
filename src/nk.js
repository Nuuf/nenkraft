var ns = global.nk = {};

require( './nk-base/nk-base' )( ns );
require( './nk-utils/nk-utils' )( ns );
require( './nk-utils/nk-color' )( ns );
require( './nk-style/nk-fill' )( ns );
require( './nk-style/nk-shadow' )( ns );
require( './nk-style/nk-stroke' )( ns );
require( './nk-style/nk-text' )( ns );
require( './nk-style/nk-style' )( ns );
require( './nk-math/nk-vector/nk-vector2d' )( ns );
require( './nk-math/nk-math' )( ns );
require( './nk-math/nk-intersect' )( ns );
require( './nk-debug/nk-debug' )( ns );
require( './nk-geom/nk-line/nk-line2d' )( ns );
require( './nk-geom/nk-aabb/nk-aabb2d' )( ns );
require( './nk-geom/nk-polygon/nk-polygon2d' )( ns );
require( './nk-geom/nk-circle/nk-circle' )( ns );
require( './nk-path/nk-line/nk-line2d' )( ns );
require( './nk-path/nk-aabb/nk-aabb2d' )( ns );
require( './nk-path/nk-polygon/nk-polygon2d' )( ns );
require( './nk-path/nk-circle/nk-circle' )( ns );
require( './nk-entity/nk-container2d' )( ns );
require( './nk-entity/nk-graphic2d' )( ns );
require( './nk-entity/nk-text' )( ns );

if ( DEVELOPMENT && module.hot ) module.hot.accept();