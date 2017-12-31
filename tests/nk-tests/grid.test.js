module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Grid' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.backgroundColor = '#000';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;
    var ratio = W / H;

    var stage = new nk.Stage2D( c, 0, 0 );
    var container = new nk.Container2D();
    stage.AddChild( container );

    var i = 0;

    var mx = W / 30;
    var my = H / 30;

    var points = nk.Math.SquareGrid( W, H, mx, my, nk.Vector2D );

    console.log( points );

    i = points.length;
    while ( i-- ) {
      container.AddChild( new nk.Graphic2D( points[ i ].x, points[ i ].y, new nk.Path.AABB2D( 0, 0, mx, my ) ) );
    }

    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position.DivideVC( container.scale );
      for ( var i = container.children.length; i--; ) {
        if ( container.children[ i ].IntersectsPoint( p ) ) {
          container.children[ i ].Destroy();
          break;
        }
      }
    }, stage );
    stage.mouse.onWheel.Add( function ( _event ) {
      if ( _event.data.native.deltaY < 0 ) {
        container.scale.Add( 0.1, 0.1 );
      } else {
        container.scale.Subtract( 0.1, 0.1 );
      }
    } );

    document.body.removeChild( buttonContainer );
  }
};
