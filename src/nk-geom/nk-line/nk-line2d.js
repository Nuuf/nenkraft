module.exports = function ( Nenkraft ) {
  'use strict';
  var LLI = Nenkraft.Math.LineLineIntersection;
  var CPOL = Nenkraft.Math.ClosestPointOnLine;
  function Line2D ( _arg0, _arg1, _arg2, _arg3 ) {
    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3 );
    if ( _arg0 !== undefined && _arg0.x != null && _arg0.y != null && _arg1 !== undefined && _arg1.x != null && _arg1.y != null ) {
      this.s = _arg0;
      this.e = _arg1;
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {
      this.s = new Nenkraft.Vector2D( _arg0, _arg1 );
      this.e = new Nenkraft.Vector2D( _arg2, _arg3 );
    }
    else {
      this.s = new Nenkraft.Vector2D();
      this.e = new Nenkraft.Vector2D();
    }
  }
  Line2D.prototype = Object.create( null );
  Line2D.prototype.constructor = Line2D;
  //Static
  Line2D.TYPE = 0;
  //Members
  Line2D.prototype.TYPE = Line2D.TYPE;
  Line2D.prototype.epsilon = 1000;
  //Methods
  Line2D.prototype.Stretch = function ( _magnitude ) {
    var hm = _magnitude * 0.5;
    this.s.PushFromV( this.e, hm );
    this.e.PushFromV( this.s, hm );
  };
  Line2D.prototype.Rotate = function ( _angle, _anchorX, _anchorY ) {
    _anchorX = _anchorX == undefined ? 0.5 : _anchorX;
    var ap = this.s.Copy();
    ap.AddV( this.e );
    ap.Multiply( _anchorX, _anchorY == undefined ? _anchorX : _anchorY );
    this.s.RotateAroundV( ap, _angle );
    this.e.RotateAroundV( ap, _angle );
  };
  Line2D.prototype.GetLength = function () {
    return this.s.GetDistanceV( this.e );
  };
  Line2D.prototype.GetLengthSquared = function () {
    return this.s.GetDistanceSquaredV( this.e );
  };
  Line2D.prototype.IntersectsPoint = function ( _v ) {
    var s = this.s;
    var e = this.e;
    var cross = ( _v.y - s.y ) * ( e.x - s.x ) - ( _v.x - s.x ) * ( e.y - s.y );
    if ( Math.abs( cross ) > this.epsilon ) {
      return false;
    }
    var dot = ( _v.x - s.x ) * ( e.x - s.x ) + ( _v.y - s.y ) * ( e.y - s.y );
    if ( dot < 0 ) {
      return false;
    }
    if ( dot > this.GetLengthSquared() ) {
      return false;
    }
    return true;
  };
  Line2D.prototype.IntersectsLine = function ( _line ) {
    return LLI( this.s, this.e, _line.s, _line.e );
  };
  Line2D.prototype.GetClosestPointTo = function ( _v ) {
    return CPOL( this.s, this.e, _v );
  };
  Line2D.prototype.GetNormalA = function () {
    return this.s.GetNormalAV( this.e );
  };
  Line2D.prototype.GetNormalB = function () {
    return this.s.GetNormalBV( this.e );
  };
  Nenkraft.Geom.Line2D = Line2D;
  Nenkraft.Geom.Ray2D = Line2D;
};
