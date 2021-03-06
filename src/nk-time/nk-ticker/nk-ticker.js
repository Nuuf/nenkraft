/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Ticker ( _onProcess, _rate, _halt ) {

    if ( !( this instanceof Ticker ) ) return new Ticker( _onProcess, _rate, _halt );
    if ( typeof _onProcess !== 'function' ) throw new Error( 'Ticker: An onProcess function is required!' );
    this.SetDesiredRate( _rate );
    this.onProcess = _onProcess;

    if ( _halt == undefined || _halt === false ) {

      this.StartAF();
    
    }
  
  }

  Ticker.prototype = Object.create( null );
  Ticker.prototype.constructor = Ticker;
  // Static
  Ticker.LOG = true;
  Ticker.GLOBAL_CSS = 'background-color:black;font-family:Arial;font-size:16px;';

  Ticker.Log = function () {

    if ( Ticker.LOG === false ) return;
    console.log.apply( null, arguments );
  
  };

  // Members
  Ticker.prototype.intervalId = null;
  Ticker.prototype.afId = null;
  Ticker.prototype.delta = 0;
  Ticker.prototype.then = 0;
  Ticker.prototype.now = 0;
  Ticker.prototype.desiredRate = 0;
  Ticker.prototype.supplyDelta = true;

  // Methods
  Ticker.prototype.Process = function () {

    this.onProcess( this.ComputeDelta() );
  
  };

  Ticker.prototype.ProcessAF = function () {

    this.ComputeDelta();
    this.onProcess( this.delta );
    if ( this.afId === null ) return;
    this.afId = requestAnimationFrame( this.ProcessAF );
  
  };

  Ticker.prototype.ComputeDelta = function () {

    this.now = Date.now();
    this.delta = this.now - this.then;
    this.then = this.now;

    return this.delta;
  
  };

  Ticker.prototype.GetTPS = function () {

    return Nenkraft.Math.PR( 1 / this.delta * 1000, 2 );
  
  };

  Ticker.prototype.SetDesiredRate = function ( _rate ) {

    this.desiredRate = _rate === undefined ? 16.66 : 1000 / _rate;
  
  };

  Ticker.prototype.Start = function ( _force ) {

    if ( this.afId !== null ) {

      Ticker.Log( '%cTicker: RAF is running!', 'color:red;'.concat( Ticker.GLOBAL_CSS ) );
      return null;
    
    }

    if ( this.intervalId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
        Ticker.Log( '%cTicker: Starting interval!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
      else {

        Ticker.Log( '%cTicker: Interval already running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
    
    }
    else {

      this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      Ticker.Log( '%cTicker: Starting interval!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Ticker.prototype.StartAF = function ( _force ) {

    if ( this.intervalId !== null ) {

      Ticker.Log( '%cTicker: Interval is running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      return null;
    
    }

    if ( this.afId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.ProcessAF = this.ProcessAF.bind( this );
        this.afId = requestAnimationFrame( this.ProcessAF );
        Ticker.Log( '%cTicker: Starting RAF!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
      else {

        Ticker.Log( '%cTicker: RAF already running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
    
    }
    else {

      this.ProcessAF = this.ProcessAF.bind( this );
      this.afId = requestAnimationFrame( this.ProcessAF );
      Ticker.Log( '%cTicker: Starting RAF!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Ticker.prototype.Stop = function () {

    if ( this.intervalId !== null ) {

      clearInterval( this.intervalId );
      this.intervalId = null;
      Ticker.Log( '%cTicker: Stopping interval!', 'color:cyan;'.concat( Ticker.GLOBAL_CSS ) );
    
    }

    if ( this.afId !== null ) {

      cancelAnimationFrame( this.afId );
      this.afId = null;
      Ticker.Log( '%cTicker: Stopping RAF!', 'color:cyan;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Nenkraft.Time.Ticker = Ticker;
  Nenkraft.Ticker = Ticker;

};
