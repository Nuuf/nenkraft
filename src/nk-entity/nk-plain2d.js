module.exports = function ( Nenkraft ) {
  'use strict';
  function Plain2D ( _x, _y ) {
    if ( !( this instanceof Plain2D ) ) return new Plain2D( _x, _y );
    this.transform = new Nenkraft.Math.Basetransform2D( _x, _y );
    this.data = Object.create( null );
  }
  Plain2D.prototype = Object.create( null );
  Plain2D.prototype.constructor = Plain2D;
  //Static
  Plain2D.NULL_TRANSFORM = new Nenkraft.Math.Basetransform2D();
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
  Plain2D.prototype.Destroy = function () {
    if ( this.parent !== null ) this.parent.RemoveChild( this );
  };
  Plain2D.prototype.AttachTo = function ( _parent ) {
    _parent.AddChild( this );
  };
  Plain2D.prototype.Detach = function () {
    if ( this.parent !== null ) return this.parent.RemoveChild( this );
    return null;
  };
  Plain2D.prototype.SendToFront = function () {
    if ( this.parent !== null ) {
      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );
      if ( ix !== -1 ) {
        pChildren.push( pChildren.splice( ix, 1 )[ 0 ] );
      }
    }
  };
  Plain2D.prototype.SendToBack = function () {
    if ( this.parent !== null ) {
      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );
      if ( ix !== -1 ) {
        pChildren.splice( 0, 0, pChildren.splice( ix, 1 )[ 0 ] );
      }
    }
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
    get: function () {
      return this.transform.position.x;
    },
    set: function ( _value ) {
      this.transform.position.x = _value;
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'y', {
    get: function () {
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
  Nenkraft.Entity.Plain2D = Plain2D;
  Nenkraft.Plain2D = Plain2D;
};
