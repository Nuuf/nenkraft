module.exports = function ( nk ) {
  "use strict";
  function Container2D ( _x, _y ) {
    if ( !( this instanceof Container2D ) ) return new Container( _x, _y );
    this.position = new nk.Vector2D( _x, _y );
    this.transform = new nk.Math.TransformationMatrix2D();
    this.scale = new nk.Vector2D( 1, 1 );
    this.skew = new nk.Vector2D( 0, 0 );
    this.anchor = new nk.Vector2D();
    this.children = [];
    this.data = Object.create( null );
  }
  Container2D.prototype = Object.create( null );
  Container2D.prototype.constructor = Container2D;
  //Static
  Container2D.SimpleTransformation = function ( _rc ) {
    var position = this.position;
    var anchor = this.anchor;
    var transform = this.transform;
    var parent = this.parent;
    var x, y;
    if ( parent !== null ) {
      var parentTransform = parent.transform;
      x = transform.SetAndGetX( position.x + parentTransform.GetX() - anchor.x * this.w );
      y = transform.SetAndGetY( position.y + parentTransform.GetY() - anchor.y * this.h );
    }
    else {
      x = transform.SetAndGetX( position.x - anchor.x * this.w );
      y = transform.SetAndGetY( position.y - anchor.y * this.h );
    }
    _rc.setTransform( 1, 0, 0, 1, x, y );
  };
  Container2D.ComplexTransformation = function ( _rc ) {
    var scale = this.scale;
    var skew = this.skew;
    var position = this.position;
    var anchor = this.anchor;
    var transform = this.transform;
    var parent = this.parent;
    var x, y, sx, sy, skx, sky, rot;
    if ( parent !== null ) {
      var parentTransform = parent.transform;
      sx = transform.SetAndGetScaleX( scale.x * parentTransform.GetScaleX() );
      sy = transform.SetAndGetScaleY( scale.y * parentTransform.GetScaleY() );
      x = transform.SetAndGetX( position.x + parentTransform.GetX() - anchor.x * this.w * sx );
      y = transform.SetAndGetY( position.y + parentTransform.GetY() - anchor.y * this.h * sy );
      skx = transform.SetAndGetSkewX( skew.x + parentTransform.GetSkewX() );
      sky = transform.SetAndGetSkewY( skew.y + parentTransform.GetSkewY() );
      rot = transform.SetAndGetRotation( this.rotation + parentTransform.GetRotation() );
    }
    else {
      sx = transform.SetAndGetScaleX( scale.x );
      sy = transform.SetAndGetScaleY( scale.y );
      x = transform.SetAndGetX( position.x - anchor.x * this.w * sx );
      y = transform.SetAndGetY( position.y - anchor.y * this.h * sy );
      skx = transform.SetAndGetSkewX( skew.x );
      sky = transform.SetAndGetSkewY( skew.y );
      rot = transform.SetAndGetRotation( this.rotation );
    }
    _rc.setTransform( sx, skx, sky, sy, x, y );
    _rc.rotate( rot );
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
  Container2D.prototype.ApplyTransformation = Container2D.ComplexTransformation;
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
  Container2D.prototype.Destroy = function () {
    this.Dump();
    if ( this.parent !== null ) this.parent.RemoveChild( this );
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