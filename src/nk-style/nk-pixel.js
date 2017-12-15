/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Pixel ( _props ) {
    if ( !( this instanceof Pixel ) ) return new Pixel( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  }
  Pixel.prototype = Object.create( null );
  Pixel.prototype.constructor = Pixel;
  //Static

  //Members
  Pixel.prototype.color = '#000000';
  Pixel.prototype.size = 1.0;
  //Methods
  Nenkraft.Style.Pixel = Pixel;
};