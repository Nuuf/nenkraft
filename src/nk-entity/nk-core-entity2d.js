module.exports = function ( Nenkraft ) {
  'use strict';
  function CoreEntity2D ( _x, _y ) {
    if ( !( this instanceof CoreEntity2D ) ) return new CoreEntity2D( _x, _y );
    this.transform = new Nenkraft.Math.Transform2D( _x, _y );
    this.data = Object.create( null );
  }
  CoreEntity2D.prototype = Object.create( null );
  CoreEntity2D.prototype.constructor = CoreEntity2D;
  //Static
  CoreEntity2D.NULL_TRANSFORM = new Nenkraft.Math.Transform2D();
  //Members
  CoreEntity2D.prototype.parent = null;
  CoreEntity2D.prototype.w = 0;
  CoreEntity2D.prototype.h = 0;
  CoreEntity2D.prototype.bounds = null;
  CoreEntity2D.prototype.boundsDirty = true;
  //Methods
  CoreEntity2D.prototype.UpdateTransform = function () {
    if ( this.parent ) {
      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    } else {
      this.transform.UpdateWorld( CoreEntity2D.NULL_TRANSFORM.worldTransform );
    }
  };
  CoreEntity2D.prototype.GetWorldPosition = function () {
    var wt = this.transform.worldTransform;
    return new Nenkraft.Vector2D( wt.e, wt.f );
  };
  CoreEntity2D.prototype.ComputeBounds = function ( _anchor ) {
    var ax = ( _anchor && _anchor.x ) ? _anchor.x : 0;
    var ay = ( _anchor && _anchor.y ) ? _anchor.y : 0;
    if ( this.bounds === null ) {
      this.bounds = new Nenkraft.Geom.AABB2D(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
      this.bounds.belongsTo = this;
    } else {
      this.bounds.Set(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
    }
    this.boundsDirty = false;
    return this.bounds;
  };
  Object.defineProperty( CoreEntity2D.prototype, 'rotation', {
    get: function () {
      return this.transform.rotation;
    },
    set: function ( _value ) {
      this.transform.rotation = _value;
      this.transform.UpdateSkew();
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'scale', {
    get: function () {
      return this.transform.scale;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'position', {
    get: function () {
      return this.transform.position;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'pivot', {
    get: function () {
      return this.transform.pivot;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'x', {
    get: function () {
      return this.transform.position.x;
    },
    set: function ( _value ) {
      this.transform.position.x = _value;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'y', {
    get: function () {
      return this.transform.position.y;
    },
    set: function ( _value ) {
      this.transform.position.y = _value;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'width', {
    get: function () {
      return this.w * this.scale.x;
    },
    set: function ( _value ) {
      this.w = _value;
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'height', {
    get: function () {
      return this.h * this.scale.y;
    },
    set: function ( _value ) {
      this.h = _value;
    }
  } );
  Nenkraft.Entity.CoreEntity2D = CoreEntity2D;
};
