module.exports = function () {
  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Playground 5' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', RunPlayground_5 );
  buttonContainer.appendChild( button );

  function RunPlayground_5 () {
    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', window.innerWidth );
    c.setAttribute( 'height', window.innerHeight );
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    var rc = c.getContext( '2d' );

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.ticker.StartAF();

    var fps = new nk.Text( 0, 0, '' );

    var colliders = [];

    function Collider () {
      var mass = nk.Utils.RandomInteger( 5, 20 );
      var p = new nk.Path.Circle( 0, 0, mass );
      p.style.fill.applied = false;
      p.style.stroke.strokeStyle = new nk.Color( nk.Utils.RandomInteger( 100, 255 ), 0, nk.Utils.RandomInteger( 100, 255 ), 1 ).value;
      p.style.stroke.lineWidth = mass / 5;
      var g = new nk.Graphic2D( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ), p );
      g.data.mass = mass;
      g.data.body = {
        relative: g.position,
        anchor: g.anchor,
        shape: g.path,
        mass: mass,
        velocity: new nk.Vector2D( nk.Utils.RandomInteger( -5, 5 ), nk.Utils.RandomInteger( -5, 5 ) )
      };
      colliders.push( g );
      stage.AddChild( g );
    }

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var Response = nk.Math.Collision2D.CirclevsCircle.Relative.ElasticResponse;

    function Process () {
      var i = 0, j, l = colliders.length, collider, collidee, body1, body2, vel;
      for ( i; i < l; ++i ) {
        collider = colliders[ i ];
        vel = collider.data.body.velocity;
        collider.position.AddV( vel );
        if ( collider.x >= HW ) {
          vel.x = -Math.abs( vel.x );
        } else if ( collider.x <= -HW ) {
          vel.x = Math.abs( vel.x );
        }
        if ( collider.y >= HH ) {
          vel.y = -Math.abs( vel.y );

        } else if ( collider.y <= -HH ) {
          vel.y = Math.abs( vel.y );
        }
      }
      l = colliders.length;
      for ( i = 0; i < l; ++i ) {
        collider = colliders[ i ];
        body1 = collider.data.body;
        for ( j = 0; j < l; ++j ) {
          collidee = colliders[ j ];
          body2 = collidee.data.body;
          if ( collidee !== collider ) {
            var result = Collide( body1, body2 );
            if ( result ) {
              Response( body1, body2, result );
            }
          }
        }
      }
      fps.text = stage.ticker.GetTPS();
    }

    stage.onProcess.Add( Process, window );

    for ( var i = 150; i--; ) {
      Collider();
    }

    stage.AddChild( fps );


    document.body.removeChild( buttonContainer );
  }
};
