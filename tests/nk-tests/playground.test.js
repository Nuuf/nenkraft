module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '50%';
    c.style.left = '50%';
    c.style.transform = 'translate(-50%, -50%)';

    var W = 1920, HW = W * 0.5;
    var H = 1080, HH = H * 0.5;

    var stage = new nk.Stage2D( { 
      canvas: c,
      x: 0,
      y: 0,
      mode: 'WebGL',
      clear: true
    } );
    var root = nk.Container2D();
    var scene = nk.Container2D();

    stage.AddChild( root );
    root.AddChild( scene );

    scene.position.Set( HW, HH );
    scene.scale.Set( 1.5 );

    nk.CanvasManager( c, W, H, nk.CanvasManager.KEEP_ASPECT_RATIO_FIT )
      .BindStage( stage )
      .BindContainer( root )
      .Trigger();

    var imageLoader = nk.ImageLoader( [ {
      id: 'tex',
      src: './assets/images/colors.png'
    } ], true );
    imageLoader.onComplete.Add( function() {

      var pcon = nk.GLTextureProgramController( stage.gl );
      pcon.BindBasicTexture( imageLoader.GetBasicTexture( 'tex' ) );

      var anim = nk.Animator.Animation( {} );
      anim.GenerateFrames( 64, 64, 1024, 64, 16 );

      var pdata = {
        texture: pcon,
        frames: anim.frames,
        anchor: 0.5,
        amount: 2,
        position: {
          x: 0,
          y: HH / 1.5
        },
        velocity: {
          y: {
            min: -5,
            max: 0
          }
        },
        growth: {
          x: 0.99,
          y: 0.99
        },
        lifespan: 500,
        fade: true,
        scale: {
          xy: 0.4
        },
        oscillation: {
          offset: {
            min: 0,
            max: 200
          },
          velocity: {
            x: {
              from: -5,
              to: 5,
              amplitude: 5
            }
          },
          spin: {
            from: -Math.PI / 180,
            to: Math.PI / 180,
            amplitude: 1
          }
        }
      };
  
      var ps = nk.ParticleSystem();
  
      scene.AddChild( ps );
  
      stage.onProcess.Add( function() {
  
        ps.Process();

        ps.Emit( pdata );
      
      } );
  
      console.log( stage, ps );

      var x = {
        y: [
          0, 0, { z: 0 }
        ],
        t: {
          p: 0
        }
      };

      var copy = nk.Utils.DeepClone( x );

      console.log( copy === x, x, copy );

      copy.t.p = 1;

      ( function() {

        var points = nk.Geom.Circle.PerimeterPoints( nk.Geom.Circle( 0, 0, 360 ), 180, 2 );
  
        points.forEach( function( point ) {
  
          var s = nk.Sprite( point.x, point.y, pcon );
          anim.frames[0].Apply( s );
          s.scale.Set( 0.1 );
          s.rotation = nk.Utils.RandomFloat( 0, nk.Math.PII );
          scene.AddChild( s );
        
        } );
      
      }() );
    
    } );

    ( function() {

      var a = nk.Vector2D( 100, 100 );
      var b = nk.Vector2D( 450, 670 );
      var c = a.GetWeightedAverageV( b, 0.5 );
      var parts = nk.Geom.Line2D( a, b ).Cut( 0.33, 0.66 );
  
      console.log( c, parts );
    
    }() );

    nk.Glob.Create( 'GAME' );

    var GAME = window.GAME;

    var FUNC = nk.Glob.FUNCTION, VAL = nk.Glob.VALUE, CONST = nk.Glob.CONSTANT, ARR = nk.Glob.LIST, OBJ = nk.Glob.OBJECT, COMP = nk.Glob.COMPONENT;

    GAME.Mark( FUNC, 'myFunc' );
    GAME.Set( FUNC, 'myFunc', function(){} );

    GAME.Mark( VAL, 'myValue' );
    GAME.Set( VAL, 'myValue', 'SOME_VALUE' );
    GAME.Mark( VAL, 'myValue' );
    GAME.Set( VAL, 'myValue', 'NEW_VALUE' );

    GAME.Mark( CONST, 'myConstant' );
    GAME.Set( CONST, 'myConstant', 'CONSTANT' );
    // window.GAME.Mark( CONST, 'myConstant' );

    GAME.Mark( ARR, 'myList' );
    GAME.Set( ARR, 'myList', [] );

    GAME.Mark( OBJ, 'myObject' );
    GAME.Set( OBJ, 'myObject', {} );

    GAME.Define( COMP, 'MyComp', function(){} );
    GAME.Get( COMP, 'MyComp' );

    GAME.Mark( VAL, 'nullVal' );

    // nk.Glob.AllowGetNullUndefined = true;
    try {

      GAME.Get( VAL, 'nullVal' );
    
    } catch ( error ) {

      console.log( error );
    
    }

    console.log( GAME, GAME.Get( VAL, 'myValue' ) );

    document.body.removeChild( buttonContainer );
  
  }

};
