/**
* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
*/

module.exports = function ( Nenkraft ) {
  'use strict';
  var Random = Math.random;
  var CANVAS = null;
  var CANVASRC = null;
  var DPARSER = null;
  var RI = Nenkraft.Utils.RandomInteger = function ( _min, _max ) {
    return ( Random() * ( _max - _min + 1 ) + _min ) | 0;
  };
  Nenkraft.Utils.RandomFloat = function ( _min, _max ) {
    return Random() * ( _max - _min ) + _min;
  };
  var II = Nenkraft.Utils.IsInteger = function ( _value ) {
    return Number( _value ) === _value && _value % 1 === 0;
  };
  Nenkraft.Utils.IsFloat = function ( _value ) {
    return Number( _value ) === _value && _value % 1 !== 0;
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
  Nenkraft.Utils.UUID = function ( _length, _parts, _charSetIndex, _separator ) {
    _length = _length === undefined ? 32 : _length;
    _parts = _parts === undefined ? 4 : _parts;
    _charSetIndex = _charSetIndex === undefined ? 0 : _charSetIndex;
    _separator = _separator === undefined ? '-' : _separator;
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
  Nenkraft.Utils.ApplyProperties = function ( _obj, _props ) {
    if ( _props !== undefined ) {
      var key;
      for ( key in _props ) {
        if ( _obj[ key ] !== undefined ) _obj[ key ] = _props[ key ];
      }
    }
  };
  Nenkraft.Utils.Nested = function ( _obj, _string, _getObjectHolding, _set, _value, _splitter ) {
    if ( typeof _string === 'string' ) {
      _splitter = _splitter === undefined ? '.' : _splitter;
      _string = _string.split( _splitter );
    }
    var key;
    if ( _string.length > 1 ) {
      key = _string.shift();
      if ( _obj[ key ] !== undefined ) {
        return Nenkraft.Utils.Nested( _obj[ key ], _string, _getObjectHolding, _set, _value, _splitter );
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
      if ( _set === true ) {
        _obj[ key ] = _value;
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
  Nenkraft.Utils.GenerateSimpleBase64Png = function ( _imageFunction ) {
    var drawable = _imageFunction();
    if ( CANVAS == null ) {
      CANVAS = document.createElement( 'canvas' );
      CANVASRC = CANVAS.getContext( '2d' );
    }
    CANVASRC.clearRect( 0, 0, CANVAS.width, CANVAS.height );
    CANVAS.width = drawable.w;
    CANVAS.height = drawable.h;
    CANVASRC.setTransform( 1, 0, 0, 1, 0, 0 );
    drawable.Draw( CANVASRC );
    return CANVAS.toDataURL( 'image/png' );
  };
  Nenkraft.Utils.ImageFromDataURL = function ( _url, _w, _h ) {
    var image = new Image();
    image.src = _url;
    image.width = _w;
    image.height = _h;
    return image;
  };
  Nenkraft.Utils.Base16ToBase10 = function ( _value ) {
    return parseInt( _value, 16 );
  };
  Nenkraft.Utils.Base2ToBase10 = function ( _value ) {
    return parseInt( _value, 2 );
  };
  Nenkraft.Utils.ObjectIsEmpty = function ( _obj ) {
    for ( var key in _obj ) {
      if ( _obj.hasOwnProperty( key ) ) {
        return false;
      }
    }
    return JSON.stringify( _obj ) === JSON.stringify( {} );
  };
  Nenkraft.Utils.ParsedXMLToJSON = function ( _pxml, _deleteWhitespace ) {
    var o = {};
    var i, l, attrs, attr, child, pchild, children = _pxml.childNodes, temp;
    if ( _pxml.nodeType === 1 ) {
      attrs = _pxml.attributes;
      l = attrs.length;
      if ( l > 0 ) {
        o.attributes = {};
        for ( i = 0, attr = attrs.item( i ); i < l; attr = attrs.item( ++i ) ) {
          o.attributes[ attr.nodeName ] = attr.nodeValue;
        }
      }
    } else if ( _pxml.nodeType === 3 ) {
      if ( ! /^\s*$/g.exec( _pxml.nodeValue ) ) {
        o = _pxml.nodeValue;
        if ( _deleteWhitespace === true ) {
          o = o.replace( /^\s+|\s+&|\n/gmi, '' );
        }
      }
    }
    if ( children != null ) {
      l = children.length;
      for ( i = 0, child = children.item( i ); i < l; child = children.item( ++i ) ) {
        if ( o[ child.nodeName ] === undefined ) {
          o[ child.nodeName ] = Nenkraft.Utils.ParsedXMLToJSON( child, _deleteWhitespace );
        } else {
          if ( o[ child.nodeName ].push === undefined ) {
            temp = o[ child.nodeName ];
            o[ child.nodeName ] = [];
            if ( !Nenkraft.Utils.ObjectIsEmpty( temp ) ) {
              o[ child.nodeName ].push( temp );
            }
          }
          pchild = Nenkraft.Utils.ParsedXMLToJSON( child, _deleteWhitespace );
          if ( !Nenkraft.Utils.ObjectIsEmpty( pchild ) ) {
            o[ child.nodeName ].push( pchild );
          }
        }
      }
    }
    if ( o[ '#text' ] && o[ '#text' ].length === 0 ) {
      delete o[ '#text' ];
    }
    return o;
  };
  Nenkraft.Utils.XMLToJSON = function ( _xml, _deleteWhitespace ) {
    if ( DPARSER == null ) {
      DPARSER = new DOMParser();
    }
    return Nenkraft.Utils.ParsedXMLToJSON( DPARSER.parseFromString( _xml, 'text/xml' ), _deleteWhitespace );
  };
};
