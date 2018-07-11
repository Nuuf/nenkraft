/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  var NESTED = Nenkraft.Utils.Nested;
  var CIA = Nenkraft.Utils.CreateIteratorArgs;
  var RAWOB = Nenkraft.Utils.ReplaceArgumentWithObjectValue;

  function IteratorArgsLookup( _args, _ias, _index ) {

    if ( _ias != null ) {

      for ( var j = 0, l = _ias.length, ia = _ias[j]; j < l; ia = _ias[++j] ) {

        if ( ia.iteratorIndex !== -1 ) {

          if ( ia.mod && ia.val ) {

            switch ( ia.mod ) {

              case '+':
                _args[ia.iteratorIndex] = _index + parseInt( ia.val );
                break;
              case '*':
                _args[ia.iteratorIndex] = _index * parseInt( ia.val );
                break;
              case '-':
                _args[ia.iteratorIndex] = _index - parseInt( ia.val );
                break;
              case '/':
                _args[ia.iteratorIndex] = _index / parseInt( ia.val );
                break;
              default:
                throw new Error( 'Bad mod!' );
          
            }
          
          } else {

            _args[ia.iteratorIndex] = _index;
        
          }

        }
      
      }

    }
  
  }

  function Maker () {

    if ( !( this instanceof Maker ) ) return new Maker();
    this.orders = [];
  
  }

  Maker.prototype = Object.create( null );
  Maker.prototype.constructor = Maker;
  // Static

  // Members
  Maker.prototype.orders = null;
  Maker.prototype.classUsed = null;
  Maker.prototype.amount = 1;
  Maker.prototype.locked = false;

  // Methods

  Maker.prototype.Many = function( _amount ) {

    this.amount = _amount;
    return this;
  
  };

  Maker.prototype.Bind = function( _object, _reset ) {

    if ( _reset ) this.orders.length = 0;
    this.orders.push( _object );
    return this;
  
  };

  Maker.prototype.Make = function( _class ) {

    if ( this.locked === true ) throw new Error( '"Make" called twice before end!' );

    this.locked = true;

    this.orders.length = 0;
    this.classUsed = _class;

    var ias = CIA( arguments, '@', 'i' );

    for ( var i = 0; i < this.amount; ++i ) {

      IteratorArgsLookup( arguments, ias, i );

      this.orders.push(
        new ( Function.prototype.bind.apply( _class, arguments ) )()
      );
      
    }

    return this;
  
  };

  Maker.prototype.Call = function( _function, _args, _prop ) {

    var orders = this.orders;
    var context, f, args, ias, isArray, isString;

    isArray = Array.isArray( _args );
    isString = typeof _function === 'string';

    if ( isArray === true ) {

      ias = CIA( _args, '@', 'i' );

    }

    for ( var i = 0, order = orders[i]; i < orders.length; order = orders[++i] ) {

      if ( isArray === true ) {

        args = _args.slice();

        RAWOB( order, args, '$' );

        IteratorArgsLookup( args, ias, i );
      
      }

      if ( isString === false ) {

        NESTED( order, _prop, false, true, _function.apply( null, args ) );

      } else {

        context = NESTED( order, _function, true );
        f = NESTED( order, _function );
  
        f.apply( context, args );
      
      }
    
    }

    return this;
  
  };

  Maker.prototype.Cast = function( _key, _value ) {

    var orders = this.order, isString = typeof _value === 'string';

    for ( var i = 0, order = orders[i]; i < orders.length; order = orders[++i] ) {

      if ( isString === true && _value[0] === '$' ) {

        _value = NESTED( order, _value );
      
      }
  
      NESTED( order, _key, false, true, _value );
    
    }

    return this;
  
  };

  Maker.prototype.Done = function() {

    this.amount = 1;
    this.locked = false;
    return this.orders[0];
  
  };

  Maker.prototype.Mass = function() {

    this.amount = 1;
    this.locked = false;
    return this.orders;

  };
  
  Nenkraft.Utils.Maker = Maker;

};
