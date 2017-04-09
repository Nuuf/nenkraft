module.exports = function () {
  "use strict";
  function Ticker( _onProcess, _tps, _doNotStart ) {
    if ( this instanceof Ticker ) {
      if ( typeof _onProcess !== 'function' ) throw new Error( 'A onProcess function is required!' );
      this.intervalId = null;
      this.delta = 0;
      this.then = 0;
      this.now = 0;
      this.desiredRate = _tps === undefined ? 16.66 : 1000 / _tps;
      this.supplyDelta = true;
      this.onProcess = _onProcess;
      if ( _doNotStart === undefined ) {
        this.Start();
      }
    }
    else return new Ticker( _tps );
  }
  Ticker.prototype = Object.create( null );
  Ticker.prototype.constructor = Ticker;
  Ticker.prototype.Process = function () {
    this.ComputeDelta();
    this.onProcess( this.delta );
  };
  Ticker.prototype.ComputeDelta = function () {
    this.now = new Date().getTime();
    this.delta = this.now - this.then;
    this.then = this.now;
  };
  Ticker.prototype.GetTPS = function () {
    return nk.Math.PR( 1 / this.delta * 1000, 2 );
  };
  Ticker.prototype.Start = function ( _force ) {
    if ( this.intervalId !== null ) {
      if ( _force === true ) {
        this.Stop();
        this.intervalId = setInterval( this.Process, this.desiredRate );
      }
      else {
        console.warn( 'Ticker already running!' );
      }
    }
    else {
      this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
    }
  };
  Ticker.prototype.Stop = function () {
    clearInterval( this.intervalId );
    this.intervalId = null;
  };
  nk.Time.Ticker = Ticker;
  nk.Ticker = Ticker;
};