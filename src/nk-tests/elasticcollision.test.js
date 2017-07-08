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

    var W = c.width, HW = W * 0.5;
    var H = c.height, HH = H * 0.5;

    var stage = new nk.Stage2D( c, HW, HH, true );
    stage.backgroundColor = 'rgba(255,255,255,0)';
    //stage.clear = false;
    stage.ticker.StartAF();

    var fps = new nk.Text( 0, 0, '' );
    fps.style.text.fillColor = '#000';
    fps.style.text.strokeColor = '#000';
    fps.style.text.font = '60px Arial';

    var colliders = [];

    function Collider () {
      var mass = nk.Utils.RandomInteger( 5, 60 );
      var p = new nk.Path.Circle( 0, 0, mass );
      p.style.fill.applied = false;
      p.style.stroke.color = new nk.Color( nk.Utils.RandomInteger( 100, 255 ), 0, nk.Utils.RandomInteger( 100, 255 ), 1 ).value;
      p.style.stroke.lineWidth = mass / 5;
      var g = new nk.Graphic2D( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ), p );
      g.data.mass = mass;
      g.data.body = {
        relative: g.position,
        anchor: new nk.Vector2D(),
        shape: g.path,
        mass: mass,
        velocity: new nk.Vector2D( nk.Utils.RandomInteger( -9, 9 ), nk.Utils.RandomInteger( -9, 9 ) )
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
        if ( collider.x + collider.path.radius >= HW ) {
          vel.x = -Math.abs( vel.x );
        } else if ( collider.x - collider.path.radius <= -HW ) {
          vel.x = Math.abs( vel.x );
        }
        if ( collider.y + collider.path.radius >= HH ) {
          vel.y = -Math.abs( vel.y );

        } else if ( collider.y - collider.path.radius <= -HH ) {
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
      fps.text = Math.round( stage.ticker.GetTPS() );
    }

    stage.onProcess.Add( Process, window );

    for ( var i = 20; i--; ) {
      Collider();
    }

    stage.AddChild( fps );


    document.body.removeChild( buttonContainer );
  }
};