module.exports = function ( Nenkraft ) {
  'use strict';
  var Collision2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D.Relative = Object.create( null );
  Collision2D.CirclevsCircle = Object.create( null );
  Collision2D.CirclevsCircle.Relative = Object.create( null );
  Collision2D.PolygonvsPolygon = Object.create( null );
  Collision2D.PolygonvsPolygon.Relative = Object.create( null );
  Collision2D.CirclevsLine = Object.create( null );
  Collision2D.CirclevsLine.Relative = Object.create( null );
  Collision2D.VectorSortMinMag = function ( _a, _b ) {
    return _a.GetMagnitudeSquared() - _b.GetMagnitudeSquared();
  };
  var V2DMMD = Nenkraft.Vector2D.GetMinMaxDot;
  var CPOL = Nenkraft.Math.ClosestPointOnLine;
  Collision2D.AABB2DvsAABB2D.Result = function () {
    this.mtv = new Nenkraft.Vector2D();
  };
  Collision2D.AABB2DvsAABB2D.Result.prototype.occured = false;
  Collision2D.AABB2DvsAABB2D.Result.prototype.Reset = function () {
    this.mtv.Set( 0, 0 );
    this.occured = false;
  };
  Collision2D.AABB2DvsAABB2D.Relative.Collide = function ( _obj1, _obj2, _result ) {
    var aabb1 = _obj1.shape, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.shape, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
    var tl1 = aabb1.tl.SubtractVC( _obj1.relative );
    var tl2 = aabb2.tl.SubtractVC( _obj2.relative );
    if ( anchor1 != undefined ) {
      tl1.x += anchor1.x * w1;
      tl1.y += anchor1.y * h1;
    }
    if ( anchor2 != undefined ) {
      tl2.x += anchor2.x * w2;
      tl2.y += anchor2.y * h2;
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
      if ( _result != undefined ) {
        var tvs = [
          new Nenkraft.Vector2D( tl1.x - tl2xw, 0 ),
          new Nenkraft.Vector2D( tl1xw - tl2.x, 0 ),
          new Nenkraft.Vector2D( 0, tl1.y - br2yh ),
          new Nenkraft.Vector2D( 0, br1yh - tl2.y )
        ];
        tvs.sort( Collision2D.VectorSortMinMag );
        _result.mtv.SetV( tvs[ 0 ] );
        _result.occured = true;
      }
      return true;
    }
    return false;
  };
  Collision2D.CirclevsCircle.Result = function () {
    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.poc = {
      a: null,
      b: null,
      c: null
    };
  };
  Collision2D.CirclevsCircle.Result.prototype.mtd = 0;
  Collision2D.CirclevsCircle.Result.prototype.delta = null;
  Collision2D.CirclevsCircle.Result.prototype.occured = false;
  Collision2D.CirclevsCircle.Result.prototype.Reset = function () {
    this.poc.a = null;
    this.poc.b = null;
    this.poc.c = null;
    this.mtv.Set( 0, 0 );
    this.mtd = 0;
    this.delta = null;
    this.occured = false;
  };
  Collision2D.CirclevsCircle.Relative.Collide = function ( _obj1, _obj2, _result ) {
    var c1 = _obj1.shape, c2 = _obj2.shape;
    var r1 = c1.radius, r2 = c2.radius;
    var radii = r1 + r2;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var pos1 = _obj1.relative.Copy();
    var pos2 = _obj2.relative.Copy();
    if ( anchor1 != undefined ) {
      pos1.x += anchor1.x * c1.diameter;
      pos1.y += anchor1.y * c1.diameter;
    }
    if ( anchor2 != undefined ) {
      pos2.x += anchor2.x * c2.diameter;
      pos2.y += anchor2.y * c2.diameter;
    }
    var delta = pos2.SubtractVC( pos1 );
    var distanceSq = delta.GetMagnitudeSquared();
    if ( radii * radii > distanceSq ) {
      if ( _result != undefined ) {
        var distance = Math.sqrt( distanceSq );
        var dm = ( c1.radiusSquared - c2.radiusSquared + distanceSq ) / ( distance + distance );
        var poc1 = new Nenkraft.Vector2D(
          pos1.x + ( delta.x * dm / distance ),
          pos1.y + ( delta.y * dm / distance )
        );
        var de = Math.sqrt( ( c1.radiusSquared ) - ( dm * dm ) ) / distance;
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
        var mtd = distance - r1 - r2;
        _result.poc.a = poc1;
        _result.poc.b = poc2;
        _result.poc.c = poc3;
        _result.mtv.SetV( mtv );
        _result.mtd = mtd;
        _result.delta = delta;
        _result.occured = true;
      }
      return true;
    }
    return false;
  };
  Collision2D.CirclevsCircle.Relative.ElasticResponse = function ( _obj1, _obj2, _result ) {
    var n = _result.delta.Copy();
    var mtv = _result.mtv.Copy();
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
    mtv.Multiply( _result.mtd, _result.mtd );
    mtv.Divide( 2, 2 );
    _obj1.relative.SubtractV( mtv );
    _obj2.relative.AddV( mtv );
  };
  Collision2D.PolygonvsPolygon.Result = function () {
    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.olAxis = new Nenkraft.Vector2D( 0, 0 );
  };
  Collision2D.PolygonvsPolygon.Result.prototype.occured = false;
  Collision2D.PolygonvsPolygon.Result.prototype.mtd = Infinity;
  Collision2D.PolygonvsPolygon.Result.prototype.Reset = function () {
    this.occured = false;
    this.mtv.Set( 0, 0 );
    this.mtd = Infinity;
    this.olAxis.Set( 0, 0 );
  };
  var AS = Collision2D.PolygonvsPolygon.Relative.AxisSeparates = function ( _obj1, _obj2, _axis, _result ) {
    var d1 = V2DMMD( _obj1.shape.vertices, _axis );
    var d2 = V2DMMD( _obj2.shape.vertices, _axis );
    var offset = _obj2.relative.SubtractVC( _obj1.relative ).GetDotV( _axis );
    d2.Add( offset, offset );
    if ( d1.x > d2.y || d2.x > d1.y ) {
      return true;
    }
    if ( _result != undefined ) {
      var mtd = 0;
      var d1x = d1.x;
      var d1y = d1.y;
      var d2x = d2.x;
      var d2y = d2.y;
      var o1 = 0, o2 = 0;
      if ( d1x < d2x ) {
        if ( d1y < d2y ) {
          mtd = d1y - d2x;
        } else {
          o1 = d1y - d2x;
          o2 = d2y - d1x;
          if ( o1 < o2 ) {
            mtd = o1;
          } else {
            mtd = -o2;
          }
        }
      } else {
        if ( d1y > d2y ) {
          mtd = d1x - d2y;
        } else {
          o1 = d1y - d2x;
          o2 = d2y - d1x;
          if ( o1 < o2 ) {
            mtd = o1;
          } else {
            mtd = -o2;
          }
        }
      }
      var absMtd = Math.abs( mtd );
      if ( absMtd < _result.mtd ) {
        _result.mtd = absMtd;
        _result.olAxis.SetV( _axis );
        if ( mtd < 0 ) {
          _result.olAxis.Invert();
        }
      }
    }
    return false;
  };
  Collision2D.PolygonvsPolygon.Relative.Collide = function ( _obj1, _obj2, _result ) {
    var p1 = _obj1.shape;
    var p2 = _obj2.shape;
    var p1Normals = p1.normals;
    var p2Normals = p2.normals;
    var i = 0, p1l = p1Normals.length, p2l = p2Normals.length;
    for ( i; i < p1l; ++i ) {
      if ( AS( _obj1, _obj2, p1Normals[ i ], _result ) === true ) {
        return false;
      }
    }
    for ( i = 0; i < p2l; ++i ) {
      if ( AS( _obj1, _obj2, p2Normals[ i ], _result ) === true ) {
        return false;
      }
    }
    if ( _result != undefined ) {
      _result.mtv.SetV( _result.olAxis );
      _result.mtv.Multiply( _result.mtd, _result.mtd );
      _result.occured = true;
    }
    return true;
  };
  Collision2D.CirclevsLine.Result = function () {
    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.cp = new Nenkraft.Vector2D( 0, 0 );
  };
  Collision2D.CirclevsLine.Result.prototype.occured = false;
  Collision2D.CirclevsLine.Result.prototype.sore = 0;
  Collision2D.CirclevsLine.Result.prototype.Reset = function () {
    this.mtv.Set( 0, 0 );
    this.cp.Set( 0, 0 );
    this.occured = false;
    this.sore = 0;
  };
  Collision2D.CirclevsLine.Relative.Collide = function ( _c, _l, _result ) {
    var lshape = _l.shape;
    var cshape = _c.shape;
    var lpos = _l.relative;
    var cpos = _c.relative;
    var s = lshape.s.AddVC( lpos );
    var e = lshape.e.AddVC( lpos );
    var cp = CPOL( s, e, cpos );
    var delta = cpos.SubtractVC( cp );
    var distanceSq = delta.GetMagnitudeSquared();
    if ( distanceSq < cshape.radiusSquared ) {
      if ( _result ) {
        var mtv = delta;
        var distance = cshape.radius - Math.sqrt( distanceSq );
        mtv.Normalize();
        mtv.Multiply( distance, distance );
        _result.mtv.SetV( mtv );
        _result.cp.SetV( cp );
        _result.occured = true;
        if ( cp === s ) {
          _result.sore = 1;
        } else if ( cp === e ) {
          _result.sore = 2;
        }
      }
      return true;
    }
    return false;
  };
  Collision2D.CirclevsLine.Relative.ReflectingResponse = function ( _c, _l, _result ) {
    var lshape = _l.shape;
    var cvel = _c.velocity;
    var cpos = _c.relative;
    var n;
    var refl;
    var cp = _result.cp;
    if ( _result.sore !== 0 ) {
      n = cp.SubtractVC( cpos );
      n.Normalize();
    } else {
      n = lshape.GetNormalA();
    }
    refl = cvel.GetReflectionV( n );
    cvel.SetV( refl );
    cpos.AddV( _result.mtv );
  };

  Nenkraft.Math.Collision2D = Collision2D;
};
