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
  //Static

  //Members

  //Methods
  Mouse.prototype.OnMove = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    var element = this.element, pos = this.position;
    pos.Set( _event.pageX, _event.pageY );
    pos.Subtract( element.offsetLeft, element.offsetTop );
    pos.SubtractV( this.offset );
    pos.DivideV( this.scale );
    this.onMove.Dispatch( this.element, { position: pos, native: _event } );
  };
  Mouse.prototype.OnDown = function ( _event ) {
    _event.stopPropagation();
    this.onDown.Dispatch( this.element, { position: this.position, native: _event } );
  };
  Mouse.prototype.OnUp = function ( _event ) {
    _event.stopPropagation();
    this.onUp.Dispatch( this.element, { position: this.position, native: _event } );
  };
  Mouse.prototype.OnLeave = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onLeave.Dispatch( this.element, { position: this.position, native: _event } );
  };
  Mouse.prototype.OnWheel = function ( _event ) {
    this.onWheel.Dispatch( this.element, { position: this.position, native: _event } );
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
