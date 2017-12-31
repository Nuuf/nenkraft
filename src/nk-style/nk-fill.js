/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {

  'use strict';
  function Fill ( _props ) {

    if ( !( this instanceof Fill ) ) return new Fill( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Fill.prototype = Object.create( null );
  Fill.prototype.constructor = Fill;
  //Static

  //Members
  Fill.prototype.color = '#444499';
  Fill.prototype.applied = true;
  //Methods
  Fill.prototype.Apply = function ( _rc ) {

    _rc.fillStyle = this.color;
  
  };

  Nenkraft.Style.Fill = Fill;

};
