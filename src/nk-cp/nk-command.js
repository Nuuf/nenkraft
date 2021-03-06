/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Command ( _id, _handle, _info, _continueToPrime, _optionPrefix ) {

    if ( !( this instanceof Command ) ) return new Command( _id, _handle, _info, _continueToPrime, _optionPrefix );

    this.id = _id.split( ' ' );
    this.handle = _handle;
    this.info = _info;
    this.data = {};
    this.optionPrefix = _optionPrefix === undefined ? Command.OPTION_PREFIX : _optionPrefix;
    this.dsCopy = [];
    if ( _continueToPrime !== undefined ) this.continueToPrime = _continueToPrime;
  
  }

  Command.prototype = Object.create( null );
  Command.prototype.constructor = Command;
  // Static
  Command.OPTION_PREFIX = '';
  // Members
  Command.prototype.dataSeparator = '=';
  Command.prototype.options = null;
  Command.prototype.allOptionIds = null;
  Command.prototype.fullInfo = null;
  Command.prototype.optionPrefix = null;
  Command.prototype.continueToPrime = true;
  Command.prototype.dsCopy = null;
  Command.prototype.register = null;

  // Methods
  Command.prototype.Execute = function ( _dataStrs, _data, _staticData ) {

    this.HandleData( _dataStrs, _data );

    if ( this.HandleOptions( _dataStrs, _data, _staticData ) === true ) {

      this.handle( _dataStrs, _data, _staticData );
    
    }
  
  };

  Command.prototype.AddOption = function ( _id, _handle, _info, _priority, _breakIfExecuted, _optionPrefix ) {

    _optionPrefix = _optionPrefix === undefined ? this.optionPrefix : _optionPrefix;
    if ( _optionPrefix !== null ) _id = _id.replace( /\S+/g, _optionPrefix + '$&' );
    if ( this.options === null ) this.options = [];
    _priority = _priority === undefined ? 0 : _priority;
    var opt = Nenkraft.CP.Option( _id, _handle, _info, _priority, _breakIfExecuted );
    opt.command = this;

    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {

      option = options[ i ];

      if ( option.priority <= _priority ) {

        options.splice( i, 0, opt );
        this.allOptionIds = this.GetAllOptionIds();
        return this;
      
      }
    
    }

    this.options.push( opt );
    this.allOptionIds = this.GetAllOptionIds();
    return this;
  
  };

  Command.prototype.HandleData = function ( _dataStrs, _data ) {

    var dsCopy = this.dsCopy;
    dsCopy.push.apply( dsCopy, _dataStrs );

    for ( var i = 0, l = dsCopy.length, str, data, ds = this.dataSeparator; i < l; ++i ) {

      str = dsCopy[ i ];
      data = str.split( ds );

      if ( data.length === 2 ) {

        _dataStrs.fickleSplice( i );
        _data[ data[ 0 ] ] = data[ 1 ];
      
      }
    
    }

    dsCopy.length = 0;
  
  };

  Command.prototype.HandleOptions = function ( _dataStrs, _data, _staticData ) {

    if ( _dataStrs.length === 0 ) {

      return this.continueToPrime;
    
    }

    var matchingOptionIds = this.GetAndRemoveMatchingOptionIds( _dataStrs );
    if ( matchingOptionIds === null ) return this.continueToPrime;

    for ( var i = 0, l = matchingOptionIds.length, option; i < l; ++i ) {

      option = this.GetOptionById( matchingOptionIds[ i ] );
      if ( option.Execute( _dataStrs, _data, _staticData ) === true ) return false;
    
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

      allOptionIds.push.apply( allOptionIds, options[ i ].id );
    
    }

    return allOptionIds;
  
  };

  Command.prototype.GetAndRemoveMatchingOptionIds = function ( _dataStrs ) {

    var allOptionIds = this.allOptionIds;
    if ( allOptionIds === null ) return null;
    var optionIds = [];

    for ( var i = 0, l = allOptionIds.length; i < l; ++i ) {

      var ix = _dataStrs.indexOf( allOptionIds[ i ] );

      if ( ix !== -1 ) {

        optionIds.push( _dataStrs.fickleSplice( ix ) );
      
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

  Nenkraft.CP.Command = Command;

};
