module.exports = function ( Nenkraft ) {
  'use strict';
  function AABB2D ( _arg0, _arg1, _arg2, _arg3 ) {
    if ( !( this instanceof AABB2D ) ) return new AABB2D( _arg0, _arg1, _arg2, _arg3 );
    if ( _arg0 instanceof Nenkraft.Vector2D && _arg1 instanceof Nenkraft.Vector2D ) {
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
      this.tl = new Nenkraft.Vector2D( _arg0.x, _arg0.y );
      this.br = new Nenkraft.Vector2D( _arg1.x, _arg1.y );
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {
      this.tl = new Nenkraft.Vector2D( _arg0, _arg1 );
      this.br = new Nenkraft.Vector2D( _arg2, _arg3 );
    }
    else {
      this.tl = new Nenkraft.Vector2D();
      this.br = new Nenkraft.Vector2D();
    }
    this.ComputeWH();
  }
  AABB2D.prototype = Object.create( null );
  AABB2D.prototype.constructor = AABB2D;
  //Static
  AABB2D.TYPE = 1;
  //Members
  AABB2D.prototype.TYPE = AABB2D.TYPE;
  AABB2D.prototype.w = 0;
  AABB2D.prototype.h = 0;
  AABB2D.prototype.area = 0;
  //Methods
  AABB2D.prototype.Set = function ( _x, _y, _w, _h ) {
    this.tl.x = _x;
    this.tl.y = _y;
    this.br.x = _w;
    this.br.y = _h;
    this.ComputeWH();
  };
  AABB2D.prototype.SetC = function ( _aabb ) {
    this.Set( _aabb.tl.x, _aabb.tl.y, _aabb.br.x, _aabb.br.y );
  };
  AABB2D.prototype.ComputeWH = function () {
    this.w = this.br.x - this.tl.x;
    this.h = this.br.y - this.tl.y;
    this.area = this.w * this.h;
  };
  AABB2D.prototype.IntersectsPoint = function ( _v ) {
    return !( _v.x < this.tl.x || _v.x > this.br.x || _v.y < this.tl.y || _v.y > this.br.y );
  };
  AABB2D.prototype.ContainsPoint = function ( _v ) {
    return ( _v.x > this.tl.x && _v.x < this.br.x && _v.y > this.tl.y && _v.y < this.br.y );
  };
  AABB2D.prototype.IntersectsAABB2D = function ( _aabb ) {
    var tl1 = this.tl, br1 = this.br, tl2 = _aabb.tl, br2 = _aabb.br;
    return !( tl2.x >= br1.x || tl2.y >= br1.y || br2.x <= tl1.x || br2.y <= tl1.y );
  };
  AABB2D.prototype.ContainsAABB2D = function ( _aabb ) {
    if ( _aabb.area > this.area ) {
      return false;
    }
    var tl1 = this.tl, br1 = this.br, tl2 = _aabb.tl, br2 = _aabb.br;
    return ( tl2.x >= tl1.x && tl2.y >= tl1.y && br2.x <= br1.x && br2.y <= br1.y );
  };

  Nenkraft.Geom.AABB2D = AABB2D;
};