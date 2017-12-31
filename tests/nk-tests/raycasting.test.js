module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Raycasting' );
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

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();



    var polygons = [];
    var rays = [];

    ( function () {
      var i = 15;
      while ( i-- ) {
        var p = new nk.Path.Polygon2D();
        nk.Geom.Polygon2D.Construct.Cyclic(
          p,
          nk.Utils.RandomInteger( -HW, HW ),
          nk.Utils.RandomInteger( -HH, HH ),
          nk.Utils.RandomInteger( 30, 60 ),
          nk.Utils.RandomInteger( 3, 5 )
        );
        p.Rotate( nk.Utils.RandomFloat( 0, nk.Math.PII ) );
        var g = new nk.Graphic2D( 0, 0, p );
        polygons.push( g );
      }
    }() );

    ( function () {
      var i = 360;
      var angle = Math.PI * 2 / i;
      var r = 180;
      while ( i-- ) {
        var th = angle * i;
        var line = new nk.Path.Ray2D( 0, 0, 0, 0 );
        line.style.stroke.lineWidth = 1;
        var gr = new nk.Graphic2D( 0, 0, line );
        gr.interactive = false;
        gr.data.angle = th;
        gr.data.r = r;
        rays.push( gr );
      }
    }() );



    stage.Mount.apply( stage, polygons.concat( rays ) );

    stage.onProcess.Add( function () {
      rays.forEach( function ( ray ) {
        ray.path.s.SetV( stage.mouse.position );
        ray.path.e.SetV( ray.path.s );
        ray.path.e.Add( ray.data.r, ray.data.r );
        ray.path.e.RotateAroundV( ray.path.s, ray.data.angle );
      } );
      for ( var i = 0; i < rays.length; ++i ) {
        var ray = rays[ i ];
        var polygon;
        for ( var k = 0; k < polygons.length; ++k ) {
          polygon = polygons[ k ].path;
          var vertexa, vertexb, contactPoint;

          for ( var j = 0; j < polygon.vertices.length - 1; ++j ) {
            vertexa = polygon.vertices[ j ];
            vertexb = polygon.vertices[ j + 1 ];
            contactPoint = nk.Math.LineLineIntersection(
              ray.path.s,
              ray.path.e,
              vertexa,
              vertexb
            );
            if ( contactPoint ) {
              rays[ i ].path.e.SetV( contactPoint );
            }
          }
          vertexa = polygon.vertices[ polygon.vertices.length - 1 ];
          vertexb = polygon.vertices[ 0 ];
          contactPoint = nk.Math.LineLineIntersection(
            ray.path.s,
            ray.path.e,
            vertexa,
            vertexb
          );
          if ( contactPoint ) {
            rays[ i ].path.e.SetV( contactPoint );
          }
        }

      }
    } );


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
