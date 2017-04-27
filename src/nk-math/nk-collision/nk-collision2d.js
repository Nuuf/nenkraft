module.exports = function ( nk ) {
  "use strict";
  var Collision2D = { Intersect: {} };
  Collision2D.VectorSortMinMag = function ( _a, _b ) {
    return _a.GetMagnitude() - _b.GetMagnitude();
  };
  Collision2D.Intersect.AABB2DvsAABB2D = function ( _aabb1, _aabb2 ) {
    var tl1 = _aabb1.tl, tl2 = _aabb2.tl;
    if (
      tl1.x < tl2.x + _aabb1.w &&
      tl2.x < tl1.x + _aabb2.w &&
      tl1.y < tl2.y + _aabb1.h &&
      tl2.y < tl1.y + _aabb2.h
    ) {
      return true;
    }
    return false;
  };
  Collision2D.AABB2DvsAABB2D = function ( _aabb1, _aabb2 ) {
    var tl1 = _aabb1.tl, tl2 = _aabb2.tl, br1 = _aabb1.br, br2 = _aabb2.br;
    var tl2xw = tl2.x + _aabb1.w;
    var tl1xw = tl1.x + _aabb2.w;
    var br2yh = tl2.y + _aabb1.h;
    var br1yh = tl1.y + _aabb2.h;
    if (
      tl1.x < tl2xw &&
      tl2.x < tl1xw &&
      tl1.y < br2yh &&
      tl2.y < br1yh
    ) {
      var vecs = [
        new nk.Vector2D( tl1.x - tl2xw, 0 ),
        new nk.Vector2D( tl1xw - tl2.x, 0 ),
        new nk.Vector2D( 0, tl1.y - br2yh ),
        new nk.Vector2D( 0, br1yh - tl2.y )
      ];
      vecs.sort( Collision2D.VectorSortMinMag );
      return vecs[ 0 ];
    }
    return null;
  };
  /*
  * @parameter: _obj1: {}
  * @parameter: _obj2: {}
  *
  * {
  *   aabb,
  *   anchor,
  *   relative,
  * }
  *
  */
  Collision2D.Intersect.RelativeAABB2DvsAABB2D = function ( _obj1, _obj2 ) {
    var aabb1 = _obj1.aabb, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.aabb, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
    var tl1 = aabb1.tl.SubtractVC( _obj1.relative );
    var tl2 = aabb2.tl.SubtractVC( _obj2.relative );
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) tl1.x += anchor1.x * w1;
      if ( anchor1.y !== 0 ) tl1.y += anchor1.y * h1;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) tl2.x += anchor2.x * w2;
      if ( anchor2.y !== 0 ) tl2.y += anchor2.y * h2;
    }
    if (
      tl1.x < tl2.x + w1 &&
      tl2.x < tl1.x + w2 &&
      tl1.y < tl2.y + h1 &&
      tl2.y < tl1.y + h2
    ) {
      return true;
    }
    return false;
  };
  Collision2D.RelativeAABB2DvsAABB2D = function ( _obj1, _obj2 ) {
    var aabb1 = _obj1.aabb, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.aabb, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
    var tl1 = aabb1.tl.SubtractVC( _obj1.relative );
    var tl2 = aabb2.tl.SubtractVC( _obj2.relative );
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) tl1.x += anchor1.x * w1;
      if ( anchor1.y !== 0 ) tl1.y += anchor1.y * h1;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) tl2.x += anchor2.x * w2;
      if ( anchor2.y !== 0 ) tl2.y += anchor2.y * h2;
    }
    var tl2xw = tl2.x + w1;
    var tl1xw = tl1.x + w2;
    var br2yh = tl2.y + h1;
    var br1yh = tl1.y + h2;
    if (
      tl1.x < tl2xw &&
      tl2.x < tl1xw &&
      tl1.y < br2yh &&
      tl2.y < br1yh
    ) {
      var vecs = [
        new nk.Vector2D( tl1.x - tl2xw, 0 ),
        new nk.Vector2D( tl1xw - tl2.x, 0 ),
        new nk.Vector2D( 0, tl1.y - br2yh ),
        new nk.Vector2D( 0, br1yh - tl2.y )
      ];
      vecs.sort( Collision2D.VectorSortMinMag );
      return vecs[ 0 ];
    }
    return null;
  };

  nk.Math.Collision2D = Collision2D;
};
