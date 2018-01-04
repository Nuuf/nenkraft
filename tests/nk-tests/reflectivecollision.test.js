module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'ReflectiveCollision' );
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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH );

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    var RI = nk.Utils.RandomInteger;
    var RF = nk.Utils.RandomFloat;

    var lines = [];
    var circles = [];

    function CreateCircle ( _x, _y, _radius ) {

      var c = new nk.Path.Circle( 0, 0, _radius );
      var cg = new nk.Graphic2D( _x, _y, c );
      cg.data.body = {
        shape: c,
        relative: cg.position,
        velocity: new nk.Vector2D( RF( -5, 5 ), RF( -5, 5 ) )
      };
      stage.Mount( cg );
      circles.push( cg );
    
    }

    function CreateLine ( _x, _y, _width, _rotation, _interactive ) {

      var l = new nk.Path.Line2D( -_width * 0.5, 0, _width * 0.5, 0 );
      l.Rotate( nk.Math.RADIAN * _rotation );
      var lg = new nk.Graphic2D( _x, _y, l );
      lg.data.body = {
        shape: l,
        relative: lg.position
      };
      lines.push( lg );
      stage.Mount( lg );

      if ( _interactive === false ) {

        lg.interactive = false;
      
      }
    
    }

    var Collide = nk.Math.Collision2D.CirclevsLine.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsLine.Relative.ReflectingResponse;
    var result = new nk.Math.Collision2D.CirclevsLine.Result();

    ( function () {

      var i = 25;

      while ( i-- ) {

        CreateLine( RI( -HW, HW ), RI( -HH, HH ), 100, RI( 0, 360 ) );
      
      }
    
    }() );

    CreateLine( -HW, 0, H, 90, false );
    CreateLine( HW, 0, H, 90, false );
    CreateLine( 0, -HH, W, 0, false );
    CreateLine( 0, HH, W, 0, false );

    ( function () {

      var i = 25;

      while ( i-- ) {

        CreateCircle( RI( -HW, HW ), RI( -HH, HH ), RI( 5, 10 ) );
      
      }
    
    }() );

    stage.onProcess.Add( function () {

      circles.forEach( function ( circle ) {

        circle.position.AddV( circle.data.body.velocity );
        lines.forEach( function ( line ) {

          result.Reset();
          Collide( circle.data.body, line.data.body, result );

          if ( result.occured ) {

            Response( circle.data.body, line.data.body, result );
          
          }
        
        } );
      
      } );
    
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
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
