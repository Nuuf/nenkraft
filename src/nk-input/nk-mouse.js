/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Mouse ( _element, _offsetX, _offsetY ) {

    if ( !( this instanceof Mouse ) ) return new Mouse( _element, _offsetX, _offsetY );
    this.element = _element;
    this.position = new Nenkraft.Vector2D();
    this.scale = new Nenkraft.Vector2D( 1, 1 );
    this.offset = new Nenkraft.Vector2D( _offsetX, _offsetY );
    this.eventData = { position: this.position, native: null };

    this.element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
    this.element.addEventListener( 'mousedown', this.OnDown.bind( this ) );
    this.element.addEventListener( 'mouseup', this.OnUp.bind( this ) );
    this.element.addEventListener( 'mouseleave', this.OnLeave.bind( this ) );
    this.element.addEventListener( 'wheel', this.OnWheel.bind( this ), { passive: true } );

    this.onMove = new Nenkraft.Event.LocalEvent();
    this.onDown = new Nenkraft.Event.LocalEvent();
    this.onUp = new Nenkraft.Event.LocalEvent();
    this.onLeave = new Nenkraft.Event.LocalEvent();
    this.onWheel = new Nenkraft.Event.LocalEvent();
  
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
    var element = this.element, pos = this.position;
    pos.Set( _event.pageX, _event.pageY );
    pos.Subtract( element.offsetLeft, element.offsetTop );
    pos.SubtractV( this.offset );
    pos.DivideV( this.scale );
    this.eventData.native = _event;
    this.onMove.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnDown = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onDown.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnUp = function ( _event ) {

    _event.stopPropagation();
    this.eventData.native = _event;
    this.onUp.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnLeave = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.eventData.native = _event;
    this.onLeave.Dispatch( this.element, this.eventData );
  
  };

  Mouse.prototype.OnWheel = function ( _event ) {

    this.eventData.native = _event;
    this.onWheel.Dispatch( this.element, this.eventData );
  
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
