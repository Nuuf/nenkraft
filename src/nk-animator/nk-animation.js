/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Animation ( _controller, _id, _rate ) {

    if ( !( this instanceof Animation ) ) return new Animation( _controller, _id, _rate );
    this.frames = [];
    this.controller = _controller;
    this.sprite = _controller.sprite;
    this.id = _id;
    this.onEnd = Nenkraft.Event.LocalEvent();
    this.onStop = Nenkraft.Event.LocalEvent();
    this.onStart = Nenkraft.Event.LocalEvent();
    if ( _rate != null ) this.rate = _rate;
  
  }

  Animation.prototype = Object.create( null );
  Animation.prototype.constructor = Animation;
  // Static

  // Members
  Animation.prototype.currentFrame = 0;
  Animation.prototype.currentFrameIndex = 0;
  Animation.prototype.playing = false;
  Animation.prototype.id = null;
  Animation.prototype.rate = 60;
  Animation.prototype.timer = 0;
  Animation.prototype.reverse = false;
  Animation.prototype.sprite = null;
  Animation.prototype.overrideFrameRate = false;

  // Methods
  Animation.prototype.CreateFrame = function ( _x, _y, _w, _h, _rate ) {

    _rate = _rate == null ? this.rate : _rate;
    this.frames.push( Nenkraft.Animator.Frame( _x, _y, _w, _h, _rate ) );
  
  };

  Animation.prototype.AddFrame = function( _frame ) {
    
    if ( _frame.rate == null || _frame.rate <= 0 ) {

      _frame.rate = this.rate;
    
    }

    this.frames.push( _frame );
  
  };

  Animation.prototype.GenerateFrames = function ( _frameWidth, _frameHeight, _imageWidth, _imageHeight, _amount, _data ) {

    _data = _data == null ? {} : _data;

    for ( var i = 0, rate, columns = _imageWidth / _imageHeight; i < _amount; ++i ) {

      rate = _data[ i ];
      this.CreateFrame( ( i % columns ) * _frameWidth, ( ( i / columns ) | 0 ) * _frameHeight, _frameWidth, _frameHeight, rate );
    
    }
  
  };

  Animation.prototype.SetFrame = function ( _index ) {

    _index = _index == null ? 0 : _index;
    var frame = this.frames[ _index ];

    if ( frame !== undefined ) {

      this.currentFrame = frame;
      this.currentFrameIndex = _index;
      this.currentFrame.Apply( this.sprite );
    
    }
  
  };

  Animation.prototype.SetFrameById = function( _id ) {

    var index = this.GetFrameById( _id, true );
    this.SetFrame( index );
  
  };

  Animation.prototype.GetFrameById = function( _id, _returnIndex ) {

    for ( var i = 0, frames = this.frames; i < frames.length; ++i ) {

      if ( frames[i].id === _id ) {

        if ( _returnIndex === true ) return i;
        return frames[i];
      
      }
    
    }
  
  };

  Animation.prototype.Start = function () {

    this.playing = true;
    this.onStart.Dispatch();
  
  };

  Animation.prototype.Stop = function () {

    this.playing = false;
    this.onStop.Dispatch();
  
  };

  Animation.prototype.Process = function () {

    if ( this.playing === true ) {

      if ( this.overrideFrameRate === true ) {

        if ( --this.timer <= 0 ) {

          this.timer = this.rate;
          this.NextFrame();
        
        }
      
      } else if ( this.currentFrame.Process() === true ) {

        this.NextFrame();
      
      }
    
    }
  
  };

  Animation.prototype.NextFrame = function() {

    var frames = this.frames, fsl = frames.length, done = false;
    if ( this.reverse === false ) ++this.currentFrameIndex;
    else --this.currentFrameIndex;

    if ( this.currentFrameIndex >= fsl ) {

      this.currentFrameIndex = 0;
      done = true;
        
    } else if ( this.currentFrameIndex < 0 ) {

      this.currentFrameIndex = fsl - 1;
      done = true;
    
    }

    this.currentFrame = frames[ this.currentFrameIndex ];
    this.currentFrame.Apply( this.sprite );
    if ( done === true ) this.onEnd.Dispatch();
  
  };

  Animation.prototype.Clear = function () {

    this.frames = [];
    this.currentFrame = null;
    this.playing = false;
    this.currentFrameIndex = 0;
    this.timer = this.rate;
  
  };

  Animation.prototype.Restart = function ( _index ) {

    this.SetFrame( _index );
    this.ResetAllFrames();
    this.Start();
    this.timer = this.rate;
  
  };

  Animation.prototype.Reset = function() {

    this.SetFrame( 0 );
    this.ResetAllFrames();
    this.timer = this.rate;
    this.playing = false;
  
  };

  Animation.prototype.ResetAllFrames = function () {

    for ( var i = 0, frames = this.frames, l = frames.length, frame; i < l; ++i ) {

      frame = frames[ i ];
      frame.Reset();
    
    }
  
  };

  Nenkraft.Animator.Animation = Animation;

};
