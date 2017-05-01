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
  Collision2D.Intersect.CirclevsCircle = function ( _circle1, _circle2 ) {
    var radii = _circle1.radius + _circle2.radius;
    return ( radii * radii >= _circle1.center.GetDistanceSquaredV( _circle2.center ) );
  };
  Collision2D.CirclevsCircle = function ( _circle1, _circle2 ) {
    var radii = _circle1.radius + _circle2.radius;
    if ( radii * radii >= _circle1.center.GetDistanceSquaredV( _circle2.center ) ) {
      return _circle1.center.SubtractVC( _circle2.center );
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
      var tvs = [
        new nk.Vector2D( tl1.x - tl2xw, 0 ),
        new nk.Vector2D( tl1xw - tl2.x, 0 ),
        new nk.Vector2D( 0, tl1.y - br2yh ),
        new nk.Vector2D( 0, br1yh - tl2.y )
      ];
      tvs.sort( Collision2D.VectorSortMinMag );
      return tvs[ 0 ];
    }
    return null;
  };
  Collision2D.Intersect.RelativeCirclevsCircle = function ( _obj1, _obj2 ) {
    var c1 = _obj1.circle, c2 = _obj2.circle;
    var radii = c1.radius + c2.radius;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var rel1 = _obj1.relative.Copy();
    var rel2 = _obj2.relative.Copy();
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) rel1.x -= anchor1.x * c1.diameter;
      if ( anchor1.y !== 0 ) rel1.y -= anchor1.y * c1.diameter;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) rel2.x -= anchor2.x * c2.diameter;
      if ( anchor2.y !== 0 ) rel2.y -= anchor2.y * c2.diameter;
    }
    return ( radii * radii >= rel1.GetDistanceSquaredV( rel2 ) );
  };
  Collision2D.RelativeCirclevsCircle = function ( _obj1, _obj2 ) {
    var c1 = _obj1.circle, c2 = _obj2.circle;
    var radii = c1.radius + c2.radius;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var rel1 = _obj1.relative.Copy();
    var rel2 = _obj2.relative.Copy();
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) rel1.x += anchor1.x * c1.diameter;
      if ( anchor1.y !== 0 ) rel1.y += anchor1.y * c1.diameter;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) rel2.x += anchor2.x * c2.diameter;
      if ( anchor2.y !== 0 ) rel2.y += anchor2.y * c2.diameter;
    }
    var distanceSq = rel2.GetDistanceSquaredV( rel1 );
    if ( radii * radii > distanceSq ) {
      var poc = new nk.Vector2D(( ( rel1.x * c1.radius ) + ( rel2.x * c2.radius ) ) / radii, ( ( rel1.y * c1.radius ) + ( rel2.y * c2.radius ) ) / radii );
      var mtv = rel1.SubtractVC( rel2 );
      mtv.Divide( radii, radii );
      return { poc: poc, mtv: mtv };
    }
    return null;
  };

  nk.Math.Collision2D = Collision2D;
};
