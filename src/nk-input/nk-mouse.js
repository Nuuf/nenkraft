module.exports = function () {
  "use strict";
  function Mouse( _element ) {
    if ( this instanceof Mouse ) {
      this.element = _element;
      this.position = new nk.Vector2D( 0, 0 );
      _element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
    }
    else return new Mouse( _element );
  }
  Mouse.prototype = Object.create( null );
  Mouse.prototype.constructor = Mouse;
  Mouse.prototype.OnMove = function ( _event ) {
    var element = this.element;
    this.position.Set( _event.pageX - element.offsetLeft, _event.pageY - element.offsetTop );
  };
  nk.Input.Mouse = Mouse;
  Object.defineProperty( Mouse.prototype, 'x', {
    set: function ( _value ) {
      this.position.x = _value;
    },
    get: function () {
      return this.position.x;
    }
  } );
  Object.defineProperty( Mouse.prototype, 'y', {
    set: function ( _value ) {
      this.position.y = _value;
    },
    get: function () {
      return this.position.y;
    }
  } );
};