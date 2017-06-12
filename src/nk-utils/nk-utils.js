module.exports = function ( nk ) {
  'use strict';
  nk.Utils.RandomInteger = function ( _min, _max ) {
    return ( Math.random() * ( _max - _min + 1 ) + _min ) | 0;
  };
  nk.Utils.RandomFloat = function ( _min, _max ) {
    return Math.random() * ( _max - _min ) + _min;
  };
  nk.Utils.IsInteger = function ( _value ) {
    return Number( _value ) === _value && _value % 1 === 0;
  };
  nk.Utils.IsFloat = function ( _value ) {
    return Number( _value ) === _value && _value % 1 !== 0;
  };
  nk.Utils.Clamp = function ( _value, _min, _max ) {
    if ( _value < _min ) return _min;
    else if ( _value > _max ) return _max;
    return _value;
  };
  nk.Utils.InverseClamp = function ( _value, _min, _max ) {
    if ( _value < _min ) return _max;
    else if ( _value > _max ) return _min;
    return _value;
  };
  nk.Utils.IntegerNotation = function ( _value, _roof, _splitter ) {
    var vrm = _value % _roof, vrd = _value / _roof;
    return Math.ceil( vrm === 0 ? vrd + 1 : vrd ) + _splitter + ( 1 + vrm );
  };
  nk.Utils.UUID = function ( _length, _parts, _charSetIndex, _separator ) {
    _length = _length === undefined ? 32 : _length;
    _parts = _parts === undefined ? 4 : _parts;
    _charSetIndex = _charSetIndex === undefined ? 0 : _charSetIndex;
    _separator = _separator === undefined ? '-' : _separator;
    var id = '';
    for ( var i = 0, lpd = ( _length / _parts ) | 0, ilpdd, at, charset = nk.Utils.CharacterSets[ _charSetIndex ]; i < _length; ++i ) {
      ilpdd = i / lpd;
      if ( ilpdd !== 0 && Number.isInteger( ilpdd ) ) id += _separator;
      else {
        at = nk.Utils.RandomInteger( 1, charset.length - 1 );
        id += charset.charAt( at );
      }
    }
    return id;
  };
  nk.Utils.CharacterSets = [
    '0123456789ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz',
    '0123456789ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz!?#$%@',
    '0123456789',
    'ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz',
    'ABCDEFGHJIKLMNOPQRSTUWVXYZ',
    'abcdefghijklmnopqrstuwvxyz'
  ];
  nk.Utils.ApplyProperties = function ( _obj, _props ) {
    if ( _props !== undefined ) {
      var key;
      for ( key in _props ) {
        if ( _obj[ key ] !== undefined ) _obj[ key ] = _props[ key ];
        // else error
      }
    }
  };
  nk.Utils.Nested = function ( _obj, _string, _getObjectHolding, _set, _value, _splitter ) {
    if ( typeof _string === 'string' ) {
      _splitter = _splitter === undefined ? '.' : _splitter;
      _string = _string.split( _splitter );
    }
    var key;
    if ( _string.length > 1 ) {
      key = _string.shift();
      if ( _obj[ key ] !== undefined ) {
        return nk.Utils.Nested( _obj[ key ], _string, _getObjectHolding, _set, _value, _splitter );
      }
    } else {
      key = _string.shift();
      if ( _obj[ key ] !== undefined ) {
        if ( _set === true ) {
          _obj[ key ] = _value;
          return;
        }
        if ( _getObjectHolding === true ) {
          return _obj;
        }
        return _obj[ key ];
      }
    }
  };
  nk.Utils.ArrayGetRandom = function ( _array, _amount ) {
    var array = [], control = {}, _al = _array.length;
    for ( var i = 0, l = _amount; i < l; ++i ) {
      var ix = ( Math.random() * _al ) | 0;
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
      otn = nk.Utils.RandomInteger( 1, 9 );
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
  nk.Utils.GenerateSimpleTexture = function ( _textureFunction ) {
    var drawable = _textureFunction();
    var canvas = document.createElement( 'canvas' );
    canvas.width = drawable.w;
    canvas.height = drawable.h;
    drawable.Draw( canvas.getContext( '2d' ) );
    return canvas.toDataURL( 'image/png' );
  };
  nk.Utils.TextureFromDataURL = function ( _url ) {
    var texture = new Image();
    texture.src = _url;
    return texture;
  };
};
