module.exports = function () {
  "use strict";
  function Keyboard( _element ) {
    if ( this instanceof Keyboard ) {
      this.element = _element;
    }
    else return new Keyboard( _element );
  }
  Keyboard.prototype = Object.create( null );
  Keyboard.prototype.constructor = Keyboard;
  nk.Input.Keyboard = Keyboard;
};