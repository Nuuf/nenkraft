/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Debug () {
    throw new Error( 'Cannot be instantiated' );
  }
  Debug.Draw = {};
  Debug.Draw.AABB2D = function ( _rc, _aabb ) {
    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.strokeStyle = 'rgba(255, 0, 255, 1)';
    _rc.fillStyle = 'rgba(0, 255, 0, 0.1)';
    _rc.lineWidth = 2;
    _rc.beginPath();
    _rc.moveTo( _aabb.tl.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.br.y );
    _rc.lineTo( _aabb.tl.x, _aabb.br.y );
    _rc.closePath();
    _rc.stroke();
    _rc.fill();
  };
  Nenkraft.Debug = Debug;
};
