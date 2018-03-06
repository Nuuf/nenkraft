/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  Nenkraft.Math.Ease = Object.create( null );

  var Sin = Math.sin;
  var Cos = Math.cos;
  var PI = Math.PI;

  Nenkraft.Math.Ease.Linear = function ( _time, _startValue, _amplitude, _duration ) {

    return _amplitude * _time / _duration + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadIn = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration;
    return _amplitude * _time * _time + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadOut = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration;
    return -_amplitude * _time * ( _time - 2 ) + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadInOut = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration * 0.5;
    if ( _time < 1 ) return _amplitude * 0.5 * _time * _time + _startValue;
    _time--;
    return -_amplitude * 0.5 * ( _time * ( _time - 2 ) - 1 ) + _startValue;
  
  };

  Nenkraft.Math.Ease.SineIn = function ( _time, _startValue, _amplitude, _duration ) {

    return -_amplitude * Cos( _time / _duration * ( PI * 0.5 ) ) + _amplitude + _startValue;
  
  };

  Nenkraft.Math.Ease.SineOut = function ( _time, _startValue, _amplitude, _duration ) {

    return _amplitude * Sin( _time / _duration * ( PI * 0.5 ) ) + _startValue;
  
  };

  Nenkraft.Math.Ease.SineInOut = function ( _time, _startValue, _amplitude, _duration ) {

    return -_amplitude * 0.5 * ( Cos( PI * _time / _duration ) - 1 ) + _startValue;
  
  };

  Nenkraft.Ease = Nenkraft.Math.Ease;

};
