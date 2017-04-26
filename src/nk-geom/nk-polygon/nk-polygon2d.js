module.exports = function ( nk ) {
  "use strict";
  function Polygon2D() {
    if ( this instanceof Polygon2D ) {
      this.vertices = [];
      this.aabb = null;
      this.dirtyBounds = true;
    }
    else return new Polygon2D();
  }
  Polygon2D.prototype = Object.create( null );
  Polygon2D.prototype.constructor = Polygon2D;
  Polygon2D.prototype.AddPoint = function ( _p ) {
    this.vertices.push( _p );
  };
  Polygon2D.prototype.AddPoints = function ( _ps ) {
    this.vertices = this.vertices.concat( _ps );
  };
  Polygon2D.prototype.Recreate = function ( _ps ) {
    this.vertices = _ps;
  };
  Polygon2D.prototype.ComputeBounds = function () {
    if ( this.aabb === null ) this.aabb = new nk.Geom.AABB2D();
    var mix = Infinity, max = -Infinity, miy = Infinity, may = -Infinity;
    for ( var i = 0, ps = this.vertices, l = ps.length, p; i < l; ++i ) {
      p = ps[ i ];
      if ( p.x < mix ) mix = p.x;
      if ( p.x > max ) max = p.x;
      if ( p.y < miy ) miy = p.y;
      if ( p.y > may ) may = p.y;
    }
    this.aabb.Set( mix, miy, max, may );
    this.dirtyBounds = false;
  };
  Polygon2D.prototype.Rotate = function ( _a, _anX, _anY, _uAABB ) {
    if ( this.dirtyBounds === true && _uAABB === true ) this.ComputeBounds();
    else if ( this.aabb === null ) this.ComputeBounds();
    var aabb = this.aabb;
    var ap = aabb.tl.Copy();
    ap.AddV( aabb.br );
    ap.Multiply( _anX, _anY === undefined ? _anX : _anY );
    var i = 0, ps = this.vertices, l = ps.length, p;
    _a = _a;
    for ( i; i < l; ++i ) {
      p = ps[ i ];
      p.RotateAroundV( ap, _a );
    }
    this.dirtyBounds = true;
  };
  Polygon2D.prototype.ContainsPoint = function ( _v ) {
    if ( this.dirtyBounds === true ) this.ComputeBounds();
    if ( this.aabb.IntersectsPoint( _v ) === false ) return false;
    return true;
  };
  Polygon2D.Construct = {};
  Polygon2D.Construct.Rectangular = function ( _po, _x, _y, _w, _h ) {
    var tl = new nk.Vector2D( _x, _y );
    var tr = new nk.Vector2D( _x + _w, _y );
    var br = new nk.Vector2D( _x + _w, _y + _h );
    var bl = new nk.Vector2D( _x, _y + _h );
    _po.Recreate( [ tl, tr, br, bl ] );
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Triangular = function ( _po, _x, _y, _w, _h ) {
    var tm = new nk.Vector2D( _x, _y );
    var br = new nk.Vector2D( _x + _w * 0.5, _y + _h );
    var bl = new nk.Vector2D( _x - _w * 0.5, _y + _h );
    _po.Recreate( [ tm, br, bl ] );
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Circlic = function ( _po, _x, _y, _ra, _acc ) {
    _po.Recreate( [] );
    var i = 0, l = _acc, x, y, th, an = Math.PI * 2 / l;
    for ( i; i < l; ++i ) {
      th = an * i;
      x = Math.cos( th ) * _ra;
      y = Math.sin( th ) * _ra;
      _po.AddPoint( new nk.Vector2D( _x + x, _y + y ) );
    }
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Star = function ( _po, _x, _y, _ora, _ira, _cors ) {
    _po.Recreate( [] );
    var i = 0, l = _cors * 2, x, y, th, an = Math.PI * 2 / l, ra;
    for ( i; i < l; ++i ) {
      ra = ( i & 1 ) === 0 ? _ora : _ira;
      th = an * i;
      x = Math.cos( th ) * ra;
      y = Math.sin( th ) * ra;
      _po.AddPoint( new nk.Vector2D( _x + x, _y + y ) );
    }
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Butterfly = function ( _po, _x, _y, _n, _ra ) {
    _po.Recreate( [] );
    var i = 0, x, y, u, c = Polygon2D.Construct.Butterfly.C;
    for ( i; i < _n; ++i ) {
      u = i * c._1 * Math.PI / _n;
      x = Math.cos( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      y = Math.sin( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      _po.AddPoint( new nk.Vector2D( _x + x, _y + y ) );
    }
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Supershape = function ( _po, _x, _y, _ra, _acc, _m, _n1, _n2, _n3 ) {
    _n1 = _n1 === undefined ? 1 : _n1;
    _n2 = _n2 === undefined ? 1 : _n2;
    _n3 = _n3 === undefined ? 1 : _n3;
    _po.Recreate( [] );
    var i = 0, l = _acc, x, y, a, r, c = Polygon2D.Construct.Supershape.C, t1, t2;
    for ( i; i < l; ++i ) {
      a = i * Math.PI * 2 / _acc;

      t1 = Math.cos( _m * a / 4 ) / c._A;
      t1 = Math.abs( t1 );
      t1 = Math.pow( t1, _n2 );

      t2 = Math.sin( _m * a / 4 ) / c._B;
      t2 = Math.abs( t2 );
      t2 = Math.pow( t2, _n3 );

      r = Math.pow( t1 + t2, 1 / _n1 );

      if ( Math.abs( r ) === 0 ) {
        x = 0;
        y = 0;
      }
      else {
        r = 1 / r;
        x = Math.cos( a ) * r * _ra;
        y = Math.sin( a ) * r * _ra;
      }
      _po.AddPoint( new nk.Vector2D( _x + x, _y + y ) );
    }
    _po.ComputeBounds();
  };
  Polygon2D.Construct.Butterfly.C = {
    _1: 24,
    _2: 2,
    _3: 4,
    _4: 12,
    _5: 5,
    Reset: function () {
      this._1 = 24;
      this._2 = 2;
      this._3 = 4;
      this._4 = 12;
      this._5 = 5;
    }
  };
  Polygon2D.Construct.Supershape.C = {
    _A: 1,
    _B: 1
  };
  Polygon2D.prototype.TYPE = Polygon2D.TYPE = 3;
  nk.Geom.Polygon2D = Polygon2D;
};