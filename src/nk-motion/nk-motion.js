/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Motion ( _id, _target, _propertyString, _value, _duration, _easing ) {

    if ( !( this instanceof Motion ) ) return new Motion( _id, _target, _propertyString, _value, _duration, _easing );
    this.id = _id;
    this.target = _target;
    this.propertyString = _propertyString;
    if ( _value !== undefined ) this.value = _value;
    if ( _duration !== undefined ) this.duration = _duration;
    this.easing = Nenkraft.Math.Ease[ _easing === undefined ? Motion.DEFAULT_EASING : _easing ];
    this.onStart = new Nenkraft.Event.LocalEvent();
    this.onEnd = new Nenkraft.Event.LocalEvent();
    this.onStop = new Nenkraft.Event.LocalEvent();
    this.onReconfigure = new Nenkraft.Event.LocalEvent();
    this.onReset = new Nenkraft.Event.LocalEvent();
  
  }

  Motion.prototype = Object.create( null );
  Motion.prototype.constructor = Motion;
  // Static
  Motion.DEFAULT_EASING = 'Linear';
  // Members
  Motion.prototype.id = null;
  Motion.prototype.target = null;
  Motion.prototype.easing = null;
  Motion.prototype.duration = 1000;
  Motion.prototype.time = 0;
  Motion.prototype.value = 1;
  Motion.prototype.startValue = 0;
  Motion.prototype.propertyString = null;
  Motion.prototype.change = 0;
  Motion.prototype.property = null;
  Motion.prototype.propertyObject = null;
  Motion.prototype.running = false;

  // Methods
  Motion.prototype.Start = function () {

    var property = this.propertyString.split( '.' );
    this.property = property[ property.length - 1 ];
    this.propertyObject = Nenkraft.Utils.Nested( this.target, this.propertyString, true );
    this.startValue = this.propertyObject[ this.property ];
    this.change = this.value - this.startValue;
    this.time = 0;
    this.running = true;
    this.onStart.Dispatch( this, null );
  
  };

  Motion.prototype.Stop = function () {

    delete this.property;
    delete this.propertyObject;
    delete this.startValue;
    delete this.change;
    delete this.time;
    delete this.running;
    this.onStop.Dispatch( this, null );
  
  };

  Motion.prototype.Process = function () {

    if ( this.running === true ) {

      this.propertyObject[ this.property ] = this.easing( this.time, this.startValue, this.change, this.duration );

      if ( ++this.time >= this.duration ) {

        this.running = false;
        this.propertyObject[ this.property ] = this.value;
        this.onEnd.Dispatch( this, null );
      
      }
    
    }
  
  };

  Motion.prototype.Reconfigure = function ( _propertyString, _value, _duration, _easing ) {

    if ( _propertyString !== undefined ) this.propertyString = _propertyString;
    this.value = _value;
    this.duration = _duration;
    this.easing = Nenkraft.Math.Ease[ _easing === undefined ? Motion.DEFAULT_EASING : _easing ];
    this.onReconfigure.Dispatch( this, null );
  
  };

  Motion.prototype.Reset = function () {

    if ( this.propertyObject === null || this.property === null ) return false;
    this.propertyObject[ this.property ] = this.startValue;
    delete this.property;
    delete this.propertyObject;
    delete this.startValue;
    delete this.change;
    delete this.time;
    delete this.running;
    this.onReset.Dispatch( this, null );
  
  };

  Nenkraft.Motion = Motion;

};
