/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Register ( _options ) {

    if ( !( this instanceof Register ) ) return new Register( _options );

    this.commands = [];
  
  }

  Register.prototype = Object.create( null );
  Register.prototype.constructor = Register;
  // Static

  // Members
  Register.prototype.splitter = ' ';

  // Methods
  Register.prototype.AddCommand = function ( _command ) {

    if ( _command.register === null ) {

      this.commands.push( _command );
      _command.register = this;
      return _command;
    
    }
  
  };

  Register.prototype.RemoveCommand = function( _command ) {

    var commands = this.commands;
    var ix = commands.indexOf( _command );

    if ( ix !== -1 ) {

      _command.register = null;
      return commands.fickleSplice( ix );
    
    }
  
  };

  Register.prototype.GetCommand = function ( _id ) {

    for ( var i = 0, commands = this.commands, l = commands.length, command; i < l; ++i ) {

      command = this.commands[ i ];

      if ( command ) {

        for ( var j = 0, jl = command.id.length; j < jl; ++j ) {

          if ( command.id[ j ] === _id ) return command;
        
        }
      
      }
    
    }

    return null;
  
  };

  Register.prototype.Parse = function ( _str, _staticData ) {

    var strs = String( _str ).split( this.splitter );
    var cmdStr = strs.shift();
    var command = this.GetCommand( cmdStr );

    if ( command ) {

      command.Execute( strs, {}, _staticData );
      return null;
    
    }

    return cmdStr;
  
  };

  Nenkraft.CP.Register = Register;

};
