module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'BitmapFont' );
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

    var stage = new nk.Stage2D( {
      canvas: c,
      x: 0,
      y: 0
    } );
    stage.backgroundColor = '#FFF';

    var xhrloader = new nk.XHRLoader();
    var imgloader = new nk.ImageLoader();
    var done = 0;
    xhrloader.Load( [
      { id: 'fontdataxml', src: './assets/xhr/font.fnt', type: 'xml' },
      { id: 'fontdatajson', src: './assets/xhr/font.json', type: 'json' },
      { id: 'fontNoK', src: './assets/xhr/fontNoK.xml', type: 'xml' }
    ] );
    imgloader.Load( [
      { id: 'fontimg', src: './assets/images/font.png' },
      { id: 'fontNoK', src: './assets/images/fontNoK.png' }
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

    // var test = null;
    var test2 = null;

    function Go () {

      if ( done > 1 ) {

        /*
         * test = new nk.BitmapText(
         * 0,
         * 0,
         * imgloader.GetBasicTexture( 'fontimg' ),
         * xhrloader.GetData( 'fontdataxml' ),
         * 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         * );
         * console.log( test );
         * test.maxWidth = window.innerWidth;
         * stage.AddChild( test );
         *test.ComputeText(); 
         */

        test2 = nk.BitmapText(
          0, 0,
          imgloader.GetBasicTexture( 'fontNoK' ),
          xhrloader.GetData( 'fontNoK' ),
          'Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        );
        test2.maxWidth = window.innerWidth * 0.6;
        test2.lineHeight = 40;
        test2.AttachTo( stage );
        test2.ComputeText();
        console.log( test2 );

        stage.AddChild( nk.Graphic2D( 0, 0, nk.Path.AABB2D( 0, 0, test2.width, test2.height ) ) ).alpha = 0.5;
      
      }
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
