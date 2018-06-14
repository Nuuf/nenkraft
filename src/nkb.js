/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

var namespace = Object.create( null );

require( './nk-polyfill/nk-polyfill' )();
require( './nk-base/nkb-base' )( namespace );
require( './nk-math/nk-math' )( namespace );
require( './nk-utils/nk-assert' )( namespace );
require( './nk-utils/nk-pool' )( namespace );
require( './nk-utils/nk-glob' )( namespace );
require( './nk-utils/nk-cache' )( namespace );
require( './nk-utils/nk-utils' )( namespace );
require( './nk-utils/nk-flag-list' )( namespace );
require( './nk-utils/nk-flag-enum' )( namespace );
require( './nk-utils/nk-maker' )( namespace );
require( './nk-event/nk-local-listener' )( namespace );
require( './nk-event/nk-local-event' )( namespace );
require( './nk-time/nk-timer/nk-timer' )( namespace );
require( './nk-time/nk-ticker/nk-server-ticker' )( namespace );
require( './nk-math/nk-vector/nk-vector2d' )( namespace );
require( './nk-math/nk-matrix/nk-matrix2d' )( namespace );
require( './nk-math/nk-transform/nk-basetransform2d' )( namespace );
require( './nk-math/nk-transform/nk-transform2d' )( namespace );
require( './nk-math/nk-ease' )( namespace );
require( './nk-motion/nk-motion' )( namespace );
require( './nk-motion/nk-motion-manager' )( namespace );
require( './nk-geom/nk-line/nk-line2d' )( namespace );
require( './nk-geom/nk-aabb/nk-aabb2d' )( namespace );
require( './nk-geom/nk-polygon/nk-polygon2d' )( namespace );
require( './nk-geom/nk-circle/nk-circle' )( namespace );
require( './nk-math/nk-collision/nk-collision2d' )( namespace );
require( './nk-utils/nk-quadtree-node' )( namespace );
require( './nk-entity/nk-core-entity2d' )( namespace );
require( './nk-entity/nk-container2d' )( namespace );
require( './nk-entity/nk-case2d' )( namespace );
require( './nk-cp/nk-option' )( namespace );
require( './nk-cp/nk-command' )( namespace );
require( './nk-cp/nk-register' )( namespace );

module.exports = namespace;
