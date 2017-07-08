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
  Nenkraft.Math.Attract = function ( _target, _attractor, _velocity, _radius, _strength ) {
    var delta = _attractor.SubtractVC( _target ), distance = delta.GetMagnitudeSquared();
    if ( distance < _radius * _radius ) {
      var theta = delta.GetAngle();
      _velocity.Add(
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    }
  };
  Nenkraft.Math.Repel = function ( _target, _repeller, _velocity, _radius, _strength ) {
    var delta = _target.SubtractVC( _repeller ), distance = delta.GetMagnitudeSquared();
    if ( distance < _radius * _radius ) {
      var theta = delta.GetAngle();
      _velocity.Add(
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    }
  };
  Nenkraft.Math.LikeASquareGrid = function ( _points, _width, _marginX, _marginY ) {
    for ( var i = 0, l = _points.length, columns = ( _width / _marginX ) | 0; i < l; ++i ) {
      _points[ i ].Set(( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    }
  };
  Nenkraft.Math.SquareGrid = function ( _width, _height, _marginX, _marginY, _creatableClass ) {
    var grid = [];
    for ( var i = 0, columns = ( _width / _marginX ) | 0, rows = ( _height / _marginY ) | 0, l = columns * rows; i < l; ++i ) {
      grid.push( new _creatableClass(( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY ) );
    }
    return grid;
  };
  Object.defineProperty( Nenkraft.Math, 'PII', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIAN', { writable: false } );
};