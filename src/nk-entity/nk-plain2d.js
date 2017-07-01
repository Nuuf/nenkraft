module.exports = function ( nk ) {
  'use strict';
  function Plain2D ( _x, _y ) {
    if ( !( this instanceof Plain2D ) ) return new Plain2D( _x, _y );
    this.transform = new nk.Math.Basetransform2D( _x, _y );
    this.data = Object.create( null );
  }
  Plain2D.prototype = Object.create( null );
  Plain2D.prototype.constructor = Plain2D;
  //Static
  Plain2D.NULL_TRANSFORM = new nk.Math.Basetransform2D();
  //Members
  Plain2D.prototype.parent = null;
  Plain2D.prototype.w = 0;
  Plain2D.prototype.h = 0;
  Plain2D.prototype.bounds = null;
  Plain2D.prototype.boundsDirty = true;
  Plain2D.prototype.render = true;
  Plain2D.prototype.display = true;
  Plain2D.prototype.transformShouldUpdate = true;
  Plain2D.prototype.transformAutomaticUpdate = true;
  //Methods
  Plain2D.prototype.UpdateTransform = function () {
    if ( this.parent ) {
      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    } else {
      this.transform.UpdateWorld( Plain2D.NULL_TRANSFORM.worldTransform );
    }
  };
  Plain2D.prototype.GetWorldPosition = function () {
    return this.transform.worldTransform.Copy();
  };
  Plain2D.prototype.ComputeBounds = function ( _anchor ) {
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
  Object.defineProperty( Plain2D.prototype, 'scale', {
    get: function () {
      return this.transform.scale;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'position', {
    get: function () {
      return this.transform.position;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'x', {
    get: function ( _value ) {
      return this.transform.position.x;
    },
    set: function ( _value ) {
      this.transform.position.x = _value;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'y', {
    get: function ( _value ) {
      return this.transform.position.y;
    },
    set: function ( _value ) {
      this.transform.position.y = _value;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'width', {
    get: function () {
      return this.w;
    },
    set: function ( _value ) {
      this.w = _value;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'height', {
    get: function () {
      return this.h;
    },
    set: function ( _value ) {
      this.h = _value;
    }
  } );
  nk.Entity.Plain2D = Plain2D;
  nk.Plain2D = Plain2D;
};