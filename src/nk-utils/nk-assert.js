module.exports = function ( Nenkraft ) {
  'use strict';
  function Assert ( _data, _compare, _value, _noSelfAssert ) {
    if ( _noSelfAssert == undefined || typeof _data.Assert !== 'function' ) {
      switch ( _compare ) {
        case Assert.IS:
          Is( _data, _value );
          return;
        case Assert.IS_NOT:
          IsNot( _data, _value );
          return;
        case Assert.IS_TYPE:
          IsType( _data, _value );
          return;
        case Assert.IS_NOT_TYPE:
          IsNotType( _data, _value );
          return;
        case Assert.IS_INSTANCE_OF:
          IsInstanceOf( _data, _value );
          return;
        case Assert.IS_NOT_INSTANCE_OF:
          IsNotInstanceOf( _data, _value );
          return;
        default:
          throw new Error( 'No comparison: ' + _compare );
      }
    } else {
      _data.Assert( _compare, _value );
    }
  }
  function Is ( _data, _value ) {
    var failed = false;
    if ( _data !== _value ) {
      failed = true;
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS' );
        console.log( _value );
      }
    }
  }
  function IsNot ( _data, _value ) {
    var failed = false;
    if ( _data === _value ) {
      failed = true;
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS NOT' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS NOT' );
        console.log( _value );
      }
    }
  }
  function IsType ( _data, _value ) {
    var failed = false;
    if ( Array.isArray( _data ) || Array.isArray( _value ) ) {
      if ( !Array.isArray( _data ) && !Array.isArray( _value ) ) {
        failed = true;
      }
    } else {
      if ( _data === null || _value === null ) {
        if ( _data !== _value ) {
          failed = true;
        }
      }
      else if ( typeof _data !== typeof _value ) {
        failed = true;
      }
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS TYPE' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS TYPE' );
        console.log( _value );
      }
    }
  }
  function IsNotType ( _data, _value ) {
    var failed = false;
    if ( Array.isArray( _data ) || Array.isArray( _value ) ) {
      if ( Array.isArray( _data ) && ( Array.isArray( _value ) ) ) {
        failed = true;
      }
    } else {
      if ( _data === null || _value === null ) {
        if ( _value === _data ) {
          failed = true;
        }
      }
      else if ( typeof _data === typeof _value ) {
        failed = true;
      }
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS NOT TYPE' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS NOT TYPE' );
        console.log( _value );
      }
    }
  }
  function IsInstanceOf ( _data, _value ) {
    var failed = false;
    if ( !( _data instanceof _value ) ) {
      failed = true;
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS INSTANCE OF' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS INSTANCE OF' );
        console.log( _value.name );
      }
    }
  }
  function IsNotInstanceOf ( _data, _value ) {
    var failed = false;
    if ( _data instanceof _value ) {
      failed = true;
    }
    if ( failed ) {
      console.error( _data, _value );
      throw new Error( 'Assertion failed: IS NOT INSTANCE OF' );
    } else {
      if ( Assert.LOG ) {
        console.log( '<<||--------------------------------||>>' );
        console.log( 'Assertion success: ' );
        console.log( _data );
        console.log( 'IS NOT INSTANCE OF' );
        console.log( _value.name );
      }
    }
  }
  Assert.IS = 0;
  Assert.IS_NOT = 1;
  Assert.IS_TYPE = 2;
  Assert.IS_NOT_TYPE = 3;
  Assert.IS_INSTANCE_OF = 4;
  Assert.IS_NOT_INSTANCE_OF = 5;
  Assert.GlobalAssign = function () {
    if ( window ) {
      window.IS = 0;
      window.IS_NOT = 1;
      window.IS_TYPE = 2;
      window.IS_NOT_TYPE = 3;
      window.IS_INSTANCE_OF = 4;
      window.IS_NOT_INSTANCE_OF = 5;
    } else if ( global ) {
      global.IS = 0;
      global.IS_NOT = 1;
      global.IS_TYPE = 2;
      global.IS_NOT_TYPE = 3;
      global.IS_INSTANCE_OF = 4;
      global.IS_NOT_INSTANCE_OF = 5;
    } else {
      throw new Error( 'No global namespace' );
    }
  };
  Assert.LOG = false;
  Nenkraft.Utils.Assert = Assert;
};
