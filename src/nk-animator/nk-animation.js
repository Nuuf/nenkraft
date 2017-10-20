module.exports = function ( Nenkraft ) {
  'use strict';
  function Animation ( _controller, _id, _rate ) {
    if ( !( this instanceof Animation ) ) return new Animation( _controller, _id );
    this.frames = [];
    this.controller = _controller;
    this.id = _id;
    this.onEnd = new Nenkraft.Event.LocalEvent();
    this.onStop = new Nenkraft.Event.LocalEvent();
    this.onStart = new Nenkraft.Event.LocalEvent();
    if ( _rate != undefined ) this.rate = _rate;
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
  Animation.prototype.reverse = false;
  //Methods
  Animation.prototype.AddFrame = function ( _x, _y, _w, _h, _rate ) {
    _rate = _rate === undefined ? this.rate : _rate;
    this.frames.push( new Nenkraft.Animator.Frame( _x, _y, _w, _h, _rate, this.controller.sprite ) );
  };
  Animation.prototype.GenerateFrames = function ( _frameWidth, _frameHeight, _textureWidth, _textureHeight, _amount, _data ) {
    for ( var i = 0, rate, columns = _textureWidth / _textureHeight; i < _amount; ++i ) {
      rate = _data[ i ];
      this.AddFrame( ( i % columns ) * _frameWidth, ( ( i / columns ) | 0 ) * _frameHeight, _frameWidth, _frameHeight, rate );
    }
  };
  Animation.prototype.SetFrame = function ( _index ) {
    _index = _index === undefined ? 0 : _index;
    var frame = this.frames[ _index ];
    if ( frame !== undefined ) {
      this.currentFrame = frame;
      this.currentFrameIndex = _index;
      this.currentFrame.Apply();
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
      var currentFrame = this.currentFrame, frames = this.frames, done = false;
      if ( currentFrame.Process() === true ) {
        var currentFrameIndex;
        if ( this.reverse === false ) currentFrameIndex = ++this.currentFrameIndex;
        else currentFrameIndex = --this.currentFrameIndex;
        if ( currentFrameIndex >= frames.length ) {
          currentFrameIndex = this.currentFrameIndex = 0;
          done = true;
        }
        else if ( currentFrameIndex < 0 ) {
          currentFrameIndex = this.currentFrameIndex = this.frames.length - 1;
          done = true;
        }
        this.currentFrame = frames[ currentFrameIndex ];
        this.currentFrame.Apply();
        if ( done === true ) this.onEnd.Dispatch();
      }
    }
  };
  Animation.prototype.Clear = function () {
    this.frames = [];
    delete this.currentFrame;
    delete this.playing;
    delete this.currentFrameIndex;
  };
  Animation.prototype.Restart = function ( _index ) {
    this.SetFrame( _index );
    this.ResetAllFrames();
    this.Start();
  };
  Animation.prototype.ResetAllFrames = function () {
    for ( var i = 0, frames = this.frames, l = frames.length, frame; i < l; ++i ) {
      frame = frames[ i ];
      frame.Reset();
    }
  };

  Nenkraft.Animator.Animation = Animation;
};
