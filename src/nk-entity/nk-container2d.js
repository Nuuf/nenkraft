module.exports = function ( nk ) {
  "use strict";
  function Container2D ( _x, _y ) {
    if ( !( this instanceof Container2D ) ) return new Container( _x, _y );
    this.position = new nk.Vector2D( _x, _y );
    this.transform = new nk.Math.TransformationMatrix2D();
    this.scale = new nk.Vector2D( 1, 1 );
    this.anchor = new nk.Vector2D();
    this.children = [];
    this.data = {};
  }
  Container2D.prototype = Object.create( null );
  Container2D.prototype.constructor = Container2D;
  //Static
  Container2D.ApplySimpleTransformation = function ( _rc ) {

  };
  //Members
  Container2D.prototype.w = 0;
  Container2D.prototype.h = 0;
  Container2D.prototype.render = true;
  Container2D.prototype.rotation = 0;
  Container2D.prototype.parent = null;
  //Methods
  Container2D.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      this.ApplyTransformation( _rc );
      this.DrawChildren( _rc );
    }
  };
  Container2D.prototype.ApplyTransformation = function ( _rc ) {
    var scale = this.scale;
    var position = this.position;
    var anchor = this.anchor;
    var transform = this.transform;
    var parent = this.parent;
    var x, y, sx, sy, skx = 0, sky = 0, rot;
    if ( parent !== null ) {
      var parentTransform = parent.transform;
      x = transform.SetAndGetX( position.x + parentTransform.GetX() - anchor.x * this.w );
      y = transform.SetAndGetY( position.y + parentTransform.GetY() - anchor.y * this.h );
      sx = transform.SetAndGetScaleX( scale.x * parentTransform.GetScaleX() );
      sy = transform.SetAndGetScaleY( scale.y * parentTransform.GetScaleY() );
      rot = transform.SetAndGetRotation( this.rotation + parentTransform.GetRotation() );
    }
    else {
      x = transform.SetAndGetX( position.x - anchor.x * this.w );
      y = transform.SetAndGetY( position.y - anchor.y * this.h );
      sx = transform.SetAndGetScaleX( scale.x );
      sy = transform.SetAndGetScaleY( scale.y );
      rot = transform.SetAndGetRotation( this.rotation );
    }
    _rc.setTransform( sx, skx, sky, sy, x, y );
    _rc.rotate( rot );
  };
  Container2D.prototype.DrawChildren = function ( _rc ) {
    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {
      child = children[ i ];
      if ( child.Draw ) child.Draw( _rc );
    }
  };
  Container2D.prototype.AddChild = function ( _child ) {
    var parent = _child.parent;
    if ( parent !== null ) {
      parent.RemoveChild( _child );
    }
    this.children.push( _child );
    _child.parent = this;
  };
  Container2D.prototype.AddChildren = function () {
    for ( var i = 0, l = arguments.length, child, parent; i < l; ++i ) {
      child = arguments[ i ];
      parent = child.parent;
      if ( parent !== null ) {
        parent.RemoveChild( child );
      }
      this.children.push( child );
      child.parent = this;
    }
  };
  Container2D.prototype.RemoveChild = function ( _child ) {
    var children = this.children;
    var ix = children.indexOf( _child );
    if ( ix !== -1 ) {
      children.splice( ix, 1 );
      _child.parent = null;
    }
  };
  Container2D.prototype.RemoveChildren = function () {
    var children = this.children;
    for ( var i = 0, l = arguments.length, child, parent, ix; i < l; ++i ) {
      child = arguments[ i ];
      parent = child.parent;
      ix = children.indexOf( child );
      if ( ix !== -1 ) {
        children.splice( ix, 1 );
        child.parent = this;
      }
    }
  };
  Container2D.prototype.SendToFront = function () {
    if ( this.parent !== null ) {
      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );
      if ( ix !== -1 ) {
        pChildren.push( pChildren.splice( ix, 1 )[ 0 ] );
      }
    }
  };
  Container2D.prototype.SendToBack = function () {
    if ( this.parent !== null ) {
      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );
      if ( ix !== -1 ) {
        pChildren.splice( 0, 0, pChildren.splice( ix, 1 )[ 0 ] );
      }
    }
  };
  Container2D.prototype.Dump = function () {
    this.children.length = 0;
  };
  nk.Entity.Container2D = Container2D;
  nk.Container2D = Container2D;
  Object.defineProperty( Container2D.prototype, 'x', {
    set: function ( _value ) {
      this.position.x = _value;
    },
    get: function () {
      return this.position.x;
    }
  } );
  Object.defineProperty( Container2D.prototype, 'y', {
    set: function ( _value ) {
      this.position.y = _value;
    },
    get: function () {
      return this.position.y;
    }
  } );
};