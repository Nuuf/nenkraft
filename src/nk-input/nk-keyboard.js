module.exports = function () {
  "use strict";
  function Keyboard( _element ) {
    if ( !( this instanceof Keyboard ) ) return new Keyboard( _element );
    this.element = _element;
  }
  Keyboard.prototype = Object.create( null );
  Keyboard.prototype.constructor = Keyboard;
  //Static

  //Members

  //Methods
  nk.Input.Keyboard = Keyboard;
};