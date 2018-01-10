/**
* @package     Nenkraft
* @author      Gustav 'Nuuf' Åberg <gustavrein@gmail.com>
* @version     0.5.4 (Alpha)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ (Array(81).concat([
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__( 83 );

__webpack_require__( 84 );
__webpack_require__( 85 );
__webpack_require__( 86 );
__webpack_require__( 87 );
__webpack_require__( 88 );
__webpack_require__( 89 );
__webpack_require__( 90 );
__webpack_require__( 91 );

var tests = [];

var context = __webpack_require__(92);

context.keys().forEach( function ( file ) {

  tests.push( context( file ) );

} );

for ( var i = 0, l = tests.length; i < l; ++i ) {

  tests[ i ]();

}

// if ( DEVELOPMENT && module.hot ) module.hot.accept();


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/1to8.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/4dots.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/glass-of-blueberryjuice.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/raindrop.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/smudge.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/colors.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/font.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/invaders/invaders.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aabbcollision.test": 93,
	"./animation.test": 94,
	"./bitmapfont.test": 95,
	"./butterflyish.test": 96,
	"./cli.test": 97,
	"./clock.test": 98,
	"./elasticcollision.test": 99,
	"./field.test": 100,
	"./fractree.test": 101,
	"./grabndrag.test": 102,
	"./grid.test": 103,
	"./invaders.test": 104,
	"./magnet.test": 105,
	"./motion.test": 106,
	"./nightsky.test": 107,
	"./particles.test": 108,
	"./platformer.test": 109,
	"./playground.test": 110,
	"./polygoncollision.test": 111,
	"./quadtree.test": 112,
	"./rain.test": 113,
	"./raycasting.test": 114,
	"./reflectivecollision.test": 115,
	"./sprite.test": 116,
	"./stresstest.test": 117,
	"./text.test": 118,
	"./themask.test": 119,
	"./webglanimation.test": 120,
	"./webglbitmapfont.test": 121,
	"./webglcircle.test": 122,
	"./webglline2d.test": 123,
	"./webglpixelbatch.test": 124,
	"./webglrectangle.test": 125,
	"./webglstresstest.test": 126,
	"./webgltexturebatch.test": 127
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
webpackContext.id = 92;

/***/ }),
/* 93 */
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

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.scale.Set( 1, 1 );
    stage.mouse.scale.SetV( stage.scale );

    var text = new nk.Text( 0, 0, 'Collide them!' );

    var aabbg1 = new nk.Graphic2D( 300, 100, new nk.Path.AABB2D( 0, 0, 50, 50 ) );
    var aabbg2 = new nk.Graphic2D( 400, 400, new nk.Path.AABB2D( 0, 0, 400, 100 ) );

    var lineC = new nk.Graphic2D( 0, 0, new nk.Path.Line2D() );
    lineC.interactive = false;

    stage.AddChild( aabbg1 );
    stage.AddChild( aabbg2 );

    stage.AddChild( text );

    stage.AddChild( lineC );

    var dragger = null;

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
    
    var result = new nk.Math.Collision2D.AABB2DvsAABB2D.Result();

    lineC.path.s.SetV( aabbg1.position );
    lineC.path.e.SetV( aabbg2.position );

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;

        result.occured = false;

        nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide( obj1, obj2, result );

        lineC.path.s.SetV( aabbg1.position );
        lineC.path.e.SetV( aabbg2.position );

        lineC.SendToFront();

        if ( result.occured === true ) {

          text.text = 'Well done!';
          aabbg1.position.AddV( result.mtv );
        
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
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );
    stage.mouse.onLeave.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 94 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite = null;
    var spriteRef = null;

    var timer = new nk.Time.Timer();

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function ( _event ) {

      spriteRef = new nk.Sprite( 0, -200, imageCache.GetBasicTexture( '1to8' ) );
      spriteRef.anchor.Set( 0.5 );

      sprite = new nk.Sprite( 0, 0, _event.data.basicTextureCache.GetById( '1to8' ) );
      sprite.anchor.Set( 0.5 );
      sprite.scale.Set( 5.0 );
      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.CreateAnimation( 'test', 20 );
      animation.GenerateFrames( 64, 64, 512, 64, 8, {
        '5': 120
      } );
      animation.reverse = true;
      animation.onEnd.Add( function () {

        stage.ticker.Stop();
      
      }, animation );
      ac.PlayAnimation( 'test', 7 );
      stage.AddChildren( sprite, spriteRef );

      timer.onFinish.Add( function () {

        sprite.animationController.StopCurrentAnimation();
      
      } );

      // timer.Start( 400 );

      stage.onProcess.Add( function () {

        sprite.animationController.Process();
        timer.Process();
      
      }, stage );
    
    } );
    imageCache.Load( [
      { id: '1to8', src: './assets/images/1to8.png' }
    ], true );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'BitmapFont' );
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

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.backgroundColor = '#FFF';

    var xhrloader = new nk.XHRLoader();
    var imgloader = new nk.ImageLoader();
    var done = 0;
    xhrloader.Load( [
      { id: 'fontdataxml', src: './assets/xhr/font.fnt', type: 'xml' },
      { id: 'fontdatajson', src: './assets/xhr/font.json', type: 'json' }
    ] );
    imgloader.Load( [
      { id: 'fontimg', src: './assets/images/font.png' }
    ], true );
    xhrloader.onComplete.Add( function ( event ) {

      console.log( event.data );
      console.log( JSON.stringify( event.data.dataCache.items[ 0 ].data ) === JSON.stringify( event.data.dataCache.items[ 1 ].data ) );
      done++;
      Go();
    
    } );
    imgloader.onComplete.Add( function ( event ) {

      console.log( event.data );
      done++;
      Go();
    
    } );

    var test = null;

    function Go () {

      if ( done > 1 ) {

        test = new nk.BitmapText(
          0,
          0,
          imgloader.GetBasicTexture( 'fontimg' ),
          xhrloader.GetData( 'fontdataxml' ),
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        );
        console.log( test );
        test.maxWidth = window.innerWidth;
        stage.AddChild( test );
        test.ComputeText();
      
      }
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 96 */
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
    // path.style.shadow.applied = true;
    nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 100, 50, 8 );

    var bfly = new nk.Path.Polygon2D();
    // bfly.style.shadow.applied = true;
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

      // requestAnimationFrame( Update );
    
    }

    setInterval( Update, 1 );

    var a = {
      b: {
        c: {
          d: {
            e: {
              f: undefined
            }
          }
        }
      }
    };

    console.log( nk.Utils.Nested( a, 'b.c.d.e.f' ) );
    console.log( nk.Utils.Nested( a, 'b.c.d.e.f', true ) );
    nk.Utils.Nested( a, 'b.c.d.e.f', false, true, 20 );
    console.log( nk.Utils.Nested( a, 'b.c.d.e.f' ) );
    nk.Utils.Nested( a, 'b|c|d|e|f', false, true, 30, '|' );
    console.log( nk.Utils.Nested( a, 'b.c.d.e.f' ) );
    console.log( a );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 97 */
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
      DATA_MISSING: '<span style="color: pink;">Data required: DATA</span>'
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

    // //////////////

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth - 500 );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = '500px';

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
        if ( isNaN( x ) || isNaN( y ) ) return;
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

    function onCommandboxClick () {

      ci.focus();
    
    }

    stage.onProcess.Add( function () {

      mm.Process();
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 98 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

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
      millisecondHand.path.e.RotateAroundV( millisecondHand.path.s, nk.Math.DTR( ( milliseconds / 1000 * 360 ) - 90 ) - millisecondHand.path.e.GetAngle() );
      secondHand.path.e.RotateAroundV( secondHand.path.s, nk.Math.DTR( ( seconds * 6 ) - 90 ) - secondHand.path.e.GetAngle() );
      minuteHand.path.e.RotateAroundV( minuteHand.path.s, nk.Math.DTR( ( minutes * 6 ) - 90 ) - minuteHand.path.e.GetAngle() );
      hourHand.path.e.RotateAroundV( hourHand.path.s, nk.Math.DTR( ( ( 60 * hours + minutes ) * 0.5 ) - 90 ) - hourHand.path.e.GetAngle() );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 99 */
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

    var W = c.width;
    var H = c.height;

    var stage = new nk.Stage2D( c, 0, 0, true );
    stage.ComputeBounds();
    stage.backgroundColor = 'rgba(255,255,255,1)';
    // stage.clear = false;
    stage.ticker.StartAF();

    var fps = new nk.Text( 0, 0, '' );
    fps.style.text.fillColor = '#000';
    fps.style.text.strokeColor = '#000';
    fps.style.text.font = '60px Arial';

    var colliders = [];
    var bounds = new nk.AABB2D();
    bounds.SetC( stage.bounds );
    var root = new nk.QuadtreeNode( bounds, 0, 5, 5 );
    var objs = [];
    var nodes = [];

    function Collider () {

      var mass = nk.Utils.RandomInteger( 10, 30 );
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
        velocity: new nk.Vector2D( nk.Utils.RandomInteger( -4, 4 ), nk.Utils.RandomInteger( -4, 4 ) )
      };
      g.ComputeBounds();
      g.data.timer = new nk.Timer();
      g.data.timer.onFinish.Add( function () {

        p.style.fill.applied = false;
        g.alpha = 1.0;
      
      } );
      g.data.timer.onStart.Add( function () {

        p.style.fill.applied = true;
        g.alpha = 0.8;
      
      } );
      colliders.push( g );
      stage.AddChild( g );
      objs.push( g.bounds );
    
    }

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsCircle.Relative.ElasticResponse;
    var result = new nk.Math.Collision2D.CirclevsCircle.Result();

    function Process () {

      var i = 0, j, l = colliders.length, collider, collidee, body1, body2, vel;
      root.Dump();
      objs.forEach( function ( obj ) {

        root.Add( obj );
      
      } );
      nodes = root.ConcatNodes();

      for ( i; i < l; ++i ) {

        collider = colliders[ i ];
        collider.data.timer.Process();
        body1 = collider.data.body;
        vel = body1.velocity;
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

            result.occured = false;
            Collide( body1, body2, result );

            if ( result.occured === true ) {

              collider.data.timer.Start( 10 );
              collidee.data.timer.Start( 10 );
              Response( body1, body2, result );
            
            }
          
          }
        
        }

        collider.ComputeBounds();
      
      }

      nodes.forEach( function ( node ) {

        nk.Debug.Draw.AABB2D( rc, node.aabb, { noFill: true } );
      
      } );
      fps.text = Math.round( stage.ticker.GetTPS() );
    
    }

    stage.onProcess.Add( Process, window );

    for ( var i = 50; i--; ) {

      Collider();
    
    }

    stage.AddChild( fps );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 100 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.backgroundColor = 'rgba(0,0,0,0.1)';
    // stage.fill = false;

    var orig = new nk.Plaingraphic2D( 0, 0, new nk.Path.Circle( 0, 0, 200 ) );
    orig.path.style.fill.applied = false;
    stage.AddChild( orig );

    var objs = [];

    var mouseDown = false;

    stage.onProcess.Add( function () {

      for ( var i = 0, l = objs.length; i < l; ++i ) {

        if ( !objs[ i ] ) break;
        nk.Math.AttractRepel( objs[ i ].position, orig.position, objs[ i ].data.vel, orig.path.radius * 2, 0.1 );
        objs[ i ].position.AddV( objs[ i ].data.vel );

        /*
         *objs[ i ].data.color.IncreaseChannel( 0, 1 );
         *objs[ i ].path.style.fill.color = objs[ i ].data.color.value;
         */
        if ( !--objs[ i ].data.lifeSpan ) {

          objs[ i ].Destroy();
          objs.splice( i, 1 );
        
        }
      
      }

      if ( mouseDown ) {

        i = 2;

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
      /*
       *obj.data.color = new nk.Color( nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ), nk.Utils.RandomInteger( 0, 255 ) );
       *obj.data.color.ConvertToHSLA();
       */
      stage.AddChild( obj );
      objs.push( obj );
    
    }

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
/* 101 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height;

    var l = 200;

    var stage = new nk.Stage2D( c, HW, H );
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
      if ( nk.Utils.ThisOrThat() ) this.rotation = - this.rotation;
      var mm = this.data.motionManager = new nk.MotionManager( this );
      mm.Create( 'moveX', 'x', 0, 120, 'SineInOut' );
      mm.Create( 'moveY', 'y', 0, 120, 'SineInOut' );
      mm.Create( 'rotate', 'rotation', 0, 120, 'SineInOut' );
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

    var timer = new nk.Timer( 130 );
    timer.onFinish.Add( function () {

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
/* 102 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c );

    var text = new nk.Text( 100, 100, 'Grab and drag' );

    var graphicCircle = new nk.Graphic2D( 350, 150, new nk.Path.Circle( 0, 0, 100 ) );
    var graphicRectangle = new nk.Graphic2D( 450, 200, new nk.Path.AABB2D( -100, -100, 100, 100 ) );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.AddChild( text );
    stage.AddChild( graphicCircle );
    stage.AddChild( graphicRectangle );

    var t = 10;

    while ( --t ) {

      stage.AddChild( new nk.Graphic2D( HW, HH, new nk.Path.AABB2D( -100, -100, 100, 100 ) ) );
    
    }

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];
          dragger.gco = nk.Style.GCO.MULTIPLY;
          dragger.scale.Set( 2, 2 );

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToBack();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger.gco = nk.Style.GCO.DEFAULT;
        dragger.scale.Set( 1, 1 );
        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 103 */
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

    var W = c.width;
    var H = c.height;

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
/* 104 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Invaders' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', 1024 );
    c.setAttribute( 'height', 800 );
    c.style.border = '2px solid black';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '50%';
    c.style.transform = 'translateX(-50%)';

    var W = c.width, HW = W * 0.5;
    var H = c.height;

    var RI = nk.Utils.RandomInteger;
    var RF = nk.Utils.RandomFloat;
    var COLLIDE = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide;
    var SPREAD = nk.Math.Spread;

    var stage = new nk.Stage2D( c, 0, 0, true, true );
    stage.gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    var pc = new nk.GLTextureProgramController( stage.gl );

    var worldBounds = new nk.AABB2D();
    stage.ComputeBounds();
    worldBounds.SetC( stage.bounds );

    var playerBulletPool = new nk.Pool();
    var enemyPool = new nk.Pool();
    var particlePool = new nk.Pool();
    var explosionPool = new nk.Pool();

    var worldScale = new nk.Vector2D( 2.0, 2.0 );
    var ship = null;
    var particles = [];
    var explosions = [];
    var playerBullets = [];
    var enemies = [];
    var shields = [];

    var shieldHealth = 3;
    var numShields = 22;

    var spritesheet = null;

    var shieldVerticalPosition = 500;

    var enemySpawnRate = 2;
    var enemySpeed = 1.5;
    var enemyHealth = 5;

    var root = new nk.QuadtreeNode( worldBounds, 0, 5, 5 );

    var spritesheetLoader = new nk.SpritesheetLoader(
      [
        {
          id: 'sheet',
          image: {
            src: './../assets/images/invaders/invaders.png'
          },
          data: {
            src: './../assets/xhr/invaders.json',
            type: 'json'
          }
        }
      ],
      function() {

        spritesheet = spritesheetLoader.GetSpritesheet( 'sheet' );
        spritesheet.GenerateFrames();

        go();
      
      }
    );

    function go () {

      stage.ticker.StartAF();
      pc.BindBasicTexture( spritesheet.basicTexture );
      playerBulletPool.Flood( function () {

        var b = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Bullet' ).Apply( b );
        b.scale.SetV( worldScale );
        b.UpdateShape( new nk.AABB2D( 0, 0, 8, 8 ) );
        b.rotation = RF( 0, Math.PI * 2 );
        b.anchor.Set( 0.5 );
        b.data.velocity = new nk.Vector2D();
        b.data.body = {
          relative: b.position,
          shape: b.shape,
          anchor: b.anchor
        };
        b.UpdateTextureTransform();
        return b;
      
      }, 5000 );
      enemyPool.Flood( function () {

        var e = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Enemy' + RI( 1, 2 ) ).Apply( e );
        e.scale.SetV( worldScale );
        e.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        e.anchor.Set( 0.5 );
        e.data.velocity = new nk.Vector2D();
        e.data.body = {
          relative: e.position,
          shape: e.shape,
          anchor: e.anchor
        };
        e.UpdateTextureTransform();
        return e;
      
      }, 1000 );
      particlePool.Flood( function() {

        var p = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Particle' ).Apply( p );
        p.scale.SetV( worldScale );
        p.UpdateShape( new nk.AABB2D( 0, 0, 4, 4 ) );
        p.anchor.Set( 0.5 );
        p.data.velocity = new nk.Vector2D();
        p.data.acceleration = new nk.Vector2D();
        p.UpdateTextureTransform();
        return p;
      
      }, 5000 );
      explosionPool.Flood( function() {

        var e = new nk.Sprite( 0, 0, pc );
        var a = e.CreateAnimation( {
          spritesheet: spritesheet,
          id: 'explode',
          frames: [
            'Explo-f1',
            'Explo-f2',
            'Explo-f3',
            'Explo-f4'
          ],
          rate: 6
        } );
        a.onEnd.Add( onExplosionDone, e );
        a.overrideFrameRate = true;
        e.scale.SetV( worldScale );
        e.rotation = RF( 0, Math.PI * 2 );
        e.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        e.anchor.Set( 0.5 );
        e.UpdateTextureTransform();
        return e;
      
      }, 200 );

      function onExplosionDone() {

        this.animationController.currentAnimation.Reset();
        this.Detach();
        explosions.fickleSplice( explosions.indexOf( this ) );
        explosionPool.Store( this );
      
      }

      createShip();
      createShields();
      setupListeners();
      setupProcess();
    
    }

    function createShip () {

      if ( ship ) return;
      ship = new nk.Sprite( 0, 0, pc );
      spritesheet.GetFrameById( 'Ship' ).Apply( ship );
      console.log( ship );
      ship.scale.SetV( worldScale );
      ship.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
      ship.anchor.Set( 0.5 );
      ship.x = HW;
      ship.y = H - ship.height * 0.5;
      ship.data.velocity = new nk.Vector2D();
      ship.data.moveSpeed = 8;
      ship.data.fire = false;
      ship.data.fireRate = 2;
      ship.data.fireTimer = 0;
      ship.data.bulletsPerBlast = 15;
      stage.AddChild( ship );

      ship.UpdateTextureTransform();
    
    }

    function createPlayerBullet () {

      var i = ship.data.bulletsPerBlast;

      createExplosion( ship.x + RF( -100, 100 ), ship.y + RF( -100, -10 ) );

      while ( i-- ) {

        var b = playerBulletPool.Retrieve();
        b.x = SPREAD( ship.x, ship.data.bulletsPerBlast, 3, i );
        b.y = ship.y - ship.height * 0.5;
        b.data.velocity.x = 0;
        b.data.velocity.y = RF( -25, -5 );

        if ( b.data.velocity.y > 0 ) {

          b.data.velocity.y = -b.data.velocity.y;
        
        }

        b.data.lifeSpan = 150;
        playerBullets.push( b );
        stage.AddChild( b );
      
      }
    
    }

    function createEnemy () {

      var e = enemyPool.Retrieve();
      e.x = RF( 0, W );
      e.y = 0 - e.height * 0.5;
      e.data.velocity.x = 0;
      e.data.velocity.y = enemySpeed;
      e.data.health = enemyHealth;
      enemies.push( e );
      stage.AddChild( e );
    
    }

    function createShields () {

      for ( var i = 0; i < numShields; ++i ) {

        var s = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Shield-f1' ).Apply( s );
        s.transformAutomaticUpdate = false;
        s.scale.SetV( worldScale );
        s.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        s.anchor.Set( 0.5 );
        s.data.health = shieldHealth;
        s.data.body = {
          relative: s.position,
          shape: s.shape,
          anchor: s.anchor
        };
        s.x = nk.Math.Spread( HW, numShields, s.width * 1.2, i );
        s.y = shieldVerticalPosition;

        shields.push( s );
        stage.AddChild( s );

        s.UpdateTextureTransform();
      
      }
    
    }

    function createParticles( _x, _y, _amount ) {

      for ( var i = 0; i < _amount; ++i ) {

        var p = particlePool.Retrieve();
        p.position.Set( _x, _y );
        p.data.velocity.Set( RF( -10, 10 ), RF( -10, 10 ) );
        p.data.acceleration.Set( RF( 0.9, 0.95 ), RF( 1, 1 ) );
        p.data.lifeSpan = RI( 30, 100 );
        particles.push( p );
        stage.AddChild( p );
      
      }
    
    }

    function createExplosion( _x, _y ) {

      var e = explosionPool.Retrieve();
      e.position.Set( _x, _y );
      e.animationController.PlayAnimation( 'explode' );
      explosions.push( e );
      stage.AddChild( e );
    
    }

    function setupListeners () {

      stage.keyboard.onDown.Add( onKeyDown, ship );
      stage.keyboard.onUp.Add( onKeyUp, ship );

      function onKeyDown ( event ) {

        var kc = event.data.keyCode;

        // console.log( kc );
        switch ( kc ) {

          case 37:
            this.data.moveLeft = true;
            break;
          case 39:
            this.data.moveRight = true;
            break;
          case 32:
            this.data.fire = true;
            break;
          default: break;
        
        }
      
      }

      function onKeyUp ( event ) {

        var kc = event.data.keyCode;

        switch ( kc ) {

          case 37:
            this.data.moveLeft = false;
            break;
          case 39:
            this.data.moveRight = false;
            break;
          case 32:
            this.data.fire = false;
            break;
          default: break;
        
        }
      
      }
    
    }

    function setupProcess () {

      stage.onProcess.Add( onProcess, stage );

      function onProcess () {

        handleShip();

        if ( RI( 1, enemySpawnRate ) === enemySpawnRate ) {

          createEnemy();
        
        }

        handleEnemies();
        root.Dump();

        for ( var i = 0, enemy; i < enemies.length; ++i ) {

          enemy = enemies[i];

          if ( enemy && enemy.bounds ) {

            root.Add( enemy.bounds );
          
          }
        
        }

        handlePlayerBullets();

        handleParticles();

        handleExplosions();

        if ( this.ticker.GetTPS() < 24 ) {

          console.log( this.ticker.GetTPS() );
        
        }
      
      }

      function handleShip () {

        var shipWHalf = ship.width * 0.5;

        if ( ship.data.moveLeft && ship.x > 0 + shipWHalf ) {

          ship.data.velocity.x = -ship.data.moveSpeed;
        
        } else if ( ship.data.moveRight && ship.x < W - shipWHalf ) {

          ship.data.velocity.x = ship.data.moveSpeed;
        
        } else {

          ship.data.velocity.x = 0;
        
        }

        ship.position.AddV( ship.data.velocity );

        if ( ship.x < 0 + shipWHalf ) {

          ship.x = 0 + shipWHalf;
        
        } else if ( ship.x > W - shipWHalf ) {

          ship.x = W - shipWHalf;
        
        }

        if ( ship.data.fire && ship.data.fireTimer === 0 ) {

          createPlayerBullet();
          ship.data.fireTimer = ship.data.fireRate;
        
        }

        if ( ship.data.fireTimer > 0 ) {

          ship.data.fireTimer--;
        
        }
      
      }

      function handleParticles() {

        for ( var i = 0, particle; i < particles.length; ++i ) {

          particle = particles[i];

          particle.position.AddV( particle.data.velocity );
          particle.data.velocity.MultiplyV( particle.data.acceleration );
  
          if ( --particle.data.lifeSpan <= 0 ) {
  
            particle.Detach();
            particles.fickleSplice( i );
            particlePool.Store( particle );
            
          }
        
        }
      
      }

      function handleExplosions() {

        for ( var i = 0, explosion; i < explosions.length; ++i ) {

          explosion = explosions[i];
          explosion.animationController.Process();
        
        }
      
      }

      function handlePlayerBullets () {

        for ( var i = 0, bullet; i < playerBullets.length; ++i ) {

          bullet = playerBullets[ i ];

          if ( bullet ) {

            bullet.position.AddV( bullet.data.velocity );

            if ( bullet.x > W - bullet.width * 0.5 || bullet.x < 0 + bullet.width * 0.5 ) {

              bullet.data.velocity.x = -bullet.data.velocity.x;
            
            }

            bullet.ComputeBounds();

            if ( --bullet.data.lifeSpan <= 0 ) {

              bullet.Detach();
              playerBullets.fickleSplice( i );
              playerBulletPool.Store( bullet );
            
            } else {

              handlePlayerBullet_EnemyCollision( bullet, i );
            
            }
          
          }

        }
      
      }

      function handleEnemies () {

        for ( var i = 0, enemy; i < enemies.length; ++i ) {

          enemy = enemies[ i ];

          if ( enemy ) {

            enemy.position.AddV( enemy.data.velocity );
            enemy.ComputeBounds();

            if ( enemy.data.health <= 0 || enemy.y > H + enemy.height * 0.5 ) {

              createParticles( enemy.x, enemy.y, RI( 4, 80 ) );

              enemy.Detach();
              enemies.fickleSplice( i );
              enemyPool.Store( enemy );
            
            } else {

              handleEnemy_ShieldCollision( enemy, i );
            
            }
          
          }
        
        }
      
      }

      function handlePlayerBullet_EnemyCollision ( bullet, index ) {

        if ( bullet && bullet.x > 0 && bullet.x < W && bullet.y > 0 && bullet.y < H ) {

          var convergence = root.Converge( bullet.bounds );

          for ( var i = 0, enemy; i < convergence.length; ++i ) {

            enemy = convergence[ i ].belongsTo;

            if ( enemy ) {

              if ( COLLIDE( bullet.data.body, enemy.data.body ) ) {

                enemy.data.health--;
                bullet.Detach();
                playerBullets.fickleSplice( index );
                playerBulletPool.Store( bullet );
                break;
              
              }
            
            }
          
          }
        
        }
      
      }

      function handleEnemy_ShieldCollision ( enemy, index ) {

        if ( !enemy || enemy.y < shieldVerticalPosition - enemy.height ) return;

        for ( var i = 0, shield; i < shields.length; ++i ) {

          shield = shields[ i ];

          if ( shield ) {

            if ( COLLIDE( enemy.data.body, shield.data.body ) ) {

              createParticles( enemy.x, enemy.y, 15 );

              enemy.Detach();
              enemies.fickleSplice( index );
              enemyPool.Store( enemy );

              if ( --shield.data.health <= 0 ) {

                shield.Detach();
                shields.fickleSplice( i );
                break;
              
              } else {

                shield.clip.tl.x += 16;
                shield.UpdateTextureTransform();
              
              }

              break;
            
            }
          
          }
        
        }
      
      }

    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 105 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );

    var magnet = new nk.Plaingraphic2D( HW, HH, new nk.Path.Circle( 0, 0, 30 ) );
    magnet.data.body = {
      relative: magnet.position,
      anchor: new nk.Vector2D(),
      shape: magnet.path,
      mass: 1,
      velocity: new nk.Vector2D()
    };
    var dragIt = false;
    var startDrag = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    var particles = [];

    stage.AddChild( magnet );

    function CreateParticle () {

      var p = new nk.Plaingraphic2D( nk.Utils.RandomInteger( 0, W ), nk.Utils.RandomInteger( 0, H ), new nk.Path.Circle( 0, 0, 6 ) );
      p.data.force = {
        velocity: new nk.Vector2D(),
        friction: new nk.Vector2D( 0.99, 0.99 )
      };
      p.data.body = {
        relative: p.position,
        anchor: new nk.Vector2D(),
        shape: p.path,
        mass: 1,
        velocity: p.data.force.velocity
      };
      stage.AddChild( p );
      particles.push( p );
      p.data.sepArr = particles;
    
    }

    ( function () {

      var i = 500;

      while ( i-- ) {

        CreateParticle();
      
      }
    
    } )();

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var result = new nk.Math.Collision2D.CirclevsCircle.Result();

    stage.onProcess.Add( function () {

      particles.forEach( function ( particle ) {

        var vel = particle.data.force.velocity;
        nk.Math.AttractRepel( particle.position, magnet.position, vel, magnet.path.radius * 3, 1 );
        particle.position.AddV( vel );
        vel.MultiplyV( particle.data.force.friction );

        if ( particle.x + particle.path.radius >= W ) {

          vel.x = -Math.abs( vel.x );
          particle.x = W - particle.path.radius;
        
        } else if ( particle.x - particle.path.radius <= 0 ) {

          vel.x = Math.abs( vel.x );
          particle.x = 0 + particle.path.radius;
        
        }

        if ( particle.y + particle.path.radius >= H ) {

          vel.y = -Math.abs( vel.y );
          particle.y = H - particle.path.radius;
        
        } else if ( particle.y - particle.path.radius <= 0 ) {

          vel.y = Math.abs( vel.y );
          particle.y = 0 + particle.path.radius;
        
        }

        result.occured = false;
        Collide( magnet.data.body, particle.data.body, result );

        if ( result.occured === true ) {

          result.mtv.Multiply( result.mtd, result.mtd );
          particle.position.AddV( result.mtv );
          vel.Set( 0, 0 );
        
        }
      
      } );
    
    } );
    stage.mouse.onMove.Add( function ( event ) {

      if ( dragIt === true ) {

        magnet.x = event.data.position.x - startDrag.x + dragOffset.x;
        magnet.y = event.data.position.y - startDrag.y + dragOffset.y;
      
      }
    
    } );
    stage.mouse.onDown.Add( function ( event ) {

      var p = event.data.position;

      if ( magnet.IntersectsPoint( p ) ) {

        startDrag.SetV( p );
        dragOffset.SetV( magnet );
        dragIt = true;
      
      }

      event.stopPropagation = true;
    
    } );
    stage.mouse.onUp.Add( function () {

      dragIt = false;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Motion' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE();

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var motObj = new nk.Sprite( 0, 0 );
    motObj.anchor.Set( 0.5 );
    motObj.scale.Set( 0, 1 );
    motObj.AttachTo( stage );

    var mm = new nk.MotionManager( motObj );
    var xM = mm.Create( 'x', 'x' );
    var yM = mm.Create( 'y', 'y' );
    mm.Create( 'sx', 'scale.x', 1, 10 );
    mm.Create( 'sy', 'scale.y', 1, 10 );

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
/* 107 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var staticStars = [];

    var imageCache = new nk.ImageLoader( [ {
      id: 'butterfly',
      src: nk.Utils.GenerateSimpleBase64Png( Butterfly )
    }, {
      id: 'staticStar',
      src: nk.Utils.GenerateSimpleBase64Png( StaticStar )
    } ], true );
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
        var sprite = new nk.Sprite( x, y, imageCache.GetBasicTexture( img ) );
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
      // To get the difference in x,y
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    
    }

    function StaticStar () {

      var path = new nk.Path.Polygon2D();
      path.style.fill.color = '#FFF';
      path.style.stroke.color = '#000';
      path.style.stroke.lineWidth = 3;
      nk.Geom.Polygon2D.Construct.Star( path, 0, 0, 800, 400, 5 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 108 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );
    stage.clear = false;
    stage.fill = false;
    stage.gco = nk.Style.GCO.COLOR_DODGE;

    var imageCache = new nk.ImageLoader( [
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
    ], true );
    imageCache.onComplete.Add( function () {

      var i = 250;

      while ( i-- ) {

        var child = stage.AddChild( new nk.Plainsprite( 0, 0, imageCache.GetBasicTexture( 'particle' ) ) );
        child.data.velocity = new nk.Vector2D( nk.Utils.RandomFloat( -2, 2 ), nk.Utils.RandomFloat( -2, 2 ) );
      
      }

      var totalTime = 400;

      var timer = new nk.Timer();
      timer.Start( totalTime );
      timer.onFinish.Add( function () {

        stage.ticker.Stop();
      
      } );

      stage.onProcess.Add( function () {

        var i = this.children.length, child;

        while ( i-- ) {

          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.Rotate( nk.Math.RADIAN * nk.Utils.RandomFloat( -12, 12 ) );
          child.scale.Set( ( totalTime - timer.time ) / totalTime );
        
        }

        timer.Process();
      
      }, stage );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 109 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );

    var imageCache = new nk.ImageLoader( [ {
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

        var path = new nk.Path.AABB2D( 0, 0, 50, 10 );
        path.style.fill.applied = false;
        path.style.stroke.lineWidth = 2;
        var t = new nk.Graphic2D( 0, 0, path );
        return t;
      
      } )
    } ], true );
    imageCache.onComplete.Add( function () {

      Start();
    
    } );

    var platforms = [];
    var character = null;
    var result = new nk.Math.Collision2D.AABB2DvsAABB2D.Result();

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
        character.data.state.onGround = false;
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

        result.occured = false;
        nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide(
          character.data.collisionData,
          platforms[ i ].data.collisionData,
          result
        );

        if ( result.occured === true ) {

          if ( result.mtv.y < 0 && character.data.force.velocity.y > 0 ) {

            character.data.force.velocity.y = 0;
            character.data.state.onGround = true;
            character.data.state.falling = false;
            character.data.state.ascending = false;
          
          } else if ( result.mtv.y > 0 && character.data.force.velocity.y < 0 ) {

            character.data.force.velocity.y = 0;
          
          }

          character.position.AddV( result.mtv );
        
        }
      
      }
    
    }

    function InitCharacter () {

      character = new nk.Sprite( 0, 0, imageCache.GetBasicTexture( 'character' ) );
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

      var i = 200;

      while ( i-- ) {

        var platform = new nk.Sprite( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ), imageCache.GetBasicTexture( 'platform' ) );
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
/* 110 */
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
    window.c = c;

    var stage = new nk.Stage2D( c, 0, 0 );

    window.stage = stage;

    var x = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];

    console.log( x.fickleSplice( 3 ), x );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'PolygonCollision' );
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.SetDesiredRate( 120 );
    stage.ticker.Start();

    var RI = nk.Utils.RandomInteger;

    var objs = [];

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    function CreatePolygon () {

      var p = new nk.Path.Polygon2D();
      nk.Geom.Polygon2D.Construct.Cyclic( p, 0, 0, RI( 10, 60 ), RI( 3, 6 ) );
      var pg = new nk.Graphic2D( 0, 0, p );
      stage.Mount( pg );
      objs.push( {
        shape: p,
        relative: pg.position,
        anchor: new nk.Vector2D()
      } );
    
    }

    ( function () {

      var i = 50;

      while ( i-- ) {

        CreatePolygon();
      
      }
    
    }() );

    var Collide = nk.Math.Collision2D.PolygonvsPolygon.Relative.Collide;
    var result = new nk.Math.Collision2D.PolygonvsPolygon.Result();

    stage.onProcess.Add( function () {

      for ( var i = 0, l = objs.length; i < l; ++i ) {

        var obj1 = objs[ i ];

        for ( var j = 0; j < l; ++j ) {

          var obj2 = objs[ j ];
          if ( obj2 === obj1 ) continue;
          result.Reset();

          if ( Collide( obj1, obj2, result ) ) {

            if ( dragger ) {

              if ( obj1.relative !== dragger.position ) obj1.relative.SubtractV( result.mtv );
              if ( obj2.relative !== dragger.position ) obj2.relative.AddV( result.mtv );
            
            }
            else {

              obj1.relative.SubtractV( result.mtv );
              obj2.relative.AddV( result.mtv );
            
            }
          
          }
        
        }
      
      }
    
    } );

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 112 */
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

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.ComputeBounds();

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
/* 113 */
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var gravity = new nk.Vector2D( 0, 0.0982 );
    var wind = new nk.Vector2D();

    var DropPool = new nk.Pool( nk.Plainsprite );

    var imageCache = new nk.ImageLoader( [
      {
        id: 'raindrop',
        src: './assets/images/raindrop.png'
      }
    ], true );
    imageCache.onComplete.Add( function () {

      DropPool.Flood( function ( _sprite ) {

        _sprite.SetTexture( imageCache.GetBasicTexture( 'raindrop' ) );
        _sprite.data.velocity = new nk.Vector2D();
      
      }, 1000 );

      stage.onProcess.Add( function () {

        var i = this.children.length, child;

        while ( i-- ) {

          child = this.children[ i ];
          child.position.AddV( child.data.velocity );
          child.data.velocity.Add( gravity.x, gravity.y + child.data.mass / 100 );
          child.data.velocity.Add( wind.x / child.data.mass * 4, wind.y / child.data.mass * 4 );

          if ( !--child.data.lifespan ) {

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
      var scale = nk.Utils.RandomFloat( 0.2, 1 );
      child.position.Set( nk.Utils.RandomFloat( -HW, HW ), -HH - child.height * 2 );
      child.scale.Set( scale );
      child.data.mass = scale * 10;
      child.data.velocity.Set( 0 );
      child.data.lifespan = 280;
      child.AttachTo( stage );
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Raycasting' );
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    var polygons = [];
    var rays = [];

    ( function () {

      var i = 15;

      while ( i-- ) {

        var p = new nk.Path.Polygon2D();
        nk.Geom.Polygon2D.Construct.Cyclic(
          p,
          nk.Utils.RandomInteger( -HW, HW ),
          nk.Utils.RandomInteger( -HH, HH ),
          nk.Utils.RandomInteger( 30, 60 ),
          nk.Utils.RandomInteger( 3, 5 )
        );
        p.Rotate( nk.Utils.RandomFloat( 0, nk.Math.PII ) );
        var g = new nk.Graphic2D( 0, 0, p );
        polygons.push( g );
      
      }
    
    }() );

    ( function () {

      var i = 360;
      var angle = Math.PI * 2 / i;
      var r = 180;

      while ( i-- ) {

        var th = angle * i;
        var line = new nk.Path.Ray2D( 0, 0, 0, 0 );
        line.style.stroke.lineWidth = 1;
        var gr = new nk.Graphic2D( 0, 0, line );
        gr.interactive = false;
        gr.data.angle = th;
        gr.data.r = r;
        rays.push( gr );
      
      }
    
    }() );

    stage.Mount.apply( stage, polygons.concat( rays ) );

    stage.onProcess.Add( function () {

      rays.forEach( function ( ray ) {

        ray.path.s.SetV( stage.mouse.position );
        ray.path.e.SetV( ray.path.s );
        ray.path.e.Add( ray.data.r, ray.data.r );
        ray.path.e.RotateAroundV( ray.path.s, ray.data.angle );
      
      } );

      for ( var i = 0; i < rays.length; ++i ) {

        var ray = rays[ i ];
        var polygon;

        for ( var k = 0; k < polygons.length; ++k ) {

          polygon = polygons[ k ].path;
          var vertexa, vertexb, contactPoint;

          for ( var j = 0; j < polygon.vertices.length - 1; ++j ) {

            vertexa = polygon.vertices[ j ];
            vertexb = polygon.vertices[ j + 1 ];
            contactPoint = nk.Math.LineLineIntersection(
              ray.path.s,
              ray.path.e,
              vertexa,
              vertexb
            );

            if ( contactPoint ) {

              rays[ i ].path.e.SetV( contactPoint );
            
            }
          
          }

          vertexa = polygon.vertices[ polygon.vertices.length - 1 ];
          vertexb = polygon.vertices[ 0 ];
          contactPoint = nk.Math.LineLineIntersection(
            ray.path.s,
            ray.path.e,
            vertexa,
            vertexb
          );

          if ( contactPoint ) {

            rays[ i ].path.e.SetV( contactPoint );
          
          }
        
        }

      }
    
    } );

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }

    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'ReflectiveCollision' );
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    var RI = nk.Utils.RandomInteger;
    var RF = nk.Utils.RandomFloat;

    var lines = [];
    var circles = [];

    function CreateCircle ( _x, _y, _radius ) {

      var c = new nk.Path.Circle( 0, 0, _radius );
      var cg = new nk.Graphic2D( _x, _y, c );
      cg.data.body = {
        shape: c,
        relative: cg.position,
        velocity: new nk.Vector2D( RF( -5, 5 ), RF( -5, 5 ) )
      };
      stage.Mount( cg );
      circles.push( cg );
    
    }

    function CreateLine ( _x, _y, _width, _rotation, _interactive ) {

      var l = new nk.Path.Line2D( -_width * 0.5, 0, _width * 0.5, 0 );
      l.Rotate( nk.Math.RADIAN * _rotation );
      var lg = new nk.Graphic2D( _x, _y, l );
      lg.data.body = {
        shape: l,
        relative: lg.position
      };
      lines.push( lg );
      stage.Mount( lg );

      if ( _interactive === false ) {

        lg.interactive = false;
      
      }
    
    }

    var Collide = nk.Math.Collision2D.CirclevsLine.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsLine.Relative.ReflectingResponse;
    var result = new nk.Math.Collision2D.CirclevsLine.Result();

    ( function () {

      var i = 25;

      while ( i-- ) {

        CreateLine( RI( -HW, HW ), RI( -HH, HH ), 100, RI( 0, 360 ) );
      
      }
    
    }() );

    CreateLine( -HW, 0, H, 90, false );
    CreateLine( HW, 0, H, 90, false );
    CreateLine( 0, -HH, W, 0, false );
    CreateLine( 0, HH, W, 0, false );

    ( function () {

      var i = 25;

      while ( i-- ) {

        CreateCircle( RI( -HW, HW ), RI( -HH, HH ), RI( 5, 10 ) );
      
      }
    
    }() );

    stage.onProcess.Add( function () {

      circles.forEach( function ( circle ) {

        circle.position.AddV( circle.data.body.velocity );
        lines.forEach( function ( line ) {

          result.Reset();
          Collide( circle.data.body, line.data.body, result );

          if ( result.occured ) {

            Response( circle.data.body, line.data.body, result );
          
          }
        
        } );
      
      } );
    
    } );

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Sprite' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE();
    nk.Plainsprite.BUILD_DEFAULT_TEXTURE();

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var sprite1 = null;
    var sprite2 = null;
    var sprite3 = null;
    var sprite4 = null;
    var sprite5 = null;

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function ( _event ) {

      console.log( _event.target, _event.data, 'complete' );
      sprite1 = new nk.Sprite( 0, 0, imageCache.GetBasicTexture( '4dots' ) );
      sprite1.anchor.Set( 0.5 );
      sprite2 = new nk.Sprite( 100, 50, imageCache.GetBasicTexture( 'smudge' ) );
      sprite2.anchor.Set( 0.5 );
      sprite3 = new nk.Sprite( -100, 100, imageCache.GetBasicTexture( 'gobj' ) );
      sprite3.anchor.Set( 0.5 );
      sprite3.clip.tl.Set( 0, 64 );
      sprite4 = new nk.Sprite( 100, 100 );
      sprite4.anchor.Set( 0.5 );
      sprite5 = new nk.Plainsprite( 200, 0 );
      sprite5.anchor.Set( 0.5 );

      stage.AddChildren( sprite1, sprite2, sprite3, sprite4, sprite5 );
    
    } );
    imageCache.onImageLoaded.Add( function ( _event ) {

      console.log( _event.target, _event.data, 'loaded' );
    
    } );
    imageCache.Load( [
      { id: 'smudge', src: './assets/images/smudge.png' }
    ], true );
    imageCache.Load( [
      { id: '4dots', src: './assets/images/4dots.png' },
      { id: 'gobj', src: './assets/images/glass-of-blueberryjuice.png' }
    ], true );

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
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Stresstest' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE();

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
    var fps = 40;

    var am = 35;

    var childrenMDC = [];

    var spritePool = new nk.Pool( nk.Sprite );

    var timer = new nk.Timer();
    timer.onFinish.Add( function () {

      var i = am;
      am = am < 3 ? 3 : am--;

      while ( i-- ) {

        var sprite = spritePool.Retrieve();
        sprite.transformAutomaticUpdate = false;
        container.AddChild( sprite );
      
      }

      if ( ticker.GetTPS() > fps || holdCounter++ < hold ) {

        this.Start( 1 );
      
      }
      else {

        var numChildren = container.children.length;
        console.log( numChildren, ticker.GetTPS() );
        container.children.forEach( function ( child ) {

          spritePool.Store( child );
        
        } );
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

    var imageCache = new nk.ImageLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture )
    } ], true );
    imageCache.onComplete.Add( function () {

      texture = imageCache.GetBasicTexture( 'tex' );
      spritePool.Flood( function ( obj ) {

        obj.x = Math.random() * W - HW;
        obj.y = Math.random() * H - HH;
        obj.SetTexture( texture );
      
      }, 100000 );
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
/* 118 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Text' );
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var text = new nk.Text( 0, 0,
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
    text.style.text.align = nk.Style.TEXT_ALIGN.CENTER;
    text.style.text.baseline = nk.Style.TEXT_BASELINE.MIDDLE;
    text.style.text.lineWidth = 0.3;
    text.style.text.font = '40px Arial';

    stage.Mount( text );

    text.rotation = nk.Math.RADIAN * 24;

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'TheMask' );
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

      // requestAnimationFrame( Update );
    
    }

    setInterval( Update, 1 );

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Animation' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE();

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var sprite = null;
    var spriteRef = null;
    var test = null;

    var imageCache = new nk.ImageLoader();
    imageCache.onComplete.Add( function () {

      var p1 = new nk.GLTextureProgramController( stage.gl );
      var p2 = new nk.GLTextureProgramController( stage.gl );
      var p3 = new nk.GLTextureProgramController( stage.gl );
      p1.BindBasicTexture( imageCache.GetBasicTexture( '1to8' ) );
      p2.BindBasicTexture( imageCache.GetBasicTexture( '1to8f' ) );
      p3.BindBasicTexture( nk.Sprite.DEFAULT_TEXTURE );

      test = new nk.Sprite( HW, HH, p3 );
      test.anchor.Set( 0.5 );
      test.scale.Set( 5 );
      test.UpdateShape();
      test.UpdateTextureTransform();

      spriteRef = new nk.Sprite( HW, HH - 200, p2 );
      spriteRef.anchor.Set( 0.5 );
      spriteRef.UpdateTextureTransform();

      sprite = new nk.Sprite( HW, HH, p1 );
      sprite.anchor.Set( 0.5 );
      sprite.scale.Set( 5 );
      sprite.UpdateShape();
      sprite.UpdateTextureTransform();

      console.log( sprite );

      var ac = sprite.animationController = new nk.Animator.Controller( sprite );
      var animation = ac.CreateAnimation( 'test', 20 );
      animation.GenerateFrames( 64, 64, 512, 64, 8, {
        '5': 120
      } );
      console.log( animation );
      animation.reverse = true;
      animation.onEnd.Add( function () {
        // stage.ticker.Stop();
      }, animation );
      ac.PlayAnimation( 'test', 7 );
      stage.AddChildren( sprite, spriteRef, test );

      stage.onProcess.Add( function () {

        sprite.animationController.Process();
      
      }, stage );
    
    } );
    imageCache.Load( [
      { id: '1to8', src: './assets/images/1to8.png' },
      { id: '1to8f', src: './assets/images/1to8.png' }
    ], true );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );

  }

};


/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL BitmapFont' );
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

    var stage = new nk.Stage2D( c, 0, 0, false, true );
    stage.gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    var fontPc = new nk.GLTextureProgramController( stage.gl );

    var xhrloader = new nk.XHRLoader();
    var imgloader = new nk.ImageLoader();
    var done = 0;
    xhrloader.Load( [
      { id: 'fontdataxml', src: './assets/xhr/font.fnt', type: 'xml' },
      { id: 'fontdatajson', src: './assets/xhr/font.json', type: 'json' }
    ] );
    imgloader.Load( [
      { id: 'fontimg', src: './assets/images/font.png' }
    ], true );
    xhrloader.onComplete.Add( function ( event ) {

      console.log( event.data );
      console.log( JSON.stringify( event.data.dataCache.items[ 0 ].data ) === JSON.stringify( event.data.dataCache.items[ 1 ].data ) );
      done++;
      Go();
    
    } );
    imgloader.onComplete.Add( function ( event ) {

      console.log( event.data );
      done++;
      Go();
    
    } );

    var test = null;

    function Go () {

      if ( done > 1 ) {

        fontPc.BindBasicTexture( imgloader.GetBasicTexture( 'fontimg' ) );
        test = new nk.BitmapText(
          0,
          0,
          fontPc,
          xhrloader.GetData( 'fontdataxml' ),
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        );
        console.log( test );
        test.maxWidth = window.innerWidth;
        stage.AddChild( test );
        test.ComputeText();
      
      }
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Circle' );
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

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLCircleProgramController( stage.gl );
    var pcLine = new nk.GLLine2DProgramController( stage.gl );

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    var hzLine = new nk.Path.Line2D( HW, 0, HW, H );
    var vtLine = new nk.Path.Line2D( 0, HH, W, HH );
    hzLine.LinkProgramController( pcLine );
    vtLine.UseProgramController( pcLine );
    stage.Mount( new nk.Graphic2D( 0, 0, hzLine ), new nk.Graphic2D( 0, 0, vtLine ) );
    stage.children[ 0 ].interactive = false;
    stage.children[ 1 ].interactive = false;

    var i = 1000;

    while ( i-- ) {

      var path = new nk.Path.Circle( 0, 0, RI( 2, 30 ) );
      path.style.fill.color = new nk.Color( RI( 0, 255 ), RI( 0, 255 ), RI( 0, 255 ) ).ComputeValueHex();
      path.LinkProgramController( pc );
      var g = new nk.Graphic2D( RF( 0, W ), RF( 0, H ), path );
      g.GLPreDraw = PreDraw;
      g.AttachTo( stage );
    
    }

    function PreDraw () {

      this.path.LinkStyle();
    
    }

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );

  }

};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Line2D' );
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

    var W = c.width;
    var H = c.height;

    var mX = W / 45;
    var mY = H / 45;

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLLine2DProgramController( stage.gl );

    var s = new nk.Vector2D();

    var points = nk.Math.SquareGrid( W + mX, H + mY, mX, mY, nk.Vector2D );

    var i = points.length;

    while ( i-- ) {

      var e = points[ i ];
      var path = new nk.Path.Line2D( s, e );
      path.LinkProgramController( pc );
      var g = new nk.Graphic2D( 0, 0, path );
      g.AttachTo( stage );
    
    }

    function Update () {

      s.SetV( stage.mouse.position );
    
    }

    stage.onProcess.Add( Update, stage );

    document.body.removeChild( buttonContainer );

  }

};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL PixelBatch' );
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

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0, true, true );
    stage.ticker.Start();

    var pc = new nk.GLPixelBatchProgramController( stage.gl );
    stage.UseAsBatchParent( pc );

    var RF = nk.Utils.RandomFloat;

    ( function () {

      var i = 20000;

      while ( i-- ) {

        var p = new nk.Path.Pixel( 0, 0 );
        p.colorObj.r = 0.4;
        p.colorObj.g = Math.random();
        p.colorObj.b = 0.8;
        p.colorObj.a = RF( 0.1, 0.6 );
        p.style.pixel.size = RF( 1, 2 );
        var g = new nk.Graphic2D( HW, HH, p );
        g.data.velocity = new nk.Vector2D( RF( -10, 10 ), RF( -1, 10 ) );
        g.data.torque = RF( -nk.Math.RADIAN * 10, nk.Math.RADIAN * 10 );
        stage.Mount( g );
        g.UpdateTransform();
      
      }

      stage.ComputeBatchBuffer();

    }() );

    stage.onProcess.Add( function prasd () {

      this.children.forEach( function ( child ) {

        child.data.velocity.Rotate( child.data.torque );
        child.position.AddV( child.data.velocity );
        child.UpdateInBuffer();
      
      } );

      if ( stage.ticker.GetTPS() < 40 ) {

        console.log( stage.ticker.GetTPS() );
      
      }
    
    }, stage );

    console.log( stage.childDataBuffer );

    document.body.removeChild( buttonContainer );

  }

};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Rectangle' );
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

    var W = c.width;
    var H = c.height;

    var stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLRectangleProgramController( stage.gl );

    var RF = nk.Utils.RandomFloat;

    var path = new nk.Path.AABB2D( -10, -10, 10, 10 );
    path.LinkProgramController( pc );

    var i = 1000;

    while ( i-- ) {

      var g = new nk.Graphic2D( RF( 0, W ), RF( 0, H ), path );
      g.AttachTo( stage );
    
    }

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.mouse.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.mouse.onUp.Add( function () {

      if ( dragger ) {

        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );

  }

};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Stresstest' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    
    nk.Sprite.BUILD_DEFAULT_TEXTURE();

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var gl = c.getContext( 'webgl' );

    if ( !gl ) {

      gl = c.getContext( 'experimental-webgl' );
    
    }

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var container = new nk.Container2D( 0, 0 );
    container.scale.Set( 2 / W, -2 / H );
    container.position.Add( -1 + 1, 0 );
    container.UpdateTransform();

    var pcon = null;
    var pcon0 = null;
    var pcon1 = null;

    var cpath = new nk.Path.Circle( 0, 0, 25 );
    pcon0 = new nk.GLCircleProgramController( gl );
    cpath.LinkProgramController( pcon0 );

    var rpath = new nk.Path.AABB2D( -25, -25, 25, 25 );
    pcon1 = new nk.GLRectangleProgramController( gl );
    rpath.LinkProgramController( pcon1 );

    var usedPath = rpath;

    function CreateTexture () {

      var path = new nk.Path.Polygon2D();
      path.style.stroke.lineWidth = 1;
      nk.Geom.Polygon2D.Construct.Cyclic( path, 0, 0, 32, 12 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
    
    }

    var ticker = new nk.Ticker( Update, 1000, true );
    ticker.Start();

    var numTimes = 20;
    var hold = 20;
    var holdCounter = 0;
    var fps = 40;

    var am = 35;

    var childrenMDC = [];

    var spritePool = new nk.Pool( nk.Sprite );
    var graphicPool = new nk.Pool( nk.Graphic2D );

    var usedPool = spritePool;

    var timer = new nk.Timer();
    timer.onFinish.Add( function () {

      var i = am;
      am = am < 3 ? 3 : am--;

      while ( i-- ) {

        var obj = usedPool.Retrieve();
        container.AddChild( obj );
      
      }

      if ( ticker.GetTPS() > fps || holdCounter++ < hold ) {

        this.Start( 1 );
      
      }
      else {

        var numChildren = container.children.length;
        console.log( numChildren, ticker.GetTPS() );
        container.children.forEach( function ( child ) {

          usedPool.Store( child );
        
        } );
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

    var imageCache = new nk.ImageLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture )
    } ], true );
    imageCache.onComplete.Add( function () {

      pcon = new nk.GLTextureProgramController( gl );
      pcon.BindBasicTexture( imageCache.GetBasicTexture( 'tex' ) );

      spritePool.Flood( function ( obj ) {

        obj.x = Math.random() * W - HW;
        obj.y = Math.random() * H - HH;
        obj.programController = pcon;
        obj.transformAutomaticUpdate = false;
        obj.SetTexture( pcon.originalTexture );
      
      }, 100000 );
      graphicPool.Flood( function ( obj ) {

        obj.x = Math.random() * W - HW;
        obj.y = Math.random() * H - HH;
        obj.transformAutomaticUpdate = false;
        obj.SetPath( usedPath );
      
      }, 100000 );
      timer.Start( 120 );
    
    } );

    function Update () {

      gl.viewport( 0, 0, W, H );
      gl.clear( gl.COLOR_BUFFER_BIT );
      gl.enable( gl.BLEND );
      gl.disable( gl.DEPTH_TEST );
      gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );
      container.GLDraw( gl );
      timer.Process();
      gl.flush();
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL TextureBatch' );
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

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var RF = nk.Utils.RandomFloat;
    var RI = nk.Utils.RandomInteger;

    var stage = window.stage = new nk.Stage2D( c, 0, 0, false, true );

    var pc = new nk.GLTextureBatchProgramController( stage.gl );
    stage.UseAsBatchParent( pc );

    var ic = new nk.ImageLoader();
    ic.onComplete.Add( function () {

      var tex = ic.GetBasicTexture( 'colors' );
      pc.BindBasicTexture( tex );

      ( function () {

        var i = 5000;

        while ( i-- ) {

          var s = new nk.Sprite( HW, HH, tex );
          var ac = s.animationController = new nk.Animator.Controller( s );
          var anim = ac.CreateAnimation( 'test', RI( 5, 40 ) );
          anim.GenerateFrames( 64, 64, 1024, 64, 16 );
          ac.PlayAnimation( 'test', RI( 0, 15 ) );
          var vx = RI( 1, 3 );
          vx = nk.Utils.ThisOrThat( vx, -vx );
          var vy = RI( 1, 3 );
          vy = nk.Utils.ThisOrThat( vy, -vy );
          var to = RF( nk.Math.RADIAN, nk.Math.RADIAN * 5 );
          to = nk.Utils.ThisOrThat( to, -to );
          s.data.velocity = new nk.Vector2D( vx, vy );
          s.data.torque = to;
          s.scale.Set( 0.3 );
          s.anchor.Set( 0.5 );
          stage.Mount( s );
          s.UpdateTransform();
        
        }

        stage.ComputeBatchBuffer();

        stage.onProcess.Add( function () {

          for ( var i = 0, child; i < this.children.length; ++i ) {

            child = this.children[ i ];
            child.animationController.Process();
            child.data.velocity.Rotate( child.data.torque );
            child.position.AddV( child.data.velocity );
            child.UpdateInBuffer();
          
          }

          if ( stage.ticker.GetTPS() < 40 ) {

            console.log( stage.ticker.GetTPS() );
          
          }
        
        }, stage );
      
      }() );
    
    } );

    ic.Load( [
      { id: 'colors', src: './assets/images/colors.png' }
    ], true );

    document.body.removeChild( buttonContainer );

  }

};


/***/ })
/******/ ]));
//# sourceMappingURL=tests.js.map