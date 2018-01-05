/**
* @package     Nenkraft
* @author      Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
* @version     0.5.1 (Alpha)
* @copyright   (C) 2017 Gustav 'Nuuf' Åberg
* @license     {@link https://github.com/Nuuf/nenkraft/blob/master/LICENSE}
*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

var namespace = Object.create( null );

__webpack_require__( 3 )( namespace );
__webpack_require__( 4 )( namespace );
__webpack_require__( 11 )( namespace );
__webpack_require__( 12 )( namespace );
__webpack_require__( 13 )( namespace );
__webpack_require__( 14 )( namespace );
__webpack_require__( 15 )( namespace );
__webpack_require__( 16 )( namespace );
__webpack_require__( 17 )( namespace );
__webpack_require__( 18 )( namespace );
__webpack_require__( 19 )( namespace );
__webpack_require__( 20 )( namespace );
__webpack_require__( 21 )( namespace );
__webpack_require__( 22 )( namespace );
__webpack_require__( 23 )( namespace );
__webpack_require__( 24 )( namespace );
__webpack_require__( 25 )( namespace );
__webpack_require__( 26 )( namespace );
__webpack_require__( 27 )( namespace );
__webpack_require__( 28 )( namespace );
__webpack_require__( 29 )( namespace );
__webpack_require__( 30 )( namespace );
__webpack_require__( 31 )( namespace );
__webpack_require__( 32 )( namespace );
__webpack_require__( 33 )( namespace );
__webpack_require__( 34 )( namespace );
__webpack_require__( 35 )( namespace );
__webpack_require__( 36 )( namespace );
__webpack_require__( 37 )( namespace );
__webpack_require__( 38 )( namespace );
__webpack_require__( 39 )( namespace );
__webpack_require__( 40 )( namespace );
__webpack_require__( 41 )( namespace );
__webpack_require__( 42 )( namespace );
__webpack_require__( 43 )( namespace );
__webpack_require__( 44 )( namespace );
__webpack_require__( 45 )( namespace );
__webpack_require__( 46 )( namespace );
__webpack_require__( 47 )( namespace );
__webpack_require__( 48 )( namespace );
__webpack_require__( 49 )( namespace );
__webpack_require__( 50 )( namespace );
__webpack_require__( 51 )( namespace );
__webpack_require__( 52 )( namespace );
__webpack_require__( 53 )( namespace );
__webpack_require__( 54 )( namespace );
__webpack_require__( 55 )( namespace );
__webpack_require__( 56 )( namespace );
__webpack_require__( 57 )( namespace );
__webpack_require__( 58 )( namespace );
__webpack_require__( 59 )( namespace );
__webpack_require__( 60 )( namespace );
__webpack_require__( 61 )( namespace );
__webpack_require__( 62 )( namespace );
__webpack_require__( 63 )( namespace );
__webpack_require__( 64 )( namespace );
__webpack_require__( 65 )( namespace );
__webpack_require__( 66 )( namespace );
__webpack_require__( 67 )( namespace );
__webpack_require__( 68 )( namespace );
__webpack_require__( 69 )( namespace );
__webpack_require__( 70 )( namespace );
__webpack_require__( 71 )( namespace );
__webpack_require__( 72 )( namespace );
__webpack_require__( 73 )( namespace );
__webpack_require__( 74 )( namespace );
__webpack_require__( 75 )( namespace );
__webpack_require__( 76 )( namespace );
__webpack_require__( 77 )( namespace );
__webpack_require__( 78 )( namespace );
__webpack_require__( 79 )( namespace );

global.Nenkraft = global.nk = namespace;

// if ( DEVELOPMENT && module.hot ) module.hot.accept();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  Nenkraft.Geom = Object.create( null );
  Nenkraft.Style = Object.create( null );
  Nenkraft.Math = Object.create( null );
  Nenkraft.Utils = Object.create( null );
  Nenkraft.Texture = Object.create( null );
  Nenkraft.Controller = Object.create( null );
  Nenkraft.Entity = Object.create( null );
  Nenkraft.Path = Object.create( null );
  Nenkraft.Event = Object.create( null );
  Nenkraft.Time = Object.create( null );
  Nenkraft.Input = Object.create( null );
  Nenkraft.CP = Object.create( null );
  Nenkraft.Load = Object.create( null );
  Nenkraft.Animator = Object.create( null );
  Nenkraft.VERSION = '0.5.1 (Alpha)';
  console.log(
    '%cnenkraft %cversion %c' + Nenkraft.VERSION,
    'color:cyan;background-color:black;font-family:Arial;font-size:16px;font-weight:900;',
    'color:magenta;background-color:black;font-family:Arial;font-size:16px;',
    'color:yellow;background-color:black;font-family:Arial;font-size:18px;'
  );

};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Parse ( _data ) {

    var vS = '@vertex@';
    var vE = '@vertex-end@';
    var fS = '@fragment@';
    var fE = '@fragment-end@';
    var s, e;
    s = _data.indexOf( vS ) + vS.length;
    e = _data.indexOf( vE );
    var vShader = _data.substring( s, e );
    s = _data.indexOf( fS ) + fS.length;
    e = _data.indexOf( fE );
    var fShader = _data.substring( s, e );
    return { v: vShader, f: fShader };
  
  }

  Nenkraft.SHADER_CODE = {
    TEXTURE_2D: Parse( __webpack_require__( 5 ) ),
    TEXTURE_2D_BATCH: Parse( __webpack_require__( 6 ) ),
    LINE2D: Parse( __webpack_require__( 7 ) ),
    RECTANGLE: Parse( __webpack_require__( 8 ) ),
    CIRCLE: Parse( __webpack_require__( 9 ) ),
    PIXEL_BATCH: Parse( __webpack_require__( 10 ) )
  };

};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec2 aPosition;\r\nattribute vec2 aTexCoord;\r\n\r\nuniform mat3 uProjection;\r\nuniform mat3 uTranslation;\r\nuniform mat3 uTransformation;\r\n\r\nvarying vec2 vTexCoord;\r\n\r\nvoid main() {\r\n  gl_Position = vec4( ( uProjection * uTranslation * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  vTexCoord = ( uTransformation * vec3( aTexCoord, 1.0 ) ).xy;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nuniform sampler2D uImage;\r\n\r\nvarying vec2 vTexCoord;\r\n\r\nvoid main() {\r\n  gl_FragColor = texture2D( uImage, vTexCoord );\r\n}\r\n@fragment-end@\r\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec2 aPosition;\r\nattribute vec2 aTexCoord;\r\n\r\nattribute vec3 aProjection1;\r\nattribute vec3 aProjection2;\r\nattribute vec3 aProjection3;\r\n\r\nattribute vec3 aTranslation1;\r\nattribute vec3 aTranslation2;\r\nattribute vec3 aTranslation3;\r\n\r\nattribute vec3 aTransformation1;\r\nattribute vec3 aTransformation2;\r\nattribute vec3 aTransformation3;\r\n\r\nvarying vec2 vTexCoord;\r\n\r\nvoid main() {\r\n  mat3 projection = mat3( aProjection1, aProjection2, aProjection3 );\r\n  mat3 translation = mat3( aTranslation1, aTranslation2, aTranslation3 );\r\n  mat3 transformation = mat3( aTransformation1, aTransformation2, aTransformation3 );\r\n  gl_Position = vec4( ( projection * translation * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  vTexCoord = ( transformation * vec3( aTexCoord, 1.0 ) ).xy;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nuniform sampler2D uImage;\r\n\r\nvarying vec2 vTexCoord;\r\n\r\nvoid main() {\r\n  gl_FragColor = texture2D( uImage, vTexCoord );\r\n}\r\n@fragment-end@\r\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec2 aPosition;\r\n\r\nuniform mat3 uProjection;\r\nuniform lowp vec4 uColor;\r\n\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n  gl_Position = vec4( ( uProjection * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  vColor = uColor;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nvarying lowp vec4 vColor;\r\n\r\nvoid main() {\r\n  gl_FragColor = vColor;\r\n}\r\n@fragment-end@\r\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec2 aPosition;\r\n\r\nuniform mat3 uProjection;\r\nuniform lowp vec4 uFillColor;\r\nuniform lowp vec4 uOutlineColor;\r\nuniform vec2 uSize;\r\nuniform float uOutline;\r\n\r\nvarying lowp vec4 vFillColor;\r\nvarying lowp vec4 vOutlineColor;\r\nvarying vec2 vPosition;\r\nvarying float vBorderX;\r\nvarying float vNegBorderX;\r\nvarying float vBorderY;\r\nvarying float vNegBorderY;\r\n\r\nvoid main() {\r\n  gl_Position = vec4( ( uProjection * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  vFillColor = uFillColor;\r\n  vOutlineColor = uOutlineColor;\r\n  vPosition = aPosition;\r\n  vBorderX = -uSize.x * 0.5 + uOutline;\r\n  vNegBorderX = uSize.x * 0.5 - uOutline;\r\n  vBorderY = -uSize.y * 0.5 + uOutline;\r\n  vNegBorderY = uSize.y * 0.5 - uOutline;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nvarying lowp vec4 vFillColor;\r\nvarying lowp vec4 vOutlineColor;\r\nvarying vec2 vPosition;\r\nvarying float vBorderX;\r\nvarying float vNegBorderX;\r\nvarying float vBorderY;\r\nvarying float vNegBorderY;\r\n\r\nvoid main() {\r\n  if (\r\n    vPosition.x > vBorderX &&\r\n    vPosition.x < vNegBorderX && \r\n    vPosition.y > vBorderY && \r\n    vPosition.y < vNegBorderY\r\n  ) {\r\n    gl_FragColor = vFillColor;\r\n  } else {\r\n    gl_FragColor = vOutlineColor;\r\n  }\r\n}\r\n@fragment-end@\r\n"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec2 aPosition;\r\n\r\nuniform mat3 uProjection;\r\nuniform lowp vec4 uFillColor;\r\nuniform lowp vec4 uOutlineColor;\r\nuniform float uRadius;\r\nuniform float uOutline;\r\n\r\nvarying lowp vec4 vFillColor;\r\nvarying lowp vec4 vOutlineColor;\r\nvarying vec2 vPosition;\r\nvarying float vRadius;\r\nvarying float vOutline;\r\n\r\nvoid main() {\r\n  gl_Position = vec4( ( uProjection * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  vFillColor = uFillColor;\r\n  vOutlineColor = uOutlineColor;\r\n  vPosition = aPosition;\r\n  vRadius = uRadius;\r\n  vOutline = uOutline;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nvarying lowp vec4 vFillColor;\r\nvarying lowp vec4 vOutlineColor;\r\nvarying vec2 vPosition;\r\nvarying float vRadius;\r\nvarying float vOutline;\r\n\r\nvoid main() {\r\n  float d = dot( vPosition, vPosition );\r\n  float rs = vRadius * vRadius;\r\n  float ors = vRadius - vOutline;\r\n  ors = ors * ors;\r\n  if ( d < rs && d > ors ) {\r\n    gl_FragColor = vOutlineColor;\r\n  } else if ( d < rs ) {\r\n    gl_FragColor = vFillColor;\r\n  }\r\n}\r\n@fragment-end@"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "/**\r\n* @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>\r\n*/\r\n\r\n@vertex@\r\nattribute vec3 aProjection1;\r\nattribute vec3 aProjection2;\r\nattribute vec3 aProjection3;\r\nattribute vec2 aPosition;\r\nattribute vec4 aColor;\r\nattribute float aPointSize;\r\n\r\nvarying vec4 vColor;\r\n\r\nvoid main() {\r\n  mat3 projection = mat3( aProjection1, aProjection2, aProjection3 );\r\n  gl_Position = vec4( ( projection * vec3( aPosition, 1.0 ) ).xy, 0.0, 1.0 );\r\n  gl_PointSize = aPointSize;\r\n  vColor = aColor;\r\n}\r\n@vertex-end@\r\n\r\n@fragment@\r\nprecision mediump float;\r\n\r\nvarying vec4 vColor;\r\n\r\nvoid main() {\r\n  gl_FragColor = vColor;\r\n}\r\n@fragment-end@\r\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  Nenkraft.Math.PII = Math.PI * 2;
  Nenkraft.Math.DEGREES_TO_RADIANS = Math.PI / 180;
  Nenkraft.Math.RADIANS_TO_DEGREES = 180 / Math.PI;
  Nenkraft.Math.RADIAN = Nenkraft.Math.DEGREES_TO_RADIANS;

  Nenkraft.Math.DegreesToRadians = function ( _angle ) {

    return _angle * Nenkraft.Math.DEGREES_TO_RADIANS;
  
  };

  Nenkraft.Math.DTR = Nenkraft.Math.DegreesToRadians;

  Nenkraft.Math.RadiansToDegrees = function ( _angle ) {

    return _angle * Nenkraft.Math.RADIANS_TO_DEGREES;
  
  };

  Nenkraft.Math.RTD = Nenkraft.Math.RadiansToDegrees;

  Nenkraft.Math.PrecisionRound = function ( _value, _precision ) {

    var divisor = Math.pow( 10, _precision );
    return Math.round( divisor * _value ) / divisor;
  
  };

  Nenkraft.Math.PR = Nenkraft.Math.PrecisionRound;

  Nenkraft.Math.Spread = function ( _start, _amount, _margin, _i ) {

    return ( _start - ( _margin * ( _amount - 1 ) * 0.5 ) + ( _i * _margin ) );
  
  };

  Nenkraft.Math.AttractRepel = function ( _repeller, _attractor, _velocity, _radius, _strength ) {

    var delta = _attractor.SubtractVC( _repeller ), distance = delta.GetMagnitudeSquared();

    if ( distance < _radius * _radius ) {

      var theta = delta.GetAngle();
      _velocity.Add(
        Math.cos( theta ) * _strength,
        Math.sin( theta ) * _strength
      );
    
    }
  
  };

  Nenkraft.Math.LineLineIntersection = function ( _sA, _eA, _sB, _eB ) {

    var d1 = _eA.SubtractVC( _sA );
    var d2 = _eB.SubtractVC( _sB );
    var l = -d2.x * d1.y + d1.x * d2.y;
    var abx = _sA.x - _sB.x;
    var aby = _sA.y - _sB.y;
    var s = ( -d1.y * abx + d1.x * aby ) / l;
    var t = ( d2.x * aby - d2.y * abx ) / l;

    if ( s >= 0 && s <= 1 && t >= 0 && t <= 1 ) {

      d1.Set( _sA.x + ( t * d1.x ), _sA.y + ( t * d1.y ) );
      return d1;
    
    }

    return false;
  
  };

  Nenkraft.Math.ClosestPointOnLine = function ( _s, _e, _v ) {

    var delta = _e.SubtractVC( _s );
    var u = ( ( _v.x - _s.x ) * delta.x + ( _v.y - _s.y ) * delta.y ) / delta.GetMagnitudeSquared();

    if ( u < 0 ) {

      return _s;
    
    } else if ( u > 1 ) {

      return _e;
    
    }

    delta.Set( _s.x + u * delta.x, _s.y + u * delta.y );
    return delta;
  
  };

  Nenkraft.Math.LikeASquareGrid = function ( _points, _width, _marginX, _marginY ) {

    for ( var i = 0, l = _points.length, columns = ( _width / _marginX ) | 0; i < l; ++i ) {

      _points[ i ].Set( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    
    }
  
  };

  Nenkraft.Math.SquareGrid = function ( _width, _height, _marginX, _marginY, _creatableClass ) {

    var grid = [];

    for ( var i = 0, columns = ( _width / _marginX ) | 0, rows = ( _height / _marginY ) | 0, l = columns * rows; i < l; ++i ) {

      grid.push( new _creatableClass( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY ) );
    
    }

    return grid;
  
  };

  Nenkraft.Math.TriRectArray = function ( _x, _y, _w, _h, _arr ) {

    if ( _arr != null ) {

      _arr[ 0 ] = _x;
      _arr[ 1 ] = _y;
      _arr[ 2 ] = _x + _w;
      _arr[ 3 ] = _y;
      _arr[ 4 ] = _x;
      _arr[ 5 ] = _y + _h;
      _arr[ 6 ] = _x;
      _arr[ 7 ] = _y + _h;
      _arr[ 8 ] = _x + _w;
      _arr[ 9 ] = _y;
      _arr[ 10 ] = _x + _w;
      _arr[ 11 ] = _y + _h;
      return _arr;
    
    }

    return [
      _x, _y,
      _x + _w, _y,
      _x, _y + _h,
      _x, _y + _h,
      _x + _w, _y,
      _x + _w, _y + _h
    ];
  
  };

  Object.defineProperty( Nenkraft.Math, 'PII', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIAN', { writable: false } );

};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Assert ( _data, _compare, _value, _noSelfAssert ) {

    if ( _noSelfAssert == undefined || typeof _data.Assert !== 'function' ) {

      switch ( _compare ) {

        case Assert.IS:
          Is( _data, _value, _compare );
          return;
        case Assert.IS_NOT:
          IsNot( _data, _value, _compare );
          return;
        case Assert.IS_SAME_TYPE:
          IsSameType( _data, _value, _compare );
          return;
        case Assert.IS_NOT_SAME_TYPE:
          IsNotSameType( _data, _value, _compare );
          return;
        case Assert.IS_INSTANCE_OF:
          IsInstanceOf( _data, _value, _compare );
          return;
        case Assert.IS_NOT_INSTANCE_OF:
          IsNotInstanceOf( _data, _value, _compare );
          return;
        case Assert.IS_LESS_THAN:
          IsLessThan( _data, _value, _compare );
          return;
        case Assert.IS_GREATER_THAN:
          IsGreaterThan( _data, _value, _compare );
          return;
        case Assert.IS_LESS_THAN_OR_EQUAL:
          IsLessThanOrEqual( _data, _value, _compare );
          return;
        case Assert.IS_GREATER_THAN_OR_EQUAL:
          IsGreaterThanOrEqual( _data, _value, _compare );
          return;
        default:
          throw new Error( 'No comparison: ' + _compare );
      
      }
    
    } else {

      _data.Assert( _compare, _value );
    
    }
  
  }

  function Is ( _data, _value, _compare ) {

    var failed = false;

    if ( _data !== _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsNot ( _data, _value, _compare ) {

    var failed = false;

    if ( _data === _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsSameType ( _data, _value, _compare ) {

    var failed = false;

    if ( Array.isArray( _data ) || Array.isArray( _value ) ) {

      if ( !Array.isArray( _data ) && !Array.isArray( _value ) ) {

        failed = true;
      
      }
    
    } else if ( _data === null || _value === null ) {

      if ( _data !== _value ) {

        failed = true;
        
      }
      
    }
    else if ( typeof _data !== typeof _value ) {

      failed = true;
      
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsNotSameType ( _data, _value, _compare ) {

    var failed = false;

    if ( Array.isArray( _data ) || Array.isArray( _value ) ) {

      if ( Array.isArray( _data ) && ( Array.isArray( _value ) ) ) {

        failed = true;
      
      }
    
    } else if ( _data === null || _value === null ) {

      if ( _value === _data ) {

        failed = true;
        
      }
      
    }
    else if ( typeof _data === typeof _value ) {

      failed = true;
      
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsInstanceOf ( _data, _value, _compare ) {

    var failed = false;

    if ( !( _data instanceof _value ) ) {

      failed = true;
    
    }

    Check( failed, _data, _value.name, _compare );
  
  }

  function IsNotInstanceOf ( _data, _value, _compare ) {

    var failed = false;

    if ( _data instanceof _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value.name, _compare );
  
  }

  function IsLessThan ( _data, _value, _compare ) {

    var failed = false;

    if ( _data >= _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsGreaterThan ( _data, _value, _compare ) {

    var failed = false;

    if ( _data <= _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsLessThanOrEqual ( _data, _value, _compare ) {

    var failed = false;

    if ( _data > _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function IsGreaterThanOrEqual ( _data, _value, _compare ) {

    var failed = false;

    if ( _data < _value ) {

      failed = true;
    
    }

    Check( failed, _data, _value, _compare );
  
  }

  function Check ( _failed, _data, _value, _compare ) {

    if ( _failed ) {

      ErrorInfo( _data, _value, _compare );
      throw new Error( 'Assertion failed: ' + _compare );
    
    } else if ( Assert.LOG && window ) {

      SuccessLog( _data, _value, _compare );
      
    }
  
  }

  function ErrorInfo ( _data, _value, _compare ) {

    switch ( _compare ) {

      case Assert.IS:
        _compare = Assert.IS_NOT;
        break;
      case Assert.IS_NOT:
        _compare = Assert.IS;
        break;
      case Assert.IS_SAME_TYPE:
        _compare = Assert.IS_NOT_SAME_TYPE;
        break;
      case Assert.IS_NOT_SAME_TYPE:
        _compare = Assert.IS_SAME_TYPE;
        break;
      case Assert.IS_INSTANCE_OF:
        _compare = Assert.IS_NOT_INSTANCE_OF;
        break;
      case Assert.IS_NOT_INSTANCE_OF:
        _compare = Assert.IS_INSTANCE_OF;
        break;
      case Assert.IS_LESS_THAN:
        _compare = Assert.IS_GREATER_THAN_OR_EQUAL;
        break;
      case Assert.IS_GREATER_THAN:
        _compare = Assert.IS_LESS_THAN_OR_EQUAL;
        break;
      case Assert.IS_LESS_THAN_OR_EQUAL:
        _compare = Assert.IS_GREATER_THAN;
        break;
      case Assert.IS_GREATER_THAN_OR_EQUAL:
        _compare = Assert.IS_LESS_THAN;
        break;
      default:
        throw new Error( 'Unexpected error' );
    
    }

    console.error( _data, _compare, _value );
  
  }

  function SuccessLog ( _data, _value, _compare ) {

    console.log( '%c<<||-?START?-||>>', 'background-color: black; color: #0FF; padding: 0px 25px;' );
    console.log( '%cAssertion success: ', 'background-color: #333; color: #0F0; padding: 0px 25px;' );
    console.log( _data );
    console.log( _compare );
    console.log( _value );
    console.log( '%c>>||-?END?-||<<', 'background-color: black; color: #FF0; padding: 0px 25px;' );
  
  }

  Assert.IS = 'IS';
  Assert.IS_NOT = 'IS NOT';
  Assert.IS_SAME_TYPE = 'IS SAME TYPE';
  Assert.IS_NOT_SAME_TYPE = 'IS NOT SAME TYPE';
  Assert.IS_INSTANCE_OF = 'IS INSTANCE OF';
  Assert.IS_NOT_INSTANCE_OF = 'IS NOT INSTANCE OF';
  Assert.IS_LESS_THAN = 'IS LESS THAN';
  Assert.IS_GREATER_THAN = 'IS GREATER THAN';
  Assert.IS_LESS_THAN_OR_EQUAL = 'IS LESS THAN OR EQUAL';
  Assert.IS_GREATER_THAN_OR_EQUAL = 'IS GREATER THAN OR EQUAL';

  Assert.GlobalAssign = function () {

    var g;

    if ( window ) {

      g = window;
    
    } else if ( global ) {

      g = global;
    
    }

    if ( g ) {

      g.IS = Assert.IS;
      g.IS_NOT = Assert.IS_NOT;
      g.IS_SAME_TYPE = Assert.IS_SAME_TYPE;
      g.IS_NOT_SAME_TYPE = Assert.IS_NOT_SAME_TYPE;
      g.IS_INSTANCE_OF = Assert.IS_INSTANCE_OF;
      g.IS_NOT_INSTANCE_OF = Assert.IS_NOT_INSTANCE_OF;
      g.IS_LESS_THAN = Assert.IS_LESS_THAN;
      g.IS_GREATER_THAN = Assert.IS_GREATER_THAN;
      g.IS_LESS_THAN_OR_EQUAL = Assert.IS_LESS_THAN_OR_EQUAL;
      g.IS_GREATER_THAN_OR_EQUAL = Assert.IS_GREATER_THAN_OR_EQUAL;
    
    } else {

      throw new Error( 'No global namespace' );
    
    }
  
  };

  Assert.LOG = false;
  Nenkraft.Utils.Assert = Assert;
  Nenkraft.Assert = Assert;

};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Pool ( _class ) {

    if ( !( this instanceof Pool ) ) return new Pool( _class );
    this.class = _class;
    this.objects = [];
  
  }

  Pool.prototype = Object.create( null );
  Pool.prototype.constructor = Pool;
  // Static

  // Members
  Pool.prototype.class = null;
  Pool.prototype.objects = null;
  Pool.prototype.floodFunction = null;
  Pool.prototype.floodAmount = 100;
  Pool.prototype.context = null;

  // Methods
  Pool.prototype.Store = function ( _object ) {

    this.objects.push( _object );
  
  };

  Pool.prototype.Retrieve = function () {

    if ( this.objects.length === 0 ) {

      this.Flood();
    
    }

    return this.objects.pop();
  
  };

  Pool.prototype.Flood = function ( _func, _amount, _context ) {

    if ( _func ) this.floodFunction = _func;
    if ( _amount ) this.floodAmount = _amount;
    if ( _context ) this.context = _context;

    for ( var i = 0; i < this.floodAmount; ++i ) {

      if ( this.class != null ) {

        var object = new this.class();
        this.Store( object );
        this.floodFunction.call( this.context, object );
      
      } else {

        this.Store( this.floodFunction.call( this.context ) );
      
      }
    
    }
  
  };

  Pool.prototype.Flush = function () {

    this.objects.length = 0;
  
  };

  Pool.prototype.Clean = function () {

    var amount = this.objects.length;
    this.Flush();
    this.Flood( undefined, amount );
  
  };

  Nenkraft.Utils.Pool = Pool;
  Nenkraft.Pool = Pool;

};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

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
  // Static

  // Members
  Cache.prototype.type = null;

  // Methods
  Cache.prototype.Store = function ( _item ) {

    var valid = false;

    if ( _item == null ) {

      console.warn( 'Item is null. Cannot store null item.' );
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

      console.warn( 'Item is not valid. Check the item id. The item has not been stored' );
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

    return this.Store( _item );
  
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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

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

  Nenkraft.Utils.ApplyProperties = function ( _object, _props ) {

    if ( _props !== undefined ) {

      var key;

      for ( key in _props ) {

        if ( _object[ key ] !== undefined ) _object[ key ] = _props[ key ];
      
      }
    
    }
  
  };

  Nenkraft.Utils.Nested = function ( _object, _string, _getObjectHolding, _set, _value, _splitter ) {

    if ( typeof _string === 'string' ) {

      _splitter = _splitter === undefined ? '.' : _splitter;
      _string = _string.split( _splitter );
    
    }

    var key;

    if ( _string.length > 1 ) {

      key = _string.shift();

      if ( _object[ key ] !== undefined ) {

        return Nenkraft.Utils.Nested( _object[ key ], _string, _getObjectHolding, _set, _value, _splitter );
      
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

  Nenkraft.Utils.IsObjectEmpty = function ( _object ) {

    for ( var key in _object ) {

      if ( _object.hasOwnProperty( key ) ) {

        return false;
      
      }
    
    }

    return JSON.stringify( _object ) === JSON.stringify( {} );
  
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

            if ( !Nenkraft.Utils.IsObjectEmpty( temp ) ) {

              o[ child.nodeName ].push( temp );
            
            }
          
          }

          pchild = Nenkraft.Utils.ParsedXMLToJSON( child, _deleteWhitespace );

          if ( !Nenkraft.Utils.IsObjectEmpty( pchild ) ) {

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

  var DC = Nenkraft.Utils.DeepClone = function( _object ) {

    var r = null;
    var ia = false;

    if ( typeof _object === 'function' ) {

      throw new TypeError( 'Object was of type: function. Not acceptable.' );

    }

    if ( Array.isArray( _object ) ) {

      r = [];
      ia = true;

    } else if ( typeof obj === 'object' ) {

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

};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var HexMap = Nenkraft.Utils.Base16ToBase10;
  var Clamp = Nenkraft.Utils.Clamp;

  function Color ( _r, _g, _b, _a ) {

    if ( !( this instanceof Color ) ) return new Color( _r, _g, _b, _a );
    this.channel = new Float32Array( [
      _r == null ? 0 : _r,
      _g == null ? 0 : _g,
      _b == null ? 0 : _b,
      _a == null ? 1 : _a
    ] );
    this.ComputeValueRGBA();
  
  }

  Color.prototype = Object.create( null );
  Color.prototype.constructor = Color;
  // Static
  var NORM = Color.NORM = 1 / 255;
  // Members
  Color.prototype.value = '';
  Color.prototype.currentConversion = '';

  // Methods
  Color.prototype.Copy = function () {

    var color = new Color( this.channel[ 0 ], this.channel[ 1 ], this.channel[ 2 ], this.channel[ 3 ] );
    color.value = this.value;
    color.currentConversion = this.currentConversion;
    return color;
  
  };

  Color.prototype.ComputeValueRGBA = function () {

    this.value = 'rgba('.concat( this.channel.join( ',' ).concat( ')' ) );
    return this.value;
  
  };

  Color.prototype.ComputeValueHSLA = function () {

    this.value = 'hsla(' + this.channel[ 0 ] + ',' + this.channel[ 1 ] + '%,' + this.channel[ 2 ] + '%,' + this.channel[ 3 ] + ')';
    return this.value;
  
  };

  Color.prototype.ComputeValueHex = function () {

    this.value = '#' + this.channel[ 0 ].toString( 16 ) + this.channel[ 1 ].toString( 16 ) + this.channel[ 2 ].toString( 16 );
    return this.value;
  
  };

  Color.prototype.ConvertToHSLA = function ( _round ) {

    var r = this.channel[ 0 ] / 255, g = this.channel[ 1 ] / 255, b = this.channel[ 2 ] / 255;
    var max = Math.max( r, g, b ), min = Math.min( r, g, b ), maxnmin = max - min, maxpmin = max + min;
    var h = 0, s = 0, l = maxpmin * 0.5;

    if ( max !== min ) {

      s = ( l > 0.5 ) ? maxnmin / ( 2 - max - min ) : maxnmin / ( max + min );
      if ( max === r ) h = ( g - b ) / maxnmin + ( ( g < b ) ? 6 : 0 );
      else if ( max === g ) h = ( b - r ) / maxnmin + 2;
      else h = ( r - g ) / maxnmin + 4;
      h /= 6;
    
    }

    this.channel[ 0 ] = h * 360, this.channel[ 1 ] = s * 100, this.channel[ 2 ] = l * 100;

    if ( _round === true ) {

      this.channel[ 0 ] = Math.round( this.channel[ 0 ] );
      this.channel[ 1 ] = Math.round( this.channel[ 1 ] );
      this.channel[ 2 ] = Math.round( this.channel[ 2 ] );
    
    }

    this.currentConversion = 'hsl';
    this.ComputeValueHSLA();
  
  };

  Color.prototype.SetRGB = function ( _r, _g, _b, _noCompute ) {

    var min = 0, max = 255;
    this.channel[ 0 ] = Clamp( _r, min, max );
    this.channel[ 1 ] = Clamp( _g, min, max );
    this.channel[ 2 ] = Clamp( _b, min, max );
    this.currentConversion = 'rgb';
    if ( !_noCompute ) this.ComputeValueRGBA();
  
  };

  Color.prototype.SetRGBA = function ( _r, _g, _b, _a ) {

    this.SetRGB( _r, _g, _b, true );
    this.channel[ 3 ] = Clamp( _a, 0, 1 );
    this.ComputeValueRGBA();
  
  };

  Color.prototype.SetHex = function ( _hex ) {

    _hex = _hex.replace( /#/g, '' );
    var strs = _hex.match( /.{2}/g );
    strs = strs.map( HexMap );
    if ( strs[ 3 ] == null ) strs[ 3 ] = 1;
    this.SetRGBA( strs[ 0 ], strs[ 1 ], strs[ 2 ], strs[ 3 ] );
  
  };

  Color.prototype.IncreaseChannel = function ( _channel, _value ) {

    this.channel[ _channel ] += _value;
    if ( this.currentConversion === 'rgb' ) this.ComputeValueRGBA();
    else if ( this.currentConversion === 'hsl' ) this.ComputeValueHSLA();
  
  };

  Color.prototype.SetChannel = function ( _channel, _value ) {

    this.channel[ _channel ] = _value;
    if ( this.currentConversion === 'rgb' ) this.ComputeValueRGBA();
    else if ( this.currentConversion === 'hsl' ) this.ComputeValueHSLA();
  
  };

  Color.prototype.Normalize = function () {

    this.channel[ 0 ] = NORM * this.channel[ 0 ];
    this.channel[ 1 ] = NORM * this.channel[ 1 ];
    this.channel[ 2 ] = NORM * this.channel[ 2 ];
  
  };

  Object.defineProperty( Color.prototype, 'r', {
    set: function ( _value ) {

      this.channel[ 0 ] = _value;
    
    },
    get: function () {

      return this.channel[ 0 ];
    
    }
  } );
  Object.defineProperty( Color.prototype, 'g', {
    set: function ( _value ) {

      this.channel[ 1 ] = _value;
    
    },
    get: function () {

      return this.channel[ 1 ];
    
    }
  } );
  Object.defineProperty( Color.prototype, 'b', {
    set: function ( _value ) {

      this.channel[ 2 ] = _value;
    
    },
    get: function () {

      return this.channel[ 2 ];
    
    }
  } );
  Object.defineProperty( Color.prototype, 'a', {
    set: function ( _value ) {

      this.channel[ 3 ] = _value;
    
    },
    get: function () {

      return this.channel[ 3 ];
    
    }
  } );

  Nenkraft.Color = Color;

};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function FlagList () {

    if ( !( this instanceof FlagList ) ) return new FlagList();
  
  }

  FlagList.prototype = Object.create( null );
  FlagList.prototype.constructor = FlagList;
  /*
   *Static
   *Members
   */
  FlagList.prototype.value = 0;

  // Methods
  FlagList.prototype.Add = function ( _value ) {

    this.value |= _value;
  
  };

  FlagList.prototype.Remove = function ( _value ) {

    this.value = ( this.value & ~_value );
  
  };

  FlagList.prototype.Compare = function ( _value ) {

    return ( ( this.value & _value ) !== 0 );
  
  };

  FlagList.prototype.Holds = function ( _value ) {

    return ( ( this.value & _value ) === _value );
  
  };

  FlagList.prototype.Toggle = function ( _value ) {

    this.value ^= _value;
  
  };

  Nenkraft.Utils.FlagList = FlagList;

};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function FlagEnum () {

    if ( !( this instanceof FlagEnum ) ) return new FlagEnum();
  
  }

  FlagEnum.prototype = Object.create( null );
  FlagEnum.prototype.constructor = FlagEnum;
  /*
   *Static
   *Members
   */
  FlagEnum.prototype.NONE = 0;
  FlagEnum.prototype.next = 1;

  // Methods
  FlagEnum.prototype.Add = function ( _id ) {

    _id = _id.toUpperCase();

    if ( this[ _id ] === undefined ) {

      this[ _id ] = this.next;
      this.next = this.next << 1;
    
    }
  
  };

  Nenkraft.Utils.FlagEnum = FlagEnum;

};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Fill ( _props ) {

    if ( !( this instanceof Fill ) ) return new Fill( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Fill.prototype = Object.create( null );
  Fill.prototype.constructor = Fill;
  // Static

  // Members
  Fill.prototype.color = '#444499';
  Fill.prototype.applied = true;

  // Methods
  Fill.prototype.Apply = function ( _rc ) {

    _rc.fillStyle = this.color;
  
  };

  Nenkraft.Style.Fill = Fill;

};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Shadow ( _props ) {

    if ( !( this instanceof Shadow ) ) return new Shadow( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Shadow.prototype = Object.create( null );
  Shadow.prototype.constructor = Shadow;
  // Static

  // Members
  Shadow.prototype.color = '#000000';
  Shadow.prototype.blur = 5;
  Shadow.prototype.offsetX = 0;
  Shadow.prototype.offsetY = 0;
  Shadow.prototype.applied = false;

  // Methods
  Shadow.prototype.Apply = function ( _rc ) {

    _rc.shadowColor = this.color;
    _rc.shadowBlur = this.blur;
    _rc.shadowOffsetX = this.offsetX;
    _rc.shadowOffsetY = this.offsetY;
  
  };

  Nenkraft.Style.Shadow = Shadow;

};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Stroke ( _props ) {

    if ( !( this instanceof Stroke ) ) return new Stroke( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Stroke.prototype = Object.create( null );
  Stroke.prototype.constructor = Stroke;
  // Static
  Nenkraft.Style.LINE_CAP = {
    ROUND: 'round',
    BUTT: 'butt',
    SQUARE: 'square'
  };
  Nenkraft.Style.LINE_JOIN = {
    BEVEL: 'bevel',
    ROUND: 'round',
    MITER: 'miter'
  };
  // Members
  Stroke.prototype.color = '#00FFFF';
  Stroke.prototype.lineCap = Nenkraft.Style.LINE_CAP.ROUND;
  Stroke.prototype.lineJoin = Nenkraft.Style.LINE_JOIN.ROUND;
  Stroke.prototype.lineWidth = 1;
  Stroke.prototype.miterLimit = 10;
  Stroke.prototype.applied = true;

  // Methods
  Stroke.prototype.Apply = function ( _rc ) {

    _rc.strokeStyle = this.color;
    _rc.lineCap = this.lineCap;
    _rc.lineJoin = this.lineJoin;
    _rc.lineWidth = this.lineWidth;
    _rc.miterLimit = this.miterLimit;
  
  };

  Nenkraft.Style.Stroke = Stroke;

};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Text ( _props ) {

    if ( !( this instanceof Text ) ) return new Text( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
    this.ConcatFont();
  
  }

  Text.prototype = Object.create( null );
  Text.prototype.constructor = Text;
  // Static
  Nenkraft.Style.TEXT_ALIGN = {
    START: 'start',
    END: 'end',
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right'
  };
  Nenkraft.Style.TEXT_BASELINE = {
    ALPHABETIC: 'alphabetic',
    TOP: 'top',
    HANGING: 'hanging',
    MIDDLE: 'middle',
    IDEOGRAPHIC: 'ideographic',
    BOTTOM: 'bottom'
  };
  // Members
  Text.prototype.fillColor = '#444499';
  Text.prototype.strokeColor = '#00FFFF';
  Text.prototype.fontSize = 22;
  Text.prototype.font = null;
  Text.prototype.fontFamily = 'Arial';
  Text.prototype.align = Nenkraft.Style.TEXT_ALIGN.LEFT;
  Text.prototype.baseline = Nenkraft.Style.TEXT_BASELINE.TOP;
  Text.prototype.applied = true;
  Text.prototype.lineWidth = 0.5;

  // Methods
  Text.prototype.Apply = function ( _rc ) {

    _rc.fillStyle = this.fillColor;
    _rc.strokeStyle = this.strokeColor;
    _rc.font = this.font;
    _rc.textAlign = this.align;
    _rc.textBaseline = this.baseline;
    _rc.lineWidth = this.lineWidth;
  
  };

  Text.prototype.ConcatFont = function () {

    this.font = this.fontSize + 'px ' + this.fontFamily;
  
  };

  Nenkraft.Style.Text = Text;

};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Pixel ( _props ) {

    if ( !( this instanceof Pixel ) ) return new Pixel( _props );
    Nenkraft.Utils.ApplyProperties( this, _props );
  
  }

  Pixel.prototype = Object.create( null );
  Pixel.prototype.constructor = Pixel;
  // Static

  // Members
  Pixel.prototype.color = '#000000';
  Pixel.prototype.size = 1.0;
  // Methods
  Nenkraft.Style.Pixel = Pixel;

};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  Nenkraft.Style.CreateAll = function ( _style ) {

    return {
      fill: new Nenkraft.Style.Fill( _style ? _style.fill : null ),
      stroke: new Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: new Nenkraft.Style.Shadow( _style ? _style.shadow : null ),
      text: new Nenkraft.Style.Text( _style ? _style.text : null ),
      pixel: new Nenkraft.Style.Pixel( _style ? _style.pixel : null )
    };
  
  };

  Nenkraft.Style.CreateFSSa = function ( _style ) {

    return {
      fill: new Nenkraft.Style.Fill( _style ? _style.fill : null ),
      stroke: new Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: new Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateSSa = function ( _style ) {

    return {
      stroke: new Nenkraft.Style.Stroke( _style ? _style.stroke : null ),
      shadow: new Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateFSa = function ( _style ) {

    return {
      fill: new Nenkraft.Style.Fill( _style ? _style.fill : null ),
      shadow: new Nenkraft.Style.Shadow( _style ? _style.shadow : null )
    };
  
  };

  Nenkraft.Style.CreateSaT = function ( _style ) {

    return {
      shadow: new Nenkraft.Style.Shadow( _style ? _style.shadow : null ),
      text: new Nenkraft.Style.Text( _style ? _style.text : null )
    };
  
  };

  Nenkraft.Style.CreateP = function ( _style ) {

    return {
      pixel: new Nenkraft.Style.Pixel( _style ? _style.pixel : null )
    };
  
  };

  Nenkraft.Style.GCO = Object.create( null );
  Nenkraft.Style.GCO.SOURCE_OVER = Nenkraft.Style.GCO.DEFAULT = 'source-over';
  Nenkraft.Style.GCO.SOURCE_IN = 'source-in';
  Nenkraft.Style.GCO.SOURCE_OUT = 'source-out';
  Nenkraft.Style.GCO.SOURCE_ATOP = 'source-atop';
  Nenkraft.Style.GCO.DESTINATION_OVER = 'destination-over';
  Nenkraft.Style.GCO.DESTINATION_IN = 'destination-in';
  Nenkraft.Style.GCO.DESTINATION_OUT = 'destination-out';
  Nenkraft.Style.GCO.DESTINATION_ATOP = 'destination-atop';
  Nenkraft.Style.GCO.LIGHTER = 'lighter';
  Nenkraft.Style.GCO.COPY = 'copy';
  Nenkraft.Style.GCO.XOR = 'xor';
  Nenkraft.Style.GCO.MULTIPLY = 'multiply';
  Nenkraft.Style.GCO.OVERLAY = 'overlay';
  Nenkraft.Style.GCO.DARKEN = 'darken';
  Nenkraft.Style.GCO.LIGHTEN = 'lighten';
  Nenkraft.Style.GCO.COLOR_DODGE = 'color-dodge';
  Nenkraft.Style.GCO.COLOR_BURN = 'color-burn';
  Nenkraft.Style.GCO.HARD_LIGHT = 'hard-light';
  Nenkraft.Style.GCO.SOFT_LIGHT = 'soft-light';
  Nenkraft.Style.GCO.DIFFERENCE = 'difference';
  Nenkraft.Style.GCO.EXCLUSION = 'exclusion';
  Nenkraft.Style.GCO.HUE = 'hue';
  Nenkraft.Style.GCO.SATURATION = 'saturation';
  Nenkraft.Style.GCO.COLOR = 'color';
  Nenkraft.Style.GCO.LUMINOSITY = 'luminosity';

};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function BasicTexture ( _image, _id, _w, _h, _fullWidth, _fullHeight ) {

    if ( !( this instanceof BasicTexture ) ) return new BasicTexture( _image, _w, _h, _fullWidth, _fullHeight );
    this.image = _image;

    if ( _id != null ) {

      this.id = _id;
    
    } else {

      this.id = _image.id;
    
    }

    if ( _w != null ) {

      this.w = _w;
    
    } else {

      this.w = _image.naturalWidth;
    
    }

    if ( _h != null ) {

      this.h = _h;
    
    } else {

      this.h = _image.naturalHeight;
    
    }

    if ( _fullWidth != null ) {

      this.fw = _fullWidth;
    
    } else {

      this.fw = _image.naturalWidth;
    
    }

    if ( _fullHeight != null ) {

      this.fh = _fullHeight;
    
    } else {

      this.fh = _image.naturalHeight;
    
    }
  
  }

  BasicTexture.prototype = Object.create( null );
  BasicTexture.prototype.constructor = BasicTexture;
  // Static

  // Members
  BasicTexture.prototype.image = null;
  BasicTexture.prototype.id = null;
  BasicTexture.prototype.w = 0;
  BasicTexture.prototype.h = 0;
  BasicTexture.prototype.fw = 0;
  BasicTexture.prototype.fh = 0;
  // Methods
  Nenkraft.Texture.BasicTexture = BasicTexture;
  Nenkraft.BasicTexture = BasicTexture;

};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Spritesheet ( _basicTexture, _data ) {

    if ( !( this instanceof Spritesheet ) ) return new Spritesheet( _basicTexture, _data );

    this.id = _basicTexture.id;
    this.basicTexture = _basicTexture;
    this.data = _data;
    this.frameCache = new Nenkraft.Utils.Cache( Nenkraft.Animator.Frame );
  
  }

  Spritesheet.prototype = Object.create( null );
  Spritesheet.prototype.constructor = Spritesheet;
  // Static

  // Members
  Spritesheet.prototype.id = null;
  Spritesheet.prototype.basicTexture = null;
  Spritesheet.prototype.data = null;
  Spritesheet.prototype.frameCache = null;

  // Methods
  Spritesheet.prototype.GenerateFrames = function() {

    var data = this.data, frames = data.frames, frameTags = data.meta.frameTags;

    for ( var i = 0, l = frames.length, frame, frameData, frameTag; i < l; ++i ) {

      frame = frames[i];
      frameData = frame.frame;
      frameTag = frameTags[i];
      this.frameCache.Store( new Nenkraft.Animator.Frame(
        frameData.x,
        frameData.y,
        frameData.w,
        frameData.h,
        frame.duration,
        frameTag ? frameTag.name : null
      ) ); 

    }
  
  };

  Spritesheet.prototype.GetFrameById = function( _id ) {

    return this.frameCache.GetById( _id );
  
  };

  Nenkraft.Texture.Spritesheet = Spritesheet;
  Nenkraft.Spritesheet = Spritesheet;

};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function LocalListener ( _holderContext, _listenerContext, _handle, _removeOnNextCall ) {

    if ( !( this instanceof LocalListener ) ) return new LocalListener( _holderContext, _listenerContext, _handle, _removeOnNextCall );
    this.context = _listenerContext;
    this.holderContext = _holderContext;
    this.handle = _handle;
    this.removeOnNextCall = _removeOnNextCall;
  
  }

  LocalListener.prototype = Object.create( null );
  LocalListener.prototype.constructor = LocalListener;
  // Static

  // Members

  // Methods
  LocalListener.prototype.Execute = function () {

    this.handle.apply( this.context, arguments );

    if ( this.removeOnNextCall === true ) {

      this.Remove();
    
    }
  
  };

  LocalListener.prototype.Remove = function () {

    this.holderContext.Remove( this.handle, this.context );
  
  };

  Nenkraft.Event.LocalListener = LocalListener;
  Nenkraft.LocalListener = LocalListener;

};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function LocalEvent () {

    if ( !( this instanceof LocalEvent ) ) return new LocalEvent();
    this.listeners = [];
  
  }

  LocalEvent.prototype = Object.create( null );
  LocalEvent.prototype.constructor = LocalEvent;
  // Static

  // Members
  LocalEvent.prototype.stopPropagation = false;
  LocalEvent.prototype.target = null;
  LocalEvent.prototype.data = null;

  // Methods
  LocalEvent.prototype.GetListenerIndex = function ( _handle, _context ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return -1;

    for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

      listener = listeners[ i ];

      if ( listener.context === _context && listener.handle === _handle ) {

        return i;
      
      }
    
    }

    return -1;
  
  };

  LocalEvent.prototype.Add = function ( _handle, _context, _removeOnNextCall ) {

    var listener = new Nenkraft.LocalListener( this, _context, _handle, _removeOnNextCall );
    this.listeners.push( listener );
  
  };

  LocalEvent.prototype.Remove = function ( _handle, _context ) {

    var ix = this.GetListenerIndex( _handle, _context );

    if ( ix !== -1 ) {

      this.listeners.splice( ix, 1 );
    
    }
  
  };

  LocalEvent.prototype.Dump = function ( _context ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return;

    if ( _context !== undefined ) {

      for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

        listener = listeners[ i ];

        if ( listener.context === _context ) {

          this.listeners.splice( i, 1 );
        
        }
      
      }
    
    }
    else {

      this.listeners.length = 0;
    
    }
  
  };

  LocalEvent.prototype.Dispatch = function ( _target, _data ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return;
    listeners = listeners.slice();
    this.stopPropagation = false;
    this.target = _target;
    this.data = _data;

    for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

      listener = listeners[ i ];
      listener.Execute( this );
      if ( this.stopPropagation === true ) break;
    
    }

    delete this.target;
    delete this.data;
  
  };

  Nenkraft.Event.LocalEvent = LocalEvent;
  Nenkraft.LocalEvent = LocalEvent;

};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Ticker ( _onProcess, _rate, _doNotStart ) {

    if ( !( this instanceof Ticker ) ) return new Ticker( _onProcess, _rate, _doNotStart );
    if ( typeof _onProcess !== 'function' ) throw new Error( 'Ticker: An onProcess function is required!' );
    this.SetDesiredRate( _rate );
    this.onProcess = _onProcess;

    if ( _doNotStart == undefined || _doNotStart === false ) {

      this.StartAF();
    
    }
  
  }

  Ticker.prototype = Object.create( null );
  Ticker.prototype.constructor = Ticker;
  // Static
  Ticker.LOG = true;
  Ticker.GLOBAL_CSS = 'background-color:black;font-family:Arial;font-size:16px;';

  Ticker.Log = function () {

    if ( Ticker.LOG === false ) return;
    console.log.apply( null, arguments );
  
  };

  // Members
  Ticker.prototype.intervalId = null;
  Ticker.prototype.afId = null;
  Ticker.prototype.delta = 0;
  Ticker.prototype.then = 0;
  Ticker.prototype.now = 0;
  Ticker.prototype.desiredRate = 0;
  Ticker.prototype.supplyDelta = true;

  // Methods
  Ticker.prototype.Process = function () {

    this.ComputeDelta();
    this.onProcess( this.delta );
  
  };

  Ticker.prototype.ProcessAF = function () {

    this.ComputeDelta();
    this.onProcess( this.delta );
    if ( this.afId === null ) return;
    this.afId = requestAnimationFrame( this.ProcessAF );
  
  };

  Ticker.prototype.ComputeDelta = function () {

    this.now = new Date().getTime();
    this.delta = this.now - this.then;
    this.then = this.now;
  
  };

  Ticker.prototype.GetTPS = function () {

    return Nenkraft.Math.PR( 1 / this.delta * 1000, 2 );
  
  };

  Ticker.prototype.SetDesiredRate = function ( _rate ) {

    this.desiredRate = _rate === undefined ? 16.66 : 1000 / _rate;
  
  };

  Ticker.prototype.Start = function ( _force ) {

    if ( this.afId !== null ) {

      Ticker.Log( '%cTicker: RAF is running!', 'color:red;'.concat( Ticker.GLOBAL_CSS ) );
      return null;
    
    }

    if ( this.intervalId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.intervalId = setInterval( this.Process, this.desiredRate );
        Ticker.Log( '%cTicker: Starting interval!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
      else {

        Ticker.Log( '%cTicker: Interval already running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
    
    }
    else {

      this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      Ticker.Log( '%cTicker: Starting interval!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Ticker.prototype.StartAF = function ( _force ) {

    if ( this.intervalId !== null ) {

      Ticker.Log( '%cTicker: Interval is running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      return null;
    
    }

    if ( this.afId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.ProcessAF = this.ProcessAF.bind( this );
        this.afId = requestAnimationFrame( this.ProcessAF );
        Ticker.Log( '%cTicker: Starting RAF!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
      else {

        Ticker.Log( '%cTicker: RAF already running!', 'color:#F00;'.concat( Ticker.GLOBAL_CSS ) );
      
      }
    
    }
    else {

      this.ProcessAF = this.ProcessAF.bind( this );
      this.afId = requestAnimationFrame( this.ProcessAF );
      Ticker.Log( '%cTicker: Starting RAF!', 'color:#0F0;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Ticker.prototype.Stop = function () {

    if ( this.intervalId !== null ) {

      clearInterval( this.intervalId );
      this.intervalId = null;
      Ticker.Log( '%cTicker: Stopping interval!', 'color:cyan;'.concat( Ticker.GLOBAL_CSS ) );
    
    }

    if ( this.afId !== null ) {

      cancelAnimationFrame( this.afId );
      this.afId = null;
      Ticker.Log( '%cTicker: Stopping RAF!', 'color:cyan;'.concat( Ticker.GLOBAL_CSS ) );
    
    }
  
  };

  Nenkraft.Time.Ticker = Ticker;
  Nenkraft.Ticker = Ticker;

};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Timer ( _stopTime ) {

    if ( !( this instanceof Timer ) ) return new Timer( _stopTime );

    if ( _stopTime != null ) {

      this.stopTime = _stopTime;
    
    }

    this.onStop = new Nenkraft.LocalEvent();
    this.onFinish = new Nenkraft.LocalEvent();
    this.onStart = new Nenkraft.LocalEvent();
    this.onReset = new Nenkraft.LocalEvent();
    this.onPause = new Nenkraft.LocalEvent();
    this.onResume = new Nenkraft.LocalEvent();
  
  }

  Timer.prototype = Object.create( null );
  Timer.prototype.constructor = Timer;
  // Static

  // Members
  Timer.prototype.time = 0;
  Timer.prototype.stopTime = 0;
  Timer.prototype.isRunning = false;
  Timer.prototype.canResume = false;
  Timer.prototype.count = 0;

  // Methods
  Timer.prototype.Reset = function () {

    this.onReset.Dispatch( this, null );
    this.count = 0;
    this.time = 0;
    this.isRunning = false;
    this.canResume = false;
    this.stopTime = null;
  
  };

  Timer.prototype.Start = function ( _stopTime ) {

    this.stopTime = Math.round( _stopTime == null ? this.stopTime : _stopTime );

    if ( this.stopTime > 0 ) {

      this.time = 0;
      this.isRunning = true;
      this.canResume = false;
      this.onStart.Dispatch( this, { stopTime: this.stopTime } );
    
    }
  
  };

  Timer.prototype.Stop = function () {

    if ( this.isRunning === true ) {

      this.isRunning = false;
      this.onStop.Dispatch( this, null );
    
    }
  
  };

  Timer.prototype.Pause = function () {

    if ( this.isRunning === true && this.canResume === false ) {

      this.isRunning = false;
      this.canResume = true;
      this.onPause.Dispatch( this, null );
    
    }
  
  };

  Timer.prototype.Resume = function () {

    if ( this.canResume === true ) {

      this.isRunning = true;
      this.canResume = false;
      this.onResume.Dispatch( this, null );
    
    }
  
  };

  Timer.prototype.Process = function () {

    if ( this.time < this.stopTime && this.isRunning === true ) {

      if ( ++this.time >= this.stopTime ) {

        this.isRunning = false;
        this.count++;
        this.onFinish.Dispatch( this, null );
      
      }
    
    }
  
  };

  Nenkraft.Time.Timer = Timer;
  Nenkraft.Timer = Timer;

};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Vector2D ( _arg0, _arg1 ) {

    if ( !( this instanceof Vector2D ) ) return new Vector2D( _arg0, _arg1 );

    if ( _arg0 != undefined && _arg0.x != undefined && _arg0.y != undefined ) {

      this.x = _arg0.x;
      this.y = _arg0.y;
    
    }
    else if ( _arg0 != undefined ) {

      if ( _arg1 == undefined ) {

        this.x = _arg0;
        this.y = _arg0;
      
      }
      else {

        this.x = _arg0;
        this.y = _arg1;
      
      }
    
    }
  
  }

  Vector2D.prototype = Object.create( null );
  Vector2D.prototype.constructor = Vector2D;

  // Static
  Vector2D.TranslateMultiple = function ( _vectors, _vector ) {

    for ( var i = 0, l = _vectors.length; i < l; ++i ) {

      _vectors[ i ].AddV( _vector );
    
    }
  
  };

  Vector2D.GetMinMaxDot = function ( _vectors, _axis ) {

    var min = Infinity;
    var max = -min;
    var dot = 0, result = _axis.Copy();

    for ( var i = 0, l = _vectors.length; i < l; ++i ) {

      dot = _vectors[ i ].GetDotV( _axis );

      if ( dot > max ) {

        max = dot;
      
      }

      if ( dot < min ) {

        min = dot;
      
      }
    
    }

    result.Set( min, max );
    return result;
  
  };

  Vector2D.Pool = new Nenkraft.Utils.Pool( Vector2D );

  Vector2D.Pool.Retrieve = function ( _x, _y ) {

    if ( this.objects.length === 0 ) {

      this.Flood();
    
    }

    var v = this.objects.pop();
    v.Set( _x, _y );
    return v;
  
  };

  Vector2D.Pool.Flood( function () {}, 100000 );
  Vector2D.USE_POOL = true;
  // Members
  Vector2D.prototype.x = 0;
  Vector2D.prototype.y = 0;

  // Methods
  Vector2D.prototype.Copy = function () {

    if ( Vector2D.USE_POOL === true ) {

      return Vector2D.Pool.Retrieve( this.x, this.y );
    
    }

    return new Vector2D( this );
  
  };

  Vector2D.prototype.AbsoluteCopy = function () {

    var v = this.Copy();
    v.Positive();
    return v;
  
  };

  Vector2D.prototype.SetV = function ( _v ) {

    this.x = _v.x;
    this.y = _v.y;
  
  };

  Vector2D.prototype.Set = function ( _x, _y ) {

    if ( _x != undefined && _y == undefined ) {

      this.x = _x;
      this.y = _x;
    
    } else {

      this.x = _x;
      this.y = _y;
    
    }
  
  };

  Vector2D.prototype.Is0 = function () {

    return this.x === 0 && this.y === 0;
  
  };

  Vector2D.prototype.AddV = function ( _v ) {

    this.x += _v.x;
    this.y += _v.y;
  
  };

  Vector2D.prototype.AddVC = function ( _v ) {

    var r = this.Copy();
    r.AddV( _v );
    return r;
  
  };

  Vector2D.prototype.Add = function ( _x, _y ) {

    this.x += _x;
    this.y += _y;
  
  };

  Vector2D.prototype.SubtractV = function ( _v ) {

    this.x -= _v.x;
    this.y -= _v.y;
  
  };

  Vector2D.prototype.SubtractVC = function ( _v ) {

    var r = this.Copy();
    r.SubtractV( _v );
    return r;
  
  };

  Vector2D.prototype.Subtract = function ( _x, _y ) {

    this.x -= _x;
    this.y -= _y;
  
  };

  Vector2D.prototype.MultiplyV = function ( _v ) {

    this.x *= _v.x;
    this.y *= _v.y;
  
  };

  Vector2D.prototype.MultiplyVC = function ( _v ) {

    var r = this.Copy();
    r.MultiplyV( _v );
    return r;
  
  };

  Vector2D.prototype.Multiply = function ( _x, _y ) {

    this.x *= _x;
    this.y *= _y;
  
  };

  Vector2D.prototype.DivideV = function ( _v ) {

    this.x /= _v.x;
    this.y /= _v.y;
  
  };

  Vector2D.prototype.DivideVC = function ( _v ) {

    var r = this.Copy();
    r.DivideV( _v );
    return r;
  
  };

  Vector2D.prototype.Divide = function ( _x, _y ) {

    this.x /= _x;
    this.y /= _y;
  
  };

  Vector2D.prototype.Normalize = function () {

    var m = this.GetMagnitude();
    this.Divide( m, m );
  
  };

  Vector2D.prototype.Positive = function () {

    this.x = Math.abs( this.x );
    this.y = Math.abs( this.y );
  
  };

  Vector2D.prototype.Negative = function () {

    this.x = -Math.abs( this.x );
    this.y = -Math.abs( this.y );
  
  };

  Vector2D.prototype.Invert = function () {

    this.x = this.x * -1;
    this.y = this.y * -1;
  
  };

  Vector2D.prototype.Rotate = function ( _a ) {

    var s = Math.sin( _a ), c = Math.cos( _a );
    var tx = this.x, ty = this.y;
    this.x = tx * c - ty * s;
    this.y = tx * s + ty * c;
  
  };

  Vector2D.prototype.RotateBy = function ( _a ) {

    var angle = this.GetAngle() + _a;
    var s = Math.sin( angle ), c = Math.cos( angle );
    var tx = this.x, ty = this.y;
    this.x = tx * c - ty * s;
    this.y = tx * s + ty * c;
  
  };

  Vector2D.prototype.RotateAroundV = function ( _v, _a ) {

    this.SubtractV( _v );
    this.Rotate( _a );
    this.AddV( _v );
  
  };

  Vector2D.prototype.RotateAround = function ( _x, _y, _a ) {

    this.Subtract( _x, _y );
    this.Rotate( _a );
    this.Add( _x, _y );
  
  };

  Vector2D.prototype.RotateAroundByV = function ( _v, _a ) {

    this.SubtractV( _v );
    this.RotateBy( _a );
    this.AddV( _v );
  
  };

  Vector2D.prototype.RotateAroundBy = function ( _x, _y, _a ) {

    this.Subtract( _x, _y );
    this.RotateBy( _a );
    this.Add( _x, _y );
  
  };

  Vector2D.prototype.PushFromV = function ( _v, _m ) {

    var d = this.Copy();
    d.SubtractV( _v );
    d.Normalize();
    d.Multiply( _m, _m );
    this.AddV( d );
  
  };

  Vector2D.prototype.PushFrom = function ( _x, _y, _m ) {

    var d = this.Copy();
    d.Subtract( _x, _y );
    d.Normalize();
    d.Multiply( _m, _m );
    this.AddV( d );
  
  };

  Vector2D.prototype.GetAngle = function () {

    return Math.atan2( this.y, this.x );
  
  };

  Vector2D.prototype.GetAngleBetweenV = function ( _v ) {

    return Math.atan2( this.y - _v.y, this.x - _v.x );
  
  };

  Vector2D.prototype.GetAngleBetween = function ( _x, _y ) {

    return Math.atan2( this.y - _y, this.x - _x );
  
  };

  Vector2D.prototype.GetDotV = function ( _v ) {

    return ( this.x * _v.x + this.y * _v.y );
  
  };

  Vector2D.prototype.GetDot = function ( _x, _y ) {

    return ( this.x * _x + this.y * _y );
  
  };

  Vector2D.prototype.GetCrossV = function ( _v ) {

    return ( this.x * _v.y + this.y * _v.x );
  
  };

  Vector2D.prototype.GetCross = function ( _x, _y ) {

    return ( this.x * _y + this.y * _x );
  
  };

  Vector2D.prototype.GetMagnitudeSquared = function () {

    return ( this.x * this.x + this.y * this.y );
  
  };

  Vector2D.prototype.GetMagnitude = function () {

    return Math.sqrt( this.GetMagnitudeSquared() );
  
  };

  Vector2D.prototype.GetDistanceV = function ( _v ) {

    var d = this.Copy();
    d.SubtractV( _v );
    return d.GetMagnitude();
  
  };

  Vector2D.prototype.GetDistance = function ( _x, _y ) {

    var d = this.Copy();
    d.Subtract( _x, _y );
    return d.GetMagnitude();
  
  };

  Vector2D.prototype.GetDistanceSquaredV = function ( _v ) {

    var d = this.Copy();
    d.SubtractV( _v );
    return d.GetMagnitudeSquared();
  
  };

  Vector2D.prototype.GetDistanceSquared = function ( _x, _y ) {

    var d = this.Copy();
    d.Subtract( _x, _y );
    return d.GetMagnitudeSquared();
  
  };

  Vector2D.prototype.GetPerpendicularCCWV = function ( _v ) {

    return new Vector2D( -( _v.y - this.y ), _v.x - this.x );
  
  };

  Vector2D.prototype.GetPerpendicularCCW = function ( _x, _y ) {

    return new Vector2D( -( _y - this.y ), _x - this.x );
  
  };

  Vector2D.prototype.GetPerpendicularCWV = function ( _v ) {

    return new Vector2D( _v.y - this.y, -( _v.x - this.x ) );
  
  };

  Vector2D.prototype.GetPerpendicularCW = function ( _x, _y ) {

    return new Vector2D( _y - this.y, -( _x - this.x ) );
  
  };

  Vector2D.prototype.GetNormalAV = function ( _v ) {

    var normal = this.GetPerpendicularCCWV( _v );
    normal.Normalize();
    return normal;
  
  };

  Vector2D.prototype.GetNormalA = function ( _x, _y ) {

    var normal = this.GetPerpendicularCCW( _x, _y );
    normal.Normalize();
    return normal;
  
  };

  Vector2D.prototype.GetNormalBV = function ( _v ) {

    var normal = this.GetPerpendicularCWV( _v );
    normal.Normalize();
    return normal;
  
  };

  Vector2D.prototype.GetNormalB = function ( _x, _y ) {

    var normal = this.GetPerpendicularCW( _x, _y );
    normal.Normalize();
    return normal;
  
  };

  Vector2D.prototype.GetMidPointV = function ( _v ) {

    var mp = this.Copy();
    mp.AddV( _v );
    mp.Divide( 2, 2 );
    return mp;
  
  };

  Vector2D.prototype.GetMidPoint = function ( _x, _y ) {

    var mp = this.Copy();
    mp.Add( _x, _y );
    mp.Multiply( 0.5, 0.5 );
    return mp;
  
  };

  Vector2D.prototype.IsEqualTo = function ( _x, _y ) {

    return ( this.x === _x && this.y === _y );
  
  };

  Vector2D.prototype.IsEqualToV = function ( _v ) {

    return ( this.x === _v.x && this.y === _v.y );
  
  };

  Vector2D.prototype.GetProjectionOntoV = function ( _v ) {

    var dot = this.GetDotV( _v );
    if ( dot === 0 ) return new Vector2D();
    var mag = _v.GetMagnitude();
    var scl = dot / ( mag * mag );
    var p = _v.Copy();
    p.Multiply( scl, scl );
    return p;
  
  };

  Vector2D.prototype.GetProjectionOnto = function ( _x, _y ) {

    var p = this.Copy();
    p.Set( _x, _y );
    var dot = this.GetDotV( p );
    if ( dot === 0 ) return new Vector2D();
    var mag = p.GetMagnitude();
    var scl = dot / ( mag * mag );
    p.Multiply( scl, scl );
    return p;
  
  };

  Vector2D.prototype.GetReflectionV = function ( _v ) {

    var r = _v.Copy();
    var dot = this.GetDotV( r );
    r.Multiply( 2, 2 );
    r.Multiply( dot, dot );
    return this.SubtractVC( r );
  
  };

  Vector2D.prototype.GetReflection = function ( _x, _y ) {

    var r = this.Copy();
    r.Set( _x, _y );
    var dot = this.GetDotV( r );
    r.Multiply( 2, 2 );
    r.Multiply( dot, dot );
    return this.SubtractVC( r );
  
  };

  Vector2D.prototype.Assert = function () {

    var A = Nenkraft.Utils.Assert;
    A( this.x, A.IS_SAME_TYPE, 0 );
    A( this.y, A.IS_SAME_TYPE, 0 );
  
  };

  Vector2D.prototype.Store = function () {

    Vector2D.Pool.Store( this );
  
  };

  Vector2D.prototype.GetLength = Vector2D.prototype.GetMagnitude;
  Vector2D.prototype.GetLengthSquared = Vector2D.prototype.GetMagnitudeSquared;

  Nenkraft.Math.Vector2D = Vector2D;
  Nenkraft.Vector2D = Vector2D;

};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Matrix2D () {

    if ( !( this instanceof Matrix2D ) ) return new Matrix2D();
    this.array = new Float32Array( 9 );
  
  }

  Matrix2D.prototype = Object.create( null );
  Matrix2D.prototype.constructor = Matrix2D;
  // Static
  Matrix2D.EPSILON = 0.00001;
  // Members
  Matrix2D.prototype.array = null;
  Matrix2D.prototype.a = 1;
  Matrix2D.prototype.b = 0;
  Matrix2D.prototype.c = 0;
  Matrix2D.prototype.d = 1;
  Matrix2D.prototype.e = 0;
  Matrix2D.prototype.f = 0;

  // Methods
  Matrix2D.prototype.Identity = function () {

    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.e = 0;
    this.f = 0;
  
  };

  Matrix2D.prototype.Copy = function () {

    var matrix = new Matrix2D();
    matrix.Set( this.a, this.b, this.c, this.d, this.e, this.f );
    return matrix;
  
  };

  Matrix2D.prototype.Set = function ( _a, _b, _c, _d, _e, _f ) {

    this.a = _a;
    this.b = _b;
    this.c = _c;
    this.d = _d;
    this.e = _e;
    this.f = _f;
    return this;
  
  };

  Matrix2D.prototype.SetTransform = function ( _x, _y, _sx, _sy, _r, _skx, _sky, _px, _py ) {

    _x = _x == null ? 0 : _x;
    _y = _y == null ? 0 : _y;
    _sx = _sx == null ? 1 : _sx;
    _sy = _sy == null ? 1 : _sy;
    _r = _r == null ? 0 : _r;
    _skx = _skx == null ? 0 : _skx;
    _sky = _sky == null ? 0 : _sky;
    _px = _px == null ? 0 : _px;
    _py = _py == null ? 0 : _py;
    var sr = Math.sin( _r );
    var cr = Math.cos( _r );
    var sskx = -Math.sin( _skx );
    var cskx = Math.cos( _skx );
    var ssky = Math.sin( _sky );
    var csky = Math.cos( _sky );
    var a = cr * _sx;
    var b = sr * _sx;
    var c = -sr * _sy;
    var d = cr * _sy;
    this.a = csky * a + ssky * c;
    this.b = csky * b + ssky * d;
    this.c = sskx * a + cskx * c;
    this.d = sskx * b + cskx * d;
    this.e = _x + _px * a + _py * c;
    this.f = _y + _px * b + _py * d;
    return this;
  
  };

  Matrix2D.prototype.Translate = function ( _x, _y ) {

    this.e += _x;
    this.f += _y;
  
  };

  Matrix2D.prototype.TranslateTo = function( _x, _y ) {

    this.e = _x;
    this.f = _y;
  
  };

  Matrix2D.prototype.ApplyTranslation = function ( _x, _y ) {

    this.e = _x * this.a + _y * this.c + this.e;
    this.f = _x * this.b + _y * this.d + this.f;
  
  };

  Matrix2D.prototype.ApplyScale = function ( _x, _y ) {

    this.a *= _x;
    this.b *= _y;
    this.c *= _x;
    this.d *= _y;
  
  };

  Matrix2D.prototype.Scale = function ( _x, _y ) {

    this.a *= _x;
    this.b *= _y;
    this.c *= _x;
    this.d *= _y;
    this.e *= _x;
    this.f *= _y;
  
  };

  Matrix2D.prototype.Rotate = function ( _angle ) {

    var sa = Math.sin( _angle );
    var ca = Math.cos( _angle );
    var a = this.a;
    var c = this.c;
    var e = this.e;
    this.a = a * ca - this.b * sa;
    this.b = a * sa + this.b * ca;
    this.c = c * ca - this.d * sa;
    this.d = c * sa + this.d * ca;
    this.e = e * ca - this.f * sa;
    this.f = e * sa + this.f * ca;
  
  };

  Matrix2D.prototype.Decompose = function ( _transform ) {

    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var skx = -Math.atan2( -c, d );
    var sky = Math.atan2( b, a );
    var delta = Math.abs( skx + sky );

    if ( delta < Matrix2D.EPSILON ) {

      _transform.rotation = sky;

      if ( a < 0 && d >= 0 ) {

        _transform.rotation += Math.PI;
      
      }

      _transform.skew.Set( 0 );
    
    } else {

      _transform.skew.Set( skx, sky );
    
    }

    _transform.scale.Set( Math.sqrt( a * a + b * b ), Math.sqrt( c * c + d * d ) );
    _transform.position.Set( this.e, this.f );
  
  };

  Matrix2D.prototype.ApplyToContext = function ( _rc ) {

    _rc.setTransform( this.a, this.b, this.c, this.d, this.e, this.f );
  
  };

  Matrix2D.prototype.AsArray = function ( _transpose ) {

    var array = this.array;

    if ( _transpose === true ) {

      array[ 0 ] = this.a;
      array[ 1 ] = this.b;
      array[ 2 ] = 0;
      array[ 3 ] = this.c;
      array[ 4 ] = this.d;
      array[ 5 ] = 0;
      array[ 6 ] = this.e;
      array[ 7 ] = this.f;
      array[ 8 ] = 1;
    
    } else {

      array[ 0 ] = this.a;
      array[ 1 ] = this.c;
      array[ 2 ] = this.e;
      array[ 3 ] = this.b;
      array[ 4 ] = this.d;
      array[ 5 ] = this.f;
      array[ 6 ] = 0;
      array[ 7 ] = 0;
      array[ 8 ] = 1;
    
    }

    return array;
  
  };

  Nenkraft.Math.Matrix2D = Matrix2D;
  Nenkraft.Matrix2D = Matrix2D;

};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Basetransform2D ( _x, _y ) {

    if ( !( this instanceof Basetransform2D ) ) return new Basetransform2D();
    this.position = new Nenkraft.Vector2D( _x, _y );
    this.scale = new Nenkraft.Vector2D( 1, 1 );
    this.localTransform = new Nenkraft.Vector2D( 0, 0 );
    this.worldTransform = new Nenkraft.Vector2D( 0, 0 );
  
  }

  Basetransform2D.prototype = Object.create( null );
  Basetransform2D.prototype.constructor = Basetransform2D;
  // Static

  // Members

  // Methods
  Basetransform2D.prototype.UpdateLocal = function () {

    this.localTransform.SetV( this.position );
  
  };

  Basetransform2D.prototype.UpdateWorld = function ( _parentWorldTransform ) {

    var localTransform = this.localTransform;
    localTransform.SetV( this.position );
    this.worldTransform.Set( _parentWorldTransform.e + localTransform.x, _parentWorldTransform.f + localTransform.y );
  
  };

  Basetransform2D.prototype.ApplyWorld = function ( _rc ) {

    _rc.setTransform( this.scale.x, 0, 0, this.scale.y, this.worldTransform.x, this.worldTransform.y );
  
  };

  Nenkraft.Math.Basetransform2D = Basetransform2D;

};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Transform2D ( _x, _y ) {

    if ( !( this instanceof Transform2D ) ) return new Transform2D( _x, _y );
    this.position = Nenkraft.Vector2D( _x, _y );
    this.scale = new Nenkraft.Vector2D( 1, 1 );
    this.skew = new Nenkraft.Vector2D( 0, 0 );
    this.pivot = new Nenkraft.Vector2D( 0, 0 );
    this.localTransform = new Nenkraft.Matrix2D();
    this.worldTransform = new Nenkraft.Matrix2D();
  
  }

  Transform2D.prototype = Object.create( null );
  Transform2D.prototype.constructor = Transform2D;
  // Static

  // Members
  Transform2D.prototype.rotation = 0;
  Transform2D.prototype.skewCX = 1;
  Transform2D.prototype.skewSX = 0;
  Transform2D.prototype.skewCY = 0;
  Transform2D.prototype.skewSY = 1;

  // Methods
  Transform2D.prototype.Set = function ( _matrix ) {

    _matrix.Decompose( this );
    this.UpdateSkew();
  
  };

  Transform2D.prototype.UpdateLocal = function () {

    var localTransform = this.localTransform, position = this.position, scale = this.scale, pivot = this.pivot;

    localTransform.a = this.skewCX * scale.x;
    localTransform.b = this.skewSX * scale.x;
    localTransform.c = this.skewCY * scale.y;
    localTransform.d = this.skewSY * scale.y;

    localTransform.e = position.x - pivot.x * localTransform.a + pivot.y * localTransform.c;
    localTransform.f = position.y - pivot.y * localTransform.b + pivot.y * localTransform.d;
  
  };

  Transform2D.prototype.UpdateWorld = function ( _parentWorldTransform ) {

    var localTransform = this.localTransform, worldTransform = this.worldTransform, position = this.position, scale = this.scale, pivot = this.pivot;

    localTransform.a = this.skewCX * scale.x;
    localTransform.b = this.skewSX * scale.x;
    localTransform.c = this.skewCY * scale.y;
    localTransform.d = this.skewSY * scale.y;

    localTransform.e = position.x - pivot.x * localTransform.a + pivot.y * localTransform.c;
    localTransform.f = position.y - pivot.y * localTransform.b + pivot.y * localTransform.d;

    worldTransform.a = localTransform.a * _parentWorldTransform.a + localTransform.b * _parentWorldTransform.c;
    worldTransform.b = localTransform.a * _parentWorldTransform.b + localTransform.b * _parentWorldTransform.d;
    worldTransform.c = localTransform.c * _parentWorldTransform.a + localTransform.d * _parentWorldTransform.c;
    worldTransform.d = localTransform.c * _parentWorldTransform.b + localTransform.d * _parentWorldTransform.d;

    worldTransform.e = localTransform.e * _parentWorldTransform.a + localTransform.f * _parentWorldTransform.c + _parentWorldTransform.e;
    worldTransform.f = localTransform.e * _parentWorldTransform.b + localTransform.f * _parentWorldTransform.d + _parentWorldTransform.f;
  
  };

  Transform2D.prototype.UpdateSkew = function () {

    var skew = this.skew, rotation = this.rotation;
    this.skewCX = Math.cos( rotation + skew.y );
    this.skewSX = Math.sin( rotation + skew.y );
    this.skewCY = -Math.sin( rotation - skew.x );
    this.skewSY = Math.cos( rotation - skew.x );
  
  };

  Transform2D.prototype.ApplyWorld = function ( _rc ) {

    this.worldTransform.ApplyToContext( _rc );
  
  };

  Nenkraft.Math.Transform2D = Transform2D;

};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var LLI = Nenkraft.Math.LineLineIntersection;
  var CPOL = Nenkraft.Math.ClosestPointOnLine;

  function Line2D ( _arg0, _arg1, _arg2, _arg3 ) {

    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3 );

    if ( _arg0 !== undefined && _arg0.x != null && _arg0.y != null && _arg1 !== undefined && _arg1.x != null && _arg1.y != null ) {

      this.s = _arg0;
      this.e = _arg1;
    
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {

      this.s = new Nenkraft.Vector2D( _arg0, _arg1 );
      this.e = new Nenkraft.Vector2D( _arg2, _arg3 );
    
    }
    else {

      this.s = new Nenkraft.Vector2D();
      this.e = new Nenkraft.Vector2D();
    
    }
  
  }

  Line2D.prototype = Object.create( null );
  Line2D.prototype.constructor = Line2D;
  // Static
  Line2D.TYPE = 0;
  // Members
  Line2D.prototype.TYPE = Line2D.TYPE;
  Line2D.prototype.epsilon = 1000;
  Line2D.prototype.belongsTo = null;

  // Methods
  Line2D.prototype.Stretch = function ( _magnitude ) {

    var hm = _magnitude * 0.5;
    this.s.PushFromV( this.e, hm );
    this.e.PushFromV( this.s, hm );
  
  };

  Line2D.prototype.Rotate = function ( _angle, _anchorX, _anchorY ) {

    _anchorX = _anchorX == undefined ? 0.5 : _anchorX;
    var ap = this.s.Copy();
    ap.AddV( this.e );
    ap.Multiply( _anchorX, _anchorY == undefined ? _anchorX : _anchorY );
    this.s.RotateAroundV( ap, _angle );
    this.e.RotateAroundV( ap, _angle );
  
  };

  Line2D.prototype.GetLength = function () {

    return this.s.GetDistanceV( this.e );
  
  };

  Line2D.prototype.GetLengthSquared = function () {

    return this.s.GetDistanceSquaredV( this.e );
  
  };

  Line2D.prototype.IntersectsPoint = function ( _v ) {

    var s = this.s;
    var e = this.e;
    var cross = ( _v.y - s.y ) * ( e.x - s.x ) - ( _v.x - s.x ) * ( e.y - s.y );

    if ( Math.abs( cross ) > this.epsilon ) {

      return false;
    
    }

    var dot = ( _v.x - s.x ) * ( e.x - s.x ) + ( _v.y - s.y ) * ( e.y - s.y );

    if ( dot < 0 ) {

      return false;
    
    }

    if ( dot > this.GetLengthSquared() ) {

      return false;
    
    }

    return true;
  
  };

  Line2D.prototype.IntersectsLine = function ( _line ) {

    return LLI( this.s, this.e, _line.s, _line.e );
  
  };

  Line2D.prototype.GetClosestPointTo = function ( _v ) {

    return CPOL( this.s, this.e, _v );
  
  };

  Line2D.prototype.GetNormalA = function () {

    return this.s.GetNormalAV( this.e );
  
  };

  Line2D.prototype.GetNormalB = function () {

    return this.s.GetNormalBV( this.e );
  
  };

  Nenkraft.Geom.Line2D = Line2D;
  Nenkraft.Geom.Ray2D = Line2D;

};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function AABB2D ( _arg0, _arg1, _arg2, _arg3 ) {

    if ( !( this instanceof AABB2D ) ) return new AABB2D( _arg0, _arg1, _arg2, _arg3 );

    if ( _arg0 instanceof Nenkraft.Vector2D && _arg1 instanceof Nenkraft.Vector2D ) {

      this.tl = _arg0;
      this.br = _arg1;
    
    }
    else if (
      _arg0 !== undefined &&
      _arg1 !== undefined &&
      _arg0.x !== undefined &&
      _arg0.y !== undefined &&
      _arg1.x !== undefined &&
      _arg1.y !== undefined
    ) {

      this.tl = new Nenkraft.Vector2D( _arg0.x, _arg0.y );
      this.br = new Nenkraft.Vector2D( _arg1.x, _arg1.y );
    
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {

      this.tl = new Nenkraft.Vector2D( _arg0, _arg1 );
      this.br = new Nenkraft.Vector2D( _arg2, _arg3 );
    
    }
    else {

      this.tl = new Nenkraft.Vector2D();
      this.br = new Nenkraft.Vector2D();
    
    }

    this.ComputeWH();
  
  }

  AABB2D.prototype = Object.create( null );
  AABB2D.prototype.constructor = AABB2D;
  // Static
  AABB2D.TYPE = 1;
  AABB2D.TOP_LEFT = 'TL';
  AABB2D.TOP_RIGHT = 'TR';
  AABB2D.BOTTOM_LEFT = 'BL';
  AABB2D.BOTTOM_RIGHT = 'BR';
  // Members
  AABB2D.prototype.TYPE = AABB2D.TYPE;
  AABB2D.prototype.w = 0;
  AABB2D.prototype.h = 0;
  AABB2D.prototype.hw = 0;
  AABB2D.prototype.hh = 0;
  AABB2D.prototype.area = 0;
  AABB2D.prototype.belongsTo = null;

  // Methods
  AABB2D.prototype.Set = function ( _tlx, _tly, _brx, _bry ) {

    this.tl.x = _tlx;
    this.tl.y = _tly;
    this.br.x = _brx;
    this.br.y = _bry;
    this.ComputeWH();
  
  };

  AABB2D.prototype.SetC = function ( _aabb ) {

    this.Set( _aabb.tl.x, _aabb.tl.y, _aabb.br.x, _aabb.br.y );
  
  };

  AABB2D.prototype.Scale = function ( _x, _y ) {

    this.tl.Multiply( _x, _y );
    this.br.Multiply( _x, _y );
    this.ComputeWH();
  
  };

  AABB2D.prototype.ComputeWH = function () {

    this.w = this.br.x - this.tl.x;
    this.h = this.br.y - this.tl.y;
    this.hw = this.w * 0.5;
    this.hh = this.h * 0.5;
    this.area = this.w * this.h;
  
  };

  AABB2D.prototype.GetQuadrant = function ( _quadrant ) {

    var tl = this.tl, br = this.br;

    switch ( _quadrant ) {

      case AABB2D.TOP_LEFT:
        return new AABB2D(
          tl.x,
          tl.y,
          tl.x + this.hw,
          tl.y + this.hh
        );
      case AABB2D.TOP_RIGHT:
        return new AABB2D(
          tl.x + this.hw,
          tl.y,
          br.x,
          tl.y + this.hh
        );
      case AABB2D.BOTTOM_LEFT:
        return new AABB2D(
          tl.x,
          tl.y + this.hh,
          tl.x + this.hw,
          br.y
        );
      case AABB2D.BOTTOM_RIGHT:
        return new AABB2D(
          tl.x + this.hw,
          tl.y + this.hh,
          br.x,
          br.y
        );
      default:
        return null;
    
    }
  
  };

  AABB2D.prototype.IntersectsPoint = function ( _v ) {

    return !( _v.x < this.tl.x || _v.x > this.br.x || _v.y < this.tl.y || _v.y > this.br.y );
  
  };

  AABB2D.prototype.ContainsPoint = function ( _v ) {

    return ( _v.x > this.tl.x && _v.x < this.br.x && _v.y > this.tl.y && _v.y < this.br.y );
  
  };

  AABB2D.prototype.IntersectsAABB2D = function ( _aabb ) {

    var tl1 = this.tl, br1 = this.br, tl2 = _aabb.tl, br2 = _aabb.br;
    return !( tl2.x >= br1.x || tl2.y >= br1.y || br2.x <= tl1.x || br2.y <= tl1.y );
  
  };

  AABB2D.prototype.ContainsAABB2D = function ( _aabb ) {

    if ( _aabb.area > this.area ) {

      return false;
    
    }

    var tl1 = this.tl, br1 = this.br, tl2 = _aabb.tl, br2 = _aabb.br;
    return ( tl2.x >= tl1.x && tl2.y >= tl1.y && br2.x <= br1.x && br2.y <= br1.y );
  
  };

  Nenkraft.Geom.AABB2D = AABB2D;
  Nenkraft.AABB2D = AABB2D;

};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Polygon2D ( _vertices ) {

    if ( !( this instanceof Polygon2D ) ) return new Polygon2D( _vertices );
    this.vertices = [];
    this.normals = [];
    this.perimeterMidPoints = [];
    this.centroid = new Nenkraft.Vector2D();

    if ( _vertices != null ) {

      if ( _vertices[ 0 ] instanceof Nenkraft.Vector2D ) {

        this.AddPoints( _vertices );
      
      } else {

        this.PushPoints( _vertices );
      
      }
    
    }
  
  }

  Polygon2D.prototype = Object.create( null );
  Polygon2D.prototype.constructor = Polygon2D;
  // Static
  Polygon2D.TYPE = 3;

  Polygon2D.CreateCopy = function ( _polygon ) {

    var p = new Polygon2D();

    for ( var i = 0, vertices = _polygon.vertices, l = vertices.length; i < l; ++i ) {

      p.AddPoint( vertices[ i ].Copy() );
    
    }

    return p;
  
  };

  Polygon2D.Construct = Object.create( null );

  Polygon2D.Construct.Rectangular = function ( _po, _x, _y, _w, _h ) {

    var tl = new Nenkraft.Vector2D( _x, _y );
    var tr = new Nenkraft.Vector2D( _x + _w, _y );
    var br = new Nenkraft.Vector2D( _x + _w, _y + _h );
    var bl = new Nenkraft.Vector2D( _x, _y + _h );
    _po.Recreate( [ tl, tr, br, bl ] );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Isosceles = function ( _po, _x, _y, _w, _h ) {

    var tm = new Nenkraft.Vector2D( _x, _y );
    var br = new Nenkraft.Vector2D( _x + _w * 0.5, _y + _h );
    var bl = new Nenkraft.Vector2D( _x - _w * 0.5, _y + _h );
    _po.Recreate( [ tm, br, bl ] );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Cyclic = function ( _po, _x, _y, _ra, _acc ) {

    var i = 0, l = _acc, x, y, th, an = Math.PI * 2 / l;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      th = an * i;
      x = Math.cos( th ) * _ra;
      y = Math.sin( th ) * _ra;
      _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Equilateral = function ( _po, _x, _y, _side ) {

    var an = 2.0943951023931953;
    var x, y;
    _po.Recreate( [] );
    x = Math.cos( 0 ) * _side;
    y = Math.sin( 0 ) * _side;
    _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an ) * _side;
    y = Math.sin( an ) * _side;
    _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an * 2 ) * _side;
    y = Math.sin( an * 2 ) * _side;
    _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    _po.Rotate( Nenkraft.Math.RADIAN * -90 );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Star = function ( _po, _x, _y, _ora, _ira, _cors ) {

    var i = 0, l = _cors * 2, x, y, th, an = Math.PI * 2 / l, ra;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      ra = ( i & 1 ) === 0 ? _ora : _ira;
      th = an * i;
      x = Math.cos( th ) * ra;
      y = Math.sin( th ) * ra;
      _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Butterfly = function ( _po, _x, _y, _n, _ra ) {

    var i = 0, x, y, u, c = Polygon2D.Construct.Butterfly.C;
    _po.Recreate( [] );

    for ( i; i < _n; ++i ) {

      u = i * c._1 * Math.PI / _n;
      x = Math.cos( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      y = Math.sin( u ) * ( Math.exp( Math.cos( u ) ) - c._2 * Math.cos( c._3 * u ) - Math.pow( Math.sin( u / c._4 ), c._5 ) ) * _ra;
      _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Butterfly.C = {
    _1: 24,
    _2: 2,
    _3: 4,
    _4: 12,
    _5: 5,
    Reset: function () {

      this._1 = 24;
      this._2 = 2;
      this._3 = 4;
      this._4 = 12;
      this._5 = 5;
    
    }
  };

  Polygon2D.Construct.Supershape = function ( _po, _x, _y, _ra, _acc, _m, _n1, _n2, _n3 ) {

    _n1 = _n1 === undefined ? 1 : _n1;
    _n2 = _n2 === undefined ? 1 : _n2;
    _n3 = _n3 === undefined ? 1 : _n3;
    var i = 0, l = _acc, x, y, a, r, c = Polygon2D.Construct.Supershape.C, t1, t2;
    _po.Recreate( [] );

    for ( i; i < l; ++i ) {

      a = i * Math.PI * 2 / _acc;

      t1 = Math.cos( _m * a / 4 ) / c._A;
      t1 = Math.abs( t1 );
      t1 = Math.pow( t1, _n2 );

      t2 = Math.sin( _m * a / 4 ) / c._B;
      t2 = Math.abs( t2 );
      t2 = Math.pow( t2, _n3 );

      r = Math.pow( t1 + t2, 1 / _n1 );

      if ( Math.abs( r ) === 0 ) {

        x = 0;
        y = 0;
      
      }
      else {

        r = 1 / r;
        x = Math.cos( a ) * r * _ra;
        y = Math.sin( a ) * r * _ra;
      
      }

      _po.AddPoint( new Nenkraft.Vector2D( _x + x, _y + y ) );
    
    }

    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Supershape.C = {
    _A: 1,
    _B: 1
  };
  // Members
  Polygon2D.prototype.TYPE = Polygon2D.TYPE;
  Polygon2D.prototype.aabb = null;
  Polygon2D.prototype.dirtyBounds = true;
  Polygon2D.prototype.belongsTo = null;

  // Methods
  Polygon2D.prototype.AddPoint = function ( _p ) {

    this.vertices.push( _p );
  
  };

  Polygon2D.prototype.AddPoints = function ( _ps ) {

    this.vertices.push.apply( this.vertices, _ps );
  
  };

  Polygon2D.prototype.PushPoint = function ( _x, _y ) {

    this.vertices.push( new Nenkraft.Vector2D( _x, _y ) );
  
  };

  Polygon2D.prototype.PushPoints = function ( _ps ) {

    for ( var i = 0, l = _ps.length; i < l; i += 2 ) {

      this.PushPoint( _ps[ i ], _ps[ i + 1 ] );
    
    }
  
  };

  Polygon2D.prototype.Recreate = function ( _ps ) {

    this.vertices.length = 0;
    if ( _ps != undefined ) this.vertices.push.apply( this.vertices, _ps );
  
  };

  Polygon2D.prototype.ComputeBounds = function () {

    if ( this.aabb === null ) this.aabb = new Nenkraft.Geom.AABB2D();
    var mix = Infinity, max = -mix, miy = mix, may = -mix;

    for ( var i = 0, ps = this.vertices, l = ps.length, p; i < l; ++i ) {

      p = ps[ i ];
      if ( p.x < mix ) mix = p.x;
      if ( p.x > max ) max = p.x;
      if ( p.y < miy ) miy = p.y;
      if ( p.y > may ) may = p.y;
    
    }

    this.aabb.Set( mix, miy, max, may );
    this.dirtyBounds = false;
  
  };

  Polygon2D.prototype.Rotate = function ( _angle, _anchorX, _anchorY, _updateBounds ) {

    if ( this.dirtyBounds === true && _updateBounds === true ) this.ComputeBounds();
    else if ( this.aabb === null ) this.ComputeBounds();
    _anchorX = _anchorX === undefined ? 0.5 : _anchorX;
    var aabb = this.aabb;
    var ap = aabb.tl.Copy();
    ap.AddV( aabb.br );
    ap.Multiply( _anchorX, _anchorY === undefined ? _anchorX : _anchorY );
    var i = 0, ps = this.vertices, l = ps.length, p;

    for ( i; i < l; ++i ) {

      p = ps[ i ];
      p.RotateAroundV( ap, _angle );
    
    }

    this.dirtyBounds = true;
  
  };

  Polygon2D.prototype.GetCentroid = function () {

    var centroid = this.centroid;
    centroid.Set( 0, 0 );

    for ( var i = 0, ps = this.vertices, l = ps.length, p; i < l; ++i ) {

      p = ps[ i ];
      centroid.AddV( p );
    
    }

    centroid.Divide( l, l );
    return centroid;
  
  };

  Polygon2D.prototype.GetNormalsA = function () {

    var normals = this.normals;
    normals.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      normals.push( vertex.GetNormalAV( vertices[ i + 1 ] ) );
    
    }

    normals.push( vertices[ l ].GetNormalAV( vertices[ 0 ] ) );
    return normals;
  
  };

  Polygon2D.prototype.GetNormalsB = function () {

    var normals = this.normals;
    normals.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      normals.push( vertex.GetNormalBV( vertices[ i + 1 ] ) );
    
    }

    normals.push( vertices[ l ].GetNormalBV( vertices[ 0 ] ) );
    return normals;
  
  };

  Polygon2D.prototype.GetPerimeterMidPoints = function () {

    var perimeterMidPoints = this.perimeterMidPoints;
    perimeterMidPoints.length = 0;

    for (
      var i = 0, vertices = this.vertices, vertex = vertices[ i ], l = this.vertices.length - 1;
      i < l;
      vertex = vertices[ ++i ] ) {

      perimeterMidPoints.push( vertex.GetMidPointV( vertices[ i + 1 ] ) );
    
    }

    perimeterMidPoints.push( vertices[ l ].GetMidPointV( vertices[ 0 ] ) );
    return perimeterMidPoints;
  
  };

  Polygon2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.dirtyBounds === true ) this.ComputeBounds();
    if ( this.aabb.IntersectsPoint( _v ) === false ) return false;
    var x = _v.x;
    var y = _v.y;
    var intersects = false;
    var i, j;
    var vertices = this.vertices;
    var vertexi, vertexj;
    var l = vertices.length;

    for ( i = 0, j = l - 1; i < l; j = i++ ) {

      vertexi = vertices[ i ];
      vertexj = vertices[ j ];

      if (
        ( ( vertexi.y > y ) !== ( vertexj.y > y ) ) &&
        ( x < ( vertexj.x - vertexi.x ) * ( y - vertexi.y ) / ( vertexj.y - vertexi.y ) + vertexi.x )
      ) {

        intersects = !intersects;
      
      }
    
    }

    return intersects;
  
  };

  Nenkraft.Geom.Polygon2D = Polygon2D;

};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Circle ( _x, _y, _radius ) {

    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius );
    this.center = new Nenkraft.Vector2D( _x, _y );
    this.radius = _radius === undefined ? 32 : _radius;
  
  }

  Circle.prototype = Object.create( null );
  Circle.prototype.constructor = Circle;
  // Static
  Circle.TYPE = 2;
  // Members
  Circle.prototype.TYPE = Circle.TYPE;
  Circle.prototype.diameter = 0;
  Circle.prototype.w = 0;
  Circle.prototype.h = 0;
  Circle.prototype.radiusSquared = 0;
  Circle.prototype.radiusUnsquared = 0;
  Circle.prototype.area = 0;
  Circle.prototype.belongsTo = null;

  // Methods
  Circle.prototype.Set = function ( _x, _y, _radius ) {

    this.center.Set( _x, _y );
    this.radius = _radius;
  
  };

  Circle.prototype.SetC = function ( _circle ) {

    this.center.SetV( _circle );
    this.radius = _circle.radius;
  
  };

  Circle.prototype.Scale = function ( _scale ) {

    this.radius *= _scale;
  
  };

  Circle.prototype.IntersectsCircle = function ( _circle ) {

    var radii = this.radius + _circle.radius;
    return ( radii * radii >= this.center.GetDistanceSquaredV( _circle.center ) );
  
  };

  Circle.prototype.IntersectsPoint = function ( _v ) {

    return ( this.radiusSquared >= this.center.GetDistanceSquaredV( _v ) );
  
  };

  Object.defineProperty( Circle.prototype, 'x', {
    set: function ( _value ) {

      this.center.x = _value;
    
    },
    get: function () {

      return this.center.x;
    
    }
  } );
  Object.defineProperty( Circle.prototype, 'y', {
    set: function ( _value ) {

      this.center.y = _value;
    
    },
    get: function () {

      return this.center.y;
    
    }
  } );
  Object.defineProperty( Circle.prototype, 'radius', {
    set: function ( _value ) {

      this.radiusUnsquared = _value;
      this.radiusSquared = _value * _value;
      this.diameter = this.w = this.h = _value * 2;
      this.area = Math.PI * _value * _value;
    
    },
    get: function () {

      return this.radiusUnsquared;
    
    }
  } );
  Nenkraft.Geom.Circle = Circle;

};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Collision2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D = Object.create( null );
  Collision2D.AABB2DvsAABB2D.Relative = Object.create( null );
  Collision2D.CirclevsCircle = Object.create( null );
  Collision2D.CirclevsCircle.Relative = Object.create( null );
  Collision2D.PolygonvsPolygon = Object.create( null );
  Collision2D.PolygonvsPolygon.Relative = Object.create( null );
  Collision2D.CirclevsLine = Object.create( null );
  Collision2D.CirclevsLine.Relative = Object.create( null );

  Collision2D.VectorSortMinMag = function ( _a, _b ) {

    return _a.GetMagnitudeSquared() - _b.GetMagnitudeSquared();
  
  };

  var V2DMMD = Nenkraft.Vector2D.GetMinMaxDot;
  var CPOL = Nenkraft.Math.ClosestPointOnLine;

  Collision2D.AABB2DvsAABB2D.Result = function () {

    this.mtv = new Nenkraft.Vector2D();
  
  };

  Collision2D.AABB2DvsAABB2D.Result.prototype.occured = false;

  Collision2D.AABB2DvsAABB2D.Result.prototype.Reset = function () {

    this.mtv.Set( 0, 0 );
    this.occured = false;
  
  };

  Collision2D.AABB2DvsAABB2D.Relative.Collide = function ( _obj1, _obj2, _result ) {

    var aabb1 = _obj1.shape, w1 = aabb1.w, h1 = aabb1.h, anchor1 = _obj1.anchor;
    var aabb2 = _obj2.shape, w2 = aabb2.w, h2 = aabb2.h, anchor2 = _obj2.anchor;
    var tl1 = aabb1.tl.SubtractVC( _obj1.relative );
    var tl2 = aabb2.tl.SubtractVC( _obj2.relative );

    if ( anchor1 != undefined ) {

      tl1.x += anchor1.x * w1;
      tl1.y += anchor1.y * h1;
    
    }

    if ( anchor2 != undefined ) {

      tl2.x += anchor2.x * w2;
      tl2.y += anchor2.y * h2;
    
    }

    var tl2xw = tl2.x + w1;
    var tl1xw = tl1.x + w2;
    var br2yh = tl2.y + h1;
    var br1yh = tl1.y + h2;

    if (
      tl1.x < tl2xw &&
      tl2.x < tl1xw &&
      tl1.y < br2yh &&
      tl2.y < br1yh
    ) {

      if ( _result != undefined ) {

        var tvs = [
          new Nenkraft.Vector2D( tl1.x - tl2xw, 0 ),
          new Nenkraft.Vector2D( tl1xw - tl2.x, 0 ),
          new Nenkraft.Vector2D( 0, tl1.y - br2yh ),
          new Nenkraft.Vector2D( 0, br1yh - tl2.y )
        ];
        tvs.sort( Collision2D.VectorSortMinMag );
        _result.mtv.SetV( tvs[ 0 ] );
        _result.occured = true;
      
      }

      return true;
    
    }

    return false;
  
  };

  Collision2D.CirclevsCircle.Result = function () {

    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.poc = {
      a: null,
      b: null,
      c: null
    };
  
  };

  Collision2D.CirclevsCircle.Result.prototype.mtd = 0;
  Collision2D.CirclevsCircle.Result.prototype.delta = null;
  Collision2D.CirclevsCircle.Result.prototype.occured = false;

  Collision2D.CirclevsCircle.Result.prototype.Reset = function () {

    this.poc.a = null;
    this.poc.b = null;
    this.poc.c = null;
    this.mtv.Set( 0, 0 );
    this.mtd = 0;
    this.delta = null;
    this.occured = false;
  
  };

  Collision2D.CirclevsCircle.Relative.Collide = function ( _obj1, _obj2, _result ) {

    var c1 = _obj1.shape, c2 = _obj2.shape;
    var r1 = c1.radius, r2 = c2.radius;
    var radii = r1 + r2;
    var anchor1 = _obj1.anchor, anchor2 = _obj2.anchor;
    var pos1 = _obj1.relative.Copy();
    var pos2 = _obj2.relative.Copy();

    if ( anchor1 != undefined ) {

      pos1.x += anchor1.x * c1.diameter;
      pos1.y += anchor1.y * c1.diameter;
    
    }

    if ( anchor2 != undefined ) {

      pos2.x += anchor2.x * c2.diameter;
      pos2.y += anchor2.y * c2.diameter;
    
    }

    var delta = pos2.SubtractVC( pos1 );
    var distanceSq = delta.GetMagnitudeSquared();

    if ( radii * radii > distanceSq ) {

      if ( _result != undefined ) {

        var distance = Math.sqrt( distanceSq );
        var dm = ( c1.radiusSquared - c2.radiusSquared + distanceSq ) / ( distance + distance );
        var poc1 = new Nenkraft.Vector2D(
          pos1.x + ( delta.x * dm / distance ),
          pos1.y + ( delta.y * dm / distance )
        );
        var de = Math.sqrt( ( c1.radiusSquared ) - ( dm * dm ) ) / distance;
        var rx = -delta.y * de;
        var ry = delta.x * de;
        var poc2 = new Nenkraft.Vector2D(
          poc1.x + rx,
          poc1.y + ry
        );
        var poc3 = new Nenkraft.Vector2D(
          poc1.x - rx,
          poc1.y - ry
        );
        var mtv = pos1.SubtractVC( pos2 );
        mtv.Divide( radii, radii );
        var mtd = distance - r1 - r2;
        _result.poc.a = poc1;
        _result.poc.b = poc2;
        _result.poc.c = poc3;
        _result.mtv.SetV( mtv );
        _result.mtd = mtd;
        _result.delta = delta;
        _result.occured = true;
      
      }

      return true;
    
    }

    return false;
  
  };

  Collision2D.CirclevsCircle.Relative.ElasticResponse = function ( _obj1, _obj2, _result ) {

    var n = _result.delta.Copy();
    var mtv = _result.mtv.Copy();
    n.Normalize();
    var m1 = _obj1.mass;
    var m2 = _obj2.mass;
    var v1 = _obj1.velocity;
    var v2 = _obj2.velocity;
    var a1 = v1.GetDotV( n );
    var a2 = v2.GetDotV( n );
    var op = 2 * ( a1 - a2 ) / ( m1 + m2 );
    v1.Set(
      v1.x - op * m2 * n.x,
      v1.y - op * m2 * n.y
    );
    v2.Set(
      v2.x + op * m1 * n.x,
      v2.y + op * m1 * n.y
    );
    mtv.Multiply( _result.mtd, _result.mtd );
    mtv.Divide( 2, 2 );
    _obj1.relative.SubtractV( mtv );
    _obj2.relative.AddV( mtv );
  
  };

  Collision2D.PolygonvsPolygon.Result = function () {

    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.olAxis = new Nenkraft.Vector2D( 0, 0 );
  
  };

  Collision2D.PolygonvsPolygon.Result.prototype.occured = false;
  Collision2D.PolygonvsPolygon.Result.prototype.mtd = Infinity;

  Collision2D.PolygonvsPolygon.Result.prototype.Reset = function () {

    this.occured = false;
    this.mtv.Set( 0, 0 );
    this.mtd = Infinity;
    this.olAxis.Set( 0, 0 );
  
  };

  var AS = Collision2D.PolygonvsPolygon.Relative.AxisSeparates = function ( _obj1, _obj2, _axis, _result ) {

    var d1 = V2DMMD( _obj1.shape.vertices, _axis );
    var d2 = V2DMMD( _obj2.shape.vertices, _axis );
    var offset = _obj2.relative.SubtractVC( _obj1.relative ).GetDotV( _axis );
    d2.Add( offset, offset );

    if ( d1.x > d2.y || d2.x > d1.y ) {

      return true;
    
    }

    if ( _result != undefined ) {

      var mtd = 0;
      var d1x = d1.x;
      var d1y = d1.y;
      var d2x = d2.x;
      var d2y = d2.y;
      var o1 = 0, o2 = 0;

      if ( d1x < d2x ) {

        if ( d1y < d2y ) {

          mtd = d1y - d2x;
        
        } else {

          o1 = d1y - d2x;
          o2 = d2y - d1x;

          if ( o1 < o2 ) {

            mtd = o1;
          
          } else {

            mtd = -o2;
          
          }
        
        }
      
      } else if ( d1y > d2y ) {

        mtd = d1x - d2y;
        
      } else {

        o1 = d1y - d2x;
        o2 = d2y - d1x;

        if ( o1 < o2 ) {

          mtd = o1;
          
        } else {

          mtd = -o2;
          
        }
        
      }

      var absMtd = Math.abs( mtd );

      if ( absMtd < _result.mtd ) {

        _result.mtd = absMtd;
        _result.olAxis.SetV( _axis );

        if ( mtd < 0 ) {

          _result.olAxis.Invert();
        
        }
      
      }
    
    }

    return false;
  
  };

  Collision2D.PolygonvsPolygon.Relative.Collide = function ( _obj1, _obj2, _result ) {

    var p1 = _obj1.shape;
    var p2 = _obj2.shape;
    var p1Normals = p1.normals;
    var p2Normals = p2.normals;
    var i = 0, p1l = p1Normals.length, p2l = p2Normals.length;

    for ( i; i < p1l; ++i ) {

      if ( AS( _obj1, _obj2, p1Normals[ i ], _result ) === true ) {

        return false;
      
      }
    
    }

    for ( i = 0; i < p2l; ++i ) {

      if ( AS( _obj1, _obj2, p2Normals[ i ], _result ) === true ) {

        return false;
      
      }
    
    }

    if ( _result != undefined ) {

      _result.mtv.SetV( _result.olAxis );
      _result.mtv.Multiply( _result.mtd, _result.mtd );
      _result.occured = true;
    
    }

    return true;
  
  };

  Collision2D.CirclevsLine.Result = function () {

    this.mtv = new Nenkraft.Vector2D( 0, 0 );
    this.cp = new Nenkraft.Vector2D( 0, 0 );
  
  };

  Collision2D.CirclevsLine.Result.prototype.occured = false;
  Collision2D.CirclevsLine.Result.prototype.sore = 0;

  Collision2D.CirclevsLine.Result.prototype.Reset = function () {

    this.mtv.Set( 0, 0 );
    this.cp.Set( 0, 0 );
    this.occured = false;
    this.sore = 0;
  
  };

  Collision2D.CirclevsLine.Relative.Collide = function ( _c, _l, _result ) {

    var lshape = _l.shape;
    var cshape = _c.shape;
    var lpos = _l.relative;
    var cpos = _c.relative;
    var s = lshape.s.AddVC( lpos );
    var e = lshape.e.AddVC( lpos );
    var cp = CPOL( s, e, cpos );
    var delta = cpos.SubtractVC( cp );
    var distanceSq = delta.GetMagnitudeSquared();

    if ( distanceSq < cshape.radiusSquared ) {

      if ( _result ) {

        var mtv = delta;
        var distance = cshape.radius - Math.sqrt( distanceSq );
        mtv.Normalize();
        mtv.Multiply( distance, distance );
        _result.mtv.SetV( mtv );
        _result.cp.SetV( cp );
        _result.occured = true;

        if ( cp === s ) {

          _result.sore = 1;
        
        } else if ( cp === e ) {

          _result.sore = 2;
        
        }
      
      }

      return true;
    
    }

    return false;
  
  };

  Collision2D.CirclevsLine.Relative.ReflectingResponse = function ( _c, _l, _result ) {

    var lshape = _l.shape;
    var cvel = _c.velocity;
    var cpos = _c.relative;
    var n;
    var refl;
    var cp = _result.cp;

    if ( _result.sore !== 0 ) {

      n = cp.SubtractVC( cpos );
      n.Normalize();
    
    } else {

      n = lshape.GetNormalA();
    
    }

    refl = cvel.GetReflectionV( n );
    cvel.SetV( refl );
    cpos.AddV( _result.mtv );
  
  };

  Nenkraft.Math.Collision2D = Collision2D;

};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  Nenkraft.Math.Ease = Object.create( null );

  Nenkraft.Math.Ease.Linear = function ( _time, _startValue, _amplitude, _duration ) {

    return _amplitude * _time / _duration + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadIn = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration;
    return _amplitude * _time * _time + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadOut = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration;
    return -_amplitude * _time * ( _time - 2 ) + _startValue;
  
  };

  Nenkraft.Math.Ease.QuadInOut = function ( _time, _startValue, _amplitude, _duration ) {

    _time /= _duration * 0.5;
    if ( _time < 1 ) return _amplitude * 0.5 * _time * _time + _startValue;
    _time--;
    return -_amplitude * 0.5 * ( _time * ( _time - 2 ) - 1 ) + _startValue;
  
  };

  Nenkraft.Math.Ease.SineIn = function ( _time, _startValue, _amplitude, _duration ) {

    return -_amplitude * Math.cos( _time / _duration * ( Math.PI * 0.5 ) ) + _amplitude + _startValue;
  
  };

  Nenkraft.Math.Ease.SineOut = function ( _time, _startValue, _amplitude, _duration ) {

    return _amplitude * Math.sin( _time / _duration * ( Math.PI * 0.5 ) ) + _startValue;
  
  };

  Nenkraft.Math.Ease.SineInOut = function ( _time, _startValue, _amplitude, _duration ) {

    return -_amplitude * 0.5 * ( Math.cos( Math.PI * _time / _duration ) - 1 ) + _startValue;
  
  };

};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Motion ( _id, _target, _propertyString, _value, _duration, _easing ) {

    if ( !( this instanceof Motion ) ) return new Motion( _id, _target, _propertyString, _value, _duration, _easing );
    this.id = _id;
    this.target = _target;
    this.propertyString = _propertyString;
    if ( _value !== undefined ) this.value = _value;
    if ( _duration !== undefined ) this.duration = _duration;
    this.easing = Nenkraft.Math.Ease[ _easing === undefined ? Motion.DEFAULT_EASING : _easing ];
    this.onStart = new Nenkraft.Event.LocalEvent();
    this.onEnd = new Nenkraft.Event.LocalEvent();
    this.onStop = new Nenkraft.Event.LocalEvent();
    this.onReconfigure = new Nenkraft.Event.LocalEvent();
    this.onReset = new Nenkraft.Event.LocalEvent();
  
  }

  Motion.prototype = Object.create( null );
  Motion.prototype.constructor = Motion;
  // Static
  Motion.DEFAULT_EASING = 'Linear';
  // Members
  Motion.prototype.id = null;
  Motion.prototype.target = null;
  Motion.prototype.easing = null;
  Motion.prototype.duration = 1000;
  Motion.prototype.time = 0;
  Motion.prototype.value = 1;
  Motion.prototype.startValue = 0;
  Motion.prototype.propertyString = null;
  Motion.prototype.change = 0;
  Motion.prototype.property = null;
  Motion.prototype.propertyObject = null;
  Motion.prototype.running = false;

  // Methods
  Motion.prototype.Start = function () {

    var property = this.propertyString.split( '.' );
    this.property = property[ property.length - 1 ];
    this.propertyObject = Nenkraft.Utils.Nested( this.target, this.propertyString, true );
    this.startValue = this.propertyObject[ this.property ];
    this.change = this.value - this.startValue;
    this.time = 0;
    this.running = true;
    this.onStart.Dispatch( this, null );
  
  };

  Motion.prototype.Stop = function () {

    delete this.property;
    delete this.propertyObject;
    delete this.startValue;
    delete this.change;
    delete this.time;
    delete this.running;
    this.onStop.Dispatch( this, null );
  
  };

  Motion.prototype.Process = function () {

    if ( this.running === true ) {

      this.propertyObject[ this.property ] = this.easing( this.time, this.startValue, this.change, this.duration );

      if ( ++this.time >= this.duration ) {

        this.running = false;
        this.propertyObject[ this.property ] = this.value;
        this.onEnd.Dispatch( this, null );
      
      }
    
    }
  
  };

  Motion.prototype.Reconfigure = function ( _propertyString, _value, _duration, _easing ) {

    if ( _propertyString !== undefined ) this.propertyString = _propertyString;
    this.value = _value;
    this.duration = _duration;
    this.easing = Nenkraft.Math.Ease[ _easing === undefined ? Motion.DEFAULT_EASING : _easing ];
    this.onReconfigure.Dispatch( this, null );
  
  };

  Motion.prototype.Reset = function () {

    if ( this.propertyObject === null || this.property === null ) return false;
    this.propertyObject[ this.property ] = this.startValue;
    delete this.property;
    delete this.propertyObject;
    delete this.startValue;
    delete this.change;
    delete this.time;
    delete this.running;
    this.onReset.Dispatch( this, null );
  
  };

  Nenkraft.Motion = Motion;

};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function MotionManager ( _target ) {

    if ( !( this instanceof MotionManager ) ) return new MotionManager( _target );
    this.motions = [];
    this.target = _target;
  
  }

  MotionManager.prototype = Object.create( null );
  MotionManager.prototype.constructor = MotionManager;
  // Static

  // Members
  MotionManager.prototype.target = null;
  MotionManager.prototype.motions = null;

  // Methods
  MotionManager.prototype.Create = function ( _id, _propertyString, _value, _duration, _easing ) {

    var exists = this.GetMotion( _id );

    if ( exists === null ) {

      var motion = new Nenkraft.Motion( _id, this.target, _propertyString, _value, _duration, _easing );
      this.motions.push( motion );
      return motion;
    
    }

    return null;
  
  };

  MotionManager.prototype.Add = function ( _motion ) {

    var exists = this.GetMotion( _motion.id );

    if ( exists === null ) {

      this.motions.push( _motion );
    
    }
  
  };

  MotionManager.prototype.Start = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Start();
    
    }

    return motion;
  
  };

  MotionManager.prototype.StartMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Start( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Stop = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Stop();
    
    }

    return motion;
  
  };

  MotionManager.prototype.StopMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Stop( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Reset = function ( _id ) {

    var motion = this.GetMotion( _id );

    if ( motion !== null ) {

      motion.Reset();
    
    }

    return motion;
  
  };

  MotionManager.prototype.ResetMultiple = function ( _ids ) {

    _ids = _ids.split( ' ' );

    for ( var i = 0, l = _ids.length; i < l; ++i ) {

      this.Reset( _ids[ i ] );
    
    }
  
  };

  MotionManager.prototype.Process = function () {

    for ( var i = 0, motions = this.motions, l = motions.length, motion; i < l; ++i ) {

      motion = motions[ i ];
      motion.Process();
    
    }
  
  };

  MotionManager.prototype.GetMotion = function ( _id ) {

    for ( var i = 0, motions = this.motions, l = motions.length, motion; i < l; ++i ) {

      motion = motions[ i ];
      if ( motion.id === _id ) return motion;
    
    }

    return null;
  
  };

  Nenkraft.MotionManager = MotionManager;

};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function QuadtreeNode ( _aabb, _level, _objCap, _levelCap ) {

    if ( !( this instanceof QuadtreeNode ) ) return new QuadtreeNode( _aabb, _level, _objCap, _levelCap );
    this.aabb = _aabb;
    this.level = _level;
    this.objectCap = _objCap;
    this.levelCap = _levelCap;
    this.nodes = {};
    this.objects = [];
    this.convergence = [];
  
  }

  QuadtreeNode.prototype = Object.create( null );
  QuadtreeNode.prototype.constructor = QuadtreeNode;
  // Static
  QuadtreeNode.TOP_LEFT = 'TL';
  QuadtreeNode.TOP_RIGHT = 'TR';
  QuadtreeNode.BOTTOM_LEFT = 'BL';
  QuadtreeNode.BOTTOM_RIGHT = 'BR';
  // Members
  QuadtreeNode.prototype.objectCap = 0;
  QuadtreeNode.prototype.levelCap = 0;
  QuadtreeNode.prototype.level = 0;
  QuadtreeNode.prototype.nodes = null;
  QuadtreeNode.prototype.objects = null;
  QuadtreeNode.prototype.convergence = null;
  QuadtreeNode.prototype.aabb = null;
  QuadtreeNode.prototype.hasSplit = false;

  // Methods
  QuadtreeNode.prototype.Add = function ( _object ) {

    var marking = '';
    var objects = this.objects;
    var nodes = this.nodes;
    var i = 0;

    if ( this.hasSplit === true ) {

      marking = this.Marking( _object );

      if ( marking !== null ) {

        nodes[ marking ].Add( _object );
        return;
      
      }
    
    }

    objects.push( _object );

    if ( this.level < this.levelCap ) {

      if ( objects.length > this.objectCap ) {

        if ( this.hasSplit === false ) {

          this.Split();
        
        }

        while ( i < objects.length ) {

          marking = this.Marking( objects[ i ] );

          if ( marking !== null ) {

            nodes[ marking ].Add( objects.splice( i, 1 )[ 0 ] );
          
          } else {

            ++i;
          
          }
        
        }
      
      }
    
    }
  
  };

  QuadtreeNode.prototype.Converge = function ( _object ) {

    var convergence = this.convergence;
    convergence.length = 0;
    convergence.push.apply( convergence, this.objects );
    var marking = null;
    var nodes = this.nodes;

    if ( this.hasSplit === true ) {

      marking = this.Marking( _object );

      if ( marking !== null ) {

        convergence.push.apply( convergence, nodes[ marking ].Converge( _object ) );
      
      } else {

        convergence.push.apply( convergence, nodes[ QuadtreeNode.TOP_LEFT ].Converge( _object ) );
        convergence.push.apply( convergence, nodes[ QuadtreeNode.TOP_RIGHT ].Converge( _object ) );
        convergence.push.apply( convergence, nodes[ QuadtreeNode.BOTTOM_LEFT ].Converge( _object ) );
        convergence.push.apply( convergence, nodes[ QuadtreeNode.BOTTOM_RIGHT ].Converge( _object ) );
      
      }
    
    }

    return convergence;
  
  };

  QuadtreeNode.prototype.Split = function () {

    var nl = this.level + 1;
    var oc = this.objectCap;
    var lc = this.levelCap;
    var nodes = this.nodes;
    var aabb = this.aabb;
    nodes[ QuadtreeNode.TOP_LEFT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.TOP_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.TOP_RIGHT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.TOP_RIGHT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_LEFT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.BOTTOM_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_RIGHT ] = new QuadtreeNode(
      aabb.GetQuadrant( QuadtreeNode.BOTTOM_RIGHT ),
      nl, oc, lc
    );
    this.hasSplit = true;
  
  };

  QuadtreeNode.prototype.Dump = function () {

    var nodes = this.nodes;
    this.objects.length = 0;

    if ( this.hasSplit === true ) {

      nodes[ QuadtreeNode.TOP_LEFT ].Dump();
      nodes[ QuadtreeNode.TOP_RIGHT ].Dump();
      nodes[ QuadtreeNode.BOTTOM_LEFT ].Dump();
      nodes[ QuadtreeNode.BOTTOM_RIGHT ].Dump();
    
    }

    this.nodes = {};
    this.hasSplit = false;
  
  };

  QuadtreeNode.prototype.Marking = function ( _object ) {

    var nodes = this.nodes;

    if ( nodes[ QuadtreeNode.TOP_LEFT ].aabb.ContainsAABB2D( _object ) === true ) {

      return QuadtreeNode.TOP_LEFT;
    
    }

    if ( nodes[ QuadtreeNode.TOP_RIGHT ].aabb.ContainsAABB2D( _object ) === true ) {

      return QuadtreeNode.TOP_RIGHT;
    
    }

    if ( nodes[ QuadtreeNode.BOTTOM_LEFT ].aabb.ContainsAABB2D( _object ) === true ) {

      return QuadtreeNode.BOTTOM_LEFT;
    
    }

    if ( nodes[ QuadtreeNode.BOTTOM_RIGHT ].aabb.ContainsAABB2D( _object ) === true ) {

      return QuadtreeNode.BOTTOM_RIGHT;
    
    }

    return null;
  
  };

  QuadtreeNode.prototype.ConcatNodes = function ( _nodeList ) {

    if ( _nodeList === undefined ) _nodeList = [];
    _nodeList.push( this );
    var nodes = this.nodes;
    if ( this.hasSplit === false ) return _nodeList;
    nodes[ QuadtreeNode.TOP_LEFT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.TOP_RIGHT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.BOTTOM_LEFT ].ConcatNodes( _nodeList );
    nodes[ QuadtreeNode.BOTTOM_RIGHT ].ConcatNodes( _nodeList );
    return _nodeList;
  
  };

  Nenkraft.Utils.QuadtreeNode = QuadtreeNode;
  Nenkraft.QuadtreeNode = QuadtreeNode;

};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Mouse ( _element, _offsetX, _offsetY ) {

    if ( !( this instanceof Mouse ) ) return new Mouse( _element, _offsetX, _offsetY );
    this.element = _element;
    this.position = new Nenkraft.Vector2D();
    this.scale = new Nenkraft.Vector2D( 1, 1 );
    this.offset = new Nenkraft.Vector2D( _offsetX, _offsetY );

    this.element.addEventListener( 'mousemove', this.OnMove.bind( this ) );
    this.element.addEventListener( 'mousedown', this.OnDown.bind( this ) );
    this.element.addEventListener( 'mouseup', this.OnUp.bind( this ) );
    this.element.addEventListener( 'mouseleave', this.OnLeave.bind( this ) );
    this.element.addEventListener( 'wheel', this.OnWheel.bind( this ), { passive: true } );

    this.onMove = new Nenkraft.Event.LocalEvent();
    this.onDown = new Nenkraft.Event.LocalEvent();
    this.onUp = new Nenkraft.Event.LocalEvent();
    this.onLeave = new Nenkraft.Event.LocalEvent();
    this.onWheel = new Nenkraft.Event.LocalEvent();
  
  }

  Mouse.prototype = Object.create( null );
  Mouse.prototype.constructor = Mouse;
  // Static

  // Members

  // Methods
  Mouse.prototype.OnMove = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    var element = this.element, pos = this.position;
    pos.Set( _event.pageX, _event.pageY );
    pos.Subtract( element.offsetLeft, element.offsetTop );
    pos.SubtractV( this.offset );
    pos.DivideV( this.scale );
    this.onMove.Dispatch( this.element, { position: pos, native: _event } );
  
  };

  Mouse.prototype.OnDown = function ( _event ) {

    _event.stopPropagation();
    this.onDown.Dispatch( this.element, { position: this.position, native: _event } );
  
  };

  Mouse.prototype.OnUp = function ( _event ) {

    _event.stopPropagation();
    this.onUp.Dispatch( this.element, { position: this.position, native: _event } );
  
  };

  Mouse.prototype.OnLeave = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.onLeave.Dispatch( this.element, { position: this.position, native: _event } );
  
  };

  Mouse.prototype.OnWheel = function ( _event ) {

    this.onWheel.Dispatch( this.element, { position: this.position, native: _event } );
  
  };

  Object.defineProperty( Mouse.prototype, 'x', {
    get: function () {

      return this.position.x;
    
    }
  } );
  Object.defineProperty( Mouse.prototype, 'y', {
    get: function () {

      return this.position.y;
    
    }
  } );
  Nenkraft.Input.Mouse = Mouse;

};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Keyboard ( _element ) {

    if ( !( this instanceof Keyboard ) ) return new Keyboard( _element );
    this.element = _element;
    this.element.setAttribute( 'tabindex', '1' );
    this.element.focus();

    this.element.addEventListener( 'keydown', this.OnKeyDown.bind( this ) );
    this.element.addEventListener( 'keyup', this.OnKeyUp.bind( this ) );

    this.onDown = new Nenkraft.Event.LocalEvent();
    this.onUp = new Nenkraft.Event.LocalEvent();
  
  }

  Keyboard.prototype = Object.create( null );
  Keyboard.prototype.constructor = Keyboard;
  // Static

  // Members

  // Methods
  Keyboard.prototype.OnKeyDown = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.onDown.Dispatch( this.element, _event );
  
  };

  Keyboard.prototype.OnKeyUp = function ( _event ) {

    _event.preventDefault();
    _event.stopPropagation();
    this.onUp.Dispatch( this.element, _event );
  
  };

  Nenkraft.Input.Keyboard = Keyboard;

};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Debug () {

    throw new Error( 'Cannot be instantiated' );
  
  }

  Debug.Draw = {};

  Debug.Draw.AABB2D = function ( _rc, _aabb, _options ) {

    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.globalAlpha = 0.1;
    _rc.strokeStyle = 'rgba(100, 0, 100, 1)';
    _rc.fillStyle = 'rgba(0, 100, 0, 1)';

    if ( _options && _options.strokeStyle ) {

      _rc.strokeStyle = _options.strokeStyle;
    
    }

    if ( _options && _options.fillStyle ) {

      _rc.fillStyle = _options.fillStyle;
    
    }

    _rc.lineWidth = 2;
    _rc.beginPath();
    _rc.moveTo( _aabb.tl.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.tl.y );
    _rc.lineTo( _aabb.br.x, _aabb.br.y );
    _rc.lineTo( _aabb.tl.x, _aabb.br.y );
    _rc.closePath();

    if ( _options && _options.noStroke ) {

    } else {

      _rc.stroke();
    
    }

    if ( _options && _options.noFill ) {

    } else {

      _rc.fill();
    
    }
  
  };

  Nenkraft.Debug = Debug;

};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Math.Vector2D;

  function Pixel2D ( _x, _y, _style ) {

    if ( !( this instanceof Pixel2D ) ) return new Pixel2D( _x, _y, _style );
    Super.call( this, _x, _y );
    this.style = new Nenkraft.Style.CreateP( _style );
    this.colorObj = new Nenkraft.Color();
  
  }

  Pixel2D.prototype = Object.create( Super.prototype );
  Pixel2D.prototype.constructor = Pixel2D;
  // Static

  // Members
  Pixel2D.prototype.colorObj = null;
  Pixel2D.prototype.style = null;
  Pixel2D.prototype.programController = null;
  Pixel2D.prototype.bufferData = null;

  // Methods
  /*
   * Pixel2D.prototype.Draw = function ( _rc ) {
   * //TODO
   *}; 
   */
  Pixel2D.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.x, this.y
      );
    
    }
  
  };

  Pixel2D.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Pixel2D.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Pixel2D.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.color !== null ) {

      pc.color.SetHex( this.style.pixel.color );
      pc.color.Normalize();
    
    }
  
  };

  Pixel2D.prototype.GetBufferData = function () {

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData[ 0 ] = this.x;
    bufferData[ 1 ] = this.y;
    bufferData[ 2 ] = this.colorObj.r;
    bufferData[ 3 ] = this.colorObj.g;
    bufferData[ 4 ] = this.colorObj.b;
    bufferData[ 5 ] = this.colorObj.a;
    bufferData[ 6 ] = this.style.pixel.size;
    return bufferData;
  
  };

  Pixel2D.prototype.UpdateInBuffer = function ( _buffer, _index ) {

    _buffer[ _index ] = this.x;
    _buffer[ _index + 1 ] = this.y;
    _buffer[ _index + 2 ] = this.colorObj.r;
    _buffer[ _index + 3 ] = this.colorObj.g;
    _buffer[ _index + 4 ] = this.colorObj.b;
    _buffer[ _index + 5 ] = this.colorObj.a;
    _buffer[ _index + 6 ] = this.style.pixel.size;
  
  };

  Nenkraft.Path.Pixel2D = Pixel2D;

};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.Line2D;

  function Line2D ( _arg0, _arg1, _arg2, _arg3, _style ) {

    if ( !( this instanceof Line2D ) ) return new Line2D( _arg0, _arg1, _arg2, _arg3, _style );
    Super.call( this, _arg0, _arg1, _arg2, _arg3 );
    this.style = Nenkraft.Style.CreateSSa( _style );
  
  }

  Line2D.prototype = Object.create( Super.prototype );
  Line2D.prototype.constructor = Line2D;
  // Static

  // Members
  Line2D.prototype.style = null;
  Line2D.prototype.programController = null;

  // Methods
  Line2D.prototype.Draw = function ( _rc ) {

    var s = this.s, e = this.e, style = this.style, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( s.x, s.y );
    _rc.lineTo( e.x, e.y );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  Line2D.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.s, this.e
      );
    
    }
  
  };

  Line2D.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Line2D.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Line2D.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.color !== null ) {

      pc.color.SetHex( this.style.stroke.color );
      pc.color.Normalize();
    
    }
  
  };

  Nenkraft.Path.Line2D = Line2D;
  Nenkraft.Path.Ray2D = Line2D;

};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.AABB2D;

  function AABB2D ( _arg0, _arg1, _arg2, _arg3, _style ) {

    if ( !( this instanceof AABB2D ) ) return new AABB2D( _arg0, _arg1, _arg2, _arg3, _style );
    Super.call( this, _arg0, _arg1, _arg2, _arg3 );
    this.style = Nenkraft.Style.CreateFSSa( _style );
  
  }

  AABB2D.prototype = Object.create( Super.prototype );
  AABB2D.prototype.constructor = AABB2D;
  // Static

  // Members

  // Methods
  AABB2D.prototype.Draw = function ( _rc ) {

    var tl = this.tl, br = this.br, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.moveTo( tl.x, tl.y );
    _rc.lineTo( br.x, tl.y );
    _rc.lineTo( br.x, br.y );
    _rc.lineTo( tl.x, br.y );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( fill.applied === true ) {

      fill.Apply( _rc );
      _rc.fill();
    
    }

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  AABB2D.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.tl.x, this.tl.y, this.w, this.h
      );
    
    }
  
  };

  AABB2D.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  AABB2D.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  AABB2D.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.fillColor !== null && pc.outlineColor !== null && pc.outline !== null ) {

      pc.fillColor.SetHex( this.style.fill.color );
      pc.fillColor.Normalize();
      pc.outlineColor.SetHex( this.style.stroke.color );
      pc.outlineColor.Normalize();
      pc.outline = this.style.stroke.lineWidth + 0.2;
    
    }
  
  };

  Nenkraft.Path.AABB2D = AABB2D;

};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.Polygon2D;

  function Polygon2D ( _vertices, _style ) {

    if ( !( this instanceof Polygon2D ) ) return new Polygon2D( _vertices, _style );
    Super.call( this, _vertices );
    this.style = Nenkraft.Style.CreateFSSa( _style );
  
  }

  Polygon2D.prototype = Object.create( Super.prototype );
  Polygon2D.prototype.constructor = Polygon2D;
  // Static

  // Members

  // Methods
  Polygon2D.prototype.Draw = function ( _rc ) {

    var style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    var vertices = this.vertices, vertex = vertices[ 0 ];
    _rc.beginPath();
    _rc.moveTo( vertex.x, vertex.y );

    for ( var i = 1, l = vertices.length; i < l; ++i ) {

      vertex = vertices[ i ];
      _rc.lineTo( vertex.x, vertex.y );
    
    }

    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( fill.applied === true ) {

      fill.Apply( _rc );
      _rc.fill();
    
    }

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  Nenkraft.Path.Polygon2D = Polygon2D;

};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Geom.Circle;

  function Circle ( _x, _y, _radius, _style ) {

    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius, _style );
    Super.call( this, _x, _y, _radius );
    this.style = Nenkraft.Style.CreateFSSa( _style );
  
  }

  Circle.prototype = Object.create( Super.prototype );
  Circle.prototype.constructor = Circle;
  // Static

  // Members

  // Methods
  Circle.prototype.Draw = function ( _rc ) {

    var center = this.center, style = this.style, fill = style.fill, stroke = style.stroke, shadow = style.shadow;
    _rc.beginPath();
    _rc.arc( center.x, center.y, this.radius, 0, Nenkraft.Math.PII, false );
    _rc.closePath();
    if ( shadow.applied === true ) shadow.Apply( _rc );

    if ( fill.applied === true ) {

      fill.Apply( _rc );
      _rc.fill();
    
    }

    if ( stroke.applied === true ) {

      stroke.Apply( _rc );
      _rc.stroke();
    
    }
  
  };

  Circle.prototype.GLDraw = function ( _gl, _transform ) {

    if ( this.programController !== null ) {

      this.programController.Execute(
        _transform.worldTransform.AsArray( true ),
        this.center.x, this.center.y, this.radius
      );
    
    }
  
  };

  Circle.prototype.LinkProgramController = function ( _pc ) {

    this.programController = _pc;
    this.LinkStyle();
  
  };

  Circle.prototype.UseProgramController = function ( _pc ) {

    this.programController = _pc;
  
  };

  Circle.prototype.LinkStyle = function () {

    var pc = this.programController;

    if ( pc !== null && pc.fillColor !== null && pc.outlineColor !== null && pc.outline !== null ) {

      pc.fillColor.SetHex( this.style.fill.color );
      pc.fillColor.Normalize();
      pc.outlineColor.SetHex( this.style.stroke.color );
      pc.outlineColor.Normalize();
      pc.outline = this.style.stroke.lineWidth + 0.2;
    
    }
  
  };

  Nenkraft.Path.Circle = Circle;

};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function CoreEntity2D ( _x, _y ) {

    if ( !( this instanceof CoreEntity2D ) ) return new CoreEntity2D( _x, _y );
    this.transform = new Nenkraft.Math.Transform2D( _x, _y );
    this.data = Object.create( null );
  
  }

  CoreEntity2D.prototype = Object.create( null );
  CoreEntity2D.prototype.constructor = CoreEntity2D;
  // Static
  CoreEntity2D.NULL_TRANSFORM = new Nenkraft.Math.Transform2D();
  // Members
  CoreEntity2D.prototype.parent = null;
  CoreEntity2D.prototype.transform = null;
  CoreEntity2D.prototype.data = null;
  CoreEntity2D.prototype.w = 0;
  CoreEntity2D.prototype.h = 0;
  CoreEntity2D.prototype.bounds = null;
  CoreEntity2D.prototype.boundsDirty = true;

  // Methods
  CoreEntity2D.prototype.UpdateTransform = function () {

    if ( this.parent ) {

      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    
    } else {

      this.transform.UpdateWorld( CoreEntity2D.NULL_TRANSFORM.worldTransform );
    
    }
  
  };

  CoreEntity2D.prototype.GetWorldPosition = function () {

    var wt = this.transform.worldTransform;
    return new Nenkraft.Vector2D( wt.e, wt.f );
  
  };

  CoreEntity2D.prototype.ComputeBounds = function ( _anchor ) {

    var ax = ( _anchor && _anchor.x ) ? _anchor.x : 0;
    var ay = ( _anchor && _anchor.y ) ? _anchor.y : 0;

    if ( this.bounds === null ) {

      this.bounds = new Nenkraft.Geom.AABB2D(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
      this.bounds.belongsTo = this;
    
    } else {

      this.bounds.Set(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
    
    }

    this.boundsDirty = false;
    return this.bounds;
  
  };

  Object.defineProperty( CoreEntity2D.prototype, 'rotation', {
    get: function () {

      return this.transform.rotation;
    
    },
    set: function ( _value ) {

      this.transform.rotation = _value;
      this.transform.UpdateSkew();
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'scale', {
    get: function () {

      return this.transform.scale;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'position', {
    get: function () {

      return this.transform.position;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'pivot', {
    get: function () {

      return this.transform.pivot;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'x', {
    get: function () {

      return this.transform.position.x;
    
    },
    set: function ( _value ) {

      this.transform.position.x = _value;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'y', {
    get: function () {

      return this.transform.position.y;
    
    },
    set: function ( _value ) {

      this.transform.position.y = _value;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'width', {
    get: function () {

      return this.w * this.scale.x;
    
    },
    set: function ( _value ) {

      this.w = _value;
    
    }
  } );
  Object.defineProperty( CoreEntity2D.prototype, 'height', {
    get: function () {

      return this.h * this.scale.y;
    
    },
    set: function ( _value ) {

      this.h = _value;
    
    }
  } );
  Nenkraft.Entity.CoreEntity2D = CoreEntity2D;

};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.CoreEntity2D;

  function Container2D ( _x, _y ) {

    if ( !( this instanceof Container2D ) ) return new Container2D( _x, _y );
    Super.call( this, _x, _y );
    this.children = [];
  
  }

  Container2D.prototype = Object.create( Super.prototype );
  Container2D.prototype.constructor = Container2D;
  // Static

  // Members
  Container2D.prototype.children = null;
  Container2D.prototype.render = true;
  Container2D.prototype.display = true;
  Container2D.prototype.transformShouldUpdate = true;
  Container2D.prototype.transformAutomaticUpdate = true;
  //
  Container2D.prototype.isBatchParent = false;
  Container2D.prototype.childDataBuffer = null;
  Container2D.prototype.bufferData = null;
  Container2D.prototype.programController = null;
  Container2D.prototype.bufferStartIndex = 0;
  Container2D.prototype.bufferEndIndex = 0;

  /*
   *
   *Methods
   */
  Container2D.prototype.PreDraw = function ( /* _rc */ ) {
    // Override
  };

  Container2D.prototype.GLPreDraw = function ( /* _gl */ ) {
    // Override
  };

  Container2D.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Container2D.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren();
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  Container2D.prototype.RequestTransformUpdate = function () {

    this.transformShouldUpdate = true;
  
  };

  Container2D.prototype.DrawChildren = function ( _rc ) {

    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {

      child = children[ i ];
      if ( child.Draw ) child.Draw( _rc );
    
    }
  
  };

  Container2D.prototype.GLDrawChildren = function ( _gl ) {

    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {

      child = children[ i ];
      if ( child.GLDraw ) child.GLDraw( _gl );
    
    }
  
  };

  Container2D.prototype.GLBatchDrawChildren = function () {

    if ( this.childDataBuffer != null && this.programController != null ) {

      this.programController.Execute( this.childDataBuffer, this.children.length );
    
    }
  
  };

  Container2D.prototype.ComputeBatchBuffer = function ( _getBufferData ) {

    var childDataBuffer = [];

    for ( var i = 0, children = this.children, l = children.length, child, childData; i < l; ++i ) {

      child = children[ i ];

      if ( _getBufferData != null ) {

        childData = _getBufferData( child );
      
      } else {

        childData = child.GetBufferData();
      
      }

      child.bufferStartIndex = childDataBuffer.length;
      child.bufferEndIndex = childDataBuffer.length + childData.length;
      childDataBuffer.push.apply( childDataBuffer, childData );
    
    }

    this.childDataBuffer = new Float32Array( childDataBuffer );
  
  };

  Container2D.prototype.UpdateInBuffer = function () {

    throw new Error( 'Cannot update buffer data directly on Container2D object!' );
  
  };

  Container2D.prototype.GetBufferData = function () {

    throw new Error( 'Cannot access buffer data directly on Container2D object!' );
  
  };

  Container2D.prototype.AddChild = function ( _child ) {

    var parent = _child.parent;

    if ( parent !== null ) {

      parent.RemoveChild( _child );
    
    }

    this.children.push( _child );
    _child.parent = this;
    return _child;
  
  };

  Container2D.prototype.AddChildren = function () {

    var children = arguments;

    if ( Array.isArray( children[ 0 ] ) ) {

      children = children[ 0 ];
    
    }

    for ( var i = 0, l = children.length; i < l; ++i ) {

      this.AddChild( children[ i ] );
    
    }
  
  };

  Container2D.prototype.Mount = function () {

    this.AddChildren.apply( this, arguments );
  
  };

  Container2D.prototype.AddSibling = function ( _sibling ) {

    var parent = this.parent;

    if ( parent !== null ) {

      parent.AddChild( _sibling );
    
    }

    return _sibling;
  
  };

  Container2D.prototype.RemoveChild = function ( _child ) {

    var children = this.children;
    var ix = children.indexOf( _child );

    if ( ix !== -1 ) {

      delete _child.parent;
      return children.splice( ix, 1 )[ 0 ];
    
    }
  
  };

  Container2D.prototype.RemoveChildren = function () {

    var children = this.children;
    var aChildren = arguments[ 0 ].length ? arguments[ 0 ] : arguments;
    var rChildren = [];

    for ( var i = 0, l = aChildren.length, child, ix; i < l; ++i ) {

      child = aChildren[ i ];
      ix = children.indexOf( child );

      if ( ix !== -1 ) {

        rChildren.push( children.splice( ix, 1 )[ 0 ] );
        delete child.parent;
      
      }
    
    }

    return rChildren;
  
  };

  Container2D.prototype.SendToFront = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.push( pChildren.splice( ix, 1 )[ 0 ] );
      
      }
    
    }
  
  };

  Container2D.prototype.SendToBack = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.splice( 0, 0, pChildren.splice( ix, 1 )[ 0 ] );
      
      }
    
    }
  
  };

  Container2D.prototype.Dump = function () {

    this.children.length = 0;
  
  };

  Container2D.prototype.Destroy = function () {

    this.Dump();
    if ( this.parent !== null ) this.parent.RemoveChild( this );
  
  };

  Container2D.prototype.AttachTo = function ( _parent ) {

    _parent.AddChild( this );
  
  };

  Container2D.prototype.Detach = function () {

    if ( this.parent !== null ) return this.parent.RemoveChild( this );
    return null;
  
  };

  Container2D.prototype.GetChildClosestTo = function ( _object, _filterCondition ) {

    var children = this.children, closestChild = null;

    if ( children.length !== 0 ) {

      for ( var i = 0, l = children.length, child, distance = Infinity, tempDistance; i < l; ++i ) {

        child = children[ i ];

        if ( _filterCondition !== undefined ) {

          if ( _filterCondition( child ) === false ) continue;
        
        }

        tempDistance = Math.abs( child.position.GetDistanceSquared( _object.x, _object.y ) );

        if ( tempDistance < distance ) {

          distance = tempDistance;
          closestChild = child;
        
        }
      
      }

      return closestChild;
    
    }

    return null;
  
  };

  Container2D.prototype.GetChildFurthestFrom = function ( _object, _filterCondition ) {

    var children = this.children, closestChild = null;

    if ( children.length !== 0 ) {

      for ( var i = 0, l = children.length, child, distance = 0, tempDistance; i < l; ++i ) {

        child = children[ i ];

        if ( _filterCondition !== undefined ) {

          if ( _filterCondition( child ) === false ) continue;
        
        }

        tempDistance = Math.abs( child.position.GetDistanceSquared( _object.x, _object.y ) );

        if ( tempDistance > distance ) {

          distance = tempDistance;
          closestChild = child;
        
        }
      
      }

      return closestChild;
    
    }

    return null;
  
  };

  Container2D.prototype.UseAsBatchParent = function ( _pc ) {

    this.isBatchParent = true;
    this.programController = _pc;
  
  };

  Nenkraft.Entity.Container2D = Container2D;
  Nenkraft.Container2D = Container2D;

};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Case2D ( _x, _y ) {

    if ( !( this instanceof Case2D ) ) return new Case2D( _x, _y );
    Super.call( this, _x, _y );
  
  }

  Case2D.prototype = Object.create( Super.prototype );
  Case2D.prototype.constructor = Case2D;

  /*
   *Static
   *Members
   *Methods
   */
  Case2D.prototype.Render = function () {

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.children.length > 0 ) {

        this.RenderChildren();
      
      }
    
    }
  
  };

  Case2D.prototype.RenderChildren = function () {

    for ( var i = 0, children = this.children, l = children.length, child; i < l; ++i ) {

      child = children[ i ];
      if ( child.Render ) child.Render();
    
    }
  
  };

  Nenkraft.Entity.Case2D = Case2D;
  Nenkraft.Case2D = Case2D;

};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Stage2D ( _canvas, _x, _y, _doNotStart, _useWebGL ) {

    if ( !( this instanceof Stage2D ) ) return new Stage2D( _canvas, _x, _y, _doNotStart, _useWebGL );
    Super.call( this, _x, _y );

    if ( typeof _canvas === 'string' ) {

      _canvas = document.getElementById( _canvas );
    
    }

    this.canvas = _canvas;
    this.w = _canvas.width;
    this.h = _canvas.height;

    if ( _useWebGL === true ) {

      this.gl = _canvas.getContext( 'webgl' );

      if ( this.gl == null ) {

        this.gl = _canvas.getContext( 'experimental-webgl' );
      
      }

      if ( this.gl == null ) {

        throw new Error( 'WebGL is not supported!' );
      
      }

      this.gl.clearColor(
        0.0392156862745098,
        0.0784313725490196,
        0.11764705882352941,
        0
      );
      this.usingWebGL = true;
      this.scale.Set( 2 / this.w, -2 / this.h );
      this.position.Add( -1, 1 );
      this.position.Add( _x * this.scale.x, _y * this.scale.y );
      this.UpdateTransform();
      this.ticker = new Nenkraft.Time.Ticker( this.GLProcess.bind( this ), 60, _doNotStart );
    
    } else {

      this.rc = _canvas.getContext( '2d' );
      this.ticker = new Nenkraft.Time.Ticker( this.Process.bind( this ), 60, _doNotStart );
    
    }

    this.onProcess = new Nenkraft.Event.LocalEvent();
    this.mouse = new Nenkraft.Input.Mouse( _canvas, _x, _y );
    this.keyboard = new Nenkraft.Input.Keyboard( _canvas );
  
  }

  Stage2D.prototype = Object.create( Super.prototype );
  Stage2D.prototype.constructor = Stage2D;
  // Static

  // Members
  Stage2D.prototype.backgroundColor = 'rgba(10,20,30,1)';
  Stage2D.prototype.clear = true;
  Stage2D.prototype.fill = true;
  Stage2D.prototype.usingWebGL = false;

  // Methods
  Stage2D.prototype.PreDraw = function ( _rc ) {

    _rc.setTransform( 1, 0, 0, 1, 0, 0 );
    _rc.globalAlpha = 1.0;
    _rc.globalCompositeOperation = 'source-over';

    if ( this.fill === true ) {

      _rc.fillStyle = this.backgroundColor;
      _rc.fillRect( 0, 0, this.w, this.h );
    
    }
    else if ( this.clear === true ) {

      _rc.clearRect( 0, 0, this.w, this.h );
    
    }
  
  };

  Stage2D.prototype.GLPreDraw = function ( _gl ) {

    _gl.viewport( 0, 0, this.w, this.h );
    _gl.clear( _gl.COLOR_BUFFER_BIT );
    _gl.enable( _gl.BLEND );
    _gl.disable( _gl.DEPTH_TEST );
    _gl.blendFunc( _gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA );
  
  };

  Stage2D.prototype.GLPostDraw = function ( _gl ) {

    _gl.flush();
  
  };

  Stage2D.prototype.Process = function ( _delta ) {

    this.Draw( this.rc );
    this.onProcess.Dispatch( this, _delta );
  
  };

  Stage2D.prototype.GLProcess = function ( _delta ) {

    this.GLDraw( this.gl );
    this.GLPostDraw( this.gl );
    this.onProcess.Dispatch( this, _delta );
  
  };

  Nenkraft.Entity.Stage2D = Stage2D;
  Nenkraft.Stage2D = Stage2D;

};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Graphic2D ( _x, _y, _path ) {

    if ( !( this instanceof Graphic2D ) ) return new Graphic2D( _x, _y, _path );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D();
    this.SetPath( _path );
  
  }

  Graphic2D.prototype = Object.create( Super.prototype );
  Graphic2D.prototype.constructor = Graphic2D;
  // Static

  // Members
  Graphic2D.prototype.path = null;
  Graphic2D.prototype.anchor = null;
  Graphic2D.prototype.alpha = 1.0;
  Graphic2D.prototype.gco = Nenkraft.Style.GCO.DEFAULT;
  Graphic2D.prototype.interactive = true;

  // Methods
  Graphic2D.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );
      var path = this.path;

      if ( path && path.Draw && this.display === true ) {

        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        path.Draw( _rc );
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Graphic2D.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      var path = this.path;

      if ( path && path.GLDraw && this.display === true ) {

        path.GLDraw( _gl, this.transform );
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren( _gl );
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  Graphic2D.prototype.GetBufferData = function () {

    this.UpdateTransform();
    var transformData = this.transform.worldTransform.AsArray( true );

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData.length = 0;
    bufferData[ 0 ] = transformData[ 0 ];
    bufferData[ 1 ] = transformData[ 1 ];
    bufferData[ 2 ] = transformData[ 2 ];
    bufferData[ 3 ] = transformData[ 3 ];
    bufferData[ 4 ] = transformData[ 4 ];
    bufferData[ 5 ] = transformData[ 5 ];
    bufferData[ 6 ] = transformData[ 6 ];
    bufferData[ 7 ] = transformData[ 7 ];
    bufferData[ 8 ] = transformData[ 8 ];

    if ( this.path && this.path.GetBufferData ) {

      bufferData.push.apply( bufferData, this.path.GetBufferData() );
    
    }

    return bufferData;
  
  };

  Graphic2D.prototype.UpdateInBuffer = function () {

    this.UpdateTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var buffer = this.parent.childDataBuffer;
    var index = this.bufferStartIndex;
    buffer[ index ] = transformData[ 0 ];
    buffer[ index + 1 ] = transformData[ 1 ];
    buffer[ index + 2 ] = transformData[ 2 ];
    buffer[ index + 3 ] = transformData[ 3 ];
    buffer[ index + 4 ] = transformData[ 4 ];
    buffer[ index + 5 ] = transformData[ 5 ];
    buffer[ index + 6 ] = transformData[ 6 ];
    buffer[ index + 7 ] = transformData[ 7 ];
    buffer[ index + 8 ] = transformData[ 8 ];

    if ( this.path && this.path.UpdateInBuffer ) {

      this.path.UpdateInBuffer( buffer, index + 9 );
    
    }
  
  };

  Graphic2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    return this.path.IntersectsPoint( cv );
  
  };

  Graphic2D.prototype.SetPath = function ( _path ) {

    if ( _path !== undefined ) {

      if ( _path.w !== undefined && _path.h !== undefined ) {

        this.w = _path.w;
        this.h = _path.h;
      
      }
      else if ( _path.GetLength !== undefined ) this.w = this.h = _path.GetLength();
      else if ( _path.diameter !== undefined ) this.w = this.h = _path.diameter;
      else if ( _path.aabb !== undefined ) {

        this.w = _path.aabb.w;
        this.h = _path.aabb.h;
      
      }

      this.path = _path;
    
    }
  
  };

  Nenkraft.Entity.Graphic2D = Graphic2D;
  Nenkraft.Graphic2D = Graphic2D;

};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Plain2D ( _x, _y ) {

    if ( !( this instanceof Plain2D ) ) return new Plain2D( _x, _y );
    this.transform = new Nenkraft.Math.Basetransform2D( _x, _y );
    this.data = Object.create( null );
  
  }

  Plain2D.prototype = Object.create( null );
  Plain2D.prototype.constructor = Plain2D;
  // Static
  Plain2D.NULL_TRANSFORM = new Nenkraft.Math.Basetransform2D();
  // Members
  Plain2D.prototype.parent = null;
  Plain2D.prototype.w = 0;
  Plain2D.prototype.h = 0;
  Plain2D.prototype.bounds = null;
  Plain2D.prototype.boundsDirty = true;
  Plain2D.prototype.render = true;
  Plain2D.prototype.display = true;
  Plain2D.prototype.transformShouldUpdate = true;
  Plain2D.prototype.transformAutomaticUpdate = true;

  // Methods
  Plain2D.prototype.UpdateTransform = function () {

    if ( this.parent ) {

      this.transform.UpdateWorld( this.parent.transform.worldTransform );
    
    } else {

      this.transform.UpdateWorld( Plain2D.NULL_TRANSFORM.worldTransform );
    
    }
  
  };

  Plain2D.prototype.GetWorldPosition = function () {

    return this.transform.worldTransform.Copy();
  
  };

  Plain2D.prototype.ComputeBounds = function ( _anchor ) {

    var ax = ( _anchor && _anchor.x ) ? _anchor.x : 0;
    var ay = ( _anchor && _anchor.y ) ? _anchor.y : 0;

    if ( this.bounds === null ) {

      this.bounds = new Nenkraft.Geom.AABB2D(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
      this.bounds.belongsTo = this;
    
    } else {

      this.bounds.Set(
        this.x - this.width * ax,
        this.y - this.height * ay,
        this.x + this.width,
        this.y + this.height
      );
    
    }

    this.boundsDirty = false;
    return this.bounds;
  
  };

  Plain2D.prototype.Destroy = function () {

    if ( this.parent !== null ) this.parent.RemoveChild( this );
  
  };

  Plain2D.prototype.AttachTo = function ( _parent ) {

    _parent.AddChild( this );
  
  };

  Plain2D.prototype.Detach = function () {

    if ( this.parent !== null ) return this.parent.RemoveChild( this );
    return null;
  
  };

  Plain2D.prototype.SendToFront = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.push( pChildren.splice( ix, 1 )[ 0 ] );
      
      }
    
    }
  
  };

  Plain2D.prototype.SendToBack = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.splice( 0, 0, pChildren.splice( ix, 1 )[ 0 ] );
      
      }
    
    }
  
  };

  Object.defineProperty( Plain2D.prototype, 'scale', {
    get: function () {

      return this.transform.scale;
    
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'position', {
    get: function () {

      return this.transform.position;
    
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'x', {
    get: function () {

      return this.transform.position.x;
    
    },
    set: function ( _value ) {

      this.transform.position.x = _value;
    
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'y', {
    get: function () {

      return this.transform.position.y;
    
    },
    set: function ( _value ) {

      this.transform.position.y = _value;
    
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'width', {
    get: function () {

      return this.w;
    
    },
    set: function ( _value ) {

      this.w = _value;
    
    }
  } );
  Object.defineProperty( Plain2D.prototype, 'height', {
    get: function () {

      return this.h;
    
    },
    set: function ( _value ) {

      this.h = _value;
    
    }
  } );
  Nenkraft.Entity.Plain2D = Plain2D;
  Nenkraft.Plain2D = Plain2D;

};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Plain2D;

  function Plaingraphic2D ( _x, _y, _path ) {

    if ( !( this instanceof Plaingraphic2D ) ) return new Plaingraphic2D( _x, _y, _path );
    Super.call( this, _x, _y );

    if ( _path !== undefined ) {

      if ( _path.w !== undefined && _path.h !== undefined ) {

        this.w = _path.w;
        this.h = _path.h;
      
      }
      else if ( _path.GetLength !== undefined ) this.w = this.h = _path.GetLength();
      else if ( _path.diameter !== undefined ) this.w = this.h = _path.diameter;
      else if ( _path.aabb !== undefined ) {

        this.w = _path.aabb.w;
        this.h = _path.aabb.h;
      
      }

      this.path = _path;
    
    }
  
  }

  Plaingraphic2D.prototype = Object.create( Super.prototype );
  Plaingraphic2D.prototype.constructor = Plaingraphic2D;
  // Static

  // Members
  Plaingraphic2D.prototype.path = null;
  Plaingraphic2D.prototype.interactive = true;

  // Methods
  Plaingraphic2D.prototype.Draw = function ( _rc ) {

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );
      var path = this.path;

      if ( path && path.Draw && this.display === true ) {

        path.Draw( _rc );
      
      }
    
    }
  
  };

  Plaingraphic2D.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.DivideV( this.scale );
    return this.path.IntersectsPoint( cv );
  
  };

  Nenkraft.Entity.Plaingraphic2D = Plaingraphic2D;
  Nenkraft.Plaingraphic2D = Plaingraphic2D;

};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Plain2D;

  function Plainsprite ( _x, _y, _texture ) {

    if ( !( this instanceof Plainsprite ) ) return new Plainsprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D( 0, 0 );
    this.clip = new Nenkraft.Geom.AABB2D();
    this.shape = new Nenkraft.Geom.AABB2D();
    if ( _texture == null ) _texture = Plainsprite.DEFAULT_TEXTURE;
    this.SetTexture( _texture );
  
  }

  Plainsprite.prototype = Object.create( Super.prototype );
  Plainsprite.prototype.constructor = Plainsprite;
  // Static
  Plainsprite.DEFAULT_TEXTURE = new Nenkraft.Texture.BasicTexture(
    Nenkraft.Utils.ImageFromDataURL(
      Nenkraft.Utils.GenerateSimpleBase64Png( function () {

        // Oooh what fun.
        var path = new Nenkraft.Path.Polygon2D();
        path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
        path.ComputeBounds();
        path.style.fill.color = 'rgba(66,66,66,0.5)';
        path.style.stroke.color = '#3399FF';
        path.style.stroke.lineWidth = 3;
        return new Nenkraft.Graphic2D( 0, 0, path );
      
      } )
    ), 'DEFAULT_PLAINSPRITE_TEXTURE', 64, 64, 64, 64
  );
  // Members
  Plainsprite.prototype.shape = null;
  Plainsprite.prototype.clip = null;
  Plainsprite.prototype.texture = null;
  Plainsprite.prototype.anchor = null;
  Plainsprite.prototype.interactive = true;

  // Methods
  Plainsprite.prototype.Draw = function ( _rc ) {

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true ) {

        var clip = this.clip, tl = clip.tl, br = clip.br, w = this.w, h = this.h, anchor = this.anchor;
        _rc.drawImage(
          this.texture.image,
          tl.x, tl.y, br.x, br.y, -w * anchor.x, -h * anchor.y, w, h
        );
      
      }
    
    }
  
  };

  Plainsprite.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.Add( this.w * this.anchor.x, this.h * this.anchor.y );
    return this.shape.IntersectsPoint( cv );
  
  };

  Plainsprite.prototype.SetTexture = function ( _texture ) {

    this.texture = _texture;
    this.w = _texture.w;
    this.h = _texture.h;
    this.clip.Set( 0, 0, this.w, this.h );
    this.shape.SetC( this.clip );
  
  };

  Nenkraft.Entity.Plainsprite = Plainsprite;
  Nenkraft.Plainsprite = Plainsprite;

};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Text ( _x, _y, _text ) {

    if ( !( this instanceof Text ) ) return new Text( _x, _y );
    Super.call( this, _x, _y );
    if ( _text !== undefined ) this.text = _text;
    this.style = Nenkraft.Style.CreateSaT();
  
  }

  Text.prototype = Object.create( Super.prototype );
  Text.prototype.constructor = Text;
  // Static

  // Members
  Text.prototype.text = '';
  Text.prototype.maxWidth = undefined;
  Text.prototype.alpha = 1.0;
  Text.prototype.gco = Nenkraft.Style.GCO.DEFAULT;

  // Methods
  Text.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true ) {

        var style = this.style;

        if ( style.shadow.applied === true ) {

          style.shadow.Apply( _rc );
        
        }

        if ( style.text.applied === true ) {

          style.text.Apply( _rc );
          _rc.globalAlpha = this.alpha;
          _rc.globalCompositeOperation = this.gco;
          _rc.fillText( this.text, 0, 0, this.maxWidth );
          _rc.strokeText( this.text, 0, 0, this.maxWidth );
        
        }
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Text.prototype.IntersectsPoint = function () {

    return false;
  
  };

  Nenkraft.Entity.Text = Text;
  Nenkraft.Text = Text;

};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Container2D;

  function Sprite ( _x, _y, _texture ) {

    if ( !( this instanceof Sprite ) ) return new Sprite( _x, _y, _texture );
    Super.call( this, _x, _y );
    this.anchor = new Nenkraft.Vector2D( 0, 0 );
    this.clip = new Nenkraft.Geom.AABB2D();
    this.shape = new Nenkraft.Geom.AABB2D();
    this.textureTransformation = new Nenkraft.Math.Matrix2D();
    this.textureTranslation = new Nenkraft.Math.Matrix2D();
    this.originalShape = new Nenkraft.Geom.AABB2D();

    if ( _texture instanceof Nenkraft.GLTextureProgramController ) {

      this.programController = _texture;
      this.SetTexture( _texture.originalTexture );
    
    }
    else if ( _texture == null ) {

      this.SetTexture( Sprite.DEFAULT_TEXTURE );
    
    } else {

      this.SetTexture( _texture );
    
    }
  
  }

  Sprite.prototype = Object.create( Super.prototype );
  Sprite.prototype.constructor = Sprite;
  // Static
  Sprite.DEFAULT_TEXTURE = new Nenkraft.Texture.BasicTexture(
    Nenkraft.Utils.ImageFromDataURL(
      Nenkraft.Utils.GenerateSimpleBase64Png( function () {

        // Oooh what fun.
        var path = new Nenkraft.Path.Polygon2D();
        path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 0 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 64, 64 ) );
        path.AddPoint( new Nenkraft.Vector2D( 32, 32 ) );
        path.AddPoint( new Nenkraft.Vector2D( 0, 64 ) );
        path.ComputeBounds();
        path.style.fill.color = 'rgba(66,66,66,0.5)';
        path.style.stroke.color = '#00FFFF';
        path.style.stroke.lineWidth = 3;
        return new Nenkraft.Graphic2D( 0, 0, path );
      
      } )
    ), 'DEFAULT_SPRITE_TEXTURE', 64, 64, 64, 64
  );
  // Members
  Sprite.prototype.shape = null;
  Sprite.prototype.originalShape = null;
  Sprite.prototype.clip = null;
  Sprite.prototype.texture = null;
  Sprite.prototype.anchor = null;
  Sprite.prototype.alpha = 1.0;
  Sprite.prototype.gco = Nenkraft.Style.GCO.DEFAULT;
  Sprite.prototype.interactive = true;
  Sprite.prototype.programController = null;
  Sprite.prototype.textureTransformation = null;
  Sprite.prototype.textureTranslation = null;
  Sprite.prototype.animationController = null;

  // Methods
  Sprite.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true ) {

        var clip = this.clip, tl = clip.tl, br = clip.br, w = this.w, h = this.h, anchor = this.anchor;
        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        _rc.drawImage(
          this.texture.image,
          tl.x, tl.y, br.x, br.y, -w * anchor.x, -h * anchor.y, w, h
        );
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  Sprite.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.display === true && this.programController !== null ) {

        this.programController.Execute(
          this.transform.worldTransform.AsArray( true ),
          this.textureTranslation.AsArray( true ),
          this.textureTransformation.AsArray( true )
        );
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren( _gl );
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  Sprite.prototype.GetBufferData = function () {

    this.UpdateTransform();
    this.UpdateTextureTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var textureTranslationData = this.textureTranslation.AsArray( true );
    var textureTransformationData = this.textureTransformation.AsArray( true );

    if ( this.bufferData == null ) {

      this.bufferData = [];
    
    }

    var bufferData = this.bufferData;
    bufferData.length = 0;
    bufferData[ 0 ] = transformData[ 0 ];
    bufferData[ 1 ] = transformData[ 1 ];
    bufferData[ 2 ] = transformData[ 2 ];
    bufferData[ 3 ] = transformData[ 3 ];
    bufferData[ 4 ] = transformData[ 4 ];
    bufferData[ 5 ] = transformData[ 5 ];
    bufferData[ 6 ] = transformData[ 6 ];
    bufferData[ 7 ] = transformData[ 7 ];
    bufferData[ 8 ] = transformData[ 8 ];
    bufferData[ 9 ] = textureTranslationData[ 0 ];
    bufferData[ 10 ] = textureTranslationData[ 1 ];
    bufferData[ 11 ] = textureTranslationData[ 2 ];
    bufferData[ 12 ] = textureTranslationData[ 3 ];
    bufferData[ 13 ] = textureTranslationData[ 4 ];
    bufferData[ 14 ] = textureTranslationData[ 5 ];
    bufferData[ 15 ] = textureTranslationData[ 6 ];
    bufferData[ 16 ] = textureTranslationData[ 7 ];
    bufferData[ 17 ] = textureTranslationData[ 8 ];
    bufferData[ 18 ] = textureTransformationData[ 0 ];
    bufferData[ 19 ] = textureTransformationData[ 1 ];
    bufferData[ 20 ] = textureTransformationData[ 2 ];
    bufferData[ 21 ] = textureTransformationData[ 3 ];
    bufferData[ 22 ] = textureTransformationData[ 4 ];
    bufferData[ 23 ] = textureTransformationData[ 5 ];
    bufferData[ 24 ] = textureTransformationData[ 6 ];
    bufferData[ 25 ] = textureTransformationData[ 7 ];
    bufferData[ 26 ] = textureTransformationData[ 8 ];
    return bufferData;
  
  };

  Sprite.prototype.UpdateInBuffer = function () {

    this.UpdateTransform();
    this.UpdateTextureTransform();
    var transformData = this.transform.worldTransform.AsArray( true );
    var textureTranslationData = this.textureTranslation.AsArray( true );
    var textureTransformationData = this.textureTransformation.AsArray( true );
    var buffer = this.parent.childDataBuffer;
    var index = this.bufferStartIndex;
    buffer[ index ] = transformData[ 0 ];
    buffer[ index + 1 ] = transformData[ 1 ];
    buffer[ index + 2 ] = transformData[ 2 ];
    buffer[ index + 3 ] = transformData[ 3 ];
    buffer[ index + 4 ] = transformData[ 4 ];
    buffer[ index + 5 ] = transformData[ 5 ];
    buffer[ index + 6 ] = transformData[ 6 ];
    buffer[ index + 7 ] = transformData[ 7 ];
    buffer[ index + 8 ] = transformData[ 8 ];
    buffer[ index + 9 ] = textureTranslationData[ 0 ];
    buffer[ index + 10 ] = textureTranslationData[ 1 ];
    buffer[ index + 11 ] = textureTranslationData[ 2 ];
    buffer[ index + 12 ] = textureTranslationData[ 3 ];
    buffer[ index + 13 ] = textureTranslationData[ 4 ];
    buffer[ index + 14 ] = textureTranslationData[ 5 ];
    buffer[ index + 15 ] = textureTranslationData[ 6 ];
    buffer[ index + 16 ] = textureTranslationData[ 7 ];
    buffer[ index + 17 ] = textureTranslationData[ 8 ];
    buffer[ index + 18 ] = textureTransformationData[ 0 ];
    buffer[ index + 19 ] = textureTransformationData[ 1 ];
    buffer[ index + 20 ] = textureTransformationData[ 2 ];
    buffer[ index + 21 ] = textureTransformationData[ 3 ];
    buffer[ index + 22 ] = textureTransformationData[ 4 ];
    buffer[ index + 23 ] = textureTransformationData[ 5 ];
    buffer[ index + 24 ] = textureTransformationData[ 6 ];
    buffer[ index + 25 ] = textureTransformationData[ 7 ];
    buffer[ index + 26 ] = textureTransformationData[ 8 ];
  
  };

  Sprite.prototype.UpdateTextureTransform = function () {

    var tscaleX = this.w / this.texture.fw;
    var tscaleY = this.h / this.texture.fh;

    this.textureTranslation.TranslateTo(
      -this.w * this.anchor.x,
      -this.h * this.anchor.y
    );
    this.textureTransformation.TranslateTo(
      tscaleX * this.clip.tl.x / this.w,
      tscaleY * this.clip.tl.y / this.h
    );
  
  };

  Sprite.prototype.IntersectsPoint = function ( _v ) {

    if ( this.interactive === false ) return false;
    var cv = _v.SubtractVC( this.position );
    cv.Add( this.w * this.anchor.x * this.scale.x, this.h * this.anchor.y * this.scale.y );
    return this.shape.IntersectsPoint( cv );
  
  };

  Sprite.prototype.UpdateShape = function ( _newShape ) {

    if ( _newShape != null ) {

      this.originalShape = _newShape;
    
    }

    this.shape.SetC( this.originalShape );
    this.shape.Scale( this.scale.x, this.scale.y );
  
  };

  Sprite.prototype.SetTexture = function ( _texture ) {

    this.texture = _texture;
    this.ClipReconfigure( 0, 0, _texture.w, _texture.h );
    this.shape.SetC( this.clip );
    this.originalShape.SetC( this.clip );
  
  };

  Sprite.prototype.ClipReconfigure = function( _x, _y, _w, _h ) {

    var tscaleX = _w / this.texture.fw;
    var tscaleY = _h / this.texture.fh;

    this.clip.Set( _x, _y, _w, _h );
    this.w = _w;
    this.h = _h;
    this.textureTranslation.SetTransform( 
      -_w * this.anchor.x,
      -_h * this.anchor.y,
      tscaleX, tscaleY 
    );
    this.textureTransformation.SetTransform( 
      tscaleX * this.clip.tl.x / _w,
      tscaleY * this.clip.tl.y / _h,
      tscaleX, tscaleY
    );
  
  };

  Sprite.prototype.CreateAnimation = function( _data ) {

    if ( this.animationController === null ) {

      this.animationController = new Nenkraft.Animator.Controller( this );
    
    }

    var animation = this.animationController.CreateAnimation( _data.id, _data.rate );

    if ( _data.spritesheet != null ) {

      for ( var i = 0; i < _data.frames.length; ++i ) {

        animation.AddFrame( _data.spritesheet.GetFrameById( _data.frames[i] ) );
      
      }
    
    }

    return animation;
    
  };

  Nenkraft.Entity.Sprite = Sprite;
  Nenkraft.Sprite = Sprite;

};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.CoreEntity2D;

  function Char ( _data ) {

    if ( !( this instanceof Char ) ) return new Char( _data );
    Super.call( this );

    if ( _data ) {

      this.id = parseInt( _data.id );
      this.cx = parseInt( _data.x );
      this.cy = parseInt( _data.y );
      this.w = parseInt( _data.width );
      this.h = parseInt( _data.height );
      this.xoffset = parseInt( _data.xoffset );
      this.yoffset = parseInt( _data.yoffset );
      this.xadvance = parseInt( _data.xadvance );
      this.kernings = [];
      this.translation = new Nenkraft.Matrix2D();
      this.transformation = new Nenkraft.Matrix2D();
    
    }
  
  }

  Char.prototype = Object.create( Super.prototype );
  Char.prototype.constructor = Char;
  /*
   *Static
   *Members
   */
  Char.prototype.id = 0;
  Char.prototype.xoffset = 0;
  Char.prototype.yoffset = 0;
  Char.prototype.xadvance = 0;
  Char.prototype.yadvance = 0;
  Char.prototype.kernings = null;
  //
  Char.prototype.translation = null;
  Char.prototype.transformation = null;

  // Methods
  Char.prototype.ApplyKernings = function ( _kernings ) {

    for ( var i = 0, attributes, l = _kernings.length; i < l; ++i ) {

      attributes = _kernings[ i ].attributes;

      if ( parseInt( attributes.first ) === this.id ) {

        this.kernings.push(
          parseInt( attributes.first ),
          parseInt( attributes.second ),
          parseInt( attributes.amount )
        );
      
      }
    
    }
  
  };

  Char.prototype.Crunch = function ( _prevChar ) {

    this.position.Set( 0 );

    if ( _prevChar != null ) {

      this.x = _prevChar.x + _prevChar.xadvance;
      this.y = this.yadvance = _prevChar.yadvance;

      if ( _prevChar.kernings.length > 0 && this.kernings.length > 0 ) {

        for ( var i = 0, kernings = this.kernings, l = kernings.length; i < l; i += 3 ) {

          if ( kernings[ i + 1 ] === _prevChar.id ) {

            this.x += kernings[ i + 2 ];
            break;
          
          }
        
        }
      
      }
    
    }

    this.position.Add( this.xoffset, this.yoffset );
  
  };

  Char.prototype.UpdateMatrices = function () {

    if ( this.parent != null ) {

      var texture = this.parent.texture;
      var tscaleX = this.width / texture.fw;
      var tscaleY = this.height / texture.fh;
      this.UpdateTransform();
      this.translation.SetTransform( 0, 0, tscaleX, tscaleY );
      this.transformation.SetTransform( 
        tscaleX * this.cx / this.width, 
        tscaleY * this.cy / this.height, 
        tscaleX, tscaleY
      );
    
    }
  
  };

  Nenkraft.Entity.Char = Char;

};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Entity.Sprite;
  var Char = Nenkraft.Entity.Char;

  function BitmapText ( _x, _y, _texture, _data, _text ) {

    if ( !( this instanceof BitmapText ) ) return new BitmapText( _x, _y, _texture, _data, _text );
    Super.call( this, _x, _y, _texture );
    this.fontData = _data;
    this.lineHeight = _data.font.common.attributes.lineHeight;

    if ( _text != null ) {

      this.text = _text;
    
    }

    this.chars = [];
    this.ComputeText();
  
  }

  BitmapText.prototype = Object.create( Super.prototype );
  BitmapText.prototype.constructor = BitmapText;
  // Static

  // Members
  BitmapText.prototype.maxWidth = 1024;
  BitmapText.prototype.fontData = null;
  BitmapText.prototype.text = '';
  BitmapText.prototype.chars = null;
  BitmapText.prototype.lineHeight = 0;

  // Methods
  BitmapText.prototype.Draw = function ( _rc ) {

    this.PreDraw( _rc );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      this.transform.ApplyWorld( _rc );

      if ( this.display === true ) {

        _rc.globalAlpha = this.alpha;
        _rc.globalCompositeOperation = this.gco;
        this.DrawText( _rc );
      
      }

      if ( this.children.length > 0 ) {

        this.DrawChildren( _rc );
      
      }
    
    }
  
  };

  BitmapText.prototype.GLDraw = function ( _gl ) {

    this.GLPreDraw( _gl );

    if ( this.render === true ) {

      if ( this.transformShouldUpdate === true ) {

        this.UpdateTransform();
        if ( this.transformAutomaticUpdate === false ) this.transformShouldUpdate = false;
      
      }

      if ( this.display === true && this.programController !== null ) {

        this.GLDrawText( _gl );
      
      }

      if ( this.children.length > 0 && this.display === true ) {

        if ( this.isBatchParent === true ) {

          this.GLBatchDrawChildren( _gl );
        
        } else {

          this.GLDrawChildren( _gl );
        
        }
      
      }
    
    }
  
  };

  BitmapText.prototype.DrawText = function ( _rc ) {

    for ( var i = 0, chars = this.chars, char, l = chars.length; i < l; ++i ) {

      char = chars[ i ];
      _rc.drawImage(
        this.texture.image,
        char.cx, char.cy,
        char.width, char.height,
        char.position.x, char.position.y,
        char.width, char.height
      );
    
    }
  
  };

  BitmapText.prototype.GLDrawText = function () {

    for ( var i = 0, chars = this.chars, char, l = chars.length; i < l; ++i ) {

      char = chars[ i ];
      this.programController.Execute(
        char.transform.worldTransform.AsArray( true ),
        char.translation.AsArray( true ),
        char.transformation.AsArray( true )
      );
    
    }
  
  };

  BitmapText.prototype.GetBufferData = function () {

  };

  BitmapText.prototype.UpdateInBuffer = function () {

  };

  BitmapText.prototype.ComputeText = function () {

    this.UpdateTransform();
    this.chars.length = 0;
    var kernings = this.fontData.font.kernings.kerning;
    var lineNum = 0;

    for ( var i = 0, char, chars = this.chars, prevChar, text = this.text, l = text.length; i < l; ++i ) {

      prevChar = chars[ i - 1 ];
      char = new Char( this.GetCharData( text.charCodeAt( i ) ) );
      char.ApplyKernings( kernings );
      char.Crunch( prevChar );

      if ( ( char.position.x + char.width ) > this.maxWidth ) {

        char.position.Set( 0 );
        char.yadvance = this.lineHeight * ++lineNum;
        char.position.Add( char.xoffset, char.yoffset + char.yadvance );
      
      }

      char.parent = this;
      char.UpdateMatrices();
      chars.push( char );
    
    }
  
  };

  BitmapText.prototype.GetCharData = function ( _id ) {

    for ( var i = 0, chars = this.fontData.font.chars.char, l = chars.length; i < l; ++i ) {

      if ( parseInt( chars[ i ].attributes.id ) === _id ) {

        return chars[ i ].attributes;
      
      }
    
    }
  
  };

  Nenkraft.Entity.BitmapText = BitmapText;
  Nenkraft.BitmapText = BitmapText;

};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Frame ( _x, _y, _w, _h, _rate, _id ) {

    if ( !( this instanceof Frame ) ) return new Frame( _x, _y, _w, _h, _rate, _id );
    this.rate = _rate;
    this.timer = _rate;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;

    if ( _id != null ) {

      this.id = _id;
    
    }
  
  }

  Frame.prototype = Object.create( null );
  Frame.prototype.constructor = Frame;
  // Static

  // Members
  Frame.prototype.id = null;
  Frame.prototype.x = 0;
  Frame.prototype.y = 0;
  Frame.prototype.w = 0;
  Frame.prototype.h = 0;
  Frame.prototype.rate = 0;
  Frame.prototype.timer = 0;
  Frame.prototype.nextFrameIndex = null;

  // Methods
  Frame.prototype.Process = function () {

    if ( this.timer-- <= 0 ) {

      this.Reset();
      return true;
    
    }

    return false;
  
  };

  Frame.prototype.Apply = function ( _sprite ) {

    _sprite.ClipReconfigure( this.x, this.y, this.w, this.h );
  
  };

  Frame.prototype.Reset = function () {

    this.timer = this.rate;
  
  };

  Nenkraft.Animator.Frame = Frame;

};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Animation ( _controller, _id, _rate ) {

    if ( !( this instanceof Animation ) ) return new Animation( _controller, _id, _rate );
    this.frames = [];
    this.controller = _controller;
    this.sprite = _controller.sprite;
    this.id = _id;
    this.onEnd = new Nenkraft.Event.LocalEvent();
    this.onStop = new Nenkraft.Event.LocalEvent();
    this.onStart = new Nenkraft.Event.LocalEvent();
    if ( _rate != null ) this.rate = _rate;
  
  }

  Animation.prototype = Object.create( null );
  Animation.prototype.constructor = Animation;
  // Static

  // Members
  Animation.prototype.currentFrame = 0;
  Animation.prototype.currentFrameIndex = 0;
  Animation.prototype.playing = false;
  Animation.prototype.id = null;
  Animation.prototype.rate = 60;
  Animation.prototype.timer = 0;
  Animation.prototype.reverse = false;
  Animation.prototype.sprite = null;
  Animation.prototype.overrideFrameRate = false;

  // Methods
  Animation.prototype.CreateFrame = function ( _x, _y, _w, _h, _rate ) {

    _rate = _rate == null ? this.rate : _rate;
    this.frames.push( new Nenkraft.Animator.Frame( _x, _y, _w, _h, _rate ) );
  
  };

  Animation.prototype.AddFrame = function( _frame ) {
    
    if ( _frame.rate == null || _frame.rate <= 0 ) {

      _frame.rate = this.rate;
    
    }

    this.frames.push( _frame );
  
  };

  Animation.prototype.GenerateFrames = function ( _frameWidth, _frameHeight, _imageWidth, _imageHeight, _amount, _data ) {

    _data = _data == null ? {} : _data;

    for ( var i = 0, rate, columns = _imageWidth / _imageHeight; i < _amount; ++i ) {

      rate = _data[ i ];
      this.CreateFrame( ( i % columns ) * _frameWidth, ( ( i / columns ) | 0 ) * _frameHeight, _frameWidth, _frameHeight, rate );
    
    }
  
  };

  Animation.prototype.SetFrame = function ( _index ) {

    _index = _index == null ? 0 : _index;
    var frame = this.frames[ _index ];

    if ( frame !== undefined ) {

      this.currentFrame = frame;
      this.currentFrameIndex = _index;
      this.currentFrame.Apply( this.sprite );
    
    }
  
  };

  Animation.prototype.SetFrameById = function( _id ) {

    var index = this.GetFrameById( _id, true );
    this.SetFrame( index );
  
  };

  Animation.prototype.GetFrameById = function( _id, _returnIndex ) {

    for ( var i = 0, frames = this.frames; i < frames.length; ++i ) {

      if ( frames[i].id === _id ) {

        if ( _returnIndex === true ) return i;
        return frames[i];
      
      }
    
    }
  
  };

  Animation.prototype.Start = function () {

    this.playing = true;
    this.onStart.Dispatch();
  
  };

  Animation.prototype.Stop = function () {

    this.playing = false;
    this.onStop.Dispatch();
  
  };

  Animation.prototype.Process = function () {

    if ( this.playing === true ) {

      if ( this.overrideFrameRate === true ) {

        if ( --this.timer <= 0 ) {

          this.timer = this.rate;
          this.NextFrame();
        
        }
      
      } else if ( this.currentFrame.Process() === true ) {

        this.NextFrame();
      
      }
    
    }
  
  };

  Animation.prototype.NextFrame = function() {

    var frames = this.frames, fsl = frames.length, done = false;
    if ( this.reverse === false ) ++this.currentFrameIndex;
    else --this.currentFrameIndex;

    if ( this.currentFrameIndex >= fsl ) {

      this.currentFrameIndex = 0;
      done = true;
        
    } else if ( this.currentFrameIndex < 0 ) {

      this.currentFrameIndex = fsl - 1;
      done = true;
    
    }

    this.currentFrame = frames[ this.currentFrameIndex ];
    this.currentFrame.Apply( this.sprite );
    if ( done === true ) this.onEnd.Dispatch();
  
  };

  Animation.prototype.Clear = function () {

    this.frames = [];
    this.currentFrame = null;
    this.playing = false;
    this.currentFrameIndex = 0;
    this.timer = this.rate;
  
  };

  Animation.prototype.Restart = function ( _index ) {

    this.SetFrame( _index );
    this.ResetAllFrames();
    this.Start();
    this.timer = this.rate;
  
  };

  Animation.prototype.Reset = function() {

    this.SetFrame( 0 );
    this.ResetAllFrames();
    this.timer = this.rate;
    this.playing = false;
  
  };

  Animation.prototype.ResetAllFrames = function () {

    for ( var i = 0, frames = this.frames, l = frames.length, frame; i < l; ++i ) {

      frame = frames[ i ];
      frame.Reset();
    
    }
  
  };

  Nenkraft.Animator.Animation = Animation;

};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Controller ( _sprite ) {

    if ( !( this instanceof Controller ) ) return new Controller( _sprite );
    this.animations = [];
    if ( _sprite != null ) this.sprite = _sprite;
  
  }

  Controller.prototype = Object.create( null );
  Controller.prototype.constructor = Controller;
  // Static

  // Members
  Controller.prototype.currentAnimation = null;
  Controller.prototype.sprite = null;

  // Methods
  Controller.prototype.CreateAnimation = function ( _id, _rate ) {

    var animation = new Nenkraft.Animator.Animation( this, _id, _rate );
    this.animations.push( animation );
    return animation;
  
  };

  Controller.prototype.AddAnimation = function( _animation ) {

    _animation.controller = this;
    this.animations.push( _animation );
  
  };

  Controller.prototype.GetAnimationById = function ( _id ) {

    for ( var i = 0, animations = this.animations, l = animations.length, animation; i < l; ++i ) {

      animation = animations[ i ];
      if ( animation && animation.id === _id ) return animation;
    
    }

    return null;
  
  };

  Controller.prototype.PlayAnimation = function ( _id, _frameIndex ) {

    var animation = this.GetAnimationById( _id );

    if ( animation !== null ) {

      this.currentAnimation = animation;
      animation.Restart( _frameIndex );
    
    }
  
  };

  Controller.prototype.StopCurrentAnimation = function () {

    if ( this.currentAnimation !== null ) {

      this.currentAnimation.Stop();
    
    }
  
  };

  Controller.prototype.Process = function () {

    var currentAnimation = this.currentAnimation;
    if ( currentAnimation !== null ) currentAnimation.Process();
  
  };

  Nenkraft.Animator.Controller = Controller;

};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Option ( _id, _handle, _info, _priority, _breakIfExecuted ) {

    if ( !( this instanceof Option ) ) return new Option( _id, _handle, _info, _priority, _breakIfExecuted );

    this.id = _id.split( ' ' );
    this.handle = _handle;
    this.info = _info;
    if ( _priority !== undefined ) this.priority = _priority;
    if ( _breakIfExecuted !== undefined ) this.breakIfExecuted = _breakIfExecuted;
    this.data = {};
  
  }

  Option.prototype = Object.create( null );
  Option.prototype.constructor = Option;
  // Static

  // Members
  Option.prototype.command = null;
  Option.prototype.priority = 0;
  Option.prototype.breakIfExecuted = false;

  // Methods
  Option.prototype.Execute = function ( _dataStrs, _data ) {

    this.handle( _dataStrs, _data );
    return this.breakIfExecuted;
  
  };

  Nenkraft.CP.Option = Option;

};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Command ( _id, _handle, _info, _continueToPrime, _optionPrefix ) {

    if ( !( this instanceof Command ) ) return new Command( _id, _handle, _info, _continueToPrime, _optionPrefix );

    this.id = _id.split( ' ' );
    this.handle = _handle;
    this.info = _info;
    this.data = {};
    this.optionPrefix = _optionPrefix === undefined ? Command.OPTION_PREFIX : _optionPrefix;
    if ( _continueToPrime !== undefined ) this.continueToPrime = _continueToPrime;
  
  }

  Command.prototype = Object.create( null );
  Command.prototype.constructor = Command;
  // Static
  Command.OPTION_PREFIX = '';
  // Members
  Command.prototype.dataSeparator = '=';
  Command.prototype.options = null;
  Command.prototype.allOptionIds = null;
  Command.prototype.fullInfo = null;
  Command.prototype.optionPrefix = null;
  Command.prototype.continueToPrime = true;

  // Methods
  Command.prototype.Execute = function ( _dataStrs, _data ) {

    this.HandleData( _dataStrs, _data );

    if ( this.HandleOptions( _dataStrs, _data ) === true ) {

      this.handle( _dataStrs, _data );
    
    }
  
  };

  Command.prototype.AddOption = function ( _id, _handle, _info, _priority, _breakIfExecuted, _optionPrefix ) {

    _optionPrefix = _optionPrefix === undefined ? this.optionPrefix : _optionPrefix;
    if ( _optionPrefix !== null ) _id = _id.replace( /\S+/g, _optionPrefix + '$&' );
    if ( this.options === null ) this.options = [];
    _priority = _priority === undefined ? 0 : _priority;
    var opt = new Nenkraft.CP.Option( _id, _handle, _info, _priority, _breakIfExecuted );
    opt.command = this;

    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {

      option = options[ i ];

      if ( option.priority <= _priority ) {

        options.splice( i, 0, opt );
        this.allOptionIds = this.GetAllOptionIds();
        return this;
      
      }
    
    }

    this.options.push( opt );
    this.allOptionIds = this.GetAllOptionIds();
    return this;
  
  };

  Command.prototype.HandleData = function ( _dataStrs, _data ) {

    var dsCopy = _dataStrs.slice();

    for ( var i = 0, l = dsCopy.length, str, data, ds = this.dataSeparator; i < l; ++i ) {

      str = dsCopy[ i ];
      data = str.split( ds );

      if ( data.length === 2 ) {

        _dataStrs.splice( i, 1 );
        _data[ data[ 0 ] ] = data[ 1 ];
      
      }
    
    }
  
  };

  Command.prototype.HandleOptions = function ( _dataStrs, _data ) {

    if ( _dataStrs.length === 0 ) {

      return this.continueToPrime;
    
    }

    var matchingOptionIds = this.GetAndRemoveMatchingOptionIds( _dataStrs );
    if ( matchingOptionIds === null ) return this.continueToPrime;

    for ( var i = 0, l = matchingOptionIds.length, option; i < l; ++i ) {

      option = this.GetOptionById( matchingOptionIds[ i ] );
      if ( option.Execute( _dataStrs, _data ) === true ) return false;
    
    }

    return this.continueToPrime;
  
  };

  Command.prototype.GetOptionById = function ( _id ) {

    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {

      option = options[ i ];
      if ( option.id.indexOf( _id ) !== -1 ) return option;
    
    }

    return null;
  
  };

  Command.prototype.GetAllOptionIds = function () {

    var allOptionIds = [];

    for ( var i = 0, options = this.options, l = options.length; i < l; ++i ) {

      allOptionIds.push.apply( allOptionIds, options[ i ].id );
    
    }

    return allOptionIds;
  
  };

  Command.prototype.GetAndRemoveMatchingOptionIds = function ( _dataStrs ) {

    var allOptionIds = this.allOptionIds;
    if ( allOptionIds === null ) return null;
    var optionIds = [];

    for ( var i = 0, l = allOptionIds.length; i < l; ++i ) {

      var ix = _dataStrs.indexOf( allOptionIds[ i ] );

      if ( ix !== -1 ) {

        optionIds.push( _dataStrs.splice( ix, 1 )[ 0 ] );
      
      }
    
    }

    return optionIds;
  
  };

  Command.prototype.GenerateInfoString = function () {

    var str = 'COMMAND: ' + this.id.join( ', ' ) + ' -> ' + this.info + '\n';

    for ( var i = 0, options = this.options, l = options.length, option; i < l; ++i ) {

      option = options[ i ];
      str += 'OPTION: ' + option.id.join( ', ' ) + ' -> ' + option.info + '\n';
    
    }

    return str;
  
  };

  Nenkraft.CP.Command = Command;

};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Register ( _options ) {

    if ( !( this instanceof Register ) ) return new Register( _options );

    this.commands = [];
  
  }

  Register.prototype = Object.create( null );
  Register.prototype.constructor = Register;
  // Static

  // Members
  Register.prototype.splitter = ' ';

  // Methods
  Register.prototype.Add = function ( _command ) {

    this.commands.push( _command );
  
  };

  Register.prototype.Get = function ( _id ) {

    for ( var i = 0, commands = this.commands, l = commands.length, command; i < l; ++i ) {

      command = this.commands[ i ];

      if ( command ) {

        for ( var j = 0, jl = command.id.length; j < jl; ++j ) {

          if ( command.id[ j ] === _id ) return command;
        
        }
      
      }
    
    }

    return null;
  
  };

  Register.prototype.Parse = function ( _str ) {

    var strs = String( _str ).split( this.splitter );
    var cmdStr = strs.shift();
    var command = this.Get( cmdStr );

    if ( command ) {

      command.Execute( strs, {} );
      return null;
    
    }

    return cmdStr;
  
  };

  Nenkraft.CP.Register = Register;

};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function ImageLoader ( _objects, _createTextures, _onComplete ) {

    if ( !( this instanceof ImageLoader ) ) return new ImageLoader( _objects, _createTextures, _onComplete );
    this.imageCache = new Nenkraft.Utils.Cache( Image );
    this.basicTextureCache = new Nenkraft.Utils.Cache( Nenkraft.Texture.BasicTexture );
    this.onImageLoaded = new Nenkraft.Event.LocalEvent();
    this.onComplete = new Nenkraft.Event.LocalEvent();

    if ( _onComplete != null ) {

      this.onComplete.Add( _onComplete, this );
    
    }

    if ( _objects != null ) this.Load( _objects, _createTextures );
  
  }

  ImageLoader.prototype = Object.create( null );
  ImageLoader.prototype.constructor = ImageLoader;
  // Static

  // Members
  ImageLoader.prototype.imageCache = null;
  ImageLoader.prototype.basicTextureCache = null;
  ImageLoader.prototype.onImageLoaded = null;
  ImageLoader.prototype.onComplete = null;
  ImageLoader.prototype.count = 0;
  ImageLoader.prototype.loading = false;
  ImageLoader.prototype.toLoad = null;
  ImageLoader.prototype.createTextures = false;

  // Methods
  ImageLoader.prototype.Load = function ( _objects, _createTextures ) {

    if ( this.toLoad === null ) this.toLoad = [];
    
    this.toLoad.push.apply( this.toLoad, _objects );

    if ( _createTextures != null ) {

      this.createTextures = _createTextures;
    
    }

    if ( this.loading === false ) {

      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    
    }
  
  };

  ImageLoader.prototype.Haul = function ( _count ) {

    var item = this.toLoad[ _count ];

    if ( item != null ) {

      var image = new Image();
      image.onload = this.OnLoad.bind( this );
      image.onerror = this.OnError.bind( this );
      image.src = item.src;
      image.id = item.id;
      image.data = Object.create( null );
      image.data.w = item.w;
      image.data.h = item.h;
      image.data.fw = item.fw;
      image.data.fh = item.fh;
    
    } else {

      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { imageCache: this.imageCache, basicTextureCache: this.basicTextureCache } );
    
    }
  
  };

  ImageLoader.prototype.OnLoad = function ( _event ) {

    var t = _event.currentTarget;
    delete t.onload;
    delete t.onerror;
    this.imageCache.StoreSafe( t );

    if ( this.createTextures === true ) {

      this.basicTextureCache.StoreSafe( new Nenkraft.Texture.BasicTexture( t, null, t.data.w, t.data.h, t.data.fw, t.data.fh ) );
    
    }

    this.onImageLoaded.Dispatch( t, { count: this.count } );
    this.Haul( ++this.count );
  
  };

  ImageLoader.prototype.OnError = function () {

    throw new Error( 'Request failed' );
  
  };

  ImageLoader.prototype.GetImage = function ( _id ) {

    return this.imageCache.GetById( _id );
  
  };

  ImageLoader.prototype.GetBasicTexture = function ( _id ) {

    return this.basicTextureCache.GetById( _id );
  
  };

  Nenkraft.Load.ImageLoader = ImageLoader;
  Nenkraft.ImageLoader = ImageLoader;

};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function XHRLoader ( _objects, _onComplete ) {

    if ( !( this instanceof XHRLoader ) ) return new XHRLoader( _objects, _onComplete );
    this.XHRcache = new Nenkraft.Utils.Cache( XMLHttpRequest );
    this.dataCache = new Nenkraft.Utils.Cache();
    this.onXHRLoaded = new Nenkraft.Event.LocalEvent();
    this.onComplete = new Nenkraft.Event.LocalEvent();

    if ( _onComplete != null ) {

      this.onComplete.Add( _onComplete, this );
    
    }

    if ( _objects != null ) this.Load( _objects );
  
  }

  XHRLoader.prototype = Object.create( null );
  XHRLoader.prototype.constructor = XHRLoader;
  // Static

  // Members
  XHRLoader.prototype.XHRcache = null;
  XHRLoader.prototype.dataCache = null;
  XHRLoader.prototype.count = 0;
  XHRLoader.prototype.loading = false;
  XHRLoader.prototype.toLoad = null;
  XHRLoader.prototype.onXHRLoaded = null;
  XHRLoader.prototype.onComplete = null;

  // Methods
  XHRLoader.prototype.Load = function ( _objects ) {

    if ( this.toLoad === null ) this.toLoad = [];
    this.toLoad.push.apply( this.toLoad, _objects );

    if ( this.loading === false ) {

      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    
    }
  
  };

  XHRLoader.prototype.Haul = function ( _count ) {

    var item = this.toLoad[ _count ];

    if ( item != null ) {

      var xhr = new XMLHttpRequest();

      switch ( item.type ) {

        case 'json':
          xhr.onload = this.OnLoadJSON.bind( this );
          break;
        default:
          xhr.onload = this.OnLoadXML.bind( this );
          break;
      
      }

      xhr.onerror = this.OnError.bind( this );

      if ( xhr.data != null ) {

        xhr.data.id = item.id;
      
      } else {

        xhr.data = {
          id: item.id
        };
      
      }

      xhr.open( 'GET', item.src );
      xhr.send();
    
    } else {

      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { XHRcache: this.XHRcache, dataCache: this.dataCache } );
    
    }
  
  };

  XHRLoader.prototype.OnLoadXML = function ( _event ) {

    var t = _event.currentTarget;

    if ( t.status === 200 && t.readyState === 4 ) {

      t.onload = null;
      t.onerror = null;
      this.XHRcache.StoreSafe( t );
      this.dataCache.Store( {
        id: t.data.id,
        data: Nenkraft.Utils.XMLToJSON( t.responseText, true )
      } );
      this.onXHRLoaded.Dispatch( t, { count: this.count } );
      this.Haul( ++this.count );
    
    }
  
  };

  XHRLoader.prototype.OnLoadJSON = function ( _event ) {

    var t = _event.currentTarget;

    if ( t.status === 200 && t.readyState === 4 ) {

      t.onload = null;
      t.onerror = null;
      this.XHRcache.StoreSafe( t );
      this.dataCache.Store( {
        id: t.data.id,
        data: JSON.parse( t.responseText )
      } );
      this.onXHRLoaded.Dispatch( t, { count: this.count } );
      this.Haul( ++this.count );
    
    }
  
  };

  XHRLoader.prototype.OnError = function () {

    throw new Error( 'Request failed' );
  
  };

  XHRLoader.prototype.GetXHR = function ( _id ) {

    return this.XHRcache.GetById( _id );
  
  };

  XHRLoader.prototype.GetData = function ( _id ) {

    return this.dataCache.GetById( _id ).data;
  
  };

  Nenkraft.Load.XHRLoader = XHRLoader;
  Nenkraft.XHRLoader = XHRLoader;

};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function SpritesheetLoader ( _objects, _onComplete ) {

    if ( !( this instanceof SpritesheetLoader ) ) return new SpritesheetLoader( _objects );
    this.spritesheetCache = new Nenkraft.Utils.Cache( Nenkraft.Texture.Spritesheet );
    this.xhrLoader = new Nenkraft.Load.XHRLoader();
    this.imageLoader = new Nenkraft.Load.ImageLoader();
    this.onComplete = new Nenkraft.Event.LocalEvent();
    this.onSpritesheetLoaded = new Nenkraft.Event.LocalEvent();

    this.xhrLoader.onXHRLoaded.Add( this.OnPartXHRLoaded, this );
    this.imageLoader.onImageLoaded.Add( this.OnPartImageLoaded, this );

    if ( _onComplete != null ) {

      this.onComplete.Add( _onComplete, this );
    
    }

    if ( _objects != null ) this.Load( _objects );

  }

  SpritesheetLoader.prototype = Object.create( null );
  SpritesheetLoader.prototype.constructor = SpritesheetLoader;
  // Static

  // Members
  SpritesheetLoader.prototype.xhrLoader = null;
  SpritesheetLoader.prototype.imageLoader = null;
  SpritesheetLoader.prototype.spritesheetCache = null;
  SpritesheetLoader.prototype.onSpritesheetLoaded = null;
  SpritesheetLoader.prototype.onComplete = null;
  SpritesheetLoader.prototype.count = 0;
  SpritesheetLoader.prototype.loading = false;
  SpritesheetLoader.prototype.toLoad = null;
  SpritesheetLoader.prototype.pairCount = 0;
  SpritesheetLoader.prototype.tempBasicTexture = null;
  SpritesheetLoader.prototype.tempData = null;

  // Methods
  SpritesheetLoader.prototype.Load = function( _objects ) {

    if ( this.toLoad === null ) this.toLoad = [];

    this.toLoad.push.apply( this.toLoad, _objects );

    if ( this.loading === false ) {

      this.count = 0;
      this.loading = true;
      this.Haul( this.count );
    
    }

  };

  SpritesheetLoader.prototype.Haul = function( _count ) {

    var item = this.toLoad[ _count ];

    if ( item != null ) {

      item.data.id = item.image.id = item.id;
      this.xhrLoader.Load( [ item.data ] );
      this.imageLoader.Load( [ item.image ], true );
      
    } else {

      this.count = 0;
      this.loading = false;
      this.toLoad = null;
      this.onComplete.Dispatch( this, { spritesheetCache: this.spritesheetCache } );
    
    }
  
  };

  SpritesheetLoader.prototype.OnPartLoaded = function() {

    if ( ++this.pairCount === 2 ) {

      var size = this.tempData.meta.size;

      this.tempBasicTexture.fw = size.w;
      this.tempBasicTexture.fh = size.h;

      console.log( this.tempBasicTexture );

      var spritesheet = new Nenkraft.Texture.Spritesheet( this.tempBasicTexture, this.tempData );

      this.spritesheetCache.StoreSafe( spritesheet );

      this.pairCount = 0;
      this.onSpritesheetLoaded.Dispatch( spritesheet, { count: this.count } );
      this.Haul( ++this.count );
    
    }
  
  };

  SpritesheetLoader.prototype.OnPartXHRLoaded = function( _event ) {

    this.tempData = this.xhrLoader.GetData( _event.target.data.id );
    this.OnPartLoaded();
  
  };

  SpritesheetLoader.prototype.OnPartImageLoaded = function( _event ) {

    this.tempBasicTexture = this.imageLoader.GetBasicTexture( _event.target.id );
    this.OnPartLoaded();
  
  };

  SpritesheetLoader.prototype.GetSpritesheet = function( _id ) {

    return this.spritesheetCache.GetById( _id );
  
  };

  Nenkraft.Load.SpritesheetLoader = SpritesheetLoader;
  Nenkraft.SpritesheetLoader = SpritesheetLoader;

};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function GLProgramController ( _gl, _shader ) {

    if ( !( this instanceof GLProgramController ) ) return new GLProgramController( _gl, _shader );
    this.gl = _gl;
    this.data = Object.create( null );

    if ( _gl != null && _shader != null ) {

      this.Init( _shader.v, _shader.f );
    
    }
  
  }

  GLProgramController.prototype = Object.create( null );
  GLProgramController.prototype.constructor = GLProgramController;
  // Static
  GLProgramController.LAST_USED_CONTROLLER = null;
  // Members
  GLProgramController.prototype.program = null;
  GLProgramController.prototype.gl = null;
  GLProgramController.prototype.attributes = null;
  GLProgramController.prototype.uniforms = null;
  GLProgramController.prototype.data = null;

  // Methods
  GLProgramController.prototype.Init = function ( _vs, _fs ) {

    var gl = this.gl;
    var vShader = this.CreateShader( _vs, gl.VERTEX_SHADER );
    var fShader = this.CreateShader( _fs, gl.FRAGMENT_SHADER );
    var program = this.program = gl.createProgram();
    gl.attachShader( program, vShader );
    gl.attachShader( program, fShader );
    gl.linkProgram( program );

    if ( !gl.getProgramParameter( program, gl.LINK_STATUS ) ) {

      var info = gl.getProgramInfoLog( program );
      throw new Error( 'Program link failed:' + info );
    
    }

    gl.detachShader( program, vShader );
    gl.detachShader( program, fShader );
    gl.deleteShader( vShader );
    gl.deleteShader( fShader );
    this.attributes = {};
    this.uniforms = {};
  
  };

  GLProgramController.prototype.CreateShader = function ( _script, _type ) {

    var gl = this.gl;
    var shader = gl.createShader( _type );
    gl.shaderSource( shader, _script );
    gl.compileShader( shader );

    if ( !gl.getShaderParameter( shader, gl.COMPILE_STATUS ) ) {

      var info = gl.getShaderInfoLog( shader );
      throw new Error( 'Shader compilation failed:' + info );
    
    }

    return shader;
  
  };

  GLProgramController.prototype.AssignAttribute = function ( _attribute ) {

    this.attributes[ _attribute ] = this.gl.getAttribLocation( this.program, _attribute );
  
  };

  GLProgramController.prototype.AssignUniform = function ( _uniform ) {

    this.uniforms[ _uniform ] = this.gl.getUniformLocation( this.program, _uniform );
  
  };

  GLProgramController.prototype.Execute = function () {
    // Override
  };

  Nenkraft.Controller.GLProgramController = GLProgramController;
  Nenkraft.GLProgramController = GLProgramController;

};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;

  function GLLine2DProgramController ( _gl ) {

    if ( !( this instanceof GLLine2DProgramController ) ) return new GLLine2DProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.LINE2D );
    this.Initialise();
  
  }

  GLLine2DProgramController.prototype = Object.create( Super.prototype );
  GLLine2DProgramController.prototype.constructor = GLLine2DProgramController;
  // Static

  // Members
  GLLine2DProgramController.prototype.essenceBuffer = null;
  GLLine2DProgramController.prototype.vertices = null;
  GLLine2DProgramController.prototype.color = null;

  // Methods
  GLLine2DProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.essenceBuffer = gl.createBuffer();
    this.vertices = new Float32Array( [ -1, 0, 1, 0 ] );
    this.color = new Nenkraft.Color();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uColor' );
  
  };

  GLLine2DProgramController.prototype.Execute = function ( _projection, _s, _e ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var channel = this.color.channel;
    vertices[ 0 ] = _s.x;
    vertices[ 1 ] = _s.y;
    vertices[ 2 ] = _e.x;
    vertices[ 3 ] = _e.y;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertices );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniform4f( uniforms.uColor, channel[ 0 ], channel[ 1 ], channel[ 2 ], channel[ 3 ] );
    gl.drawArrays( gl.LINES, 0, 2 );
  
  };

  Nenkraft.Controller.GLLine2DProgramController = GLLine2DProgramController;
  Nenkraft.GLLine2DProgramController = GLLine2DProgramController;

};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TriRectArray = Nenkraft.Math.TriRectArray;

  function GLRectangleProgramController ( _gl ) {

    if ( !( this instanceof GLRectangleProgramController ) ) return new GLRectangleProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.RECTANGLE );
    this.Initialise();
  
  }

  GLRectangleProgramController.prototype = Object.create( Super.prototype );
  GLRectangleProgramController.prototype.constructor = GLRectangleProgramController;
  // Static

  // Members
  GLRectangleProgramController.prototype.geometricBuffer = null;
  GLRectangleProgramController.prototype.vertices = null;
  GLRectangleProgramController.prototype.fillColor = null;
  GLRectangleProgramController.prototype.outlineColor = null;
  GLRectangleProgramController.prototype.outline = 5.0;

  // Methods
  GLRectangleProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.essenceBuffer = gl.createBuffer();
    this.vertices = new Float32Array( Nenkraft.Math.TriRectArray( 0, 0, 1, 1 ) );
    this.fillColor = new Nenkraft.Color();
    this.outlineColor = new Nenkraft.Color();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uFillColor' );
    this.AssignUniform( 'uOutlineColor' );
    this.AssignUniform( 'uSize' );
    this.AssignUniform( 'uOutline' );
  
  };

  GLRectangleProgramController.prototype.Execute = function ( _projection, _x, _y, _w, _h ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var fillChannel = this.fillColor.channel;
    var outlineChannel = this.outlineColor.channel;
    TriRectArray( _x, _y, _w, _h, vertices );

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertices );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniform4f( uniforms.uFillColor, fillChannel[ 0 ], fillChannel[ 1 ], fillChannel[ 2 ], fillChannel[ 3 ] );
    gl.uniform4f( uniforms.uOutlineColor, outlineChannel[ 0 ], outlineChannel[ 1 ], outlineChannel[ 2 ], outlineChannel[ 3 ] );
    gl.uniform1f( uniforms.uOutline, this.outline );
    gl.uniform2f( uniforms.uSize, _w, _h );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLRectangleProgramController = GLRectangleProgramController;
  Nenkraft.GLRectangleProgramController = GLRectangleProgramController;

};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TriRectArray = Nenkraft.Math.TriRectArray;

  function GLCircleProgramController ( _gl ) {

    if ( !( this instanceof GLCircleProgramController ) ) return new GLCircleProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.CIRCLE );
    this.Initialise();
  
  }

  GLCircleProgramController.prototype = Object.create( Super.prototype );
  GLCircleProgramController.prototype.constructor = GLCircleProgramController;
  // Static

  // Members
  GLCircleProgramController.prototype.essenceBuffer = null;
  GLCircleProgramController.prototype.vertices = null;
  GLCircleProgramController.prototype.fillColor = null;
  GLCircleProgramController.prototype.outlineColor = null;
  GLCircleProgramController.prototype.outline = 5.0;

  // Methods
  GLCircleProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.essenceBuffer = gl.createBuffer();
    this.vertices = new Float32Array( Nenkraft.Math.TriRectArray( 0, 0, 1, 1 ) );
    this.fillColor = new Nenkraft.Color();
    this.outlineColor = new Nenkraft.Color();
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uFillColor' );
    this.AssignUniform( 'uOutlineColor' );
    this.AssignUniform( 'uRadius' );
    this.AssignUniform( 'uOutline' );
  
  };

  GLCircleProgramController.prototype.Execute = function ( _projection, _x, _y, _radius ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;
    var vertices = this.vertices;
    var fillChannel = this.fillColor.channel;
    var outlineChannel = this.outlineColor.channel;
    TriRectArray( _x - _radius, _y - _radius, _radius * 2, _radius * 2, vertices );

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertices );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniform4f( uniforms.uFillColor, fillChannel[ 0 ], fillChannel[ 1 ], fillChannel[ 2 ], fillChannel[ 3 ] );
    gl.uniform4f( uniforms.uOutlineColor, outlineChannel[ 0 ], outlineChannel[ 1 ], outlineChannel[ 2 ], outlineChannel[ 3 ] );
    gl.uniform1f( uniforms.uOutline, this.outline );
    gl.uniform1f( uniforms.uRadius, _radius );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLCircleProgramController = GLCircleProgramController;
  Nenkraft.GLCircleProgramController = GLCircleProgramController;

};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TRA = Nenkraft.Math.TriRectArray;

  function GLTextureProgramController ( _gl ) {

    if ( !( this instanceof GLTextureProgramController ) ) return new GLTextureProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.TEXTURE_2D );
  
  }

  GLTextureProgramController.prototype = Object.create( Super.prototype );
  GLTextureProgramController.prototype.constructor = GLTextureProgramController;
  // Static

  // Members
  GLTextureProgramController.prototype.originalTexture = null;
  GLTextureProgramController.prototype.boundTexture = null;
  GLTextureProgramController.prototype.essenceBuffer = null;

  // Methods
  GLTextureProgramController.prototype.BindBasicTexture = function ( _texture ) {

    var gl = this.gl;
    this.originalTexture = _texture;
    this.boundTexture = gl.createTexture();
    this.essenceBuffer = gl.createBuffer();
    var essence = TRA( 0, 0, _texture.w, _texture.h );
    essence.push.apply( essence, TRA( 0, 0, 1, 1 ) );
    gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image );
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( essence ), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindTexture( gl.TEXTURE_2D, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignAttribute( 'aTexCoord' );
    this.AssignUniform( 'uImage' );
    this.AssignUniform( 'uProjection' );
    this.AssignUniform( 'uTranslation' );
    this.AssignUniform( 'uTransformation' );
  
  };

  GLTextureProgramController.prototype.Execute = function ( _projection, _translation, _transformation ) {

    var gl = this.gl;
    var attributes = this.attributes;
    var uniforms = this.uniforms;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      gl.activeTexture( gl.TEXTURE0 );
      gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
      gl.uniform1i( uniforms.uImage, 0 );
      gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
      gl.enableVertexAttribArray( attributes.aPosition );
      gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
      gl.enableVertexAttribArray( attributes.aTexCoord );
      gl.vertexAttribPointer( attributes.aTexCoord, 2, gl.FLOAT, false, 0, 48 );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.uniformMatrix3fv( uniforms.uProjection, false, _projection );
    gl.uniformMatrix3fv( uniforms.uTranslation, false, _translation );
    gl.uniformMatrix3fv( uniforms.uTransformation, false, _transformation );
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
  
  };

  Nenkraft.Controller.GLTextureProgramController = GLTextureProgramController;
  Nenkraft.GLTextureProgramController = GLTextureProgramController;

};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;
  var TRA = Nenkraft.Math.TriRectArray;

  function GLTextureBatchProgramController ( _gl ) {

    if ( !( this instanceof GLTextureBatchProgramController ) ) return new GLTextureBatchProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.TEXTURE_2D_BATCH );
  
  }

  GLTextureBatchProgramController.prototype = Object.create( Super.prototype );
  GLTextureBatchProgramController.prototype.constructor = GLTextureBatchProgramController;
  // Static

  // Members
  GLTextureBatchProgramController.prototype.originalTexture = null;
  GLTextureBatchProgramController.prototype.boundTexture = null;
  GLTextureBatchProgramController.prototype.essenceBuffer = null;
  GLTextureBatchProgramController.prototype.dataBuffer = null;
  GLTextureBatchProgramController.prototype.indexBuffer = null;
  GLTextureBatchProgramController.prototype.previousNumberOfElements = null;

  // Methods
  GLTextureBatchProgramController.prototype.BindBasicTexture = function ( _texture ) {

    var gl = this.gl;
    this.aia = gl.getExtension( 'ANGLE_instanced_arrays' );
    this.originalTexture = _texture;
    this.boundTexture = gl.createTexture();
    this.essenceBuffer = gl.createBuffer();
    this.dataBuffer = gl.createBuffer();
    var essence = TRA( 0, 0, _texture.w, _texture.h );
    essence.push.apply( essence, TRA( 0, 0, 1, 1 ) );
    gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _texture.image );
    gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( essence ), gl.STATIC_DRAW );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );
    gl.bindTexture( gl.TEXTURE_2D, null );
    this.AssignAttribute( 'aPosition' );
    this.AssignAttribute( 'aTexCoord' );
    this.AssignAttribute( 'aProjection1' );
    this.AssignAttribute( 'aProjection2' );
    this.AssignAttribute( 'aProjection3' );
    this.AssignAttribute( 'aTranslation1' );
    this.AssignAttribute( 'aTranslation2' );
    this.AssignAttribute( 'aTranslation3' );
    this.AssignAttribute( 'aTransformation1' );
    this.AssignAttribute( 'aTransformation2' );
    this.AssignAttribute( 'aTransformation3' );
    this.AssignUniform( 'uImage' );
  
  };

  GLTextureBatchProgramController.prototype.Execute = function ( _data, _numberOfElements ) {

    var gl = this.gl;
    var aia = this.aia;
    var attributes = this.attributes;
    var uniforms = this.uniforms;

    if ( this !== Super.LAST_USED_CONTROLLER ) {

      gl.useProgram( this.program );
      gl.activeTexture( gl.TEXTURE0 );
      gl.bindTexture( gl.TEXTURE_2D, this.boundTexture );
      gl.uniform1i( uniforms.uImage, 0 );
      gl.bindBuffer( gl.ARRAY_BUFFER, this.essenceBuffer );
      gl.enableVertexAttribArray( attributes.aPosition );
      gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 0, 0 );
      aia.vertexAttribDivisorANGLE( attributes.aPosition, 0 );
      gl.enableVertexAttribArray( attributes.aTexCoord );
      gl.vertexAttribPointer( attributes.aTexCoord, 2, gl.FLOAT, false, 0, 48 );
      aia.vertexAttribDivisorANGLE( attributes.aTexCoord, 0 );
      Super.LAST_USED_CONTROLLER = this;
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.dataBuffer );

    if ( _numberOfElements !== this.previousNumberOfElements ) {

      gl.bufferData( gl.ARRAY_BUFFER, _data, gl.DYNAMIC_DRAW );
    
    } else {

      gl.bufferSubData( gl.ARRAY_BUFFER, 0, _data );
    
    }

    gl.enableVertexAttribArray( attributes.aProjection1 );
    gl.vertexAttribPointer( attributes.aProjection1, 3, gl.FLOAT, false, 108, 0 );
    aia.vertexAttribDivisorANGLE( attributes.aProjection1, 1 );
    gl.enableVertexAttribArray( attributes.aProjection2 );
    gl.vertexAttribPointer( attributes.aProjection2, 3, gl.FLOAT, false, 108, 12 );
    aia.vertexAttribDivisorANGLE( attributes.aProjection2, 1 );
    gl.enableVertexAttribArray( attributes.aProjection3 );
    gl.vertexAttribPointer( attributes.aProjection3, 3, gl.FLOAT, false, 108, 24 );
    aia.vertexAttribDivisorANGLE( attributes.aProjection3, 1 );
    gl.enableVertexAttribArray( attributes.aTranslation1 );
    gl.vertexAttribPointer( attributes.aTranslation1, 3, gl.FLOAT, false, 108, 36 );
    aia.vertexAttribDivisorANGLE( attributes.aTranslation1, 1 );
    gl.enableVertexAttribArray( attributes.aTranslation2 );
    gl.vertexAttribPointer( attributes.aTranslation2, 3, gl.FLOAT, false, 108, 48 );
    aia.vertexAttribDivisorANGLE( attributes.aTranslation2, 1 );
    gl.enableVertexAttribArray( attributes.aTranslation3 );
    gl.vertexAttribPointer( attributes.aTranslation3, 3, gl.FLOAT, false, 108, 60 );
    aia.vertexAttribDivisorANGLE( attributes.aTranslation3, 1 );
    gl.enableVertexAttribArray( attributes.aTransformation1 );
    gl.vertexAttribPointer( attributes.aTransformation1, 3, gl.FLOAT, false, 108, 72 );
    aia.vertexAttribDivisorANGLE( attributes.aTransformation1, 1 );
    gl.enableVertexAttribArray( attributes.aTransformation2 );
    gl.vertexAttribPointer( attributes.aTransformation2, 3, gl.FLOAT, false, 108, 84 );
    aia.vertexAttribDivisorANGLE( attributes.aTransformation2, 1 );
    gl.enableVertexAttribArray( attributes.aTransformation3 );
    gl.vertexAttribPointer( attributes.aTransformation3, 3, gl.FLOAT, false, 108, 96 );
    aia.vertexAttribDivisorANGLE( attributes.aTransformation3, 1 );
    aia.drawArraysInstancedANGLE( gl.TRIANGLE_STRIP, 0, 6, _numberOfElements );
  
  };

  Nenkraft.Controller.GLTextureBatchProgramController = GLTextureBatchProgramController;
  Nenkraft.GLTextureBatchProgramController = GLTextureBatchProgramController;

};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Super = Nenkraft.Controller.GLProgramController;

  function GLPixelBatchProgramController ( _gl ) {

    if ( !( this instanceof GLPixelBatchProgramController ) ) return new GLPixelBatchProgramController( _gl );
    Super.call( this, _gl, Nenkraft.SHADER_CODE.PIXEL_BATCH );
    this.Initialise();
  
  }

  GLPixelBatchProgramController.prototype = Object.create( Super.prototype );
  GLPixelBatchProgramController.prototype.constructor = GLPixelBatchProgramController;
  // Static

  // Members
  GLPixelBatchProgramController.prototype.dataBuffer = null;
  GLPixelBatchProgramController.prototype.prevNumElements = 0;

  // Methods
  GLPixelBatchProgramController.prototype.Initialise = function () {

    var gl = this.gl;
    this.dataBuffer = gl.createBuffer();
    this.AssignAttribute( 'aProjection1' );
    this.AssignAttribute( 'aProjection2' );
    this.AssignAttribute( 'aProjection3' );
    this.AssignAttribute( 'aPosition' );
    this.AssignAttribute( 'aColor' );
    this.AssignAttribute( 'aPointSize' );
  
  };

  GLPixelBatchProgramController.prototype.Execute = function ( _data, _numElements ) {

    var gl = this.gl;
    var attributes = this.attributes;

    if ( Super.LAST_USED_CONTROLLER !== this ) {

      gl.useProgram( this.program );
    
    }

    gl.bindBuffer( gl.ARRAY_BUFFER, this.dataBuffer );

    if ( _numElements !== this.prevNumElements ) {

      gl.bufferData( gl.ARRAY_BUFFER, _data, gl.DYNAMIC_DRAW );
    
    } else {

      gl.bufferSubData( gl.ARRAY_BUFFER, 0, _data );
    
    }

    gl.enableVertexAttribArray( attributes.aProjection1 );
    gl.vertexAttribPointer( attributes.aProjection1, 3, gl.FLOAT, false, 64, 0 );
    gl.enableVertexAttribArray( attributes.aProjection2 );
    gl.vertexAttribPointer( attributes.aProjection2, 3, gl.FLOAT, false, 64, 12 );
    gl.enableVertexAttribArray( attributes.aProjection3 );
    gl.vertexAttribPointer( attributes.aProjection3, 3, gl.FLOAT, false, 64, 24 );
    gl.enableVertexAttribArray( attributes.aPosition );
    gl.vertexAttribPointer( attributes.aPosition, 2, gl.FLOAT, false, 64, 36 );
    gl.enableVertexAttribArray( attributes.aColor );
    gl.vertexAttribPointer( attributes.aColor, 4, gl.FLOAT, false, 64, 44 );
    gl.enableVertexAttribArray( attributes.aPointSize );
    gl.vertexAttribPointer( attributes.aPointSize, 1, gl.FLOAT, false, 64, 60 );
    gl.drawArrays( gl.POINTS, 0, _numElements );
    this.prevNumElements = _numElements;
    Super.LAST_USED_CONTROLLER = this;
  
  };

  Nenkraft.Controller.GLPixelBatchProgramController = GLPixelBatchProgramController;
  Nenkraft.GLPixelBatchProgramController = GLPixelBatchProgramController;

};


/***/ })
/******/ ]);
//# sourceMappingURL=nk.js.map