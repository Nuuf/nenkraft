/**
* @package     Nenkraft
* @author      Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
* @version     0.9.1 (Beta)
* @copyright   (C) 2017-2018 Gustav 'Nuuf' Åberg
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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
/***/ (function(module, exports) {

module.exports = function() {

  Array.prototype.indexPop = function( index ) {

    var last = this.length - 1;

    if ( last > 1 && index <= last && index >= 0 ) {
  
      var temp = this[last];
      this[last] = this[index];
      this[index] = temp;
  
      return this.pop();
    
    }

    return this.pop();
  
  };

  Array.prototype.indexShift = function( index ) {
  
    if ( this.length > 1 && index <= this.length - 1 && index >= 0 ) {
  
      var temp = this[0];
      this[0] = this[index];
      this[index] = temp;

      return this.shift();
    
    }

    return this.shift();
  
  };

  Array.prototype.popSplice = function( index ) {

    var l = this.length - 1;
    if ( l < 1 ) return;
    var returnee = this[index];

    while ( index < l ) {
 
      this[index] = this[index + 1]; 
      index++; 
    
    }

    this.pop();

    return returnee;
  
  };

  Array.prototype.shiftSplice = function( index ) {

    if ( this.length < 1 ) return;
    var returnee = this[index];

    while ( index > 0 ) {

      this[index] = this[index - 1];
      index--;
    
    }

    this.shift();

    return returnee;
  
  };

  Array.prototype.fickleSplice = function( index ) {

    if ( index > ( this.length * 0.5 ) | 0 ) {

      return this.popSplice( index );
    
    }

    return this.shiftSplice( index );
  
  };

};


/***/ }),

