module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground' );
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

    var test1 = new nk.Graphic2D( 0, 0, new nk.Path.AABB2D( 0, 0, 200, 220 ) );
    var test2 = new nk.Graphic2D( 0, 0, new nk.Path.AABB2D( 0, 0, 25, 10 ) );
    test1.scale.Set( 0.1, 2 );

    stage.AddChildren( test1, test2 );

    var dragger = null;

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;

        var b1 = test1.ComputeBounds();
        var b2 = test2.ComputeBounds();
        if ( b1.IntersectsAABB2D( b2 ) ) {
          test1.path.style.fill.color = '#F00';
        } else {
          test1.path.style.fill.color = '#0F0';
        }
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
    stage.mouse.onLeave.Add( function ( _event ) {
      if ( dragger ) dragger = null;
    } );

    document.body.removeChild( buttonContainer );
  }
};