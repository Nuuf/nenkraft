module.exports = function ( nk ) {
  "use strict";
  function Circle( _x, _y, _radius ) {
    if ( this instanceof Circle ) {
      this.position = new nk.Vector2D( _x, _y );
      this.w = 0;
      this.h = 0;
      this.radiusSquared = 0;
      this.radiusUnsquared = 0;
      this.radius = _radius === undefined ? 32 : _radius;
    }
    else return new Circle( _x, _y, _radius );
  }
  Circle.prototype = Object.create( null );
  Circle.prototype.constructor = Circle;
  Circle.prototype.IntersectsPoint = function ( _v, _anchor, _w, _h ) {
    if ( _anchor !== undefined ) {
      if ( _anchor.x !== 0 ) _v.x += _anchor.x * _w;
      if ( _anchor.y !== 0 ) _v.y += _anchor.y * _h;
    }
    var distance = this.position.GetDistanceSquaredV( _v );
    if ( ( this.radiusSquared ) > distance ) {
      return true;
    }
    return false;
  };
  Circle.prototype.TYPE = Circle.TYPE = 2;
  nk.Geom.Circle = Circle;
  Object.defineProperty( Circle.prototype, 'x', {
    set: function ( _value ) {
      this.position.x = _value;
    },
    get: function () {
      return this.position.x;
    }
  } );
  Object.defineProperty( Circle.prototype, 'y', {
    set: function ( _value ) {
      this.position.y = _value;
    },
    get: function () {
      return this.position.y;
    }
  } );
  Object.defineProperty( Circle.prototype, 'radius', {
    set: function ( _value ) {
      this.radiusUnsquared = _value;
      this.radiusSquared = _value * _value;
      this.w = this.h = _value * 2;
    },
    get: function () {
      return this.radiusUnsquared;
    }
  } );
};