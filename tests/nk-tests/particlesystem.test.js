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
      mode: 'WebGL'
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

      var pdata = {
        texture: pcon,
        anchor: 0.5,
        amount: 1,
        rotation: {
          min: 0,
          max: RADIAN * 360
        },
        position: {
          x: {
            values: [ -100, 100 ]
          },
          y: {
            values: [ -100, 100 ]
          }
        },
        lifespan: 100,
        velocity: {
          x: {
            min: -2,
            max: 2
          },
          y: {
            min: -2,
            max: 2
          }
        },
        acceleration: {
          x: 1.05,
          y: 0.99
        },
        fade: true,
        deflate: true,
        torque: {
          min: -RADIAN * 10,
          max: RADIAN * 10
        },
        spin: {
          min: -RADIAN,
          max: RADIAN
        }
      };
  
      var ps = nk.ParticleSystem();
  
      scene.AddChild( ps );
  
      stage.onProcess.Add( function() {
  
        ps.Process();
  
        ps.Emit( pdata );
      
      } );
  
      console.log( stage, ps );
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
