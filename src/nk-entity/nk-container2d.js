/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

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
  Container2D.prototype.children = null;
  Container2D.prototype.render = true;
  Container2D.prototype.display = true;
  Container2D.prototype.transformShouldUpdate = true;
  Container2D.prototype.transformAutomaticUpdate = true;
  //
  Container2D.prototype.isBatchParent = false;
  Container2D.prototype.childDataBuffer = null;
  Container2D.prototype.bufferData = null;
  Container2D.prototype.programController = null;
  Container2D.prototype.bufferStartIndex = 0;
  Container2D.prototype.bufferEndIndex = 0;
  //
  //Methods
  Container2D.prototype.Draw = function ( _rc ) {
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      if ( this.children.length > 0 && this.display === true ) {
        this.DrawChildren( _rc );
      }
    }
  };
  Container2D.prototype.GLDraw = function ( _gl ) {
    if ( this.render === true ) {
      if ( this.transformShouldUpdate === true ) {
        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      }
      if ( this.children.length > 0 && this.display === true ) {
        if ( this.isBatchParent === true ) {
          this.GLBatchDrawChildren( _gl );
        } else {
          this.GLDrawChildren( _gl );
        }
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
  Container2D.prototype.GLDrawChildren = function ( _gl ) {
    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {
      child = children[ i ];
      if ( child.GLDraw ) child.GLDraw( _gl );
    }
  };
  Container2D.prototype.GLBatchDrawChildren = function ( _gl ) {
    if ( this.childDataBuffer != null && this.programController != null ) {
      this.programController.Execute( this.childDataBuffer, this.children.length );
    }
  };
  Container2D.prototype.ComputeBatchBuffer = function ( _getBufferData ) {
    var childDataBuffer = [];
    for ( var i = 0, children = this.children, l = children.length, child, childData; i < l; ++i ) {
      child = children[ i ];
      if ( _getBufferData != null ) {
        childData = _getBufferData( child );
      } else {
        childData = child.GetBufferData();
      }
      child.bufferStartIndex = childDataBuffer.length;
      child.bufferEndIndex = childDataBuffer.length + childData.length;
      childDataBuffer.push.apply( childDataBuffer, childData );
    }
    this.childDataBuffer = new Float32Array( childDataBuffer );
  };
  Container2D.prototype.UpdateInBuffer = function () {
    throw new Error( 'Cannot update buffer data directly on Container2D object!' );
  };
  Container2D.prototype.GetBufferData = function () {
    throw new Error( 'Cannot access buffer data directly on Container2D object!' );
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
    var children = arguments;
    if ( Array.isArray( children[ 0 ] ) ) {
      children = children[ 0 ];
    }
    for ( var i = 0, l = children.length, child, parent; i < l; ++i ) {
      this.AddChild( children[ i ] );
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
    for ( var i = 0, l = aChildren.length, child, ix; i < l; ++i ) {
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
  Container2D.prototype.UseAsBatchParent = function ( _pc ) {
    this.isBatchParent = true;
    this.programController = _pc;
  };
  Nenkraft.Entity.Container2D = Container2D;
  Nenkraft.Container2D = Container2D;
};
