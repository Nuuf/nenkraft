module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Scaling' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE( function() {

      nk.Plainsprite.BUILD_DEFAULT_TEXTURE( go );
    
    } );

    function go() {

      var c = document.getElementsByTagName( 'canvas' )[ 0 ];
      c.style.display = 'initial';
      c.style.position = 'absolute';
      c.style.top = '50%';
      c.style.left = '50%';
      c.style.transform = 'translate(-50%, -50%)';

      var 
        stage,
        root,
        scene;

      var W = 1920, HW = W * 0.5;
      var H = 1080, HH = H * 0.5;

      stage = new nk.Stage2D( { 
        canvas: c,
        x: 0,
        y: 0,
        halt: true,
        mode: 'WebGL'
      } );
      stage.ticker.StartAF();

      root = nk.Container2D();
      scene = nk.Container2D();

      stage.AddChild( root );
      root.AddChild( scene );

      scene.position.Set( HW, HH );

      nk.CanvasManager( c, W, H, nk.CanvasManager.KEEP_ASPECT_RATIO_FIT )
        .BindStage( stage )
        .BindContainer( root )
        .Trigger();

      var pc = new nk.GLCircleProgramController( stage.gl );
      var path = new nk.Path.Circle( 0, 0, 100 );
      path.LinkProgramController( pc );
      scene.AddChild( nk.Graphic2D( 0, 0, path ) );
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
