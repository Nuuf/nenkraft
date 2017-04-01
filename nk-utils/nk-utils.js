( function () {
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
  nk.Utils.IntegerNotation = function ( _val, _roof ) {
    var vrm = _val % _roof, vrd = _val / _roof;
    return Math.ceil( vrm === 0 ? vrd + 1 : vrd ) + '.' + ( 1 + vrm );
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
}() );
