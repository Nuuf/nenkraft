module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Tilesprite' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    nk.Tilesprite.BUILD_DEFAULT_TEXTURE( go );

    function go() {

      var c = document.getElementsByTagName( 'canvas' )[ 0 ];
      c.setAttribute( 'width', window.innerWidth );
      c.setAttribute( 'height', window.innerHeight );
      c.style.display = 'initial';
      c.style.position = 'absolute';
      c.style.top = '0';
      c.style.left = '0';

      var W = c.width;
      var H = c.height;
  
      var stage = new nk.Stage2D( c, 0, 0, false, false );

      var tilesprite = new nk.Tilesprite( W * 0.5 - W * 0.25, H * 0.5 - H * 0.25 );
      tilesprite.GeneratePattern( stage.rc, W * 0.5, H * 0.5 );

      stage.AddChild( tilesprite );

      stage.onProcess.Add( function() {

        tilesprite.OffsetPattern( 1, 1 );
      
      } );

      console.log( tilesprite );
    
    }

    document.body.removeChild( buttonContainer );

  }

};
