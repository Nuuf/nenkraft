module.exports = function () {
  "use strict";
  function Command( _id, _handle, _info, _continueToPrime, _optionPrefix ) {
    if ( this instanceof Command ) {
      this.id = _id.split( ' ' );
      this.handle = _handle;
      this.info = _info;
      this.options = null;
      this.allOptionIds = null;
      this.data = {};
      this.dataSeparator = '=';
      this.optionPrefix = _optionPrefix === undefined ? null : _optionPrefix;
      this.continueToPrime = _continueToPrime === undefined ? true : _continueToPrime;
      this.fullInfo = null;
    }
    else return new Command( _id, _handle, _info, _continueToPrime, _optionPrefix );
  }
  Command.prototype = Object.create( null );
  Command.prototype.constructor = Command;
  Command.prototype.Execute = function ( _dataStrs, _data ) {
    this.HandleData( _dataStrs, _data );
    if ( this.HandleOptions( _dataStrs, _data ) === true ) {
      this.handle( _dataStrs, _data );
    }
  };
  Command.prototype.AddOption = function ( _id, _handle, _info, _priority, _breakIfExecuted, _optionPrefix ) {
    _optionPrefix = _optionPrefix === undefined ? this.optionPrefix : _optionPrefix;
    if ( _optionPrefix !== null ) _id = _id.replace( /\S+/g, _optionPrefix + '$&' );
    if ( this.options === null ) this.options = [];
    _priority = _priority === undefined ? 0 : _priority;
    var opt = new nk.CP.Option( _id, _handle, _info, _priority, _breakIfExecuted );
    opt.command = this;
    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {
      option = options[ i ];
      if ( option.priority <= _priority ) {
        nk.Utils.ArrayInsert( options, opt, i );
        this.allOptionIds = this.GetAllOptionIds();
        return this;
      }
    }
    this.options.push( opt );
    this.allOptionIds = this.GetAllOptionIds();
    return this;
  };
  Command.prototype.HandleData = function ( _dataStrs, _data ) {
    var dsCopy = _dataStrs.slice();
    for ( var i = 0, l = dsCopy.length, str, data, ds = this.dataSeparator; i < l; ++i ) {
      str = dsCopy[ i ];
      data = str.split( ds );
      if ( data.length === 2 ) {
        _dataStrs.splice( i, 1 );
        _data[ data[ 0 ] ] = data[ 1 ];
      }
    }
  };
  Command.prototype.HandleOptions = function ( _dataStrs, _data ) {
    if ( _dataStrs.length === 0 ) {
      return this.continueToPrime;
    }
    var matchingOptionIds = this.GetAndRemoveMatchingOptionIds( _dataStrs );
    if ( matchingOptionIds === null ) return this.continueToPrime;
    for ( var i = 0, l = matchingOptionIds.length, option; i < l; ++i ) {
      option = this.GetOptionById( matchingOptionIds[ i ] );
      if ( option.Execute( _dataStrs, _data ) === true ) return false;
    }
    return this.continueToPrime;
  };
  Command.prototype.GetOptionById = function ( _id ) {
    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {
      option = options[ i ];
      if ( option.id.indexOf( _id ) !== -1 ) return option;
    }
    return null;
  };
  Command.prototype.GetAllOptionIds = function () {
    var allOptionIds = [];
    for ( var i = 0, options = this.options, l = options.length; i < l; ++i ) {
      allOptionIds = allOptionIds.concat( options[ i ].id );
    }
    return allOptionIds;
  };
  Command.prototype.GetAndRemoveMatchingOptionIds = function ( _dataStrs ) {
    var allOptionIds = this.allOptionIds
    if ( allOptionIds === null ) return null;
    var optionIds = [];
    for ( var i = 0, l = allOptionIds.length; i < l; ++i ) {
      var ix = _dataStrs.indexOf( allOptionIds[ i ] );
      if ( ix !== -1 ) {
        optionIds.push( _dataStrs.splice( ix, 1 )[ 0 ] );
      }
    }
    return optionIds;
  };
  Command.prototype.GenerateInfoString = function () {
    var str = 'COMMAND: ' + this.id.join( ', ' ) + ' -> ' + this.info + '\n';
    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {
      option = options[ i ];
      str += 'OPTION: ' + option.id.join( ', ' ) + ' -> ' + option.info + '\n';
    }
    return str;
  };
  nk.CP.Command = Command;
};