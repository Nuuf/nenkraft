module.exports = function ( nk ) {
  "use strict";
  function Motion ( _id, _target, _propertyString, _value, _duration, _easing ) {
    if ( !( this instanceof Motion ) ) return new Motion();
    this.id = _id;
    this.target = _target;
    this.propertyString = _propertyString;
    this.value = _value;
    this.duration = _duration;
    this.easing = nk.Math.Ease[ _easing === undefined ? this.easing : _easing ];


    this.onStart = new nk.Event.LocalEvent();
    this.onEnd = new nk.Event.LocalEvent();
  }
  Motion.prototype = Object.create( null );
  Motion.prototype.constructor = Motion;
  //Static

  //Members
  Motion.prototype.id = null;
  Motion.prototype.target = null;
  Motion.prototype.easing = 'Linear';
  Motion.prototype.duration = 1000;
  Motion.prototype.time = 0;
  Motion.prototype.value = 1;
  Motion.prototype.startValue = 0;
  Motion.prototype.propertyString = null;
  Motion.prototype.change = 0;
  Motion.prototype.property = null;
  Motion.prototype.propertyObject = null;
  Motion.prototype.running = false;
  //Methods
  Motion.prototype.Start = function () {
    var property = this.propertyString.split( '.' );
    this.property = property[ property.length - 1 ];
    this.propertyObject = nk.Utils.Nested( this.target, this.propertyString, true );
    this.startValue = this.propertyObject[ this.property ];
    this.change = this.value - this.startValue;
    this.time = 0;
    this.running = true;
    this.onStart.Dispatch( this, null );
  };
  Motion.prototype.Process = function () {
    if ( this.running === true ) {
      this.propertyObject[ this.property ] = this.easing( this.time, this.startValue, this.change, this.duration );
      if ( ++this.time >= this.duration ) {
        this.running = false
        this.propertyObject[ this.property ] = this.value;
        this.onEnd.Dispatch( this, null );
      }
    }
  };
  Motion.prototype.Reset = function () {

  };
  nk.Motion = Motion;
};