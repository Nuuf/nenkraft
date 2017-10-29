/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Matrix2D () {
    if ( !( this instanceof Matrix2D ) ) return new Matrix2D();
  }
  Matrix2D.prototype = Object.create( null );
  Matrix2D.prototype.constructor = Matrix2D;
  //Static
  Matrix2D.EPSILON = 0.00001;
  //Members
  Matrix2D.prototype.a = 1;
  Matrix2D.prototype.b = 0;
  Matrix2D.prototype.c = 0;
  Matrix2D.prototype.d = 1;
  Matrix2D.prototype.e = 0;
  Matrix2D.prototype.f = 0;
  //Methods
  Matrix2D.prototype.Copy = function () {
    var matrix = new Matrix2D();
    matrix.Set( this.a, this.b, this.c, this.d, this.e, this.f );
    return matrix;
  };
  Matrix2D.prototype.Set = function ( _a, _b, _c, _d, _e, _f ) {
    this.a = _a;
    this.b = _b;
    this.c = _c;
    this.d = _d;
    this.e = _e;
    this.f = _f;
    return this;
  };
  Matrix2D.prototype.SetTransform = function ( _x, _y, _sx, _sy, _r, _skx, _sky, _px, _py ) {
    var sr = Math.sin( _r );
    var cr = Math.cos( _r );
    var sskx = -Math.sin( _skx );
    var cskx = Math.cos( _skx );
    var ssky = Math.sin( _sky );
    var csky = Math.cos( _sky );
    var a = cr * _sx;
    var b = sr * _sx;
    var c = -sr * _sy;
    var d = cr * _sy;
    this.a = csky * a + ssky * c;
    this.b = csky * b + ssky * d;
    this.c = sskx * a + cskx * c;
    this.d = sskx * b + cskx * d;
    this.e = _x + _px * a + _py * c;
    this.f = _y + _px * b + _py * d;
    return this;
  };
  Matrix2D.prototype.Translate = function ( _x, _y ) {
    this.e += _x;
    this.f += _y;
  };
  Matrix2D.prototype.Scale = function ( _x, _y ) {
    this.a *= _x;
    this.b *= _y;
    this.c *= _x;
    this.d *= _y;
    this.e *= _x;
    this.f *= _y;
  };
  Matrix2D.prototype.Rotate = function ( _angle ) {
    var sa = Math.sin( _angle );
    var ca = Math.cos( _angle );
    var a = this.a;
    var c = this.c;
    var e = this.e;
    this.a = a * ca - this.b * sa;
    this.b = a * sa + this.b * ca;
    this.c = c * ca - this.d * sa;
    this.d = c * sa + this.d * ca;
    this.e = e * ca - this.f * sa;
    this.f = e * sa + this.f * ca;
  };
  Matrix2D.prototype.Decompose = function ( _transform ) {
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var skx = -Math.atan2( -c, d );
    var sky = Math.atan2( b, a );
    var delta = Math.abs( skx + sky );
    if ( delta < Matrix2D.EPSILON ) {
      _transform.rotation = sky;
      if ( a < 0 && d >= 0 ) {
        _transform.rotation += Math.PI;
      }
      _transform.skew.Set( 0 );
    } else {
      _transform.skew.Set( skx, sky );
    }
    _transform.scale.Set( Math.sqrt( a * a + b * b ), Math.sqrt( c * c + d * d ) );
    _transform.position.Set( this.e, this.f );
  };
  Matrix2D.prototype.Identity = function () {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
  };
  Matrix2D.prototype.ApplyToContext = function ( _rc ) {
    _rc.setTransform( this.a, this.b, this.c, this.d, this.e, this.f );
  };
  Nenkraft.Math.Matrix2D = Matrix2D;
  Nenkraft.Matrix2D = Matrix2D;
};
