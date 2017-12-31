module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'ElasticCollision' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.backgroundColor = '#FFF';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width;
    var H = c.height;

    var stage = new nk.Stage2D( c, 0, 0, true );
    stage.ComputeBounds();
    stage.backgroundColor = 'rgba(255,255,255,1)';
    //stage.clear = false;
    stage.ticker.StartAF();

    var fps = new nk.Text( 0, 0, '' );
    fps.style.text.fillColor = '#000';
    fps.style.text.strokeColor = '#000';
    fps.style.text.font = '60px Arial';

    var colliders = [];
    var bounds = new nk.AABB2D();
    bounds.SetC( stage.bounds );
    var root = new nk.QuadtreeNode( bounds, 0, 5, 5 );
    var objs = [];
    var nodes = [];

    function Collider () {

      var mass = nk.Utils.RandomInteger( 10, 30 );
      var p = new nk.Path.Circle( 0, 0, mass );
      p.style.fill.applied = false;
      p.style.stroke.color = new nk.Color( nk.Utils.RandomInteger( 100, 255 ), 0, nk.Utils.RandomInteger( 100, 255 ), 1 ).value;
      p.style.stroke.lineWidth = mass / 5;
      var g = new nk.Graphic2D( nk.Utils.RandomInteger( 0, W ), nk.Utils.RandomInteger( 0, H ), p );
      g.data.mass = mass;
      g.data.body = {
        relative: g.position,
        anchor: new nk.Vector2D(),
        shape: g.path,
        mass: mass,
        velocity: new nk.Vector2D( nk.Utils.RandomInteger( -4, 4 ), nk.Utils.RandomInteger( -4, 4 ) )
      };
      g.ComputeBounds();
      g.data.timer = new nk.Timer();
      g.data.timer.onFinish.Add( function () {

        p.style.fill.applied = false;
        g.alpha = 1.0;
      
      } );
      g.data.timer.onStart.Add( function () {

        p.style.fill.applied = true;
        g.alpha = 0.8;
      
      } );
      colliders.push( g );
      stage.AddChild( g );
      objs.push( g.bounds );
    
    }

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsCircle.Relative.ElasticResponse;
    var result = new nk.Math.Collision2D.CirclevsCircle.Result();

    function Process () {

      var i = 0, j, l = colliders.length, collider, collidee, body1, body2, vel;
      root.Dump();
      objs.forEach( function ( obj ) {

        root.Add( obj );
      
      } );
      nodes = root.ConcatNodes();
      for ( i; i < l; ++i ) {

        collider = colliders[ i ];
        collider.data.timer.Process();
        body1 = collider.data.body;
        vel = body1.velocity;
        collider.position.AddV( vel );
        if ( collider.x + collider.path.radius >= W ) {

          vel.x = -Math.abs( vel.x );
        
        } else if ( collider.x - collider.path.radius <= 0 ) {

          vel.x = Math.abs( vel.x );
        
        }

        if ( collider.y + collider.path.radius >= H ) {

          vel.y = -Math.abs( vel.y );

        } else if ( collider.y - collider.path.radius <= 0 ) {

          vel.y = Math.abs( vel.y );
        
        }

        var convergence = root.Converge( collider.bounds );

        for ( j = 0; j < convergence.length; ++j ) {

          collidee = convergence[ j ].belongsTo;
          body2 = collidee.data.body;
          if ( collidee !== collider ) {

            result.occured = false;
            Collide( body1, body2, result );
            if ( result.occured === true ) {

              collider.data.timer.Start( 10 );
              collidee.data.timer.Start( 10 );
              Response( body1, body2, result );
            
            }
          
          }
        
        }

        collider.ComputeBounds();
      
      }

      nodes.forEach( function ( node ) {

        nk.Debug.Draw.AABB2D( rc, node.aabb, { noFill: true } );
      
      } );
      fps.text = Math.round( stage.ticker.GetTPS() );
    
    }

    stage.onProcess.Add( Process, window );

    for ( var i = 50; i--; ) {

      Collider();
    
    }

    stage.AddChild( fps );

    document.body.removeChild( buttonContainer );
  
  }

};
