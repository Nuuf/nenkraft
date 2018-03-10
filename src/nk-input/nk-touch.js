/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Touch ( _element, _offsetX, _offsetY ) {

    if ( !( this instanceof Touch ) ) return new Touch( _element, _offsetX, _offsetY );
    this.element = _element;
    this.position = Nenkraft.Vector2D();
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.offset = Nenkraft.Vector2D( _offsetX, _offsetY );
    this.eventData = { position: this.position, native: null };

    this.element.addEventListener( 'touchmove', this.OnMove.bind( this ) );
    this.element.addEventListener( 'touchstart', this.OnStart.bind( this ), { passive: true } );
    this.element.addEventListener( 'touchend', this.OnEnd.bind( this ) );
    this.element.addEventListener( 'touchcancel', this.OnCancel.bind( this ) );

    this.onMove = Nenkraft.Event.LocalEvent();
    this.onStart = Nenkraft.Event.LocalEvent();
    this.onEnd = Nenkraft.Event.LocalEvent();
    this.onCancel = Nenkraft.Event.LocalEvent();
  
  }

  Touch.prototype = Object.create( null );
  Touch.prototype.constructor = Touch;
  // Static

  // Members
  Touch.prototype.eventData = null;

  // Methods
  Touch.prototype.OnMove = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.CalculatePosition( _event.touches.item( 0 ).pageX, _event.touches.item( 0 ).pageY );
    this.eventData.native = _event;
    this.onMove.Dispatch( this.element, this.eventData );
    return false;
  
  };

  Touch.prototype.OnStart = function ( _event ) {

    _event.stopPropagation();
    this.CalculatePosition( _event.touches.item( 0 ).pageX, _event.touches.item( 0 ).pageY );
    this.eventData.native = _event;
    this.onStart.Dispatch( this.element, this.eventData );
  
  };

  Touch.prototype.OnEnd = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onEnd.Dispatch( this.element, this.eventData );
  
  };

  Touch.prototype.OnCancel = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onCancel.Dispatch( this.element, this.eventData );
  
  };

  Touch.prototype.CalculatePosition = function( _x, _y ) {

    var pos = this.position;
    pos.Set( _x, _y );
    pos.Subtract( this.element.offsetLeft, this.element.offsetTop );
    pos.SubtractV( this.offset );
    pos.DivideV( this.scale );
  
  };

  Object.defineProperty( Touch.prototype, 'x', {
    get: function () {

      return this.position.x;
    
    }
  } );
  Object.defineProperty( Touch.prototype, 'y', {
    get: function () {

      return this.position.y;
    
    }
  } );

  Nenkraft.Input.Touch = Touch;

};
