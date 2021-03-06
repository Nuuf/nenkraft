/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function CoreEntity2D ( _x, _y ) {

    if ( !( this instanceof CoreEntity2D ) ) return new CoreEntity2D( _x, _y );
    this.transform = Nenkraft.Math.Transform2D( _x, _y );
    this.data = Object.create( null );
  
  }

  CoreEntity2D.prototype = Object.create( null );
  CoreEntity2D.prototype.constructor = CoreEntity2D;
  // Static
  CoreEntity2D.NULL_TRANSFORM = Nenkraft.Math.Transform2D();
  // Members
  CoreEntity2D.prototype.parent = null;
  CoreEntity2D.prototype.transform = null;
  CoreEntity2D.prototype.data = null;
  CoreEntity2D.prototype.w = 0;
  CoreEntity2D.prototype.h = 0;
  CoreEntity2D.prototype.bounds = null;
  CoreEntity2D.prototype.boundsDirty = true;
  CoreEntity2D.prototype.globalPosition = null;

  // Methods
  CoreEntity2D.prototype.UpdateTransform = function () {

    if ( this.parent ) {

      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    
    } else {

      this.transform.UpdateWorld( CoreEntity2D.NULL_TRANSFORM.worldTransform );
    
    }
  
  };

  CoreEntity2D.prototype.GetWorldPosition = function () {

    var wt = this.transform.worldTransform;

    if ( this.globalPosition === null ) {

      this.globalPosition = Nenkraft.Vector2D( wt.e, wt.f );
    
    } else {

      this.globalPosition.Set( wt.e, wt.f );
      
    }

    return this.globalPosition;
  
  };

  CoreEntity2D.prototype.ComputeBounds = function ( _anchor ) {

    var wtax = 0;
    var htay = 0;

    if ( _anchor != null ) {

      wtax = this.width * _anchor.x;
      htay = this.height * _anchor.y;
    
    }

    if ( this.bounds === null ) {

      this.bounds = Nenkraft.Geom.AABB2D(
        this.x - wtax,
        this.y - htay,
        this.x + this.width - wtax,
        this.y + this.height - htay
      );
      this.bounds.belongsTo = this;
    
    } else {

      this.bounds.Set(
        this.x - wtax,
        this.y - htay,
        this.x + this.width - wtax,
        this.y + this.height - htay
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
