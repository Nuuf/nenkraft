module.exports = function () {
  "use strict";
  function Mouse( _element ) {
    if ( this instanceof Mouse ) {
      this.element = _element;
      this.position = new nk.Vector2D( 0, 0 );
      this.element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
      this.element.addEventListener( 'mousedown', this.OnDown.bind( this ) );
      this.element.addEventListener( 'mouseup', this.OnUp.bind( this ) );

      this.onMove = new nk.Event.LocalEvent();
      this.onDown = new nk.Event.LocalEvent();
      this.onUp = new nk.Event.LocalEvent();
    }
    else return new Mouse( _element );
  }
  Mouse.prototype = Object.create( null );
  Mouse.prototype.constructor = Mouse;
  Mouse.prototype.OnMove = function ( _event ) {
    var element = this.element;
    this.position.Set( _event.pageX - element.offsetLeft, _event.pageY - element.offsetTop );
    this.onMove.Dispatch( this, this.position );
  };
  Mouse.prototype.OnDown = function ( _event ) {
    this.onDown.Dispatch( this, this.position );
  };
  Mouse.prototype.OnUp = function ( _event ) {
    this.onUp.Dispatch( this, this.position );
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