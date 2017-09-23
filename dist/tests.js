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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__( 2 );

__webpack_require__( 3 );
__webpack_require__( 4 );
__webpack_require__( 5 );
__webpack_require__( 6 );
__webpack_require__( 7 );

var tests = [];

var context = __webpack_require__(63);

context.keys().forEach( function ( file ) {
  tests.push( context( file ) );
} );

for ( var i = 0, l = tests.length; i < l; ++i ) {
  tests[ i ]();
}

//if ( DEVELOPMENT && module.hot ) module.hot.accept();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1to8.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4dots.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/glass-of-blueberryjuice.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/raindrop.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/smudge.png";

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aabbcollision.test": 64,
	"./animation.test": 65,
	"./butterflyish.test": 66,
	"./cli.test": 67,
	"./clock.test": 68,
	"./elasticcollision.test": 69,
	"./field.test": 70,
	"./fractree.test": 71,
	"./grabndrag.test": 72,
	"./grid.test": 73,
	"./magnet.test": 74,
	"./motion.test": 75,
	"./nightsky.test": 76,
	"./particles.test": 77,
	"./performance.test": 78,
	"./platformer.test": 79,
	"./playground.test": 80,
	"./quadtree.test": 81,
	"./rain.test": 82,
	"./sprite.test": 83,
	"./themask.test": 84
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 63;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'AABBCollision' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '100px';
    c.style.left = '100px';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.scale.Set( 1, 1 );
    stage.mouse.scale.SetV( stage.scale );


    var text = new nk.Text( 0, 0, 'Collide them!' );

    var aabbg1 = new nk.Graphic2D( 300, 100, new nk.Path.AABB2D( 0, 0, 50, 50 ) );
    var aabbg2 = new nk.Graphic2D( 400, 400, new nk.Path.AABB2D( 0, 0, 400, 100 ) );

    var lineC = new nk.Graphic2D( 0, 0, new nk.Path.Line2D() );

    stage.AddChild( aabbg1 );
    stage.AddChild( aabbg2 );

    stage.AddChild( text );

    stage.AddChild( lineC );

    var dragger = null;
    var test = null;

    var obj1 = {
      shape: aabbg1.path,
      relative: aabbg1.position,
      anchor: new nk.Vector2D()
    };

    var obj2 = {
      shape: aabbg2.path,
      relative: aabbg2.position,
      anchor: new nk.Vector2D()
    };

    lineC.path.s.SetV( aabbg1.position );
    lineC.path.e.SetV( aabbg2.position );

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;

        var mtv = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide( obj1, obj2 );

        lineC.path.s.SetV( aabbg1.position );
        lineC.path.e.SetV( aabbg2.position );

        lineC.SendToFront();

        if ( mtv !== null ) {
          text.text = 'Well done!';
          aabbg1.position.AddV( mtv );
        } else text.text = 'Collide them!';
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );
    stage.mouse.onLeave.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );


    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Animation' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite = null;
    var spriteRef = null;

    var timer = new nk.Time.Timer();

    var imageCache = new nk.Load.TextureLoader();
    imageCache.onComplete.Add( function ( _event ) {

      spriteRef = new nk.Sprite( 0, -200, imageCache.Get( '1to8' ) );
      spriteRef.anchor.Set( 0.5 );

      sprite = new nk.Sprite( 0, 0, _event.data.cache[ 0 ].image );
      sprite.anchor.Set( 0.5 );
      sprite.scale.Set( 5.0 );
      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.AddAnimation( 'test', 20 );
      animation.GenerateFrames( 64, 64, 512, 64, 8, {
        '5': 120
      } );
      animation.reverse = true;
      animation.onEnd.Add( function () {
        stage.ticker.Stop();
      }, animation );
      ac.PlayAnimation( 'test', 7 );
      stage.AddChildren( sprite, spriteRef );

      timer.onStop.Add( function () {
        sprite.animationController.StopCurrentAnimation();
      } );

      //timer.Start( 400 );

      stage.onProcess.Add( function () {
        sprite.animationController.Process();
        timer.Process();
      }, stage );
    } );
    imageCache.Load( [
      { id: '1to8', src: './images/1to8.png' },
    ] );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Butterflyish' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    var color = new nk.Color( 0, 255, 0 );
    color.ConvertToHSLA();

    var path = new nk.Path.Polygon2D();
    //path.style.shadow.applied = true;
    nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 100, 50, 8 );

    var bfly = new nk.Path.Polygon2D();
    //bfly.style.shadow.applied = true;
    bfly.style.stroke.lineWidth = 0.5;
    bfly.style.fill.applied = false;
    nk.Geom.Polygon2D.Construct.Butterfly( bfly, 0, 0, 150, 40 );

    var child = new nk.Graphic2D( 0, -HH * 0.5, path );
    var child_ = new nk.Graphic2D( 0, 0, bfly );

    child.AddChild( child_ );

    child.visible = false;

    container.AddChild( child );

    var angle = 0;
    var speed = 3;


    var text = new nk.Text( 0, 0, 'Stop trying to hit me and hit me!' );
    text.style.text.align = nk.Style.TEXT_ALIGN.CENTER;
    text.style.text.baseline = nk.Style.TEXT_BASELINE.MIDDLE;
    text.style.text.font = '56px Arial';
    text.style.text.strokeColor = '#000';

    container.AddChild( text );

    function Update () {

      color.IncreaseChannel( 0, 0.1 );

      bfly.style.stroke.color = color.value;
      text.style.text.fillColor = color.value;

      var a = nk.Math.DTR( angle );

      child.x += Math.cos( a ) * speed;
      child.y += Math.sin( a ) * speed;

      text.y += Math.sin( a ) * speed;

      child.rotation = a;

      angle++;

      rc.setTransform( 1, 0, 0, 1, 0, 0 );

      rc.fillStyle = 'rgba(255, 255, 255, 0.5)';
      rc.fillRect( 0, 0, W, H );

      container.Draw( rc );

      //requestAnimationFrame( Update );
    }

    setInterval( Update, 1 );

    var a = {
      a: {

      },
      b: {
        b: {

        },
        c: {
          d: {
            e: {
              f: {
                g: {
                  h: {
                    i: {
                      j: {
                        k: {
                          l: {
                            m: {
                              n: {
                                o: {
                                  p: {
                                    q: 10
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    nk.Utils.Nested( a, 'b.c.d.e.f..g.h.i.j.k.l.m.n.o.p.q' );
    nk.Utils.Nested( a, 'b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q', true, 20 );
    nk.Utils.Nested( a, 'b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q' );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground CLI' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var CE = {
      UNKNOWN_COMMAND: '<span style="color: red;">Unknown command: DATA</span>',
      OPTION_REQUIRED: '<span style="color: lightblue;">Option required for command: DATA</span>',
      DATA_MISSING: '<span style="color: pink;">Data required: DATA</span>',
    };

    var css = document.createElement( 'style' );
    css.innerHTML = [
      'commandbox {',
      ' width: 500px;',
      ' height: auto;',
      ' min-height: 50%;',
      ' max-height: 100%;',
      ' position: absolute;',
      ' top: 0;',
      ' left: 0;',
      ' overflow-y: scroll;',
      ' background-color: black;',
      ' cursor: default;',
      '',
      '}',
      '#input {',
      ' width: 98%;',
      ' height: 18px;',
      ' border: none;',
      ' outline: none;',
      ' position: relative;',
      ' border-bottom: 1px solid black;',
      ' font-family: Arial;',
      ' padding-left: 2%;',
      ' font-size: 13px;',
      ' font-weight: 300;',
      ' background-color: black;',
      ' color: white;',
      ' cursor: default;',
      '',
      '}',
      '.paragraph {',
      ' margin: 0;',
      ' padding: 0;',
      ' font-family: Arial;',
      ' color: white;',
      ' padding-left: 2%;',
      ' font-size: 13px;',
      ' font-weight: 300;',
      '',
      '}',
      ''
    ].join( '' );
    document.head.appendChild( css );

    var cb = document.createElement( 'commandbox' );

    var ci = document.createElement( 'input' );
    ci.setAttribute( 'type', 'text' );
    ci.setAttribute( 'id', 'input' );

    cb.appendChild( ci );

    document.body.appendChild( cb );

    cb.addEventListener( 'click', onCommandboxClick );
    ci.addEventListener( 'keydown', onInputKeyDown );



    ////////////////


    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth - 500 );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = '500px';

    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var cIndex = -1;
    var cHistory = [];

    var stage = new nk.Stage2D( c, HW, HH, false );

    var circleEntity = new nk.Graphic2D( 0, 0, new nk.Path.Circle( 0, 0, 50 ) );
    stage.AddChild( circleEntity );

    var mm = new nk.MotionManager( circleEntity );
    var moveX = mm.Create( 'x', 'x', 0, 60 );
    var moveY = mm.Create( 'y', 'y', 0, 60 );

    var register = new nk.CP.Register();
    nk.CP.Command.OPTION_PREFIX = '--';
    register.Add( new nk.CP.Command(
      'commands',
      function () {
        register.commands.forEach( function ( command ) {
          insertParagraph( command.id[ 0 ] );
        } );
      }
    ) );
    register.Add( new nk.CP.Command(
      'clear',
      function () {
        cb.innerHTML = '';
        cb.appendChild( ci );
        ci.focus();
      },
      'clear the screen'
    ) );
    register.Add( new nk.CP.Command(
      'moveto',
      function () {
        var data = arguments[ 1 ];
        var x = Number( data.x );
        var y = Number( data.y );
        moveX.value = x;
        moveY.value = y;
        mm.StartMultiple( 'x y' );
      },
      'move to x y'
    ) );

    function insertParagraph ( _str ) {
      var p = document.createElement( 'p' );
      p.className = 'paragraph';
      p.innerHTML = _str;
      cb.insertBefore( p, ci );
    }

    function onInputKeyDown ( event ) {
      var stop = false;
      if ( event.keyCode === 13 ) {
        stop = true;
        if ( ci.value !== '' ) {
          var r = register.Parse( ci.value );
          cHistory.push( ci.value );
          cIndex = cHistory.length - 1;
          if ( r !== null ) {
            insertParagraph( CE.UNKNOWN_COMMAND.replace( /DATA/g, r ) );
          }
        }
        ci.value = '';
        cb.scrollTop = cb.scrollHeight;
      } else if ( event.keyCode === 38 ) {
        if ( cIndex > -1 ) {
          stop = true;
          ci.value = cHistory[ cIndex-- ];
        }
      } else if ( event.keyCode === 40 ) {
        if ( cIndex < cHistory.length - 1 ) {
          stop = true;
          ci.value = cHistory[ ++cIndex ];
        }
      }
      if ( stop === true ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    function onCommandboxClick ( event ) {
      ci.focus();
    }

    stage.onProcess.Add( function () {
      mm.Process();
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Clock' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );

    var clockPoints = new nk.Geom.Polygon2D();
    nk.Geom.Polygon2D.Construct.Cyclic( clockPoints, 0, 0, 300, 12 );
    clockPoints.Rotate( nk.Math.RADIAN * -90, 0.5, 0.5, true );

    stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Circle( 0, 0, 300 ) ) );

    var millisecondHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 50, 0 ) ) );
    var secondHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 300, 0 ) ) );
    var minuteHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 250, 0 ) ) );
    var hourHand = stage.AddChild( new nk.Graphic2D( 0, 0, new nk.Path.Line2D( 0, 0, 150, 0 ) ) );

    var i = clockPoints.vertices.length;
    while ( i-- ) {
      var p = stage.AddChild( new nk.Text(
        clockPoints.vertices[ i ].x,
        clockPoints.vertices[ i ].y,
        i === 0 ? 12 : i
      ) );
      p.style.text.baseline = nk.Style.TEXT_BASELINE.MIDDLE;
      p.style.text.align = nk.Style.TEXT_ALIGN.CENTER;
      p.style.text.fontSize = 59;
      p.style.text.fontFamily = 'Comic Sans MS, Comic Sans MS5, cursive';
      p.style.text.strokeColor = '#0F0';
      p.style.text.fillColor = '#000';
      p.style.text.lineWidth = 2;
      p.style.text.ConcatFont();
    }

    stage.onProcess.Add( function () {
      var date = new Date();
      var milliseconds = date.getMilliseconds();
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours = date.getHours();
      millisecondHand.path.e.RotateAroundV( millisecondHand.path.s, nk.Math.DTR(( milliseconds / 1000 * 360 ) - 90 ) - millisecondHand.path.e.GetAngle() );
      secondHand.path.e.RotateAroundV( secondHand.path.s, nk.Math.DTR(( seconds * 6 ) - 90 ) - secondHand.path.e.GetAngle() );
      minuteHand.path.e.RotateAroundV( minuteHand.path.s, nk.Math.DTR(( minutes * 6 ) - 90 ) - minuteHand.path.e.GetAngle() );
      hourHand.path.e.RotateAroundV( hourHand.path.s, nk.Math.DTR(( ( 60 * hours + minutes ) * 0.5 ) - 90 ) - hourHand.path.e.GetAngle() );
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'ElasticCollision' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.backgroundColor = '#FFF';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0, true );
    stage.ComputeBounds();
    stage.backgroundColor = 'rgba(255,255,255,0)';
    //stage.clear = false;
    stage.ticker.StartAF();

    var fps = new nk.Text( 0, 0, '' );
    fps.style.text.fillColor = '#000';
    fps.style.text.strokeColor = '#000';
    fps.style.text.font = '60px Arial';

    var colliders = [];
    var bounds = new nk.AABB2D();
    bounds.SetC( stage.bounds );
    var root = new nk.QuadtreeNode( bounds, 0, 8, 4 );
    var objs = [];

    function Collider () {
      var mass = nk.Utils.RandomInteger( 2, 8 );
      var p = new nk.Path.Circle( 0, 0, mass );
      p.style.fill.applied = false;
      p.style.stroke.color = new nk.Color( nk.Utils.RandomInteger( 100, 255 ), 0, nk.Utils.RandomInteger( 100, 255 ), 1 ).value;
      p.style.stroke.lineWidth = mass / 5;
      var g = new nk.Graphic2D( nk.Utils.RandomInteger( 0, W ), nk.Utils.RandomInteger( 0, H ), p );
      g.data.mass = mass;
      g.data.body = {
        relative: g.position,
        anchor: new nk.Vector2D(),
        shape: g.path,
        mass: mass,
        velocity: new nk.Vector2D( nk.Utils.RandomInteger( -5, 5 ), nk.Utils.RandomInteger( -5, 5 ) )
      };
      g.ComputeBounds();
      colliders.push( g );
      stage.AddChild( g );
      objs.push( g.bounds );
    }

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsCircle.Relative.ElasticResponse;

    var gravity = new nk.Vector2D( 0, 0.098 );

    function Process () {
      var i = 0, j, l = colliders.length, collider, collidee, body1, body2, vel, result;
      root.Dump();
      objs.forEach( function ( obj ) {
        root.Add( obj );
      } );
      for ( i; i < l; ++i ) {
        collider = colliders[ i ];
        body1 = collider.data.body;
        vel = body1.velocity;
        vel.AddV( gravity );
        collider.position.AddV( vel );
        if ( collider.x + collider.path.radius >= W ) {
          vel.x = -Math.abs( vel.x );
        } else if ( collider.x - collider.path.radius <= 0 ) {
          vel.x = Math.abs( vel.x );
        }
        if ( collider.y + collider.path.radius >= H ) {
          vel.y = -Math.abs( vel.y );

        } else if ( collider.y - collider.path.radius <= 0 ) {
          vel.y = Math.abs( vel.y );
        }

        var convergence = root.Converge( collider.bounds );

        for ( j = 0; j < convergence.length; ++j ) {
          collidee = convergence[ j ].belongsTo;
          body2 = collidee.data.body;
          if ( collidee !== collider ) {
            result = Collide( body1, body2 );
            if ( result ) {
              Response( body1, body2, result );
            }
          }
        }
        collider.ComputeBounds();
      }
      fps.text = Math.round( stage.ticker.GetTPS() );
    }

    stage.onProcess.Add( Process, window );

    for ( var i = 100; i--; ) {
      Collider();
    }

    stage.AddChild( fps );


    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Field' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.backgroundColor = 'rgba(0,0,0,0.1)';
    //stage.fill = false;

    var orig = new nk.Plaingraphic2D( 0, 0, new nk.Path.Circle( 0, 0, 200 ) );
    orig.path.style.fill.applied = false;
    stage.AddChild( orig );

    var objs = [];

    var mouseDown = false;

    stage.onProcess.Add( function () {
      for ( var i = 0, l = objs.length; i < l; ++i ) {
        if ( !objs[ i ] ) break;
        nk.Math.Attract( objs[ i ].position, orig.position, objs[ i ].data.vel, orig.path.radius * 2, 0.1 );
        objs[ i ].position.AddV( objs[ i ].data.vel );
        //objs[ i ].data.color.IncreaseChannel( 0, 1 );
        //objs[ i ].path.style.fill.color = objs[ i ].data.color.value;
        if ( !--objs[ i ].data.lifeSpan ) {
          objs[ i ].Destroy();
          objs.splice( i, 1 );
        }
      }

      if ( mouseDown ) {
        var i = 2;
        while ( --i ) {
          MakeObj( stage.mouse.position.x, stage.mouse.position.y );
        }
      }

    }, stage );


    function MakeObj ( _x, _y ) {
      var path = new nk.Path.Polygon2D();
      nk.Geom.Polygon2D.Construct.Supershape( path, 0, 0, nk.Utils.RandomInteger( 5, 30 ), 20, nk.Utils.RandomFloat( 0, 20 ), nk.Utils.RandomFloat( 0, 3 ), nk.Utils.RandomFloat( 0, 3 ), nk.Utils.RandomFloat( 0, 3 ) );
      path.Rotate( nk.Utils.RandomFloat( -nk.Math.PII, nk.Math.PII ), 0.5, 0.5, true );
      var obj = new nk.Plaingraphic2D( _x, _y, path );
      obj.data.vel = new nk.Vector2D( nk.Utils.RandomFloat( -4, 4 ), nk.Utils.RandomFloat( -4, 4 ) );
      obj.data.lifeSpan = 600;
      //obj.data.color = new nk.Color( nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ) );
      //obj.data.color.ConvertToHSLA();
      stage.AddChild( obj );
      objs.push( obj );
    };

    stage.mouse.onDown.Add( function () {
      mouseDown = true;
    } );
    stage.mouse.onUp.Add( function () {
      mouseDown = false;
    } );



    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Fractree' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var l = 200;

    var stage = new nk.Stage2D( c, HW, H );
    stage.clear = false;
    var bgColor = new nk.Color();
    bgColor.SetHex( '#00000033' );
    stage.backgroundColor = bgColor.value;
    stage.scale.Set( 1, -1 );

    function Branch ( start, end ) {
      if ( !( this instanceof Branch ) ) return new Branch( start, end );
      nk.Graphic2D.call( this, 0, 0, new nk.Path.Line2D( start, end ) );
      this.path.style.stroke.color = new nk.Color( nk.Utils.RandomInteger( this.w, 200 ), nk.Utils.RandomInteger( this.w, 255 ), nk.Utils.RandomInteger( 0, 20 ), 1 ).value;
      this.path.style.stroke.lineWidth = this.w / 12;
      stage.AddChild( this );
      this.x = nk.Utils.RandomFloat( -HW, HW );
      this.y = nk.Utils.RandomFloat( 0, H );
      this.rotation = nk.Utils.RandomInteger( 0, nk.Math.PII );
      var mm = this.data.motionManager = new nk.MotionManager( this );
      mm.Create( 'moveX', 'x', 0, nk.Utils.RandomInteger( 100, 400 ), 'QuadOut' );
      mm.Create( 'moveY', 'y', 0, nk.Utils.RandomInteger( 100, 400 ), 'QuadIn' );
      mm.Create( 'rotate', 'rotation', 0, nk.Utils.RandomInteger( 100, 600 ), 'QuadInOut' );
      mm.StartMultiple( 'moveX moveY rotate' );
      if ( this.w > 12 ) {
        this.Grow();
      }
    }
    Branch.prototype = Object.create( nk.Graphic2D.prototype );
    Branch.prototype.constructor = Branch;
    Branch.prototype.Grow = function () {
      var newEndL = this.path.e.SubtractVC( this.path.s );
      var newEndR = newEndL.Copy();
      newEndL.Rotate( nk.Math.RADIAN * 20 + nk.Utils.RandomFloat( -nk.Math.RADIAN * 20, nk.Math.RADIAN * 20 ) );
      newEndR.Rotate( -nk.Math.RADIAN * 20 + nk.Utils.RandomFloat( -nk.Math.RADIAN * 20, nk.Math.RADIAN * 20 ) );
      newEndL.Multiply( 0.67, 0.67 );
      newEndR.Multiply( 0.67, 0.67 );
      newEndL.AddV( this.path.e );
      newEndR.AddV( this.path.e );
      Branch( this.path.e, newEndL );
      Branch( this.path.e, newEndR );
    };

    Branch( new nk.Vector2D( 0, 0 ), new nk.Vector2D( 0, l ) );

    var timer = new nk.Timer( 1000 );
    timer.onStop.Add( function () {
      stage.ticker.Stop();
    } );
    timer.Start();


    stage.onProcess.Add( function () {
      stage.children.forEach( function ( child ) {
        child.data.motionManager.Process();
      } );
      timer.Process();
    } );


    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'GrabnDrag' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c );

    var text = new nk.Text( 100, 100, 'Grab and drag' );

    var graphicCircle = new nk.Graphic2D( 350, 150, new nk.Path.Circle( 0, 0, 100 ) );
    var graphicRectangle = new nk.Graphic2D( 450, 200, new nk.Path.AABB2D( -100, -100, 100, 100 ) );

    var dragger = null;

    stage.AddChild( text );
    stage.AddChild( graphicCircle );
    stage.AddChild( graphicRectangle );

    var t = 10;
    while ( --t ) {
      stage.AddChild( new nk.Graphic2D( HW, HH, new nk.Path.AABB2D( -100, -100, 100, 100 ) ) );
    }

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );


    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Grid' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.backgroundColor = '#000';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var ratio = W / H;

    var stage = new nk.Stage2D( c, 0, 0 );
    var container = new nk.Container2D();
    stage.AddChild( container );

    var i = 0;

    var mx = W / 30;
    var my = H / 30;

    var points = nk.Math.SquareGrid( W, H, mx, my, nk.Vector2D );

    console.log( points );

    i = points.length;
    while ( i-- ) {
      container.AddChild( new nk.Graphic2D( points[ i ].x, points[ i ].y, new nk.Path.AABB2D( 0, 0, mx, my ) ) );
    }

    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position.DivideVC( container.scale );
      for ( var i = container.children.length; i--; ) {
        if ( container.children[ i ].IntersectsPoint( p ) ) {
          container.children[ i ].Destroy();
          break;
        }
      }
    }, stage );
    stage.mouse.onWheel.Add( function ( _event ) {
      if ( _event.data.native.deltaY < 0 ) {
        container.scale.Add( 0.1, 0.1 );
      } else {
        container.scale.Subtract( 0.1, 0.1 );
      }
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Magnet' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );

    var magnet = new nk.Plaingraphic2D( 0, 0, new nk.Path.AABB2D( -50, -50, 50, 50 ) );
    console.log( magnet.width, magnet.height );
    magnet.data.pole = new nk.Vector2D( 40, 0 );
    magnet.data.radius = 15;
    magnet.data.dragging = false;
    magnet.data.body = {
      shape: magnet.path,
      relative: magnet.position,
      anchor: new nk.Vector2D( 0, 0 )
    };

    var particles = [];

    var Collide = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide;

    stage.AddChildren( magnet );

    stage.onProcess.Add( function () {
      for ( var i = 0, l = particles.length; i < l; ++i ) {
        var mtv = Collide( magnet.data.body, particles[ i ].data.body );
        if ( mtv ) particles[ i ].position.SubtractV( mtv );
      }
    } );

    stage.mouse.onDown.Add( function ( _event ) {
      if ( magnet.IntersectsPoint( _event.data.position ) ) {
        magnet.data.dragging = true;
        _event.stopPropagation = true;
      }
    } );
    stage.mouse.onMove.Add( function () {
      if ( magnet.data.dragging ) {
        magnet.position.SetV( stage.mouse.position );
      }
    } );
    stage.mouse.onUp.Add( function () {
      magnet.data.dragging = false;
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Motion' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );

    var motObj = new nk.Sprite( 0, 0 );
    motObj.anchor.Set( 0.5 );
    motObj.scale.Set( 0, 1 );
    motObj.AttachTo( stage );

    var mm = new nk.MotionManager( motObj );
    var xM = mm.Create( 'x', 'x' );
    var yM = mm.Create( 'y', 'y' );
    var sxM = mm.Create( 'sx', 'scale.x', 1, 10 );
    var syM = mm.Create( 'sy', 'scale.y', 1, 10 );

    stage.mouse.onUp.Add( function ( _event ) {
      if ( xM.running ) xM.Stop();
      if ( yM.running ) yM.Stop();
      mm.ResetMultiple( 'sx sy' );
      xM.Reconfigure( undefined, _event.data.position.x, 60 );
      yM.Reconfigure( undefined, _event.data.position.y, 60 );

      mm.StartMultiple( 'x y sx sy' );

    }, stage );

    stage.onProcess.Add( function () {
      mm.Process();
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Nightsky' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var staticStars = [];


    var imageCache = new nk.Load.TextureLoader( [ {
      id: 'butterfly',
      src: nk.Utils.GenerateSimpleBase64Png( Butterfly )
    }, {
      id: 'staticStar',
      src: nk.Utils.GenerateSimpleBase64Png( StaticStar )
    }] );
    imageCache.onComplete.Add( function () {
      Go();
    } );

    function Go () {
      CreateSprites( { x: -HW, y: HW }, { x: -HH, y: HH }, 'staticStar', W / H * 500, staticStars, stage, 0.01 );
      stage.onProcess.Add( function () {
        for ( var i = 0, l = staticStars.length, star; i < l; ++i ) {
          star = staticStars[ i ];
          star.position.AddV( star.data.velocity );
          star.data.velocity.Rotate( nk.Math.DTR( star.data.torque ) );
        }
      }, stage );
    }

    function CreateSprites ( xv, yv, img, am, store, parent, scale ) {
      for ( var i = 0; i < am; ++i ) {
        var x = nk.Utils.RandomInteger( xv.x, xv.y );
        var y = nk.Utils.RandomInteger( yv.x, yv.y );
        var sprite = new nk.Sprite( x, y, imageCache.Get( img ) );
        sprite.anchor.Set( 0.5 );
        sprite.scale.Set( scale );
        sprite.rotation = nk.Utils.RandomFloat( 0, nk.Math.PII );
        sprite.data.velocity = new nk.Vector2D( x / 500, y / 500 );
        sprite.data.torque = ( x + y ) / 500 * nk.Utils.RandomInteger( -1, 1 );
        store.push( sprite );
        parent.AddChild( sprite );
      }
      console.log( i );
    }


    function Butterfly () {
      var path = new nk.Path.Polygon2D();
      path.style.fill.color = '#FFF';
      path.style.stroke.color = '#000';
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Butterfly( path, 0, 0, 4000, 50 );
      //To get the difference in x,y
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D(( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    }
    function StaticStar () {
      var path = new nk.Path.Polygon2D();
      path.style.fill.color = '#FFF';
      path.style.stroke.color = '#000';
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 800, 400, 5 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D(( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    }

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Particles' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.fill = false;

    imageCache = new nk.Load.TextureLoader( [
      {
        id: 'particle',
        src: nk.Utils.GenerateSimpleBase64Png( function () {
          var path = new nk.Path.Circle( 20, 20, 20 );
          path.style.fill.color = 'rgba(0, 0, 0, 0.01)';
          path.style.stroke.color = 'rgba(255, 200, 50, 0.1)';
          var t = new nk.Graphic2D( 0, 0, path );
          return t;
        } )
      }
    ] );
    imageCache.onComplete.Add( function () {

      var i = 150;
      while ( i-- ) {
        var child = stage.AddChild( new nk.Plainsprite( 0, 0, imageCache.Get( 'particle' ) ) );
        child.data.velocity = new nk.Vector2D( nk.Utils.RandomFloat( -2, 2 ), nk.Utils.RandomFloat( -2, 2 ) );
      }

      var totalTime = 400;

      var timer = new nk.Timer();
      timer.Start( totalTime );
      timer.onStop.Add( function () {
        stage.ticker.Stop();
      } );

      stage.onProcess.Add( function () {
        var i = this.children.length, child;
        while ( i-- ) {
          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.Rotate( nk.Math.RADIAN * nk.Utils.RandomFloat( -12, 12 ) );
          child.scale.Set(( totalTime - timer.time ) / totalTime );
        }
        timer.Process();
      }, stage );
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Performance' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    var texture = null;

    function CreateTexture () {
      var path = new nk.Path.Polygon2D();
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Cyclic( path, 0, 0, 30, 12 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    }

    var ticker = new nk.Ticker( Update, 1000, true );
    ticker.Start();

    var numTimes = 20;
    var hold = 20;
    var holdCounter = 0;
    var fps = 24;

    var am = 35;

    var childrenMDC = [];

    var timer = new nk.Timer();
    timer.onStop.Add( function () {
      var i = am;
      am = am < 3 ? 3 : am--;
      while ( i-- ) {
        var sprite = new nk.Sprite( Math.random() * W - HW, Math.random() * H - HH, texture );
        sprite.transformAutomaticUpdate = false;
        container.AddChild( sprite );
      }

      if ( ticker.GetTPS() > fps || holdCounter++ < hold ) {
        this.Start( 1 );
      }
      else {
        var numChildren = container.children.length;
        console.log( numChildren, ticker.GetTPS() );
        container.Dump();
        holdCounter = 0;
        childrenMDC.push( numChildren );
        numTimes--;
        if ( numTimes > 0 ) {
          timer.Start( 120 );
        } else {
          childrenMDC.sort( function ( a, b ) {
            return a - b;
          } );
          console.log( childrenMDC, '\nMIN: ' + childrenMDC[ 0 ], 'MED: ' + childrenMDC[ Math.round( childrenMDC.length / 2 ) ], 'MAX: ' + childrenMDC[ childrenMDC.length - 1 ] );
        }
      }
    }, timer );

    var imageCache = new nk.Load.TextureLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture )
    }] );
    imageCache.onComplete.Add( function () {
      texture = imageCache.Get( 'tex' );
      timer.Start( 120 );
    } );

    function Update () {
      rc.setTransform( 1, 0, 0, 1, 0, 0 );
      rc.fillStyle = 'rgba(0, 0, 0, 1)';
      rc.fillRect( 0, 0, W, H );
      container.Draw( rc );
      timer.Process();
    }

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Platformer' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH, true );

    var imageCache = new nk.Load.TextureLoader( [ {
      id: 'character',
      src: nk.Utils.GenerateSimpleBase64Png( function () {
        var path = new nk.Path.AABB2D( 0, 0, 20, 20 );
        path.style.fill.applied = false;
        path.style.stroke.color = '#0F0';
        path.style.stroke.lineWidth = 3;
        var t = new nk.Graphic2D( 0, 0, path );
        return t;
      } )
    }, {
      id: 'platform',
      src: nk.Utils.GenerateSimpleBase64Png( function () {
        var path = new nk.Path.AABB2D( 0, 0, 100, 20 );
        path.style.fill.applied = false;
        path.style.stroke.lineWidth = 5;
        var t = new nk.Graphic2D( 0, 0, path );
        return t;
      } )
    }] );
    imageCache.onComplete.Add( function () {
      Start();
    } );

    var platforms = [];
    var character = null;

    function Start () {
      InitCharacter();
      InitPlatforms();
      stage.ticker.SetDesiredRate( 60 );
      stage.ticker.Start();
    }

    function Process () {
      if ( character.position.x > HW || character.position.x < -HW ) {
        character.position.x = 0;
      }
      if ( character.position.y > HH || character.position.y < -HH ) {
        character.position.y = 0;
      }
      if ( character.data.force.velocity.y > 0 ) {
        character.data.state.falling = true;
        character.data.state.onGround = false
        character.data.state.ascending = false;
      } else if ( character.data.force.velocity.y < 0 ) {
        character.data.state.falling = false;
        character.data.state.onGround = false;
        character.data.state.ascending = true;
      }
      character.position.AddV( character.data.force.velocity );
      character.data.force.velocity.AddV( character.data.force.gravity );
      if ( character.data.move.left === true ) {
        character.position.SubtractV( character.data.force.move );
        character.data.state.moving = true;
      } else if ( character.data.move.right === true ) {
        character.position.AddV( character.data.force.move );
        character.data.state.moving = true;
      } else {
        character.data.state.moving = false;
      }
      if ( character.data.move.jump === true && character.data.state.onGround === true ) {
        character.data.force.velocity.AddV( character.data.force.jump );
      }
      for ( var i = 0, l = platforms.length; i < l; ++i ) {
        var mtv = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide(
          character.data.collisionData,
          platforms[ i ].data.collisionData
        );
        if ( mtv ) {
          if ( mtv.y < 0 && character.data.force.velocity.y > 0 ) {
            character.data.force.velocity.y = 0;
            character.data.state.onGround = true;
            character.data.state.falling = false;
            character.data.state.ascending = false;
          } else if ( mtv.y > 0 && character.data.force.velocity.y < 0 ) {
            character.data.force.velocity.y = 0;
          }
          character.position.AddV( mtv );
        }
      }
    }

    function InitCharacter () {
      character = new nk.Sprite( 0, 0, imageCache.Get( 'character' ) );
      character.anchor.Set( 0.5 );
      character.data.move = {
        left: false,
        right: false,
        jump: false
      };
      character.data.force = {
        move: new nk.Vector2D( 2, 0 ),
        jump: new nk.Vector2D( 0, -10 ),
        gravity: new nk.Vector2D( 0, 0.1982 ),
        velocity: new nk.Vector2D()
      };
      character.data.state = {
        onGround: false,
        moving: false,
        falling: false,
        ascending: false
      };
      character.data.collisionData = {
        shape: character.shape,
        relative: character.position,
        anchor: character.anchor
      };
      stage.AddChild( character );

      stage.onProcess.Add( Process, stage );
      stage.keyboard.onDown.Add( function ( _event ) {
        if ( _event.data.key === 'a' ) {
          character.data.move.left = true;
          character.data.move.right = false;
        } else if ( _event.data.key === 'd' ) {
          character.data.move.right = true;
          character.data.move.false = false;
        }
        if ( _event.data.key === 'w' ) {
          character.data.move.jump = true;
        }
      } );
      stage.keyboard.onUp.Add( function ( _event ) {
        if ( _event.data.key === 'a' ) {
          character.data.move.left = false;
        } else if ( _event.data.key === 'd' ) {
          character.data.move.right = false;
        }
        if ( _event.data.key === 'w' ) {
          character.data.move.jump = false;
        }
      } );
    }

    function InitPlatforms () {
      var i = 100;
      while ( i-- ) {
        var platform = new nk.Sprite( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ), imageCache.Get( 'platform' ) );
        platform.data.collisionData = {
          shape: platform.shape,
          relative: platform.position,
          anchor: platform.anchor
        };
        platforms.push( platform );
        stage.AddChild( platform );
      }
    }



    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );

    var u = new nk.Vector2D( 400, -400 );
    var v = new nk.Vector2D( 2000, 0 );

    var p = u.ProjectOnto( v );

    stage.AddChild( new nk.Plaingraphic2D( 0, 0, new nk.Path.Line2D( 0, 0, u.x, u.y ) ) );
    stage.AddChild( new nk.Plaingraphic2D( 0, 0, new nk.Path.Line2D( 0, 0, v.x, v.y ) ) );

    stage.AddChild( new nk.Plaingraphic2D( 0, 0, new nk.Path.Line2D( 0, 0, p.x, p.y ) ) ).path.style.stroke.lineWidth = 10;

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Quadtree' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.ComputeBounds();
    stage.clear = false;
    stage.fill = true;
    stage.backgroundColor = 'rgba(0,0,0,0.3)';

    var bounds = new nk.AABB2D();
    bounds.SetC( stage.bounds );
    var root = new nk.QuadtreeNode( bounds, 0, 8, 3 );

    var objs = [];
    var nodes = [];


    stage.onProcess.Add( function () {
      nodes.forEach( function ( element ) {
        nk.Debug.Draw.AABB2D( rc, element.aabb );
      } );
    } );
    stage.mouse.onUp.Add( function ( event ) {
      var obj = new nk.Graphic2D( event.data.position.x, event.data.position.y, new nk.Path.AABB2D( 0, 0, 10, 10 ) );
      obj.ComputeBounds( obj.anchor );
      stage.AddChild( obj );
      objs.push( obj );
      root.Dump();
      objs.forEach( function ( element ) {
        root.Add( element.bounds );
      } );
      nodes = root.ConcatNodes();
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Rain' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var widthByHeight = W / H;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.fill = true;
    stage.backgroundColor = 'rgba(0,0,0,0.3)';

    var gravity = new nk.Vector2D( 0, 0.0982 );
    var wind = new nk.Vector2D();

    var DropPool = new nk.Pool( nk.Plainsprite );

    imageCache = new nk.Load.TextureLoader( [
      {
        id: 'raindrop',
        src: './images/raindrop.png'
      }
    ] );
    imageCache.onComplete.Add( function () {

      DropPool.Flood( function ( _sprite ) {
        _sprite.SetTexture( imageCache.Get( 'raindrop' ) );
        _sprite.data.velocity = new nk.Vector2D();
      }, 1000 );

      stage.onProcess.Add( function () {
        var i = this.children.length, child;
        while ( i-- ) {
          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.AddV( gravity );
          child.data.velocity.Add( wind.x / child.data.mass, wind.y / child.data.mass );
          if ( !child.data.lifespan-- ) {
            DropPool.Store( child.Detach() );
          }
        }
        wind.Set( nk.Utils.RandomFloat( -0.1, 0.1 ), 0 );
        AddDrop();
        AddDrop();
        AddDrop();
        AddDrop();
      }, stage );
    } );

    function AddDrop () {
      var child = DropPool.Retrieve();
      var scale = nk.Utils.RandomFloat( 0.5, 1 );
      child.position.Set( nk.Utils.RandomFloat( -HW, HW ), -HH - child.height );
      child.scale.Set( scale );
      child.data.mass = scale;
      child.data.velocity.Set( 0 );
      child.data.lifespan = 240;
      child.AttachTo( stage );
    }

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Sprite' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite1 = null;
    var sprite2 = null;
    var sprite3 = null;
    var sprite4 = null;
    var sprite5 = null;

    var imageCache = new nk.Load.TextureLoader();
    imageCache.onComplete.Add( function ( _event ) {
      console.log( _event.target, _event.data, 'complete' );
      sprite1 = new nk.Sprite( 0, 0, imageCache.Get( '4dots' ) );
      sprite1.anchor.Set( 0.5 );
      sprite2 = new nk.Sprite( 100, 50, imageCache.Get( 'smudge' ) );
      sprite2.anchor.Set( 0.5 );
      sprite3 = new nk.Sprite( -100, 100, imageCache.Get( 'gobj' ) );
      sprite3.anchor.Set( 0.5 );
      sprite3.clip.tl.Set( 0, 64 );
      sprite4 = new nk.Sprite( 100, 100 );
      sprite4.anchor.Set( 0.5 );
      sprite5 = new nk.Plainsprite( 200, 0 );
      sprite5.anchor.Set( 0.5 );

      stage.AddChildren( sprite1, sprite2, sprite3, sprite4, sprite5 );
    } );
    imageCache.onTextureLoaded.Add( function ( _event ) {
      console.log( _event.target, _event.data, 'loaded' );
    } );
    imageCache.Load( [
      { id: 'smudge', src: './images/smudge.png' },
    ] );
    imageCache.Load( [
      { id: '4dots', src: './images/4dots.png' },
      { id: 'gobj', src: './images/glass-of-blueberryjuice.png' }
    ] );



    var dragger = null;

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'The Mask' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunTheMask );
  buttonContainer.appendChild( button );


  function RunTheMask () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( HW, HH );

    var color = new nk.Color( 255, 0, 0 );
    color.ConvertToHSLA();

    var path = new nk.Path.AABB2D( -50, -50, 50, 50 );
    path.style.shadow.applied = true;
    var child1 = new nk.Graphic2D( 0, 0, path );

    var child2 = new nk.Graphic2D( 0, 0, path );

    var child3 = new nk.Graphic2D( 0, 0, path );

    var child4 = new nk.Graphic2D( 0, 0, path );

    var angle1 = 0;
    var speed1 = 0;

    var angle2 = 0;
    var speed2 = 0;

    var line = new nk.Path.Line2D( -100, 0, 100, 0 );
    line.style.shadow.applied = true;
    line.style.stroke.color = '#000';
    var child$1 = new nk.Graphic2D( 0, 0, line );
    var child$2 = new nk.Graphic2D( 0, 0, line );
    var child$3 = new nk.Graphic2D( 0, 0, line );
    var child$4 = new nk.Graphic2D( 0, 0, line );

    container.AddChildren( child1, child2, child3, child4 );

    child1.AddChild( child$1 );
    child2.AddChild( child$2 );
    child3.AddChild( child$3 );
    child4.AddChild( child$4 );

    function Update () {

      path.style.fill.color = color.value;

      color.IncreaseChannel( 0, 1 );

      var a1 = nk.Math.DTR( angle1 );
      var a2 = nk.Math.DTR( angle2 );

      child1.x += Math.cos( a1 ) * speed1;
      child1.y += Math.sin( a1 ) * speed1;
      child2.x -= Math.cos( a1 ) * speed1;
      child2.y -= Math.sin( a1 ) * speed1;

      child3.x += Math.cos( a2 ) * speed2;
      child3.y += Math.sin( a2 ) * speed2;
      child4.x -= Math.cos( a2 ) * speed2;
      child4.y -= Math.sin( a2 ) * speed2;

      child1.rotation = -a1;
      child2.rotation = -a1;
      child3.rotation = -a2;
      child4.rotation = -a2;

      angle1 += 1;

      angle2 -= 1;

      speed1 += 0.01;

      speed2 += 0.01;

      speed1 = nk.Utils.InverseClamp( speed1, -5, 5 );
      speed2 = nk.Utils.InverseClamp( speed2, -5, 5 );

      angle1 = nk.Utils.InverseClamp( angle1, 0, 359 );
      angle2 = nk.Utils.InverseClamp( angle2, -359, 0 );

      rc.setTransform( 1, 0, 0, 1, 0, 0 );

      rc.fillStyle = 'rgba(255, 255, 255, 0.001)';
      rc.fillRect( 0, 0, W, H );

      container.Draw( rc );

      //requestAnimationFrame( Update );
    }

    setInterval( Update, 1 );

    document.body.removeChild( buttonContainer );
  }
};

/***/ }),
/* 85 */,
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=tests.js.map