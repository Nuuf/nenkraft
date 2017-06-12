module.exports = function ( nk ) {
  'use strict';
  function FlagList () {
    if ( !( this instanceof FlagList ) ) return new FlagList();
  }
  FlagList.prototype = Object.create( null );
  FlagList.prototype.constructor = FlagList;
  //Static
  //Members
  FlagList.prototype.value = 0;
  //Methods
  FlagList.prototype.Add = function ( _value ) {
    this.value |= _value;
  };
  FlagList.prototype.Remove = function ( _value ) {
    this.value = ( this.value & ~_value );
  };
  FlagList.prototype.Compare = function ( _value ) {
    if ( ( this.value & _value ) !== 0 ) return true;
    return false;
  };
  FlagList.prototype.Has = function ( _value ) {
    if ( ( this.value & _value ) === _value ) return true;
    return false;
  };
  FlagList.prototype.Toggle = function ( _value ) {
    this.value ^= _value;
  };
  nk.Utils.FlagList = FlagList;
};