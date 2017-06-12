module.exports = function () {
  'use strict';
  function Timer ( _stopTime ) {
    if ( !( this instanceof Timer ) ) return new Timer( _stopTime );
    this.stopTime = Math.round( _stopTime === undefined ? null : _stopTime );
    this.onStop = new nk.LocalEvent();
    this.onStart = new nk.LocalEvent();
    this.onReset = new nk.LocalEvent();
  }
  Timer.prototype = Object.create( null );
  Timer.prototype.constructor = Timer;
  //Static

  //Members
  Timer.prototype.time = 0;
  Timer.prototype.isRunning = false;
  Timer.prototype.count = 0;
  //Methods
  Timer.prototype.Reset = function ( _stopTime ) {
    this.onReset.Dispatch( this, null );
    this.count = 0;
  };
  Timer.prototype.Start = function ( _stopTime ) {
    this.stopTime = Math.round( _stopTime === undefined ? this.stopTime : _stopTime );
    if ( this.stopTime <= 0 ) return;
    this.time = 0;
    this.isRunning = true;
    this.onStart.Dispatch( this, { stopTime: this.stopTime } );
  };
  Timer.prototype.Process = function () {
    if ( this.time < this.stopTime && this.isRunning === true ) {
      if ( ++this.time >= this.stopTime ) {
        this.isRunning = false;
        this.count++;
        this.onStop.Dispatch( this, null );
      }
    }
  };
  nk.Time.Timer = Timer;
  nk.Timer = Timer;
};