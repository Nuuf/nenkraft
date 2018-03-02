module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Platformer' );
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

    var stage = new nk.Stage2D( { 
      canvas: c,
      x: HW,
      y: HH,
      halt: true
    } );

    var imageCache = new nk.ImageLoader( [ {
      id: 'character',
      src: nk.Utils.GenerateSimpleBase64Png( function () {

        var path = new nk.Path.AABB2D( 0, 0, 20, 20 );
        path.style.fill.applied = false;
        path.style.stroke.color = '#0F0';
        path.style.stroke.lineWidth = 3;
        var t = new nk.Graphic2D( 0, 0, path );
        return t;
      
      } )
    }, {
      id: 'platform',
      src: nk.Utils.GenerateSimpleBase64Png( function () {

        var path = new nk.Path.AABB2D( 0, 0, 50, 10 );
        path.style.fill.applied = false;
        path.style.stroke.lineWidth = 2;
        var t = new nk.Graphic2D( 0, 0, path );
        return t;
      
      } )
    } ], true );
    imageCache.onComplete.Add( function () {

      Start();
    
    } );

    var platforms = [];
    var character = null;
    var result = new nk.Math.Collision2D.AABB2DvsAABB2D.Result();

    function Start () {

      InitCharacter();
      InitPlatforms();
      stage.ticker.SetDesiredRate( 60 );
      stage.ticker.Start();
    
    }

    function Process () {

      if ( character.position.x > HW || character.position.x < -HW ) {

        character.position.x = 0;
      
      }

      if ( character.position.y > HH || character.position.y < -HH ) {

        character.position.y = 0;
      
      }

      if ( character.data.force.velocity.y > 0 ) {

        character.data.state.falling = true;
        character.data.state.onGround = false;
        character.data.state.ascending = false;
      
      } else if ( character.data.force.velocity.y < 0 ) {

        character.data.state.falling = false;
        character.data.state.onGround = false;
        character.data.state.ascending = true;
      
      }

      character.position.AddV( character.data.force.velocity );
      character.data.force.velocity.AddV( character.data.force.gravity );

      if ( character.data.move.left === true ) {

        character.position.SubtractV( character.data.force.move );
        character.data.state.moving = true;
      
      } else if ( character.data.move.right === true ) {

        character.position.AddV( character.data.force.move );
        character.data.state.moving = true;
      
      } else {

        character.data.state.moving = false;
      
      }

      if ( character.data.move.jump === true && character.data.state.onGround === true ) {

        character.data.force.velocity.AddV( character.data.force.jump );
      
      }

      for ( var i = 0, l = platforms.length; i < l; ++i ) {

        result.occured = false;
        nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide(
          character.data.collisionData,
          platforms[ i ].data.collisionData,
          result
        );

        if ( result.occured === true ) {

          if ( result.mtv.y < 0 && character.data.force.velocity.y > 0 ) {

            character.data.force.velocity.y = 0;
            character.data.state.onGround = true;
            character.data.state.falling = false;
            character.data.state.ascending = false;
          
          } else if ( result.mtv.y > 0 && character.data.force.velocity.y < 0 ) {

            character.data.force.velocity.y = 0;
          
          }

          character.position.AddV( result.mtv );
        
        }
      
      }
    
    }

    function InitCharacter () {

      character = new nk.Sprite( 0, 0, imageCache.GetBasicTexture( 'character' ) );
      character.anchor.Set( 0.5 );
      character.data.move = {
        left: false,
        right: false,
        jump: false
      };
      character.data.force = {
        move: new nk.Vector2D( 2, 0 ),
        jump: new nk.Vector2D( 0, -10 ),
        gravity: new nk.Vector2D( 0, 0.1982 ),
        velocity: new nk.Vector2D()
      };
      character.data.state = {
        onGround: false,
        moving: false,
        falling: false,
        ascending: false
      };
      character.data.collisionData = {
        shape: character.shape,
        relative: character.position,
        anchor: character.anchor
      };
      stage.AddChild( character );

      stage.onProcess.Add( Process, stage );
      stage.keyboard.onDown.Add( function ( _event ) {

        if ( _event.data.key === 'a' ) {

          character.data.move.left = true;
          character.data.move.right = false;
        
        } else if ( _event.data.key === 'd' ) {

          character.data.move.right = true;
          character.data.move.false = false;
        
        }

        if ( _event.data.key === 'w' ) {

          character.data.move.jump = true;
        
        }
      
      } );
      stage.keyboard.onUp.Add( function ( _event ) {

        if ( _event.data.key === 'a' ) {

          character.data.move.left = false;
        
        } else if ( _event.data.key === 'd' ) {

          character.data.move.right = false;
        
        }

        if ( _event.data.key === 'w' ) {

          character.data.move.jump = false;
        
        }
      
      } );
    
    }

    function InitPlatforms () {

      var i = 200;

      while ( i-- ) {

        var platform = new nk.Sprite( nk.Utils.RandomInteger( -HW, HW ), nk.Utils.RandomInteger( -HH, HH ), imageCache.GetBasicTexture( 'platform' ) );
        platform.data.collisionData = {
          shape: platform.shape,
          relative: platform.position,
          anchor: platform.anchor
        };
        platforms.push( platform );
        stage.AddChild( platform );
      
      }
    
    }

    document.body.removeChild( buttonContainer );
  
  }

};
