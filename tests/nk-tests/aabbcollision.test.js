module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'AABBCollision' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '100px';
    c.style.left = '100px';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.scale.Set( 1, 1 );
    stage.mouse.scale.SetV( stage.scale );


    var text = new nk.Text( 0, 0, 'Collide them!' );

    var aabbg1 = new nk.Graphic2D( 300, 100, new nk.Path.AABB2D( 0, 0, 50, 50 ) );
    var aabbg2 = new nk.Graphic2D( 400, 400, new nk.Path.AABB2D( 0, 0, 400, 100 ) );

    var lineC = new nk.Graphic2D( 0, 0, new nk.Path.Line2D() );
    lineC.interactive = false;

    stage.AddChild( aabbg1 );
    stage.AddChild( aabbg2 );

    stage.AddChild( text );

    stage.AddChild( lineC );

    var dragger = null;
    var test = null;

    var obj1 = {
      shape: aabbg1.path,
      relative: aabbg1.position,
      anchor: new nk.Vector2D()
    };

    var obj2 = {
      shape: aabbg2.path,
      relative: aabbg2.position,
      anchor: new nk.Vector2D()
    };

    var result = new nk.Math.Collision2D.AABB2DvsAABB2D.Result();

    lineC.path.s.SetV( aabbg1.position );
    lineC.path.e.SetV( aabbg2.position );

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.position.x;
        dragger.y = _event.data.position.y;

        result.occured = false;

        nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide( obj1, obj2, result );

        lineC.path.s.SetV( aabbg1.position );
        lineC.path.e.SetV( aabbg2.position );

        lineC.SendToFront();

        if ( result.occured === true ) {
          text.text = 'Well done!';
          aabbg1.position.AddV( result.mtv );
        } else text.text = 'Collide them!';
      }
    }, stage );
    stage.mouse.onDown.Add( function ( _event ) {
      var p = _event.data.position;
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