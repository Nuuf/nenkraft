module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground 3' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_3 );
  buttonContainer.appendChild( button );

  function RunPlayground_3() {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = '100px';
    c.style.left = '100px';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, 0, 0 );
    stage.scale.Set( 1, 1 );
    stage.mouse.scale.SetV( stage.scale );


    var text = new nk.Text( 0, 0, 'Put them together!' );

    var aabbg1 = new nk.Graphic2D( 300, 100, new nk.Path.AABB2D( 0, 0, 50, 50 ) );
    var aabbg2 = new nk.Graphic2D( 400, 400, new nk.Path.AABB2D( 0, 0, 400, 100 ) );
    aabbg1.anchor.Set( 0.3 );
    aabbg2.anchor.Set( 0.5 );

    stage.AddChild( aabbg1 );
    stage.AddChild( aabbg2 );

    stage.AddChild( text );

    var dragger = null;
    var test = null;

    var obj1 = {
      aabb: aabbg1.path,
      relative: aabbg1.position,
      anchor: aabbg1.anchor
    };

    var obj2 = {
      aabb: aabbg2.path,
      relative: aabbg2.position,
      anchor: aabbg2.anchor
    };

    stage.mouse.onMove.Add( function ( _event ) {
      if ( dragger !== null ) {
        dragger.x = _event.data.x;
        dragger.y = _event.data.y;

        mtv = nk.Math.Collision2D.RelativeAABB2DvsAABB2D( obj1, obj2 );

        if ( mtv !== null ) {
          text.text = 'Well done!';
          aabbg1.position.AddV( mtv );
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