/***/ 10:
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

    var listener = Nenkraft.LocalListener( this, _context, _handle, _removeOnNextCall );
    this.listeners.push( listener );
  
  };

  LocalEvent.prototype.Remove = function ( _handle, _context ) {

    var ix = this.GetListenerIndex( _handle, _context );

    if ( ix !== -1 ) {

      this.listeners.fickleSplice( ix );
    
    }
  
  };

  LocalEvent.prototype.Dump = function ( _context ) {

    var listeners = this.listeners;
    if ( listeners.length === 0 ) return;

    if ( _context !== undefined ) {

      for ( var i = 0, l = listeners.length, listener; i < l; ++i ) {

        listener = listeners[ i ];

        if ( listener.context === _context ) {

          this.listeners.fickleSplice( i );
        
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

/***/ 11:
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

    this.onStop = Nenkraft.LocalEvent();
    this.onFinish = Nenkraft.LocalEvent();
    this.onStart = Nenkraft.LocalEvent();
    this.onReset = Nenkraft.LocalEvent();
    this.onPause = Nenkraft.LocalEvent();
    this.onResume = Nenkraft.LocalEvent();
  
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

/***/ 12:
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

  Vector2D.Pool = Nenkraft.Utils.Pool( Vector2D );

  Vector2D.Pool.Retrieve = function ( _x, _y ) {

    if ( this.objects.length === 0 ) {

      this.Flood();
    
    }

    var v = this.objects.pop();
    v.Set( _x, _y );
    return v;
  
  };

  Vector2D.USE_POOL = true;
  // Members
  Vector2D.prototype.x = 0;
  Vector2D.prototype.y = 0;

  // Methods
  Vector2D.prototype.Copy = function () {

    if ( Vector2D.USE_POOL === true ) {

      return Vector2D.Pool.Retrieve( this.x, this.y );
    
    }

    return Vector2D( this );
  
  };

  Vector2D.prototype.FromStore = function( _x, _y ) {

    if ( Vector2D.USE_POOL === true ) {

      return Vector2D.Pool.Retrieve( _x, _y );
    
    }

    return Vector2D( _x, _y );
  
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

  Vector2D.prototype.RotateAbsolute = function ( _a ) {

    this.Rotate( _a - this.GetAngle() );
  
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

  Vector2D.prototype.RotateAbsoluteAroundV = function ( _v, _a ) {

    this.SubtractV( _v );
    this.RotateAbsolute( _a );
    this.AddV( _v );
  
  };

  Vector2D.prototype.RotateAbsoluteAround = function ( _x, _y, _a ) {

    this.Subtract( _x, _y );
    this.RotateAbsolute( _a );
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

    return this.FromStore( -( _v.y - this.y ), _v.x - this.x );
  
  };

  Vector2D.prototype.GetPerpendicularCCW = function ( _x, _y ) {

    return this.FromStore( -( _y - this.y ), _x - this.x );
  
  };

  Vector2D.prototype.GetPerpendicularCWV = function ( _v ) {

    return this.FromStore( _v.y - this.y, -( _v.x - this.x ) );
  
  };

  Vector2D.prototype.GetPerpendicularCW = function ( _x, _y ) {

    return this.FromStore( _y - this.y, -( _x - this.x ) );
  
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
    if ( dot === 0 ) return this.FromStore( 0 );
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
    if ( dot === 0 ) return this.FromStore( 0 );
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

  Vector2D.Pool.Flood( function () {}, 100000 );

};


/***/ }),

/***/ 13:
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(136);


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

var namespace = Object.create( null );

__webpack_require__( 1 )();
__webpack_require__( 137 )( namespace );
__webpack_require__( 2 )( namespace );
__webpack_require__( 3 )( namespace );
__webpack_require__( 4 )( namespace );
__webpack_require__( 5 )( namespace );
__webpack_require__( 6 )( namespace );
__webpack_require__( 7 )( namespace );
__webpack_require__( 8 )( namespace );
__webpack_require__( 9 )( namespace );
__webpack_require__( 10 )( namespace );
__webpack_require__( 11 )( namespace );
__webpack_require__( 138 )( namespace );
__webpack_require__( 12 )( namespace );
__webpack_require__( 13 )( namespace );
__webpack_require__( 14 )( namespace );
__webpack_require__( 15 )( namespace );
__webpack_require__( 21 )( namespace );
__webpack_require__( 22 )( namespace );
__webpack_require__( 23 )( namespace );
__webpack_require__( 16 )( namespace );
__webpack_require__( 17 )( namespace );
__webpack_require__( 18 )( namespace );
__webpack_require__( 19 )( namespace );
__webpack_require__( 20 )( namespace );
__webpack_require__( 24 )( namespace );
__webpack_require__( 25 )( namespace );
__webpack_require__( 26 )( namespace );
__webpack_require__( 27 )( namespace );
__webpack_require__( 28 )( namespace );
__webpack_require__( 29 )( namespace );
__webpack_require__( 30 )( namespace );

module.exports = namespace;


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  Nenkraft.Geom = Object.create( null );
  Nenkraft.Math = Object.create( null );
  Nenkraft.Utils = Object.create( null );
  Nenkraft.Entity = Object.create( null );
  Nenkraft.Event = Object.create( null );
  Nenkraft.Time = Object.create( null );
  Nenkraft.CP = Object.create( null );
  Nenkraft.VERSION = '0.9.1 (Beta)';

  Nenkraft.PRINT_VERSION = function() {

    console.log( 'nenkraft-behind version ' + Nenkraft.VERSION );
  
  };

};


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function ServerTicker ( _onProcess, _rate, _halt ) {

    if ( !( this instanceof ServerTicker ) ) return new ServerTicker( _onProcess, _rate, _halt );
    if ( typeof _onProcess !== 'function' ) throw new Error( 'ServerTicker: An onProcess function is required!' );
    this.SetDesiredRate( _rate );
    this.onProcess = _onProcess;

    if ( _halt == undefined || _halt === false ) {

      this.Start();
    
    }
  
  }

  ServerTicker.prototype = Object.create( null );
  ServerTicker.prototype.constructor = ServerTicker;
  // Static
  ServerTicker.LOG = true;

  ServerTicker.Log = function () {

    if ( ServerTicker.LOG === false ) return;
    console.log.apply( null, arguments );
  
  };

  // Members
  ServerTicker.prototype.intervalId = null;
  ServerTicker.prototype.timeoutId = null;
  ServerTicker.prototype.immediateId = null;
  ServerTicker.prototype.delta = 0;
  ServerTicker.prototype.then = 0;
  ServerTicker.prototype.now = 0;
  ServerTicker.prototype.desiredRate = 0;
  ServerTicker.prototype.supplyDelta = true;

  // Methods
  ServerTicker.prototype.Process = function () {

    this.onProcess( this.ComputeDelta() );
  
  };

  ServerTicker.prototype.ComputeDelta = function () {

    this.now = Date.now();
    this.delta = this.now - this.then;
    this.then = this.now;

    return this.delta;
  
  };

  ServerTicker.prototype.GetTPS = function () {

    return Nenkraft.Math.PR( 1 / this.delta * 1000, 2 );
  
  };

  ServerTicker.prototype.SetDesiredRate = function ( _rate ) {

    this.desiredRate = _rate === undefined ? 16.66 : 1000 / _rate;
  
  };

  ServerTicker.prototype.Start = function ( _force ) {

    if ( this.intervalId !== null ) {

      if ( _force === true ) {

        this.Stop();
        this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      
      } else {

      }
    
    } else {

      this.intervalId = setInterval( this.Process.bind( this ), this.desiredRate );
      
    }
  
  };

  ServerTicker.prototype.Stop = function () {

    if ( this.intervalId !== null ) {

      clearInterval( this.intervalId );
      this.intervalId = null;
    
    }
  
  };

  Nenkraft.Time.ServerTicker = ServerTicker;
  Nenkraft.ServerTicker = ServerTicker;

};


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Basetransform2D ( _x, _y ) {

    if ( !( this instanceof Basetransform2D ) ) return new Basetransform2D( _x, _y );
    this.position = Nenkraft.Vector2D( _x, _y );
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.localTransform = Nenkraft.Vector2D( 0, 0 );
    this.worldTransform = Nenkraft.Vector2D( 0, 0 );
  
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

/***/ 15:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Transform2D ( _x, _y ) {

    if ( !( this instanceof Transform2D ) ) return new Transform2D( _x, _y );
    this.position = Nenkraft.Vector2D( _x, _y );
    this.scale = Nenkraft.Vector2D( 1, 1 );
    this.skew = Nenkraft.Vector2D( 0, 0 );
    this.pivot = Nenkraft.Vector2D( 0, 0 );
    this.localTransform = Nenkraft.Matrix2D();
    this.worldTransform = Nenkraft.Matrix2D();
  
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

/***/ 16:
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

      this.s = Nenkraft.Vector2D( _arg0, _arg1 );
      this.e = Nenkraft.Vector2D( _arg2, _arg3 );
    
    }
    else {

      this.s = Nenkraft.Vector2D();
      this.e = Nenkraft.Vector2D();
    
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

/***/ 17:
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

      this.tl = Nenkraft.Vector2D( _arg0.x, _arg0.y );
      this.br = Nenkraft.Vector2D( _arg1.x, _arg1.y );
    
    }
    else if ( _arg0 !== undefined && _arg1 !== undefined && _arg2 !== undefined && _arg3 !== undefined ) {

      this.tl = Nenkraft.Vector2D( _arg0, _arg1 );
      this.br = Nenkraft.Vector2D( _arg2, _arg3 );
    
    }
    else {

      this.tl = Nenkraft.Vector2D();
      this.br = Nenkraft.Vector2D();
    
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
        return AABB2D(
          tl.x,
          tl.y,
          tl.x + this.hw,
          tl.y + this.hh
        );
      case AABB2D.TOP_RIGHT:
        return AABB2D(
          tl.x + this.hw,
          tl.y,
          br.x,
          tl.y + this.hh
        );
      case AABB2D.BOTTOM_LEFT:
        return AABB2D(
          tl.x,
          tl.y + this.hh,
          tl.x + this.hw,
          br.y
        );
      case AABB2D.BOTTOM_RIGHT:
        return AABB2D(
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

/***/ 18:
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
    this.centroid = Nenkraft.Vector2D();

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

    var tl = Nenkraft.Vector2D( _x, _y );
    var tr = Nenkraft.Vector2D( _x + _w, _y );
    var br = Nenkraft.Vector2D( _x + _w, _y + _h );
    var bl = Nenkraft.Vector2D( _x, _y + _h );
    _po.Recreate( [ tl, tr, br, bl ] );
    _po.ComputeBounds();
    _po.GetNormalsA();
    return _po;
  
  };

  Polygon2D.Construct.Isosceles = function ( _po, _x, _y, _w, _h ) {

    var tm = Nenkraft.Vector2D( _x, _y );
    var br = Nenkraft.Vector2D( _x + _w * 0.5, _y + _h );
    var bl = Nenkraft.Vector2D( _x - _w * 0.5, _y + _h );
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
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
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
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an ) * _side;
    y = Math.sin( an ) * _side;
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    x = Math.cos( an * 2 ) * _side;
    y = Math.sin( an * 2 ) * _side;
    _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
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
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
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
      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
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

      _po.AddPoint( Nenkraft.Vector2D( _x + x, _y + y ) );
    
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

    this.vertices.push( Nenkraft.Vector2D( _x, _y ) );
  
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

    if ( this.aabb === null ) this.aabb = Nenkraft.Geom.AABB2D();
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

/***/ 19:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function Circle ( _x, _y, _radius ) {

    if ( !( this instanceof Circle ) ) return new Circle( _x, _y, _radius );
    this.center = Nenkraft.Vector2D( _x, _y );
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

/***/ 2:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  var PI = Math.PI;
  var Sin = Math.sin;
  var Cos = Math.cos;
  var Pow = Math.pow;
  var Round = Math.round;

  Nenkraft.Math.PII = PI * 2;
  Nenkraft.Math.PI5 = PI * 0.5;
  Nenkraft.Math.DEGREES_TO_RADIANS = PI / 180;
  Nenkraft.Math.RADIANS_TO_DEGREES = 180 / PI;
  Nenkraft.Math.RADIAN = Nenkraft.Math.DEGREES_TO_RADIANS;

  var DTR = Nenkraft.Math.DegreesToRadians = Nenkraft.Math.DTR = function ( _angle ) {

    return _angle * Nenkraft.Math.DEGREES_TO_RADIANS;
  
  };

  Nenkraft.Math.RadiansToDegrees = Nenkraft.Math.RTD = function ( _angle ) {

    return _angle * Nenkraft.Math.RADIANS_TO_DEGREES;
  
  };

  Nenkraft.Math.PrecisionRound = function ( _value, _precision ) {

    var divisor = Pow( 10, _precision );
    return Round( divisor * _value ) / divisor;
  
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
        Cos( theta ) * _strength,
        Sin( theta ) * _strength
      );
    
    }
  
  };

  Nenkraft.Math.Oscillate = function( _time, _from, _to, _amplitude ) {

    var delta = ( _to - _from ) * 0.5;
    return ( _from + delta ) + ( Sin( DTR( _time * _amplitude ) ) * delta );
  
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

  Nenkraft.Math.LikeASquareGrid = function ( _points, _w, _marginX, _marginY ) {

    for ( var i = 0, l = _points.length, columns = ( _w / _marginX ) | 0; i < l; ++i ) {

      _points[ i ].Set( ( i % columns ) * _marginX, ( ( i / columns ) | 0 ) * _marginY );
    
    }
  
  };

  Nenkraft.Math.SquareGrid = function ( _w, _h, _marginX, _marginY, _creatableClass ) {

    var grid = [];

    for ( var i = 0, columns = ( _w / _marginX ) | 0, rows = ( _h / _marginY ) | 0, l = columns * rows; i < l; ++i ) {

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

  var GCD = Nenkraft.Math.GreatestCommonDivisor = Nenkraft.Math.GCD = function( _x, _y ) {

    if ( _y === 0 ) return _x;
    return GCD( _y, _x % _y );
  
  };

  Nenkraft.Math.SimplifyAspectRatio = Nenkraft.Math.SAR = function( _x, _y, _array ) {

    var gcd = GCD( _x, _y );
    var array = _array == null ? [] : _array;
    array[0] = _x / gcd;
    array[1] = _y / gcd;
    return array;

  };

  Object.defineProperty( Nenkraft.Math, 'PII', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'PI5', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'DEGREES_TO_RADIANS', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIANS_TO_DEGREES', { writable: false } );
  Object.defineProperty( Nenkraft.Math, 'RADIAN', { writable: false } );

};


/***/ }),

/***/ 20:
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

    this.mtv = Nenkraft.Vector2D();
  
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
          Nenkraft.Vector2D( tl1.x - tl2xw, 0 ),
          Nenkraft.Vector2D( tl1xw - tl2.x, 0 ),
          Nenkraft.Vector2D( 0, tl1.y - br2yh ),
          Nenkraft.Vector2D( 0, br1yh - tl2.y )
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

    this.mtv = Nenkraft.Vector2D( 0, 0 );
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
        var poc1 = Nenkraft.Vector2D(
          pos1.x + ( delta.x * dm / distance ),
          pos1.y + ( delta.y * dm / distance )
        );
        var de = Math.sqrt( ( c1.radiusSquared ) - ( dm * dm ) ) / distance;
        var rx = -delta.y * de;
        var ry = delta.x * de;
        var poc2 = Nenkraft.Vector2D(
          poc1.x + rx,
          poc1.y + ry
        );
        var poc3 = Nenkraft.Vector2D(
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

    this.mtv = Nenkraft.Vector2D( 0, 0 );
    this.olAxis = Nenkraft.Vector2D( 0, 0 );
  
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

    this.mtv = Nenkraft.Vector2D( 0, 0 );
    this.cp = Nenkraft.Vector2D( 0, 0 );
  
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

/***/ 21:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  Nenkraft.Math.Ease = Object.create( null );

  var Sin = Math.sin;
  var Cos = Math.cos;
  var PI = Math.PI;

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

    return -_amplitude * Cos( _time / _duration * ( PI * 0.5 ) ) + _amplitude + _startValue;
  
  };

  Nenkraft.Math.Ease.SineOut = function ( _time, _startValue, _amplitude, _duration ) {

    return _amplitude * Sin( _time / _duration * ( PI * 0.5 ) ) + _startValue;
  
  };

  Nenkraft.Math.Ease.SineInOut = function ( _time, _startValue, _amplitude, _duration ) {

    return -_amplitude * 0.5 * ( Cos( PI * _time / _duration ) - 1 ) + _startValue;
  
  };

  Nenkraft.Ease = Nenkraft.Math.Ease;

};


/***/ }),

/***/ 22:
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
    this.onStart = Nenkraft.Event.LocalEvent();
    this.onEnd = Nenkraft.Event.LocalEvent();
    this.onStop = Nenkraft.Event.LocalEvent();
    this.onReconfigure = Nenkraft.Event.LocalEvent();
    this.onReset = Nenkraft.Event.LocalEvent();
  
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

/***/ 23:
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

      var motion = Nenkraft.Motion( _id, this.target, _propertyString, _value, _duration, _easing );
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

/***/ 24:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function QuadtreeNode ( _aabb, _level, _objCap, _levelCap ) {

    if ( !( this instanceof QuadtreeNode ) ) return new QuadtreeNode( _aabb, _level, _objCap, _levelCap );
    this.Set( _aabb, _level, _objCap, _levelCap );
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
  QuadtreeNode.Pool = Nenkraft.Utils.Pool( QuadtreeNode );

  QuadtreeNode.Pool.Retrieve = function( _aabb, _level, _objCap, _levelCap ) {

    if ( this.objects.length === 0 ) {

      this.Flood();
    
    }

    var qtn = this.objects.pop();
    qtn.Set( _aabb, _level, _objCap, _levelCap );
    return qtn;
  
  };

  QuadtreeNode.USE_POOL = true;
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
  QuadtreeNode.prototype.Set = function( _aabb, _level, _objCap, _levelCap ) {

    this.aabb = _aabb;
    this.level = _level;
    this.objectCap = _objCap;
    this.levelCap = _levelCap;
  
  };

  QuadtreeNode.prototype.FromStore = function( _aabb, _level, _objCap, _levelCap ) {

    if ( QuadtreeNode.USE_POOL === true ) {

      return QuadtreeNode.Pool.Retrieve( _aabb, _level, _objCap, _levelCap );
    
    }

    return QuadtreeNode( _aabb, _level, _objCap, _levelCap );
  
  };

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

            nodes[ marking ].Add( objects.fickleSplice( i ) );
          
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
    nodes[ QuadtreeNode.TOP_LEFT ] = this.FromStore(
      aabb.GetQuadrant( QuadtreeNode.TOP_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.TOP_RIGHT ] = this.FromStore(
      aabb.GetQuadrant( QuadtreeNode.TOP_RIGHT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_LEFT ] = this.FromStore(
      aabb.GetQuadrant( QuadtreeNode.BOTTOM_LEFT ),
      nl, oc, lc
    );
    nodes[ QuadtreeNode.BOTTOM_RIGHT ] = this.FromStore(
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

      if ( QuadtreeNode.USE_POOL === true ) {

        nodes[QuadtreeNode.TOP_LEFT].Store();
        nodes[ QuadtreeNode.TOP_RIGHT ].Store();
        nodes[ QuadtreeNode.BOTTOM_LEFT ].Store();
        nodes[ QuadtreeNode.BOTTOM_RIGHT ].Store();
      
      }
    
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

  QuadtreeNode.prototype.Store = function() {

    QuadtreeNode.Pool.Store( this );

    // console.log( QuadtreeNode.Pool.objects.length );
  
  };

  Nenkraft.Utils.QuadtreeNode = QuadtreeNode;
  Nenkraft.QuadtreeNode = QuadtreeNode;

  QuadtreeNode.Pool.Flood( function() {}, 1000 );

};


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';

  function CoreEntity2D ( _x, _y ) {

    if ( !( this instanceof CoreEntity2D ) ) return new CoreEntity2D( _x, _y );
    this.transform = Nenkraft.Math.Transform2D( _x, _y );
    this.data = Object.create( null );
  
  }

  CoreEntity2D.prototype = Object.create( null );
  CoreEntity2D.prototype.constructor = CoreEntity2D;
  // Static
  CoreEntity2D.NULL_TRANSFORM = Nenkraft.Math.Transform2D();
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
    return Nenkraft.Vector2D( wt.e, wt.f );
  
  };

  CoreEntity2D.prototype.ComputeBounds = function ( _anchor ) {

    var ax = ( _anchor && _anchor.x ) ? _anchor.x : 0;
    var ay = ( _anchor && _anchor.y ) ? _anchor.y : 0;

    if ( this.bounds === null ) {

      this.bounds = Nenkraft.Geom.AABB2D(
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

/***/ 26:
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

    for ( var i = 0, children = this.children, l = children.length; i < l; ++i ) {

      children[i].Draw( _rc );
    
    }
  
  };

  Container2D.prototype.GLDrawChildren = function ( _gl ) {

    for ( var i = 0, children = this.children, l = children.length; i < l; ++i ) {

      children[i].GLDraw( _gl );
    
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

    throw new Error( 'Cannot update buffer data directly!' );
  
  };

  Container2D.prototype.GetBufferData = function () {

    throw new Error( 'Cannot access buffer data directly!' );
  
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

      _child.parent = null;
      return children.fickleSplice( ix );
    
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

        rChildren.push( children.fickleSplice( ix ) );
        child.parent = null;
      
      }
    
    }

    return rChildren;
  
  };

  Container2D.prototype.SendToFront = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.push( pChildren.fickleSplice( ix ) );
      
      }
    
    }
  
  };

  Container2D.prototype.SendToBack = function () {

    if ( this.parent !== null ) {

      var pChildren = this.parent.children;
      var ix = pChildren.indexOf( this );

      if ( ix !== -1 ) {

        pChildren.unshift( pChildren.fickleSplice( ix ) );
      
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

  Container2D.prototype.GetChildClosestTo = function ( _object, _filter ) {

    var children = this.children, closestChild = null;

    if ( children.length !== 0 ) {

      for ( var i = 0, l = children.length, child, distance = Infinity, tempDistance; i < l; ++i ) {

        child = children[ i ];

        if ( _filter !== undefined ) {

          if ( _filter( child ) === false ) continue;
        
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

  Container2D.prototype.GetChildFurthestFrom = function ( _object, _filter ) {

    var children = this.children, closestChild = null;

    if ( children.length !== 0 ) {

      for ( var i = 0, l = children.length, child, distance = 0, tempDistance; i < l; ++i ) {

        child = children[ i ];

        if ( _filter !== undefined ) {

          if ( _filter( child ) === false ) continue;
        
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

/***/ 27:
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

/***/ 28:
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
  Option.prototype.Execute = function ( _dataStrs, _data, _staticData ) {

    this.handle( _dataStrs, _data, _staticData );
    return this.breakIfExecuted;
  
  };

  Nenkraft.CP.Option = Option;

};


/***/ }),

/***/ 29:
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
    this.dsCopy = [];
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
  Command.prototype.dsCopy = null;
  Command.prototype.register = null;

  // Methods
  Command.prototype.Execute = function ( _dataStrs, _data, _staticData ) {

    this.HandleData( _dataStrs, _data );

    if ( this.HandleOptions( _dataStrs, _data, _staticData ) === true ) {

      this.handle( _dataStrs, _data, _staticData );
    
    }
  
  };

  Command.prototype.AddOption = function ( _id, _handle, _info, _priority, _breakIfExecuted, _optionPrefix ) {

    _optionPrefix = _optionPrefix === undefined ? this.optionPrefix : _optionPrefix;
    if ( _optionPrefix !== null ) _id = _id.replace( /\S+/g, _optionPrefix + '$&' );
    if ( this.options === null ) this.options = [];
    _priority = _priority === undefined ? 0 : _priority;
    var opt = Nenkraft.CP.Option( _id, _handle, _info, _priority, _breakIfExecuted );
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

    var dsCopy = this.dsCopy;
    dsCopy.push.apply( dsCopy, _dataStrs );

    for ( var i = 0, l = dsCopy.length, str, data, ds = this.dataSeparator; i < l; ++i ) {

      str = dsCopy[ i ];
      data = str.split( ds );

      if ( data.length === 2 ) {

        _dataStrs.fickleSplice( i );
        _data[ data[ 0 ] ] = data[ 1 ];
      
      }
    
    }

    dsCopy.length = 0;
  
  };

  Command.prototype.HandleOptions = function ( _dataStrs, _data, _staticData ) {

    if ( _dataStrs.length === 0 ) {

      return this.continueToPrime;
    
    }

    var matchingOptionIds = this.GetAndRemoveMatchingOptionIds( _dataStrs );
    if ( matchingOptionIds === null ) return this.continueToPrime;

    for ( var i = 0, l = matchingOptionIds.length, option; i < l; ++i ) {

      option = this.GetOptionById( matchingOptionIds[ i ] );
      if ( option.Execute( _dataStrs, _data, _staticData ) === true ) return false;
    
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

        optionIds.push( _dataStrs.fickleSplice( ix ) );
      
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

/***/ 3:
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

      if ( !Array.isArray( _data ) !== !Array.isArray( _value ) ) {

        failed = true;

      }  
    
    } else if ( _data === null || _value === null ) {

      if ( _data !== _value ) {

        failed = true;
        
      }
      
    } else if ( typeof _data !== typeof _value ) {

      failed = true;
      
    } else if ( typeof _data === 'number' || typeof _value === 'number' ) {

      if ( isNaN( _data ) || isNaN( _value ) ) {

        if ( _data !== _value ) {

          failed = true;
      
        }
      
      }
    
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
      
    } else if ( typeof _data === typeof _value ) {

      failed = true;
      
    } else if ( typeof _data === 'number' || typeof _value === 'number' ) {

      if ( isNaN( _data ) || isNaN( _value ) ) {

        if ( isNaN( _data ) && isNaN( _value ) ) {

          failed = true;
        
        }
      
      }
    
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

  Assert.Assign = function ( _g ) {

    if ( window && !_g ) {

      _g = window;
    
    } else if ( global && _g ) {

      _g = global;
    
    }

    if ( _g ) {

      _g.IS = Assert.IS;
      _g.IS_NOT = Assert.IS_NOT;
      _g.IS_SAME_TYPE = Assert.IS_SAME_TYPE;
      _g.IS_NOT_SAME_TYPE = Assert.IS_NOT_SAME_TYPE;
      _g.IS_INSTANCE_OF = Assert.IS_INSTANCE_OF;
      _g.IS_NOT_INSTANCE_OF = Assert.IS_NOT_INSTANCE_OF;
      _g.IS_LESS_THAN = Assert.IS_LESS_THAN;
      _g.IS_GREATER_THAN = Assert.IS_GREATER_THAN;
      _g.IS_LESS_THAN_OR_EQUAL = Assert.IS_LESS_THAN_OR_EQUAL;
      _g.IS_GREATER_THAN_OR_EQUAL = Assert.IS_GREATER_THAN_OR_EQUAL;
    
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

/***/ 30:
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
  Register.prototype.AddCommand = function ( _command ) {

    if ( _command.register === null ) {

      this.commands.push( _command );
      _command.register = this;
      return _command;
    
    }
  
  };

  Register.prototype.RemoveCommand = function( _command ) {

    var commands = this.commands;
    var ix = commands.indexOf( _command );

    if ( ix !== -1 ) {

      _command.register = null;
      return commands.fickleSplice( ix );
    
    }
  
  };

  Register.prototype.GetCommand = function ( _id ) {

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

  Register.prototype.Parse = function ( _str, _staticData ) {

    var strs = String( _str ).split( this.splitter );
    var cmdStr = strs.shift();
    var command = this.GetCommand( cmdStr );

    if ( command ) {

      command.Execute( strs, {}, _staticData );
      return null;
    
    }

    return cmdStr;
  
  };

  Nenkraft.CP.Register = Register;

};


/***/ }),

/***/ 4:
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

/***/ 5:
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
  Cache.prototype.items = null;

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

/***/ 6:
/***/ (function(module, exports) {

/**
 * @author Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
 */

module.exports = function ( Nenkraft ) {

  'use strict';
  var Random = Math.random;

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

  Nenkraft.Utils.MinMaxOrValue = function( _options ) {

    if ( _options.min != null && _options.max != null ) {
        
      return RF( _options.min, _options.max );

    } else if ( _options.values != null && _options.values.length > 0 ) {

      return _options.values[RI( 0, _options.values.length - 1 )];

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

/***/ 7:
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

/***/ 8:
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

/***/ 9:
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


/***/ })

/******/ });
//# sourceMappingURL=nkb.js.map