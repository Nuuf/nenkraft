/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Spritesheet ( _basicTexture, _data ) {

    if ( !( this instanceof Spritesheet ) ) return new Spritesheet( _basicTexture, _data );

    this.id = _basicTexture.id;
    this.basicTexture = _basicTexture;
    this.data = _data;
    this.frameCache = new Nenkraft.Utils.Cache( Nenkraft.Animator.Frame );
  
  }

  Spritesheet.prototype = Object.create( null );
  Spritesheet.prototype.constructor = Spritesheet;
  // Static

  // Members
  Spritesheet.prototype.id = null;
  Spritesheet.prototype.basicTexture = null;
  Spritesheet.prototype.data = null;
  Spritesheet.prototype.frameCache = null;

  // Methods
  Spritesheet.prototype.GenerateFrames = function() {

    var data = this.data, frames = data.frames, frameTags = data.meta.frameTags;

    for ( var i = 0, l = frames.length, frame, frameData, frameTag; i < l; ++i ) {

      frame = frames[i];
      frameData = frame.frame;
      frameTag = frameTags[i];
      this.frameCache.Store( new Nenkraft.Animator.Frame(
        frameData.x,
        frameData.y,
        frameData.w,
        frameData.h,
        frame.duration,
        frameTag ? frameTag.name : null
      ) ); 

    }
  
  };

  Spritesheet.prototype.GetFrameById = function( _id ) {

    return this.frameCache.GetById( _id );
  
  };

  Nenkraft.Texture.Spritesheet = Spritesheet;
  Nenkraft.Spritesheet = Spritesheet;

};
