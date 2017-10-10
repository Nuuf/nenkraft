module.exports = function ( Nenkraft ) {
  'use strict';
  function QuadtreeNode ( _aabb, _level, _objCap, _levelCap ) {
    if ( !( this instanceof QuadtreeNode ) ) return new QuadtreeNode( _aabb, _level, _objCap, _levelCap );
    this.aabb = _aabb;
    this.level = _level;
    this.objectCap = _objCap;
    this.levelCap = _levelCap;
    this.nodes = {};
    this.objects = [];
  }
  QuadtreeNode.prototype = Object.create( null );
  QuadtreeNode.prototype.constructor = QuadtreeNode;
  //Static
  QuadtreeNode.TOP_LEFT = 'TL';
  QuadtreeNode.TOP_RIGHT = 'TR';
  QuadtreeNode.BOTTOM_LEFT = 'BL';
  QuadtreeNode.BOTTOM_RIGHT = 'BR';
  //Members
  QuadtreeNode.prototype.objectCap = 0;
  QuadtreeNode.prototype.levelCap = 0;
  QuadtreeNode.prototype.level = 0;
  QuadtreeNode.prototype.nodes = null;
  QuadtreeNode.prototype.objects = null;
  QuadtreeNode.prototype.aabb = null;
  QuadtreeNode.prototype.hasSplit = false;
  //Methods
  QuadtreeNode.prototype.Add = function ( _object ) {
    var marking = '';
    var objects = this.objects;
    var nodes = this.nodes;
    var i = 0;
    if ( this.hasSplit === true ) {
      marking = this.Marking( _object );
      if ( marking !== null ) {
        nodes[ marking ].Add( _object );
        return;
      }
    }
    objects.push( _object );
    if ( this.level < this.levelCap ) {
      if ( objects.length > this.objectCap ) {
        if ( this.hasSplit === false ) {
          this.Split();
        }
        while ( i < objects.length ) {
          marking = this.Marking( objects[ i ] );
          if ( marking !== null ) {
            nodes[ marking ].Add( objects.splice( i, 1 )[ 0 ] );
          } else {
            ++i;
          }
        }
      }
    }
  };
  QuadtreeNode.prototype.Converge = function ( _object ) {
    var objects = this.objects.slice();
    var marking = null;
    var nodes = this.nodes;
    if ( this.hasSplit === true ) {
      marking = this.Marking( _object );
      if ( marking !== null ) {
        objects = objects.concat( nodes[ marking ].Converge( _object ) );
      } else {
        objects = objects.concat( nodes[ QuadtreeNode.TOP_LEFT ].Converge( _object ) );
        objects = objects.concat( nodes[ QuadtreeNode.TOP_RIGHT ].Converge( _object ) );
        objects = objects.concat( nodes[ QuadtreeNode.BOTTOM_LEFT ].Converge( _object ) );
        objects = objects.concat( nodes[ QuadtreeNode.BOTTOM_RIGHT ].Converge( _object ) );
      }
    }
    return objects;
  };
  QuadtreeNode.prototype.Split = function () {
    var nl = this.level + 1;
    var oc = this.objectCap;
    var lc = this.levelCap;
    var nodes = this.nodes;
    var aabb = this.aabb;
    nodes[ QuadtreeNode.TOP_LEFT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.TOP_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.TOP_RIGHT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.TOP_RIGHT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_LEFT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.BOTTOM_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_RIGHT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.BOTTOM_RIGHT ),
      nl, oc, lc
    );
    this.hasSplit = true;
  };
  QuadtreeNode.prototype.Dump = function () {
    var nodes = this.nodes;
    this.objects.length = 0;
    if ( this.hasSplit === true ) {
      nodes[ QuadtreeNode.TOP_LEFT ].Dump();
      nodes[ QuadtreeNode.TOP_RIGHT ].Dump();
      nodes[ QuadtreeNode.BOTTOM_LEFT ].Dump();
      nodes[ QuadtreeNode.BOTTOM_RIGHT ].Dump();
    }
    this.nodes = {};
    this.hasSplit = false;
  };
  QuadtreeNode.prototype.Marking = function ( _object ) {
    var nodes = this.nodes;
    if ( nodes[ QuadtreeNode.TOP_LEFT ].aabb.ContainsAABB2D( _object ) === true ) {
      return QuadtreeNode.TOP_LEFT;
    }
    if ( nodes[ QuadtreeNode.TOP_RIGHT ].aabb.ContainsAABB2D( _object ) === true ) {
      return QuadtreeNode.TOP_RIGHT;
    }
    if ( nodes[ QuadtreeNode.BOTTOM_LEFT ].aabb.ContainsAABB2D( _object ) === true ) {
      return QuadtreeNode.BOTTOM_LEFT;
    }
    if ( nodes[ QuadtreeNode.BOTTOM_RIGHT ].aabb.ContainsAABB2D( _object ) === true ) {
      return QuadtreeNode.BOTTOM_RIGHT;
    }
    return null;
  };
  QuadtreeNode.prototype.ConcatNodes = function ( _nodeList ) {
    if ( _nodeList === undefined ) _nodeList = [];
    _nodeList.push( this );
    var nodes = this.nodes;
    if ( this.hasSplit === false ) return _nodeList;
    nodes[ QuadtreeNode.TOP_LEFT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.TOP_RIGHT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.BOTTOM_LEFT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.BOTTOM_RIGHT ].ConcatNodes( _nodeList );
    return _nodeList;
  };
  Nenkraft.Utils.QuadtreeNode = QuadtreeNode;
  Nenkraft.QuadtreeNode = QuadtreeNode;
};
