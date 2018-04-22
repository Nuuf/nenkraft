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

  // Methods

  Maker.prototype.Many = function( _amount ) {

    this.amount = _amount;
    return this;
  
  };

  Maker.prototype.Make = function( _class ) {

    this.orders.length = 0;
    this.classUsed = _class;

    for ( var i = 0; i < this.amount; ++i ) {

      this.orders.push(
        new ( Function.prototype.bind.apply( _class, arguments ) )()
      );
      
    }

    return this;
  
  };

  Maker.prototype.Call = function( _function, _args ) {

    var orders = this.orders;

    for ( var i = 0, order = orders[i]; i < orders.length; order = orders[++i] ) {

      var context = NESTED( order, _function, true );
      var f = NESTED( order, _function );

      for ( var j = 0; j < _args.length; ++j ) {

        if ( typeof _args[j] === 'string' && _args[j][0] === '$' ) {

          _args[j] = order[_args[j].slice( 1 )];
      
        }
    
      }

      f.apply( context, _args );
    
    }

    return this;
  
  };

  Maker.prototype.Set = function( _key, _value ) {

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

    return this.orders[0];
  
  };

  Maker.prototype.Mass = function() {

    return this.orders;

  };
  
  Nenkraft.Utils.Maker = Maker;

};
