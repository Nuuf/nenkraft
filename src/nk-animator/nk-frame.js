/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Frame ( _x, _y, _w, _h, _rate, _id ) {

    if ( !( this instanceof Frame ) ) return new Frame( _x, _y, _w, _h, _rate, _id );
    this.rate = _rate;
    this.timer = _rate;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;

    if ( _id != null ) {

      this.id = _id;
    
    }
  
  }

  Frame.prototype = Object.create( null );
  Frame.prototype.constructor = Frame;
  // Static

  // Members
  Frame.prototype.id = null;
  Frame.prototype.x = 0;
  Frame.prototype.y = 0;
  Frame.prototype.w = 0;
  Frame.prototype.h = 0;
  Frame.prototype.rate = 0;
  Frame.prototype.timer = 0;
  Frame.prototype.nextFrameIndex = null;

  // Methods
  Frame.prototype.Process = function () {

    if ( this.timer-- <= 0 ) {

      this.Reset();
      return true;
    
    }

    return false;
  
  };

  Frame.prototype.Apply = function ( _sprite ) {

    _sprite.ClipReconfigure( this.x, this.y, this.w, this.h );
  
  };

  Frame.prototype.Reset = function () {

    this.timer = this.rate;
  
  };

  Nenkraft.Animator.Frame = Frame;

};
