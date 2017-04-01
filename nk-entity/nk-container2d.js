( function () {
  "use strict";
  function Container2D( _x, _y ) {
    if ( this instanceof Container2D ) {
      this.position = new nk.Vector2D( _x, _y );
      this.scale = new nk.Vector2D( 1, 1 );
      this.rotation = 0;
      this.parent = null;
      this.children = [];
    }
    else return new Container( _x, _y );
  }
  Container2D.prototype = Object.create( null );
  Container2D.prototype.constructor = Container2D;
  Container2D.prototype.Draw = function ( _rc ) {
    var position = this.position, scale = this.scale;
    _rc.save();
    _rc.translate( position.x, position.y );
    _rc.rotate( this.rotation );
    _rc.scale( scale.x, scale.y );
    this.DrawChildren( _rc );
    _rc.restore();
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
  nk.Entity.Container2D = Container2D;
  nk.Container2D = Container2D;
  Object.defineProperty( Container2D.prototype, 'x', {
    set: function ( _value ) {
      this.position.x = _value;
    },
    get: function ( _value ) {
      return this.position.x;
    }
  } );
  Object.defineProperty( Container2D.prototype, 'y', {
    set: function ( _value ) {
      this.position.y = _value;
    },
    get: function ( _value ) {
      return this.position.y;
    }
  } );
}() );