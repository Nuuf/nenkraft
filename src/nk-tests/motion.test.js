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
      sxM.Reset();
      syM.Reset();
      xM.Reconfigure( undefined, _event.data.x, 60 );
      yM.Reconfigure( undefined, _event.data.y, 60 );
      xM.Start();
      yM.Start();
      sxM.Start();
      syM.Start();

    }, stage );

    stage.onProcess.Add( function () {
      mm.Process();
    } );

    document.body.removeChild( buttonContainer );
  }
};