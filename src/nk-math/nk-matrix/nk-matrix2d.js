module.exports = function ( nk ) {
  "use strict";
  function Matrix2D () {
    if ( !( this instanceof Matrix2D ) ) return new Matrix2D();
  }
  Matrix2D.prototype = Object.create( null );
  Matrix2D.prototype.constructor = Matrix2D;
  //Static
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
  };
  Matrix2D.prototype.Translate = function ( _x, _y ) {
    this.e += _x;
    this.f += _y;
  };
  Matrix2D.prototype.TranslateV = function ( _v ) {
    this.e += _v.x;
    this.f += _v.y;
  };
  Matrix2D.prototype.TranslateTo = function ( _x, _y ) {
    this.e = _x;
    this.f = _y;
  };
  Matrix2D.prototype.TranslateToV = function ( _v ) {
    this.e = _v.x;
    this.f = _v.y;
  };
  Matrix2D.prototype.Scale = function ( _x, _y ) {
    this.a *= _x;
    this.b *= _y;
    this.c *= _x;
    this.d *= _y;
    this.e *= _x;
    this.f *= _y;
  };
  Matrix2D.prototype.ScaleV = function ( _v ) {
    var x = _v.x, y = _v.y;
    this.a *= x;
    this.b *= y;
    this.c *= x;
    this.d *= y;
    this.e *= x;
    this.f *= y;
  };
  Matrix2D.prototype.Rotate = function ( _angle ) {
    var cos = Math.cos( _angle ), sin = Math.sin( _angle ), a = this.a, c = this.c, e = this.e;
    this.a = ( a * cos ) - ( this.b * sin );
    this.b = ( a * sin ) + ( this.b * cos );
    this.c = ( c * cos ) - ( this.d * sin );
    this.d = ( c * sin ) + ( this.d * cos );
    this.e = ( e * cos ) - ( this.f * sin );
    this.f = ( e * sin ) + ( this.f * cos );
  };
  Matrix2D.prototype.Identity = function () {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
  };
  Matrix2D.prototype.Append = function ( _matrix ) {
    var a = this.a, b = this.b, c = this.c, d = this.d;
    this.a = ( _matrix.a * a ) + ( _matrix.b * c );
    this.b = ( _matrix.a * b ) + ( _matrix.b * d );
    this.c = ( _matrix.c * a ) + ( _matrix.d * c );
    this.d = ( _matrix.c * b ) + ( _matrix.d * d );
    this.e = this.e + ( _matrix.e * a ) + ( _matrix.f * c );
    this.f = this.f + ( _matrix.e * b ) + ( _matrix.f * d );
  };
  Matrix2D.prototype.Prepend = function ( _matrix ) {
    var e = this.e;
    if ( _matrix.a !== 1 || _matrix.b || _matrix.c || _matrix.d !== 1 ) {
      var a = this.a, c = this.c;
      this.a = ( a * _matrix.a ) + ( this.b * _matrix.c );
      this.b = ( a * _matrix.b ) + ( this.b * _matrix.d );
      this.c = ( c * _matrix.a ) + ( this.d * _matrix.c );
      this.d = ( c * _matrix.b ) + ( this.d * _matrix.d );
    }
    this.e = _matrix.e + ( e * _matrix.a ) + ( this.f * _matrix.c );
    this.f = _matrix.f + ( e * _matrix.b ) + ( this.f * _matrix.d );
  };
  Matrix2D.prototype.ApplyToContext = function ( _rc ) {
    _rc.setTransform( this.a, this.b, this.c, this.d, this.e, this.f );
  };
  nk.Math.Matrix2D = Matrix2D;
  nk.Matrix2D = Matrix2D;
};