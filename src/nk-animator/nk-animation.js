module.exports = function ( nk ) {
  "use strict";
  function Animation () {
    if ( !( this instanceof Animation ) ) return new Animation();
    this.frames = [];
  }
  Animation.prototype = Object.create( null );
  Animation.prototype.constructor = Animation;
  //Static

  //Members
  Animation.prototype.currentFrame = 0;
  Animation.prototype.playing = false;
  //Methods
  Animation.prototype.SetFrame = function ( _id ) {
    this.currentFrame = _id;
    this.playing = false;
  };
  Animation.prototype.Start = function ( _id ) {

  };
  Animation.prototype.Process = function () {

  };
  Animation.prototype.Clear = function () {
    this.frames = [];
    delete this.currentFrame;
    delete this.playing;
  };

  nk.Animator.Animation = Animation;
};