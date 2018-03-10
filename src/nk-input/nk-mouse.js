/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Mouse ( _element, _offsetX, _offsetY ) {

    if ( !( this instanceof Mouse ) ) return new Mouse( _element, _offsetX, _offsetY );
    this.element = _element;
    this.position = Nenkraft.Vector2D();
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.offset = Nenkraft.Vector2D( _offsetX, _offsetY );
    this.eventData = { position: this.position, native: null };

    this.element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
    this.element.addEventListener( 'mousedown', this.OnDown.bind( this ) );
    this.element.addEventListener( 'mouseup', this.OnUp.bind( this ) );
    this.element.addEventListener( 'mouseleave', this.OnLeave.bind( this ) );
    this.element.addEventListener( 'wheel', this.OnWheel.bind( this ), { passive: true } );

    this.onMove = Nenkraft.Event.LocalEvent();
    this.onDown = Nenkraft.Event.LocalEvent();
    this.onUp = Nenkraft.Event.LocalEvent();
    this.onLeave = Nenkraft.Event.LocalEvent();
    this.onWheel = Nenkraft.Event.LocalEvent();
  
  }

  Mouse.prototype = Object.create( null );
  Mouse.prototype.constructor = Mouse;
  // Static

  // Members
  Mouse.prototype.eventData = null;

  // Methods
  Mouse.prototype.OnMove = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.CalculatePosition( _event.pageX, _event.pageY );
    this.eventData.native = _event;
    this.onMove.Dispatch( this.element, this.eventData );
    return false;
  
  };

  Mouse.prototype.OnDown = function ( _event ) {

    _event.stopPropagation();
    this.CalculatePosition( _event.pageX, _event.pageY );
    this.eventData.native = _event;
    this.onDown.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnUp = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onUp.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnLeave = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onLeave.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnWheel = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onWheel.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.CalculatePosition = function( _x, _y ) {

    var pos = this.position;
    pos.Set( _x, _y );
    pos.Subtract( this.element.offsetLeft, this.element.offsetTop );
    pos.SubtractV( this.offset );
    pos.DivideV( this.scale );
  
  };

  Object.defineProperty( Mouse.prototype, 'x', {
    get: function () {

      return this.position.x;
    
    }
  } );
  Object.defineProperty( Mouse.prototype, 'y', {
    get: function () {

      return this.position.y;
    
    }
  } );
  Nenkraft.Input.Mouse = Mouse;

};
