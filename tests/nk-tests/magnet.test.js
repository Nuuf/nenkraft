module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Magnet' );
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

    var stage = new nk.Stage2D( c, 0, 0 );

    var magnet = new nk.Plaingraphic2D( HW, HH, new nk.Path.Circle( 0, 0, 30 ) );
    magnet.data.body = {
      relative: magnet.position,
      anchor: new nk.Vector2D(),
      shape: magnet.path,
      mass: 1,
      velocity: new nk.Vector2D()
    };
    var dragIt = false;
    var startDrag = new nk.Vector2D();
    var dragOffset = new nk.Vector2D();

    var particles = [];

    stage.AddChild( magnet );

    function CreateParticle () {

      var p = new nk.Plaingraphic2D( nk.Utils.RandomInteger( 0, W ), nk.Utils.RandomInteger( 0, H ), new nk.Path.Circle( 0, 0, 6 ) );
      p.data.force = {
        velocity: new nk.Vector2D(),
        friction: new nk.Vector2D( 0.99, 0.99 )
      };
      p.data.body = {
        relative: p.position,
        anchor: new nk.Vector2D(),
        shape: p.path,
        mass: 1,
        velocity: p.data.force.velocity
      };
      stage.AddChild( p );
      particles.push( p );
      p.data.sepArr = particles;
    
    }

    ( function () {

      var i = 500;
      while ( i-- ) {

        CreateParticle();
      
      }
    
    } )();

    var Collide = nk.Math.Collision2D.CirclevsCircle.Relative.Collide;
    var result = new nk.Math.Collision2D.CirclevsCircle.Result();

    stage.onProcess.Add( function () {

      particles.forEach( function ( particle ) {

        var vel = particle.data.force.velocity;
        nk.Math.AttractRepel( particle.position, magnet.position, vel, magnet.path.radius * 3, 1 );
        particle.position.AddV( vel );
        vel.MultiplyV( particle.data.force.friction );
        if ( particle.x + particle.path.radius >= W ) {

          vel.x = -Math.abs( vel.x );
          particle.x = W - particle.path.radius;
        
        } else if ( particle.x - particle.path.radius <= 0 ) {

          vel.x = Math.abs( vel.x );
          particle.x = 0 + particle.path.radius;
        
        }

        if ( particle.y + particle.path.radius >= H ) {

          vel.y = -Math.abs( vel.y );
          particle.y = H - particle.path.radius;
        
        } else if ( particle.y - particle.path.radius <= 0 ) {

          vel.y = Math.abs( vel.y );
          particle.y = 0 + particle.path.radius;
        
        }

        result.occured = false;
        Collide( magnet.data.body, particle.data.body, result );
        if ( result.occured === true ) {

          result.mtv.Multiply( result.mtd, result.mtd );
          particle.position.AddV( result.mtv );
          vel.Set( 0, 0 );
        
        }
      
      } );
    
    } );
    stage.mouse.onMove.Add( function ( event ) {

      if ( dragIt === true ) {

        magnet.x = event.data.position.x - startDrag.x + dragOffset.x;
        magnet.y = event.data.position.y - startDrag.y + dragOffset.y;
      
      }
    
    } );
    stage.mouse.onDown.Add( function ( event ) {

      var p = event.data.position;
      if ( magnet.IntersectsPoint( p ) ) {

        startDrag.SetV( p );
        dragOffset.SetV( magnet );
        dragIt = true;
      
      }

      event.stopPropagation = true;
    
    } );
    stage.mouse.onUp.Add( function ( ) {

      dragIt = false;
    
    } );

    document.body.removeChild( buttonContainer );
  
  }

};
