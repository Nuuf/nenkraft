module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Camera' );
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

    nk.Plainsprite.BUILD_DEFAULT_TEXTURE( go );

    function go() {

      var stage = new nk.Stage2D( {
        canvas: c,
        x: window.innerWidth * 0.5,
        y: window.innerHeight * 0.5
      } );
      var camera = stage.AddChild( new nk.Camera2D( new nk.Vector2D( 0, 0 ), null ) );
      var root = camera.AddChild( new nk.Container2D() );

      window.stage = stage;
  
      var target = new nk.Plainsprite( 0, 0 );

      root.AddChild( new nk.Plainsprite( 200, 200 ) );
      root.AddChild( new nk.Plainsprite( -200, -200 ) );
      root.AddChild( new nk.Plainsprite( -200, 200 ) );
      root.AddChild( new nk.Plainsprite( 200, -200 ) );

      root.AddChild( target );

      camera.SetTarget( target );

      stage.onProcess.Add( function() {

        camera.Process();
      
      } );

      stage.mouse.onDown.Add( function( event ) {

        target.position.SetV( event.data.position.SubtractVC( camera.position ) );
      
      } );
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
