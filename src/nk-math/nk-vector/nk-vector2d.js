module.exports = function ( nk ) {
  "use strict";
  function Vector2D( _arg0, _arg1 ) {
    if ( !( this instanceof Vector2D ) ) return new Vector2D( _arg0, _arg1 );
    if ( _arg0 !== undefined && _arg0.x !== undefined && _arg0.y !== undefined ) {
      this.x = _arg0.x;
      this.y = _arg0.y;
    }
    else if ( _arg0 !== undefined ) {
      if ( _arg1 === undefined ) {
        this.x = _arg0;
        this.y = _arg0;
      }
      else {
        this.x = _arg0;
        this.y = _arg1;
      }
    }
  }
  Vector2D.prototype = Object.create( null );
  Vector2D.prototype.constructor = Vector2D;
  //Static

  //Members
  Vector2D.prototype.x = 0;
  Vector2D.prototype.y = 0;
  //Methods
  Vector2D.prototype.Copy = function () {
    return new Vector2D( this );
  };
  //|||||
  Vector2D.prototype.SetV = function ( _v ) {
    this.x = _v.x;
    this.y = _v.y;
  };
  Vector2D.prototype.Set = function ( _x, _y ) {
    if ( _x !== undefined && _y === undefined ) {
      this.x = _x;
      this.y = _x;
    } else {
      this.x = _x;
      this.y = _y;
    }
  };
  //|||||
  Vector2D.prototype.Is0 = function () {
    return this.x === 0 && this.y === 0;
  };
  //|||||
  Vector2D.prototype.AddV = function ( _v ) {
    this.x += _v.x;
    this.y += _v.y;
  };
  Vector2D.prototype.AddVC = function ( _v ) {
    var r = this.Copy();
    r.AddV( _v );
    return r;
  };
  Vector2D.prototype.Add = function ( _x, _y ) {
    this.x += _x;
    this.y += _y;
  };
  //|||||
  Vector2D.prototype.SubtractV = function ( _v ) {
    this.x -= _v.x;
    this.y -= _v.y;
  };
  Vector2D.prototype.SubtractVC = function ( _v ) {
    var r = this.Copy();
    r.SubtractV( _v );
    return r;
  };
  Vector2D.prototype.Subtract = function ( _x, _y ) {
    this.x -= _x;
    this.y -= _y;
  };
  //|||||
  Vector2D.prototype.MultiplyV = function ( _v ) {
    this.x *= _v.x;
    this.y *= _v.y;
  };
  Vector2D.prototype.MultiplyVC = function ( _v ) {
    var r = this.Copy();
    r.MultiplyV( _v );
    return r;
  };
  Vector2D.prototype.Multiply = function ( _x, _y ) {
    this.x *= _x;
    this.y *= _y;
  };
  //|||||
  Vector2D.prototype.DivideV = function ( _v ) {
    this.x /= _v.x;
    this.y /= _v.y;
  };
  Vector2D.prototype.DivideVC = function ( _v ) {
    var r = this.Copy();
    r.DivideV( _v );
    return r;
  };
  Vector2D.prototype.Divide = function ( _x, _y ) {
    this.x /= _x;
    this.y /= _y;
  };
  //|||||
  Vector2D.prototype.Normalize = function () {
    var m = this.GetMagnitude();
    this.Divide( m, m );
  };
  Vector2D.prototype.Positive = function () {
    this.x = Math.abs( this.x );
    this.y = Math.abs( this.y );
  };
  Vector2D.prototype.Negative = function () {
    this.x = -Math.abs( this.x );
    this.y = -Math.abs( this.y );
  };
  Vector2D.prototype.Invert = function () {
    this.x = this.x * -1;
    this.y = this.y * -1;
  };
  Vector2D.prototype.Rotate = function ( _a ) {
    var s = Math.sin( _a ), c = Math.cos( _a );
    var tx = this.x, ty = this.y;
    this.x = tx * c - ty * s;
    this.y = tx * s + ty * c;
  };
  //|||||
  Vector2D.prototype.RotateAroundV = function ( _v, _a ) {
    this.SubtractV( _v );
    this.Rotate( _a );
    this.AddV( _v );
  };
  Vector2D.prototype.RotateAround = function ( _x, _y, _a ) {
    this.Subtract( _x, _y );
    this.Rotate( _a );
    this.Add( _x, _y );
  };
  //|||||
  Vector2D.prototype.PushFromV = function ( _v, _m ) {
    var d = this.Copy();
    d.SubtractV( _v );
    d.Normalize();
    d.Multiply( _m, _m );
    this.AddV( d );
  };
  Vector2D.prototype.PushFrom = function ( _x, _y, _m ) {
    var d = this.Copy();
    d.Subtract( _x, _y );
    d.Normalize();
    d.Multiply( _m, _m );
    this.AddV( d );
  };
  //|||||
  Vector2D.prototype.GetAngle = function () {
    return Math.atan2( this.y, this.x );
  };
  //|||||
  Vector2D.prototype.GetAngleBetween = function ( _x, _y ) {
    return Math.atan2( this.y - _y, this.x - _x );
  };
  Vector2D.prototype.GetAngleBetweenV = function ( _v ) {
    return Math.atan2( this.y - _v.y, this.x - _v.x );
  };
  //|||||
  Vector2D.prototype.GetDotV = function ( _v ) {
    return ( this.x * _v.x + this.y * _v.y );
  };
  Vector2D.prototype.GetDot = function ( _x, _y ) {
    return ( this.x * _x + this.y * _y );
  };
  //|||||
  Vector2D.prototype.GetCrossV = function ( _v ) {
    return ( this.x * _v.y + this.y * _v.x );
  };
  Vector2D.prototype.GetCross = function ( _x, _y ) {
    return ( this.x * _y + this.y * _x );
  };
  //|||||
  Vector2D.prototype.GetMagnitudeSquared = function () {
    return ( this.x * this.x + this.y * this.y );
  };
  Vector2D.prototype.GetMagnitude = function () {
    return Math.sqrt( this.GetMagnitudeSquared() );
  };
  //|||||
  Vector2D.prototype.GetDistanceV = function ( _v ) {
    var d = this.Copy();
    d.SubtractV( _v );
    return d.GetMagnitude();
  };
  Vector2D.prototype.GetDistance = function ( _x, _y ) {
    var d = this.Copy();
    d.Subtract( _x, _y );
    return d.GetMagnitude();
  };
  //|||||
  Vector2D.prototype.GetDistanceSquaredV = function ( _v ) {
    var d = this.Copy();
    d.SubtractV( _v );
    return d.GetMagnitudeSquared();
  };
  Vector2D.prototype.GetDistanceSquared = function ( _x, _y ) {
    var d = this.Copy();
    d.Subtract( _x, _y );
    return d.GetMagnitudeSquared();
  };
  //|||||
  Vector2D.prototype.GetLength = Vector2D.prototype.GetMagnitude;
  Vector2D.prototype.GetLengthSquared = Vector2D.prototype.GetMagnitudeSquared;

  nk.Math.Vector2D = Vector2D;
  nk.Vector2D = Vector2D;
};