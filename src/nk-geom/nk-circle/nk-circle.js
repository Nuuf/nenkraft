module.exports = function ( nk ) {
  "use strict";
  function Circle( _x, _y, _radius ) {
    if ( this instanceof Circle ) {
      this.position = new nk.Vector2D( _x, _y );
      this.radius = _radius === undefined ? 32 : _radius;
    }
    else return new Circle();
  }
  Circle.prototype = Object.create( null );
  Circle.prototype.constructor = Circle;
  nk.Geom.Circle = Circle;
  Object.defineProperty( Circle.prototype, 'x', {
    set: function ( _value ) {
      this.position.x = _value;
    },
    get: function ( _value ) {
      return this.position.x;
    }
  } );
  Object.defineProperty( Circle.prototype, 'y', {
    set: function ( _value ) {
      this.position.y = _value;
    },
    get: function ( _value ) {
      return this.position.y;
    }
  } );
};