module.exports = function ( Nenkraft ) {
  'use strict';
  function FlagEnum () {
    if ( !( this instanceof FlagEnum ) ) return new FlagEnum();
  }
  FlagEnum.prototype = Object.create( null );
  FlagEnum.prototype.constructor = FlagEnum;
  //Static
  //Members
  FlagEnum.prototype.NONE = 0;
  FlagEnum.prototype.next = 1;
  //Methods
  FlagEnum.prototype.Add = function ( _id ) {
    _id = _id.toUpperCase();
    if ( this[ _id ] === undefined ) {
      this[ _id ] = this.next;
      this.next = this.next << 1;
    }
  };
  Nenkraft.Utils.FlagEnum = FlagEnum;
};
