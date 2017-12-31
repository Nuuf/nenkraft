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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

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
