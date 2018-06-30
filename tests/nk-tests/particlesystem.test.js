module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'ParticleSystem' );
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

    var RADIAN = nk.Math.RADIAN;

    scene.position.Set( HW, HH );
    scene.scale.Set( 3 );

    nk.CanvasManager( c, W, H, nk.CanvasManager.KEEP_ASPECT_RATIO_FIT )
      .BindStage( stage )
      .BindContainer( root )
      .Trigger();

    function CreateTexture () {

      var path = new nk.Path.Polygon2D();
      path.style.stroke.lineWidth = 1;
      nk.Geom.Polygon2D.Construct.Cyclic( path, 0, 0, 4, 5 );
      var d = path.aabb.br.AbsoluteCopy().SubtractVC( path.aabb.tl.AbsoluteCopy() );
      var t = new nk.Graphic2D( ( path.aabb.w * 0.5 ) - ( d.x * 0.5 ), ( path.aabb.h * 0.5 ) - ( d.y * 0.5 ), path );
      return t;
  
    }

    var imageLoader = nk.ImageLoader( [ {
      id: 'tex',
      src: nk.Utils.GenerateSimpleBase64Png( CreateTexture, 8, 8 )
    } ], true );
    imageLoader.onComplete.Add( function() {

      var pcon = nk.GLTextureProgramController( stage.gl );
      pcon.BindBasicTexture( imageLoader.GetBasicTexture( 'tex' ) );

      var shapePolygon = nk.Geom.Polygon2D();
      nk.Geom.Polygon2D.Construct.Star( shapePolygon, 0, 0, 50, 25, 5 );
      var points = nk.Geom.Polygon2D.GenerateRandomPoints( shapePolygon, 1000, false, true );

      /*
       *var shapeCircle = nk.Geom.Circle( 0, 0, 100 );
       *var points = nk.Geom.Circle.GenerateRandomPoints( shapeCircle, 1000, false, false );
       *
       * var shapePolygon = nk.Geom.Polygon2D();
       * nk.Geom.Polygon2D.Construct.Star( shapePolygon, 0, 0, 200, 50, 5 );
       * var points = [];
       * var lines = nk.Geom.Polygon2D.ExtractSegments( shapePolygon );
       * var cuts = nk.Utils.GenerateSequence( 0.1, 0.9, 0.1, 1 );
       * lines.forEach( function( line ) {
       *
       * line.Cut( cuts, points );
       *
       * } );
       *
       *console.log( points, lines, cuts );
       *
       *var shapeCircle = nk.Geom.Polygon2D();
       *nk.Geom.Polygon2D.Construct.Cyclic( shapeCircle, 0, 0, 100, 1000 );
       *var points = shapeCircle.vertices;
       */

      var pdata = {
        texture: pcon,
        anchor: 0.5,
        amount: 5,
        rotation: {
          min: 0,
          max: RADIAN * 360
        },
        position: {
          points: points
        },
        lifespan: 200,
        velocity: {
          x: 0,
          y: {
            min: -2,
            max: 2
          }
        },
        fade: true,
        deflate: true,
        spin: {
          min: -RADIAN * 360,
          max: RADIAN * 360
        },
        scale: {
          xy: {
            min: 1,
            max: 2
          }
        },
        oscillation: {
          gravity: {
            y: {
              from: -0.1,
              to: 0.1,
              amplitude: 7
            },
            x: {
              from: -0.4,
              to: 0.25,
              amplitude: 7
            }
          }
        }
      };

      var xdata = {
        texture: pcon,
        anchor: 0.5,
        amount: 23,
        rotation: {
          min: 0,
          max: RADIAN * 360
        },
        position: {
          points: points
        },
        lifespan: 150,
        velocity: {
          x: {
            min: 0,
            max: 25
          }
        },
        fade: true,
        scale: {
          xy: 1
        }
      };

      var nps = [];

      for ( var i = 0; i <= 360; i += 12 ) {

        nps.push( {
          x: Math.cos( nk.Math.DTR( i ) ) * 1,
          y: Math.sin( nk.Math.DTR( i ) ) * 1
        } );
      
      }

      var ydata = {
        texture: pcon,
        anchor: 0.5,
        amount: nps.length,
        rotation: {
          min: 0,
          max: RADIAN * 360
        },
        position: {
          xy: 0
        },
        lifespan: 150,
        velocity: {
          points: nps,
          moduloWrapper: nps.length - 1
        },
        fade: true,
        scale: {
          xy: 1
        }
      };
  
      var ps = nk.ParticleSystem();
  
      scene.AddChild( ps );

      var pulseTimer = nk.Timer( 20 );
      pulseTimer.onFinish.Add( function(){

        ps.Emit( xdata );
        ps.Emit( ydata );
        pulseTimer.Start();
      
      } );
      pulseTimer.Start();
  
      stage.onProcess.Add( function() {

        ps.Process();

        ps.Emit( pdata );

        pulseTimer.Process();
      
      } );
  
      console.log( stage, ps );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
