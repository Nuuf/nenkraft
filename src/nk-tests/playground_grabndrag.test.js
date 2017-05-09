module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'GrabnDrag' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = 0;
    c.style.left = 0;
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c );

    var text = new nk.Text( 100, 100, 'Grab and drag' );

    var graphicCircle = new nk.Graphic2D( 350, 150, new nk.Path.Circle( 0, 0, 100 ) );
    var graphicRectangle = new nk.Graphic2D( 450, 200, new nk.Path.AABB2D( 0, 0, 200, 200 ) );
    graphicRectangle.anchor.Set( 0.5 );

    var dragger = null;

    stage.AddChild( text );
    stage.AddChild( graphicCircle );
    stage.AddChild( graphicRectangle );

    var t = 10;
    while ( --t ) {
      stage.AddChild( new nk.Graphic2D( HW, HH, new nk.Path.AABB2D( 0, 0, 200, 200 ) ) );
    }

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data;
      for ( var i = stage.children.length; i--; ) {
        if ( stage.children[ i ].IntersectsPoint( p ) ) {
          dragger = stage.children[ i ];

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        }
      }
    }, stage );
    stage.mouse.onUp.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );


    document.body.removeChild( buttonContainer );
  }
};
