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
      c.style.top = '0';
      c.style.left = '0';

      var W = c.width, HW = W * 0.5;
      var H = c.height, HH = H * 0.5;

      var stage = new nk.Stage2D( c, HW, HH, true );
      stage.ticker.StartAF();

      nk.CanvasManager( c, 1920, 1080, nk.CanvasManager.KEEP_ASPECT_RATIO ).BindStage( stage ).Trigger();
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
