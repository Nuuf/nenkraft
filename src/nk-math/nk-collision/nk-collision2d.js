module.exports = function ( Nenkraft ) {
  'use strict';
  var Collision2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D.Relative = Object.create( null );
  Collision2D.CirclevsCircle = Object.create( null );
  Collision2D.CirclevsCircle.Relative = Object.create( null );
  Collision2D.VectorSortMinMag = function ( _a, _b ) {
    return _a.GetMagnitude() - _b.GetMagnitude();
  };
  Collision2D.AABB2DvsAABB2D.Collide = function ( _aabb1, _aabb2 ) {
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
        new Nenkraft.Vector2D( tl1.x - tl2xw, 0 ),
        new Nenkraft.Vector2D( tl1xw - tl2.x, 0 ),
        new Nenkraft.Vector2D( 0, tl1.y - br2yh ),
        new Nenkraft.Vector2D( 0, br1yh - tl2.y )
      ];
      vecs.sort( Collision2D.VectorSortMinMag );
      return vecs[ 0 ];
    }
    return null;
  };
  Collision2D.CirclevsCircle.Collide = function ( _circle1, _circle2 ) {
    var r1 = _circle1.radius, r2 = _circle1.radius;
    var radii = r1 + r2;
    var pos1 = _circle1.center.Copy();
    var pos2 = _circle2.center.Copy();
    var delta = pos2.SubtractVC( pos1 );
    var distanceSq = Math.abs( delta.GetMagnitudeSquared() );
    if ( radii * radii > distanceSq ) {
      var distance = Math.sqrt( distanceSq );
      var dm = ( _circle1.radiusSquared - _circle2.radiusSquared + distanceSq ) / ( distance + distance );
      var poc1 = new Nenkraft.Vector2D(
        pos1.x + ( delta.x * dm / distance ),
        pos1.y + ( delta.y * dm / distance )
      );
      var de = Math.sqrt(( _circle2.radiusSquared ) - ( dm * dm ) ) / distance;
      var rx = -delta.y * de;
      var ry = delta.x * de;
      var poc2 = new Nenkraft.Vector2D(
        poc1.x + rx,
        poc1.y + ry
      );
      var poc3 = new Nenkraft.Vector2D(
        poc1.x - rx,
        poc1.y - ry
      );
      var mtv = pos1.SubtractVC( pos2 );
      mtv.Divide( radii, radii );
      return { poc: [ poc1, poc2, poc3 ], mtv: mtv, delta: delta };
    }
    return null;
  };
  Collision2D.AABB2DvsAABB2D.Relative.Intersect = function ( _obj1, _obj2 ) {
    var aabb1 = _obj1.shape, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.shape, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
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
    return (
      tl1.x < tl2.x + w1 &&
      tl2.x < tl1.x + w2 &&
      tl1.y < tl2.y + h1 &&
      tl2.y < tl1.y + h2
    );
  };
  Collision2D.AABB2DvsAABB2D.Relative.Collide = function ( _obj1, _obj2 ) {
    var aabb1 = _obj1.shape, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.shape, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
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
        new Nenkraft.Vector2D( tl1.x - tl2xw, 0 ),
        new Nenkraft.Vector2D( tl1xw - tl2.x, 0 ),
        new Nenkraft.Vector2D( 0, tl1.y - br2yh ),
        new Nenkraft.Vector2D( 0, br1yh - tl2.y )
      ];
      tvs.sort( Collision2D.VectorSortMinMag );
      return tvs[ 0 ];
    }
    return null;
  };
  Collision2D.CirclevsCircle.Relative.Intersect = function ( _obj1, _obj2 ) {
    var c1 = _obj1.shape, c2 = _obj2.shape;
    var radii = c1.radius + c2.radius;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var pos1 = _obj1.relative.Copy();
    var pos2 = _obj2.relative.Copy();
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) pos1.x -= anchor1.x * c1.diameter;
      if ( anchor1.y !== 0 ) pos1.y -= anchor1.y * c1.diameter;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) pos2.x -= anchor2.x * c2.diameter;
      if ( anchor2.y !== 0 ) pos2.y -= anchor2.y * c2.diameter;
    }
    return ( radii * radii >= pos1.GetDistanceSquaredV( pos2 ) );
  };
  Collision2D.CirclevsCircle.Relative.Collide = function ( _obj1, _obj2 ) {
    var c1 = _obj1.shape, c2 = _obj2.shape;
    var r1 = c1.radius, r2 = c2.radius;
    var radii = r1 + r2;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var pos1 = _obj1.relative.Copy();
    var pos2 = _obj2.relative.Copy();
    if ( anchor1 !== undefined ) {
      if ( anchor1.x !== 0 ) pos1.x += anchor1.x * c1.diameter;
      if ( anchor1.y !== 0 ) pos1.y += anchor1.y * c1.diameter;
    }
    if ( anchor2 !== undefined ) {
      if ( anchor2.x !== 0 ) pos2.x += anchor2.x * c2.diameter;
      if ( anchor2.y !== 0 ) pos2.y += anchor2.y * c2.diameter;
    }
    var delta = pos2.SubtractVC( pos1 );
    var distanceSq = Math.abs( delta.GetMagnitudeSquared() );
    if ( radii * radii > distanceSq ) {
      var distance = Math.sqrt( distanceSq );
      var dm = ( c1.radiusSquared - c2.radiusSquared + distanceSq ) / ( distance + distance );
      var poc1 = new Nenkraft.Vector2D(
        pos1.x + ( delta.x * dm / distance ),
        pos1.y + ( delta.y * dm / distance )
      );
      var de = Math.sqrt(( c1.radiusSquared ) - ( dm * dm ) ) / distance;
      var rx = -delta.y * de;
      var ry = delta.x * de;
      var poc2 = new Nenkraft.Vector2D(
        poc1.x + rx,
        poc1.y + ry
      );
      var poc3 = new Nenkraft.Vector2D(
        poc1.x - rx,
        poc1.y - ry
      );
      var mtv = pos1.SubtractVC( pos2 );
      mtv.Divide( radii, radii );
      return { poc: [ poc1, poc2, poc3 ], mtv: mtv, delta: delta };
    }
    return null;
  };
  Collision2D.CirclevsCircle.Relative.ElasticResponse = function ( _obj1, _obj2, _result ) {
    var n = _result.delta.Copy();
    n.Normalize();
    var m1 = _obj1.mass;
    var m2 = _obj2.mass;
    var v1 = _obj1.velocity;
    var v2 = _obj2.velocity;
    var a1 = v1.GetDotV( n );
    var a2 = v2.GetDotV( n );
    var op = 2 * ( a1 - a2 ) / ( m1 + m2 );
    v1.Set(
      v1.x - op * m2 * n.x,
      v1.y - op * m2 * n.y
    );
    v2.Set(
      v2.x + op * m1 * n.x,
      v2.y + op * m1 * n.y
    );
    _obj1.relative.AddV( v1 );
    _obj2.relative.AddV( v2 );
  };

  Nenkraft.Math.Collision2D = Collision2D;
};
