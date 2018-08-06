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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( { 
      canvas: c,
      x: 0,
      y: 0
    } );

    console.warn( 'Touch events enabled, use touchscreen device or toolbar' );

    var text = new nk.Text( 100, 100, 'Grab and drag' );

    var graphicCircle = new nk.Graphic2D( 350, 150, new nk.Path.Circle( 0, 0, 100 ) );
    var graphicRectangle = new nk.Graphic2D( 450, 200, new nk.Path.AABB2D( -100, -100, 100, 100 ) );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    stage.AddChild( text );
    stage.AddChild( graphicCircle );
    stage.AddChild( graphicRectangle );

    var t = 10;

    while ( --t ) {

      stage.AddChild( new nk.Graphic2D( HW, HH, new nk.Path.AABB2D( -100, -100, 100, 100 ) ) );
    
    }

    stage.touch.onMove.Add( function ( _event ) {

      if ( dragger !== null ) {

        dragger.x = _event.data.position.x + dragOffset.x - dragStart.x;
        dragger.y = _event.data.position.y + dragOffset.y - dragStart.y;
      
      }
    
    }, stage );
    stage.touch.onStart.Add( function ( _event ) {

      var p = _event.data.position;

      for ( var i = stage.children.length; i--; ) {

        if ( stage.children[ i ].IntersectsPoint( p ) ) {

          dragStart.SetV( p );

          dragger = stage.children[ i ];
          dragger.gco = nk.Style.GCO.MULTIPLY;
          dragger.scale.Set( 2, 2 );

          dragOffset.SetV( dragger );

          _event.stopPropagation = true;

          dragger.SendToFront();
          break;
        
        }
      
      }
    
    }, stage );
    stage.touch.onEnd.Add( function () {

      if ( dragger ) {

        dragger.gco = nk.Style.GCO.DEFAULT;
        dragger.scale.Set( 1, 1 );
        dragger = null;
      
      }
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
