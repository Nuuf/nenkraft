/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  Nenkraft.Math.PII = Math.PI * 2;
  Nenkraft.Math.DEGREES_TO_RADIANS = Math.PI / 180;
  Nenkraft.Math.RADIANS_TO_DEGREES = 180 / Math.PI;
  Nenkraft.Math.RADIAN = Nenkraft.Math.DEGREES_TO_RADIANS;

  Nenkraft.Math.DegreesToRadians = function ( _angle ) {

    return _angle * Nenkraft.Math.DEGREES_TO_RADIANS;
  
  };

  Nenkraft.Math.DTR = Nenkraft.Math.DegreesToRadians;

  Nenkraft.Math.RadiansToDegrees = function ( _angle ) {

    return _angle * Nenkraft.Math.RADIANS_TO_DEGREES;
  
  };

  Nenkraft.Math.RTD = Nenkraft.Math.RadiansToDegrees;

  Nenkraft.Math.PrecisionRound = function ( _value, _precision ) {

    var divisor = Math.pow( 10, _precision );
    return Math.round( divisor * _value ) / divisor;
  
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
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    
    }
  
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

  Nenkraft.Math.LikeASquareGrid = function ( _points, _width, _marginX, _marginY ) {

    for ( var i = 0, l = _points.length, columns = ( _width / _marginX ) | 0; i < l; ++i ) {

      _points[ i ].Set( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    
    }
  
  };

  Nenkraft.Math.SquareGrid = function ( _width, _height, _marginX, _marginY, _creatableClass ) {

    var grid = [];

    for ( var i = 0, columns = ( _width / _marginX ) | 0, rows = ( _height / _marginY ) | 0, l = columns * rows; i < l; ++i ) {

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

  Object.defineProperty( Nenkraft.Math, 'PII', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIAN', { writable: false } );

};
