module.exports = function ( nk ) {
  "use strict";
  function Animation ( _controller, _id, _rate ) {
    if ( !( this instanceof Animation ) ) return new Animation( _controller, _id );
    this.frames = [];
    this.controller = _controller
    this.id = _id;
    if ( _rate !== undefined ) this.rate = _rate;
  }
  Animation.prototype = Object.create( null );
  Animation.prototype.constructor = Animation;
  //Static

  //Members
  Animation.prototype.currentFrame = 0;
  Animation.prototype.currentFrameIndex = 0;
  Animation.prototype.playing = false;
  Animation.prototype.id = null;
  Animation.prototype.rate = 60;
  //Methods
  Animation.prototype.AddFrame = function ( _x, _y, _w, _h, _rate ) {
    _rate = _rate === undefined ? this.rate : _rate;
    this.frames.push( new nk.Animator.Frame( _x, _y, _w, _h, _rate, this.controller.sprite ) );
  };
  Animation.prototype.SetFrame = function ( _id ) {
    this.currentFrame = _id;
    this.playing = false;
  };
  Animation.prototype.Start = function () {
    this.playing = true;
  };
  Animation.prototype.Stop = function () {
    this.playing = false;
  };
  Animation.prototype.Process = function () {
    if ( this.playing === true ) {
      var currentFrame = this.currentFrame, frames = this.frames;
      if ( currentFrame.Process() === true ) {
        var currentFrameIndex = ++this.currentFrameIndex;
        if ( currentFrameIndex >= frames.length ) {
          currentFrameIndex = this.currentFrameIndex = 0;
        }
        this.currentFrame = frames[ currentFrameIndex ];
        this.currentFrame.Apply();
      }
    }
  };
  Animation.prototype.Clear = function () {
    this.frames = [];
    delete this.currentFrame;
    delete this.playing;
    delete this.currentFrameIndex;
  };
  Animation.prototype.Restart = function () {
    this.currentFrameIndex = 0;
    this.currentFrame = this.frames[ 0 ];
    this.currentFrame.Apply();
    this.ResetAllFrames();
    this.Start();
  };
  Animation.prototype.ResetAllFrames = function () {
    for ( var i = 0, frames = this.frames, l = frames.length, frame; i < l; ++i ) {
      frame = frames[ i ];
      frame.Reset();
    }
  };

  nk.Animator.Animation = Animation;
};