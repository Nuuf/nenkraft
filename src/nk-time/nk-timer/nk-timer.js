module.exports = function ( Nenkraft ) {
  'use strict';
  function Timer ( _stopTime ) {
    if ( !( this instanceof Timer ) ) return new Timer( _stopTime );
    this.stopTime = Math.round( _stopTime === undefined ? null : _stopTime );
    this.onStop = new Nenkraft.LocalEvent();
    this.onFinish = new Nenkraft.LocalEvent();
    this.onStart = new Nenkraft.LocalEvent();
    this.onReset = new Nenkraft.LocalEvent();
    this.onPause = new Nenkraft.LocalEvent();
    this.onResume = new Nenkraft.LocalEvent();
  }
  Timer.prototype = Object.create( null );
  Timer.prototype.constructor = Timer;
  //Static

  //Members
  Timer.prototype.time = 0;
  Timer.prototype.isRunning = false;
  Timer.prototype.canResume = false;
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
    this.canResume = false;
    this.onStart.Dispatch( this, { stopTime: this.stopTime } );
  };
  Timer.prototype.Stop = function () {
    if ( this.isRunning === true ) {
      this.isRunning = false;
      this.onStop.Dispatch( this, null );
    }
  };
  Timer.prototype.Pause = function () {
    if ( this.isRunning === true && this.canResume === false ) {
      this.isRunning = false;
      this.canResume = true;
      this.onPause.Dispatch( this, null );
    }
  };
  Timer.prototype.Resume = function () {
    if ( this.canResume === true ) {
      this.isRunning = true;
      this.canResume = false;
      this.onResume.Dispatch( this, null );
    }
  };
  Timer.prototype.Process = function () {
    if ( this.time < this.stopTime && this.isRunning === true ) {
      if ( ++this.time >= this.stopTime ) {
        this.isRunning = false;
        this.count++;
        this.onFinish.Dispatch( this, null );
      }
    }
  };
  Nenkraft.Time.Timer = Timer;
  Nenkraft.Timer = Timer;
};