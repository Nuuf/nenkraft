module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Motion' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Sprite.BUILD_DEFAULT_TEXTURE( go );

    function go() {

      var c = document.getElementsByTagName( 'canvas' )[ 0 ];
      c.setAttribute( 'width', window.innerWidth );
      c.setAttribute( 'height', window.innerHeight );
      c.style.display = 'initial';
      c.style.position = 'absolute';
      c.style.top = '0';
      c.style.left = '0';
  
      var W = c.width, HW = W * 0.5;
      var H = c.height, HH = H * 0.5;
  
      var stage = new nk.Stage2D( { 
        canvas: c,
        x: HW,
        y: HH,
        noTouch: false
      } );

      console.warn( 'Touch events enabled, use touchscreen device or toolbar' );
  
      var motObj = new nk.Sprite( 0, 0 );
      motObj.anchor.Set( 0.5 );
      motObj.scale.Set( 0, 1 );
      motObj.AttachTo( stage );
  
      var mm = new nk.MotionManager( motObj );
      var xM = mm.Create( 'x', 'x' );
      var yM = mm.Create( 'y', 'y' );
      mm.Create( 'sx', 'scale.x', 1, 10 );
      mm.Create( 'sy', 'scale.y', 1, 10 );
  
      stage.touch.onEnd.Add( function ( _event ) {
  
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
  
    }
   
    document.body.removeChild( buttonContainer );
  
  }

};
