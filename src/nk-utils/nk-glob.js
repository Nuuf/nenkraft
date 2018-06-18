/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Glob () {

    if ( !( this instanceof Glob ) ) return new Glob();
    this.functions = {};
    this.values = {};
    this.constants = {};
    this.components = {};
    this.objects = {};
    this.lists = {};
  
  }

  Glob.prototype = Object.create( null );
  Glob.prototype.constructor = Glob;

  // Static
  Glob.Create = function( _id ) {

    if ( window == null ) {

      if ( global != null ) {

        if ( global[_id] !== undefined ) throw new Error( 'global.' + _id + ' already exists!' );

        global[_id] = new Glob();
      
      } else {

        throw new Error( 'Neither window nor global exists!' );
      
      }

    } else {

      if ( window[_id] !== undefined ) throw new Error( 'window.' + _id + ' already exists!' );

      window[_id] = new Glob();
    
    }
  
  };

  Glob.FUNCTION = 'functions';
  Glob.VALUE = 'values';
  Glob.CONSTANT = 'constants';
  Glob.COMPONENT = 'components';
  Glob.OBJECT = 'objects';
  Glob.LIST = 'lists';

  // Members
  Glob.prototype.functions = null;
  Glob.prototype.values = null;
  Glob.prototype.constants = null;
  Glob.prototype.components = null;
  Glob.prototype.objects = null;
  Glob.prototype.lists = null;

  // Methods
  Glob.prototype.Define = function( _type, _id, _value ) {

    this.Mark( _type, _id );
    this.Set( _type, _id, _value );
  
  };

  Glob.prototype.Mark = function( _type, _id ) {

    if ( typeof _type !== 'string' ) throw new Error( 'Type needs to be a string!' );
    if ( typeof _id !== 'string' ) throw new Error( 'Id needs to be a string!' );

    if ( this[_type] == null ) throw new Error( 'Type does not exist' );

    if ( _type === Glob.CONSTANT || _type === Glob.COMPONENT ) {

      if ( this[_type][_id] !== undefined ) throw new Error( 'Constants cannot be reassigned!' );

    }

    this[_type][_id] = null;
  
  };

  Glob.prototype.Get = function( _type, _id ) {

    if ( typeof _type !== 'string' ) throw new Error( 'Type needs to be a string!' );
    if ( typeof _id !== 'string' ) throw new Error( 'Id needs to be a string!' );

    if ( this[_type] == null ) throw new Error( 'Type does not exist' );

    return this[_type][_id];
  
  };

  Glob.prototype.Set = function( _type, _id, _value ) {

    if ( typeof _type !== 'string' ) throw new Error( 'Type needs to be a string!' );
    if ( typeof _id !== 'string' ) throw new Error( 'Id needs to be a string!' );

    switch ( _type ) {

      case Glob.FUNCTION:
        if ( typeof _value !== 'function' ) throw new Error( 'Needs to be a function!' );
  
        if ( this.functions[_id] !== null ) throw new Error( 'No mark!' );
  
        this.functions[_id] = _value;
        break;

      case Glob.VALUE: 
        if ( _value instanceof Object ) throw new Error( 'Objects are not allowed!' );
  
        if ( this.values[_id] !== null ) throw new Error( 'No mark!' );

        this.values[_id] = _value;
        break;
      case Glob.CONSTANT:
        if ( _value instanceof Object ) throw new Error( 'Objects are not allowed!' );
  
        if ( this.constants[_id] !== null ) throw new Error( 'No mark!' );

        this.constants[_id] = _value;

        break;
      case Glob.COMPONENT:
        if ( typeof _value !== 'function' ) throw new Error( 'Needs to be a function!' );
  
        if ( this.components[_id] !== null ) throw new Error( 'No mark!' );

        this.components[_id] = _value;
        break;
      
      case Glob.OBJECT:
        if ( typeof _value !== 'object' ) throw new Error( 'Needs to be an object' );
        if ( Nenkraft.Utils.IsArray( _value ) === true ) throw new Error( 'Arrays are not allowed!' );
  
        if ( this.objects[_id] !== null ) throw new Error( 'No mark!' );

        this.objects[_id] = _value;
        break;
      case Glob.LIST:
        if ( Nenkraft.Utils.IsArray( _value ) === false ) throw new Error( 'Needs to be an array!' );

        if ( this.lists[_id] !== null ) throw new Error( 'No mark!' );

        this.lists[_id] = _value;
        break;

      default:
        throw new Error( 'Unrecognized type!' );
    
    }

  };

  Nenkraft.Utils.Glob = Glob;
  Nenkraft.Glob = Glob;

};
