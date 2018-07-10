/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  var NESTED = Nenkraft.Utils.Nested;

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

    var iteratorIndex;
    var i;

    for ( i = 0; i < arguments.length; ++i ) {

      if ( typeof arguments[i] === 'string' && arguments[i][0] === '$' ) {

        switch ( arguments[i].slice( 1 ) ) {

          case 'i' :
            iteratorIndex = i;
            break;
          default: 
            break;
        
        }

      } 
    
    }

    for ( i = 0; i < this.amount; ++i ) {

      if ( iteratorIndex ) arguments[iteratorIndex] = i;
      this.orders.push(
        new ( Function.prototype.bind.apply( _class, arguments ) )()
      );
      
    }

    return this;
  
  };

  Maker.prototype.Call = function( _function, _args ) {

    var orders = this.orders;
    var context, f, arg, args;

    for ( var i = 0, order = orders[i]; i < orders.length; order = orders[++i] ) {

      context = NESTED( order, _function, true );
      f = NESTED( order, _function );

      if ( _args != null && _args.length > 0 ) {

        args = _args.slice();

        for ( var j = 0; j < args.length; ++j ) {

          if ( typeof args[j] === 'string' && args[j][0] === '$' ) {
  
            arg = args[j].slice( 1 );

            switch ( arg ) {

              case 'i':
                args[j] = i;
                break;
              default: 
                args[j] = order[arg];
                break;
            
            }
        
          }
      
        }
      
      }

      f.apply( context, args );
    
    }

    return this;
  
  };

  Maker.prototype.Cast = function( _key, _value ) {

    var orders = this.order;

    for ( var i = 0, order = orders[i]; i < orders.length; order = orders[++i] ) {

      if ( typeof _value === 'string' && _value[0] === '$' ) {

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
