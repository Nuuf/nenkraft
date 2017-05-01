module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground 4' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_4 );
  buttonContainer.appendChild( button );

  function RunPlayground_4() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0, true );
    stage.ticker.StartAF();
    stage.ticker.StartAF();
    stage.ticker.Stop();
    stage.ticker.Start();
    stage.ticker.Start();
    stage.scale.Set( 1, 1 );
    stage.mouse.scale.SetV( stage.scale );

    var dragger = null;

    var text = new nk.Text( 0, 0, 'Collide them!' );

    var c1 = new nk.Graphic2D( 100, 100, new nk.Path.Circle( 0, 0, 50 ) );
    var c2 = new nk.Graphic2D( 200, 200, new nk.Path.Circle( 0, 0, 250 ) );
    c1.anchor.Set( 0 );
    c2.anchor.Set( 0 );

    var lineC = new nk.Graphic2D( 0, 0, new nk.Path.Line2D() );

    stage.AddChild( c1 );
    stage.AddChild( c2 );

    stage.AddChild( text );

    stage.AddChild( lineC );

    var obj1 = {
      circle: c1.path,
      relative: c1.position,
      anchor: c1.anchor
    };

    var obj2 = {
      circle: c2.path,
      relative: c2.position,
      anchor: c2.anchor
    };

    lineC.path.s.SetV( c1.position );
    lineC.path.e.SetV( c2.position );

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;

        var result = nk.Math.Collision2D.RelativeCirclevsCircle( obj1, obj2 );

        lineC.path.s.SetV( c1.position );
        lineC.path.e.SetV( c2.position );

        lineC.SendToFront();

        if ( result ) {
          text.text = 'Well done!';
          c1.position.AddV( result.mtv );
          c2.position.SubtractV( result.mtv );
        } else text.text = 'Collide them!';
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
