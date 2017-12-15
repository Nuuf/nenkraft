/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Assert = Nenkraft.Utils.Assert;
  var EO = Object.create( null );
  var ES = '';
  function Cache ( _type ) {
    if ( !( this instanceof Cache ) ) return new Cache( _type );
    if ( _type != null ) {
      this.type = _type;
    }
    this.items = [];
  }
  Cache.prototype = Object.create( null );
  Cache.prototype.constructor = Cache;
  //Static

  //Members
  Cache.prototype.type = null;
  //Methods
  Cache.prototype.Store = function ( _item ) {
    var valid = false;
    if ( _item == null ) {
      return null;
    }
    if ( _item.id != null && _item.id !== '' ) {
      valid = !this.Contains( _item, _item.id );
    } else if ( _item.data ) {
      if ( _item.data.id != null && _item.data.id !== '' ) {
        valid = !this.Contains( _item, _item.data.id );
      }
    }
    if ( valid === false ) {
      return false;
    }
    this.items.push( _item );
    return true;
  };
  Cache.prototype.StoreSafe = function ( _item ) {
    if ( this.type != null ) {
      Assert( _item, Assert.IS_INSTANCE_OF, this.type );
    }
    Assert( _item, Assert.IS_SAME_TYPE, EO );
    if ( _item.id ) {
      Assert( _item.id, Assert.IS_SAME_TYPE, ES );
      Assert( _item.id, Assert.IS_NOT, '' );
    } else {
      Assert( _item.data, Assert.IS_SAME_TYPE, EO );
      Assert( _item.data.id, Assert.IS_SAME_TYPE, ES );
      Assert( _item.data.id, Assert.IS_NOT, '' );
    }
    this.items.push( _item );
    return true;
  };
  Cache.prototype.Get = function ( _item ) {
    for ( var i = 0, items = this.items, l = items.length; i < l; ++i ) {
      if ( items[ i ] === _item ) {
        return _item;
      }
    }
    return null;
  };
  Cache.prototype.GetById = function ( _id ) {
    for ( var i = 0, items = this.items, l = items.length, item = items[ i ]; i < l; item = items[ ++i ] ) {
      if ( item != null ) {
        if ( item.id === _id || ( item.data != null && item.data.id === _id ) ) {
          return item;
        }
      }
    }
    return null;
  };
  Cache.prototype.PerformOnAll = function ( _funcName, _params, _context ) {
    for ( var i = 0, items = this.items, l = items.length, item = items[ i ]; i < l; item = items[ ++i ] ) {
      if ( item != null && item[ _funcName ] ) {
        item[ _funcName ].apply( _context ? _context : item, _params );
      }
    }
    return null;
  };
  Cache.prototype.Contains = function ( _item, _id ) {
    for ( var i = 0, items = this.items, l = items.length, item = items[ i ]; i < l; item = items[ ++i ] ) {
      if ( item != null ) {
        if ( item === _item ) {
          return true;
        }
        if ( item.id === _id ) {
          return true;
        }
        if ( item.data != null ) {
          if ( item.data.id === _id ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  Nenkraft.Utils.Cache = Cache;
};
