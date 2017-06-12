module.exports = function () {
  'use strict';
  function Mouse ( _element, _offsetX, _offsetY ) {
    if ( !( this instanceof Mouse ) ) return new Mouse( _element, _offsetX, _offsetY );
    this.element = _element;
    this.position = new nk.Vector2D();
    this.scale = new nk.Vector2D( 1, 1 );
    this.anchor = new nk.Vector2D();
    this.offset = new nk.Vector2D( _offsetX, _offsetY );

    this.element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
    this.element.addEventListener( 'mousedown', this.OnDown.bind( this ) );
    this.element.addEventListener( 'mouseup', this.OnUp.bind( this ) );
    this.element.addEventListener( 'mouseleave', this.OnLeave.bind( this ) );

    this.onMove = new nk.Event.LocalEvent();
    this.onDown = new nk.Event.LocalEvent();
    this.onUp = new nk.Event.LocalEvent();
    this.onLeave = new nk.Event.LocalEvent();
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
    this.onMove.Dispatch( this, pos );
  };
  Mouse.prototype.OnDown = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onDown.Dispatch( this, this.position );
  };
  Mouse.prototype.OnUp = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onUp.Dispatch( this, this.position );
  };
  Mouse.prototype.OnLeave = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onLeave.Dispatch( this, this.position );
  };
  nk.Input.Mouse = Mouse;
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
};