module.exports = function ( Nenkraft ) {
  'use strict';
  var Super = Nenkraft.Entity.CoreEntity2D;
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
  Container2D.prototype.alpha = 1.0;
  Container2D.prototype.transformShouldUpdate = true;
  Container2D.prototype.transformAutomaticUpdate = true;
  //Methods
  Container2D.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      this.transform.ApplyWorld( _rc );
      if ( this.children.length > 0 && this.display === true ) {
        this.DrawChildren( _rc );
      }
    }
  };
  Container2D.prototype.RequestTransformUpdate = function () {
    this.transformShouldUpdate = true;
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
  Container2D.prototype.Mount = function () {
    this.AddChildren.apply( this, arguments );
  };
  Container2D.prototype.AddSibling = function ( _sibling ) {
    var parent = this.parent;
    if ( parent !== null ) {
      parent.AddChild( _sibling );
    }
    return _sibling;
  };
  Container2D.prototype.RemoveChild = function ( _child ) {
    var children = this.children;
    var ix = children.indexOf( _child );
    if ( ix !== -1 ) {
      delete _child.parent;
      return children.splice( ix, 1 )[ 0 ];
    }
  };
  Container2D.prototype.RemoveChildren = function () {
    var children = this.children;
    var aChildren = arguments[ 0 ].length ? arguments[ 0 ] : arguments;
    var rChildren = [];
    for ( var i = 0, l = aChildren.length, child, parent, ix; i < l; ++i ) {
      child = aChildren[ i ];
      ix = children.indexOf( child );
      if ( ix !== -1 ) {
        rChildren.push( children.splice( ix, 1 )[ 0 ] );
        delete child.parent;
      }
    }
    return rChildren;
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
    _parent.AddChild( this );
  };
  Container2D.prototype.Detach = function () {
    if ( this.parent !== null ) return this.parent.RemoveChild( this );
    return null;
  };
  Container2D.prototype.GetChildClosestTo = function ( _object, _filterCondition ) {
    var children = this.children, closestChild = null;
    if ( children.length !== 0 ) {
      for ( var i = 0, l = children.length, child, distance = Infinity, tempDistance; i < l; ++i ) {
        child = children[ i ];
        if ( _filterCondition !== undefined ) {
          if ( _filterCondition( child ) === false ) continue;
        }
        tempDistance = Math.abs( child.position.GetDistanceSquared( _object.x, _object.y ) );
        if ( tempDistance < distance ) {
          distance = tempDistance;
          closestChild = child;
        }
      }
      return closestChild;
    }
    return null;
  };
  Container2D.prototype.GetChildFurthestFrom = function ( _object, _filterCondition ) {
    var children = this.children, closestChild = null;
    if ( children.length !== 0 ) {
      for ( var i = 0, l = children.length, child, distance = 0, tempDistance; i < l; ++i ) {
        child = children[ i ];
        if ( _filterCondition !== undefined ) {
          if ( _filterCondition( child ) === false ) continue;
        }
        tempDistance = Math.abs( child.position.GetDistanceSquared( _object.x, _object.y ) );
        if ( tempDistance > distance ) {
          distance = tempDistance;
          closestChild = child;
        }
      }
      return closestChild;
    }
    return null;
  };
  Nenkraft.Entity.Container2D = Container2D;
  Nenkraft.Container2D = Container2D;
};
