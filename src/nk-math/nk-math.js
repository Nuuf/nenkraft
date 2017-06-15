module.exports = function ( nk ) {
  'use strict';
  nk.Math.PII = Math.PI * 2;
  nk.Math.DEGREES_TO_RADIANS = Math.PI / 180;
  nk.Math.RADIANS_TO_DEGREES = 180 / Math.PI;
  nk.Math.RADIAN = nk.Math.DEGREES_TO_RADIANS;
  nk.Math.DegreesToRadians = function ( _angle ) {
    return _angle * nk.Math.DEGREES_TO_RADIANS;
  };
  nk.Math.DTR = nk.Math.DegreesToRadians;
  nk.Math.RadiansToDegrees = function ( _angle ) {
    return _angle * nk.Math.RADIANS_TO_DEGREES;
  };
  nk.Math.RTD = nk.Math.RadiansToDegrees;
  nk.Math.PrecisionRound = function ( _value, _precision ) {
    var divisor = Math.pow( 10, _precision );
    return Math.round( divisor * _value ) / divisor;
  };
  nk.Math.PR = nk.Math.PrecisionRound;
  nk.Math.Spread = function ( _start, _amount, _margin, _i ) {
    return ( _start - ( _margin * ( _am - 1 ) * 0.5 ) + ( _i * _margin ) );
  };
  nk.Math.Attract = function ( _position1, _position2, _velocity, _radius, _strength ) {
    var delta = _position1.SubtractVC( _position2 ), distance = delta.GetMagnitudeSquared();
    if ( distance < _radius * _radius ) {
      var theta = distance.GetAngle();
      _velocity.Add(
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    }
  };
  nk.Math.LikeASquareGrid = function ( _points, _width, _marginX, _marginY ) {
    for ( var i = 0, l = _points.length, columns = ( _width / _marginX ) | 0; i < l; ++i ) {
      _points[ i ].Set(( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    }
  };
  nk.Math.SquareGrid = function ( _width, _height, _marginX, _marginY, _creatableClass ) {
    var grid = [];
    for ( var i = 0, columns = ( _width / _marginX ) | 0, rows = ( _height / _marginY ) | 0, l = columns * rows; i < l; ++i ) {
      grid.push( new _creatableClass(( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY ) );
    }
    return grid;
  };
  Object.defineProperty( nk.Math, 'PII', { writable: false } );
  Object.defineProperty( nk.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( nk.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( nk.Math, 'RADIAN', { writable: false } );
};