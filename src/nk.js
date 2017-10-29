/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

var namespace = Object.create( null );

require( './nk-base/nk-base' )( namespace );
require( './nk-math/nk-math' )( namespace );
require( './nk-utils/nk-pool' )( namespace );
require( './nk-utils/nk-utils' )( namespace );
require( './nk-utils/nk-assert' )( namespace );
require( './nk-utils/nk-color' )( namespace );
require( './nk-utils/nk-flag-list' )( namespace );
require( './nk-utils/nk-flag-enum' )( namespace );
require( './nk-style/nk-fill' )( namespace );
require( './nk-style/nk-shadow' )( namespace );
require( './nk-style/nk-stroke' )( namespace );
require( './nk-style/nk-text' )( namespace );
require( './nk-style/nk-style' )( namespace );
require( './nk-event/nk-local-listener' )( namespace );
require( './nk-event/nk-local-event' )( namespace );
require( './nk-time/nk-ticker/nk-ticker' )( namespace );
require( './nk-time/nk-timer/nk-timer' )( namespace );
require( './nk-math/nk-vector/nk-vector2d' )( namespace );
require( './nk-math/nk-vector/nk-limit-vector2d' )( namespace );
require( './nk-math/nk-matrix/nk-matrix2d' )( namespace );
require( './nk-math/nk-transform/nk-basetransform2d' )( namespace );
require( './nk-math/nk-transform/nk-transform2d' )( namespace );
require( './nk-geom/nk-line/nk-line2d' )( namespace );
require( './nk-geom/nk-aabb/nk-aabb2d' )( namespace );
require( './nk-geom/nk-polygon/nk-polygon2d' )( namespace );
require( './nk-geom/nk-circle/nk-circle' )( namespace );
require( './nk-math/nk-collision/nk-collision2d' )( namespace );
require( './nk-math/nk-ease' )( namespace );
require( './nk-motion/nk-motion' )( namespace );
require( './nk-motion/nk-motion-manager' )( namespace );
require( './nk-utils/nk-quadtree-node' )( namespace );
require( './nk-input/nk-mouse' )( namespace );
require( './nk-input/nk-keyboard' )( namespace );
require( './nk-debug/nk-debug' )( namespace );
require( './nk-path/nk-line/nk-line2d' )( namespace );
require( './nk-path/nk-aabb/nk-aabb2d' )( namespace );
require( './nk-path/nk-polygon/nk-polygon2d' )( namespace );
require( './nk-path/nk-circle/nk-circle' )( namespace );
require( './nk-entity/nk-core-entity2d' )( namespace );
require( './nk-entity/nk-container2d' )( namespace );
require( './nk-entity/nk-case2d' )( namespace );
require( './nk-entity/nk-stage2d' )( namespace );
require( './nk-entity/nk-graphic2d' )( namespace );
require( './nk-entity/nk-plain2d' )( namespace );
require( './nk-entity/nk-plaingraphic2d' )( namespace );
require( './nk-entity/nk-plainsprite' )( namespace );
require( './nk-entity/nk-text' )( namespace );
require( './nk-entity/nk-sprite' )( namespace );
require( './nk-animator/nk-frame' )( namespace );
require( './nk-animator/nk-animation' )( namespace );
require( './nk-animator/nk-controller' )( namespace );
require( './nk-cp/nk-option' )( namespace );
require( './nk-cp/nk-command' )( namespace );
require( './nk-cp/nk-register' )( namespace );
require( './nk-load/nk-texture-loader' )( namespace );

global.Nenkraft = global.nk = namespace;

//if ( DEVELOPMENT && module.hot ) module.hot.accept();
