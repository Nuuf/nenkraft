module.exports = function ( nk ) {
  'use strict';
  function Displayentity2D ( _x, _y ) {
    if ( !( this instanceof Displayentity2D ) ) return new Displayentity2D( _x, _y );
    this.transform = new nk.Math.Transform2D( _x, _y );
    this.data = Object.create( null );
  }
  Displayentity2D.prototype = Object.create( null );
  Displayentity2D.prototype.constructor = Displayentity2D;
  //Static
  Displayentity2D.NULL_TRANSFORM = new nk.Math.Transform2D();
  //Members
  Displayentity2D.prototype.parent = null;
  Displayentity2D.prototype.w = 0;
  Displayentity2D.prototype.h = 0;
  Displayentity2D.prototype.bounds = null;
  Displayentity2D.prototype.boundsDirty = true;
  //Methods
  Displayentity2D.prototype.UpdateTransform = function () {
    if ( this.parent ) {
      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    } else {
      this.transform.UpdateWorld( Displayentity2D.NULL_TRANSFORM.worldTransform );
    }
  };
  Displayentity2D.prototype.GetWorldPosition = function () {
    var wt = this.transform.worldTransform;
    return new nk.Vector2D( wt.e, wt.f );
  };
  Displayentity2D.prototype.ComputeBounds = function ( _anchor ) {
    var ax = ( _anchor && _anchor.x ) ? _anchor.x : 0;
    var ay = ( _anchor && _anchor.y ) ? _anchor.y : 0;
    this.bounds = new nk.Geom.AABB2D(
      this.x - this.width * ay,
      this.y - this.height * ay,
      this.x + this.width,
      this.y + this.height
    );
    this.boundsDirty = false;
    return this.bounds;
  };
  nk.Entity.Displayentity2D = Displayentity2D;
  Object.defineProperty( Displayentity2D.prototype, 'rotation', {
    get: function () {
      return this.transform.rotation;
    },
    set: function ( _value ) {
      this.transform.rotation = _value;
      this.transform.UpdateSkew();
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'scale', {
    get: function () {
      return this.transform.scale;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'position', {
    get: function () {
      return this.transform.position;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'pivot', {
    get: function () {
      return this.transform.pivot;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'x', {
    get: function () {
      return this.transform.position.x;
    },
    set: function ( _value ) {
      this.transform.position.x = _value;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'y', {
    get: function () {
      return this.transform.position.y;
    },
    set: function ( _value ) {
      this.transform.position.y = _value;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'width', {
    get: function () {
      return this.w * this.scale.x;
    },
    set: function ( _value ) {
      this.w = _value;
    }
  } );
  Object.defineProperty( Displayentity2D.prototype, 'height', {
    get: function () {
      return this.h * this.scale.y;
    },
    set: function ( _value ) {
      this.h = _value;
    }
  } );
};