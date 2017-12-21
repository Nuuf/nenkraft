module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'WebGL Rectangle' );
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

    var W = c.width;
    var H = c.height;
    var HW = W * 0.5;
    var HH = H * 0.5;

    var wRatio = W / H;

    var stage = new nk.Stage2D( c, 0, 0, false, true );


    var pc = new nk.GLRectangleProgramController( stage.gl );

    var RF = nk.Utils.RandomFloat;

    var path = new nk.Path.AABB2D( -10, -10, 10, 10 );
    path.LinkProgramController( pc );

    var i = 1000;
    while ( i-- ) {
      var g = new nk.Graphic2D( RF( 0, W ), RF( 0, H ), path );
      g.AttachTo( stage );
    }




    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();


    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragStart.SetV( p );

          dragger = stage.children[ i ];

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) {
        dragger = null;
      }
    } );

    document.body.removeChild( buttonContainer );


  }
};