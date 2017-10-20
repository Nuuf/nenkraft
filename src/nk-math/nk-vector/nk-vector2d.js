module.exports = function ( Nenkraft ) {
  'use strict';
  function Vector2D ( _arg0, _arg1 ) {
    if ( !( this instanceof Vector2D ) ) return new Vector2D( _arg0, _arg1 );
    if ( _arg0 != undefined && _arg0.x != undefined && _arg0.y != undefined ) {
      this.x = _arg0.x;
      this.y = _arg0.y;
    }
    else if ( _arg0 != undefined ) {
      if ( _arg1 == undefined ) {
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
  Vector2D.TranslateMultiple = function ( _vectors, _vector ) {
    for ( var i = 0, l = _vectors.length; i < l; ++i ) {
      _vectors[ i ].AddV( _vector );
    }
  };
  Vector2D.GetMinMaxDot = function ( _vectors, _axis ) {
    var min = Infinity;
    var max = -min;
    var dot = 0, result = _axis.Copy();
    for ( var i = 0, l = _vectors.length; i < l; ++i ) {
      dot = _vectors[ i ].GetDotV( _axis );
      if ( dot > max ) {
        max = dot;
      }
      if ( dot < min ) {
        min = dot;
      }
    }
    result.Set( min, max );
    return result;
  };
  Vector2D.Pool = new Nenkraft.Utils.Pool( Vector2D );
  Vector2D.Pool.Retrieve = function ( _x, _y ) {
    if ( this.objects.length === 0 ) {
      this.Flood();
    }
    var v = this.objects.pop();
    v.Set( _x, _y );
    return v;
  };
  Vector2D.Pool.Flood( function () { }, 100000 );
  Vector2D.USE_POOL = true;
  //Members
  Vector2D.prototype.x = 0;
  Vector2D.prototype.y = 0;
  //Methods
  Vector2D.prototype.Copy = function () {
    if ( Vector2D.USE_POOL === true ) {
      return Vector2D.Pool.Retrieve( this.x, this.y );
    }
    return new Vector2D( this );
  };
  Vector2D.prototype.AbsoluteCopy = function () {
    var v = this.Copy();
    v.Positive();
    return v;
  };
  Vector2D.prototype.SetV = function ( _v ) {
    this.x = _v.x;
    this.y = _v.y;
  };
  Vector2D.prototype.Set = function ( _x, _y ) {
    if ( _x != undefined && _y == undefined ) {
      this.x = _x;
      this.y = _x;
    } else {
      this.x = _x;
      this.y = _y;
    }
  };
  Vector2D.prototype.Is0 = function () {
    return this.x === 0 && this.y === 0;
  };
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
  Vector2D.prototype.RotateBy = function ( _a ) {
    var angle = this.GetAngle() + _a;
    var s = Math.sin( angle ), c = Math.cos( angle );
    var tx = this.x, ty = this.y;
    this.x = tx * c - ty * s;
    this.y = tx * s + ty * c;
  };
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
  Vector2D.prototype.RotateAroundByV = function ( _v, _a ) {
    this.SubtractV( _v );
    this.RotateBy( _a );
    this.AddV( _v );
  };
  Vector2D.prototype.RotateAroundBy = function ( _x, _y, _a ) {
    this.Subtract( _x, _y );
    this.RotateBy( _a );
    this.Add( _x, _y );
  };
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
  Vector2D.prototype.GetAngle = function () {
    return Math.atan2( this.y, this.x );
  };
  Vector2D.prototype.GetAngleBetweenV = function ( _v ) {
    return Math.atan2( this.y - _v.y, this.x - _v.x );
  };
  Vector2D.prototype.GetAngleBetween = function ( _x, _y ) {
    return Math.atan2( this.y - _y, this.x - _x );
  };
  Vector2D.prototype.GetDotV = function ( _v ) {
    return ( this.x * _v.x + this.y * _v.y );
  };
  Vector2D.prototype.GetDot = function ( _x, _y ) {
    return ( this.x * _x + this.y * _y );
  };
  Vector2D.prototype.GetCrossV = function ( _v ) {
    return ( this.x * _v.y + this.y * _v.x );
  };
  Vector2D.prototype.GetCross = function ( _x, _y ) {
    return ( this.x * _y + this.y * _x );
  };
  Vector2D.prototype.GetMagnitudeSquared = function () {
    return ( this.x * this.x + this.y * this.y );
  };
  Vector2D.prototype.GetMagnitude = function () {
    return Math.sqrt( this.GetMagnitudeSquared() );
  };
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
  Vector2D.prototype.GetPerpendicularCCWV = function ( _v ) {
    return new Vector2D( -( _v.y - this.y ), _v.x - this.x );
  };
  Vector2D.prototype.GetPerpendicularCCW = function ( _x, _y ) {
    return new Vector2D( -( _y - this.y ), _x - this.x );
  };
  Vector2D.prototype.GetPerpendicularCWV = function ( _v ) {
    return new Vector2D( _v.y - this.y, -( _v.x - this.x ) );
  };
  Vector2D.prototype.GetPerpendicularCW = function ( _x, _y ) {
    return new Vector2D( _y - this.y, -( _x - this.x ) );
  };
  Vector2D.prototype.GetNormalAV = function ( _v ) {
    var normal = this.GetPerpendicularCCWV( _v );
    normal.Normalize();
    return normal;
  };
  Vector2D.prototype.GetNormalA = function ( _x, _y ) {
    var normal = this.GetPerpendicularCCW( _x, _y );
    normal.Normalize();
    return normal;
  };
  Vector2D.prototype.GetNormalBV = function ( _v ) {
    var normal = this.GetPerpendicularCWV( _v );
    normal.Normalize();
    return normal;
  };
  Vector2D.prototype.GetNormalB = function ( _x, _y ) {
    var normal = this.GetPerpendicularCW( _x, _y );
    normal.Normalize();
    return normal;
  };
  Vector2D.prototype.GetMidPointV = function ( _v ) {
    var mp = this.Copy();
    mp.AddV( _v );
    mp.Divide( 2, 2 );
    return mp;
  };
  Vector2D.prototype.GetMidPoint = function ( _x, _y ) {
    var mp = this.Copy();
    mp.Add( _x, _y );
    mp.Multiply( 0.5, 0.5 );
    return mp;
  };
  Vector2D.prototype.IsEqualTo = function ( _x, _y ) {
    return ( this.x === _x && this.y === _y );
  };
  Vector2D.prototype.IsEqualToV = function ( _v ) {
    return ( this.x === _v.x && this.y === _v.y );
  };
  Vector2D.prototype.GetProjectionOntoV = function ( _v ) {
    var dot = this.GetDotV( _v );
    if ( dot === 0 ) return new Vector2D();
    var mag = _v.GetMagnitude();
    var scl = dot / ( mag * mag );
    var p = _v.Copy();
    p.Multiply( scl, scl );
    return p;
  };
  Vector2D.prototype.GetProjectionOnto = function ( _x, _y ) {
    var p = this.Copy();
    p.Set( _x, _y );
    var dot = this.GetDotV( p );
    if ( dot === 0 ) return new Vector2D();
    var mag = p.GetMagnitude();
    var scl = dot / ( mag * mag );
    p.Multiply( scl, scl );
    return p;
  };
  Vector2D.prototype.GetReflectionV = function ( _v ) {
    var r = _v.Copy();
    var dot = this.GetDotV( r );
    r.Multiply( 2, 2 );
    r.Multiply( dot, dot );
    return this.SubtractVC( r );
  };
  Vector2D.prototype.GetReflection = function ( _x, _y ) {
    var r = this.Copy();
    r.Set( _x, _y );
    var dot = this.GetDotV( r );
    r.Multiply( 2, 2 );
    r.Multiply( dot, dot );
    return this.SubtractVC( r );
  };
  Vector2D.prototype.Store = function () {
    Vector2D.Pool.Store( this );
  };
  Vector2D.prototype.GetLength = Vector2D.prototype.GetMagnitude;
  Vector2D.prototype.GetLengthSquared = Vector2D.prototype.GetMagnitudeSquared;

  Nenkraft.Math.Vector2D = Vector2D;
  Nenkraft.Vector2D = Vector2D;
};
