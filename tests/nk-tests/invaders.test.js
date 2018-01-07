module.exports = function () {

  var buttonContainer = document.getElementById( 'buttons' );
  var button = document.createElement( 'input' );
  button.setAttribute( 'value', 'Invaders' );
  button.setAttribute( 'type', 'button' );
  button.addEventListener( 'click', Run );
  buttonContainer.appendChild( button );

  function Run () {

    var c = document.getElementsByTagName( 'canvas' )[ 0 ];
    c.setAttribute( 'width', 1024 );
    c.setAttribute( 'height', 800 );
    c.style.border = '2px solid black';
    c.style.display = 'initial';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '50%';
    c.style.transform = 'translateX(-50%)';

    var W = c.width, HW = W * 0.5;
    var H = c.height;

    var RI = nk.Utils.RandomInteger;
    var RF = nk.Utils.RandomFloat;
    var COLLIDE = nk.Math.Collision2D.AABB2DvsAABB2D.Relative.Collide;
    var SPREAD = nk.Math.Spread;

    var stage = new nk.Stage2D( c, 0, 0, true, true );
    stage.gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    var pc = new nk.GLTextureProgramController( stage.gl );

    var worldBounds = new nk.AABB2D();
    stage.ComputeBounds();
    worldBounds.SetC( stage.bounds );

    var playerBulletPool = new nk.Pool();
    var enemyPool = new nk.Pool();
    var particlePool = new nk.Pool();
    var explosionPool = new nk.Pool();

    var worldScale = new nk.Vector2D( 2.0, 2.0 );
    var ship = null;
    var particles = [];
    var explosions = [];
    var playerBullets = [];
    var enemies = [];
    var shields = [];

    var shieldHealth = 3;
    var numShields = 22;

    var spritesheet = null;

    var shieldVerticalPosition = 500;

    var enemySpawnRate = 2;
    var enemySpeed = 1.5;
    var enemyHealth = 5;

    var root = new nk.QuadtreeNode( worldBounds, 0, 5, 5 );

    var spritesheetLoader = new nk.SpritesheetLoader(
      [
        {
          id: 'sheet',
          image: {
            src: './../assets/images/invaders/invaders.png'
          },
          data: {
            src: './../assets/xhr/invaders.json',
            type: 'json'
          }
        }
      ],
      function() {

        spritesheet = spritesheetLoader.GetSpritesheet( 'sheet' );
        spritesheet.GenerateFrames();

        go();
      
      }
    );

    function go () {

      stage.ticker.StartAF();
      pc.BindBasicTexture( spritesheet.basicTexture );
      playerBulletPool.Flood( function () {

        var b = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Bullet' ).Apply( b );
        b.scale.SetV( worldScale );
        b.UpdateShape( new nk.AABB2D( 0, 0, 8, 8 ) );
        b.rotation = RF( 0, Math.PI * 2 );
        b.anchor.Set( 0.5 );
        b.data.velocity = new nk.Vector2D();
        b.data.body = {
          relative: b.position,
          shape: b.shape,
          anchor: b.anchor
        };
        b.UpdateTextureTransform();
        return b;
      
      }, 5000 );
      enemyPool.Flood( function () {

        var e = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Enemy' + RI( 1, 2 ) ).Apply( e );
        e.scale.SetV( worldScale );
        e.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        e.anchor.Set( 0.5 );
        e.data.velocity = new nk.Vector2D();
        e.data.body = {
          relative: e.position,
          shape: e.shape,
          anchor: e.anchor
        };
        e.UpdateTextureTransform();
        return e;
      
      }, 1000 );
      particlePool.Flood( function() {

        var p = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Particle' ).Apply( p );
        p.scale.SetV( worldScale );
        p.UpdateShape( new nk.AABB2D( 0, 0, 4, 4 ) );
        p.anchor.Set( 0.5 );
        p.data.velocity = new nk.Vector2D();
        p.data.acceleration = new nk.Vector2D();
        p.UpdateTextureTransform();
        return p;
      
      }, 5000 );
      explosionPool.Flood( function() {

        var e = new nk.Sprite( 0, 0, pc );
        var a = e.CreateAnimation( {
          spritesheet: spritesheet,
          id: 'explode',
          frames: [
            'Explo-f1',
            'Explo-f2',
            'Explo-f3',
            'Explo-f4'
          ],
          rate: 6
        } );
        a.onEnd.Add( onExplosionDone, e );
        a.overrideFrameRate = true;
        e.scale.SetV( worldScale );
        e.rotation = RF( 0, Math.PI * 2 );
        e.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        e.anchor.Set( 0.5 );
        e.UpdateTextureTransform();
        return e;
      
      }, 200 );

      function onExplosionDone() {

        this.animationController.currentAnimation.Reset();
        this.Detach();
        explosions.fickleSplice( explosions.indexOf( this ) );
        explosionPool.Store( this );
      
      }

      createShip();
      createShields();
      setupListeners();
      setupProcess();
    
    }

    function createShip () {

      if ( ship ) return;
      ship = new nk.Sprite( 0, 0, pc );
      spritesheet.GetFrameById( 'Ship' ).Apply( ship );
      console.log( ship );
      ship.scale.SetV( worldScale );
      ship.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
      ship.anchor.Set( 0.5 );
      ship.x = HW;
      ship.y = H - ship.height * 0.5;
      ship.data.velocity = new nk.Vector2D();
      ship.data.moveSpeed = 8;
      ship.data.fire = false;
      ship.data.fireRate = 2;
      ship.data.fireTimer = 0;
      ship.data.bulletsPerBlast = 15;
      stage.AddChild( ship );

      ship.UpdateTextureTransform();
    
    }

    function createPlayerBullet () {

      var i = ship.data.bulletsPerBlast;

      createExplosion( ship.x + RF( -100, 100 ), ship.y + RF( -100, -10 ) );

      while ( i-- ) {

        var b = playerBulletPool.Retrieve();
        b.x = SPREAD( ship.x, ship.data.bulletsPerBlast, 3, i );
        b.y = ship.y - ship.height * 0.5;
        b.data.velocity.x = 0;
        b.data.velocity.y = RF( -25, -5 );

        if ( b.data.velocity.y > 0 ) {

          b.data.velocity.y = -b.data.velocity.y;
        
        }

        b.data.lifeSpan = 150;
        playerBullets.push( b );
        stage.AddChild( b );
      
      }
    
    }

    function createEnemy () {

      var e = enemyPool.Retrieve();
      e.x = RF( 0, W );
      e.y = 0 - e.height * 0.5;
      e.data.velocity.x = 0;
      e.data.velocity.y = enemySpeed;
      e.data.health = enemyHealth;
      enemies.push( e );
      stage.AddChild( e );
    
    }

    function createShields () {

      for ( var i = 0; i < numShields; ++i ) {

        var s = new nk.Sprite( 0, 0, pc );
        spritesheet.GetFrameById( 'Shield-f1' ).Apply( s );
        s.transformAutomaticUpdate = false;
        s.scale.SetV( worldScale );
        s.UpdateShape( new nk.AABB2D( 0, 0, 16, 16 ) );
        s.anchor.Set( 0.5 );
        s.data.health = shieldHealth;
        s.data.body = {
          relative: s.position,
          shape: s.shape,
          anchor: s.anchor
        };
        s.x = nk.Math.Spread( HW, numShields, s.width * 1.2, i );
        s.y = shieldVerticalPosition;

        shields.push( s );
        stage.AddChild( s );

        s.UpdateTextureTransform();
      
      }
    
    }

    function createParticles( _x, _y, _amount ) {

      for ( var i = 0; i < _amount; ++i ) {

        var p = particlePool.Retrieve();
        p.position.Set( _x, _y );
        p.data.velocity.Set( RF( -10, 10 ), RF( -10, 10 ) );
        p.data.acceleration.Set( RF( 0.9, 0.95 ), RF( 1, 1 ) );
        p.data.lifeSpan = RI( 30, 100 );
        particles.push( p );
        stage.AddChild( p );
      
      }
    
    }

    function createExplosion( _x, _y ) {

      var e = explosionPool.Retrieve();
      e.position.Set( _x, _y );
      e.animationController.PlayAnimation( 'explode' );
      explosions.push( e );
      stage.AddChild( e );
    
    }

    function setupListeners () {

      stage.keyboard.onDown.Add( onKeyDown, ship );
      stage.keyboard.onUp.Add( onKeyUp, ship );

      function onKeyDown ( event ) {

        var kc = event.data.keyCode;

        // console.log( kc );
        switch ( kc ) {

          case 37:
            this.data.moveLeft = true;
            break;
          case 39:
            this.data.moveRight = true;
            break;
          case 32:
            this.data.fire = true;
            break;
          default: break;
        
        }
      
      }

      function onKeyUp ( event ) {

        var kc = event.data.keyCode;

        switch ( kc ) {

          case 37:
            this.data.moveLeft = false;
            break;
          case 39:
            this.data.moveRight = false;
            break;
          case 32:
            this.data.fire = false;
            break;
          default: break;
        
        }
      
      }
    
    }

    function setupProcess () {

      stage.onProcess.Add( onProcess, stage );

      function onProcess () {

        handleShip();

        if ( RI( 1, enemySpawnRate ) === enemySpawnRate ) {

          createEnemy();
        
        }

        handleEnemies();
        root.Dump();

        for ( var i = 0, enemy; i < enemies.length; ++i ) {

          enemy = enemies[i];

          if ( enemy && enemy.bounds ) {

            root.Add( enemy.bounds );
          
          }
        
        }

        handlePlayerBullets();

        handleParticles();

        handleExplosions();

        if ( this.ticker.GetTPS() < 24 ) {

          console.log( this.ticker.GetTPS() );
        
        }
      
      }

      function handleShip () {

        var shipWHalf = ship.width * 0.5;

        if ( ship.data.moveLeft && ship.x > 0 + shipWHalf ) {

          ship.data.velocity.x = -ship.data.moveSpeed;
        
        } else if ( ship.data.moveRight && ship.x < W - shipWHalf ) {

          ship.data.velocity.x = ship.data.moveSpeed;
        
        } else {

          ship.data.velocity.x = 0;
        
        }

        ship.position.AddV( ship.data.velocity );

        if ( ship.x < 0 + shipWHalf ) {

          ship.x = 0 + shipWHalf;
        
        } else if ( ship.x > W - shipWHalf ) {

          ship.x = W - shipWHalf;
        
        }

        if ( ship.data.fire && ship.data.fireTimer === 0 ) {

          createPlayerBullet();
          ship.data.fireTimer = ship.data.fireRate;
        
        }

        if ( ship.data.fireTimer > 0 ) {

          ship.data.fireTimer--;
        
        }
      
      }

      function handleParticles() {

        for ( var i = 0, particle; i < particles.length; ++i ) {

          particle = particles[i];

          particle.position.AddV( particle.data.velocity );
          particle.data.velocity.MultiplyV( particle.data.acceleration );
  
          if ( --particle.data.lifeSpan <= 0 ) {
  
            particle.Detach();
            particles.fickleSplice( i );
            particlePool.Store( particle );
            
          }
        
        }
      
      }

      function handleExplosions() {

        for ( var i = 0, explosion; i < explosions.length; ++i ) {

          explosion = explosions[i];
          explosion.animationController.Process();
        
        }
      
      }

      function handlePlayerBullets () {

        for ( var i = 0, bullet; i < playerBullets.length; ++i ) {

          bullet = playerBullets[ i ];

          if ( bullet ) {

            bullet.position.AddV( bullet.data.velocity );

            if ( bullet.x > W - bullet.width * 0.5 || bullet.x < 0 + bullet.width * 0.5 ) {

              bullet.data.velocity.x = -bullet.data.velocity.x;
            
            }

            bullet.ComputeBounds();

            if ( --bullet.data.lifeSpan <= 0 ) {

              bullet.Detach();
              playerBullets.fickleSplice( i );
              playerBulletPool.Store( bullet );
            
            } else {

              handlePlayerBullet_EnemyCollision( bullet, i );
            
            }
          
          }

        }
      
      }

      function handleEnemies () {

        for ( var i = 0, enemy; i < enemies.length; ++i ) {

          enemy = enemies[ i ];

          if ( enemy ) {

            enemy.position.AddV( enemy.data.velocity );
            enemy.ComputeBounds();

            if ( enemy.data.health <= 0 || enemy.y > H + enemy.height * 0.5 ) {

              createParticles( enemy.x, enemy.y, RI( 4, 80 ) );

              enemy.Detach();
              enemies.fickleSplice( i );
              enemyPool.Store( enemy );
            
            } else {

              handleEnemy_ShieldCollision( enemy, i );
            
            }
          
          }
        
        }
      
      }

      function handlePlayerBullet_EnemyCollision ( bullet, index ) {

        if ( bullet && bullet.x > 0 && bullet.x < W && bullet.y > 0 && bullet.y < H ) {

          var convergence = root.Converge( bullet.bounds );

          for ( var i = 0, enemy; i < convergence.length; ++i ) {

            enemy = convergence[ i ].belongsTo;

            if ( enemy ) {

              if ( COLLIDE( bullet.data.body, enemy.data.body ) ) {

                enemy.data.health--;
                bullet.Detach();
                playerBullets.fickleSplice( index );
                playerBulletPool.Store( bullet );
                break;
              
              }
            
            }
          
          }
        
        }
      
      }

      function handleEnemy_ShieldCollision ( enemy, index ) {

        if ( !enemy || enemy.y < shieldVerticalPosition - enemy.height ) return;

        for ( var i = 0, shield; i < shields.length; ++i ) {

          shield = shields[ i ];

          if ( shield ) {

            if ( COLLIDE( enemy.data.body, shield.data.body ) ) {

              createParticles( enemy.x, enemy.y, 15 );

              enemy.Detach();
              enemies.fickleSplice( index );
              enemyPool.Store( enemy );

              if ( --shield.data.health <= 0 ) {

                shield.Detach();
                shields.fickleSplice( i );
                break;
              
              } else {

                shield.clip.tl.x += 16;
                shield.UpdateTextureTransform();
              
              }

              break;
            
            }
          
          }
        
        }
      
      }

    }

    document.body.removeChild( buttonContainer );
  
  }

};
