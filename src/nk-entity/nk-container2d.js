module.exports = function ( nk ) {
  'use strict';
  var Super = nk.Entity.Displayentity2D;
  function Container2D ( _x, _y ) {
    if ( !( this instanceof Container2D ) ) return new Container2D( _x, _y );
    Super.call( this, _x, _y );
    this.children = [];
  }
  Container2D.prototype = Object.create( Super.prototype );
  Container2D.prototype.constructor = Container2D;
  //Static

  //Members
  Container2D.prototype.render = true;
  Container2D.prototype.display = true;
  //Methods
  Container2D.prototype.Draw = function ( _rc ) {
    if ( this.display === true ) {
      this.UpdateAndApplyTransform( _rc );
      this.DrawChildren( _rc );
    }
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
    return _child;
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
  Container2D.prototype.AttachTo = function ( _parent ) {
    if ( this.parent !== null ) this.parent.RemoveChild( this );
    _parent.AddChild( this );
  };
  nk.Entity.Container2D = Container2D;
  nk.Container2D = Container2D;
};