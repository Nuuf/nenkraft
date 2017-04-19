module.exports = function ( nk ) {
  "use strict";
  function AABB2D( _arg0, _arg1, _arg2, _arg3 ) {
    if ( this instanceof AABB2D ) {
      if ( _arg0 instanceof nk.Vector2D && _arg1 instanceof nk.Vector2D ) {
        this.tl = _arg0;
        this.br = _arg1;
      }
      else if (
        _arg0 !== undefined &&
        _arg1 !== undefined &&
        _arg0.x !== undefined &&
        _arg0.y !== undefined &&
        _arg1.x !== undefined &&
        _arg1.y !== undefined
      ) {
        this.tl = new nk.Vector2D( _arg0.x, _arg0.y );
        this.br = new nk.Vector2D( _arg1.x, _arg1.y );
      }
      else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {
        this.tl = new nk.Vector2D( _arg0, _arg1 );
        this.br = new nk.Vector2D( _arg2, _arg3 );
      }
      else {
        this.tl = new nk.Vector2D();
        this.br = new nk.Vector2D();
      }
      this.w = 0;
      this.h = 0;
      this.CalculateWH();
    }
    else return new AABB2D( _arg0, _arg1, _arg2, _arg3 );
  }
  AABB2D.prototype = Object.create( null );
  AABB2D.prototype.constructor = AABB2D;
  AABB2D.prototype.Set = function ( _x, _y, _w, _h ) {
    this.tl.x = _x;
    this.tl.y = _y;
    this.br.x = _w;
    this.br.y = _h;
    this.CalculateWH();
  };
  AABB2D.prototype.CalculateWH = function () {
    this.w = this.br.x - this.tl.x;
    this.h = this.br.y - this.tl.y;
  };
  AABB2D.prototype.IntersectsPoint = function ( _v, _anchor, _w, _h ) {
    if ( _anchor.x !== 0 ) _v.x += _anchor.x * _w;
    if ( _anchor.y !== 0 ) _v.y += _anchor.y * _h;
    if ( _v.x < this.tl.x ) return false;
    if ( _v.x > this.br.x ) return false;
    if ( _v.y < this.tl.y ) return false;
    if ( _v.y > this.br.y ) return false;
    return true;
  };
  AABB2D.prototype.ContainsPoint = function ( _v ) {
    if ( _v.x > this.tl.x && _v.x < this.br.x && _v.y > this.tl.y && _v.y < this.br.y ) return true;
    return false;
  };
  nk.Geom.AABB2D = AABB2D;
};