/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Shadow ( _props ) {

    if ( !( this instanceof Shadow ) ) return new Shadow( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Shadow.prototype = Object.create( null );
  Shadow.prototype.constructor = Shadow;
  // Static

  // Members
  Shadow.prototype.color = '#000000';
  Shadow.prototype.blur = 5;
  Shadow.prototype.offsetX = 0;
  Shadow.prototype.offsetY = 0;
  Shadow.prototype.applied = false;

  // Methods
  Shadow.prototype.Apply = function ( _rc ) {

    _rc.shadowColor = this.color;
    _rc.shadowBlur = this.blur;
    _rc.shadowOffsetX = this.offsetX;
    _rc.shadowOffsetY = this.offsetY;
  
  };

  Nenkraft.Style.Shadow = Shadow;

};
