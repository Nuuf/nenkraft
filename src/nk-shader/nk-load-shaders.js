/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  function Parse ( _data ) {

    var vS = '@vertex@';
    var vE = '@vertex-end@';
    var fS = '@fragment@';
    var fE = '@fragment-end@';
    var s, e;
    s = _data.indexOf( vS ) + vS.length;
    e = _data.indexOf( vE );
    var vShader = _data.substring( s, e );
    s = _data.indexOf( fS ) + fS.length;
    e = _data.indexOf( fE );
    var fShader = _data.substring( s, e );
    return { v: vShader, f: fShader };
  
  }

  Nenkraft.SHADER_CODE = {
    TEXTURE_2D: Parse( require( './nk-texture2d/nk-texture2d.shader' ) ),
    TEXTURE_2D_BATCH: Parse( require( './nk-texture2d/nk-texture2d-batch.shader' ) ),
    LINE2D: Parse( require( './nk-shape2d/nk-line2d.shader' ) ),
    RECTANGLE: Parse( require( './nk-shape2d/nk-rectangle.shader' ) ),
    CIRCLE: Parse( require( './nk-shape2d/nk-circle.shader' ) ),
    PIXEL_BATCH: Parse( require( './nk-pixel/nk-pixel-batch.shader' ) )
  };

};
