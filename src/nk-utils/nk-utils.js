/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Random = Math.random;
  var PR = Nenkraft.Math.PR;

  var RI = Nenkraft.Utils.RandomInteger = function ( _min, _max ) {

    return ( Random() * ( _max - _min + 1 ) + _min ) | 0;
  
  };

  var RF = Nenkraft.Utils.RandomFloat = function ( _min, _max ) {

    return Random() * ( _max - _min ) + _min;
  
  };

  var II = Nenkraft.Utils.IsInteger = function ( _value ) {

    return Number( _value ) === _value && _value % 1 === 0;
  
  };

  Nenkraft.Utils.IsFloat = function ( _value ) {

    return Number( _value ) === _value && _value % 1 !== 0;
  
  };

  Nenkraft.Utils.IsArray = function( _value ) {

    return Object.prototype.toString.call( _value ) === '[object Array]';
  
  };

  Nenkraft.Utils.Sign = function( _value, _1IfZero ) {

    if ( _value === 0 ) {

      if ( _1IfZero === true ) {

        return 1;
      
      }

      return 0;
    
    }

    if ( _value > 0 ) return 1;
    return -1;
  
  };

  Nenkraft.Utils.Clamp = function ( _value, _min, _max ) {

    if ( _value < _min ) return _min;
    else if ( _value > _max ) return _max;
    return _value;
  
  };

  Nenkraft.Utils.InverseClamp = function ( _value, _min, _max ) {

    if ( _value < _min ) return _max;
    else if ( _value > _max ) return _min;
    return _value;
  
  };

  Nenkraft.Utils.ThisOrThat = function ( _this, _that ) {

    if ( RI( 1, 2 ) === 1 ) return _this;
    return _that;
  
  };

  Nenkraft.Utils.IntegerNotation = function ( _value, _roof, _splitter ) {

    var vrm = _value % _roof, vrd = _value / _roof;
    return Math.ceil( vrm === 0 ? vrd + 1 : vrd ) + _splitter + ( 1 + vrm );
  
  };

  Nenkraft.Utils.GenerateSequence = function( _from, _to, _interval, _precision ) {

    var sequence = [];

    for ( var i = _from; i < _to; i += _interval ) {

      sequence.push( PR( i, _precision ) );
    
    }

    return sequence;
  
  };

  var RIA = Nenkraft.Utils.RandomInArray = function( _array ) {

    return _array[RI( 0, _array.length - 1 )];
  
  };

  Nenkraft.Utils.MinMaxOrValue = function( _options, _other ) {

    if ( _options.min != null && _options.max != null ) {
        
      return RF( _options.min, _options.max );

    } else if ( _options.values != null && _options.values.length > 0 ) {

      return RIA( _options.values );

    } else if ( _other != null && _options[_other].length > 0 ) {

      return RIA( _options[_other] );

    }

    return _options;
  
  };

  Nenkraft.Utils.UUID = function ( _length, _parts, _charSetIndex, _separator ) {

    _length = _length == null ? 32 : _length;
    _parts = _parts == null ? 4 : _parts;
    _charSetIndex = _charSetIndex == null ? 0 : _charSetIndex;
    _separator = _separator == null ? '-' : _separator;
    var id = '';

    for ( var i = 0, lpd = ( _length / _parts ) | 0, ilpdd, at, charset = Nenkraft.Utils.CharacterSets[ _charSetIndex ]; i < _length; ++i ) {

      ilpdd = i / lpd;

      if ( ilpdd !== 0 && II( ilpdd ) ) id += _separator;
      else {

        at = RI( 1, charset.length - 1 );
        id += charset.charAt( at );
      
      }
    
    }

    return id;
  
  };

  Nenkraft.Utils.CharacterSets = [
    '0123456789ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz',
    '0123456789ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz!?#$%@&',
    '0123456789',
    'ABCDEFGHJIKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz',
    'ABCDEFGHJIKLMNOPQRSTUWVXYZ',
    'abcdefghijklmnopqrstuwvxyz',
    '0123456789abcdefghijklmnopqrstuwvxyz',
    '0123456789ABCDEFGHJIKLMNOPQRSTUWVXYZ'
  ];

  Nenkraft.Utils.ApplyProperties = function ( _object, _props ) {

    if ( _props !== undefined ) {

      var key;

      for ( key in _props ) {

        if ( _object[ key ] !== undefined ) _object[ key ] = _props[ key ];
      
      }
    
    }
  
  };

  var NESTED = Nenkraft.Utils.Nested = function ( _object, _string, _getObjectHolding, _set, _value, _splitter ) {

    if ( typeof _string === 'string' ) {

      _splitter = _splitter == null ? '.' : _splitter;
      _string = _string.split( _splitter );
    
    }

    var key;

    if ( _string.length > 1 ) {

      key = _string.shift();

      if ( _object[ key ] !== undefined ) {

        return NESTED( _object[ key ], _string, _getObjectHolding, _set, _value, _splitter );
      
      }
    
    } else {

      key = _string.shift();

      if ( _object[ key ] !== undefined ) {

        if ( _set === true ) {

          _object[ key ] = _value;
          return;
        
        }

        if ( _getObjectHolding === true ) {

          return _object;
        
        }

        return _object[ key ];
      
      }

      if ( _set === true ) {

        _object[ key ] = _value;
        return;
      
      }
    
    }
  
  };

  Nenkraft.Utils.ArrayGetRandom = function ( _array, _amount ) {

    var array = [], control = {}, _al = _array.length;

    for ( var i = 0, l = _amount; i < l; ++i ) {

      var ix = ( Random() * _al ) | 0;
      if ( control[ ix ] === undefined ) {

        control[ ix ] = null;
        array.push( _array[ ix ] );
      
      }
      else i--;
    
    }

    return array;
  
  };

  Nenkraft.Utils.ArrayShuffle = function ( _array ) {

    var i = _array.length - 1, temp, rand;

    for ( ; i >= 0; --i ) {

      rand = ( Random() * i ) | 0;
      temp = _array[ i ];
      _array[ i ] = _array[ rand ];
      _array[ rand ] = temp;
    
    }
  
  };

  Nenkraft.Utils.Cipher = {};
  Nenkraft.Utils.Decipher = {};

  Nenkraft.Utils.Cipher.CCH1 = function ( _str, _cci ) {

    var output = [];
    _cci = _cci === undefined ? 1 : _cci;

    for ( var i = 0, chrs = _str.split( '' ), l = chrs.length, chr, otn; i < l; ++i ) {

      chr = chrs[ i ];
      chr = ( chr.charCodeAt( 0 ) + _cci ).toString( 2 );
      otn = RI( 1, 9 );
      output.push( otn + 'x' + chr.replace( /1/g, otn ) );
    
    }

    return output.join( ' ' );
  
  };

  Nenkraft.Utils.Decipher.CCH1 = function ( _str, _cci ) {

    var output = [];
    _cci = _cci === undefined ? 1 : _cci;

    for ( var i = 0, strs = _str.split( ' ' ), l = strs.length, str; i < l; ++i ) {

      str = strs[ i ];
      str = str.slice( -str.length + 2 );
      output.push( String.fromCharCode( parseInt( str.replace( /[2-9]/g, '1' ), 2 ) - _cci ) );
    
    }

    return output.join( '' );
  
  };

  Nenkraft.Utils.Base16ToBase10 = function ( _value ) {

    return parseInt( _value, 16 );
  
  };

  Nenkraft.Utils.Base2ToBase10 = function ( _value ) {

    return parseInt( _value, 2 );
  
  };

  Nenkraft.Utils.IsObjectEmpty = function ( _object ) {

    for ( var key in _object ) {

      if ( _object.hasOwnProperty( key ) ) {

        return false;
      
      }
    
    }

    return JSON.stringify( _object ) === JSON.stringify( {} );
  
  };

  var DC = Nenkraft.Utils.DeepClone = function( _object ) {

    var r = null;
    var ia = false;

    if ( typeof _object === 'function' ) {

      throw new TypeError( 'Object was of type: function. Not acceptable.' );

    }

    if ( Array.isArray( _object ) ) {

      r = [];
      ia = true;

    } else if ( typeof _object === 'object' ) {

      r = {};

    } else {

      return _object;

    }

    if ( ia ) {

      for ( var i = 0; i < _object.length; ++i ) {

        r[i] = DC( _object[i] );

      }

    } else {

      for ( var key in _object ) {

        if ( _object.hasOwnProperty( key ) ) {

          r[key] = DC( _object[key] );

        }

      }

    }

    return r;
  
  };

  Nenkraft.Utils.CreateIteratorArgs = function( _args, _pre, _post ) {

    var ias = [], arg, i, mod, val, pipe;

    for ( i = 0; i < _args.length; ++i ) {

      arg = _args[i];

      if ( typeof arg === 'string' ) {

        if ( arg.indexOf( _pre ) === 0 && arg.indexOf( _post ) === _pre.length ) {

          pipe = arg.indexOf( '|' );

          if ( pipe !== -1 ) {

            mod = arg.slice( arg.indexOf( '(' ) + 1, pipe );
            val = arg.slice( pipe + 1, arg.indexOf( ')' ) );
            ias.push(
              {
                mod: mod,
                val: val,
                iteratorIndex: i
              }
            );
          
          } else {

            ias.push( {
              iteratorIndex: i
            } );

          }

        }
      
      }

    }

    return ias;
  
  };

  Nenkraft.Utils.ReplaceArgumentWithObjectValue = function( _object, _args, _pre ) {

    var arg, i;

    for ( i = 0; i < _args.length; ++i ) {

      arg = _args[i];

      if ( typeof arg === 'string' ) {

        if ( arg.indexOf( _pre ) === 0 ) {

          _args[i] = _object[arg.slice( _pre.length )];

        }

      }

    }

  };

};
