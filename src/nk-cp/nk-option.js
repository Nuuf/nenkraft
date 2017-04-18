module.exports = function () {
  "use strict";
  function Option( _id, _handle, _info, _priority, _breakIfExecuted ) {
    if ( this instanceof Option ) {
      this.id = _id.split( ' ' );
      this.handle = _handle;
      this.command = null;
      this.info = _info;
      this.priority = _priority === undefined ? 0 : _priority;
      this.breakIfExecuted = _breakIfExecuted === undefined ? false : _breakIfExecuted;
      this.data = {};
    }
    else return new Option( _id, _handle, _info, _priority, _breakIfExecuted );
  }
  Option.prototype = Object.create( null );
  Option.prototype.constructor = Option;
  Option.prototype.Execute = function ( _dataStrs, _data ) {
    this.handle( _dataStrs, _data );
    return this.breakIfExecuted;
  };
  nk.CP.Option = Option;
};