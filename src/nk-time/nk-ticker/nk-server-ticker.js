/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function ServerTicker ( _onProcess, _rate, _halt ) {

    if ( !( this instanceof ServerTicker ) ) return new ServerTicker( _onProcess, _rate, _halt );
    if ( typeof _onProcess !== 'function' ) throw new Error( 'ServerTicker: An onProcess function is required!' );
    this.SetDesiredRate( _rate );
    this.onProcess = _onProcess;

    if ( _halt == undefined || _halt === false ) {

      this.Start();
    
    }
  
  }

  ServerTicker.prototype = Object.create( null );
  ServerTicker.prototype.constructor = ServerTicker;
  // Static
  ServerTicker.LOG = true;

  ServerTicker.Log = function () {

    if ( ServerTicker.LOG === false ) return;
    console.log.apply( null, arguments );
  
  };

  // Members
  ServerTicker.prototype.intervalId = null;
  ServerTicker.prototype.timeoutId = null;
  ServerTicker.prototype.immediateId = null;
  ServerTicker.prototype.delta = 0;
  ServerTicker.prototype.then = 0;
  ServerTicker.prototype.now = 0;
  ServerTicker.prototype.desiredRate = 0;
  ServerTicker.prototype.supplyDelta = true;

  // Methods
  ServerTicker.prototype.Process = function () {

    this.onProcess( this.ComputeDelta() );
  
  };

  ServerTicker.prototype.ComputeDelta = function () {

    this.now = Date.now();
    this.delta = this.now - this.then;
    this.then = this.now;

    return this.delta;
  
  };

  ServerTicker.prototype.GetTPS = function () {

    return Nenkraft.Math.PR( 1 / this.delta * 1000, 2 );
  
  };

  ServerTicker.prototype.SetDesiredRate = function ( _rate ) {

    this.desiredRate = _rate === undefined ? 16.66 : 1000 / _rate;
  
  };

  ServerTicker.prototype.Start = function ( _force ) {

    if ( this.intervalId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      
      } else {

      }
    
    } else {

      this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      
    }
  
  };

  ServerTicker.prototype.Stop = function () {

    if ( this.intervalId !== null ) {

      clearInterval( this.intervalId );
      this.intervalId = null;
    
    }
  
  };

  Nenkraft.Time.ServerTicker = ServerTicker;
  Nenkraft.ServerTicker = ServerTicker;

};
