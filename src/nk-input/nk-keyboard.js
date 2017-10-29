/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  function Keyboard ( _element ) {
    if ( !( this instanceof Keyboard ) ) return new Keyboard( _element );
    this.element = _element;
    this.element.setAttribute( 'tabindex', '1' );
    this.element.focus();

    this.element.addEventListener( 'keydown', this.OnKeyDown.bind( this ) );
    this.element.addEventListener( 'keyup', this.OnKeyUp.bind( this ) );

    this.onDown = new Nenkraft.Event.LocalEvent();
    this.onUp = new Nenkraft.Event.LocalEvent();
  }
  Keyboard.prototype = Object.create( null );
  Keyboard.prototype.constructor = Keyboard;
  //Static

  //Members

  //Methods
  Keyboard.prototype.OnKeyDown = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onDown.Dispatch( this.element, _event );
  };
  Keyboard.prototype.OnKeyUp = function ( _event ) {
    _event.preventDefault();
    _event.stopPropagation();
    this.onUp.Dispatch( this.element, _event );
  };
  Nenkraft.Input.Keyboard = Keyboard;
};
