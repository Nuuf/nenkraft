( function ()
{
    "use strict";
    nk.Math.PII = Math.PI * 2;
    nk.Math.DEGREES_TO_RADIANS = Math.PI / 180;
    nk.Math.RADIANS_TO_DEGREES = 180 / Math.PI;
    nk.Math.DegreesToRadians = function ( _a )
    {
        return _a * nk.Math.DEGREES_TO_RADIANS;
    };
    nk.Math.DTR = nk.Math.DegreesToRadians;
    nk.Math.RadiansToDegrees = function ( _a )
    {
        return _a * nk.Math.RADIANS_TO_DEGREES;
    };
    nk.Math.RTD = nk.Math.RadiansToDegrees;
    nk.Math.PrecisionRound = function ( _val, _prec )
    {
        var dvis = Math.pow( 10, _p );
        return Math.round( dvis * _val ) / dvis;
    };
    nk.Math.PR = nk.Math.PrecisionRound;
    nk.Math.Spread = function ( _start, _am, _margin, _i )
    {
        return ( _start - ( _margin * ( _am - 1 ) * 0.5 ) + ( _i * _margin ) );
    };
    Object.defineProperty( nk.Math, 'PII', { writable: false });
    Object.defineProperty( nk.Math, 'DEGREES_TO_RADIANS', { writable: false });
    Object.defineProperty( nk.Math, 'RADIANS_TO_DEGREES', { writable: false });
}() );