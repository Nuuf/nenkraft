/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  function Debug () {

    throw new Error( 'Cannot be instantiated' );
  
  }

  Debug.Draw = {};
  Debug.Draw.AABB2D = function ( _rc, _aabb, _options ) {

    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.globalAlpha = 0.1;
    _rc.strokeStyle = 'rgba(100, 0, 100, 1)';
    _rc.fillStyle = 'rgba(0, 100, 0, 1)';
    if ( _options && _options.strokeStyle ) {

      _rc.strokeStyle = _options.strokeStyle;
    
    }

    if ( _options && _options.fillStyle ) {

      _rc.fillStyle = _options.fillStyle;
    
    }

    _rc.lineWidth = 2;
    _rc.beginPath();
    _rc.moveTo( _aabb.tl.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.br.y );
    _rc.lineTo( _aabb.tl.x, _aabb.br.y );
    _rc.closePath();
    if ( _options && _options.noStroke ) {

    } else {

      _rc.stroke();
    
    }

    if ( _options && _options.noFill ) {

    } else {

      _rc.fill();
    
    }
  
  };

  Nenkraft.Debug = Debug;

};
