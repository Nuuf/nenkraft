module.exports = function ( nk ) {
  "use strict";
  nk.Utils.Clamp = function ( _c, _min, _max ) {
    if ( _c < _min ) return _min;
    else if ( _c > _max ) return _max;
    return _c;
  };
  nk.Utils.InverseClamp = function ( _c, _min, _max ) {
    if ( _c < _min ) return _max;
    else if ( _c > _max ) return _min;
    return _c;
  };
  nk.Utils.ToBinaryString = function ( _val ) {
    return _val.toString( 2 );
  };
  nk.Utils.ToHexString = function ( _val ) {
    return _val.toString( 16 );
  }
  nk.Utils.B16ToB10 = function ( _str ) {
    return parseInt( _str, 16 );
  };
  nk.Utils.IntegerNotation = function ( _val, _roof, _splitter ) {
    var vrm = _val % _roof, vrd = _val / _roof;
    return Math.ceil( vrm === 0 ? vrd + 1 : vrd ) + _splitter + ( 1 + vrm );
  };
  nk.Utils.RandomInt = function ( _min, _max ) {
    return Math.floor( Math.random() * ( _max - _min + 1 ) + _min );
  };
  nk.Utils.ApplyProperties = function ( _obj, _props ) {
    if ( _props !== undefined ) {
      var key;
      for ( key in _props ) {
        if ( _obj[ key ] !== undefined ) _obj[ key ] = _props[ key ];
        // else error
      }
    }
  };
  nk.Utils.NestedAccess = function ( _obj, _string, _set, _value ) {
    if ( typeof _string === 'string' ) {
      _string = _string.split( '.' );
    }
    var key;
    if ( _string.length > 1 ) {
      key = _string.shift();
      if ( _obj[ key ] !== undefined ) {
        nk.Utils.NestedAccess( _obj[ key ], _string, _set, _value );
      }
    } else {
      key = _string.shift();
      if ( _obj[ key ] !== undefined ) {
        if ( _set === true ) {
          _obj[ key ] = _value;
        } else {
          return _obj[ key ];
        }
      }
    }
  };
  nk.Utils.ArrayGetRandom = function ( _array, _amount ) {
    var array = [], control = {}, _al = _array.length;
    for ( var i = 0, l = _amount; i < l; ++i ) {
      var ix = Math.floor( Math.random() * _al );
      if ( control[ ix ] === undefined ) {
        control[ ix ] = null;
        array.push( _array[ ix ] );
      }
      else i--;
    }
    return array;
  };
  nk.Utils.ArrayRemove = function ( _array, _obj ) {
    var ix = _array.indexOf( _obj );
    if ( ix !== -1 ) {
      return _array.splice( ix, 1 )[ 0 ];
    }
    return null;
  };
  nk.Utils.ArrayInsert = function ( _array, _obj, _index ) {
    _array.splice( _index, 0, _obj );
  };
  nk.Utils.Cipher = {};
  nk.Utils.Decipher = {};
  nk.Utils.Cipher.CCH1 = function ( _str, _cci ) {
    var output = [];
    _cci = _cci === undefined ? 1 : _cci;
    for ( var i = 0, chrs = _str.split( '' ), l = chrs.length, chr, otn; i < l; ++i ) {
      chr = chrs[ i ];
      chr = ( chr.charCodeAt( 0 ) + _cci ).toString( 2 );
      otn = nk.Utils.RandomInt( 1, 9 );
      output.push( otn + 'x' + chr.replace( /1/g, otn ) );
    }
    return output.join( ' ' );
  };
  nk.Utils.Decipher.CCH1 = function ( _str, _cci ) {
    var output = [];
    _cci = _cci === undefined ? 1 : _cci;
    for ( var i = 0, strs = _str.split( ' ' ), l = strs.length, str; i < l; ++i ) {
      str = strs[ i ];
      str = str.slice( -str.length + 2 );
      output.push( String.fromCharCode( parseInt( str.replace( /[2-9]/g, '1' ), 2 ) - _cci ) );
    }
    return output.join( '' );
  };
};
