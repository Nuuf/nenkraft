/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  var PI = Math.PI;
  var Sin = Math.sin;
  var Cos = Math.cos;
  var Pow = Math.pow;
  var Round = Math.round;

  Nenkraft.Math.PII = PI * 2;
  Nenkraft.Math.PI5 = PI * 0.5;
  Nenkraft.Math.DEGREES_TO_RADIANS = PI / 180;
  Nenkraft.Math.RADIANS_TO_DEGREES = 180 / PI;
  Nenkraft.Math.RADIAN = Nenkraft.Math.DEGREES_TO_RADIANS;

  var DTR = Nenkraft.Math.DegreesToRadians = Nenkraft.Math.DTR = function ( _angle ) {

    return _angle * Nenkraft.Math.DEGREES_TO_RADIANS;
  
  };

  Nenkraft.Math.RadiansToDegrees = Nenkraft.Math.RTD = function ( _angle ) {

    return _angle * Nenkraft.Math.RADIANS_TO_DEGREES;
  
  };

  Nenkraft.Math.PrecisionRound = function ( _value, _precision ) {

    if ( _precision == null ) return _value;
    var divisor = Pow( 10, _precision );
    return Round( divisor * _value ) / divisor;
  
  };

  Nenkraft.Math.PR = Nenkraft.Math.PrecisionRound;

  Nenkraft.Math.Spread = function ( _start, _amount, _margin, _i ) {

    return ( _start - ( _margin * ( _amount - 1 ) * 0.5 ) + ( _i * _margin ) );
  
  };

  Nenkraft.Math.AttractRepel = function ( _repeller, _attractor, _velocity, _radius, _strength ) {

    var delta = _attractor.SubtractVC( _repeller ), distance = delta.GetMagnitudeSquared();

    if ( distance < _radius * _radius ) {

      var theta = delta.GetAngle();
      _velocity.Add(
        Cos( theta ) * _strength,
        Sin( theta ) * _strength
      );
    
    }
  
  };

  Nenkraft.Math.Oscillate = function( _time, _from, _to, _amplitude ) {

    var delta = ( _to - _from ) * 0.5;
    return ( _from + delta ) + ( Sin( DTR( _time * _amplitude ) ) * delta );
  
  };

  Nenkraft.Math.LineLineIntersection = function ( _sA, _eA, _sB, _eB ) {

    var d1 = _eA.SubtractVC( _sA );
    var d2 = _eB.SubtractVC( _sB );
    var l = -d2.x * d1.y + d1.x * d2.y;
    var abx = _sA.x - _sB.x;
    var aby = _sA.y - _sB.y;
    var s = ( -d1.y * abx + d1.x * aby ) / l;
    var t = ( d2.x * aby - d2.y * abx ) / l;

    if ( s >= 0 && s <= 1 && t >= 0 && t <= 1 ) {

      d1.Set( _sA.x + ( t * d1.x ), _sA.y + ( t * d1.y ) );
      return d1;
    
    }

    return false;
  
  };

  Nenkraft.Math.ClosestPointOnLine = function ( _s, _e, _v ) {

    var delta = _e.SubtractVC( _s );
    var u = ( ( _v.x - _s.x ) * delta.x + ( _v.y - _s.y ) * delta.y ) / delta.GetMagnitudeSquared();

    if ( u < 0 ) {

      return _s;
    
    } else if ( u > 1 ) {

      return _e;
    
    }

    delta.Set( _s.x + u * delta.x, _s.y + u * delta.y );
    return delta;
  
  };

  Nenkraft.Math.LikeASquareGrid = function ( _points, _w, _marginX, _marginY ) {

    for ( var i = 0, l = _points.length, columns = ( _w / _marginX ) | 0; i < l; ++i ) {

      _points[ i ].Set( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    
    }
  
  };

  Nenkraft.Math.SquareGrid = function ( _w, _h, _marginX, _marginY, _creatableClass ) {

    var grid = [];

    for ( var i = 0, columns = ( _w / _marginX ) | 0, rows = ( _h / _marginY ) | 0, l = columns * rows; i < l; ++i ) {

      grid.push( new _creatableClass( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY ) );
    
    }

    return grid;
  
  };

  Nenkraft.Math.TriRectArray = function ( _x, _y, _w, _h, _arr ) {

    if ( _arr != null ) {

      _arr[ 0 ] = _x;
      _arr[ 1 ] = _y;
      _arr[ 2 ] = _x + _w;
      _arr[ 3 ] = _y;
      _arr[ 4 ] = _x;
      _arr[ 5 ] = _y + _h;
      _arr[ 6 ] = _x;
      _arr[ 7 ] = _y + _h;
      _arr[ 8 ] = _x + _w;
      _arr[ 9 ] = _y;
      _arr[ 10 ] = _x + _w;
      _arr[ 11 ] = _y + _h;
      return _arr;
    
    }

    return [
      _x, _y,
      _x + _w, _y,
      _x, _y + _h,
      _x, _y + _h,
      _x + _w, _y,
      _x + _w, _y + _h
    ];
  
  };

  var GCD = Nenkraft.Math.GreatestCommonDivisor = Nenkraft.Math.GCD = function( _x, _y ) {

    if ( _y === 0 ) return _x;
    return GCD( _y, _x % _y );
  
  };

  Nenkraft.Math.SimplifyAspectRatio = Nenkraft.Math.SAR = function( _x, _y, _array ) {

    var gcd = GCD( _x, _y );
    var array = _array == null ? [] : _array;
    array[0] = _x / gcd;
    array[1] = _y / gcd;
    return array;

  };

  Object.defineProperty( Nenkraft.Math, 'PII', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'PI5', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIAN', { writable: false } );

};
