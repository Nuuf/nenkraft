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
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.backgroundColor = '#FFF';

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
        test = new nk.BitmapText(
          0,
          0,
          imgloader.GetBasicTexture( 'fontimg' ),
          xhrloader.GetData( 'fontdataxml' ),
          'Hello world, this is another world'
        );
        console.log( test );
        stage.AddChild( test );
      }
    }


    document.body.removeChild( buttonContainer );
  }
};