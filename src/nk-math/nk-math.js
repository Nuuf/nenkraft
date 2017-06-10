module.exports = function ( nk ) {
  "use strict";
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
    var delta = _position1.SubtractVC( _position2 );
    var distance = delta.GetMagnitudeSquared();
    if ( distance < _radius * _radius ) {
      var theta = distance.GetAngle();
      _velocity.Add(
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    }
  };
  Object.defineProperty( nk.Math, 'PII', { writable: false } );
  Object.defineProperty( nk.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( nk.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( nk.Math, 'RADIAN', { writable: false } );
};