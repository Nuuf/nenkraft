module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'PolygonCollision' );
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

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.SetDesiredRate( 120 );
    stage.ticker.Start();

    var RI = nk.Utils.RandomInteger;

    var objs = [];

    var dragger = null;
    var dragStart = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    function CreatePolygon () {

      var p = new nk.Path.Polygon2D();
      nk.Geom.Polygon2D.Construct.Cyclic( p, 0, 0, RI( 10, 60 ), RI( 3, 6 ) );
      var pg = new nk.Graphic2D( 0, 0, p );
      stage.Mount( pg );
      objs.push( {
        shape: p,
        relative: pg.position,
        anchor: new nk.Vector2D()
      } );
    
    }

    ( function () {

      var i = 50;

      while ( i-- ) {

        CreatePolygon();
      
      }
    
    }() );

    var Collide = nk.Math.Collision2D.PolygonvsPolygon.Relative.Collide;
    var result = new nk.Math.Collision2D.PolygonvsPolygon.Result();

    stage.onProcess.Add( function () {

      for ( var i = 0, l = objs.length; i < l; ++i ) {

        var obj1 = objs[ i ];

        for ( var j = 0; j < l; ++j ) {

          var obj2 = objs[ j ];
          if ( obj2 === obj1 ) continue;
          result.Reset();

          if ( Collide( obj1, obj2, result ) ) {

            if ( dragger ) {

              if ( obj1.relative !== dragger.position ) obj1.relative.SubtractV( result.mtv );
              if ( obj2.relative !== dragger.position ) obj2.relative.AddV( result.mtv );
            
            }
            else {

              obj1.relative.SubtractV( result.mtv );
              obj2.relative.AddV( result.mtv );
            
            }
          
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
    stage.mouse.onUp.Add( function () {

      if ( dragger ) dragger = null;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
