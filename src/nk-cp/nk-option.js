/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Option ( _id, _handle, _info, _priority, _breakIfExecuted ) {

    if ( !( this instanceof Option ) ) return new Option( _id, _handle, _info, _priority, _breakIfExecuted );

    this.id = _id.split( ' ' );
    this.handle = _handle;
    this.info = _info;
    if ( _priority !== undefined ) this.priority = _priority;
    if ( _breakIfExecuted !== undefined ) this.breakIfExecuted = _breakIfExecuted;
    this.data = {};
  
  }

  Option.prototype = Object.create( null );
  Option.prototype.constructor = Option;
  // Static

  // Members
  Option.prototype.command = null;
  Option.prototype.priority = 0;
  Option.prototype.breakIfExecuted = false;

  // Methods
  Option.prototype.Execute = function ( _dataStrs, _data, _staticData ) {

    this.handle( _dataStrs, _data, _staticData );
    return this.breakIfExecuted;
  
  };

  Nenkraft.CP.Option = Option;

};
